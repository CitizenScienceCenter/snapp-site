import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from './store/store.js'

Vue.use(VueI18n);

var language;
if( !store.state.settings.language ) {
    // no language in store, check browser
    language = window.navigator.userLanguage || window.navigator.language;
    if (language.indexOf('-') !== -1) {
        language = language.split('-')[0];
    }
    else if (language.indexOf('_') !== -1) {
        language = language.split('_')[0];
    }
    if( language !== 'en' && language !== 'de') {
        language = "de";
    }

    store.dispatch("settings/setLanguage", language );
}
language = store.state.settings.language;

export const i18n = new VueI18n({
  locale: language,
  messages: {
    'de': {
          'page-homepage': {
            'link': 'Home',
            'title': 'Snapp – Citizen Science Center Zürich'
          },
          'page-challenge': {
            'link': 'Challenge',
            'title': 'Challenge – Snapp – Citizen Science Center Zürich'
          },
        'page-about': {
            'link': 'About',
            'title': 'About – Snapp – Citizen Science Center Zürich'
        },
        'page-terms': {
            'link': 'Privacy Policy & Terms of Use',
            'title': 'Privacy Policy & Terms of Use – Snapp – Citizen Science Center Zürich'
        },
          'page-login': {
            'link': 'Anmelden',
            'title': 'Anmelden – Snapp – Citizen Science Center Zürich'
          },
          'page-register': {
            'link': 'Registrieren',
            'title': 'Registrieren – Snapp – Citizen Science Center Zürich'
          },
          'page-logout': {
            'link': 'Logout',
            'title': 'Logout – Snapp – Citizen Science Center Zürich'
          },
          'page-reset': {
            'link': 'Passwort zurücksetzen',
            'title': 'Passwort zurücksetzen – Snapp – Citizen Science Center Zürich'
          },
          'page-profile': {
            'link': 'Profil',
            'title': 'Profil – Snapp – Citizen Science Center Zürich'
          }
        },
      'en': {
          'page-homepage': {
              'link': 'Home',
              'title': 'Snapp – Citizen Science Center Zurich'
          },
          'page-challenge': {
              'link': 'Challenge',
              'title': 'Challenge – Snapp – Citizen Science Center Zurich'
          },
          'page-about': {
              'link': 'About',
              'title': 'About – Snapp – Citizen Science Center Zürich'
          },
          'page-terms': {
              'link': 'Privacy Policy & Terms of Use',
              'title': 'Privacy Policy & Terms of Use – Snapp – Citizen Science Center Zurich'
          },
          'page-login': {
              'link': 'Login',
              'title': 'Login – Snapp – Citizen Science Center Zurich'
          },
          'page-register': {
              'link': 'Register',
              'title': 'Register – Snapp – Citizen Science Center Zurich'
          },
          'page-logout': {
              'link': 'Logout',
              'title': 'Logout – Snapp – Citizen Science Center Zurich'
          },
          'page-reset': {
              'link': 'Reset Password',
              'title': 'Reset Password – Snapp – Citizen Science Center Zurich'
          },
          'page-profile': {
              'link': 'Profil',
              'title': 'Profil – Snapp – Citizen Science Center Zurich'
          }
      }
  }

})
