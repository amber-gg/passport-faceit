import OAuth2Strategy from 'passport-oauth2';

class FaceitStrategy extends OAuth2Strategy {
  constructor(options, verify) {
    super(options, verify);
    options = options || {};
    options.authorizationURL =
      options.authorizationURL ||
      'https://api.faceit.com/auth/v1/api/authorize';
    options.tokenURL =
      options.tokenURL || 'https://api.faceit.com/auth/v1/oauth/token';
    options.scopeSepartor = options.scopeSepartor || ' ';
    options.customHeaders = options.customHeaders || {};

    OAuth2Strategy.call(this, options, verify);
    if (!options.clientSecret)
      throw new TypeError('OAuth2Strategy requires a clientSecret option');
    this.name = 'faceit';
    this._profileUrl =
      options.userURL || 'https://api.faceit.com/auth/v1/resources/userinfo';

    this._oauth2.setAuthMethod('OAuth2');
    this._oauth2.useAuthorizationHeaderforGET(true);
  }
}

FaceitStrategy.prototype.authorizationParams = () => {
  return {
    redirect_popup: true,
    scope: 'profile+email+openid',
  };
};

module.exports = FaceitStrategy;
