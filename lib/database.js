const mongoose = require('mongoose');
const config = require('../config/config');

let dbConnected = false;

async function initDatabase() {
    if (config.database.mongodb) {
        try {
            await mongoose.connect(config.database.mongodb);
            console.log('✅ MongoDB connected');
            dbConnected = true;
        } catch (error) {
            console.error('MongoDB connection error:', error);
        }
    } else {
        console.log('⚠️ No database configured, using memory storage');
    }
}

// User Schema
const userSchema = new mongoose.Schema({
    jid: { type: String, unique: true },
    balance: { type: Number, default: 0 },
    lastDaily: { type: Date },
    banned: { type: Boolean, default: false },
    premium: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

// Group Schema
const groupSchema = new mongoose.Schema({
    jid: { type: String, unique: true },
    welcomeEnabled: { type: Boolean, default: false },
    welcomeMessage: { type: String },
    antilink: { type: Boolean, default: false },
    nsfw: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const User = dbConnected ? mongoose.model('User', userSchema) : null;
const Group = dbConnected ? mongoose.model('Group', groupSchema) : null;

module.exports = {
    initDatabase,
    User,
    Group,
    isConnected: () => dbConnected
};
