const fs = require('fs-extra');
const path = require('path');

class PluginManager {
    constructor() {
        this.plugins = new Map();
        this.categories = new Map();
        this.loadPlugins();
    }
    
    loadPlugins() {
        const pluginDirs = [
            'downloader', 'group', 'fun', 'ai', 'anime', 
            'converter', 'tools', 'economy', 'owner', 'utility'
        ];
        
        for (const dir of pluginDirs) {
            const pluginPath = path.join(__dirname, dir);
            if (fs.existsSync(pluginPath)) {
                const files = fs.readdirSync(pluginPath);
                for (const file of files) {
                    if (file.endsWith('.js')) {
                        try {
                            const plugin = require(path.join(pluginPath, file));
                            if (plugin.name && plugin.command) {
                                this.registerPlugin(plugin, dir);
                            }
                        } catch (error) {
                            console.error(`Failed to load plugin ${file}:`, error);
                        }
                    }
                }
            }
        }
        
        console.log(`✅ Loaded ${this.plugins.size} plugins`);
    }
    
    registerPlugin(plugin, category) {
        this.plugins.set(plugin.command, {
            ...plugin,
            category,
            emoji: plugin.emoji || '📦'
        });
        
        if (!this.categories.has(category)) {
            this.categories.set(category, []);
        }
        this.categories.get(category).push(plugin);
    }
    
    get(command) {
        return this.plugins.get(command);
    }
    
    getByCategory(category) {
        return this.categories.get(category) || [];
    }
    
    getAll() {
        return Array.from(this.plugins.values());
    }
    
    getCommands() {
        return Array.from(this.plugins.keys());
    }
}

module.exports = new PluginManager();
