const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('../../../../config');
const { User } = require('../../../models/user');

describe('user.generateAuthToken', () => {
  it('should return a valid json web token', () => {
    const payload = {
      _id: new mongoose.Types.ObjectId().toHexString(),
      isAdmin: true
    };

    const user = new User(payload);
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, config.JWTPRIVATEKEY);

    expect(decoded).toMatchObject(payload);
  });
});
