const { spec, request, fuzz } = require('pactum');
require('dotenv').config();

const baseURL = process.env.FUZZ_TESTS;
request.setBaseUrl(baseURL);

describe('Run fuzz tests on the swagger docs',()=>{
    it(' runs fuzz tests', async()=>{
        await fuzz()
        .onSwagger('/v2/api-docs')
        .inspect(); // prints request & response details
    });
})