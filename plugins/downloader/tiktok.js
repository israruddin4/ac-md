const axios = require('axios');

module.exports = {
    name: 'TikTok Downloader',
    command: 'tiktok',
    category: 'downloader',
    emoji: '🎵',
    description: 'Download TikTok videos without watermark',
    example: '<url>',
    
    async execute(sock, msg, args, fullArgs, sender) {
        if (!fullArgs) {
            await sock.sendMessage(sender, { 
                text: `❌ Please provide a TikTok URL!\n\nUsage: .tiktok <url>\nExample: .tiktok https://www.tiktok.com/@user/video/...` 
            });
            return;
        }
        
        await sock.sendMessage(sender, { text: '🎵 Downloading TikTok video...' });
        
        try {
            const response = await axios.get(`https://tiktok-downloader-download-tiktok-videos-without-watermark1.p.rapidapi.com/media-info/`, {
                params: { url: fullArgs },
                headers: {
                    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                    'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark1.p.rapidapi.com'
                }
            });
            
            if (response.data && response.data.video_data) {
                const data = response.data;
                const videoUrl = data.video_data.no_watermark;
                const author = data.author?.nickname || 'Unknown';
                const description = data.desc || '';
                
                await sock.sendMessage(sender, {
                    video: { url: videoUrl },
                    caption: `🎵 *TikTok Video*\n\n👤 Author: ${author}\n📝 ${description.substring(0, 100)}${description.length > 100 ? '...' : ''}\n\n✅ Downloaded without watermark!`
                });
            } else {
                await sock.sendMessage(sender, { text: '❌ Failed to download TikTok video!' });
            }
        } catch (error) {
            await sock.sendMessage(sender, { text: `❌ Error: ${error.message}` });
        }
    }
};
