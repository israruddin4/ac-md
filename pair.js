#!/usr/bin/env node

const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const readline = require('readline');
const chalk = require('chalk');
const fs = require('fs-extra');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(chalk.bold.cyan(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║     🔐 ${process.env.BOT_NAME || 'AwesomeBot'} PAIRING TOOL         ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
`));

rl.question(chalk.yellow('📱 Enter your phone number (with country code): '), async (phoneNumber) => {
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    
    if (phoneNumber.length < 10) {
        console.log(chalk.red('❌ Invalid phone number!'));
        rl.close();
        process.exit(1);
    }
    
    console.log(chalk.cyan(`\n⏳ Generating pairing code for +${phoneNumber}...\n`));
    
    try {
        const { state, saveCreds } = await useMultiFileAuthState('sessions');
        
        const sock = makeWASocket({
            auth: state,
            logger: require('pino')({ level: 'silent' }),
            browser: ['AwesomeBot', 'Chrome', '3.0']
        });
        
        fs.ensureDirSync('./sessions');
        
        setTimeout(async () => {
            try {
                const code = await sock.requestPairingCode(phoneNumber);
                
                console.log(chalk.bold.green('\n╔══════════════════════════════════════╗'));
                console.log(chalk.bold.yellow('         🔐 PAIRING CODE'));
                console.log(chalk.bold.green('╚══════════════════════════════════════╝'));
                console.log(chalk.bold.cyan(`\n📱 Phone: +${phoneNumber}`));
                console.log(chalk.bold.white(`\n🔑 Code: ${chalk.bold.bgBlack.white(` ${code.match(/.{1,4}/g).join('-')} `)}\n`));
                console.log(chalk.yellow('⏱️  Code expires in 120 seconds'));
                console.log(chalk.cyan('\n📝 How to use:'));
                console.log(chalk.white('1. Open WhatsApp Settings'));
                console.log(chalk.white('2. Tap "Linked Devices"'));
                console.log(chalk.white('3. Tap "Link a Device"'));
                console.log(chalk.white('4. Enter the pairing code above\n'));
                
                sock.ev.on('creds.update', saveCreds);
                
                setTimeout(() => {
                    sock.ws.close();
                    rl.close();
                    process.exit(0);
                }, 60000);
                
            } catch (error) {
                console.error(chalk.red('Error generating code:'), error);
                process.exit(1);
            }
        }, 2000);
        
        sock.ev.on('connection.update', (update) => {
            const { connection } = update;
            if (connection === 'open') {
                console.log(chalk.green('✅ Successfully connected!'));
            }
        });
        
    } catch (error) {
        console.error(chalk.red('Error:'), error);
        process.exit(1);
    }
});

rl.on('close', () => {
    process.exit(0);
});
