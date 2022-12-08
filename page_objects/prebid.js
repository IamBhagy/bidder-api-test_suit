const { expect } = require('@playwright/test')
const { axios } = require('axios')
const { request } = require('request')
// const { fetch } = require('../node_modules/node-fetch/src/index.js');


const apiurl = 'https://bid.atmtd.com/request'

const prebidrequest01 = 
{
    "id": "57595b7d-7291-4aa0-b79e-2b10b5fb7a98",
    "imp": [
        {
            "id": "73c36b29c996dc",
            "adUnitCode": "/175265624/atmtd_test_ad",
            "placement": "Car",
            "banner": {
                "format": [
                    {
                        "w": 728,
                        "h": 90
                    },
                    {
                        "w": 3,
                        "h": 1
                    }
                ]
            }
        }],
        "site": {
            "id": "VxSoef",
            "domain": "https://pages.cloudflare.com",
            "page": "https://www.barchart.com/story/news/10992036/ford-stock-looks-cheap-here-ahead-of-earnings",
            "ref": "https://www.barchart.com/story/news/10992036/ford-stock-looks-cheap-here-ahead-of-earnings"
        }
    } 
const prebidrequest02 = 
   {
        "id": "57595b7d-7291-4aa0-b79e-2b10b5fb7a98",
        "imp": [
            {
            "id": "745c437d6fb3b9e",
            "adUnitCode": "investingchannel_div_4341339413136296",
            "placement": "barchart_AC_Desktop_3x3_1",
            "banner": {
                "format": [
                    {
                        "w": 728,
                        "h": 90
                    },
                    {
                        "w": 3,
                        "h": 1
                    }
                ]
            }
        }],
        "site": {
            "id": "VxSoef",
            "domain": "https://pages.cloudflare.com",
            "page": "https://www.barchart.com/story/news/10992036/ford-stock-looks-cheap-here-ahead-of-earnings",
            "ref": "https://www.barchart.com/story/news/10992036/ford-stock-looks-cheap-here-ahead-of-earnings"
        }

    }  
const prebidrequest03 = 
    {
         "id": "57595b7d-7291-4aa0-b79e-2b10b5fb7a98",
         "imp": [
            {
                "id": "7505fbcf35a7a82",
                "adUnitCode": "investingchannel_div_3828235255677468",
                "placement": "barchart_AC_Desktop_300x250_1",
                "banner": {
                    "format": [
                    {
                        "w": 300,
                        "h": 250
                    }]
                }
            }],
         "site": {
             "id": "VxSoef",
             "domain": "https://pages.cloudflare.com",
             "page": "https://www.barchart.com/story/news/10992036/ford-stock-looks-cheap-here-ahead-of-earnings",
             "ref": "https://www.barchart.com/story/news/10992036/ford-stock-looks-cheap-here-ahead-of-earnings"
         }
 
    } 
const prebidrequest04 = 
    {
          "id": "57595b7d-7291-4aa0-b79e-2b10b5fb7a98",
          "imp": [
            {
                "id": "767c3d0e4b0b219",
                "adUnitCode": "investingchannel_div_7057845398048597",
                "placement": "barchart_AC_Desktop_300x384_1",
                "banner": {
                    "format": [
                        {
                            "w": 300,
                            "h": 250
                        },
                        {
                            "w": 300,
                            "h": 600
                        }
                    ]
                }
            }],
          "site": {
              "id": "VxSoef",
              "domain": "https://pages.cloudflare.com",
              "page": "https://www.barchart.com/story/news/10992036/ford-stock-looks-cheap-here-ahead-of-earnings",
              "ref": "https://www.barchart.com/story/news/10992036/ford-stock-looks-cheap-here-ahead-of-earnings"
          }
  
    } 
const prebidrequest05 =  
  {
    "id": "57595b7d-7291-4aa0-b79e-2b10b5fb7a98",
    "imp": [ 
     
        {
            "id": "7769e138204f8b4",
            "adUnitCode": "investingchannel_div_781654497639230",
            "placement": "barchart_AC_Desktop_160x600_1",
            "banner": {
                "format": [
                    {
                        "w": 160,
                        "h": 600
                    }
                ]
            }
        }],
        "site": {
            "id": "VxSoef",
            "domain": "https://pages.cloudflare.com",
            "page": "https://www.barchart.com/story/news/10992036/ford-stock-looks-cheap-here-ahead-of-earnings",
            "ref": "https://www.barchart.com/story/news/10992036/ford-stock-looks-cheap-here-ahead-of-earnings"
        }

    }
