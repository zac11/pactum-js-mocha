const { spec, request } = require('pactum');
require('dotenv').config();
const { expect } = require("chai")

const baseURL = process.env.AUTOM_BASE_URL;
request.setBaseUrl(baseURL);


describe.skip("Search products from the list", ()=>{
    it('makes a call to fetch the products by type',async()=>{
        const arr_product_types = ['Tshirts', 'Dress', 'Tops']

        arr_product_types.forEach(async value =>{
            await  spec()
            .post('/searchProduct')
            .withJson({
                "search_product": value
            })
            .expectStatus(200)
            .inspect();

        });
    })
});

describe('Search product from the list', ()=>{
    it('makes a call to fetch the products by type', async()=>{
        await spec()
        .post('/searchProduct')
        .withJson({
            "search_product": "Dress"
        })
        .expectStatus(200)
        .inspect();
    })
})