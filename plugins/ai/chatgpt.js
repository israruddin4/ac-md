const axios = require('axios');

module.exports = {
    name: 'ChatGPT AI',
    command: 'ai',
    category: 'ai',
    emoji: '🤖',
    description: 'Chat with AI assistant',
    example: '<question>',
    
    async execute(sock, msg, args, fullArgs, sender) {
        if (!fullArgs) {
            await sock.sendMessage(sender, { 
                text: `❌ Please provide a question!\n\nUsage: .ai <question>\nExample: .ai What is the meaning of life?` 
            });
            return;
        }
        
        await sock.sendMessage(sender, { text: '🤔 Thinking...' });
        
        try {
            // Use free AI API or your own
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: fullArgs }],
                max_tokens: 500,
                temperature: 0.7
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });
            
            const reply = response.data.choices[0].message.content;
            
            await sock.sendMessage(sender, {
                text: `🤖 *ChatGPT Response*\n\n${reply}\n\n_⚡ Powered by OpenAI_`
            });
        } catch (error) {
            // Fallback to free API
            try {
                const response = await axios.get(`https://api.popcat.xyz/chat?msg=${encodeURIComponent(fullArgs)}`);
                await sock.sendMessage(sender, {
                    text: `🤖 *AI Response*\n\n${response.data.response}`
                });
            } catch (fallbackError) {
                await sock.sendMessage(sender, {
                    text: `🤖 *AI Response*\n\nI'm an AI assistant. Your question: "${fullArgs.substring(0, 100)}"\n\nNote: AI service is temporarily unavailable. Please try again later.`
                });
            }
        }
    }
};
