<i18n>
  {

  "en": {

  "page-title": "Register"

  },

  "de": {

  "page-title": "Registrieren"

  }

  }
</i18n>


<template>
  <div>
    <app-content-section>
      <div class="content-wrapper">

        <div class="row row-centered">
          <div class="col col-large-6">

            <register-form></register-form>

          </div>
        </div>

      </div>
    </app-content-section>

    <app-footer></app-footer>

  </div>
</template>

<script>

import { mapState, mapGetters } from "vuex";
import RegisterForm from "@/components/RegisterForm.vue";
import ContentSection from '@/components/shared/ContentSection.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: "Register",
  components :{
    RegisterForm,
      'app-content-section': ContentSection,
      'app-footer': Footer
  },
    metaInfo: function() {
        return {
            title: this.$t('page-title')
        }
    }
};
</script>
