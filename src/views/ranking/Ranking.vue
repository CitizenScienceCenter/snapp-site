<i18n>
    {

    "en": {

    "page-title": "Ranking",

    "heading-ranking": "Ranking"

    },

    "de": {

    "page-title": "Rangliste",

    "heading-ranking": "Rangliste"


    }

    }
</i18n>

<template>
    <div>
        <app-content-section>
            <div class="content-wrapper">

                <div class="row row-centered">
                    <div class="col col-large-6">

                        <h2 class="heading centered">{{ $t('heading-ranking')}}</h2>

                        <!-- <ranking></ranking> -->

                    </div>
                </div>

            </div>
        </app-content-section>


        <section-newsletter-signup></section-newsletter-signup>

        <app-footer></app-footer>

    </div>
</template>

<script>

    import {mapState} from 'vuex'


    import ContentSection from '@/components/shared/ContentSection.vue'
    import Footer from '@/components/shared/Footer.vue'
    import Ranking from "../../components/Ranking";
    import Stats from "../../components/Stats";
    import SectionNewsletterSignup from "../../components/shared/SectionNewsletterSignup";

    export default {
        components: {
            SectionNewsletterSignup,
            Stats,
            Ranking,
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
                user: state => state.c3s.user
            })
        },
        methods: {
            openInNewTab: function(url) {
                var win = window.open(url, '_blank');
                win.focus();
            }
        }
    }
</script>
