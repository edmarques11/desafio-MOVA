<template>
  <b-container>
    <b-row v-if="currentCountries.length > 0">
      <b-col
        v-for="(country, index) in currentCountries"
        :key="index"
        class="p-0 mb-4"
      >
        <b-img class="flag-country" :src="country.flag"></b-img>
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
    ...mapState(["countries", "pagination"]),
    currentCountries: function () {
      return this.countries.slice(
        this.pagination.initLocal,
        this.pagination.initLocal + 3
      );
    },
  },
  methods: {},
};
</script>

<style>
.flag-country {
  width: 316px;
  height: 181px;
}
</style>
