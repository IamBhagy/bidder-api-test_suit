const { expect} = require('@playwright/test')
const { request} = require ('request')
const axios = require('axios');

exports.kw_debug = class kw_debug
{

    constructor(page) 
    {
        this.page = page
    }

    async get_key()
    {
        //API GET request for KW debug endpoint
const KW_DEBUG = await axios.get('https://bid.atmtd.com/request', {
    params : {
        url:'https://investorplace.com/2022/10/is-this-bull-market-the-real-deal/',
        version:'v3'
    }

    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    console.log('******* KEY_WORD DEBUG ENDPOINT ******')
    console.log(KW_DEBUG);


    }
}   