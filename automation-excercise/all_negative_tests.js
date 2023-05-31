const { spec, request } = require('pactum');
require('dotenv').config();

const baseURL = process.env.AUTOM_BASE_URL;
request.setBaseUrl(baseURL);

describe("Sends POST call to GET methods", ()=>{
    it('fetches all the products', async()=>{
        await spec()
        .post('/productsList')
        .expectStatus(200)
        .expectJsonMatch('responseCode',405);
        
    });

   it("tries to send a PUT request to brand list", async()=>{
    it('fetches all the products', async()=>{
        await spec()
        .put('/brandsList')
        .expectStatus(200)
        .expectJsonMatch('responseCode',405);
        
    });


   });
});