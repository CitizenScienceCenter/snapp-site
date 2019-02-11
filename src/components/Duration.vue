<template>
    <div class="duration">
        <div class="bar" v-if="state === 'ongoing'">
            <div class="progress" :style="{ width: percentage+'%' }"></div>
        </div>

        <p class="centered">
            <template v-if="state === 'before'">Challenge starts in </template>
            <template v-else-if="state === 'after'">Challenge endend </template>
            <template v-else>Challenge still open for </template>

            <template v-if="days > 0">
                <span v-if="days === 1">{{days}} Day</span>
                <span v-else>{{days}} Days</span>,
            </template>
            <template v-if="hours > 0 || days > 0">
                <span v-if="hours === 1">{{hours}} Hour</span>
                <span v-else>{{hours}} Hours</span>,
            </template>
            <template v-if="minutes > 0 || hours > 0 || days > 0">
                <span v-if="minutes === 1">{{minutes}} Minute</span>
                <span v-else>{{minutes}} Minutes</span> and
            </template>
            <span v-if="seconds === 1">{{seconds}} Second</span>
            <span v-else>{{seconds}} Seconds</span>

            <template v-if="state === 'after'"> ago</template>
        </p>
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

                state: null,

                days: null,
                hours: null,
                minutes: null,
                seconds: null
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

                if( this.challengeEndTimestamp < this.currentTimestamp ) {
                    this.state = 'after';
                }
                else if( this.challengeStartTimestamp > this.currentTimestamp ) {
                    this.state = 'before';
                }
                else {
                    this.state = 'ongoing';
                }

                this.$store.dispatch('consts/setChallengeState', this.state );
                this.calculateRemaining();
            },
            calculateRemaining() {

                var days;
                var hours;
                var minutes;
                var seconds;

                switch( this.state ) {
                    case 'before':
                        days = (this.challengeStartTimestamp - this.currentTimestamp) / 1000 / 60 / 60 / 24;
                        break;
                    case 'after':
                        days = (this.currentTimestamp - this.challengeEndTimestamp) / 1000 / 60 / 60 / 24;
                        break;
                    case 'ongoing':
                        days = (this.challengeEndTimestamp-this.currentTimestamp) / 1000 / 60 / 60 / 24;
                        break;
                }

                this.days = Math.floor( days );
                hours = (days - this.days)*24;
                this.hours = Math.floor( hours );
                minutes = (hours - this.hours)*60;
                this.minutes = Math.floor( minutes );
                seconds = (minutes - this.minutes)*60;
                this.seconds = Math.floor( seconds );

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

            margin-bottom: $spacing-2;

            .progress {
                height: 100%;
                background: $color-secondary;
            }
        }
        p {
            font-weight: 400;
            color: $color-secondary;
            font-size: $font-size-medium;
            span {
                color: $color-black;
                font-weight: 700;
                white-space:nowrap;
            }
        }
    }


    .cover {
        .duration {
            margin-top: $spacing-3;
            .bar {
                background-color: rgba( white, 0.25);
                .progress {
                    background: white;
                }
            }
            p {
                font-size: $font-size-small;
                color: white;
                span {
                    color: white;
                }
            }
        }
    }


    @media only screen and (min-width: $viewport-mobile-large) {

        .cover {
            .duration {
            }
        }

    }


    @media only screen and (min-width: $viewport-tablet-portrait) {

        .duration {
            .bar {
                margin-bottom: $spacing-3;
            }
        }

        .cover {
            .duration {
                margin-top: $spacing-4;

                p {
                    font-size: $font-size-normal;
                }
            }
        }

    }


</style>
