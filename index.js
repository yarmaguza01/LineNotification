require('dotenv').config();
const express = require('express');
const { messagingApi } = require('@line/bot-sdk');
const { buildOrderMessage } = require('./service.js');

const app = express();
app.use(express.json());

// สร้าง LINE client ด้วย token จาก .env
const client = new messagingApi.MessagingApiClient({
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
});

// Route สำหรับรับ trigger จากระบบลูกค้า
app.post('/notify/order', async (req, res) => {
    const { userId, orderData } = req.body;

    try {
        await client.pushMessage({
            to: userId,           // LINE User ID ของผู้รับ
            messages: [
                buildOrderMessage(orderData)   // สร้างข้อความด้านล่าง
            ]
        });

        res.json({ success: true });

    } catch (error) {
        console.error('Push failed:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});