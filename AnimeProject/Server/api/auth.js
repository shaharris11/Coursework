const express = require('express');
const router = express.Router();

const { register, login } = require('../db/sqlHelperFunction/auth');
// const {getUserByUsername} = require('../db/sqlHelperFunction/user')

router.post('/register', async (req, res, next) => {
  try {
    const user = await register(req.body);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const user = await login(req.body);
    // const user = await getUserByUsername(username)
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
