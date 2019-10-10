import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from './store/store.js'

Vue.use(VueI18n);

if( !store.state.settings.language ) {
    // no language in store
    var language;

    // check browser
    language = window.navigator.userLanguage || window.navigator.language;

    // trim
    language = language.substr(0,2);

    // check if valid
    if( !store.state.consts.languages.includes( language ) ) {
        language = store.state.consts.languages[0];
    }

    // language for prerendering default routes
    if( navigator.userAgent === 'ReactSnap' ) {
        language = "en";
    }

    store.dispatch("settings/setLanguage", language );
}

export const i18n = new VueI18n({
    locale: store.state.settings.language,
    silentTranslationWarn: true,
  messages: {
      'en': {

          "site-name": "Snake ID Challenge",
          "site-title": "Snake ID Challenge | Citizen Science Center Zürich",
          "site-description": "The Snake Identification Challenge",

          'navigation-homepage': {
              'link': 'Home'
          },
          'navigation-identification': {
              'link': 'Identification'
          },
          'navigation-forum': {
              'link': 'Forum'
          },
          'navigation-ranking': {
              'link': 'Ranking'
          },
          'navigation-current-ranking': {
              'link': 'Current Ranking'
          },
          'navigation-past-ranking': {
              'link': 'Spring 2019'
          },
          'navigation-about': {
              'link': 'About the Project'
          },
          'navigation-terms': {
              'link': 'Privacy Policy & Terms of Use'
          },
          'navigation-login': {
              'link': 'Login'
          },
          'navigation-register': {
              'link': 'Register'
          },
          'navigation-logout': {
              'link': 'Logout'
          },
          'navigation-reset': {
              'link': 'Reset Password'
          },
          'navigation-profile': {
              'link': 'Profil'
          }
      },
      'de': {

          "site-name": "Snake ID Challenge",
          "site-title": "Snake ID Challenge | Citizen Science Center Zürich",
          "site-description": "The Snake Identification Challenge",

          'navigation-homepage': {
              'link': 'Home'
          },
          'navigation-identification': {
              'link': 'Identifikation'
          },
          'navigation-forum': {
              'link': 'Forum'
          },
          'navigation-ranking': {
              'link': 'Rangliste'
          },
          'navigation-current-ranking': {
              'link': 'Aktuelle Rangliste'
          },
          'navigation-past-ranking': {
              'link': 'Frühling 2019'
          },
          'navigation-about': {
              'link': 'Das Projekt'
          },
          'navigation-terms': {
              'link': 'Privacy Policy & Terms of Use'
          },
          'navigation-login': {
              'link': 'Anmelden'
          },
          'navigation-register': {
              'link': 'Registrieren'
          },
          'navigation-logout': {
              'link': 'Logout'
          },
          'navigation-reset': {
              'link': 'Passwort zurücksetzen'
          },
          'navigation-profile': {
              'link': 'Profil'
          }
      }
  }

})
