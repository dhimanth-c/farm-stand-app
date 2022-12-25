import express from "express";
const router = express.Router();

import standsController from "../controllers/stands.controller.js";

router.route("/all").get(standsController.index);

export default router;
