const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const users = [
  {
    id: 2,
    email: 'charlie@chaplin.com',
    name: 'Charlie',
    password: '$2b$10$6.sAx7UAILobqlDOGLZOdOcUUMS8RLpCRv0oCWdD3E.aUMF2Ww1sC',
    isAdmin: true
  }
];

module.exports = {
  generateAuthToken,
  validate,
  users: {
    getUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
  }
};

function generateAuthToken(user) {
  return jwt.sign({
    id: user.id,
    name: user.name,
    isAdmin: user.isAdmin
  }, config.JWTPRIVATEKEY);
}

function getUsers() {
  return users.map(user => { return { ...user }; });
}

function getUserById(id) {
  const user = users.find(user => user.id === id);

  if (!user) return null;

  return { ...user };
}

function getUserByEmail(email) {
  const user = users.find(user => user.email === email);

  if (!user) return null;

  return { ...user };
}

function createUser(user) {
  const newUser = {
    id: users.length + 1,
    ...user
  }

  users.push(newUser);

  return { ...newUser };
}

function updateUser(id, user) {
  const userInDb = getUserById(id);

  if (!userInDb) return null;

  for (let key of Object.keys(user)) {
    userInDb[key] = user[key];
  }

  return { ...userInDb };
}

function deleteUser(id) {
  const user = users.find(user => user.id === id);

  if (!user) return null;

  const index = users.indexOf(user);
  users.splice(index, 1);

  return user;
}

function validate(body) {
  return Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
    isAdmin: Joi.boolean()
  }).validate(body);
}
