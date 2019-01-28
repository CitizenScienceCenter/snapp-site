<template>
    <div class="search-select">

        <div ref="input" class="custom-input" :class="{'disabled':disabled}">
            <input type="text" ref="answer"
                :placeholder="placeholder"
                v-model="inputValue"
                v-on:keyup.prevent="handleInputKeys"
                @click.prevent="!showResults ? showResults = true : showResults = false"
                @blur="inputBlur"/>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
            </svg>
        </div>
        <div ref="results" class="results">
            <ul v-if="showResults" @click="clickOnResults">
                <template v-for="filteredOptionContainer in filteredOptionContainers">
                    <li class="label" v-if="filteredOptionContainer.options.length > 0 && filteredOptionContainer.showLabel">
                        {{filteredOptionContainer.label}}
                    </li>
                    <li v-for="(option,index) in filteredOptionContainer.options"
                        :ref="'option_'+(index+filteredOptionContainer.startId)"
                        @click="optionClick( (index+filteredOptionContainer.startId) )"
                        :class="{ 'focused' : focusedOptionIndex === index+filteredOptionContainer.startId }">
                        {{ option.value }}
                        <div v-if="filteredOptionContainer.foundInSyn[index] > -1">
                            aka {{ option.synonyms[ filteredOptionContainer.foundInSyn[index] ] }}
                        </div>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchSelect",
        data() {
            return {
                focusedOptionIndex: 0,
                maxOptionIndex: 0,
                inputValue: '',
                showResults: false
            }
        },
        props: {
            value: {
                type: Object,
                default: function () { return null }
            },
            placeholder: {
                type: String,
                default: ''
            },
            optionContainers: {
                type: Array,
                default: function () { return [] }
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            showResults: function(to, from) {
                if( to ) {
                    let inputRect = this.$refs.input.getBoundingClientRect();

                    let maxHeight;
                    if( window.innerHeight - (inputRect.y+inputRect.height/2) > window.innerHeight/2 ) {
                        //downwards
                        maxHeight = window.innerHeight- (inputRect.y+inputRect.height);
                        this.$refs.results.classList.remove('upwards');
                    }
                    else {
                        //upwards
                        maxHeight = inputRect.y;
                        this.$refs.results.classList.add('upwards');
                    }

                    maxHeight *= 0.9;
                    this.$refs.results.style.maxHeight = maxHeight+'px';
                }
            },
            value: function() {
                if( this.value ) {
                    this.showResults = false;
                }
                else {
                    this.$refs.answer.focus();
                    this.inputValue = '';
                }
            },
            inputValue: function(to, from) {
                if( this.inputValue !== '' ) {
                    if( this.value ) {
                        if( this.inputValue !== this.value.value ) {
                            this.showResults = true;
                        }
                        else {
                            this.showResults = false;
                        }
                    }
                    else {
                        this.showResults = true;
                    }
                }
                else {
                    this.showResults = false;
                }
            }
        },
        computed: {
            filteredOptionContainers: function() {


                if( this.optionContainers.length > 0 ) {
                    let filteredOptionContainers = [];

                    let self = this;
                    for( let i = 0; i < this.optionContainers.length; i++ ) {

                        let filteredOptionContainer = { 'label': this.optionContainers[i].label, 'showLabel': this.optionContainers[i].showLabel, 'options': [], 'foundInSyn': [] };

                        let options;
                        if( this.inputValue.length > 0 ) {

                            options = this.optionContainers[i].options.filter( function(option) {
                                if( option.value.toUpperCase().includes( self.inputValue.toUpperCase() ) ) {
                                    filteredOptionContainer.foundInSyn.push( -1 );
                                    return true;
                                }
                                else {
                                    // check synonyms if exist
                                    if( option.synonyms && option.synonyms.length > 0 ) {
                                        for( let j = 0; j < option.synonyms.length; j++ ) {
                                            if( option.synonyms[j].toUpperCase().includes( self.inputValue.toUpperCase() ) ) {
                                                filteredOptionContainer.foundInSyn.push( j );
                                                return true;
                                            }
                                        }
                                    }
                                }
                                return false;
                            }, filteredOptionContainer);

                        }
                        else {
                            options = this.optionContainers[i].options;
                        }

                        filteredOptionContainer.options =  options;

                        // startIds for ref rendering
                        let startId = 0;
                        if( i > 0 ) {

                            startId = filteredOptionContainers[i-1].startId + filteredOptionContainers[i-1].options.length;

                        }
                        filteredOptionContainer.startId = startId;

                        filteredOptionContainers.push( filteredOptionContainer );

                    }


                    this.focusedOptionIndex = 0;
                    this.maxOptionIndex = filteredOptionContainers[filteredOptionContainers.length-1].startId + filteredOptionContainers[filteredOptionContainers.length-1].options.length -1;

                    return filteredOptionContainers;
                }
                else {
                    return {}
                }
            }
        },
        methods: {
            inputBlur: function() {
                const self = this;
                setTimeout(function(){
                    self.showResults = false;
                }, 500);
            },
            clickOnResults: function() {
                this.$refs.answer.focus();
            },
            optionClick(id) {
                this.focusedOptionIndex = id;
                this.selectOptionById(id);
            },
            selectOptionById(id) {
                let returnObject;
                let counter = 0;
                let found = false;
                for( let i = 0; i < this.filteredOptionContainers.length; i++ ) {
                    for( let j = 0; j < this.filteredOptionContainers[i].options.length; j++ ) {
                        if( counter === id ) {
                            found = true;
                            returnObject = this.filteredOptionContainers[i].options[j];
                            break;
                        }
                        counter++;
                    }
                    if( found ) {
                        break;
                    }
                }
                this.inputValue = returnObject.value;
                this.$emit('input', returnObject );
            },
            handleInputKeys: function(event) {
                if( this.showResults ) {
                    switch(event.key) {
                        case 'ArrowDown':
                            if( this.focusedOptionIndex < this.maxOptionIndex ) {
                                this.focusedOptionIndex++;
                                this.$refs['option_'+this.focusedOptionIndex][0].scrollIntoView({block: "end"});
                            }
                            break;
                        case 'ArrowUp':
                            this.$refs.answer.setSelectionRange(this.inputValue.length,this.inputValue.length);
                            if( this.focusedOptionIndex > 0 ) {
                                this.focusedOptionIndex--;
                                this.$refs['option_'+this.focusedOptionIndex][0].scrollIntoView({block: "end"});
                            }
                            break;
                        case 'Enter':
                            if( this.$refs['option_'+this.focusedOptionIndex][0] ) {
                                this.selectOptionById(this.focusedOptionIndex);
                            }
                            break;
                        case 'Escape':
                            this.showResults = false;
                            break;
                    }
                }
            }
        }
    }
