<template>
    <div class="croppa-container">
        <croppa class="croppa" ref="croppa"
                @init="init"
                @new-image-drawn="newImageDrawn"
                canvas-color="transparent"
                :prevent-white-space="true"
                :show-remove-button="false"
                :show-loading="true"
                :loading-size="100"
                :zoom-speed="10"
                :placeholder="'Loading'"
                :placeholder-font-size="20"
                :disableScrollToZoom="disableScrollToZoom"
                :accept="'image/*'"
                initial-position="center center"
                initial-size="cover"
                auto-sizing>
            <img slot="initial" :src="src" />
        </croppa>
        <div class="buttons">
            <button @click="zoom(false)" class="button button-secondary button-icon button-icon-only">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M448,208H304V64c0-17.7-14.3-32-32-32h-32c-17.7,0-32,14.3-32,32v144H64c-17.7,0-32,14.3-32,32v32c0,17.7,14.3,32,32,32h144
                    v144c0,17.7,14.3,32,32,32h32c17.7,0,32-14.3,32-32V304h144c17.7,0,32-14.3,32-32v-32C480,222.3,465.7,208,448,208z"/>
                </svg>
            </button>
            <button @click="zoom(true)" class="button button-secondary button-icon button-icon-only">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M448,208H64c-17.7,0-32,14.3-32,32v32c0,17.7,14.3,32,32,32h384c17.7,0,32-14.3,32-32v-32C480,222.3,465.7,208,448,208z"/>
                </svg>
            </button>
        </div>

        <div class="move-indicator-wrapper">
            <div ref="moveindicator" class="move-indicator">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"></path></svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImageViewer",
        props: {
            src: {
                type: String,
                default: ''
            },
            disableScrollToZoom: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                croppaSettings: {}
            }
        },
        watch: {
            src(to, from) {
                this.$refs.croppa.refresh();
            }
        },
        methods: {
            init: function() {
                this.$refs.moveindicator.classList.remove("animation-h","animation-v","animation");
            },
            newImageDrawn: function(event) {

                if( this.$refs.croppa.getMetadata().startX < 0 ) {
                    this.$refs.moveindicator.classList.add("animation-h","animation");
                }
                else {
                    this.$refs.moveindicator.classList.add("animation-v","animation");
                }

            },
            zoom(out) {
                if (out) {
                    this.$refs.croppa.zoomOut()
                } else {
                    this.$refs.croppa.zoomIn()
                }
            },
        }
    }
</script>

<style lang="scss">


    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .croppa-container {
        position: relative;

        .croppa {
            height: 100%;
            width: 100%;
            //background: linear-gradient(to bottom right, rgba($color-gradient-start, 0.2), rgba($color-gradient-end, 0.2) );

            cursor: move;
        }

        .buttons {
            position: absolute;
            bottom: $spacing-1;
            right: $spacing-1;

            .button {
                display: block;
                border-radius: 50%;
                background: white;

                &:first-of-type {
                    margin-bottom: calc( #{$spacing-1} /2 );
                }
            }
        }

        .move-indicator-wrapper {

            width: 64px;
            height: 64px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-24px) translateY(-24px);
            pointer-events: none;

            .move-indicator {

                width: 100%;
                height: 100%;
                background: rgba($color-black, 0.5);
                border-radius: 50%;
                opacity: 0;

                svg {
                    width: 32px;
                    height: 32px;
                    fill: rgba(255, 255, 255, 0.5);
                    position: absolute;
                    top: 16px;
                    left: 16px;
                }

                &.animation {
                    animation-duration: $transition-duration-super-long*2;
                    animation-timing-function: $transition-timing-function-symmetric;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;

                    @keyframes ani-o {
                        0% {
                            opacity: 0;
                        }
                        33.333% {
                            opacity: 1;
                        }
                        66.667% {
                            opacity: 1;
                        }
                        100% {
                            opacity: 0;
                        }
                    }
                }

                &.animation-h {
                    animation-name: ani-o, ani-h;

                    @keyframes ani-h {
                        0% {
                            transform: translateX( 0);
                        }
                        33.333% {
                            transform: translateX( -24px );
                        }
                        66.667% {
                            transform: translateX( 24px );
                        }
                        100% {
                            transform: translateX( 0);
                        }
                    }
                }
                &.animation-v {
                    animation-name: ani-o, ani-v;

                    @keyframes ani-v {
                        0% {
                            transform: translateY( 0);
                        }
                        33.333% {
                            transform: translateY( -24px );
                        }
                        66.667% {
                            transform: translateY( 24px );
                        }
                        100% {
                            transform: translateY( 0);
                        }
                    }
                }

            }

        }
    }





    @media only screen and (min-width: $viewport-tablet-portrait) {

        .croppa-container {

            .buttons {
                bottom: $spacing-2;
                right: $spacing-2;

                .button {
                    &:first-of-type {
                        margin-bottom: $spacing-1;
                    }
                }
            }

        }

    }

</style>
