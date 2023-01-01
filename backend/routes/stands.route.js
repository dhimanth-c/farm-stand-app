import express from "express";
const router = express.Router();

import standsController from "../controllers/stands.controller.js";

router.route("/all").get(standsController.index);

router.route("/new").post(standsController.newStand);

router
  .route("/:id")
  .get(standsController.viewStand)
  .delete(standsController.deleteStand);

router.route("/:id/update").patch(standsController.updateStand);

export default router;
