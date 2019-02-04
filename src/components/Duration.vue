<template>
    <div class="duration">
        <div class="bar">
            <div class="progress" :style="{ width: percentage+'%' }"></div>
        </div>
        <h2 class="subheading centered">Challenge still open for <span>{{remainingDays}} Days</span>, <span>{{remainingHours}} Hours</span>, <span>{{remainingMinutes}} Minutes</span> and <span>{{remainingSeconds}} Seconds</span></h2>
    </div>
</template>

<script>

    import {mapState} from 'vuex'

    export default {
        name: "Duration",
        data() {
            return {
                challengeStartTimestamp: null,
                challengeEndTimestamp: null,
                currentTimestamp: null,
                remainingDays: null,
                remainingHours: null,
                remainingMinutes: null,
                remainingSeconds: null
            }
        },
        computed: {
            ...mapState({
                challengeStartISO: state => state.consts.challengeStartISO,
                challengeEndISO: state => state.consts.challengeEndISO,
            }),
            percentage() {
                return ( (this.currentTimestamp-this.challengeStartTimestamp)/(this.challengeEndTimestamp-this.challengeStartTimestamp) )*100;
            }
        },
        mounted() {

            var challengeStartDate = new Date( this.challengeStartISO );
            var challengeEndTimestamp = new Date( this.challengeEndISO );
            this.challengeStartTimestamp = challengeStartDate.getTime();
            this.challengeEndTimestamp = challengeEndTimestamp.getTime();

            this.tick();
            const self = this;
            setInterval( function() {
                self.tick();
            }, 1000);
        },
        methods: {
            tick() {
                this.currentTimestamp = Date.now();

                //console.log( this.challengeStartTimestamp );
                //console.log( this.currentTimestamp );
                this.calculateRemaining();
            },
            calculateRemaining() {

                var remainingDays = (this.challengeEndTimestamp-this.currentTimestamp) / 1000 / 60 / 60 / 24;
                this.remainingDays = Math.floor( remainingDays );
                var remainingHours = (remainingDays - this.remainingDays)*24;
                this.remainingHours = Math.floor( remainingHours );
                var remainingMinutes = (remainingHours - this.remainingHours)*60;
                this.remainingMinutes = Math.floor( remainingMinutes );
                var remainingSeconds = (remainingMinutes - this.remainingMinutes)*60;
                this.remainingSeconds = Math.floor( remainingSeconds );
            }
        }
    }
</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';


    .duration {
        .bar {
            height: $spacing-1;
            border-radius: calc(#{$spacing-1}/2);
            background-color: rgba( $color-secondary, 0.25);
            position: relative;
            overflow: hidden;

            margin-bottom: $spacing-4;

            .progress {
                height: 100%;
                background: $color-secondary;
            }
        }
        .subheading {
            font-weight: 400;
            color: $color-secondary;
            span {
                color: $color-black;
                font-weight: 700;
            }
        }
    }


    @media only screen and (min-width: $viewport-tablet-portrait) {

        .duration {
            .bar {
                margin-bottom: $spacing-5;
            }
        }

    }


</style>
