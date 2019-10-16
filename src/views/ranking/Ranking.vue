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
                    <div class="col col-large-6 scroll-effect">

                        <h2 class="heading centered">{{ $t('heading-ranking')}}</h2>
                        <ranking-table :ranking="ranking"></ranking-table>

                    </div>
                </div>

            </div>
        </app-content-section>


        <app-content-section v-if="challengeState !== 'before'">
            <div class="content-wrapper">
                <sub-section-stats
                                   :mySubmissionCount="mySubmissionCount"
                                   :myProgress="Math.round( (mySubmissionCount/totalTaskCount)*10000 )/100"
                                   :myRank="myRank"
                ></sub-section-stats>
            </div>
        </app-content-section>

        <app-content-section v-if="challengeState !== 'before'" color="greyish">
            <div class="content-wrapper">
                <sub-section-stats
                                   :userCount="totalUserCount"
                                   :submissionCount="totalSubmissionCount"
                                   :taskCount="totalTaskCount" >
                </sub-section-stats>
                <div class="content-subsection">
                    <div class="row row-centered">
                        <div class="col col-large-10">

                            <duration></duration>

                        </div>
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
    import RankingTable from "../../components/shared/RankingTable";
    import Duration from "../../components/Duration";
    import SubSectionStats from "../../components/shared/SubSectionStats";

    export default {
        components: {
            SubSectionStats,
            Duration,
            RankingTable,
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
                user: state => state.c3s.user,

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
            this.$store.dispatch('stats/updateSubmissionStats');
        },
        methods: {
            openInNewTab: function(url) {
                var win = window.open(url, '_blank');
                win.focus();
            }
        }
    }
</script>
