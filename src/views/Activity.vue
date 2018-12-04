<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Activity',
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">


    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .button-group {
        label {
            text-transform: uppercase;
            display: block;
            padding: $spacing-1 0;
            width: 100%;
        }
    }

    @media only screen and (min-width: $viewport-tablet-portrait) {

        .button-group {
            label {
                display: inline;
                margin: 0 $spacing-2;
            }
        }

    }

</style>
