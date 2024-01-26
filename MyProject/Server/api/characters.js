const express = require('express');
const router = express.Router();

const { getAllCharacters, getCharactersById, getTableCharacters } = require('../db/sqHelperFunctions/characters');


router.get('/', async (req, res, next) => {
    try {
        const characters = await getAllCharacters();
        res.send(characters);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const character = await getCharactersById(req.params.id);
        res.send(character);
    } catch (error) {
        next(error);
    }
});

router.get('/:id/me', async (req, res, next) => {
    try {
        const character = await getTableCharacters(req.params.id)
        res.send(character)
    } catch (error) {
        next(error)
    }
})

module.exports = router
