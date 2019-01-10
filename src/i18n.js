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
        'link': 'Home'
        },
        'page-challenge': {
        'link': 'Challenge'
        },
        'page-about': {
        'link': 'About'
        },
        'page-terms': {
        'link': 'Privacy Policy & Terms of Use'
        },
        'page-login': {
        'link': 'Anmelden'
        },
        'page-register': {
        'link': 'Registrieren'
        },
        'page-logout': {
        'link': 'Logout'
        },
        'page-reset': {
        'link': 'Passwort zurücksetzen'
        },
        'page-profile': {
        'link': 'Profil'
        }
      },
      'en': {
          'page-homepage': {
              'link': 'Home'
          },
          'page-challenge': {
              'link': 'Challenge'
          },
          'page-about': {
              'link': 'About'
          },
          'page-terms': {
              'link': 'Privacy Policy & Terms of Use'
          },
          'page-login': {
              'link': 'Login'
          },
          'page-register': {
              'link': 'Register'
          },
          'page-logout': {
              'link': 'Logout'
          },
          'page-reset': {
              'link': 'Reset Password'
          },
          'page-profile': {
              'link': 'Profil'
          }
      }
  }

})
