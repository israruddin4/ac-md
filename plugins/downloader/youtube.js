const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'YouTube Downloader',
    command: 'yt',
    category: 'downloader',
    emoji: '🎬',
    description: 'Download YouTube videos and audio',
    example: '<url>',
    
    async execute(sock, msg, args, fullArgs, sender) {
        if (!fullArgs) {
            await sock.sendMessage(sender, { 
                text: `❌ Please provide a YouTube URL or search term!\n\nUsage: .yt <url>\nExample: .yt https://youtube.com/watch?v=...` 
            });
            return;
        }
        
        await sock.sendMessage(sender, { text: '🎬 Processing YouTube video...' });
        
        try {
            // Check if it's a URL or search term
            let videoUrl = fullArgs;
            if (!fullArgs.includes('youtube.com') && !fullArgs.includes('youtu.be')) {
                const searchResults = await ytSearch(fullArgs);
                if (searchResults.videos.length === 0) {
                    await sock.sendMessage(sender, { text: '❌ No results found!' });
                    return;
                }
                videoUrl = searchResults.videos[0].url;
            }
            
            const info = await ytdl.getInfo(videoUrl);
            const formats = ytdl.filterFormats(info.formats, 'audioandvideo');
            
            // Send video info
            const infoText = `🎬 *${info.videoDetails.title}*\n\n` +
                            `⏱️ Duration: ${formatDuration(info.videoDetails.lengthSeconds)}\n` +
                            `👁️ Views: ${formatNumber(info.videoDetails.viewCount)}\n` +
                            `📤 Channel: ${info.videoDetails.author.name}\n` +
                            `👍 Likes: ${formatNumber(info.videoDetails.likes || 0)}\n\n` +
                            `Select quality:`;
            > *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙸𝚂𝚁𝙰𝙴 𝚄𝙼𝙰𝚁𝙸*
            // Create buttons for quality selection
            const buttons = [];
            const qualities = ['144p', '240p', '360p', '480p', '720p', '1080p'];
            
            for (const quality of qualities) {
                const format = formats.find(f => f.qualityLabel === quality);
                if (format) {
                    buttons.push({
                        buttonId: `yt_${quality}`,
                        buttonText: { displayText: `📹 ${quality}` },
                        type: 1
                    });
                }
            }
            
            buttons.push({
                buttonId: 'yt_audio',
                buttonText: { displayText: '🎵 Audio Only' },
                type: 1
            });
            
            await sock.sendMessage(sender, {
                text: infoText,
                footer: 'YouTube Downloader',
                buttons: buttons,
                headerType: 1
            });
            
        } catch (error) {
            await sock.sendMessage(sender, { text: `❌ Error: ${error.message}` });
        }
    }
};

function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}
