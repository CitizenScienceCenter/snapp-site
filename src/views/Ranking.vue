<i18n>
    {

    "en": {

    "page-title": "Ranking",


    "section-newsletter-heading": "Sign up for our Newsletter"

    },

    "de": {

    "page-title": "Ranking",


    "section-newsletter-heading": "Abonniere unseren Newsletter"


    }

    }
</i18n>

<template>
    <div>
        <app-content-section>
            <div class="content-wrapper">

                <div class="row row-centered">
                    <div class="col col-large-6">

                        <h2 class="heading">Ranking</h2>

                        <p>
                            We proudly present the ranking of our first Snake ID Challenge in spring 2019:
                        </p>

                        <ranking></ranking>

                    </div>
                </div>

            </div>
        </app-content-section>



        <app-content-section class="content-section-condensed" color="light-greyish">
            <div class="content-wrapper">
                <div class="row row-centered row-middle row-reverse-large">

                    <div class="col col-large-6">
                        <h2 class="subheading centered">Stay tuned for our next Challenge</h2>
                        <p class="centered reduced-bottom-margin">
                            This was only the beginning. The idea is to do this regularly. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>
                        <div v-if="!user.currentUser || user.isAnon" class="button-group centered">
                            <router-link tag="button" to="/login" class="button button-primary">Register</router-link>
                        </div>
                    </div>

                </div>
            </div>
        </app-content-section>



        <app-content-section color="greyish">
            <div class="content-wrapper">
                <div class="row row-centered">
                    <div class="col col-mobile-large-10">
                        <h2 class="heading centered">{{ $t('section-newsletter-heading') }}</h2>
                    </div>
                </div>
                <div class="row row-centered">
                    <div class="col col-mobile-large-10 col-tablet-portrait-8 col-large-12">
                        <app-newsletter-signup></app-newsletter-signup>
                    </div>
                </div>
            </div>
        </app-content-section>


        <app-footer></app-footer>

    </div>
</template>

<script>

    import {mapState} from 'vuex'


    import ContentSection from '@/components/shared/ContentSection.vue'
    import Footer from '@/components/shared/Footer.vue'
    import Ranking from "../components/Ranking";
    import NewsletterSignup from '@/components/shared/NewsletterSignup.vue';

    export default {
        components: {
            Ranking,
            'app-content-section': ContentSection,
            'app-newsletter-signup': NewsletterSignup,
            'app-footer': Footer
        },
        metaInfo: function() {
            return {
                title: this.$t('page-title')
            }
        },
        computed: {
        ...mapState({
                user: state => state.c3s.user
            })
        }
    }
</script>
