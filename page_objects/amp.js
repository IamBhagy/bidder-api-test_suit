const { expect} = require('@playwright/test')
const { request} = require ('request')
const axios = require('axios');

exports.amp = class amp
{

    constructor(page) 
    {
        this.page = page
    }

    async get_amp()
    {

        //API GET request for AMP/RTC

    const AMP = await axios.get('https://bid.atmtd.com/request', {
    params: {
        placement_id: 'test',
        pos:'test',
        site_id:'VxSoef',
        viewablity:'visible',
        w:300,
        h:250,
        ms:'320x50, 600x900, 300x50',
        slot:'%2F175265624%2Fatd_amp_test_adunit',
        curl:'https%3A%2F%2Fexample.ampproject.org%2Farticle-metadata.html',
        timeout:1000,
        purl:'https%3A%2F%2Fhoverr.pages.dev%2Fadapter_test%2Frtc_test%3Fhello%3Dtrue',
        cur:'USD',
        __amp_source_origin:'https%3A%2F%2Fhoverr.pages.dev'
    }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    console.log('***** AMP/RTC REQUEST *****');
    console.log(AMP);



    }
}