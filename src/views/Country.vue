<template>
  <b-container fluid>
    <b-row class="mb-5 mt-5" no-gutters>
      <b-col md="6" class="p-0">
        <img
          height="258"
          class="imageCountry"
          :src="viewCountry.flag"
          :alt="viewCountry.name"
        />
      </b-col>
      <b-col md="6">
        <div class="d-flex flex-column containerData">
          <p class="dataCountry">Nome: {{ viewCountry.name }}</p>
          <p class="dataCountry">Capital: {{ viewCountry.capital }}</p>
          <p class="dataCountry">Região: {{ viewCountry.region }}</p>
          <p class="dataCountry">Subregião: {{ viewCountry.subregion }}</p>
          <p class="dataCountry">
            População: {{ viewCountry.population }} habitantes
          </p>
          <p class="dataCountry">Línguas: {{ populateLanguages }}</p>
        </div>
      </b-col>
    </b-row>
    <ViewFlags />
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import ViewFlags from "../components/ViewFlags";

export default {
  name: "Country",
  components: {
    ViewFlags,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["viewCountry"]),
    populateLanguages: function () {
      if (!this.viewCountry) return;
      return this.viewCountry.languages
        .map((elem) => elem.nativeName)
        .join(", ");
    },
  },
};
</script>

<style scoped>
.containerData {
  align-items: start !important;
}

.imageCountry {
  object-fit: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
