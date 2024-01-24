const client = require("../client")
const util = require('../util');

async function getAllComments() {
    try {
        const { rows: comments } = await client.query(`
            SELECT * FROM comments;
        `);
        return comments;
    } catch (err) {
        throw err;
    }
}

async function getCommentId(commentId) {
    try {
        const { rows: [comment] } = await client.query(`
            SELECT * FROM comments
            WHERE "commentId" =${commentId}; 
        `);
        return comment;
    } catch (error) {
        throw error;
    }
}

const createComments = async ({name, charcatersId, description}) => {
    try {
        const { rows: [comment] } = await client.query(`

            INSERT INTO comments(name, "characterId", description)
            VALUES($1, $2, $3)
            RETURNING *;
        `, [name, charcatersId, description]);
        return comment;
    } catch (error) {
        throw error;
    }
}

async function putUpdateComment(commentId, fields) {
    try {
        const toUpdate = {}
        for (let column in fields) {
            if (fields[column] !== undefined) toUpdate[column] = fields[column];
        }
        let comment;

        if (util.dbFields(toUpdate).insert.length > 0) {
            const { rows } = await client.query(`
            UPDATE comments
            SET ${util.dbFields(toUpdate).insert}
            WHERE "commentId"=${commentId}
            RETURNING *;
          `, Object.values(toUpdate));
            comment = rows[0];
        }
        return comment;
    } catch (error) {
        throw error;
    }
}

async function deleteComment(commentId) {
    try {
        const { rows: [rows] } = await client.query(`
            DELETE FROM comments
            WHERE "commentId" =$1
            RETURNING *;
        `, [commentId]);
        return rows[0];
    } catch (error) {
        throw error;
    }
}

module.exports = { getAllComments, getCommentId, createComments, putUpdateComment, deleteComment }
