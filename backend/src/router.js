const express = require("express");

const {
  ItemController,
  ProjectController,
  AuthController,
} = require("./controllers");

const router = express.Router();

router.get("/projects", ProjectController.browse);

router.post("/projects", ProjectController.add);

router.post("/auth/signup", AuthController.signup);

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
