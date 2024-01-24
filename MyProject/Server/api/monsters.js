const express = require('express');
const router = express.Router();

const {getMonstersById, getMonsters} = require('../db/sqHelperFunctions/monster');

router.get('/', async (req, res, next) => {
    try{
        const monsters = await getMonsters();
        res.send(monsters);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const monster = await getMonstersById(req.params.id);
        res.send(monster);
    } catch (error) {
        next(error);
    }
});

module.exports = router