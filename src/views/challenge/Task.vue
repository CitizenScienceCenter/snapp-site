<i18n>
{

"en": {

    "page-title": "Challenge",

    "challenge-difficulty": "Difficulty",
    "challenge-difficulty-1": "Easy",
    "challenge-difficulty-2": "Hard",
    "challenge-heading": "What Snake is This?",
    "challenge-placeholder": "Family, Genus or Binomial",
    "challenge-button-register": "Register",
    "challenge-button-skip": "Skip",
    "challenge-button-submit": "Submit",
    "challenge-info-before": "Not started yet.",
    "challenge-info-after": "Already over.",
    "challenge-info-done": "Already done.",
    "challenge-scoreinfo-prefix": "Earn",
    "challenge-scoreinfo-suffix-binomial": "points for the correct binomial.",
    "challenge-scoreinfo-suffix-genus": "points for the correct genus.",
    "challenge-scoreinfo-suffix-family": "points for the correct family.",
    "challenge-button-feedback": "Send Feedback on this Image",
    "challenge-complete-heading": "Challenge Complete",
    "challenge-complete-text": "You did everything!",

    "section-prize-heading": "What Will you get for Your Participation?",
    "section-prize-intro-1": "<b>The top 3 snake identifiers will receive:</b>",
    "section-prize-list-1-1": "A copy of Mark O’Shea’s new book <b><a href='https://press.uchicago.edu/ucp/books/book/chicago/B/bo33852453.html' target='_blank'>The Book of Snakes</a></b>",
    "section-prize-list-1-2": "A short profile/bio on this webpage (optional)",
    "section-prize-intro-2": "<b>All participants who tag more than 30 images will receive:</b>",
    "section-prize-list-2-1": "A Limited-edition HerpMapper Snake ID challenge badge (if the same email was used to register as for the <a href='https://herpmapper.org' target='_blank'>HerpMapper.org</a> account)",
    "section-prize-list-2-2": "A Certificate of participation from the Citizen Science Center Zurich",

    "section-about-heading": "Why this Challenge?",
    "section-about-text-1": "Venomous snakebite is responsible for over 100,000 deaths and around three times as many permanent disabilities every year, mostly affecting poor and rural communities in the parts of the world where snake diversity is the highest. Communities and healthcare providers working in these areas are often limited in their herpetological expertise.",
    "section-about-text-2": "Our goal is to create digital tools that anyone can use to identify snakes in order to help clinicians better treat snakebite cases, and improve snake conservation through educating people and communities.",
    "section-about-button": "Read more",

    "section-partners-heading": "Project Partners",

    "section-newsletter-heading": "Sign up for our Newsletter"

    },

"de": {

    "page-title": "Challenge",

    "challenge-difficulty": "Schwierigkeit",
    "challenge-difficulty-1": "Einfach",
    "challenge-difficulty-2": "Schwierig",
    "challenge-heading": "Welche Schlange ist's?",
    "challenge-placeholder": "Familie, Genus oder Binomial",
    "challenge-button-register": "Registrieren",
    "challenge-button-skip": "Auslassen",
    "challenge-button-submit": "Senden",
    "challenge-info-before": "Noch nicht gestartet.",
    "challenge-info-after": "Challenge schon vorüber.",
    "challenge-info-done": "Schon erledigt.",
    "challenge-scoreinfo-prefix": "Erhalte",
    "challenge-scoreinfo-suffix-binomial": "Punkte für den korrekten Binomial.",
    "challenge-scoreinfo-suffix-genus": "Punkte für den korrekten Genus.",
    "challenge-scoreinfo-suffix-family": "Punkte für die korrekte Familie.",
    "challenge-button-feedback": "Sende Feedback zum Foto",
    "challenge-complete-heading": "Challenge komplett",
    "challenge-complete-text": "Du hast alles erledigt!",

    "section-prize-heading": "Was kannst Du gewinnen?",
    "section-prize-intro-1": "<b>Die 3 besten Schlangenbestimmer bekommen:</b>",
    "section-prize-list-1-1": "Eine Ausgabe von Mark O’Shea’s neuem Buch <b><a href='https://press.uchicago.edu/ucp/books/book/chicago/B/bo33852453.html' target='_blank'>The Book of Snakes</a></b>",
    "section-prize-list-1-2": "Ein Kurzportrait auf dieser Webseite (optional)",
    "section-prize-intro-2": "<b>Alle Teilnehmer, die mehr als 30 Bilder bestimmen, bekommen:</b>",
    "section-prize-list-2-1": "Ein Limited-edition HerpMapper “Snake ID Challenge-Badge” (bitte dafür hier die gleiche Email-Adresse für die Registrierung verwenden wie im <a href='https://herpmapper.org' target='_blank'>HerpMapper.org</a> Account)",
    "section-prize-list-2-2": "Ein Teilnahme-Zertifikat des Citizen Science Centers Zürich",

    "section-about-heading": "Warum diese Challenge?",
    "section-about-text-1": "Schlangenbisse kosten weltweit jedes Jahr über 100’000 Menschenleben und verursachen ungefähr drei mal so viele Fälle von permanenter Behinderung; oft trifft es gerade Menschen in den armen, ländlichen Gegenden der Welt mit einer grossen Artenvielfalt an Schlangen. Die Gemeinden und Gesundheitsversorger in diesen Gegenden haben oft nicht die nötigen Schlangenkenntnisse.",
    "section-about-text-2": "Unser Ziel ist es, ein digitales Tool zu entwickeln das dabei unterstützt, Schlangen richtig zu bestimmen. Es soll klinischem Personal helfen, Schlangenbisse richtig zu behandeln aber auch ein Bildungsangebot für Menschen und Gemeinden sein um Schlangen besser zu schützen und zu erhalten.",
    "section-about-button": "Mehr erfahren",

    "section-partners-heading": "Projektpartner",

    "section-newsletter-heading": "Abonniere unseren Newsletter"

}

}
</i18n>


