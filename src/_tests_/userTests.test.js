import request from 'supertest';
import app from '../server';

describe('Post user endpoint', () => {
  it('should create a user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        userId: 1,
        name: 'lydia',
        email: 'delydia@gmail.com',
        role: 'developer',
      });
    expect(res.statusCode).toEqual(201);
  });
});
