<i18n>
    {

    "en": {

    "page-title": "Your Profile",

    "heading": "Your Profile",

    "label-email": "Email",
    "label-username": "Username",
    "label-firstname": "First Name",
    "label-lastname": "Last Name",

    "label-region": "Your Region",
    "label-region-select": "Please select...",
    "label-region-north-america": "North America",
    "label-region-south-america": "South America",
    "label-region-europe": "Europe",
    "label-region-asia": "Asia",
    "label-region-africa": "Africa",
    "label-region-australasia-oceania": "Australasia/Oceania",

    "label-notifications": "Notifications",
    "label-center-notifications": "I want to receive information about the Citizen Science Center Zurich.",
    "label-project-notifications": "I want to receive information about this project.",

    "thanks": "Thanks for helping!",
    "button-logout": "Logout",
    "button-reset": "Reset Password",
    "button-save": "Save",
    "button-save-message": "Saved",

    "error-username-empty": "Enter a Username",
    "error-username": "Username already in use."
    },

    "de": {

    "page-title": "Ihr Profil",

    "heading": "Ihr Profil",

    "label-email": "Email",
    "label-username": "Benutzername",
    "label-firstname": "Vorname",
    "label-lastname": "Nachname",

    "label-region": "Deine Region",
    "label-region-select": "Bitte wählen...",
    "label-region-north-america": "Nordamerika",
    "label-region-south-america": "Südamerika",
    "label-region-europe": "Europa",
    "label-region-asia": "Asien",
    "label-region-africa": "Afrika",
    "label-region-australasia-oceania": "Australasien/Ozeanien",

    "label-notifications": "Benachrichtigungen",
    "label-center-notifications": "Ich möchte Informationen zum Citizen Science Center Zurich erhalten.",
    "label-project-notifications": "Ich möchte Informationen zu diesem Projekt erhalten.",

    "thanks": "Vielen Dank für Ihre Hilfe!",
    "button-logout": "Ausloggen",
    "button-reset": "Passwort zurücksetzen",
    "button-save": "Speichern",
    "button-save-message": "Gespeichert",

    "error-username-empty": "Geben Sie einen Benutzernamen an",
    "error-username": "Benutzername bereits vergeben."

    }

    }
</i18n>

<template>
    <div v-if="currentUser">
        <app-content-section>
            <div class="content-wrapper">

                <div class="row row-centered">
                    <div class="col col-large-5 col-xlarge-4">

                        <div class="content-subsection">
                            <h2 class="heading">{{ $t('heading') }}</h2>

                            <div class="form-field form-field-block">
                                <label>{{ $t('label-email') }}</label>
                                <p>{{ currentUser.email }}</p>
                            </div>
                            <div class="form-field form-field-block">
                                <label>{{ $t('label-username') }}</label>
                                <input v-model="username" id="reg-username" name="reg-email" autocomplete="new-password" :disabled="loading" />
                                <span class="message error" v-if="errors.username">{{ $t("error-username") }}</span>
                                <!--<p>{{ currentUser.username }}</p>-->
                            </div>

                            <div class="form-field form-field-block">
                                <label>{{ $t('label-firstname') }}</label>
                                <input v-model="firstname" autocomplete="new-password" placeholder="optional" />
                                <!--<p>{{ currentUser.username }}</p>-->
                            </div>

                            <div class="form-field form-field-block">
                                <label>{{ $t('label-lastname') }}</label>
                                <input v-model="lastname" autocomplete="new-password" placeholder="optional" />
                                <!--<p>{{ currentUser.username }}</p>-->
                            </div>

                            <div class="form-field form-field-block">
                                <label>{{ $t("label-region") }}</label>
                                <div class="custom-select">
                                    <select v-model="region" :class="{'placeholder':!region}">
                                        <option value=" disabled selected>{{ $t("label-region-select") }}</option>
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
                                <label for="notification-options">{{ $t("label-notifications") }}</label>
                                <div class="options" id="notification-options">

                                    <template v-if="projectId !== '667461b5-353e-4dae-b83b-c59b0563133b' && projectNotificationsStates && projectNotificationsStates.length > 0">
                                        <label>
                                            <input type="checkbox" v-model="projectNotificationsStates[myProjectIndex][1]">
                                            <div class="checkbox">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                </svg>
                                            </div>
                                            <span>{{ $t("label-project-notifications") }}</span>
                                        </label>
                                    </template>

                                    <label>
                                        <input type="checkbox" v-model="centerNotifications">
                                        <div class="checkbox">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                            </svg>
                                        </div>
                                        <span>{{ $t("label-center-notifications") }}</span>
                                    </label>

                                    <template v-if="projectId === '667461b5-353e-4dae-b83b-c59b0563133b'">
                                        <label v-for="(projectNotification,index) in projectNotificationsStates">
                                            <input type="checkbox" v-model="projectNotificationsStates[index][1]">
                                            <div class="checkbox">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                </svg>
                                            </div>
                                            <span>{{ $t("label-project-notifications-prefix") }} <i>{{ $t( 'label-'+projectNamesI18n[projectNotificationsStates[index][0]] ) }}</i> {{ $t("label-project-notifications-suffix") }}</span>
                                        </label>
                                    </template>

                                </div>
                            </div>

                            <div class="button-group right-aligned">
                                <submit-button @click="save()" :disabled="usernameCheckInProgress || !username || errors.username || !saveNeeded || saveInProgress" :submissionInfo="showSubmissionInfo" :infoMessage="$t('button-save-message')">{{ $t('button-save') }}</submit-button>
                                <!-- <button class="button button-primary" @click.prevent="save()" :disabled="usernameCheckInProgress || !username || errors.username || !saveNeeded">{{ $t('button-save') }}</button> -->
                            </div>
                        </div>
                        <div class="content-subsection">
                            <div class="button-group right-aligned">
                                <!-- <router-link tag="button" to="/logout" class="button button-secondary">{{ $t('button-logout') }}</router-link> -->
                                <button class="button button-secondary" @click.prevent="logout()">{{ $t('button-logout') }}</button>
                                <router-link tag="button" to="/reset" class="button button-secondary">{{ $t('button-reset') }}</router-link>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </app-content-section>

        <app-content-section v-if="challengeState !== 'before'" color="light-greyish" class="stats-section">
            <div class="content-wrapper">
                <sub-section-stats
                        :mySubmissionCount="mySubmissionCount"
                        :myProgress="Math.round( (mySubmissionCount/totalTaskCount)*10000 )/100"
                        :myRank="myRank"
                        :ranking="ranking"
                ></sub-section-stats>
            </div>
        </app-content-section>

        <app-footer></app-footer>

    </div>
