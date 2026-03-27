module.exports = {
    name: 'Group Management',
    command: 'grouplink',
    category: 'group',
    emoji: '👥',
    description: 'Get group invite link',
    example: '',
    
    async execute(sock, msg, args, fullArgs, sender) {
        try {
            const groupMetadata = await sock.groupMetadata(sender);
            const inviteCode = await sock.groupInviteCode(sender);
            
            await sock.sendMessage(sender, {
                text: `🔗 *Group Link*\n\n📛 ${groupMetadata.subject}\n👥 Members: ${groupMetadata.participants.length}\n🔗 https://chat.whatsapp.com/${inviteCode}`
            });
        } catch (error) {
            await sock.sendMessage(sender, { text: `❌ Error: ${error.message}` });
        }
    }
};

module.exports.promote = {
    name: 'Promote to Admin',
    command: 'promote',
    category: 'group',
    emoji: '⬆️',
    description: 'Promote user to admin',
    example: '@user',
    
    async execute(sock, msg, args, fullArgs, sender) {
        const quoted = msg.message?.extendedTextMessage?.contextInfo;
        
        if (!quoted?.participant) {
            await sock.sendMessage(sender, { text: '❌ Please reply to a user to promote!' });
            return;
        }
        
        try {
            await sock.groupParticipantsUpdate(sender, [quoted.participant], 'promote');
            await sock.sendMessage(sender, { text: `✅ User promoted to admin!` });
        } catch (error) {
            await sock.sendMessage(sender, { text: `❌ Error: ${error.message}` });
        }
    }
};

module.exports.demote = {
    name: 'Demote from Admin',
    command: 'demote',
    category: 'group',
    emoji: '⬇️',
    description: 'Demote admin to member',
    example: '@user',
    
    async execute(sock, msg, args, fullArgs, sender) {
        const quoted = msg.message?.extendedTextMessage?.contextInfo;
        
        if (!quoted?.participant) {
            await sock.sendMessage(sender, { text: '❌ Please reply to a user to demote!' });
            return;
        }
        
        try {
            await sock.groupParticipantsUpdate(sender, [quoted.participant], 'demote');
            await sock.sendMessage(sender, { text: `✅ User demoted from admin!` });
        } catch (error) {
            await sock.sendMessage(sender, { text: `❌ Error: ${error.message}` });
        }
    }
};

module.exports.tagall = {
    name: 'Tag All Members',
    command: 'tagall',
    category: 'group',
    emoji: '🏷️',
    description: 'Tag all group members',
    example: '<message>',
    
    async execute(sock, msg, args, fullArgs, sender) {
        const groupMetadata = await sock.groupMetadata(sender);
        const participants = groupMetadata.participants.map(p => p.id);
        const message = fullArgs || '📢 Attention everyone! کیسا لگا میرا مزاق😆';
        
        const mentionText = `${message}\n\n` + participants.map(p => `@${p.split('@')[0]}`).join(' ');
        
        await sock.sendMessage(sender, {
            text: mentionText,
            mentions: participants
        });
    }
};
