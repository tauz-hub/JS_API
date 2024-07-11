const gameService = require("../services/gameService");
const CustomError = require("../middlewares/CustomError");

exports.getAllGames = async (req, res, next) => {
    try {
        const games = await gameService.getAllGames();
        res.status(200).json(games);
    } catch (error) {
        next(error);
    }
};

exports.getGameById = async (req, res, next) => {
    try {
        const gameId = req.params.id;
        const game = await gameService.getGameById(gameId);
        res.status(200).json(game);
    } catch (error) {
        next(error);
    }
};

exports.createGame = async (req, res, next) => {
    try {
        const gameData = req.body;
        const newGame = await gameService.createGame(gameData);
        res.status(201).json(newGame);
    } catch (error) {
        next(error);
    }
};

exports.updateGame = async (req, res, next) => {
    try {
        const gameId = req.params.id;
        const updateData = req.body;
        const updatedGame = await gameService.updateGame(gameId, updateData);
        res.status(200).json(updatedGame);
    } catch (error) {
        next(error);
    }
};

exports.patchGame = async (req, res, next) => {
    try {
        const gameId = req.params.id;
        const patchData = req.body;
        const patchedGame = await gameService.patchGameById(gameId, patchData);
        res.status(200).json(patchedGame);
    } catch (error) {
        next(error);
    }
};

exports.deleteGame = async (req, res, next) => {
    try {
        await gameService.deleteGame(req.params.id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
