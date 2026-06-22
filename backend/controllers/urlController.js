const Url = require("../models/Url");
const { nanoid } = require("nanoid");

const createUrl = async (req, res) => {
    try {

        const { originalUrl } = req.body;

        const shortCode = nanoid(7);

        const url = await Url.create({
            originalUrl,
            shortCode,
            user: req.user.id
        });

        res.status(201).json(url);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getMyUrls = async (req, res) => {
    try {

        const urls = await Url.find({
            user: req.user.id
        }).sort({
            createdAt: -1
        });

        res.json(urls);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteUrl = async (req, res) => {
    try {

        const url = await Url.findById(req.params.id);

        if (!url) {
            return res.status(404).json({
                message: "URL not found"
            });
        }

        if (url.user.toString() !== req.user.id) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        await url.deleteOne();

        res.json({
            message: "Deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const redirectUrl = async (req, res) => {
    try {

        const url = await Url.findOne({
            shortCode: req.params.shortCode
        });

        if (!url) {
            return res.status(404).json({
                message: "URL not found"
            });
        }

        url.clicks++;

        await url.save();

        return res.redirect(url.originalUrl);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const getStats = async (req,res) => {

    const urls = await Url.find({
        user:req.user.id
    });

    const totalUrls = urls.length;

    const totalClicks = urls.reduce(
        (sum,url)=>sum+url.clicks,
        0
    );

    let mostPopular = null;

    if(urls.length){

        mostPopular =
            urls.sort(
                (a,b)=>b.clicks-a.clicks
            )[0];
    }

    res.json({
        totalUrls,
        totalClicks,
        mostPopular
    });

};

module.exports = {
    createUrl,
    getMyUrls,
    deleteUrl,
    redirectUrl,
    getStats
};