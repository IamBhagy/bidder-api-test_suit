const { expect} = require('@playwright/test')
const { request} = require ('request')
const axios = require('axios');

exports.tagrequest = class tagrequest
{

    constructor(page) 
    {
        this.page = page
    }

    async get_tag()
    {

        //API GET request for tag request
    const TAG = await axios.get('https://bid.atmtd.com/request', {
    params: {
        pos:'End-of-Article',
        placement:'AeRfv8',
        site_id:'AeRfv8',
        size:'728x90',
        page:'https://investorplace.com/2022/10/why-investors-should-bet-100-on-sofi-stock/'
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        console.log('****** TAG REQUEST *******');
        console.log(TAG);
            

    }


}
