const { expect} = require('@playwright/test')
const { request} = require ('request')
// const fetch = require('..../node_modules/node-fetch');
const s2srequest = {
    "id": "1846",
    "imp": [
        {
            "id": "/73188406/testing/tester",
            "banner": {
                "format": [
                    {
                        "w": 300,
                        "h": 250
                    },
                    {
                        "w": 320,
                        "h": 50
                    }
                ]
            },
            "secure": 1,
            "ext": {
                "bidder": {
                    "siteId": "VxSoef",
                    "position": "ugK1Wm",
                    "domain": "testingdomain.in"
                }
            }
        }
    ],
    "site": {
        "domain": "example.ampproject.org",
        "page": "https://www.insidermonkey.com/blog/5-most-polluted-cities-in-the-world-1064067/4/",
        "publisher": {
            "id": "pub-6607161580635964"
        },
        "ext": {
            "amp": 1
        }
    },
    "device": {
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Mobile/15E148 Safari/604.1",
        "ip": "172.98.86.86"
    },
    "test": 1,
    "at": 1,
    "tmax": 10600,
    "cur": [
        "INR"
    ],
    "source": {
        "tid": "26791cb9-fee8-4e3a-bde3-7fd9eba01c2e",
        "ext": {
            "schain": {
                "complete": 1,
                "nodes": [
                    {
                        "asi": "automatad.com",
                        "sid": "2311913816266512",
                        "hp": 1
                    }
                ],
                "ver": "1.0"
            }
        }
    },
    "ext": {
        "prebid": {
            "aliases": {
                "districtm": "appnexus"
            },
            "bidadjustmentfactors": {
                "districtm": 1,
                "smartadserver": 0.8
            },
            "cache": {
                "bids": {
                    "returnCreative": null
                },
                "vastxml": null
            },
            "channel": {
                "name": "amp",
                "version": ""
            },
            "targeting": {
                "pricegranularity": {
                    "precision": 2,
                    "ranges": [
                        {
                            "min": 0,
                            "max": 2000,
                            "increment": 0.5
                        }
                    ]
                },
                "includewinners": true,
                "includebidderkeys": true,
                "includebrandcategory": null,
                "includeformat": false,
                "durationrangesec": null,
                "preferdeals": false
            }
        }
    }
}

 //S2S request body
exports.prebids2s = class prebids2s
{

    constructor(page) 
    {
        this.page = page
    }
   
    async s2srequest()
    {
        console.log('request', request);

        //API POST request for prebid S2S request
        const secondIssue = await this.page.request.post('https://bid.atmtd.com/request', {
            data: s2srequest
            
        });
        expect(secondIssue.ok()).toBeTruthy();
        console.log('***** PREBID S2S REQUEST *****');
        console.log(secondIssue);

        if(s2srequest.imp[0].ext.bidder.siteId =='VxSoef')
          {
            console.log('Site Id Matches !!!');
           
          }
          else
          {
            console.log('Site_ID Mismatch,Responce Code = 20');

          }
          if(s2srequest.imp[0].ext.bidder.siteId =='VxSoef')
          {
                    if(s2srequest.imp.id)
                    {
                        
                        if(s2srequest.imp.id)
                        {
                            if((s2srequest.imp[i].adUnitCode)&&(s2srequest.imp[i].placement))
                            {
                                console.log('Impression ID = ',s2srequest.imp[i].id,'Line item successfully matched!!!');
                            }
                          else
                            {
                                console.log('Impression ID = ',s2srequest.imp[i].id,'line item mismatch, responce code = 2');
                            }
                        }
                    }
                

            }

          
    }
}




