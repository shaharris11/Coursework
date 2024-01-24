const client = require("../client")

const createPlaces = async ({name, owner}) => {
    try {
        const { rows: [place] } = await client.query(`

            INSERT INTO places(name, owner)
            VALUES($1, $2)
            RETURNING *;
        `, [name, owner]);
        return place;
    } catch (error) {
        throw error;
    }
}

const getPlaces = async () => {
    try {
        const {
            rows
        } = await client.query (`
            SELECT * FROM places;

        `, )
        return rows
    } catch (error) {
        console.error(error);
    }
}

const getPlacesId = async (placeId) => {
    try {
        const {
            rows: [place]
        } = await client.query (
            `
            SELECT * FROM places
            WHERE "placeId" = ${placeId};
            `
        )
        return place
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getPlaces, getPlacesId, createPlaces }