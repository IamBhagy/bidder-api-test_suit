const {test, request, expect} = require ('@playwright/test')
const axios = require('axios');
const { prebid } = require('../page_objects/prebid');
const { prebids2s } = require('../page_objects/prebids2s');
const { timeout} = require('../page_objects/timeout');
const {tagrequest} = require('../page_objects/tagrequest');
const {unitag} = require('../page_objects/unitag');
const {amp} = require('../page_objects/amp');
const {win_notification} = require('../page_objects/win_notification');
const {kw_debug} = require('../page_objects/kw_debug');

const REPO = 'test-repo-1';
const USER = 'github-username';
 
//TEST SUIT 1
test.describe('should create a bug report for PREBID post request', () => {test('API requets',
async ({ page }) => {

const PREBIDJS = new prebid(page);

await PREBIDJS.postreqest_tc1();
await PREBIDJS.postrequest_tc2();
await PREBIDJS.postrequest_tc3();
// await PREBIDJS.postrequest_tc4();
// await PREBIDJS.postrequest_tc5();

})
});

//TEST SUIT 2
test.describe('should create a bug report for PREBIDS2S post request', () => {test('API requets',
async ({ page }) => {

const PREBIDS2S =new prebids2s(page);
await PREBIDS2S.s2srequest();


 })
});  
 
//TEST SUIT 3
test.describe('should create a bug report for TIMEOUT post request', () => {test('API requets',
async ({ page }) => {

const TIMEOUT =new timeout(page);
await TIMEOUT.timeoutreqest();


 })
});  

//TEST SUIT 4
test.describe('should create a bug report for TAGREQUEST GET request', () => {test('API requets',
async ({ page }) => {

const TAGREQUEST =new tagrequest(page);
await TAGREQUEST.get_tag();

 })
});  

//TEST SUIT 5
test.describe('should create a bug report for UNITAG GET request', () => {test('API requets',
async ({ page }) => {

const UNITAG = new unitag(page);
await UNITAG.get_unitag();

})
});

//TEST SUIT 6
// test.describe('should create a bug report for AMP GET request', () => {test('API requets',
// async ({ page }) => {

// const GETAMP = new amp(page);
// await GETAMP.get_amp();

// })
// });

//TEST SUIT 7
test.describe('should create a bug report for WIN NOTIFICATION request', () => {test('API requets',
async ({ page }) => {

const WIN = new win_notification(page);
await WIN.get_win();
   

})
});

//TEST SUIT 8
test.describe('should create a bug report for KW DEBUG request', () => {test('API requets',
async ({ page }) => {

const KEYWORD = new kw_debug(page);
await KEYWORD.get_key();

})
});