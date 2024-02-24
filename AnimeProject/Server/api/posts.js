const express = require('express');
const router = express.Router();

const { getPosts, getPostById, createPost, updatePost, deletePost} = require('../db/sqlHelperFunction/posts');

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

router.post('/', async (req, res, next) => {
  try {
      console.log(req.body);
      const post = await createPost(req.body);
      res.send(post)
  } catch (error) {
      next(error)
  }
});

router.put('/:id', async (req, res, next) => {
  try {
      const post = await updatePost(req.params.id, req.body);
      res.send(post)
  } catch (error) {
      next(error)
  }
});

// DELETE - api/comments/:id
router.delete('/:id', async (req, res, next) => {
  try {
      const post = await deletePost(req.params.id);
      res.send(post)
  } catch (error) {
      next(error)
  }
});

module.exports = router;
