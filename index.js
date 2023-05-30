const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');

const client = new Client({
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');

    const number = '6285156528435' + '@c.us';
    const message = 'Pesan ini dikirim melalui perintah dari Whatsapp-web.js';

    client.sendMessage(number, message);

    console.log('Message sent : "' + message + '"');
});

client.initialize();
 