const { spec, request } = require('pactum');
require('dotenv').config();
const { expect } = require("chai")

const baseURL = process.env.AUTOM_BASE_URL;
request.setBaseUrl(baseURL);

describe("Get all the brand listings", ()=>{
    it('fetches all the products', async()=>{
        await spec()
        .get('/brandsList')
        .expectStatus(200)
        .expectJsonMatch('responseCode',200)
        .expect(ctx=>{
            expect(ctx.res.json.brands).to.not.have.lengthOf(0);
           
        });
        
    });

    it('validates the response time for the api call', async()=>{
        await spec()
        .get('/brandsList')
        .expectStatus(200)
        .expectResponseTime(1000);  // api response time should be less than 1000 ms
    });

    it(' brands is an array and has length not equal to 0', async()=>{
        await spec()
        .get('/brandsList')
        .expectStatus(200)
        .expectJsonMatch('responseCode',200)
        .expect(ctx=>{
            expect(ctx.res.json.brands).to.not.have.lengthOf(0);
        });
        
    });

    it('validates the response has given keys', async()=>{
        await spec()
        .get('/brandsList')
        .expectStatus(200)
        .expectJsonMatch('responseCode',200)
        .expect(ctx=>{
            expect(ctx.res.json).to.be.an('object').that.has.all.keys('responseCode', 'brands');
        });
    });

    it('validates that brands.id is a number', async()=>{
        await spec()
        .get('/brandsList')
        .expectStatus(200)
        .expectJsonMatch('responseCode',200)
        .expect(ctx=>{
            expect(ctx.res.json.brands[0]).to.have.property('id').that.is.a('number');
        });
    })
});