</template>

<script>
    import {mapState} from "vuex";
    import ContentSection from '@/components/shared/ContentSection.vue';
    import Footer from '@/components/shared/Footer.vue';
    import SubmitButton from "@/components/shared/SubmitButton";
    import SubSectionStats from "../../components/shared/SubSectionStats";
    import Duration from "../../components/Duration";

    export default {
        name: "ViewUser",
        components: {
            Duration,
            SubSectionStats,
            SubmitButton,
            'app-content-section': ContentSection,
            'app-footer': Footer
        },
        metaInfo: function() {
            return {
                title: this.$t('page-title'),
                meta: [
                    {
                        property: 'og:title',
                        content: this.$t('page-title'),
                        template: '%s | '+this.$t('site-title')
                    }
                ]
            }
        },
        data() {
            return {
                username: '',
                firstname: '',
                lastname: '',

                region: '',

                centerNotifications: false,
                projectNotificationsStates: undefined,
                myProjectIndex: undefined,
                projectNotifications: [],
                projectNamesI18n: {
                    'b04bc186-1e0e-4fd3-87b8-a25262c1c79f': 'project-snakes',
                    'ecf805f8-5a03-4af4-9882-f70ced27ed94': 'project-hatespeech',
                    '3f97e6cc-ede6-4a60-8582-5638668d45e1': 'project-cohco',
                    'a7cc9fde-607c-473e-8ff5-90e86d81f9b6': 'project-mustelids'
                },
                errors: {
                    username: false
                },
                usernameCheckTimeout: undefined,
                usernameCheckInProgress: false,

                saveNeeded: false,
                saveInProgress: false,
                showSubmissionInfo: false
            }
        },
        computed: {
            ...mapState({
                currentUser: state => state.c3s.user.currentUser,
                projectId: state => state.consts.projectId,
                loading: state => state.settings.loading,

                challengeState: state => state.timer.challengeState,

                totalTaskCount: state => state.stats.totalTaskCount,
                totalUserCount: state => state.stats.totalUserCount,
                totalSubmissionCount: state => state.stats.totalSubmissionCount,
                mySubmissionCount: state => state.stats.mySubmissionCount,
                myRank: state => state.stats.myRank,
                ranking: state => state.stats.ranking
            })
        },
        mounted() {

            this.$store.dispatch('c3s/user/validate').then(v => {
                //update user from db

                this.username = this.currentUser.username;

                if( this.currentUser.info.firstname ) {
                    this.firstname = this.currentUser.info.firstname;
                }
                if( this.currentUser.info.lastname ) {
                    this.lastname = this.currentUser.info.lastname;
                }

                // read out region
                if( this.currentUser.info["project-information"] && this.currentUser.info["project-information"][this.projectId] && this.currentUser.info["project-information"][this.projectId]['region'] ) {
                    // for new users
                    this.region = this.currentUser.info["project-information"][this.projectId]['region'];
                }
                else if( this.currentUser.info.region ) {
                    // for old users
                    this.region = this.currentUser.info.region;
                }

                if( this.currentUser.info["center-notifications"] ) {
                    this.centerNotifications = this.currentUser.info["center-notifications"];
                }

                this.projectNotificationsStates = [];
                if( this.currentUser.info["project-notifications"] ) {
                    if( Array.isArray(this.currentUser.info["project-notifications"]) ) {
                        for( let i=0; i<this.currentUser.info["project-notifications"].length; i++ ) {
                            this.projectNotificationsStates.push( [ this.currentUser.info["project-notifications"][i], true ] );
                        }
                    }
                    else {
                        // snake users:
                        if( this.currentUser.info["project-notifications"] ) {
                            this.projectNotificationsStates.push( [ 'b04bc186-1e0e-4fd3-87b8-a25262c1c79f', true ] );
                        }
                    }

                    if( this.projectId !== '667461b5-353e-4dae-b83b-c59b0563133b' ) {

                        // if on a project page,
                        if( this.currentUser.info["project-notifications"].indexOf( this.projectId ) === -1 ) {
                            // but has not checked project notifications
                            this.projectNotificationsStates.push( [ this.projectId, false ] );
                        }

                        let self = this;
                        this.myProjectIndex = this.projectNotificationsStates.findIndex(function(element) {
                            return element[0] === self.projectId;
                        });
                    }
                }
                else {
                    this.projectNotificationsStates.push( [ this.projectId, false ] );
                    this.myProjectIndex = 0;
                }


            });

        },
        watch: {
            username() {
                this.errors.username = false;

                if (this.username !== this.currentUser.username) {
                    this.usernameCheckInProgress = true;
                    clearTimeout(this.usernameCheckTimeout);
                    var self = this;
                    this.usernameCheckTimeout = setTimeout(function () {
                        self.checkUsername();
                        self.usernameCheckInProgress = false;
                    }, 500);

                    this.saveNeeded = true;
                }
            },
            firstname() {
                if( this.firstname !== this.currentUser.info.firstname ) {
                    this.saveNeeded = true;
                }
            },
            lastname() {
                if( this.lastname !== this.currentUser.info.lastname ) {
                    this.saveNeeded = true;
                }
            },
            region() {
                if( this.currentUser.info['project-information'] && this.currentUser.info['project-information'][this.projectId] ) {
                    // compare with project info
                    if( this.region !== this.currentUser.info['project-information'][this.projectId]['region'] ) {
                        this.saveNeeded = true;
                    }
                }
                else if( this.currentUser.info.region ) {
                    // compare with region
                    if( this.region !== this.currentUser.info.region ) {
                        this.saveNeeded = true;
                    }
                }
                else {
                    this.saveNeeded = true;
                }
            },
            centerNotifications(to, from) {
                if( this.centerNotifications !== this.currentUser.info['center-notifications'] ) {
                    this.saveNeeded = true;
                }
            },
            projectNotificationsStates(to,from) {
                this.projectNotifications = [];
                for( let i=0; i<this.projectNotificationsStates.length; i++ ) {
                    console.log('watch states');
                    console.log( this.projectNotificationsStates[i] );
                    if( this.projectNotificationsStates[i][1] ) {
                        this.projectNotifications.push( this.projectNotificationsStates[i][0] );
                    }
                }
                if( from !== undefined ) {
                    this.saveNeeded = true;
                }
            }
        },
        methods: {
            getUserObject() {
                let info = JSON.parse(JSON.stringify(this.currentUser.info));

                info['firstname'] = this.firstname;
                info['lastname'] = this.lastname;
                info['center-notifications'] = this.centerNotifications;
                info['project-notifications'] = this.projectNotifications;

                if( !info['project-information'] ) {
                    info['project-information'] = {};
                    info['project-information'][this.projectId] = { "region": this.region };
                }
                else if( !info['project-information'][this.projectId] ) {
                    info['project-information'][this.projectId] = { "region": this.region };
                }
                else {
                    info['project-information'][this.projectId]['region'] = this.region;
                }

                if( info['region'] ) {
                    // remove old region
                    delete info.region;
                }

                return {
                    'username': this.username,
                    'info': info
                };
            },
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
                });
            },
            logout() {
                this.$store.commit('c3s/user/SET_CURRENT_USER', null);
                this.$store.commit('c3s/user/SET_ANON', false);
                this.$router.push('/');
            },
            save() {

                this.saveInProgress = true;
                this.$store.dispatch('c3s/user/updateUser', [ this.currentUser.id, this.getUserObject() ] ).then(r => {

                    this.$store.dispatch('c3s/user/validate').then(v => {

                        this.showSubmissionInfo = true;
                        let self = this;
                        setTimeout( function() {
                            self.showSubmissionInfo = false;
                            self.saveNeeded = false;
                            self.saveInProgress = false;
                        }, 900 );

                    });

                });
            }
        }
    }
</script>

