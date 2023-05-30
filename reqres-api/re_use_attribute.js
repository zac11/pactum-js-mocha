const { spec, stash, request } = require('pactum');
require('dotenv').config();
const { faker } = require('@faker-js/faker');

const baseURL = process.env.API_BASE_URL;
request.setBaseUrl(baseURL);

describe('Fetch a record and re-use it in the tests', ()=>{
    it('fetches all the users', async()=>{
        await spec()
        .get('/api/users')
        .withQueryParams({ page: '2' })
        .expectStatus(200)
        .stores('FirstID','data[3].id');

        await spec()
        .get('/api/users/{id}')
        .withPathParams('id', '$S{FirstID}')
        .expectStatus(200)
        .inspect()
        .expectJsonMatch('data.id', '$S{FirstID}')


    });


})