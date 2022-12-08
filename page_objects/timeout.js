const { expect } = require('@playwright/test')
const { request} = require ('request')
// const fetch = require('node-fetch');
const Timeoutrequest = [
    {
        "bidId": "7404e9e2c95f455",
        "bidder": "automatad",
        "adUnitCode": "investingchannel_div_66427670354805_HV",
        "auctionId": "f47a6727-0ad1-423f-b57d-c6a53c61e327",
        "params": [
            {
                "siteId": "dZhv4F",
                "placementId": "barchart_HV_AC_Desktop_728x90_1"
            }
        ],
        "timeout": 1350
    },
    {
        "bidId": "75b1837b1d19956",
        "bidder": "automatad",
        "adUnitCode": "investingchannel_div_6434684714341343",
        "auctionId": "f47a6727-0ad1-423f-b57d-c6a53c61e327",
        "params": [
            {
                "siteId": "dZhv4F",
                "placementId": "barchart_AC_Desktop_3x1_2"
            }
        ],
        "timeout": 1350
    },
    {
        "bidId": "769c24c2afd098",
        "bidder": "automatad",
        "adUnitCode": "investingchannel_div_4664267128423054",
        "auctionId": "f47a6727-0ad1-423f-b57d-c6a53c61e327",
        "params": [
            {
                "siteId": "dZhv4F",
                "placementId": "barchart_AC_Desktop_3x1_3"
            }
        ],
        "timeout": 1350
    },
    {
        "bidId": "77236ab50d120cf",
        "bidder": "automatad",
        "adUnitCode": "investingchannel_div_6094780544743692",
        "auctionId": "f47a6727-0ad1-423f-b57d-c6a53c61e327",
        "params": [
            {
                "siteId": "dZhv4F",
                "placementId": "barchart_AC_Desktop_300x250_1"
            }
        ],
        "timeout": 1350
    },
    {
        "bidId": "7875913795be3f3",
        "bidder": "automatad",
        "adUnitCode": "investingchannel_div_9002920801078087",
        "auctionId": "f47a6727-0ad1-423f-b57d-c6a53c61e327",
        "params": [
            {
                "siteId": "dZhv4F",
                "placementId": "barchart_AC_Desktop_160x600_1"
            }
        ],
        "timeout": 1350
    }
]

exports.timeout = class timeout
{

    constructor(page) 
    {
        this.page = page
    }

    async timeoutreqest()
    {

        //API POST request for Timeout request

        const thirdIssue = await this.page.request.post('/request', {
            
            data : Timeoutrequest
        });
        // expect(thirdIssue.ok()).toBeTruthy();
        console.log('******* TIMEOUT REQUEST ******** ')
        console.log(thirdIssue);


    }
}