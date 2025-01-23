import { Hono } from 'hono';
import app from '../src/app';
import { describe, it, expect } from 'bun:test';

describe('App Tests', () => {
  const hono = new Hono();
  hono.route('/', app);

  it('should respond with "Hello Hono! from jay and my name is jaysharma " for GET /', async () => {
    const res = await hono.request('/');
    expect(res.status).toBe(200);
    expect(await res.text()).toBe('Hello Hono! from jay and my name is jaysharma ');
  });


  describe('/api/coil tests', () => {
    it('should respond to /api/coil requests', async () => {
        const res = await hono.request('/api/coil');
        expect(res.status).toBe(200); // Or the appropriate status code
      });

    // Add more specific tests for /api/coil, covering various scenarios
    // Example tests assuming there are POST and GET methods:

    it('should handle a valid POST request to /api/coil', async () => {
      const res = await hono.request('/api/coil', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ /* valid data */ })
        });
      expect(res.status).toBe(200); //Or appropriate status code
    });

    it('should handle an invalid POST request to /api/coil (e.g., missing data)', async () => {
        const res = await hono.request('/api/coil', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({}) // Or missing data
        });
        expect(res.status).toBe(400); //Or appropriate status code for bad request
      });
  });
});