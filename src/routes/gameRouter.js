const express = require('express');
const router = express.Router();
const controller = require('../controllers/gameController');

// Get all games
router.get("/", controller.getAllGames);

// Game routes
router.get("/game/:id", controller.getGameById);
router.post("/game", controller.createGame);
router.put("/game/:id", controller.updateGame);
router.patch("/game/:id", controller.patchGame);
router.delete("/game/:id", controller.deleteGame);

module.exports = router;