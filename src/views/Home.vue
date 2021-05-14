<template>
  <div class="home">
    <FilterSearchs />
    <ViewFlags />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FilterSearchs from "../components/FilterSearchs.vue";
import ViewFlags from "../components/ViewFlags";

export default {
  name: "Home",
  components: {
    FilterSearchs,
    ViewFlags,
  },
  data: function () {
    return {};
  },
  mounted() {
    this.get_countries("all");
    this.get_allCountries();
  },
  computed: {},
  methods: {
    ...mapActions(["get_countries", "get_allCountries"]),
  },
};
</script>
