const {spec, request} = require('pactum');
const userUrl = "https://reqres.in/api/users?page=2"

request.setBaseUrl('https://reqres.in');   // set the base url

it('should get the user data ', async ()=>{
    await spec()
    .get(userUrl)
    .expectStatus(200);
    
});


it('should run the first test with a set baseurl', async()=>{
    await spec()
    .get('/api/users?page=2')
    .expectStatus(200)
});

