const {google} = require('googleapis');
const youtube = google.youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API
});

class YTController
{
    static getMostViewedVideos(req,res,next)
    {
        youtube.search.list({
            part: "snippet",
            q: req.params.search_term,
            type: "video",
            order: "viewCount"
        })
        .then(({data}) => {
            res.status(200).send(data);
        })
        .catch(next);
    }

    static getMostRelevantVideos(req,res,next)
    {
        youtube.search.list({
            part: "snippet",
            q: req.params.search_term,
            type: "video"
        })
        .then(({data}) => {
            res.status(200).send(data);
        })
        .catch(next);
    }
}

module.exports = YTController;