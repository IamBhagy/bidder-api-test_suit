const { expect} = require('@playwright/test')
const { request} = require ('request')
const axios = require('axios');

exports.unitag = class unitag
{

    constructor(page) 
    {
        this.page = page
    }

    async get_unitag()
    {

        //API GET request for unitag request
    const UNITAG = await axios.get('https://bid.atmtd.com/request', {

    params: {
     page:'https://www.uscreditcards101.com/trade-up-review/',
     pos:'Test-Position',
     size:'300x250,160x600, 728x90',
     click_macro:'Test-click-macro-to-be-replaced-with-something-from-prod',
     publisher_id:'76'
     
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        
        console.log('***** UNITAG REQUEST *******');
        console.log(UNITAG);
                    

    }
}