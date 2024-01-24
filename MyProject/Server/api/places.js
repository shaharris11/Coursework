const express = require('express');
const router = express.Router();

const {getPlaces, getPlacesId} = require('../db/sqHelperFunctions/places');

router.get('/', async (req, res, next) => {
    try{
        const places = await getPlaces();
        res.send(places);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const place = await getPlacesId(req.params.id);
        res.send(place);
    } catch (error) {
        next(error);
    }
});

module.exports = router