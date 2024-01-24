const client = require('./client');

const {characters, places, monsters, comments} = require('./seedData')
const { getAllCharacters, getCharactersById, createCharacters } = require('./sqHelperFunctions/characters')
const { getMonsters, getMonstersById, createMonsters } = require('./sqHelperFunctions/monster');
const { getPlaces, getPlacesId, createPlaces } = require('./sqHelperFunctions/places');
const { getAllComments, createComments } = require('./sqHelperFunctions/comments');

const dropTables = async () => {
    try {
        console.log("starting to drop tables...");
        await client.query(`
        DROP TABLE IF EXISTS comments;
        DROP TABLE IF EXISTS characters;
        DROP TABLE IF EXISTS places;
        DROP TABLE IF EXISTS monsters
        `)
        console.log("tables dropped");
    } catch (error) {
        console.log("error dropping tables");
        throw error
    }
}

const createTables = async () => {
    try {
        console.log("creating tables");
        await client.query(`

    CREATE TABLE monsters (
        "monsterId" SERIAL PRIMARY KEY,
        monster VARCHAR(100) 
        );

        CREATE TABLE places (
            "placeId" SERIAL PRIMARY KEY,
            name VARCHAR(100) UNIQUE NOT NULL,
            owner VARCHAR (100) NOT NULL
        );

        CREATE TABLE characters (
            "characterId" SERIAL PRIMARY KEY,
            name VARCHAR(100) UNIQUE NOT NULL,
            title VARCHAR(100) NOT NULL,
            age INTEGER,
            "monsterId" integer REFERENCES monsters("monsterId"),
            "placeId" integer REFERENCES places("placeId"),
            description TEXT NOT NULL,
            "imgUrl" TEXT 
        );

        CREATE TABLE comments (
            "commentId" SERIAL PRIMARY KEY,
            "characterId" integer REFERENCES characters("characterId"),
            name TEXT,
            description TEXT
        );
    `);
        console.log("created tables");
    } catch (error) {
        console.error(error);
    }
}

const createInitialMonster = async () => {
    try {
        for (const monster of monsters) {
            await createMonsters(monster)
        }
        console.log("creacted monster");
    } catch (error) {
        console.error(error);
    }
}

const createInitialPlace = async () => {
    try {
        for (const place of places) {
            await createPlaces(place)
        }
        console.log("created places");
    }catch (error) {
        console.error(error);
    }
}
    

const createInitialCharacters = async () => {
    try {
        for (const character of characters) {
            await createCharacters(character)
        }
        console.log("created characters");
    } catch (error) {
        throw error
    }
}
  
const createInitialComment = async () => {
    try {
        for (const comment of comments) {
            await createComments(comment)
        }
        console.log("created comment");
    }catch (error) {
        console.error(error);
    }
}


const rebuildDB = async () => {
    try {
        client.connect()
        await dropTables()
        await createTables()

        console.log("starting to seed");
        await createInitialMonster()
        await createInitialPlace()
        await createInitialCharacters()
        await createInitialComment()
    } catch (error) {
        console.log(error);
    } finally {
        client.end()
    }
}

rebuildDB()