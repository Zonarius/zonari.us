"use strict";
var express = require("express");
var youtubedl = require("youtube-dl");
var app = express();
var youtubeBaseUrl = "https://www.youtube.com/watch?v=";
app.get('/api/ytdl', function (req, res) {
    var yturl = req.query.v;
    if (!yturl) {
        res.end("Please provide v parameter");
    }
    else {
        res.setHeader('Content-Disposition', 'attachment; filename=bla.mp3');
        youtubedl(youtubeBaseUrl + yturl, ["-x"]).pipe(res);
    }
});
app.listen(8090);