<template>

    <div v-if="(tasks[0] && taskMedia[0]) || complete">

        <template v-if="!complete">

            <div class="section-wrapper">

                <app-content-section class="content-section-flat settings-section" color="light-greyish">
                    <div class="settings">

                        <div class="content-wrapper">
                            <div class="row row-centered row-large-right-aligned">
                                <div class="col col-large-5">

                                    <div class="difficulty-select">
                                        <label>{{ $t('challenge-difficulty') }}</label>
                                        <div class="custom-select settings-select">
                                            <select v-model="difficulty">
                                                <option selected value="0">{{ $t('challenge-difficulty-1') }}</option>
                                                <option value="1">{{ $t('challenge-difficulty-2') }}</option>
                                            </select>
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                                <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </app-content-section>


                <app-content-section class="content-section-condensed question-section">

                    <div class="content-wrapper">
                        <div class="row row-centered row-large-right-aligned">
                            <div class="col col-large-5">

                                <h2 class="heading">
                                    {{ $t('challenge-heading') }}
                                </h2>

                            </div>
                        </div>
                    </div>
                </app-content-section>

                <app-content-section class="content-section-flat image-section">
                    <template>

                        <image-viewer class="image-viewer" :src="'https://api.citizenscience.ch/files/upload/'+taskMedia[0].path" disableScrollToZoom></image-viewer>

                        <div class="image-info-wrapper">
                            <div class="image-info" v-if="tasks[0].info.state_province || tasks[0].info.country || tasks[0].info.global_region">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M236.3,501.7C91,291,64,269.4,64,192C64,86,150,0,256,0s192,86,192,192c0,77.4-27,99-172.3,309.7C266.2,515.4,245.8,515.4,236.3,501.7L236.3,501.7z M256,272c44.2,0,80-35.8,80-80s-35.8-80-80-80s-80,35.8-80,80S211.8,272,256,272z"/>
                                </svg>
                                <b>
                                <span v-if="tasks[0].info.state_province">{{ tasks[0].info.state_province }}</span>
                                <span v-if="tasks[0].info.country">{{ tasks[0].info.country }}</span>
                                <span v-if="tasks[0].info.global_region">{{ tasks[0].info.global_region }}</span>
                                </b>
                            </div>
                            <div class="image-info image-info-small" v-if="tasks[0].info.photographer || tasks[0].info.image_source">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path>
                                </svg>
                                <span v-if="tasks[0].info.photographer">{{ tasks[0].info.photographer }}</span>
                                <span v-if="tasks[0].info.image_source">{{ tasks[0].info.image_source }}</span>
                            </div>
                        </div>

                    </template>
                </app-content-section>

                <app-content-section class="content-section-condensed response-section">
                    <div class="content-wrapper">
                        <div class="row row-centered row-large-right-aligned">
                            <div class="col col-large-5">

                                <div class="form-field form-field-block">
                                    <search-select
                                            :disabled="hasSubmissionAlready || showNext"
                                            :placeholder="$t('challenge-placeholder')"
                                            :optionContainers="optionContainers"
                                            v-model="value">
                                    </search-select>
                                </div>

                                <div v-if="tasks[0]" class="actions margin-bottom">


                                    <div class="button-group right-aligned">
                                        <template v-if="challengeState === 'before'">
                                            <router-link tag="button" to="/login" class="button button-primary">{{ $t('challenge-button-register') }}</router-link>
                                        </template>
                                        <template v-if="challengeState === 'ongoing'">
                                            <template v-if="showNext">
                                                <button ref="next" class="button button-primary" :disabled="loading" @click.prevent="next()">Next</button>
                                            </template>
                                            <template v-else>
                                                <button class="button button-secondary" v-if="!hasSubmissionAlready" :disabled="loading" @click.prevent="value = null;submitResponse()">{{ $t('challenge-button-skip') }}</button>
                                                <button ref="submit" class="button button-primary" v-if="!hasSubmissionAlready" :disabled="loading || !value || Object.keys(value).length === 0 || evaluation" @click.prevent="submitResponse()">{{ $t('challenge-button-submit') }}</button>
                                            </template>
                                        </template>
                                    </div>



                                    <div class="info">
                                        <div v-if="challengeState === 'before'" class="message message-info">
                                            <div class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M180,424.23h20V279.77H180a20,20,0,0,1-20-20V212a20,20,0,0,1,20-20H292a20,20,0,0,1,20,20V424.23h20a20,20,0,0,1,20,20V492a20,20,0,0,1-20,20H180a20,20,0,0,1-20-20V444.23A20,20,0,0,1,180,424.23ZM256,0a72,72,0,1,0,72,72A72,72,0,0,0,256,0Z"></path>
                                                </svg>
                                            </div>
                                            <span class="text">{{ $t('challenge-info-before') }}</span>
                                        </div>
                                        <div v-else-if="challengeState === 'after'" class="message message-info">
                                            <div class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M180,424.23h20V279.77H180a20,20,0,0,1-20-20V212a20,20,0,0,1,20-20H292a20,20,0,0,1,20,20V424.23h20a20,20,0,0,1,20,20V492a20,20,0,0,1-20,20H180a20,20,0,0,1-20-20V444.23A20,20,0,0,1,180,424.23ZM256,0a72,72,0,1,0,72,72A72,72,0,0,0,256,0Z"></path>
                                                </svg>
                                            </div>
                                            <span class="text">{{ $t('challenge-info-after') }}</span>
                                        </div>
                                        <div v-else-if="hasSubmissionAlready" class="message message-info">
                                            <div class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M180,424.23h20V279.77H180a20,20,0,0,1-20-20V212a20,20,0,0,1,20-20H292a20,20,0,0,1,20,20V424.23h20a20,20,0,0,1,20,20V492a20,20,0,0,1-20,20H180a20,20,0,0,1-20-20V444.23A20,20,0,0,1,180,424.23ZM256,0a72,72,0,1,0,72,72A72,72,0,0,0,256,0Z"></path>
                                                </svg>
                                            </div>
                                            <span class="text">{{ $t('challenge-info-done') }}</span>
                                        </div>

                                        <div v-else-if="evaluation" class="message message-evaluation">

                                            <div ref="circle2" class="circle circle-2 hidden" :class="{ 'success': evaluation.score === binomialScore, 'fail': value.type === 'binomial' && evaluation.score < binomialScore, 'empty': value.type !== 'binomial' }"></div>
                                            <div ref="circle1" class="circle circle-1 hidden" :class="{ 'success': value.type !== 'family' && evaluation.score >= genusScore, 'fail': value.type !== 'family' && evaluation.score < genusScore, 'empty': value.type !== 'binomial' && value.type !== 'genus' }"></div>

                                            <div v-if="evaluation.score === 0" ref="scoreicon" class="icon fail hidden">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M322.72,256,422.79,155.93a31.46,31.46,0,0,0,0-44.48L400.55,89.21a31.46,31.46,0,0,0-44.48,0L256,189.28,155.93,89.21a31.46,31.46,0,0,0-44.48,0L89.21,111.45a31.46,31.46,0,0,0,0,44.48L189.28,256,89.21,356.07a31.46,31.46,0,0,0,0,44.48l22.24,22.24a31.46,31.46,0,0,0,44.48,0L256,322.72,356.07,422.79a31.46,31.46,0,0,0,44.48,0l22.24-22.24a31.46,31.46,0,0,0,0-44.48Z"></path>
                                                </svg>
                                            </div>
                                            <div v-else ref="scoreicon" class="icon success hidden">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                </svg>
                                            </div>

                                            <span ref="score" class="score hidden" :class="{ 'success': evaluation.score > 0, 'fail': evaluation.score === 0 }">{{ evaluation.score }}</span>
                                        </div>

                                    </div>
                                </div>

                                <div v-if="tasks[0]" class="mongo">
                                    <label>Binomial: </label><i>{{ tasks[0].info.binomial }}</i>
                                    <label>Genus: </label>{{ tasks[0].info.genus }}
                                    <label>Family: </label>{{ tasks[0].info.family }}
                                </div>

                                <div class="content-container">
                                    <ul class="evaluation-list">

                                        <li ref="evaluation-step-3" :class="{
                                            'correct': evaluation && evaluation.successRate === 3,
                                            'wrong': evaluation && evaluation.successRate < 3 && value.type === 'binomial',
                                            'missing': evaluation && evaluation && value.type !== 'binomial'
                                        }">
                                            <div class="evaluation">
                                                <template v-if="evaluation && evaluation.successRate === 3"> <!-- correct -->
                                                    {{ tasks[0].info.binomial }}
                                                </template>
                                                <template v-else-if="evaluation && evaluation.successRate < 3 && value.type === 'binomial'">  <!-- wrong -->
                                                    <span class="wrongAnswer">{{ value.value }}</span>{{ tasks[0].info.binomial }}
                                                </template>
                                                <template v-else-if="evaluation && value.type !== 'binomial'"> <!-- missing -->
                                                    {{ tasks[0].info.binomial }}
                                                </template>
                                            </div>
                                            <div class="default">
                                                {{ $t('challenge-scoreinfo-prefix') }} {{binomialScore}} {{ $t('challenge-scoreinfo-suffix-binomial') }}
                                            </div>
                                        </li>


                                        <li ref="evaluation-step-2" :class="{
                                            'correct': evaluation && evaluation.successRate >= 2,
                                            'wrong': evaluation && evaluation.successRate < 2 && ( value.type === 'genus' || value.hasOwnProperty('genus') ),
                                            'missing': evaluation && evaluation && value.type !== 'genus' && value.type !== 'binomial'
                                        }">
                                            <div class="evaluation">
                                                <template v-if="evaluation && evaluation.successRate >= 2"> <!-- correct -->
                                                    {{ tasks[0].info.genus }}
                                                </template>
                                                <template v-else-if="evaluation && evaluation.successRate < 2 && value.type === 'genus'"> <!-- wrong -->
                                                    <span class="wrongAnswer">{{ value.value }}</span>{{ tasks[0].info.genus }}
                                                </template>
                                                <template v-else-if="evaluation && evaluation.successRate < 2 && value.hasOwnProperty('genus')"> <!-- wrong because of parent -->
                                                    <span class="wrongAnswer">{{ value.genus }}</span>{{ tasks[0].info.genus }}
                                                </template>
                                                <template v-else-if="evaluation && value.type !== 'genus' && value.type !== 'binomial'"> <!-- missing -->
                                                    {{ tasks[0].info.genus }}
                                                </template>
                                            </div>
                                            <div class="default">
                                                {{ $t('challenge-scoreinfo-prefix') }} {{genusScore}} {{ $t('challenge-scoreinfo-suffix-genus') }}
                                            </div>
                                        </li>


                                        <li ref="evaluation-step-1" :class="{
                                            'correct': evaluation && evaluation.successRate >= 1,
                                            'wrong': evaluation && evaluation.successRate < 1 && ( value.type === 'family' || value.hasOwnProperty('family') )
                                        }">
                                            <div class="evaluation">
                                                <template v-if="evaluation && evaluation.successRate >= 1"> <!-- correct -->
                                                    {{ tasks[0].info.family }}
                                                </template>
                                                <template v-else-if="evaluation && evaluation.successRate < 1 && value.type === 'family'"> <!-- wrong -->
                                                    <span class="wrongAnswer">{{ value.value }}</span>{{ tasks[0].info.family }}
                                                </template>
                                                <template v-else-if="evaluation && evaluation.successRate < 1 && value.hasOwnProperty('family')"> <!-- wrong because of parent -->
                                                    <span class="wrongAnswer">{{ value.family }}</span>{{ tasks[0].info.family }}
                                                </template>
                                            </div>
                                            <div class="default">
                                                {{ $t('challenge-scoreinfo-prefix') }} {{familyScore}} {{ $t('challenge-scoreinfo-suffix-family') }}
                                            </div>
                                        </li>

                                    </ul>

                                    <div class="button-group">
                                        <button style="padding:0" class="button button-secondary button-secondary-naked" v-if="!hasSubmissionAlready" title="info@citizenscience.ch" @click.prevent="openInNewTab('mailto:info@citizenscience.ch?subject=Snake ID Challenge Feedback&body=https://snakes.citizenscience.ch/challenge/'+tasks[0].id)">{{ $t('challenge-button-feedback') }}</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </app-content-section>

            </div>


            <app-content-section class="content-section-condensed" color="light-greyish">
                <div v-if="challengeState !== 'before'" class="content-subsection">
                    <scores></scores>
                </div>
                <div class="content-subsection">
                    <div class="content-wrapper">
                        <div class="row row-centered">
                            <div class="col">
                                <duration></duration>
                            </div>
                        </div>
                    </div>
                </div>
            </app-content-section>


        </template>

        <template v-else-if="complete">

            <app-content-section>
                <div class="content-wrapper">
                    <div class="row row-centered">
                        <div class="col col-large-6">

                            <h2 class="heading">{{ $t('challenge-complete-heading') }}</h2>
                            <p v-html="$t('challenge-complete-text')"></p>

                        </div>
                    </div>
                </div>
            </app-content-section>

            <app-content-section class="content-section-condensed" color="light-greyish">
                <scores></scores>
            </app-content-section>

        </template>



        <app-content-section color="greyish">
            <div class="content-wrapper">
                <div class="row row-centered row-middle row-reverse-large">

                    <div class="col col-large-5 col-large-after-1 col-wrapping col-large-no-bottom-margin">
                        <h2 class="heading centered left-aligned-large">{{ $t('section-prize-heading') }}</h2>
                        <p class="reduced-bottom-margin" v-html="$t('section-prize-intro-1')"></p>
                        <ul>
                            <li v-html="$t('section-prize-list-1-1')"></li>
                            <li v-html="$t('section-prize-list-1-2')"></li>
                        </ul>
                        <p class="reduced-bottom-margin" v-html="$t('section-prize-intro-2')"></p>
                        <ul class="reduced-bottom-margin">
                            <li v-html="$t('section-prize-list-2-1')"></li>
                            <!-- <li v-html="$t('section-prize-list-2-2')"></li> -->
                        </ul>
                    </div>

                    <div class="col col-10 col-large-6 col-wrapping col-no-bottom-margin">
                        <div>
                            <div class="extra-padding-h">
                                <img src="/img/graphic-prize.jpg" style="transform: rotate(-1deg); box-shadow: 0px 0px 48px -16px rgba(0,0,0, 0.8);" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </app-content-section>


        <app-content-section class="overflow-hidden">
            <div class="content-wrapper">
                <div class="row">
                    <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping col-large-no-bottom-margin">

                        <h2 id="about" class="heading centered left-aligned-large">{{ $t('section-about-heading') }}</h2>
                        <p v-html="$t('section-about-text-1')"></p>
                        <p v-html="$t('section-about-text-2')"></p>
                        <p class="centered left-aligned-large">
                            <router-link tag="button" to="/about" class="button button-secondary">{{ $t('section-about-button') }}</router-link>
                        </p>
                    </div>

                </div>
            </div>
            <div class="background-wrapper background-wrapper-move-right">
                <div class="content-wrapper">
                    <div class="row row-centered row-in-background">
                        <div class="col col-8 col-tablet-portrait-6 col-large-7">
                            <img src="img/graphic-about.jpg" style="border-radius:50%; width: 100%;"/>
                        </div>
                    </div>
                </div>
            </div>
        </app-content-section>



        <app-content-section color="light-greyish">
            <div class="content-wrapper">
                <div class="row row-centered">
                    <div class="col col-large-6">
                        <h2 class="heading centered">{{ $t('section-partners-heading') }}</h2>
                    </div>
                </div>
                <div class="row row-centered row-wrapping">

                    <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                        <img src="img/logos/cyberlab.png" />
                    </div>
                    <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                        <img src="img/logos/udg-fdm.png" />
                    </div>
                    <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                        <img src="img/logos/herpmapper.png" />
                    </div>
                    <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                        <img src="img/logos/msf.png" />
                    </div>
                    <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                        <img src="img/logos/epfl.png" />
                    </div>
                    <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                        <img src="img/logos/goethe.png" />
                    </div>

                </div>
                <div class="row row-centered row-wrapping">

                    <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                        <img src="img/logos/copenhagen.png" />
                    </div>
                    <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                        <img src="img/logos/gti.png" />
                    </div>
                    <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                        <img src="img/logos/melbourne.png" />
                    </div>
                    <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                        <img src="img/logos/indiansnakes.png" />
                    </div>
                    <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                        <img src="img/logos/gsi.png" />
                    </div>

                </div>
                <div class="row row-centered row-wrapping">

                    <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                        <img src="img/logos/fp-hug.png" />
                    </div>

                    <div class="col col-wrapping col-6 col-tablet-portrait-4 col-large-2">
                        <img src="img/logos/hug.png" />
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
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'
import ImageViewer from '@/components/ImageViewer.vue'
import SearchSelect from '@/components/SearchSelect.vue'
import Comments from '@/components/shared/Comments.vue'
import Scores from "@/components/Scores";
import Duration from "@/components/Duration";


