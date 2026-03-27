const axios = require('axios');

module.exports = {
    name: 'Weather Info',
    command: 'weather',
    category: 'tools',
    emoji: '🌤️',
    description: 'Get weather information for a city',
    example: '<city>',
    
    async execute(sock, msg, args, fullArgs, sender) {
        if (!fullArgs) {
            await sock.sendMessage(sender, { 
                text: `❌ Please provide a city name!\n\nUsage: .weather <city>\nExample: .weather London` 
            });
            return;
        }
        
        await sock.sendMessage(sender, { text: '🌤️ Fetching weather data...' });
        
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    q: fullArgs,
                    appid: process.env.WEATHER_API_KEY,
                    units: 'metric'
                }
            });
            
            const data = response.data;
            const weatherText = `🌤️ *Weather in ${data.name}*\n\n` +
                               `🌡️ Temperature: ${data.main.temp}°C\n` +
                               `🎯 Feels like: ${data.main.feels_like}°C\n` +
                               `💧 Humidity: ${data.main.humidity}%\n` +
                               `🌬️ Wind: ${data.wind.speed} m/s\n` +
                               `☁️ Conditions: ${data.weather[0].description}\n` +
                               `🌅 Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}\n` +
                               `🌇 Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
            
            await sock.sendMessage(sender, { text: weatherText });
        } catch (error) {
            await sock.sendMessage(sender, { text: `❌ City not found! Please check the city name.` });
        }
    }
};
