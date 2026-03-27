module.exports = {
    name: 'Broadcast Message',
    command: 'broadcast',
    category: 'owner',
    emoji: '📢',
    description: 'Send message to all groups (Owner only)',
    example: '<message>',
    
    async execute(sock, msg, args, fullArgs, sender) {
        const isOwner = sender === `${process.env.OWNER_NUMBER}@s.whatsapp.net`;
        
        if (!isOwner) {
            await sock.sendMessage(sender, { text: '❌ This command is only for the bot owner!' });
            return;
        }
        
        if (!fullArgs) {
            await sock.sendMessage(sender, { text: `❌ Please provide a message to broadcast!\n\nUsage: .broadcast <message>` });
            return;
        }
        
        await sock.sendMessage(sender, { text: '📢 Broadcasting message to all groups...' });
        
        try {
            const groups = await sock.groupFetchAllParticipating();
            let sent = 0;
            
            for (const groupId in groups) {
                try {
                    await sock.sendMessage(groupId, {
                        text: `📢 *BROADCAST*\n\n${fullArgs}\n\n_Message from owner_`
                    });
                    sent++;
                    await new Promise(resolve => setTimeout(resolve, 2000)); // Rate limit
                } catch (error) {
                    console.error(`Failed to send to ${groupId}:`, error);
                }
            }
            
            await sock.sendMessage(sender, { text: `✅ Broadcast sent to ${sent} groups!` });
        } catch (error) {
            await sock.sendMessage(sender, { text: `❌ Error: ${error.message}` });
        }
    }
};

module.exports.restart = {
    name: 'Restart Bot',
    command: 'restart',
    category: 'owner',
    emoji: '🔄',
    description: 'Restart the bot (Owner only)',
    example: '',
    
    async execute(sock, msg, args, fullArgs, sender) {
        const isOwner = sender === `${process.env.OWNER_NUMBER}@s.whatsapp.net`;
        
        if (!isOwner) {
            await sock.sendMessage(sender, { text: '❌ This command is only for the bot owner!' });
            return;
        }
        
        await sock.sendMessage(sender, { text: '🔄 Restarting bot...' });
        process.exit(0);
    }
};
