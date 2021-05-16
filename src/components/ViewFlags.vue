<template>
  <b-container>
    <b-row v-if="currentCountries.length > 0">
      <b-col
        v-for="(country, index) in currentCountries"
        :key="index"
        class="p-0 mb-4"
      >
        <div class="viewCountry" @click="viewCountry(country)">
          <b-img class="flag-country" :src="country.flag"></b-img>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ViewFlags",
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["allCountries", "countries", "pagination"]),
    currentCountries: function () {
      return this.countries.slice(
        this.pagination.initLocal - 1,
        this.pagination.initLocal + 2
      );
    },
  },
  methods: {
    viewCountry(country) {
      let borders = [];
      for (const index in country.borders) {
        const currentCountry = this.allCountries.filter(
          (elem) => elem.alpha3Code === country.borders[index]
        );
        borders.push(currentCountry[0]);
      }
      this.$store.commit("change_countries", borders);
      this.$store.commit("change_viewCountry", country);
      this.$store.commit("change_pagination", {
        initLocal: 1,
        initPagination: 1,
      });
      this.$router.push({
        name: "Country",
        params: { countryName: country.name },
      });
    },
  },
};
</script>

<style>
.flag-country {
  width: 316px;
  height: 181px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.viewCountry {
  cursor: pointer;
}
</style>
