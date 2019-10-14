<i18n>
    {

    "en": {

    "label-email": "Email",

    "email-info": "To receive a HerpMapper badge, use the same email as for your HerpMapper account.",

    "label-password": "Password",
    "label-password-repeat": "Repeat Password",

    "label-region": "Your Region",
    "label-region-select": "Please select...",
    "label-region-north-america": "North America",
    "label-region-south-america": "South America",
    "label-region-europe": "Europe",
    "label-region-asia": "Asia",
    "label-region-africa": "Africa",
    "label-region-australasia-oceania": "Australasia/Oceania",

    "button-register": "Register",

    "error-empty": "Enter an email address.",
    "error-email": "Email already in use.",
    "error-email-format": "No valid email address",
    "error-username": "Username already in use.",
    "error-len": "Password needs to be at least 8 characters long.",
    "error-match": "Passwords don't match.",
    "error-server": "Server error occured",

    "notifications-label": "Notifications",
    "notifications-option-1": "I want to receive information about the Citizen Science Center Zurich.",
    "notifications-option-2": "I want to receive information about this project."

    },

    "de": {

    "label-email": "Email",

    "email-info": "Um einen HerpMapper-Badge zu erhalten, verwende die selbe Email wie bei deinem HerpMapper-Acoount.",

    "label-password": "Passwort",
    "label-password-repeat": "Passwort wiederholen",

    "label-region": "Deine Region",
    "label-region-select": "Bitte wählen...",
    "label-region-north-america": "Nordamerika",
    "label-region-south-america": "Südamerika",
    "label-region-europe": "Europa",
    "label-region-asia": "Asien",
    "label-region-africa": "Afrika",
    "label-region-australasia-oceania": "Australasien/Ozeanien",

    "button-register": "Registrieren",

    "error-empty": "Sie müssen eine E-Mail angeben.",
    "error-email": "Email bereits registriert.",
    "error-email-format": "Keine gültige E-Mail.",
    "error-username": "Benutzername bereits vergeben.",
    "error-len": "Muss mehr als 8 Zeichen lang sein.",
    "error-match": "Passwörter stimmen nicht überein.",
    "error-server": "Serverfehler aufgetreten.",

    "notifications-label": "Benachrichtigungen",
    "notifications-option-1": "Ich möchte Informationen zum Citizen Science Center Zurich erhalten.",
    "notifications-option-2": "Ich möchte Informationen zu diesem Projekt erhalten."

    }

    }
</i18n>


<template>

    <form @submit.prevent="register">
        <div class="form-field form-field-block">
            <label for="reg-email">{{ $t("label-email") }}</label>
            <input v-model="email" type="email" id="reg-email" name="reg-email" autocomplete="new-password" :disabled="loading" />
            <span class="message error" v-if="errors.empty">{{ $t("error-empty") }}</span>
            <span class="message error" v-if="errors.emailFormat">{{ $t("error-email-format") }}</span>
            <span class="message error" v-if="errors.email">{{ $t("error-email") }}</span>
            <span class="message info">{{ $t("email-info") }}</span>
        </div>
        <div class="form-field form-field-block">
            <label for="reg-username">Username</label>
            <input v-model="username" id="reg-username" name="reg-email" autocomplete="new-password" :disabled="loading" />
            <span class="message error" v-if="errors.username">{{ $t("error-username") }}</span>
        </div>
        <div class="form-field form-field-block">
            <label for="reg-password">{{ $t("label-password") }}</label>
            <input v-model="password" type="password" id="reg-password" name="reg-password" autocomplete="new-password" :disabled="loading"/>
            <span class="message error" v-if="errors.len">{{ $t("error-len") }}</span>
        </div>
        <div class="form-field form-field-block">
            <label for="reg-password-2">{{ $t("label-password-repeat") }}</label>
            <input v-model="confPassword" type="password" id="reg-password-2" name="reg-password-2" autocomplete="new-password" :disabled="loading"/>
            <span class="message error" v-if="errors.match">{{ $t("error-match") }}</span>
        </div>

        <div class="form-field form-field-block">
            <label for="reg-password-2">{{ $t("label-region") }}</label>
            <div class="custom-select">
                <select v-model="region" :class="{'placeholder':!region}">
                    <option value="" disabled selected>{{ $t("label-region-select") }}</option>
                    <option value="north-america">{{ $t("label-region-north-america") }}</option>
                    <option value="south-america">{{ $t("label-region-south-america") }}</option>
                    <option value="europe">{{ $t("label-region-europe") }}</option>
                    <option value="africa">{{ $t("label-region-africa") }}</option>
                    <option value="asia">{{ $t("label-region-asia") }}</option>
                    <option value="australasia-oceania">{{ $t("label-region-australasia-oceania") }}</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                </svg>
            </div>
        </div>

        <div class="form-field form-field-block">
            <label for="notification-options">{{ $t("notifications-label") }}</label>
            <div class="options" id="notification-options">

                <label>
                    <input type="checkbox" v-model="checkbox1">
                    <div class="checkbox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                    </div>
                    <span>{{ $t("notifications-option-1") }}</span>
                </label>

                <label v-if="projectId !== '667461b5-353e-4dae-b83b-c59b0563133b'">
                    <input type="checkbox" v-model="checkbox2">
                    <div class="checkbox">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                    </div>
                    <span>{{ $t("notifications-option-2") }}</span>
                </label>

            </div>
        </div>

        <div class="button-group right-aligned">
            <button :disabled="loading || !email || !password || errors.email || errors.empty || errors.len || errors.match || errors.password || errors.username" type="submit" class="button button-primary">{{ $t("button-register") }}</button>
        </div>

        <div class="form-message form-message-error" v-if="errors.server">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M322.72,256,422.79,155.93a31.46,31.46,0,0,0,0-44.48L400.55,89.21a31.46,31.46,0,0,0-44.48,0L256,189.28,155.93,89.21a31.46,31.46,0,0,0-44.48,0L89.21,111.45a31.46,31.46,0,0,0,0,44.48L189.28,256,89.21,356.07a31.46,31.46,0,0,0,0,44.48l22.24,22.24a31.46,31.46,0,0,0,44.48,0L256,322.72,356.07,422.79a31.46,31.46,0,0,0,44.48,0l22.24-22.24a31.46,31.46,0,0,0,0-44.48Z"></path>
                </svg>
            </div>
            <span class="text">{{ $t("error-server") }}</span>
        </div>
    </form>

