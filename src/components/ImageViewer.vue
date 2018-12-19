<template>
    <div class="croppa-container">
        <croppa class="croppa" ref="croppa" @new-image-drawn="newImageDrawn" canvas-color="transparent"
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
                <svg class="h" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.941 169.941V216H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296h243.882v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.568 0-33.941l-86.059-86.059c-15.119-15.12-40.971-4.412-40.971 16.97z"/></svg>
                <svg class="v" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M342.06,377.94H296V134.06h46.06c21.38,0,32.09-25.85,17-41L273,7A24,24,0,0,0,239,7L153,93.09c-15.12,15.12-4.41,41,17,41H216V377.94H169.94c-21.38,0-32.09,25.85-17,41L239,505A24,24,0,0,0,273,505L359,418.91c15.12-15.12,4.41-41-17-41Z"/></svg>
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
            newImageDrawn: function(event) {
                const moveindicator = this.$refs.moveindicator;

                console.log(this.$refs.croppa.getMetadata().startX );

                if( this.$refs.croppa.getMetadata().startX < 0 ) {
                    console.log("h");
                    moveindicator.classList.add("animation-h","animation");
                    setTimeout(function(){
                        moveindicator.classList.remove("animation-h","animation");
                        }, 1500);
                }
                else {
                    console.log("v");
                    moveindicator.classList.add("animation-v","animation");
                    setTimeout(function(){
                        moveindicator.classList.remove("animation-v","animation");
                    }, 1500);
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
            background: linear-gradient(to bottom right, rgba($color-gradient-start, 0.2), rgba($color-gradient-end, 0.2) );

            cursor: move;
        }

        .buttons {
            position: absolute;
            top: $spacing-2;
            left: $spacing-2;

            .button {
                display: block;
                border-radius: 50%;
                background: white;

                &:first-of-type {
                    margin-bottom: $spacing-1;
                }
            }
        }

        .move-indicator-wrapper {

            width: 72px;
            height: 72px;
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
                    width: 40px;
                    height: 40px;
                    fill: rgba(255, 255, 255, 0.5);
                    position: absolute;
                    top: 16px;
                    left: 16px;

                    display: none;
                }

                &.animation {
                    animation-duration: $transition-duration-super-long*1.5;
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

                    svg.h {
                        display: block;
                    }

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

                    svg.v {
                        display: block;
                    }

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

</style>
