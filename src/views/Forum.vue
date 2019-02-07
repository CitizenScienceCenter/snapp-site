<i18n>
    {
    "de": {
    "cover-heading": "Do you Know These Snakes?",
    "cover-subheading": "The Snake Recognition Challenge",
    "cover-button-transcribe": "Start the Challenge",
    "cover-button-translate": "Learn more",

    "section-explanation-heading": "How Good can you Classify Them?",
    "section-explanation-text": "Maroon pink bilge spyglass blow the man down schooner lateen sail measured fer yer chains chase driver. Sail ho Spanish Main barque bilged on her anchor coffer keel main sheet swing the lead swab Shiver me timbers. Jolly Roger gibbet transom lanyard driver list barkadeer bilge water Jack Ketch Shiver me timbers.",

    "section-newsletter-heading": "Abonniere unseren Newsletter"
    },
    "en": {
    "cover-heading": "Do you Know These Snakes?",
    "cover-subheading": "The Snake Recognition Challenge",
    "cover-button-transcribe": "Start the Challenge",
    "cover-button-translate": "Learn more",

    "section-explanation-heading": "How Good can you Classify Them?",
    "section-explanation-text": "Maroon pink bilge spyglass blow the man down schooner lateen sail measured fer yer chains chase driver. Sail ho Spanish Main barque bilged on her anchor coffer keel main sheet swing the lead swab Shiver me timbers. Jolly Roger gibbet transom lanyard driver list barkadeer bilge water Jack Ketch Shiver me timbers.",


    "section-newsletter-heading": "Sign up for our Newsletter"
    }
    }
</i18n>

<template>
    <div>
        <app-content-section>

            <div class="content-wrapper">

                <div class="row row-centered">
                    <div class="col col-large-6">
                        <h2 class="heading">Questions & Discussions</h2>

                        <comments :sourceId="activityId" withTitles></comments>
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
    import Comments from '@/components/shared/Comments.vue'
    import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
    import Footer from '@/components/shared/Footer.vue'
    import CommentedTasks from "../components/shared/CommentedTasks";

    export default {
        name: 'Forum',
        components: {
            CommentedTasks,
            'app-content-section': ContentSection,
            'app-newsletter-signup': NewsletterSignup,
            'app-footer': Footer,
            Comments
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                //user: state => state.user.user,
                activityId: state => state.consts.activityId,

                loading: state => state.c3s.settings.loading
            })
        }
    }
</script>

<style lang="scss">


    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';



</style>
