const request = require('supertest');
const app = require('../app.js');
const { expect } = require('chai');

describe('Form Integration', function() {
    it('should respond with success message if valid name and email are provided', async function() {
        const res = await request(app)
            .post('/submit-form')
            .send({ nama: 'Jane Doe', email: 'jane@example.com' });
        
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Terima kasih, Jane Doe! Kami akan menghubungi Anda di jane@example.com.');
    });
});
