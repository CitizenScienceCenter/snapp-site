<i18n>
    {

    "en": {

    "page-title": "Your Profile",

    "heading": "Your Profile",
    "label-username": "Username",
    "label-email": "Email",
    "label-api-key": "API Key",
    "submission-heading": "Your Stats",
    "submission-transcription-prefix": "You have transcribed ",
    "submission-transcription-between": " sentences from ",
    "submission-transcription-suffix": " sheets.",
    "submission-translation-prefix": "You have translated ",
    "submission-translation-suffix": " sentences.",
    "thanks": "Thanks for helping!",
    "button-logout": "Logout",
    "button-reset": "Reset Password"
    },

    "de": {

    "page-title": "Dein Profil",

    "heading": "Dein Profil",
    "label-username": "Benutzername",
    "label-email": "Email",
    "label-api-key": "API Key",
    "submission-heading": "Deine Statistik",
    "submission-transcription-prefix": "Du hast ",
    "submission-transcription-between": " Sätze auf ",
    "submission-transcription-suffix": " Bögen transkribiert.",
    "submission-translation-prefix": "Du hast ",
    "submission-translation-suffix": " Sätze übersetzt",
    "thanks": "Vielen Dank für Deine Hilfe!",
    "button-logout": "Ausloggen",
    "button-reset": "Passwort zurücksetzen"

    }

    }
</i18n>

<template>
    <div v-if="user">
        <app-content-section>
            <div class="content-wrapper">

                <div class="row row-centered">
                    <div class="col col-large-6">

                        <div class="content-subsection">
                            <h2 class="heading">{{ $t('heading') }}</h2>

                            <div class="form-field form-field-block">
                                <label>{{ $t('label-username') }}</label>
                                <p>{{ user.username }}</p>
                            </div>
                            <div class="form-field form-field-block">
                                <label>{{ $t('label-email') }}</label>
                                <p>{{ user.email }}</p>
                            </div>

                        </div>

                        <div class="content-subsection">
                            <div class="button-group">
                                <!-- <router-link tag="button" to="/logout" class="button button-secondary">{{ $t('button-logout') }}</router-link> -->
                                <button class="button button-secondary" @click.prvent="logout()">{{ $t('button-logout') }}</button>
                                <router-link tag="button" to="/reset" class="button button-secondary">{{ $t('button-reset') }}</router-link>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </app-content-section>

        <app-content-section class="content-section-condensed" color="light-greyish">
            <div v-if="challengeState !== 'before'" class="content-subsection">
                <scores></scores>
            </div>
            <div class="content-subsection">
                <div class="content-wrapper">
                    <div class="row row-centered">
                        <div class="col">
                            <duration></duration>
                        </div>
                    </div>
                </div>
            </div>
        </app-content-section>

        <app-footer></app-footer>

    </div>
</template>

<script>
    import {mapState, mapGetters} from "vuex";
    import ContentSection from '@/components/shared/ContentSection.vue'
    import Footer from '@/components/shared/Footer.vue'
    import Scores from "../../components/Scores";
    import Duration from "../../components/Duration";

    export default {
        name: "ViewUser",
        components: {
            Duration,
            Scores,
            'app-content-section': ContentSection,
            'app-footer': Footer
        },
        metaInfo: function() {
            return {
                title: this.$t('page-title')
            }
        },
        computed: {
            ...mapState({
                //user: state => state.user.user,
                user: state => state.c3s.user.currentUser,
                loading: state => state.settings.loading,

                challengeState: state => state.consts.challengeState
            })
        },
        methods: {
            logout() {
                this.$store.commit('c3s/user/SET_CURRENT_USER', null);
                this.$store.commit('c3s/user/SET_ANON', false);
                this.$store.commit('score/SET_SCORE', 0);
                this.$router.push('/');
            }
        }
    }
</script>
