const request = require('supertest');
const app = require('../src/app');

describe('API DevOps Demo', () => {

  test('GET / responde correctamente', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  test('POST /register con datos válidos', async () => {
    const res = await request(app)
      .post('/register')
      .send({ username: 'galo', email: 'galo@test.com' });

    expect(res.statusCode).toBe(201);
  });

});
