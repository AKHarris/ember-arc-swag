/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-practice',
    environment: environment,
    rootURL: '/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "* 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com",
      'font-src': "* data: use.typekit.net",
      'connect-src': "*",
      'img-src': "*",
      'style-src': "* 'unsafe-inline' use.typekit.net",
      'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
