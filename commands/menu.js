const config = require('../config/config');
const { formatUptime, getSystemInfo } = require('../lib/helpers');
const plugins = require('../plugins');

// Store user sessions
const userSessions = new Map();

// Main menu handler
async function handleMessage(sock, msg, messageText, sender, startTime) {
    const command = messageText.slice(config.prefix.length).split(' ')[0].toLowerCase();
    const args = messageText.split(' ').slice(1);
    const fullArgs = args.join(' ');

    // Handle menu command
    if (command === 'menu' || command === 'help') {
        await sendMainMenu(sock, sender, startTime);
        return;
    }

    // Handle numeric menu navigation
    if (/^[0-9]+$/.test(command) && command.length <= 2) {
        const menuNumber = parseInt(command);
        await handleMenuNavigation(sock, sender, menuNumber);
        return;
    }

    // Handle back to menu
    if (command === 'back' || command === 'main') {
        await sendMainMenu(sock, sender, startTime);
        return;
    }

    // Route to plugin handlers
    const plugin = plugins.get(command);
    if (plugin) {
        try {
            await plugin.execute(sock, msg, args, fullArgs, sender);
        } catch (error) {
            console.error(`Plugin error: ${command}`, error);
            await sock.sendMessage(sender, { text: `❌ Error: ${error.message}` });
        }
    } else {
        await sock.sendMessage(sender, {
            text: `❌ Unknown command!\n\nType ${config.prefix}menu to see available commands.\n\n💡 Tip: Use numbers to navigate menus!`
        });
    }
}

// Send main menu with buttons
async function sendMainMenu(sock, sender, startTime) {
    const systemInfo = await getSystemInfo();
    const uptime = formatUptime((Date.now() - startTime) / 1000);
    const now = new Date();
    
    // Create main menu text
    let menuText = `╔══════════════════════════════════════════════════════════╗
║  🤖 *${config.botName}* - Ultimate WhatsApp Bot                ║
║  ᴠᴇʀsɪᴏɴ: ${config.version} | ᴘʟᴜɢɪɴs: ${config.totalPlugins}+          ║
╚══════════════════════════════════════════════════════════╝

╔════❰ 🤖 ʙᴏᴛ ɪɴғᴏʀᴍᴀᴛɪᴏɴ ❱════╗
║ 👑 ᴏᴡɴᴇʀ: ${config.ownerName}
║ 📛 ʙᴏᴛ: ${config.botName}
║ 🔣 ᴘʀᴇғɪx: \`${config.prefix}\`
║ 📳 ᴍᴏᴅᴇ: ${config.mode.toUpperCase()}
║ ⏱️ ᴜᴘᴛɪᴍᴇ: ${uptime}
║ 📚 ᴘʟᴜɢɪɴs: ${config.totalPlugins} | ᴄᴏᴍᴍᴀɴᴅs: ${config.totalCommands}
╚══════════════════════════════════════════════════════════╝

╔═════❰ 💻 sʏsᴛᴇᴍ sᴛᴀᴛᴜs ❱═════╗
║ 🧠 ʀᴀᴍ: ${systemInfo.ramUsed}ᴍʙ / ${systemInfo.ramTotal}ɢʙ
║ 🖥️ ᴘʟᴀᴛғᴏʀᴍ: ${systemInfo.platform}
║ 📅 ᴅᴀᴛᴇ: ${now.toLocaleDateString()}
║ 🕐 ᴛɪᴍᴇ: ${now.toLocaleTimeString()}
╚══════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════╗
║                      📋 *MAIN MENU*                       ║
║           Select a category by replying with number       ║
╠══════════════════════════════════════════════════════════╣`;

    // Add categories
    for (const category of config.menuCategories) {
        menuText += `\n║  ${category.id.toString().padStart(2)}️⃣  ${category.emoji} ${category.name.padEnd(25)} (${category.plugins} plugins)`;
    }

    menuText += `\n╠══════════════════════════════════════════════════════════╣
║                                                              ║
║  💡 *How to use:*                                            ║
║  • Reply with a number (1-10) to see category commands       ║
║  • Type \`${config.prefix}download <url>\` to download           ║
║  • Type \`${config.prefix}help <command>\` for command help      ║
║                                                              ║
╚══════════════════════════════════════════════════════════╝

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙸𝚂𝚁𝙰𝙴 𝚄𝙼𝙰𝚁𝙸* | ᴛʏᴘᴇ 0 ᴛᴏ ʀᴇғʀᴇsʜ`;

    await sock.sendMessage(sender, { text: menuText });
    userSessions.set(sender, { currentMenu: 'main', lastMenu: Date.now() });
}

// Handle menu navigation
async function handleMenuNavigation(sock, sender, menuNumber) {
    const category = config.menuCategories.find(c => c.id === menuNumber);
    
    if (!category) {
        await sock.sendMessage(sender, { text: '❌ Invalid category! Please reply with a number between 1-10.' });
        return;
    }
    
    // Get plugins for this category
    const categoryPlugins = plugins.getByCategory(category.name.toLowerCase());
    
    let menuText = `╔══════════════════════════════════════════════════════════╗
║  ${category.emoji} *${category.name.toUpperCase()} MENU*                    ║
║  ${category.plugins} plugins available                                  ║
╚══════════════════════════════════════════════════════════╝\n\n`;
    
    if (categoryPlugins.length === 0) {
        menuText += `No plugins available in this category yet.\n\n`;
    } else {
        for (const plugin of categoryPlugins) {
            menuText += `┌─────────────────────────────────────────────────────────┐\n`;
            menuText += `│ ${plugin.emoji} *${plugin.name}*\n`;
            menuText += `│ 📝 ${plugin.description}\n`;
            menuText += `│ 🔧 Usage: \`${config.prefix}${plugin.command} ${plugin.example || '<input>'}\`\n`;
            menuText += `└─────────────────────────────────────────────────────────┘\n\n`;
        }
    }
    
    menuText += `╔══════════════════════════════════════════════════════════╗
║                                                              ║
║  💡 *Quick Commands:*                                         ║
║  • Type \`${config.prefix}menu\` - Back to main menu                ║
║  • Type \`${config.prefix}help <command>\` - Command help          ║
║  • Reply with 0 - Refresh this menu                           ║
║                                                              ║
╚══════════════════════════════════════════════════════════╝

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙸𝚂𝚁𝙰𝚁 𝚄𝙼𝙰𝚁𝙸 *`;

    await sock.sendMessage(sender, { text: menuText });
    userSessions.set(sender, { currentMenu: `category_${menuNumber}`, lastMenu: Date.now() });
}

module.exports = { handleMessage };
