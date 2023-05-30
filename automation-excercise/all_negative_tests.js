const { spec, request } = require('pactum');
require('dotenv').config();

const baseURL = process.env.AUTOM_BASE_URL;
request.setBaseUrl(baseURL);

describe("Get all the product listings", ()=>{
    it('fetches all the products', async()=>{
        await spec()
        .post('/productsList')
        .expectStatus(200)
        .expectJsonMatch('responseCode',405);
        
    });

    it(' matches the given JSON Schema', async()=>{
        
    });
});