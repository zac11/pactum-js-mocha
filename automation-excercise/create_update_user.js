const { spec, request, stash } = require('pactum');
require('dotenv').config();

const baseURL = process.env.AUTOM_BASE_URL;
request.setBaseUrl(baseURL);

const { faker, fa } = require('@faker-js/faker');

stash.getDataTemplate({
    'NewUser': {
        "name": faker.person.firstName()+" "+ faker.person.lastName(),
        "email": faker.internet.email(),
        "password": faker.internet.password(),
        "title": faker.person.suffix(),
        "birth_date": faker.date.birthdate(),
        "month": faker.date.month(),
        "birth_year": '1990',
        "firstname": faker.person.firstName(),
        "lastname": faker.person.lastName(),
        "company": faker.company.name(),
        "address1": faker.location.streetAddress(),
        "address2": faker.location.county(),
        "country": faker.location.country(),
        "zipcode": faker.location.zipCode(),
        "state": faker.location.county(),
        "city": faker.location.city(),
        "mobile_number": faker.phone.number()

    }
})

describe('Create and update a user',()=>{
    it.only('create a new user with fake details', async()=>{
        await spec()
        .post('/createAccount')
        .withJson({
            '@DATA:TEMPLATE@': 'NewUser',
        })
        .inspect()
        .expectStatus(200);

    });
});