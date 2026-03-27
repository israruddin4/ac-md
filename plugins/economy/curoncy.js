// Simple economy system (in-memory for demo)
const userBalances = new Map();

module.exports = {
    name: 'Check Balance',
    command: 'balance',
    category: 'economy',
    emoji: '💰',
    description: 'Check your coin balance',
    example: '',
    
    async execute(sock, msg, args, fullArgs, sender) {
        const balance = userBalances.get(sender) || 0;
        
        await sock.sendMessage(sender, {
            text: `💰 *Balance*\n\nUser: @${sender.split('@')[0]}\nCoins: ${balance} 🪙\n\nType .daily to claim daily reward!`,
            mentions: [sender]
        });
    }
};

module.exports.daily = {
    name: 'Daily Reward',
    command: 'daily',
    category: 'economy',
    emoji: '🎁',
    description: 'Claim daily coins',
    example: '',
    
    async execute(sock, msg, args, fullArgs, sender) {
        const dailyAmount = 100;
        const currentBalance = userBalances.get(sender) || 0;
        userBalances.set(sender, currentBalance + dailyAmount);
        
        await sock.sendMessage(sender, {
            text: `🎁 *Daily Reward*\n\nYou received ${dailyAmount} coins! 🪙\n\nNew balance: ${currentBalance + dailyAmount} coins`
        });
    }
};

module.exports.gamble = {
    name: 'Gamble',
    command: 'gamble',
    category: 'economy',
    emoji: '🎲',
    description: 'Gamble your coins',
    example: '<amount>',
    
    async execute(sock, msg, args, fullArgs, sender) {
        const amount = parseInt(args[0]);
        const balance = userBalances.get(sender) || 0;
        
        if (!amount || isNaN(amount)) {
            await sock.sendMessage(sender, { text: `❌ Please provide an amount to gamble!\n\nUsage: .gamble <amount>\nExample: .gamble 50` });
            return;
        }
        
        if (amount > balance) {
            await sock.sendMessage(sender, { text: `❌ You don't have enough coins! Balance: ${balance} 🪙` });
            return;
        }
        
        const dice = Math.floor(Math.random() * 6) + 1;
        const multiplier = dice === 6 ? 3 : dice === 5 ? 2 : dice === 1 ? 0 : 1;
        const winAmount = amount * multiplier;
        
        if (winAmount > 0) {
            userBalances.set(sender, balance + winAmount);
            await sock.sendMessage(sender, {
                text: `🎲 *GAMBLE*\n\nYou rolled: ${dice}\n\n✨ You won ${winAmount} coins!\n💰 New balance: ${balance + winAmount}`
            });
        } else {
            userBalances.set(sender, balance - amount);
            await sock.sendMessage(sender, {
                text: `🎲 *GAMBLE*\n\nYou rolled: ${dice}\n\n💔 You lost ${amount} coins!\n💰 New balance: ${balance - amount}`
            });
        }
    }
};
