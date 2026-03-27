const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
    name: 'Sticker Maker',
    command: 'sticker',
    category: 'converter',
    emoji: '🎨',
    description: 'Convert image/video to sticker',
    example: 'reply to image',
    
    async execute(sock, msg, args, fullArgs, sender) {
        const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
        
        if (!quoted || (!quoted.imageMessage && !quoted.videoMessage)) {
            await sock.sendMessage(sender, { 
                text: `❌ Please reply to an image or video with .sticker to create a sticker!\n\nUsage: Reply to an image and type .sticker` 
            });
            return;
        }
        
        await sock.sendMessage(sender, { text: '🎨 Creating sticker...' });
        
        try {
            const media = quoted.imageMessage || quoted.videoMessage;
            const buffer = await sock.downloadMediaMessage(msg);
            
            // For images, we can optimize them
            if (quoted.imageMessage) {
                const optimized = await sharp(buffer)
                    .resize(512, 512, { fit: 'cover' })
                    .png()
                    .toBuffer();
                
                await sock.sendMessage(sender, {
                    sticker: optimized
                });
            } else {
                // For videos, send as is
                await sock.sendMessage(sender, {
                    sticker: buffer
                });
            }
        } catch (error) {
            await sock.sendMessage(sender, { text: `❌ Failed to create sticker: ${error.message}` });
        }
    }
};

module.exports.emojimix = {
    name: 'Emoji Mixer',
    command: 'emojimix',
    category: 'converter',
    emoji: '🔀',
    description: 'Mix two emojis',
    example: '🐱+🐶',
    
    async execute(sock, msg, args, fullArgs, sender) {
        const emojis = fullArgs.split('+');
        
        if (emojis.length !== 2) {
            await sock.sendMessage(sender, { 
                text: `❌ Please provide two emojis!\n\nUsage: .emojimix 🐱+🐶\nExample: .emojimix 😊+❤️` 
            });
            return;
        }
        
        try {
            const response = await fetch(`https://emojimix-api.com/${encodeURIComponent(emojis[0])}/${encodeURIComponent(emojis[1])}`);
            const buffer = await response.buffer();
            
            await sock.sendMessage(sender, {
                image: buffer,
                caption: `✨ *Emoji Mix*\n\n${emojis[0]} + ${emojis[1]} = ?`
            });
        } catch (error) {
            await sock.sendMessage(sender, { text: `❌ Couldn't mix these emojis!` });
        }
    }
};