</template>

<script>
    import {mapState} from "vuex"

    export default {
        name: "RegisterForm",
        data() {
            return {
                email: "",
                username: '',
                password: "",
                confPassword: "",
                checkbox1: true,
                checkbox2: true,
                region: '',

                errors: {
                    empty: false,
                    emailFormat: false,
                    email: false,
                    username: false,
                    match: false,
                    len: false,
                    server: false
                },
                emailCheckTimeout: undefined,
                usernameCheckTimeout: undefined
            };
        },
        computed: mapState({
            loading: state => state.settings.loading,
            projectId: state => state.consts.projectId
        }),
        watch: {
            email() {
                this.username = this.email.split('@')[0];

                this.errors.email = false;
                clearTimeout( this.emailCheckTimeout );
                var self = this;
                this.emailCheckTimeout = setTimeout( function() {
                    self.checkEmailFormat();
                    self.checkEmail();
                }, 500);
            },
            username() {
                this.errors.username = false;
                clearTimeout( this.usernameCheckTimeout );
                var self = this;
                this.usernameCheckTimeout = setTimeout( function() {
                    self.checkUsername();
                }, 500);
            },
            password() {
                if( this.password.length < 8 ) {
                    this.errors.len = true;
                }
                else {
                    this.errors.len = false;
                }
            },
            confPassword() {
                if( this.confPassword !== this.password ) {
                    this.errors.match = true;
                }
                else {
                    this.errors.match = false;
                }
            }
        },
        methods: {
            checkUsername() {
                let query = {
                    'select': {
                        'fields': [
                            '*'
                        ],
                        'tables': [
                            'users'
                        ]
                    },
                    'where': [
                        {
                            "field": 'username',
                            'op': 'e',
                            'val': this.username
                        }
                    ]
                };
                this.$store.dispatch('c3s/submission/getSubmissions', [query, 1] ).then(res => {
                    if( res.body.length > 0 ) {
                        // email already registered
                        this.errors.username = true;
                    }

                    //this.$store.commit('c3s/user/SET_ANON', true);
                });
            },
            checkEmailFormat() {
                var re = /\S+@\S+\.\S+/;
                if( re.test(this.email) ) {
                    this.errors.emailFormat = false;
                }
                else {
                    this.errors.emailFormat = true;
                }
            },
            checkEmail() {
                let query = {
                    'select': {
                        'fields': [
                            '*'
                        ],
                        'tables': [
                            'users'
                        ]
                    },
                    'where': [
                        {
                            "field": 'email',
                            'op': 'e',
                            'val': this.email
                        }
                    ]
                };
                this.$store.dispatch('c3s/submission/getSubmissions', [query, 1] ).then(res => {
                    if( res.body.length > 0 ) {
                        // email already registered
                        this.errors.email = true;
                    }
                });
            },
            register() {
                this.errors.server = false;
                this.errors.username = false;

                const user = {
                    email: this.email,
                    username: this.username,
                    pwd: this.password,
                    info: {
                        'anonymous': false,
                        'center-notifications': this.checkbox1
                    }
                };

                if( this.projectId && this.region ) {
                    user.info['project-information'] = {};
                    user.info['project-information'][this.projectId] = {
                        'region': this.region
                    };
                }
                if( this.projectId && this.checkbox2 ) {
                    user.info['project-notifications'] = [ this.projectId ];
                }

                this.$store.dispatch('c3s/user/register', user).then(r => {

                    if (r.ok === true) {
                        this.$router.push('/');
                    }
                    else {
                        this.errors.server = true;
                    }
                });
            }
        }
    };
</script>

<style lang="scss">


    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .error {
        color: $color-error;
    }

</style>
