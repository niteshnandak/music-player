import express from "express"
import { updateVideo } from "../controllers/videocontroller.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addVideo )
router.get("find/:id", verifyToken, getVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", verifyToken, deleteVideo)

export default router;