const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, makeInMemoryStore, proto } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const pino = require('pino');
const fs = require('fs-extra');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const readline = require('readline');
const compression = require('compression');
const helmet = require('helmet');
require('dotenv').config();

const config = require('./config/config');
const { handleMessage } = require('./commands/menu');
const logger = require('./lib/logger');
const { formatUptime, getSystemInfo } = require('./lib/helpers');
const { initDatabase } = require('./lib/database');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(compression());
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static('public'));

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        status: 'active',
        bot: config.botName,
        owner: config.ownerName,
        version: config.version,
        uptime: process.uptime(),
        plugins: config.totalPlugins,
        commands: config.totalCommands,
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

app.get('/stats', async (req, res) => {
    const systemInfo = await getSystemInfo();
    res.json({
        bot: config.botName,
        uptime: formatUptime(process.uptime()),
        memory: systemInfo,
        platform: process.platform,
        nodeVersion: process.version
    });
});

// Start server
app.listen(PORT, () => {
    console.log(chalk.green(`🌐 Web server running on port ${PORT}`));
    console.log(chalk.blue(`📊 Stats: http://localhost:${PORT}/stats`));
});

// Ensure directories exist
fs.ensureDirSync('./sessions');
fs.ensureDirSync('./temp');
fs.ensureDirSync('./logs');
fs.ensureDirSync('./database');

// Bot start time
const startTime = Date.now();

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Store for chat data
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

// Initialize database
initDatabase().catch(console.error);

// Display banner
console.log(chalk.bold.cyan(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║     🤖 ${config.botName} v${config.version}                    ║
║     Ultimate WhatsApp Bot with ${config.totalPlugins}+ Plugins     ║
║                                                          ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║   👑 Owner: ${config.ownerName.padEnd(40)}║
║   📚 Plugins: ${config.totalPlugins}                        ║
║   🎯 Commands: ${config.totalCommands}                      ║
║   🎨 Features: Downloader, AI, Group, Fun, Anime,        ║
║               Converter, Tools, Economy, NSFW, Owner     ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
`));

// Ask for connection method
console.log(chalk.bold.yellow('\n📱 Choose connection method:'));
console.log(chalk.white('1. 📱 QR Code (scan with WhatsApp)'));
console.log(chalk.white('2. 🔐 Pairing Code (enter phone number)'));
console.log(chalk.white('3. 🔄 Auto (use existing session)'));

rl.question(chalk.cyan('\nEnter choice (1-3): '), async (choice) => {
    if (choice === '2') {
        rl.question(chalk.cyan('📞 Enter phone number (with country code, e.g., 921234567890): '), async (phoneNumber) => {
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
            if (phoneNumber.length < 10) {
                console.log(chalk.red('❌ Invalid phone number!'));
                process.exit(1);
            }
            await startBot(true, phoneNumber);
            rl.close();
        });
    } else if (choice === '3') {
        await startBot(false);
        rl.close();
    } else {
        await startBot(false);
        rl.close();
    }
});

// Main bot function
async function startBot(usePairingCode = false, phoneNumber = '') {
    const { state, saveCreds } = await useMultiFileAuthState('sessions');
    
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: !usePairingCode,
        logger: pino({ level: 'silent' }),
        browser: [config.botName, 'Chrome', config.version],
        syncFullHistory: true,
        defaultQueryTimeoutMs: undefined,
        generateHighQualityLinkPreview: true,
        markOnlineOnConnect: true
    });

    store.bind(sock.ev);

    // Handle pairing code
    if (usePairingCode && phoneNumber && !sock.authState.creds.registered) {
        setTimeout(async () => {
            try {
                const code = await sock.requestPairingCode(phoneNumber);
                console.log(chalk.bold.green('\n╔══════════════════════════════════════╗'));
                console.log(chalk.bold.yellow('         🔐 PAIRING CODE'));
                console.log(chalk.bold.green('╚══════════════════════════════════════╝'));
                console.log(chalk.bold.cyan(`\n📱 Phone: +${phoneNumber}`));
                console.log(chalk.bold.white(`\n🔑 Code: ${chalk.bold.bgBlack.white(` ${code.match(/.{1,4}/g).join('-')} `)}\n`));
                console.log(chalk.yellow('⏱️  Code expires in 60 seconds'));
                console.log(chalk.cyan('\n📝 How to use:'));
                console.log(chalk.white('1. Open WhatsApp Settings'));
                console.log(chalk.white('2. Tap "Linked Devices"'));
                console.log(chalk.white('3. Tap "Link a Device"'));
                console.log(chalk.white('4. Enter the pairing code above\n'));
            } catch (error) {
                console.error(chalk.red('Error generating code:'), error);
            }
        }, 2000);
    }

    // Handle connection updates
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;
        
        if (qr && !usePairingCode) {
            console.log(chalk.bold.green('\n╔══════════════════════════════════════╗'));
            console.log(chalk.bold.yellow('         📱 SCAN QR CODE'));
            console.log(chalk.bold.green('╚══════════════════════════════════════╝'));
            console.log(chalk.cyan('\nScan the QR code with WhatsApp\n'));
        }
        
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log(chalk.red(`Connection closed, reconnecting: ${shouldReconnect}`));
            
            if (shouldReconnect) {
                setTimeout(() => startBot(usePairingCode, phoneNumber), 5000);
            } else {
                console.log(chalk.red('Session expired. Please restart bot to scan again.'));
            }
        } else if (connection === 'open') {
            console.log(chalk.bold.green('\n╔══════════════════════════════════════╗'));
            console.log(chalk.bold.yellow(`      ✅ ${config.botName} CONNECTED`));
            console.log(chalk.bold.green('╚══════════════════════════════════════╝'));
            console.log(chalk.cyan(`\n👤 Connected as: ${sock.user?.name || sock.user?.id}`));
            console.log(chalk.cyan(`📊 Plugins: ${config.totalPlugins} | Commands: ${config.totalCommands}`));
            console.log(chalk.cyan(`⚡ Type ${config.prefix}menu to start!\n`));
        }
    });

    // Handle credentials update
    sock.ev.on('creds.update', saveCreds);

    // Handle incoming messages
    sock.ev.on('messages.upsert', async ({ messages }) => {
        const m = messages[0];
        
        if (!m.message || m.key.fromMe) return;
        
        const sender = m.key.remoteJid;
        const messageText = m.message.conversation || 
                           m.message.extendedTextMessage?.text || 
                           m.message.imageMessage?.caption || 
                           '';

        // Handle commands
        if (messageText.startsWith(config.prefix)) {
            await handleMessage(sock, m, messageText, sender, startTime);
        }
    });

    // Handle presence updates
    sock.ev.on('presence.update', (update) => {
        // Optional: Track user presence
    });

    // Handle group updates
    sock.ev.on('group-participants.update', async (update) => {
        // Handle welcome/leave messages
        const { id, participants, action } = update;
        
        if (action === 'add') {
            for (let participant of participants) {
                await sock.sendMessage(id, {
                    text: `👋 Welcome @${participant.split('@')[0]} to the group!\n\nType ${config.prefix}menu to see available commands.`,
                    mentions: [participant]
                });
            }
        }
    });

    return sock;
}

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log(chalk.yellow('\n\n🛑 Shutting down gracefully...'));
    rl.close();
    process.exit(0);
});

process.on('uncaughtException', (err) => {
    console.error(chalk.red('Uncaught Exception:'), err);
});

process.on('unhandledRejection', (err) => {
    console.error(chalk.red('Unhandled Rejection:'), err);
});
