import express from "express"
import { update, remove, getUser, subscribe, unsubscribe, like, dislike } from "../controllers/usercontroller.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verifyToken, update)

router.delete("/:id", remove)

router.get("/find/:id", getUser)

router.put("/sub/:id", subscribe)

router.put("/unsub/:id", unsubscribe)

router.put("/like/:videoId", like)

router.put("/dislike/:videoId", dislike)

export default router;