import uuid from './uuid';

/**
 * Forces a redirect to the keycloak login page.
 * @export redirectToLogin
 * @param {object} options
 * @param {object} options.keycloak
 * @param {object} options.request
 * @param {object} options.response
 * @return {void}
 */
export default function redirectToLogin(options) {
  options = Object.assign(
      {
        keycloak,
        request,
        response,
        redirectUrl: '/',
      },
      options,
  );
  const keycloak = options.keycloak;
  const request = options.request;
  const response = options.response;

  const host = request.hostname;
  const headerHost = request.headers.host.split(':');
  const port = headerHost[1] || '';
  const protocol = request.protocol;
  const hasQuery = ~(request.originalUrl || request.url).indexOf('?');

  const redirectUrl = request.query.redirect_url ?
    request.query.redirect_url + '?auth_callback=0' :
    `${protocol}://${host}${port === '' ? '' : ':' + port}${
      options.redirectUrl
    }${(hasQuery ? '&' : '?') + 'auth_callback=0'}`;

  if (request.session) {
    request.session.auth_redirect_uri = redirectUrl;
  }

  const uid = uuid();
  const loginURL = keycloak.loginUrl(uid, redirectUrl);

  response.redirect(loginURL);
}
