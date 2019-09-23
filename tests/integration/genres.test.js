const request = require('supertest');
const { Genre, validate } = require('../../models/genre');
const { User } = require('../../models/user');

let server;

describe('/api/genres', () => {
  beforeEach(async () => {
    server = require('../../app');
    await Genre.collection.insertMany([
      { name: 'genre1' },
      { name: 'genre2' }
    ]);
  });
  afterEach(async () => {
    await server.close();
    await Genre.remove({});
  });

  describe('GET /', () => {
    it('should return all genres', async () => {
      const res = await request(server).get('/api/genres');
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some(genre => genre.name === 'genre1')).toBeTruthy();
      expect(res.body.some(genre => genre.name === 'genre2')).toBeTruthy();
    });
  });

  describe('GET /:id', () => {
    it('should return 404 for unknown MongoDB-Id', async () => {

      const res = await request(server).get(`/api/genres/1`);
      expect(res.status).toBe(404);
    });

    it('should return a genre entry for a valid objectid', async () => {
      const genre = new Genre({ name: 'genre3' });
      await genre.save();

      const res = await request(server).get(`/api/genres/${genre._id}`);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('name', genre.name);
    });
  });

  describe('POST /', () => {

    // Define the happy path, and then in each test, we change one parameter
    // that clearly aligns with the name of the test.
    let token;
    let name;

    const exec = async () => {
      return await request(server)
        .post('/api/genres')
        .set('x-auth-token', token)
        .send({ name });
    };

    beforeEach(() => {
      token = new User().generateAuthToken();
      name = 'genre3';
    });

    it('should return 401 if client is not logged in', async () => {
      token = '';

      const res = await exec();

      expect(res.status).toBe(401);
    });

    it('should 400 if genre is less than 5 characters', async () => {
      name = '1234';
      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should 400 if genre is more than 15 characters', async () => {
      name = new Array(52).join('a');
      const res = await exec();
      expect(res.status).toBe(400);
    });

    it('should save the genre if it is valid', async () => {
      await exec();

      const genre = await Genre.find({ name: 'genre3' });
      expect(genre).not.toBeNull();
    });

    it('should return the genre if it is valid', async () => {
      const res = await exec();
      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('name', 'genre3');
    });
  });
});
