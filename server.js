const express = require("express");
const axios = require("axios");
require("dotenv").config(); // Load BOT_TOKEN dari .env

const app = express();
const PORT = 3000;
const MINI_BLOXD_JOIN_BOT = "https://mini-bloxd.glitch.me/api/join-bot";

app.get("/join", async (req, res) => {
    const { token, username } = req.query;

    if (!token || !username) {
        return res.status(400).json({ message: "Query 'token' dan 'username' dibutuhkan" });
    }

    try {
        const response = await axios.post(MINI_BLOXD_JOIN_BOT, {
            token: token,
            userid: "1botstar2",
            username: username
        });
      
        res.json({
            author: "Saveng Fox",
            result: response.data
        });
    } catch (err) {
        console.error("Gagal join bot:", err.message);
        res.status(500).json({
            success: false,
            message: "Gagal menghubungkan ke mini-bloxd",
            error: err.response?.data || err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Bot-NPC server aktif di http://localhost:${PORT}`);
});
