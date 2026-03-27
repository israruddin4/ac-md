require('dotenv').config();

module.exports = {
    // Bot Info
    botName: process.env.BOT_NAME || 'AwesomeBot',
    ownerName: process.env.OWNER_NAME || 'Achakzai-04',
    ownerNumber: process.env.OWNER_NUMBER || '923048179418',    version: '3.0.0',
    prefix: process.env.PREFIX || '.',
    mode: process.env.MODE || 'private',
    
    // Counts
    totalPlugins: 65,
    totalCommands: 250,
    
    // Admin numbers
    admins: process.env.ADMIN_NUMBERS ? process.env.ADMIN_NUMBERS.split(',') : [],
    
    // API Keys
    apis: {
        openai: process.env.OPENAI_API_KEY || '',
        rapidapi: process.env.RAPIDAPI_KEY || '',
        weather: process.env.WEATHER_API_KEY || '',
        news: process.env.NEWS_API_KEY || '',
        spotify: {
            clientId: process.env.SPOTIFY_CLIENT_ID || '',
            clientSecret: process.env.SpotIFY_CLIENT_SECRET || ''
        }
    },
    
    // Database
    database: {
        mongodb: process.env.MONGODB_URI || '',
        redis: process.env.REDIS_URL || ''
    },
    
    // Limits
    limits: {
        maxFileSize: 100 * 1024 * 1024,
        downloadTimeout: 30000,
        maxConcurrent: 5
    },
    
    // Menu Categories
    menuCategories: [
        { id: 1, name: '📥 Downloader', emoji: '📥', plugins: 15 },
        { id: 2, name: '👥 Group', emoji: '👥', plugins: 12 },
        { id: 3, name: '😄 Fun', emoji: '😄', plugins: 8 },
        { id: 4, name: '🤖 AI', emoji: '🤖', plugins: 8 },
        { id: 5, name: '🎎 Anime', emoji: '🎎', plugins: 6 },
        { id: 6, name: '🔄 Converter', emoji: '🔄', plugins: 6 },
        { id: 7, name: '🔧 Tools', emoji: '🔧', plugins: 8 },
        { id: 8, name: '💰 Economy', emoji: '💰', plugins: 5 },
        { id: 9, name: '👑 Owner', emoji: '👑', plugins: 5 },
        { id: 10, name: '📌 Utility', emoji: '📌', plugins: 7 }
    ],
    
    // NSFW Settings
    nsfw: {
        enabled: process.env.NSFW_ENABLED === 'true',
        warning: '⚠️ This command contains adult content. Use with caution.'
    }
};
