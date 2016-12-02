import express = require('express');
import youtubedl = require('youtube-dl');
const app = express();
const youtubeBaseUrl = "https://www.youtube.com/watch?v=";

app.get('/api/ytdl', (req, res) => {
    let yturl = req.query.v;

    if (!yturl) {
        res.end("Please provide v parameter");
    } else {

        res.setHeader('Content-Disposition', 'attachment; filename=bla.mp3');
    }
})

app.listen(8090);