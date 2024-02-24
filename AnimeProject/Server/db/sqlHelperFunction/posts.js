const client = require('../../../../Capstone/Practice/server/db/client');

async function getPosts() {
  try {
    const { rows: posts } = await client.query('SELECT * FROM posts', []);

    return posts;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPosts,
};
