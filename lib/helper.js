const os = require('os');
const moment = require('moment');

function formatUptime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    const parts = [];
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    if (secs > 0 || parts.length === 0) parts.push(`${secs}s`);
    
    return parts.join(' ');
}

async function getSystemInfo() {
    const totalRam = os.totalmem() / (1024 * 1024 * 1024);
    const freeRam = os.freemem() / (1024 * 1024);
    const usedRam = (os.totalmem() - os.freemem()) / (1024 * 1024);
    
    return {
        platform: os.platform(),
        arch: os.arch(),
        ramTotal: totalRam.toFixed(2),
        ramFree: freeRam.toFixed(2),
        ramUsed: usedRam.toFixed(2),
        cpuCount: os.cpus().length,
        hostname: os.hostname()
    };
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function generateId(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

module.exports = {
    formatUptime,
    getSystemInfo,
    formatBytes,
    generateId,
    isValidUrl,
    sleep,
    formatNumber
};
