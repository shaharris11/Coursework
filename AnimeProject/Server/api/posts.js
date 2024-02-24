const express = require('express');
const router = express.Router();

const { getPosts, getPostById} = require('../db/sqlHelperFunction/posts');

router.get('/', async (req, res, next) => {
  try {
    const posts = await getPosts();
    res.send(posts);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const post = await getPostById();
    res.send(post);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
