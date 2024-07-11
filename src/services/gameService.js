const Game = require('../model/gameModel')

class GameService {
    async getAllGames() {
        return await Game.findAll();
    }

    catch(err) {
        throw new Error(`Erro ao buscar os jogos: ${err.message}`)
    }


    async getGameById(id) {
        try {
            return await Game.findByPk(id);
        } catch (err) {
            throw new Error(`Erro ao buscar jogo pelo ID ${id}: ${err.message}`);
        }
    }



    async createGame(gameData) {
        const { name, description, genre, platform } = gameData
        // Verificação dos campos obrigatórios
        if (!name) {
            throw new Error('Name must be a valid string');
        }
        if (!description) {
            throw new Error('Description cannot be null');
        }
        if (!genre) {
            throw new Error('Genre cannot be null');
        }
        if (!platform) {
            throw new Error('Platform cannot be null');
        }

        try {
            return await Game.create({ name, description, genre, platform });
        } catch (err) {
            throw new Error(`Erro ao criar um jogo novo: ${err.message}`);
        }
    }

    async updateGame(gameData) {
        const { id, name, description, genre, platform } = gameData
        try {
            const game = await Game.findByPk(id);
            if (game) {
                game.name = name;
                game.description = description;
                game.genre = genre;
                game.platform = platform;
                await game.save();
                return game;
            } else {
                throw new Error(`Jogo com Id ${id} não encontrado`);
            }
        } catch (err) {
            throw new Error(`Erro ao atualizar jogo pertencente ao ${id}: ${err.message}`)
        }
    }

    async patchGameById(id, patchData) {
        try {
            const game = await Game.findByPk(id);
            if (!game) {
                throw new CustomError(`Game with the id ${id} not found`, 404);
            }
            await game.update(patchData, { fields: Object.keys(patchData) });
            return game;
        } catch (error) {
            throw new CustomError("Error patching the game", 500);
        }
    }

    async deleteGame(id) {
        try {
            const game = await Game.findByPk(id);
            if (game) {
                await game.delete();
            } else {
                throw new Error(`Jogo com Id ${id} não encontrado`);
            }
        } catch (err) {
            throw new Error(`Erro ao deletar jogo pertencente ao ${id}: ${err.message}`);
        }
    }
}

module.exports = new GameService();