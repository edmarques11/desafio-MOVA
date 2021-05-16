<template>
  <b-container fluid>
    <b-row class="mb-5 mt-5" no-gutters>
      <b-col md="6" class="p-0">
        <img
          class="imageCountry"
          :src="viewCountry.flag"
          :alt="viewCountry.name"
        />
      </b-col>
      <b-col md="6">
        <div class="d-flex flex-column containerData">
          <p class="dataCountry">Nome: {{ viewCountry.name }}</p>
          <p class="dataCountry">Capital: {{ viewCountry.capital }}</p>
          <p class="dataCountry">
            Região
            <a @click="goRegion(viewCountry.region)">
              {{ viewCountry.region }}
            </a>
          </p>
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
import { mapActions, mapState } from "vuex";
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
    ...mapState(["viewCountry", "countries", "allCountries"]),
    populateLanguages: function () {
      if (!this.viewCountry) return;
      return this.viewCountry.languages
        .map((elem) => elem.nativeName)
        .join(", ");
    },
  },
  methods: {
    ...mapActions(["get_countries"]),
    goRegion(region) {
      const endPoint = `region/${region}`;
      this.get_countries(endPoint);
      this.$router.push({ name: "Region", params: { regionName: region } });
    },
  },
};
</script>

<style scoped>
.containerData {
  align-items: start !important;
}

a {
  text-decoration: underline !important;
  color: blue !important;
  cursor: pointer;
}

.imageCountry {
  object-fit: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  height: 258px;
}

@media screen and (max-width: 360px) {
  .imageCountry {
    height: 181px;
  }
}
</style>