export default {
    name: 'Task',
    components: {
        Scores,
        Duration,
        'app-content-section': ContentSection,
        'app-footer': Footer,
        'app-newsletter-signup': NewsletterSignup,
        'image-viewer': ImageViewer,
        'search-select': SearchSelect,
        'comments': Comments
    },
    metaInfo: function() {
        return {
            title: this.$t('page-title')
        }
    },
    data() {
        return {
            id: null,
            hasSubmissionAlready: false,
            difficulty: '0',
            completedDifficulties: [],
            value: {},
            responseTime: null,
            evaluation: null,
            complete: false,
            loadTime: null,
            showNext: false,
            loading: false
        }
    },
    computed: {
        ...mapState({
            //user: state => state.user.user,
            activityId: state => state.consts.activityId,

            optionContainers: state => state.consts.optionContainers,
            challengeState: state => state.consts.challengeState,

            user: state => state.c3s.user.currentUser,
            activity: state => state.c3s.activity.activity,
            tasks: state => state.c3s.task.tasks,
            taskMedia: state => state.c3s.task.media,
            currentUser: state => state.c3s.user.currentUser,
            submission: state => state.c3s.submission.submission,

            //loading: state => state.c3s.settings.loading
        }),
        familyScore: function() {
            switch( this.difficulty ) {
                case '0': {
                    return 6;
                }
                case '1': {
                    return 8;
                }
            }
        },
        genusScore: function() {
            switch( this.difficulty ) {
                case '0': {
                    return 9;
                }
                case '1': {
                    return 12;
                }
            }
        },
        binomialScore: function() {
            switch( this.difficulty ) {
                case '0': {
                    return 12;
                }
                case '1': {
                    return 16;
                }
            }
        }
    },
    watch: {
        value: function(to,from) {

            //if( this.value && this.value.hasOwnProperty('info') ) {
            if( this.value && Object.keys(this.value).length > 0 ) {
                // v-bind for disabled is not done, workaround... ¯\_(ツ)_/¯

                if( this.challengeState === 'ongoing' ) {
                    this.$refs.submit.removeAttribute('disabled');
                    this.$refs.submit.focus();
                }
            }

        },
        difficulty: function(to, from) {
            this.loadTask();
        },
        showNext( to, from ) {
            if( to ) {
                let self = this;
                setTimeout( function() {
                    self.$refs.next.focus();
                }, 100 );
            }
        }
    },
    beforeCreate() {
        this.$store.commit('c3s/task/SET_TASKS', [] );
        this.$store.commit('c3s/task/SET_MEDIA', [] );
    },
    mounted() {

        this.$store.dispatch("c3s/activity/getActivity", [this.activityId, false]).then(activity => {

            //console.log('activity loaded');

            if( this.$route.params.id ) {
                if( this.$route.params.id.length !== 36 ) {
                    console.log('invalid id');
                    delete this.$route.params.id;
                    this.$router.replace('/challenge');
                    this.id = null;
                    this.loadTask();
                }
                else {
                    this.id = this.$route.params.id;
                    this.loadTask();
                }
            }
            else {
                this.id = null;
                //console.log('load without id');
                this.loadTask();
            }

        });

    },
    methods: {
        openInNewTab: function(url) {
            var win = window.open(url, '_blank');
            win.focus();
        },
        loadTask: function() {

            this.loading = true;
            console.log('load task');

            let taskQuery;
            if( !this.id ) {

                taskQuery = {
                    'select': {
                        'fields': [
                            '*'
                        ],
                        'tables': [
                            'tasks'
                        ],
                        'orderBy': {
                            'random()': ''
                        }
                    },
                    'where': [
                        {
                            "field": 'tasks.activity_id',
                            'op': 'e',
                            'val': this.activity.id
                        },
                        {
                            'field': 'tasks.id',
                            'op': 'ni',
                            'val': "(SELECT task_id FROM submissions WHERE submissions.task_id = tasks.id AND user_id = '" + this.user.id + "')",
                            'join': 'a',
                            'type': 'sql'
                        },
                        {
                            'field': 'tasks.info ->> \'difficulty\'',
                            'op': 'e',
                            'val': this.difficulty.toString(),
                            'join': 'a'
                        }
                    ]
                };

            }
            else {
                taskQuery = {
                    'select': {
                        'fields': [
                            '*'
                        ],
                        'tables': [
                            'tasks'
                        ]
                    },
                    'where': [
                        {
                            "field": 'id',
                            'op': 'e',
                            'val': this.id
                        }
                    ]
                };

            }


            this.$store.dispatch('c3s/task/getTasks', [taskQuery, 1]).then(tasks => {

                //console.log('responded tasks');

                this.hasSubmissionAlready = false;

                if( this.id ) {

                    let query = {
                        'select': {
                            'fields': [
                                '*'
                            ],
                            'tables': [
                                'submissions'
                            ]
                        },
                        'where': [
                            {
                                'field': 'task_id',
                                'op': 'e',
                                'val': this.id
                            },
                            {
                                'field': 'user_id',
                                'op': 'e',
                                'val': this.user.id,
                                'join': 'a'
                            }
                        ]
                    };

                    this.$store.dispatch('c3s/submission/getSubmissions', [query,0] ).then(submissions => {


                        if( submissions.body.length > 0 ) {
                            this.hasSubmissionAlready = true;
                        }
                        else {
                            this.hasSubmissionAlready = false;
                        }

                        this.id = false;

                    });

                }

                if ( this.tasks[0] ) {

                    console.log( 'task loaded');
                    //console.log('load media');

                    const mediaQuery = {
                        'select': {
                            'fields': [
                                '*'
                            ],
                            'tables': [
                                'media'
                            ]
                        },
                        'where': [
                            {
                                "field": "source_id",
                                'op': 'e',
                                'val': this.tasks[0].id
                            }
                        ]
                    };


                    this.$store.dispatch('c3s/media/getMedia', [mediaQuery, 'c3s/task/SET_MEDIA', 1]).then(media => {

                        //console.log('media loaded');
                        this.evaluation = null;
                        this.value = null;
                        this.loadTime = new Date();
                        this.loading = false;
                        this.showNext = false;

                    });

                }

                else {

                    console.log('no more tasks');

                    if ( this.difficulty === '0') {
                        this.completedDifficulties.push('0');

                        if (this.completedDifficulties.indexOf('1') === -1) {
                            this.difficulty = '1';
                        }
                        else {
                            this.complete = true;
                        }
                    }
                    else if ( this.difficulty === '1') {
                        this.completedDifficulties.push('1');

                        if (this.completedDifficulties.indexOf('0') === -1) {
                            this.difficulty = '0';
                        }
                        else {
                            this.complete = true;
                        }
                    }


                }


            });

        },
        submitResponse: function() {

            let timeNow = new Date();
            let timeNeeded = timeNow.getTime() - this.loadTime.getTime();

            // evaluation if value
            let submissionQuery;

            if( this.value && Object.keys(this.value).length > 0 ) {

                if (this.value.type === 'binomial') {
                    if (this.value.value === this.tasks[0].info.binomial) {
                        this.evaluation = {
                            'successRate': 3,
                            'score': this.binomialScore
                        };
                    }
                    else if (this.value.genus === this.tasks[0].info.genus) {
                        this.evaluation = {
                            'successRate': 2,
                            'score': this.genusScore
                        };
                    }
                    else if (this.value.family === this.tasks[0].info.family) {
                        this.evaluation = {
                            'successRate': 1,
                            'score': this.familyScore
                        };
                    }
                    else {
                        this.evaluation = {
                            'successRate': 0,
                            'score': 0
                        };
                    }
                }
                else if (this.value.type === 'genus') {
                    if (this.value.value === this.tasks[0].info.genus) {
                        this.evaluation = {
                            'successRate': 2,
                            'score': this.genusScore
                        };
                    }
                    else if (this.value.value === this.tasks[0].info.family) {
                        this.evaluation = {
                            'successRate': 1,
                            'score': this.familyScore
                        };
                    }
                    else {
                        this.evaluation = {
                            'successRate': 0,
                            'score': 0
                        };
                    }
                }
                else if (this.value.type === 'family') {
                    if (this.value.value === this.tasks[0].info.family) {
                        this.evaluation = {
                            'successRate': 1,
                            'score': this.familyScore
                        };
                    }
                    else {
                        this.evaluation = {
                            'successRate': 0,
                            'score': 0
                        };
                    }
                }

                submissionQuery = {
                    "info": {},
                    "content": {
                        "responses": [{
                            "value": this.value.value,
                            "info": this.value.type,
                            "score": this.evaluation.score,
                            "time": timeNeeded
                        }]
                    },
                    "task_id": this.tasks[0].id,
                    "user_id": this.currentUser.id
                };

            }
            else {
                submissionQuery = {
                    "info": {},
                    "content": {
                        "responses": [{
                            "value": null,
                            "info": null,
                            "score": 0
                        }]
                    },
                    "task_id": this.tasks[0].id,
                    "user_id": this.currentUser.id
                };
            }

            this.$store.commit('c3s/submission/SET_SUBMISSION', submissionQuery );

            this.$store.dispatch('c3s/submission/createSubmission').then(submission => {


                if( this.value && Object.keys(this.value).length > 0 ) {

                    const self = this;
                    var counter = 1;
                    this.$refs['evaluation-step-' + counter].classList.add('evaluated');
                    this.$refs.scoreicon.classList.remove('hidden');
                    var interval = setInterval(function () {

                        counter++;

                        if (counter === 2) {
                            self.$refs['evaluation-step-' + counter].classList.add('evaluated');
                            self.$refs.circle1.classList.remove('hidden');
                        }
                        else if (counter === 3) {
                            self.$refs['evaluation-step-' + counter].classList.add('evaluated');
                            self.$refs.circle2.classList.remove('hidden');
                        }
                        else if( counter === 4 ) {
                            self.$refs.score.classList.remove('hidden');
                            self.showNext = true;
                            self.$store.dispatch('score/calculateScore');
                            clearInterval(interval)
                        }

                    }, 600);

                }
                else {
                    this.value = {};
                    this.loadTask();
                }

            });
        },
        next() {
            this.$refs['evaluation-step-1'].classList.remove('evaluated');
            this.$refs['evaluation-step-2'].classList.remove('evaluated');
            this.$refs['evaluation-step-3'].classList.remove('evaluated');
            this.loadTask();
        }
    }
}

