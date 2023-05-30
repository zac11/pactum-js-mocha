const { spec, stash, request } = require('pactum');
require('dotenv').config();
const { faker } = require('@faker-js/faker');

const baseURL = process.env.API_BASE_URL;
request.setBaseUrl(baseURL);

stash.getDataTemplate({
    'NewUser': {
        "name": faker.person.firstName(),
        "job": faker.person.lastName()
    }
});

it(' creates a new user', async () => {
    await spec()
        .post('/api/users')
        .withJson({
            '@DATA:TEMPLATE@': 'NewUser',
        })
        .inspect()
        .expectStatus(201);
});

it('gets all the users', async()=>{
    await spec()
    .get('/api/users/')
    .expectStatus(200);
});


