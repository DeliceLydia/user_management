const request = require('supertest');
import app from '../server';

describe('Post user endpoint', () => {
    it('should create a new user', async () => {
        const res = await request(app)
          .post('/api/users')
          .send({
            userId: 1,
            name: 'lydia',
            email: 'dely@gmail.com',
            role: 'developer'
          });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('user');
    });
});
