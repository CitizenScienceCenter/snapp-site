<i18n>
    {
        "de": {
            "transcription-rules-button-show": "Transkribierungsregeln anzeigen",
            "transcription-rules-button-hide": "Transkribierungsregeln verbergen",
            "transcription-rule-1": "Ein vermuteter Wortlaut wird in eckigen Klammern [] geschrieben, z. B. [T]ue das mache...",
            "transcription-rule-2": "Wenn ein Wort oder ein Buchstabe nicht entziffert werden kann, wird folgender Platzhalter eingefügt: [...]",
            "transcription-rule-3": "Falls ein Wort nicht vollständig entziffert werden kann, kann folgender Platzhalter eingefügt werden: [unvollst.]",
            "transcription-rule-4": "Grundsatz: Die Transkription soll möglichst nahe am Original sein!",
            "transcription-rule-5": "Alle Sonderzeichen sollten transkribiert werden! (Falls nicht möglich, siehe FAQs)."
        },
        "en": {
            "transcription-rules-button-show": "Show Transcription Rules",
            "transcription-rules-button-hide": "Hide Transcription Rules",
            "transcription-rule-1": "A suspected wording is written in square brackets [], for example: [T]ue das mache...",
            "transcription-rule-2": "If a word or letter can't be deciphered, the following placeholder is inserted: [...]",
            "transcription-rule-3": "If a word can't be completely deciphered, the following wildcard can be inserted: [unvollst.]",
            "transcription-rule-4": "Principle: The transcription should be as close as possible to the original!",
            "transcription-rule-5": "All special characters should be transcribed! (If not possible, see FAQs)."
        }
    }
</i18n>

<template>
    <div>

        <div class="centered">
            <a class="popup-toggle" :class="{ active: visible }" @click="visible = !visible">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M239.1,352.3l-136-136c-9.4-9.4-9.4-24.6,0-33.9l22.6-22.6c9.4-9.4,24.6-9.4,33.9,0l96.4,96.4l96.4-96.4
                    c9.4-9.4,24.6-9.4,33.9,0l22.6,22.6c9.4,9.4,9.4,24.6,0,33.9l-136,136C263.7,361.7,248.5,361.7,239.1,352.3L239.1,352.3z"/>
                </svg>
                {{ buttonText }}
            </a>
        </div>

        <div v-if="visible" class="row row-centered">
            <div class="col col-tablet-portrait-10">
                <div class="popup">
                    <ul>
                        <li>{{ $t(challenge) }}</li>
                        <li>{{ $t('transcription-rule-2') }}</li>
                        <li>{{ $t('transcription-rule-3') }}</li>
                        <li>{{ $t('transcription-rule-4') }}</li>
                        <li>{{ $t('transcription-rule-5') }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <!--
     <div class="form-popup">
      <div><span class="popup-title"><b>{{header}}</b></span><button @click="switchForm" :class="{'show': !visible, 'hide': visible}">^</button></div>
      <form class="form-container" :class="{'visible': visible, 'hidden': !visible}">

        <div v-html="info"></div>
      </form>

    </div>

      -->

    </div>
</template>

<script>
export default {
  name: 'HelpPopup',
  data() {
    return {
      visible: false
    }
  },
    computed: {
      buttonText() {
          if( !this.visible ) {
              return this.$t('transcription-rules-button-show')
          }
          else {
              return this.$t('transcription-rules-button-hide')
          }
      }
    },
  props: ['info'],
  methods: {
    switchForm() {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .popup-toggle {
        font-size: $font-size-small;
        line-height: 1;
        display: inline-block;
        cursor: pointer;

        svg {
            fill: $color-primary;
            display: block;
            float: left;
            width: $font-size-small;
            height: $font-size-small;
            margin-right: $spacing-1;
        }

        &.active {
            svg {
                transform: rotate(180deg);
            }
        }
    }

    .popup {
        font-size: $font-size-small;
        padding-top: $spacing-3;
    }


    /*

.form-popup {
  box-sizing: border-box;
}

.popup-title {
  color: whitesmoke;
}

.show {
  background-color: #87734f;
}

.hide {
  background-color: red;
}

.visible {
  display: block;
}

.hidden {
  display: none;
}

.open-button {
  background-color: #555;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  bottom: 23px;
  right: 28px;
  width: 280px;
}
.form-popup {
  position: fixed;
  bottom: 0;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
}

.form-container {
  max-width: 300px;
  padding: 10px;
  background-color: white;
}

.form-container textarea {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
  resize: none;
  min-height: 200px;
}

.form-container textarea:focus {
  background-color: #ddd;
  outline: none;
}

.form-container .btn {
  background-color: #4caf50;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
  opacity: 0.8;
}

.form-container .cancel {
  background-color: red;
}

.form-container .btn:hover,
.open-button:hover {
  opacity: 1;
}

    */
</style>
