const client = require("../client");

const createMonsters = async ({monster}) => {
    try {
        const { rows: [monsterName] } = await client.query(`

            INSERT INTO monsters(monster)
            VALUES($1)
            RETURNING *;
        `, [monster]);
        return monsterName;
    } catch (error) {
        throw error;
    }
}


async function getMonsters() {
    try {
        const {
            rows 
        } = await client.query(`
       SELECT * FROM  monsters;
        `)
        return rows
    } catch (error) {
        console.error(error);
    }
}

const getMonstersById = async (monsterId) => {
    try {
        const {
            rows: [monster]
        } = await client.query(
            `
                SELECT *
                FROM monsters
                WHERE "monsterId" =${monsterId};
            `
        )
        return monster;
    } catch (error) {
        throw error
    }
}

module.exports = {getMonsters, getMonstersById, createMonsters }