</script>

<style lang="scss">


    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .search-select {
        position: relative;

        .custom-input {
            svg {
                position: absolute;
                top: 13px;
                right: 10px;
                height: 12px;
                fill: $color-black;
                pointer-events: none;
            }

            &.disabled {
                pointer-events: none;
                opacity: 0.25;
            }
        }

        .results {
            z-index: 100;
            position: absolute;
            top: 40px;
            left: 0;
            width: 100%;
            //max-height: calc( 40px * 10 );
            overflow: hidden;
            overflow-y: scroll;

            background: white;
            box-shadow: 0px 0px 12px -4px rgba($color-black, 0.4);

            &.upwards {
                top: auto;
                bottom: 40px;
            }

            ul {

                li {
                    margin: 0;
                    padding: $spacing-1 $spacing-2;
                    line-height: 1.5;
                    color: $color-black-tint-40;

                    &.label {
                        font-size: $font-size-normal;
                        font-weight: 700;
                        color: $color-black;
                    }

                    &:before {
                        display: none;
                    }

                    &.focused {
                        background: $color-primary;
                        color: white;
                    }

                    cursor: pointer;

                    div {
                        margin-top: 4px;
                        font-size: $font-size-small;

                        span {
                            margin-right: $spacing-1;

                            &:last-child {
                                margin-right: 0;
                            }
                        }
                    }
                }
            }
        }
    }

    @media only screen and (min-width: $viewport-tablet-portrait) {

        .search-select {

            .results {
                top: 48px;

                &.upwards {
                    bottom: 48px;
                }

            }

        }

    }


</style>
