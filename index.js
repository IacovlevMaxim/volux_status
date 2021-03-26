const { Client } = require('discord-rpc');

const client = new Client({ transport: 'ipc' });

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "High standards RL team!",
            assets: {
                large_image: "big",
                large_text: "Join us!",
            },
            buttons: [
                { label: "Join Team Volux!", url: "https://discord.gg/QZPW4zG" },
            ]
        }
    }); 
    console.log("Status is ready to use!");
});

client.login({ clientId: "759048575489146904" }).catch(console.error);

