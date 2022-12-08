<testsuites id="" name="" tests="7" failures="1" skipped="0" errors="0" time="3.2952009999994187">
<testsuite name="users.spec.js" timestamp="1670478412259" hostname="" tests="7" failures="1" skipped="0" time="7.958" errors="0">
<testcase name="should create a bug report for PREBID post request API requets" classname="[chromium] › users.spec.js › should create a bug report for PREBID post request › API requets" time="1.545">
<failure message="users.spec.js:16:76 API requets" type="FAILURE">
<![CDATA[  [chromium] › users.spec.js:16:76 › should create a bug report for PREBID post request › API requets 

    TypeError: firstIssue.getAllResponseHeaders is not a function

       at ../page_objects/prebid.js:195

      193 |         // .then(JSON => console.log(JSON))
      194 |
    > 195 |         firstIssue.getAllResponseHeaders(); 
          |                    ^
      196 |         console.log('firstIssue');
      197 |         console.log(firstIssue.data);
      198 |

        at prebid.postreqest_tc1 (/Users/admin/Documents/bidder-api/page_objects/prebid.js:195:20)
        at /Users/admin/Documents/bidder-api/tests/users.spec.js:21:1
]]>
</failure>
<system-out>
<![CDATA[***** PREBID REQUEST TEST CASE FOR SITE ID MISMATCH *****
]]>
</system-out>
</testcase>
<testcase name="should create a bug report for PREBIDS2S post request API requets" classname="[chromium] › users.spec.js › should create a bug report for PREBIDS2S post request › API requets" time="1.345">
<system-out>
<![CDATA[request [90mundefined[39m
***** PREBID S2S REQUEST *****
APIResponse: 204 No Content
  Date: Thu, 08 Dec 2022 05:46:54 GMT
  Content-Type: application/json
  Connection: close
  Access-Control-Allow-Origin: https://www.insidermonkey.com
  Access-Control-Allow-Credentials: true
  Access-Control-Allow-Methods: GET,HEAD,POST,OPTIONS
  Access-Control-Allow-Headers: Content-Type, x-requested-with, set-cookie
  Access-Control-Max-Age: 86400
  Cache-Control: no-store, no-cache
  Set-Cookie: _atmtdMeruCap=d52c98303094a61da3705364a335e8d0e43a8e820;Max-Age=3600;SameSite=None; Domain=.bid.atmtd.com;Secure
  X-Intt-Response-Codes: 10
  X-Intt-Keyword-Source: 
  Strict-Transport-Security: max-age=15724800; includeSubDomains
Site Id Matches !!!
]]>
</system-out>
</testcase>
<testcase name="should create a bug report for TIMEOUT post request API requets" classname="[chromium] › users.spec.js › should create a bug report for TIMEOUT post request › API requets" time="1.344">
<system-out>
<![CDATA[******* TIMEOUT REQUEST ******** 
APIResponse: 502 Bad Gateway
  Date: Thu, 08 Dec 2022 05:46:54 GMT
  Content-Type: text/html
  Content-Length: 552
  Connection: close
  Strict-Transport-Security: max-age=15724800; includeSubDomains
]]>
</system-out>
</testcase>
<testcase name="should create a bug report for TAGREQUEST GET request API requets" classname="[chromium] › users.spec.js › should create a bug report for TAGREQUEST GET request › API requets" time="1.318">
<system-out>
<![CDATA[{
  status: [33m204[39m,
  statusText: [32m'No Content'[39m,
  headers: AxiosHeaders {
    date: [32m'Thu, 08 Dec 2022 05:46:54 GMT'[39m,
    [32m'content-type'[39m: [32m'application/json'[39m,
    connection: [32m'close'[39m,
    [32m'access-control-allow-origin'[39m: [32m''[39m,
    [32m'access-control-allow-credentials'[39m: [32m'true'[39m,
    [32m'access-control-allow-methods'[39m: [32m'GET,HEAD,POST,OPTIONS'[39m,
    [32m'access-control-allow-headers'[39m: [32m'Content-Type, x-requested-with, set-cookie'[39m,
    [32m'access-control-max-age'[39m: [32m'86400'[39m,
    [32m'cache-control'[39m: [32m'no-store, no-cache'[39m,
    [32m'set-cookie'[39m: [
      [32m'_atmtdMeruCap=d52c98303094a61da3705364a335e8d0e43a8e820;Max-Age=3600;SameSite=None; Domain=.bid.atmtd.com;Secure'[39m
    ],
    [32m'x-intt-response-codes'[39m: [32m'3'[39m,
    [32m'x-intt-keyword-source'[39m: [32m''[39m,
    [32m'strict-transport-security'[39m: [32m'max-age=15724800; includeSubDomains'[39m,
    [[32mSymbol(defaults)[39m]: [1mnull[22m
  },
  config: {
    transitional: {
      silentJSONParsing: [33mtrue[39m,
      forcedJSONParsing: [33mtrue[39m,
      clarifyTimeoutError: [33mfalse[39m
    },
    adapter: [36m[Function: httpAdapter][39m,
    transformRequest: [ [36m[Function: transformRequest][39m ],
    transformResponse: [ [36m[Function: transformResponse][39m ],
    timeout: [33m0[39m,
    xsrfCookieName: [32m'XSRF-TOKEN'[39m,
    xsrfHeaderName: [32m'X-XSRF-TOKEN'[39m,
    maxContentLength: [33m-1[39m,
    maxBodyLength: [33m-1[39m,
    env: { FormData: [36m[Function][39m, Blob: [1mnull[22m },
    validateStatus: [36m[Function: validateStatus][39m,
    headers: AxiosHeaders {
      [32m'User-Agent'[39m: [32m'axios/1.1.3'[39m,
      [32m'Accept-Encoding'[39m: [32m'gzip, deflate, br'[39m,
      [[32mSymbol(defaults)[39m]: [36m[Object][39m
    },
    params: {
      pos: [32m'End-of-Article'[39m,
      placement: [32m'AeRfv8'[39m,
      site_id: [32m'AeRfv8'[39m,
      size: [32m'728x90'[39m,
      page: [32m'https://investorplace.com/2022/10/why-investors-should-bet-100-on-sofi-stock/'[39m
    },
    method: [32m'get'[39m,
    url: [32m'https://bid.atmtd.com/request'[39m,
    data: [90mundefined[39m
  },
  request: [36m<ref *1>[39m ClientRequest {
    _events: [Object: null prototype] {
      socket: [36m[Function (anonymous)][39m,
      abort: [36m[Function (anonymous)][39m,
      aborted: [36m[Function (anonymous)][39m,
      connect: [36m[Function (anonymous)][39m,
      error: [36m[Function (anonymous)][39m,
      timeout: [36m[Function (anonymous)][39m,
      prefinish: [36m[Function: requestOnPrefinish][39m
    },
    _eventsCount: [33m7[39m,
    _maxListeners: [90mundefined[39m,
    outputData: [],
    outputSize: [33m0[39m,
    writable: [33mtrue[39m,
    destroyed: [33mfalse[39m,
    _last: [33mtrue[39m,
    chunkedEncoding: [33mfalse[39m,
    shouldKeepAlive: [33mfalse[39m,
    useChunkedEncodingByDefault: [33mfalse[39m,
    sendDate: [33mfalse[39m,
    _removedConnection: [33mfalse[39m,
    _removedContLen: [33mfalse[39m,
    _removedTE: [33mfalse[39m,
    _contentLength: [33m0[39m,
    _hasBody: [33mtrue[39m,
    _trailer: [32m''[39m,
    finished: [33mtrue[39m,
    _headerSent: [33mtrue[39m,
    socket: TLSSocket {
      _tlsOptions: [36m[Object][39m,
      _secureEstablished: [33mtrue[39m,
      _securePending: [33mfalse[39m,
      _newSessionPending: [33mfalse[39m,
      _controlReleased: [33mtrue[39m,
      secureConnecting: [33mfalse[39m,
      _SNICallback: [1mnull[22m,
      servername: [32m'bid.atmtd.com'[39m,
      alpnProtocol: [33mfalse[39m,
      authorized: [33mtrue[39m,
      authorizationError: [1mnull[22m,
      encrypted: [33mtrue[39m,
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m10[39m,
      connecting: [33mfalse[39m,
      _hadError: [33mfalse[39m,
      _parent: [1mnull[22m,
      _host: [32m'bid.atmtd.com'[39m,
      _readableState: [36m[ReadableState][39m,
      _maxListeners: [90mundefined[39m,
      _writableState: [36m[WritableState][39m,
      allowHalfOpen: [33mfalse[39m,
      _sockname: [1mnull[22m,
      _pendingData: [1mnull[22m,
      _pendingEncoding: [32m''[39m,
      server: [90mundefined[39m,
      _server: [1mnull[22m,
      ssl: [36m[TLSWrap][39m,
      _requestCert: [33mtrue[39m,
      _rejectUnauthorized: [33mtrue[39m,
      parser: [1mnull[22m,
      _httpMessage: [36m[Circular *1][39m,
      [[32mSymbol(res)[39m]: [36m[TLSWrap][39m,
      [[32mSymbol(verified)[39m]: [33mtrue[39m,
      [[32mSymbol(pendingSession)[39m]: [1mnull[22m,
      [[32mSymbol(async_id_symbol)[39m]: [33m166[39m,
      [[32mSymbol(kHandle)[39m]: [36m[TLSWrap][39m,
      [[32mSymbol(kSetNoDelay)[39m]: [33mfalse[39m,
      [[32mSymbol(lastWriteQueueSize)[39m]: [33m0[39m,
      [[32mSymbol(timeout)[39m]: [1mnull[22m,
      [[32mSymbol(kBuffer)[39m]: [1mnull[22m,
      [[32mSymbol(kBufferCb)[39m]: [1mnull[22m,
      [[32mSymbol(kBufferGen)[39m]: [1mnull[22m,
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m,
      [[32mSymbol(kBytesRead)[39m]: [33m0[39m,
      [[32mSymbol(kBytesWritten)[39m]: [33m0[39m,
      [[32mSymbol(connect-options)[39m]: [36m[Object][39m
    },
    _header: [32m'GET /request?pos=End-of-Article&placement=AeRfv8&site_id=AeRfv8&size=728x90&page=https:%2F%2Finvestorplace.com%2F2022%2F10%2Fwhy-investors-should-bet-100-on-sofi-stock%2F HTTP/1.1\r\n'[39m +
      [32m'Accept: application/json, text/plain, */*\r\n'[39m +
      [32m'User-Agent: axios/1.1.3\r\n'[39m +
      [32m'Accept-Encoding: gzip, deflate, br\r\n'[39m +
      [32m'Host: bid.atmtd.com\r\n'[39m +
      [32m'Connection: close\r\n'[39m +
      [32m'\r\n'[39m,
    _onPendingData: [36m[Function: noopPendingOutput][39m,
    agent: Agent {
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m2[39m,
      _maxListeners: [90mundefined[39m,
      defaultPort: [33m443[39m,
      protocol: [32m'https:'[39m,
      options: [36m[Object][39m,
      requests: {},
      sockets: [36m[Object][39m,
      freeSockets: {},
      keepAliveMsecs: [33m1000[39m,
      keepAlive: [33mfalse[39m,
      maxSockets: [33mInfinity[39m,
      maxFreeSockets: [33m256[39m,
      scheduling: [32m'fifo'[39m,
      maxTotalSockets: [33mInfinity[39m,
      totalSocketCount: [33m1[39m,
      maxCachedSessions: [33m100[39m,
      _sessionCache: [36m[Object][39m,
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m
    },
    socketPath: [90mundefined[39m,
    method: [32m'GET'[39m,
    maxHeaderSize: [90mundefined[39m,
    insecureHTTPParser: [90mundefined[39m,
    path: [32m'/request?pos=End-of-Article&placement=AeRfv8&site_id=AeRfv8&size=728x90&page=https:%2F%2Finvestorplace.com%2F2022%2F10%2Fwhy-investors-should-bet-100-on-sofi-stock%2F'[39m,
    _ended: [33mtrue[39m,
    res: IncomingMessage {
      _readableState: [36m[ReadableState][39m,
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m4[39m,
      _maxListeners: [90mundefined[39m,
      socket: [36m[TLSSocket][39m,
      httpVersionMajor: [33m1[39m,
      httpVersionMinor: [33m1[39m,
      httpVersion: [32m'1.1'[39m,
      complete: [33mtrue[39m,
      headers: [36m[Object][39m,
      rawHeaders: [36m[Array][39m,
      trailers: {},
      rawTrailers: [],
      aborted: [33mfalse[39m,
      upgrade: [33mfalse[39m,
      url: [32m''[39m,
      method: [1mnull[22m,
      statusCode: [33m204[39m,
      statusMessage: [32m'No Content'[39m,
      client: [36m[TLSSocket][39m,
      _consuming: [33mfalse[39m,
      _dumped: [33mfalse[39m,
      req: [36m[Circular *1][39m,
      responseUrl: [32m'https://bid.atmtd.com/request?pos=End-of-Article&placement=AeRfv8&site_id=AeRfv8&size=728x90&page=https:%2F%2Finvestorplace.com%2F2022%2F10%2Fwhy-investors-should-bet-100-on-sofi-stock%2F'[39m,
      redirects: [],
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m
    },
    aborted: [33mfalse[39m,
    timeoutCb: [1mnull[22m,
    upgradeOrConnect: [33mfalse[39m,
    parser: [1mnull[22m,
    maxHeadersCount: [1mnull[22m,
    reusedSocket: [33mfalse[39m,
    host: [32m'bid.atmtd.com'[39m,
    protocol: [32m'https:'[39m,
    _redirectable: Writable {
      _writableState: [36m[WritableState][39m,
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m3[39m,
      _maxListeners: [90mundefined[39m,
      _options: [36m[Object][39m,
      _ended: [33mtrue[39m,
      _ending: [33mtrue[39m,
      _redirectCount: [33m0[39m,
      _redirects: [],
      _requestBodyLength: [33m0[39m,
      _requestBodyBuffers: [],
      _onNativeResponse: [36m[Function (anonymous)][39m,
      _currentRequest: [36m[Circular *1][39m,
      _currentUrl: [32m'https://bid.atmtd.com/request?pos=End-of-Article&placement=AeRfv8&site_id=AeRfv8&size=728x90&page=https:%2F%2Finvestorplace.com%2F2022%2F10%2Fwhy-investors-should-bet-100-on-sofi-stock%2F'[39m,
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m
    },
    [[32mSymbol(kCapture)[39m]: [33mfalse[39m,
    [[32mSymbol(kNeedDrain)[39m]: [33mfalse[39m,
    [[32mSymbol(corked)[39m]: [33m0[39m,
    [[32mSymbol(kOutHeaders)[39m]: [Object: null prototype] {
      accept: [36m[Array][39m,
      [32m'user-agent'[39m: [36m[Array][39m,
      [32m'accept-encoding'[39m: [36m[Array][39m,
      host: [36m[Array][39m
    }
  },
  data: [32m''[39m
}
****** TAG REQUEST *******
[90mundefined[39m
]]>
</system-out>
</testcase>
<testcase name="should create a bug report for UNITAG GET request API requets" classname="[chromium] › users.spec.js › should create a bug report for UNITAG GET request › API requets" time="0.798">
<system-out>
<![CDATA[{
  status: [33m204[39m,
  statusText: [32m'No Content'[39m,
  headers: AxiosHeaders {
    date: [32m'Thu, 08 Dec 2022 05:46:55 GMT'[39m,
    [32m'content-type'[39m: [32m'application/json'[39m,
    connection: [32m'close'[39m,
    [32m'access-control-allow-origin'[39m: [32m''[39m,
    [32m'access-control-allow-credentials'[39m: [32m'true'[39m,
    [32m'access-control-allow-methods'[39m: [32m'GET,HEAD,POST,OPTIONS'[39m,
    [32m'access-control-allow-headers'[39m: [32m'Content-Type, x-requested-with, set-cookie'[39m,
    [32m'access-control-max-age'[39m: [32m'86400'[39m,
    [32m'cache-control'[39m: [32m'no-store, no-cache'[39m,
    [32m'set-cookie'[39m: [
      [32m'_atmtdMeruCap=d52c98303094a61da3705364a335e8d0e43a8e820;Max-Age=3600;SameSite=None; Domain=.bid.atmtd.com;Secure'[39m
    ],
    [32m'x-intt-response-codes'[39m: [32m'3'[39m,
    [32m'x-intt-keyword-source'[39m: [32m''[39m,
    [32m'strict-transport-security'[39m: [32m'max-age=15724800; includeSubDomains'[39m,
    [[32mSymbol(defaults)[39m]: [1mnull[22m
  },
  config: {
    transitional: {
      silentJSONParsing: [33mtrue[39m,
      forcedJSONParsing: [33mtrue[39m,
      clarifyTimeoutError: [33mfalse[39m
    },
    adapter: [36m[Function: httpAdapter][39m,
    transformRequest: [ [36m[Function: transformRequest][39m ],
    transformResponse: [ [36m[Function: transformResponse][39m ],
    timeout: [33m0[39m,
    xsrfCookieName: [32m'XSRF-TOKEN'[39m,
    xsrfHeaderName: [32m'X-XSRF-TOKEN'[39m,
    maxContentLength: [33m-1[39m,
    maxBodyLength: [33m-1[39m,
    env: { FormData: [36m[Function][39m, Blob: [1mnull[22m },
    validateStatus: [36m[Function: validateStatus][39m,
    headers: AxiosHeaders {
      [32m'User-Agent'[39m: [32m'axios/1.1.3'[39m,
      [32m'Accept-Encoding'[39m: [32m'gzip, deflate, br'[39m,
      [[32mSymbol(defaults)[39m]: [36m[Object][39m
    },
    params: {
      page: [32m'https://www.uscreditcards101.com/trade-up-review/'[39m,
      pos: [32m'Test-Position'[39m,
      size: [32m'300x250,160x600, 728x90'[39m,
      click_macro: [32m'Test-click-macro-to-be-replaced-with-something-from-prod'[39m,
      publisher_id: [32m'76'[39m
    },
    method: [32m'get'[39m,
    url: [32m'https://bid.atmtd.com/request'[39m,
    data: [90mundefined[39m
  },
  request: [36m<ref *1>[39m ClientRequest {
    _events: [Object: null prototype] {
      socket: [36m[Function (anonymous)][39m,
      abort: [36m[Function (anonymous)][39m,
      aborted: [36m[Function (anonymous)][39m,
      connect: [36m[Function (anonymous)][39m,
      error: [36m[Function (anonymous)][39m,
      timeout: [36m[Function (anonymous)][39m,
      prefinish: [36m[Function: requestOnPrefinish][39m
    },
    _eventsCount: [33m7[39m,
    _maxListeners: [90mundefined[39m,
    outputData: [],
    outputSize: [33m0[39m,
    writable: [33mtrue[39m,
    destroyed: [33mfalse[39m,
    _last: [33mtrue[39m,
    chunkedEncoding: [33mfalse[39m,
    shouldKeepAlive: [33mfalse[39m,
    useChunkedEncodingByDefault: [33mfalse[39m,
    sendDate: [33mfalse[39m,
    _removedConnection: [33mfalse[39m,
    _removedContLen: [33mfalse[39m,
    _removedTE: [33mfalse[39m,
    _contentLength: [33m0[39m,
    _hasBody: [33mtrue[39m,
    _trailer: [32m''[39m,
    finished: [33mtrue[39m,
    _headerSent: [33mtrue[39m,
    socket: TLSSocket {
      _tlsOptions: [36m[Object][39m,
      _secureEstablished: [33mtrue[39m,
      _securePending: [33mfalse[39m,
      _newSessionPending: [33mfalse[39m,
      _controlReleased: [33mtrue[39m,
      secureConnecting: [33mfalse[39m,
      _SNICallback: [1mnull[22m,
      servername: [32m'bid.atmtd.com'[39m,
      alpnProtocol: [33mfalse[39m,
      authorized: [33mtrue[39m,
      authorizationError: [1mnull[22m,
      encrypted: [33mtrue[39m,
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m10[39m,
      connecting: [33mfalse[39m,
      _hadError: [33mfalse[39m,
      _parent: [1mnull[22m,
      _host: [32m'bid.atmtd.com'[39m,
      _readableState: [36m[ReadableState][39m,
      _maxListeners: [90mundefined[39m,
      _writableState: [36m[WritableState][39m,
      allowHalfOpen: [33mfalse[39m,
      _sockname: [1mnull[22m,
      _pendingData: [1mnull[22m,
      _pendingEncoding: [32m''[39m,
      server: [90mundefined[39m,
      _server: [1mnull[22m,
      ssl: [36m[TLSWrap][39m,
      _requestCert: [33mtrue[39m,
      _rejectUnauthorized: [33mtrue[39m,
      parser: [1mnull[22m,
      _httpMessage: [36m[Circular *1][39m,
      [[32mSymbol(res)[39m]: [36m[TLSWrap][39m,
      [[32mSymbol(verified)[39m]: [33mtrue[39m,
      [[32mSymbol(pendingSession)[39m]: [1mnull[22m,
      [[32mSymbol(async_id_symbol)[39m]: [33m371[39m,
      [[32mSymbol(kHandle)[39m]: [36m[TLSWrap][39m,
      [[32mSymbol(kSetNoDelay)[39m]: [33mfalse[39m,
      [[32mSymbol(lastWriteQueueSize)[39m]: [33m0[39m,
      [[32mSymbol(timeout)[39m]: [1mnull[22m,
      [[32mSymbol(kBuffer)[39m]: [1mnull[22m,
      [[32mSymbol(kBufferCb)[39m]: [1mnull[22m,
      [[32mSymbol(kBufferGen)[39m]: [1mnull[22m,
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m,
      [[32mSymbol(kBytesRead)[39m]: [33m0[39m,
      [[32mSymbol(kBytesWritten)[39m]: [33m0[39m,
      [[32mSymbol(connect-options)[39m]: [36m[Object][39m
    },
    _header: [32m'GET /request?page=https:%2F%2Fwww.uscreditcards101.com%2Ftrade-up-review%2F&pos=Test-Position&size=300x250,160x600,+728x90&click_macro=Test-click-macro-to-be-replaced-with-something-from-prod&publisher_id=76 HTTP/1.1\r\n'[39m +
      [32m'Accept: application/json, text/plain, */*\r\n'[39m +
      [32m'User-Agent: axios/1.1.3\r\n'[39m +
      [32m'Accept-Encoding: gzip, deflate, br\r\n'[39m +
      [32m'Host: bid.atmtd.com\r\n'[39m +
      [32m'Connection: close\r\n'[39m +
      [32m'\r\n'[39m,
    _onPendingData: [36m[Function: noopPendingOutput][39m,
    agent: Agent {
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m2[39m,
      _maxListeners: [90mundefined[39m,
      defaultPort: [33m443[39m,
      protocol: [32m'https:'[39m,
      options: [36m[Object][39m,
      requests: {},
      sockets: [36m[Object][39m,
      freeSockets: {},
      keepAliveMsecs: [33m1000[39m,
      keepAlive: [33mfalse[39m,
      maxSockets: [33mInfinity[39m,
      maxFreeSockets: [33m256[39m,
      scheduling: [32m'fifo'[39m,
      maxTotalSockets: [33mInfinity[39m,
      totalSocketCount: [33m1[39m,
      maxCachedSessions: [33m100[39m,
      _sessionCache: [36m[Object][39m,
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m
    },
    socketPath: [90mundefined[39m,
    method: [32m'GET'[39m,
    maxHeaderSize: [90mundefined[39m,
    insecureHTTPParser: [90mundefined[39m,
    path: [32m'/request?page=https:%2F%2Fwww.uscreditcards101.com%2Ftrade-up-review%2F&pos=Test-Position&size=300x250,160x600,+728x90&click_macro=Test-click-macro-to-be-replaced-with-something-from-prod&publisher_id=76'[39m,
    _ended: [33mtrue[39m,
    res: IncomingMessage {
      _readableState: [36m[ReadableState][39m,
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m4[39m,
      _maxListeners: [90mundefined[39m,
      socket: [36m[TLSSocket][39m,
      httpVersionMajor: [33m1[39m,
      httpVersionMinor: [33m1[39m,
      httpVersion: [32m'1.1'[39m,
      complete: [33mtrue[39m,
      headers: [36m[Object][39m,
      rawHeaders: [36m[Array][39m,
      trailers: {},
      rawTrailers: [],
      aborted: [33mfalse[39m,
      upgrade: [33mfalse[39m,
      url: [32m''[39m,
      method: [1mnull[22m,
      statusCode: [33m204[39m,
      statusMessage: [32m'No Content'[39m,
      client: [36m[TLSSocket][39m,
      _consuming: [33mfalse[39m,
      _dumped: [33mfalse[39m,
      req: [36m[Circular *1][39m,
      responseUrl: [32m'https://bid.atmtd.com/request?page=https:%2F%2Fwww.uscreditcards101.com%2Ftrade-up-review%2F&pos=Test-Position&size=300x250,160x600,+728x90&click_macro=Test-click-macro-to-be-replaced-with-something-from-prod&publisher_id=76'[39m,
      redirects: [],
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m
    },
    aborted: [33mfalse[39m,
    timeoutCb: [1mnull[22m,
    upgradeOrConnect: [33mfalse[39m,
    parser: [1mnull[22m,
    maxHeadersCount: [1mnull[22m,
    reusedSocket: [33mfalse[39m,
    host: [32m'bid.atmtd.com'[39m,
    protocol: [32m'https:'[39m,
    _redirectable: Writable {
      _writableState: [36m[WritableState][39m,
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m3[39m,
      _maxListeners: [90mundefined[39m,
      _options: [36m[Object][39m,
      _ended: [33mtrue[39m,
      _ending: [33mtrue[39m,
      _redirectCount: [33m0[39m,
      _redirects: [],
      _requestBodyLength: [33m0[39m,
      _requestBodyBuffers: [],
      _onNativeResponse: [36m[Function (anonymous)][39m,
      _currentRequest: [36m[Circular *1][39m,
      _currentUrl: [32m'https://bid.atmtd.com/request?page=https:%2F%2Fwww.uscreditcards101.com%2Ftrade-up-review%2F&pos=Test-Position&size=300x250,160x600,+728x90&click_macro=Test-click-macro-to-be-replaced-with-something-from-prod&publisher_id=76'[39m,
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m
    },
    [[32mSymbol(kCapture)[39m]: [33mfalse[39m,
    [[32mSymbol(kNeedDrain)[39m]: [33mfalse[39m,
    [[32mSymbol(corked)[39m]: [33m0[39m,
    [[32mSymbol(kOutHeaders)[39m]: [Object: null prototype] {
      accept: [36m[Array][39m,
      [32m'user-agent'[39m: [36m[Array][39m,
      [32m'accept-encoding'[39m: [36m[Array][39m,
      host: [36m[Array][39m
    }
  },
  data: [32m''[39m
}
***** UNITAG REQUEST *******
[90mundefined[39m
]]>
</system-out>
</testcase>
<testcase name="should create a bug report for WIN NOTIFICATION request API requets" classname="[chromium] › users.spec.js › should create a bug report for WIN NOTIFICATION request › API requets" time="0.802">
<system-out>
<![CDATA[{
  status: [33m204[39m,
  statusText: [32m'No Content'[39m,
  headers: AxiosHeaders {
    date: [32m'Thu, 08 Dec 2022 05:46:55 GMT'[39m,
    [32m'content-type'[39m: [32m'application/json'[39m,
    connection: [32m'close'[39m,
    [32m'access-control-allow-origin'[39m: [32m''[39m,
    [32m'access-control-allow-credentials'[39m: [32m'true'[39m,
    [32m'access-control-allow-methods'[39m: [32m'GET,HEAD,POST,OPTIONS'[39m,
    [32m'access-control-allow-headers'[39m: [32m'Content-Type, x-requested-with, set-cookie'[39m,
    [32m'access-control-max-age'[39m: [32m'86400'[39m,
    [32m'cache-control'[39m: [32m'no-store, no-cache'[39m,
    [32m'set-cookie'[39m: [
      [32m'_atmtdMeruCap=d52c98303094a61da3705364a335e8d0e43a8e820;Max-Age=3600;SameSite=None; Domain=.bid.atmtd.com;Secure'[39m
    ],
    [32m'x-intt-response-codes'[39m: [32m'3'[39m,
    [32m'x-intt-keyword-source'[39m: [32m''[39m,
    [32m'strict-transport-security'[39m: [32m'max-age=15724800; includeSubDomains'[39m,
    [[32mSymbol(defaults)[39m]: [1mnull[22m
  },
  config: {
    transitional: {
      silentJSONParsing: [33mtrue[39m,
      forcedJSONParsing: [33mtrue[39m,
      clarifyTimeoutError: [33mfalse[39m
    },
    adapter: [36m[Function: httpAdapter][39m,
    transformRequest: [ [36m[Function: transformRequest][39m ],
    transformResponse: [ [36m[Function: transformResponse][39m ],
    timeout: [33m0[39m,
    xsrfCookieName: [32m'XSRF-TOKEN'[39m,
    xsrfHeaderName: [32m'X-XSRF-TOKEN'[39m,
    maxContentLength: [33m-1[39m,
    maxBodyLength: [33m-1[39m,
    env: { FormData: [36m[Function][39m, Blob: [1mnull[22m },
    validateStatus: [36m[Function: validateStatus][39m,
    headers: AxiosHeaders {
      [32m'User-Agent'[39m: [32m'axios/1.1.3'[39m,
      [32m'Accept-Encoding'[39m: [32m'gzip, deflate, br'[39m,
      [[32mSymbol(defaults)[39m]: [36m[Object][39m
    },
    params: { parameters: [36m[Object][39m },
    method: [32m'get'[39m,
    url: [32m'https://bid.atmtd.com/request'[39m,
    data: [90mundefined[39m
  },
  request: [36m<ref *1>[39m ClientRequest {
    _events: [Object: null prototype] {
      socket: [36m[Function (anonymous)][39m,
      abort: [36m[Function (anonymous)][39m,
      aborted: [36m[Function (anonymous)][39m,
      connect: [36m[Function (anonymous)][39m,
      error: [36m[Function (anonymous)][39m,
      timeout: [36m[Function (anonymous)][39m,
      prefinish: [36m[Function: requestOnPrefinish][39m
    },
    _eventsCount: [33m7[39m,
    _maxListeners: [90mundefined[39m,
    outputData: [],
    outputSize: [33m0[39m,
    writable: [33mtrue[39m,
    destroyed: [33mfalse[39m,
    _last: [33mtrue[39m,
    chunkedEncoding: [33mfalse[39m,
    shouldKeepAlive: [33mfalse[39m,
    useChunkedEncodingByDefault: [33mfalse[39m,
    sendDate: [33mfalse[39m,
    _removedConnection: [33mfalse[39m,
    _removedContLen: [33mfalse[39m,
    _removedTE: [33mfalse[39m,
    _contentLength: [33m0[39m,
    _hasBody: [33mtrue[39m,
    _trailer: [32m''[39m,
    finished: [33mtrue[39m,
    _headerSent: [33mtrue[39m,
    socket: TLSSocket {
      _tlsOptions: [36m[Object][39m,
      _secureEstablished: [33mtrue[39m,
      _securePending: [33mfalse[39m,
      _newSessionPending: [33mfalse[39m,
      _controlReleased: [33mtrue[39m,
      secureConnecting: [33mfalse[39m,
      _SNICallback: [1mnull[22m,
      servername: [32m'bid.atmtd.com'[39m,
      alpnProtocol: [33mfalse[39m,
      authorized: [33mtrue[39m,
      authorizationError: [1mnull[22m,
      encrypted: [33mtrue[39m,
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m10[39m,
      connecting: [33mfalse[39m,
      _hadError: [33mfalse[39m,
      _parent: [1mnull[22m,
      _host: [32m'bid.atmtd.com'[39m,
      _readableState: [36m[ReadableState][39m,
      _maxListeners: [90mundefined[39m,
      _writableState: [36m[WritableState][39m,
      allowHalfOpen: [33mfalse[39m,
      _sockname: [1mnull[22m,
      _pendingData: [1mnull[22m,
      _pendingEncoding: [32m''[39m,
      server: [90mundefined[39m,
      _server: [1mnull[22m,
      ssl: [36m[TLSWrap][39m,
      _requestCert: [33mtrue[39m,
      _rejectUnauthorized: [33mtrue[39m,
      parser: [1mnull[22m,
      _httpMessage: [36m[Circular *1][39m,
      [[32mSymbol(res)[39m]: [36m[TLSWrap][39m,
      [[32mSymbol(verified)[39m]: [33mtrue[39m,
      [[32mSymbol(pendingSession)[39m]: [1mnull[22m,
      [[32mSymbol(async_id_symbol)[39m]: [33m370[39m,
      [[32mSymbol(kHandle)[39m]: [36m[TLSWrap][39m,
      [[32mSymbol(kSetNoDelay)[39m]: [33mfalse[39m,
      [[32mSymbol(lastWriteQueueSize)[39m]: [33m0[39m,
      [[32mSymbol(timeout)[39m]: [1mnull[22m,
      [[32mSymbol(kBuffer)[39m]: [1mnull[22m,
      [[32mSymbol(kBufferCb)[39m]: [1mnull[22m,
      [[32mSymbol(kBufferGen)[39m]: [1mnull[22m,
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m,
      [[32mSymbol(kBytesRead)[39m]: [33m0[39m,
      [[32mSymbol(kBytesWritten)[39m]: [33m0[39m,
      [[32mSymbol(connect-options)[39m]: [36m[Object][39m
    },
    _header: [32m'GET /request?parameters[impid]=04d7e920-5574-4130-b752-c8092304f060&parameters[price]=0.0012&parameters[bidid]=289273d9-3101-4767-a487-f1b68af72ec5 HTTP/1.1\r\n'[39m +
      [32m'Accept: application/json, text/plain, */*\r\n'[39m +
      [32m'User-Agent: axios/1.1.3\r\n'[39m +
      [32m'Accept-Encoding: gzip, deflate, br\r\n'[39m +
      [32m'Host: bid.atmtd.com\r\n'[39m +
      [32m'Connection: close\r\n'[39m +
      [32m'\r\n'[39m,
    _onPendingData: [36m[Function: noopPendingOutput][39m,
    agent: Agent {
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m2[39m,
      _maxListeners: [90mundefined[39m,
      defaultPort: [33m443[39m,
      protocol: [32m'https:'[39m,
      options: [36m[Object][39m,
      requests: {},
      sockets: [36m[Object][39m,
      freeSockets: {},
      keepAliveMsecs: [33m1000[39m,
      keepAlive: [33mfalse[39m,
      maxSockets: [33mInfinity[39m,
      maxFreeSockets: [33m256[39m,
      scheduling: [32m'fifo'[39m,
      maxTotalSockets: [33mInfinity[39m,
      totalSocketCount: [33m1[39m,
      maxCachedSessions: [33m100[39m,
      _sessionCache: [36m[Object][39m,
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m
    },
    socketPath: [90mundefined[39m,
    method: [32m'GET'[39m,
    maxHeaderSize: [90mundefined[39m,
    insecureHTTPParser: [90mundefined[39m,
    path: [32m'/request?parameters[impid]=04d7e920-5574-4130-b752-c8092304f060&parameters[price]=0.0012&parameters[bidid]=289273d9-3101-4767-a487-f1b68af72ec5'[39m,
    _ended: [33mtrue[39m,
    res: IncomingMessage {
      _readableState: [36m[ReadableState][39m,
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m4[39m,
      _maxListeners: [90mundefined[39m,
      socket: [36m[TLSSocket][39m,
      httpVersionMajor: [33m1[39m,
      httpVersionMinor: [33m1[39m,
      httpVersion: [32m'1.1'[39m,
      complete: [33mtrue[39m,
      headers: [36m[Object][39m,
      rawHeaders: [36m[Array][39m,
      trailers: {},
      rawTrailers: [],
      aborted: [33mfalse[39m,
      upgrade: [33mfalse[39m,
      url: [32m''[39m,
      method: [1mnull[22m,
      statusCode: [33m204[39m,
      statusMessage: [32m'No Content'[39m,
      client: [36m[TLSSocket][39m,
      _consuming: [33mfalse[39m,
      _dumped: [33mfalse[39m,
      req: [36m[Circular *1][39m,
      responseUrl: [32m'https://bid.atmtd.com/request?parameters[impid]=04d7e920-5574-4130-b752-c8092304f060&parameters[price]=0.0012&parameters[bidid]=289273d9-3101-4767-a487-f1b68af72ec5'[39m,
      redirects: [],
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m
    },
    aborted: [33mfalse[39m,
    timeoutCb: [1mnull[22m,
    upgradeOrConnect: [33mfalse[39m,
    parser: [1mnull[22m,
    maxHeadersCount: [1mnull[22m,
    reusedSocket: [33mfalse[39m,
    host: [32m'bid.atmtd.com'[39m,
    protocol: [32m'https:'[39m,
    _redirectable: Writable {
      _writableState: [36m[WritableState][39m,
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m3[39m,
      _maxListeners: [90mundefined[39m,
      _options: [36m[Object][39m,
      _ended: [33mtrue[39m,
      _ending: [33mtrue[39m,
      _redirectCount: [33m0[39m,
      _redirects: [],
      _requestBodyLength: [33m0[39m,
      _requestBodyBuffers: [],
      _onNativeResponse: [36m[Function (anonymous)][39m,
      _currentRequest: [36m[Circular *1][39m,
      _currentUrl: [32m'https://bid.atmtd.com/request?parameters[impid]=04d7e920-5574-4130-b752-c8092304f060&parameters[price]=0.0012&parameters[bidid]=289273d9-3101-4767-a487-f1b68af72ec5'[39m,
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m
    },
    [[32mSymbol(kCapture)[39m]: [33mfalse[39m,
    [[32mSymbol(kNeedDrain)[39m]: [33mfalse[39m,
    [[32mSymbol(corked)[39m]: [33m0[39m,
    [[32mSymbol(kOutHeaders)[39m]: [Object: null prototype] {
      accept: [36m[Array][39m,
      [32m'user-agent'[39m: [36m[Array][39m,
      [32m'accept-encoding'[39m: [36m[Array][39m,
      host: [36m[Array][39m
    }
  },
  data: [32m''[39m
}
****** WIN NOTIFICATION REQUEST *****
Successful Request!!!
]]>
</system-out>
</testcase>
<testcase name="should create a bug report for KW DEBUG request API requets" classname="[chromium] › users.spec.js › should create a bug report for KW DEBUG request › API requets" time="0.806">
<system-out>
<![CDATA[{
  status: [33m204[39m,
  statusText: [32m'No Content'[39m,
  headers: AxiosHeaders {
    date: [32m'Thu, 08 Dec 2022 05:46:55 GMT'[39m,
    [32m'content-type'[39m: [32m'application/json'[39m,
    connection: [32m'close'[39m,
    [32m'access-control-allow-origin'[39m: [32m''[39m,
    [32m'access-control-allow-credentials'[39m: [32m'true'[39m,
    [32m'access-control-allow-methods'[39m: [32m'GET,HEAD,POST,OPTIONS'[39m,
    [32m'access-control-allow-headers'[39m: [32m'Content-Type, x-requested-with, set-cookie'[39m,
    [32m'access-control-max-age'[39m: [32m'86400'[39m,
    [32m'cache-control'[39m: [32m'no-store, no-cache'[39m,
    [32m'set-cookie'[39m: [
      [32m'_atmtdMeruCap=d52c98303094a61da3705364a335e8d0e43a8e820;Max-Age=3600;SameSite=None; Domain=.bid.atmtd.com;Secure'[39m
    ],
    [32m'x-intt-response-codes'[39m: [32m'3'[39m,
    [32m'x-intt-keyword-source'[39m: [32m''[39m,
    [32m'strict-transport-security'[39m: [32m'max-age=15724800; includeSubDomains'[39m,
    [[32mSymbol(defaults)[39m]: [1mnull[22m
  },
  config: {
    transitional: {
      silentJSONParsing: [33mtrue[39m,
      forcedJSONParsing: [33mtrue[39m,
      clarifyTimeoutError: [33mfalse[39m
    },
    adapter: [36m[Function: httpAdapter][39m,
    transformRequest: [ [36m[Function: transformRequest][39m ],
    transformResponse: [ [36m[Function: transformResponse][39m ],
    timeout: [33m0[39m,
    xsrfCookieName: [32m'XSRF-TOKEN'[39m,
    xsrfHeaderName: [32m'X-XSRF-TOKEN'[39m,
    maxContentLength: [33m-1[39m,
    maxBodyLength: [33m-1[39m,
    env: { FormData: [36m[Function][39m, Blob: [1mnull[22m },
    validateStatus: [36m[Function: validateStatus][39m,
    headers: AxiosHeaders {
      [32m'User-Agent'[39m: [32m'axios/1.1.3'[39m,
      [32m'Accept-Encoding'[39m: [32m'gzip, deflate, br'[39m,
      [[32mSymbol(defaults)[39m]: [36m[Object][39m
    },
    params: {
      url: [32m'https://investorplace.com/2022/10/is-this-bull-market-the-real-deal/'[39m,
      version: [32m'v3'[39m
    },
    method: [32m'get'[39m,
    url: [32m'https://bid.atmtd.com/request'[39m,
    data: [90mundefined[39m
  },
  request: [36m<ref *1>[39m ClientRequest {
    _events: [Object: null prototype] {
      socket: [36m[Function (anonymous)][39m,
      abort: [36m[Function (anonymous)][39m,
      aborted: [36m[Function (anonymous)][39m,
      connect: [36m[Function (anonymous)][39m,
      error: [36m[Function (anonymous)][39m,
      timeout: [36m[Function (anonymous)][39m,
      prefinish: [36m[Function: requestOnPrefinish][39m
    },
    _eventsCount: [33m7[39m,
    _maxListeners: [90mundefined[39m,
    outputData: [],
    outputSize: [33m0[39m,
    writable: [33mtrue[39m,
    destroyed: [33mfalse[39m,
    _last: [33mtrue[39m,
    chunkedEncoding: [33mfalse[39m,
    shouldKeepAlive: [33mfalse[39m,
    useChunkedEncodingByDefault: [33mfalse[39m,
    sendDate: [33mfalse[39m,
    _removedConnection: [33mfalse[39m,
    _removedContLen: [33mfalse[39m,
    _removedTE: [33mfalse[39m,
    _contentLength: [33m0[39m,
    _hasBody: [33mtrue[39m,
    _trailer: [32m''[39m,
    finished: [33mtrue[39m,
    _headerSent: [33mtrue[39m,
    socket: TLSSocket {
      _tlsOptions: [36m[Object][39m,
      _secureEstablished: [33mtrue[39m,
      _securePending: [33mfalse[39m,
      _newSessionPending: [33mfalse[39m,
      _controlReleased: [33mtrue[39m,
      secureConnecting: [33mfalse[39m,
      _SNICallback: [1mnull[22m,
      servername: [32m'bid.atmtd.com'[39m,
      alpnProtocol: [33mfalse[39m,
      authorized: [33mtrue[39m,
      authorizationError: [1mnull[22m,
      encrypted: [33mtrue[39m,
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m10[39m,
      connecting: [33mfalse[39m,
      _hadError: [33mfalse[39m,
      _parent: [1mnull[22m,
      _host: [32m'bid.atmtd.com'[39m,
      _readableState: [36m[ReadableState][39m,
      _maxListeners: [90mundefined[39m,
      _writableState: [36m[WritableState][39m,
      allowHalfOpen: [33mfalse[39m,
      _sockname: [1mnull[22m,
      _pendingData: [1mnull[22m,
      _pendingEncoding: [32m''[39m,
      server: [90mundefined[39m,
      _server: [1mnull[22m,
      ssl: [36m[TLSWrap][39m,
      _requestCert: [33mtrue[39m,
      _rejectUnauthorized: [33mtrue[39m,
      parser: [1mnull[22m,
      _httpMessage: [36m[Circular *1][39m,
      [[32mSymbol(res)[39m]: [36m[TLSWrap][39m,
      [[32mSymbol(verified)[39m]: [33mtrue[39m,
      [[32mSymbol(pendingSession)[39m]: [1mnull[22m,
      [[32mSymbol(async_id_symbol)[39m]: [33m369[39m,
      [[32mSymbol(kHandle)[39m]: [36m[TLSWrap][39m,
      [[32mSymbol(kSetNoDelay)[39m]: [33mfalse[39m,
      [[32mSymbol(lastWriteQueueSize)[39m]: [33m0[39m,
      [[32mSymbol(timeout)[39m]: [1mnull[22m,
      [[32mSymbol(kBuffer)[39m]: [1mnull[22m,
      [[32mSymbol(kBufferCb)[39m]: [1mnull[22m,
      [[32mSymbol(kBufferGen)[39m]: [1mnull[22m,
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m,
      [[32mSymbol(kBytesRead)[39m]: [33m0[39m,
      [[32mSymbol(kBytesWritten)[39m]: [33m0[39m,
      [[32mSymbol(connect-options)[39m]: [36m[Object][39m
    },
    _header: [32m'GET /request?url=https:%2F%2Finvestorplace.com%2F2022%2F10%2Fis-this-bull-market-the-real-deal%2F&version=v3 HTTP/1.1\r\n'[39m +
      [32m'Accept: application/json, text/plain, */*\r\n'[39m +
      [32m'User-Agent: axios/1.1.3\r\n'[39m +
      [32m'Accept-Encoding: gzip, deflate, br\r\n'[39m +
      [32m'Host: bid.atmtd.com\r\n'[39m +
      [32m'Connection: close\r\n'[39m +
      [32m'\r\n'[39m,
    _onPendingData: [36m[Function: noopPendingOutput][39m,
    agent: Agent {
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m2[39m,
      _maxListeners: [90mundefined[39m,
      defaultPort: [33m443[39m,
      protocol: [32m'https:'[39m,
      options: [36m[Object][39m,
      requests: {},
      sockets: [36m[Object][39m,
      freeSockets: {},
      keepAliveMsecs: [33m1000[39m,
      keepAlive: [33mfalse[39m,
      maxSockets: [33mInfinity[39m,
      maxFreeSockets: [33m256[39m,
      scheduling: [32m'fifo'[39m,
      maxTotalSockets: [33mInfinity[39m,
      totalSocketCount: [33m1[39m,
      maxCachedSessions: [33m100[39m,
      _sessionCache: [36m[Object][39m,
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m
    },
    socketPath: [90mundefined[39m,
    method: [32m'GET'[39m,
    maxHeaderSize: [90mundefined[39m,
    insecureHTTPParser: [90mundefined[39m,
    path: [32m'/request?url=https:%2F%2Finvestorplace.com%2F2022%2F10%2Fis-this-bull-market-the-real-deal%2F&version=v3'[39m,
    _ended: [33mtrue[39m,
    res: IncomingMessage {
      _readableState: [36m[ReadableState][39m,
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m4[39m,
      _maxListeners: [90mundefined[39m,
      socket: [36m[TLSSocket][39m,
      httpVersionMajor: [33m1[39m,
      httpVersionMinor: [33m1[39m,
      httpVersion: [32m'1.1'[39m,
      complete: [33mtrue[39m,
      headers: [36m[Object][39m,
      rawHeaders: [36m[Array][39m,
      trailers: {},
      rawTrailers: [],
      aborted: [33mfalse[39m,
      upgrade: [33mfalse[39m,
      url: [32m''[39m,
      method: [1mnull[22m,
      statusCode: [33m204[39m,
      statusMessage: [32m'No Content'[39m,
      client: [36m[TLSSocket][39m,
      _consuming: [33mfalse[39m,
      _dumped: [33mfalse[39m,
      req: [36m[Circular *1][39m,
      responseUrl: [32m'https://bid.atmtd.com/request?url=https:%2F%2Finvestorplace.com%2F2022%2F10%2Fis-this-bull-market-the-real-deal%2F&version=v3'[39m,
      redirects: [],
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m
    },
    aborted: [33mfalse[39m,
    timeoutCb: [1mnull[22m,
    upgradeOrConnect: [33mfalse[39m,
    parser: [1mnull[22m,
    maxHeadersCount: [1mnull[22m,
    reusedSocket: [33mfalse[39m,
    host: [32m'bid.atmtd.com'[39m,
    protocol: [32m'https:'[39m,
    _redirectable: Writable {
      _writableState: [36m[WritableState][39m,
      _events: [36m[Object: null prototype][39m,
      _eventsCount: [33m3[39m,
      _maxListeners: [90mundefined[39m,
      _options: [36m[Object][39m,
      _ended: [33mtrue[39m,
      _ending: [33mtrue[39m,
      _redirectCount: [33m0[39m,
      _redirects: [],
      _requestBodyLength: [33m0[39m,
      _requestBodyBuffers: [],
      _onNativeResponse: [36m[Function (anonymous)][39m,
      _currentRequest: [36m[Circular *1][39m,
      _currentUrl: [32m'https://bid.atmtd.com/request?url=https:%2F%2Finvestorplace.com%2F2022%2F10%2Fis-this-bull-market-the-real-deal%2F&version=v3'[39m,
      [[32mSymbol(kCapture)[39m]: [33mfalse[39m
    },
    [[32mSymbol(kCapture)[39m]: [33mfalse[39m,
    [[32mSymbol(kNeedDrain)[39m]: [33mfalse[39m,
    [[32mSymbol(corked)[39m]: [33m0[39m,
    [[32mSymbol(kOutHeaders)[39m]: [Object: null prototype] {
      accept: [36m[Array][39m,
      [32m'user-agent'[39m: [36m[Array][39m,
      [32m'accept-encoding'[39m: [36m[Array][39m,
      host: [36m[Array][39m
    }
  },
  data: [32m''[39m
}
******* KEY_WORD DEBUG ENDPOINT ******
[90mundefined[39m
]]>
</system-out>
</testcase>
</testsuite>
</testsuites>