</script>

<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';


.section-wrapper {

    .settings-section {
        .settings {

            padding: calc(#{$spacing-1}/2) 0;

            .settings-select {
                select {
                    border-bottom: none;

                    &:focus {
                        border-bottom: none;
                    }
                }
            }

            .difficulty-select {
                display: inline-block;
                margin-right: $spacing-2;

                label {
                    font-weight: bold;
                    margin-right: $spacing-2;
                }
            }
            .region-select {
                display: inline-block;

                label {
                    font-weight: bold;
                    margin-right: $spacing-2;
                }
            }
        }
    }

    .question-section {
        padding-bottom: 0;
    }

    .image-section {

        .image-viewer {
            height: 240px;
        }
        .image-info-wrapper {
            position: absolute;
            top: $spacing-1;
            left: $spacing-1;

            margin: calc( -#{$spacing-1} /2 );
            font-size: 0;

            .image-info {
                color: white;
                background: rgba( $color-black, 0.4);
                border-radius: 16px;
                font-size: $font-size-small;
                position: relative;
                padding: calc( ( 32px - #{$font-size-small} *1.5 ) / 2 ) 0;
                padding-right: $spacing-2;
                padding-left: 36px;

                &.image-info-small {
                    font-size: $font-size-mini;
                    line-height: calc( #{$font-size-small} *1.5);
                }

                svg {
                    position: absolute;
                    top: calc( ( 32px - #{$font-size-small} ) /2 );
                    left: calc( ( 32px - #{$font-size-small} ) /2 + 4px );
                    width: $font-size-small;
                    height: $font-size-small;
                    fill: rgba( white, 0.8 );
                }

                display: inline-block;
                margin: calc( #{$spacing-1} /2 );

                span {
                    text-transform: capitalize;
                    &:after {
                        content: ', ';
                    }
                    &:last-child {
                        &:after {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    .response-section {

        .form-field {
            margin-bottom: $spacing-2;
        }

        .actions {
            position: relative;

            .button-group {
                position: absolute;
                top: 0;
                right: 0;
            }
            .info {
                min-height: 40px;
                position: relative;
                pointer-events: none;

                .message {
                    height: 40px;
                    width: 60%;
                    position: relative;
                    padding-left: 56px;

                    display: flex;
                    align-items: center;

                    .icon {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 40px;
                        width: 40px;
                        border-radius: 50%;

                        svg {
                            fill: white;
                            position: absolute;
                            top: 12px;
                            left: 12px;
                            width: 16px;
                            height: 16px;
                        }
                    }

                    &.message-info {
                        color: $color-info;
                        .icon {
                            background-color: $color-info;
                        }
                        .text {
                            line-height: 20px;
                        }
                    }

                    &.message-evaluation {

                        .circle {
                            transition: all $transition-duration-long $transition-timing-function;

                            position: absolute;
                            border-radius: 50%;
                            border: 1px solid white;

                            &.success {
                                background-color: $color-success;
                            }
                            &.fail {
                                background-color: $color-error;
                            }
                            &.empty {
                                background-color: $color-black-tint-50;
                            }

                            &.circle-2 {
                                top: 0;
                                left: 0;
                                height: 40px;
                                width: 40px;
                            }
                            &.circle-1 {
                                top: 4px;
                                left: 4px;
                                height: 32px;
                                width: 32px;
                            }

                            &.hidden {
                                transform: scale( 0, 0 );
                            }
                        }
                        .icon {
                            transition: all $transition-duration-long $transition-timing-function;

                            border: 1px solid white;
                            top: 8px;
                            left: 8px;
                            height: 24px;
                            width: 24px;

                            svg {
                                transition: all $transition-duration-long $transition-timing-function;

                                left: 3px;
                                top: 3px;
                                width: 16px;
                                height: 16px;
                            }

                            &.success {
                                background-color: $color-success;
                            }
                            &.fail {
                                background-color: $color-error;
                            }

                            &.hidden {
                                transform: scale( 0, 0 );
                            }
                        }
                        .score {
                            font-weight: 700;
                            &.success {
                                color: $color-success;
                            }
                            &.fail {
                                color: $color-error;
                            }

                            &.hidden {
                                display: none;
                            }
                        }
                    }

                }
            }
        }


        .evaluation-list {
            li:first-child {
                .evaluation {
                    font-style: italic;
                }
            }
            li {
                .evaluation {
                    display: none;
                }
                .default {
                    display: inline;
                }

                &.evaluated {

                    &:before {
                        width: 0.8rem;
                        height: 0.8rem;
                        top: 0.35rem;
                        left: 0.35rem;

                        transition: all $transition-duration-long $transition-timing-function;
                    }

                    .evaluation {
                        display: inline;
                    }
                    .default {
                        display: none;
                    }


                    &.correct {
                        &:before {
                            background-color: $color-success;
                        }
                    }
                    &.wrong {
                        &:before {
                            background-color: $color-error;
                        }

                        .wrongAnswer {
                            text-decoration: line-through;
                            margin-right: $spacing-1;
                        }
                    }
                    &.missing {
                        &:before {
                            background-color: $color-black-tint-50;
                        }
                    }
                }

            }
        }
    }
}

.mongo {
    position: fixed;
    right: 0;
    bottom: 0;
    font-size: $font-size-small/1.25;
    color: white;
    background: $color-black;
    z-index: 20;
    padding: 0 $spacing-1;
    border-top-left-radius: $border-radius;

    label {
        font-size: $font-size-small/1.25/1.25;
        font-weight: 700;
        color: $color-black-tint-50;
        opacity: 0.5;
    }
}



@media only screen and (min-width: $viewport-mobile-large) {

    .section-wrapper {

        .settings-section {
            .settings {
                padding: $spacing-1 0;
            }
        }

        .image-section {

            .image-viewer {
                height: 280px;
            }

        }
    }

}

@media only screen and (min-width: $viewport-tablet-portrait) {

    .section-wrapper {

        .settings-section {
            .settings {
                padding: $spacing-1 0;
            }
        }

        .image-section {

            .image-viewer {
                height: 480px;
            }
            .image-info-wrapper {
                top: $spacing-2;
                left: $spacing-2;
            }
        }

        .response-section {

            .form-field {
                margin-bottom: $spacing-3;
            }
            .actions {
                .info {
                    min-height: 48px;

                    .message {
                        height: 48px;
                        padding-left: 64px;

                        .icon {
                            height: 48px;
                            width: 48px;

                            svg {
                                left: 16px;
                                top: 16px;
                            }
                        }

                        &.message-info {
                            .text {
                                line-height: 24px;
                            }
                        }

                        &.message-evaluation {

                            .circle {

                                &.circle-2 {
                                    top: 0;
                                    left: 0;
                                    height: 48px;
                                    width: 48px;
                                }
                                &.circle-1 {
                                    height: 40px;
                                    width: 40px;
                                }
                            }
                            .icon {
                                top: 8px;
                                left: 8px;
                                height: 32px;
                                width: 32px;

                                svg {
                                    left: 7px;
                                    top: 7px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }


}

@media only screen and (min-width: $viewport-large) {

    .section-wrapper {
        position: relative;

        .image-section {
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            z-index: 1;

            .image-viewer {
                position: relative;
                height: 100%;
            }

            .image-info-wrapper {
                z-index: 1;
            }
        }

        .response-section {
            padding-top: 0;

            .actions {
                margin-bottom: $spacing-4;
            }

            .content-container {
                min-height: 180px;
            }
        }
    }

}


@media only screen and (min-width: $viewport-xlarge) {


}



</style>
