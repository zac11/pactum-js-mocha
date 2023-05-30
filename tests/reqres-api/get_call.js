const { spec, stash, request } = require('pactum');
require('dotenv').config();
const { faker } = require('@faker-js/faker');

const baseURL = process.env.API_BASE_URL;
request.setBaseUrl(baseURL);


describe('Testing GET calls using Pactum', () => {
    it('sends a get request to the url', async () => {
        await spec()
            .get('/api/users/4')
            .expectStatus(200)
            .expectJsonMatch('data.id', 4)
            .expectJsonMatch('data.first_name', 'Eve');


    });

    it('sends a get call using the query params', async () => {
        await spec()
            .get('/api/users')
            .withQueryParams({ page: '2' })
            .expectStatus(200)
            .expectJsonMatch('page', 2)
            .expectJsonMatch('data[0].id', 7)
            .expectJsonMatch('data[0].first_name', 'Michael');
    });
})