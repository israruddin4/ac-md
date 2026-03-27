module.exports = {
    name: 'Truth or Dare',
    command: 'truth',
    category: 'fun',
    emoji: '💭',
    description: 'Get a random truth question',
    example: '',
    
    async execute(sock, msg, args, fullArgs, sender) {
        const truths = [
            "What's the biggest lie you've ever told?",
            "What's something you're secretly ashamed of?",
            "Who's your secret crush?",
            "What's the worst thing you've ever done?",
            "What's something you've never told anyone?",
            "What's your biggest fear?",
            "What's something you regret doing?",
            "What's the most embarrassing thing you've done?"
        ];
        
        const truth = truths[Math.floor(Math.random() * truths.length)];
        await sock.sendMessage(sender, { text: `💭 *TRUTH*\n\n${truth}` });
    }
};

module.exports.dare = {
    name: 'Truth or Dare',
    command: 'dare',
    category: 'fun',
    emoji: '😈',
    description: 'Get a random dare challenge',
    example: '',
    
    async execute(sock, msg, args, fullArgs, sender) {
        const dares = [
            "Send a funny selfie to the group",
            "Share your most embarrassing story",
            "Do 10 pushups and record it",
            "Change your profile picture to a meme",
            "Text your crush something embarrassing",
            "Sing a song out loud",
            "Do a funny dance",
            "Share your phone's last photo"
        ];
        
        const dare = dares[Math.floor(Math.random() * dares.length)];
        await sock.sendMessage(sender, { text: `😈 *DARE*\n\n${dare}` });
    }
};

module.exports.rps = {
    name: 'Rock Paper Scissors',
    command: 'rps',
    category: 'fun',
    emoji: '✊',
    description: 'Play rock paper scissors with bot',
    example: '<rock/paper/scissors>',
    
    async execute(sock, msg, args, fullArgs, sender) {
        if (!fullArgs) {
            await sock.sendMessage(sender, { text: `❌ Please choose rock, paper, or scissors!\n\nUsage: .rps rock\nChoices: rock, paper, scissors` });
            return;
        }
        
        const choices = ['rock', 'paper', 'scissors'];
        const userChoice = fullArgs.toLowerCase();
        
        if (!choices.includes(userChoice)) {
            await sock.sendMessage(sender, { text: `❌ Invalid choice! Choose rock, paper, or scissors.` });
            return;
        }
        
        const botChoice = choices[Math.floor(Math.random() * 3)];
        let result = '';
        
        if (userChoice === botChoice) {
            result = "🤝 It's a tie!";
        } else if (
            (userChoice === 'rock' && botChoice === 'scissors') ||
            (userChoice === 'paper' && botChoice === 'rock') ||
            (userChoice === 'scissors' && botChoice === 'paper')
        ) {
            result = "🎉 You win!";
        } else {
            result = "🤖 Bot wins!";
        }
        
        await sock.sendMessage(sender, {
            text: `✊ *ROCK PAPER SCISSORS*\n\nYou: ${userChoice} ✨\nBot: ${botChoice} 🤖\n\n${result}`
        });
    }
};
