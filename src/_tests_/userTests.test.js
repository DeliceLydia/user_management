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

  it('should update a user', async () => {
    const res = await request(app)
      .put('/api/users/1')
      .send({
        userId: 1,
        name: 'lydie',
        email: 'delydia@gmail.com',
        role: 'developer'
      });

    expect(res.statusCode).toEqual(200);
  })

  it('should delet a user', async () => {
    const res = await request(app)
      .delete('/api/users/1')
    expect(res.statusCode).toEqual(204);
  })
    
});
