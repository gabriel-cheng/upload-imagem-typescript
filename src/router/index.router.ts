import { Router } from "express";
import controller from "../controllers/index.controller";
import upload from "../config/multer.config";

const router = Router();

router.delete("/delete/:id", controller.deleteImage);
router.post("/save", upload.single("file"), controller.saveImage);
router.get("/", controller.allPictures);

export default router;