import express from "express"
import { addVideo, addView, deleteVideo, getByTags, getVideo, random, search, sub, trend, updateVideo } from "../controllers/videocontroller.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addVideo)
router.get("find/:id", verifyToken, getVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", verifyToken, deleteVideo)
// to increement the view when the video is opened.
router.put("/view/:id", addView)
// to display the trending videos, random videos, subscribed channel videos
router.get("/trend/", trend)
router.get("/random/", random)
router.get("/sub/", verifyToken, sub)
router.get("/tags/", getByTags)
router.get("/search/", search)


export default router;