const prebidrequest06 = 
{
    "id": "57595b7d-7291-4aa0-b79e-2b10b5fb7a98",
    "imp": [ 

        {
            "id": "788b42e93d3dab4",
            "adUnitCode": "investingchannel_div_7042951268493629_HV",
            "placement": "barchart_HV_AC_Desktop_728x90_1",
            "banner": {
                "format": [
                    {
                        "w": 728,
                        "h": 90
                    },
                    {
                        "w": 970,
                        "h": 90
                    }
                ]
            }
        }
    ],
    "site": {
        "id": "VxSoef",
        "domain": "https://pages.cloudflare.com",
        "page": "https://www.barchart.com/story/news/10992036/ford-stock-looks-cheap-here-ahead-of-earnings",
        "ref": "https://www.barchart.com/story/news/10992036/ford-stock-looks-cheap-here-ahead-of-earnings"
    }
}


exports.prebid = class prebid
{

    constructor(page) {
        this.page = page
    }

    async postreqest_tc1() //site Id mismatch
    {
        // API POST request for prebid request
        console.log('***** PREBID REQUEST TEST CASE FOR SITE ID MISMATCH *****');
        const firstIssue = await this.page.request.post(apiurl,{
            data: prebidrequest01
            
        })
        // .then(res => {console.log(res)})  
        // .then(JSON => console.log(JSON))

        // firstIssue.getAllResponseHeaders(); 
        console.log('firstIssue');
        console.log(firstIssue.data);

        // expect(firstIssue.ok()).toBeTruthy();
        if(prebidrequest01.site.id == JSON.siteId)
        {
            console.log('Site Id Matches !!!');
        }
        else
        {
            console.log('Site id mismatch,responce code = 20');
        }

        
    }

    async postrequest_tc2 () //Impression Id missing
    {
        // API POST request for prebid request
        console.log('***** PREBID REQUEST TEST CASE FOR MISSING IMP_ID *****');
        const firstIssue = await this.page.request.post(apiurl, {
            data: prebidrequest02
            
        })
        .then(res => {console.log(res)})  
        .then(JSON => console.log(JSON))

        //   expect(firstIssue.ok()).toBeTruthy(); 
          
          console.log(firstIssue);

        if(prebidrequest02.site.id==JSON.siteId)
        {
              
            if(prebidrequest02.imp[0].id == null) 
            {
               console.log('Invalid Request, Responce code = 1');
            
            }
            else
            {
                console.log('responce code = 0');
            }
        }
    }  
    
    async postrequest_tc3() //Position mismatch
    {
        // API POST request for prebid request
        const firstIssue = await this.page.request.post(apiurl, {
            data: prebidrequest03
            
        })
        .then(res => {console.log(res)})  
        .then(JSON => console.log(JSON))
        

        //   expect(firstIssue.ok()).toBeTruthy(); 
          console.log('***** PREBID REQUEST TEST CASE FOR MISMATCH POSITION *****');
          console.log(firstIssue);
          

        if(prebidrequest03.site.id=='VxSoef')
        {
            if(!prebidrequest03.imp[0].adUnitCode)
            {
                console.log('Position in Line item mismatch, Responce code = 6');
            }
            else
            {
                console.log('Responce code = 0');
                
            }
        }
    }

    async postreqest_tc4() //Placement mismatch
    {
        // API POST request for prebid request
        console.log('***** PREBID REQUEST TEST CASE FOR PLACEMENT MISMATCH *****');
        const firstIssue = await this.page.request.post(apiurl, {
            data: prebidrequest04
            
        })
        .then(res => {console.log(res)})  
        .then(JSON => console.log(JSON))

          expect(firstIssue.ok()).toBeTruthy(); 
          
          console.log(firstIssue);

        if(prebidrequest04.site.id=='VxSoef')
        {
            if(!prebidrequest04.imp[0].placement)
            {
                console.log('No placement found, Responce code = 9');
            }
            else
            {
                console.log('Responce code = 0');
                
            }
        }
    }

    async postreqest_tc5()//Format mismatch
    {
        // API POST request for prebid request
        console.log('***** PREBID REQUEST TEST CASE FOR FORMAT MISMATCH *****');
        const firstIssue = await this.page.request.post(apiurl, {
            data: prebidrequest05
            
        })
        .then(res => {console.log(res)})  
        .then(JSON => console.log(JSON))

          expect(firstIssue.ok()).toBeTruthy(); 
          console.log(firstIssue);

        if(prebidrequest05.site.id=='VxSoef')
        {
            if(!prebidrequest05.imp[0].banner.format[0])
            {
                console.log('Format in Line item mismatch, Responce code = 2');
            }
            else
            {
                console.log('Responce code = 0');
                
            }

        }

    }

    async postreqest_tc6()//
    {
        
    }


}



//user agent customization

//request.on('response', response => {
//     console.log(response.statusCode);        
//     console.log(response.headers);
//     response.on('data', chunk => { fullResponse.body += chunk; });
// });