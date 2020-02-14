const express = require('express');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validate = require('../middleware/validation');
const { generateAuthToken } = require('../models/user');
const users = require('../models/user');

const router = express.Router();

module.exports = router;

router.use(auth, admin);
router.get('/', handleGet);
router.get('/:id', handleGetById);
router.post('/', validate(users.schema), handleCreate);
router.put('/:id', validate(users.schema), handleUpdate);
router.delete('/:id', handleDelete);

function handleGet(req, res) {
  const usersInDb = users.getUsers();
  usersInDb.forEach(user => delete user.password);
  res.json(usersInDb);
}

function handleGetById(req, res) {
  const user = users.getUserById(parseInt(req.params.id));

  if (!user) {
    return res.status(404).send('User with given id not found.');
  }

  delete user.password;
  res.json(user);
}

async function handleCreate(req, res) {
  const userInDb = users.getUserByEmail(req.body.email);

  if (userInDb) {
    return res.status(400).send('Email already in use.');
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = users.createUser({
    email: req.body.email,
    name: req.body.name,
    isAdmin: req.body.isAdmin,
    password: hashedPassword
  });

  delete user.password;
  const token = generateAuthToken(user);
  res.header('x-auth-token', token).json(user);
}

async function handleUpdate(req, res) {
  const user = { ...req.body };

  if (user.password) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  const updatedUser = users.updateUser(parseInt(req.params.id), user);

  if (!updatedUser) {
    return res.status(404).send('User with given id not found.');
  }

  delete updatedUser.password;
  res.json(updatedUser);
}

function handleDelete(req, res) {
  const user = users.deleteUser(parseInt(req.params.id));

  if (!user) {
    return res.status(404).send('User with given id not found.');
  }

  delete user.password;
  res.json(user);
}
