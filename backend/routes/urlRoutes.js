const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const {
    createUrl,
    getMyUrls,
    deleteUrl,
    getStats
} = require("../controllers/urlController");

router.post(
    "/create",
    authMiddleware,
    createUrl
);

router.get(
    "/myurls",
    authMiddleware,
    getMyUrls
);

router.delete(
    "/:id",
    authMiddleware,
    deleteUrl
);
router.get(
    "/stats",
    authMiddleware,
    getStats
);
module.exports = router;