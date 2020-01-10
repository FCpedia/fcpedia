const ytrouter = require('express').Router();
const YTController = require("../controllers/youtubeController");

ytrouter.get('/mostviewed/:search_term',YTController.getMostViewedVideos);
ytrouter.get('/relevant/:search_term',YTController.getMostRelevantVideos);

module.exports = ytrouter;
