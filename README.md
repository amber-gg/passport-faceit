# passport-faceit

FACEIT is a trademark or registered trademark of FACEIT LIMITED in the U.S. and/or other countries. "@ambergg/passport-faceit" is not operated by, sponsored by, or affiliated with FACEIT LIMITED in any way.

[Passport](http://passportjs.org/) strategies for authenticating with [FACEIT](https://faceit.com/)
using OAuth 2.0.

This module lets you authenticate using FACEIT in your Node.js applications.
By plugging into Passport, FACEIT authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install
```bash
$ npm install @ambergg/passport-faceit
```
## Usage of OAuth 2.0

#### Configure Strategy

The FACEIT OAuth 2.0 authentication strategy authenticates users using a FACEIT
account and OAuth 2.0 tokens. The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

```javascript
import passport from "passport";
import jwt from "jsonwebtoken";
import faceitStrategy from "@amber/passport-faceit";

/* Supported scopes: email, membership, openid, profile */
const scopes = "openid, email, profile";

passport.use(new faceitStrategy({
    authorizationURL: FACEIT_AUTHORIZATION_ENDPOINT,
    tokenURL: FACEIT_TOKEN_ENDPOINT,
    callbackURL: YOUR_CALLBACK_URL,
    clientID: FACEIT_CLIENT_ID,
    clientSecret: FACEIT_CLIENT_SECRET,
    scope: scopes,
    scopeSepartor: ',',
    customHeaders: {
      "Authorization": "Basic ${Buffer.from(
        faceitConfig.oauthClientId + ":" + faceitConfig.oauthClientSecret
      ).toString("base64")}",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  },
  (accessToken, refreshToken, params, profile, done) => {
    const userData = jwt.decode(params.id_token);
    done(null, {
        /* Handle the user data as you wish
        * ...
        */
    });
  }
));
```

## Faceit Documentation
- [FACEIT Connect (OAuth2)](https://cdn.faceit.com/third_party/docs/FACEIT_Connect_3.0.pdf)
- [OpenID Configuration](https://api.faceit.com/auth/v1/openid_configuration)

## License

The MIT License (MIT)

Copyright (c) 2022 Amber.gg

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
