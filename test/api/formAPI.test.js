const request = require('supertest');
const app = require('../app.js');
const { expect } = require('chai');

describe('POST /submit-form', function() {
    it('should return success message when valid name and email are provided', async function() {
        const res = await request(app)
            .post('/submit-form')
            .send({ nama: 'John Doe', email: 'john@example.com' });
        
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Terima kasih, John Doe! Kami akan menghubungi Anda di john@example.com.');
    });

    it('should return error message if name is missing', async function() {
        const res = await request(app)
            .post('/submit-form')
            .send({ email: 'john@example.com' });
        
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Nama dan email harus diisi.');
    });

    it('should return error message if email is missing', async function() {
        const res = await request(app)
            .post('/submit-form')
            .send({ nama: 'John Doe' });
        
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal('Nama dan email harus diisi.');
    });
});
