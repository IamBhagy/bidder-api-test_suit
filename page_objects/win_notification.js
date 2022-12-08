const { expect} = require('@playwright/test')
const { request} = require ('request')
const axios = require('axios');
const parameters = {
  impid:'04d7e920-5574-4130-b752-c8092304f060',
  price:'0.0012',
  bidid:'289273d9-3101-4767-a487-f1b68af72ec5'
  }

exports.win_notification = class win_notification
{

    constructor(page) 
    {
        this.page = page
    }

    async get_win()
    {
        //API GET request for win notification request
    const WIN_NOTIFICATION = await axios.get('https://bid.atmtd.com/request', {
    params : 
      {
        parameters
      }
    })
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      console.log('****** WIN NOTIFICATION REQUEST *****');

      if(parameters.impid == '04d7e920-5574-4130-b752-c8092304f060')
      {
        console.log('Successful Request!!!')
      }

      else
      {
        console.log('Line Item Mismatch, Responce Code = 2 ')

      }
      // console.log(WIN_NOTIFICATION);
     

    }

} 