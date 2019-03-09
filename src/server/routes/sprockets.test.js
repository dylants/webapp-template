const express = require('express');
const request = require('supertest');

describe('sprockets routes', () => {
  let app;

  beforeEach(() => {
    app = express();

    const routes = require('./sprockets');
    routes(app);
  });

  describe('/sprockets route', () => {
    it('should return sprockets', () =>
      request(app)
        .get('/sprockets')
        .expect(200)
        .then(data => {
          expect(data.body).toEqual([
            {
              name: 'cog',
            },
            {
              name: 'wheel',
            },
          ]);
        }));
  });
});
