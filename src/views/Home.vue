<template>
  <div class="home">
    <ViewFlags />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ViewFlags from "../components/ViewFlags";

export default {
  name: "Home",
  components: {
    ViewFlags,
  },
  data: function () {
    return {};
  },
  mounted() {
    this.get_countries("all");
  },
  computed: {},
  methods: {
    ...mapActions(["get_countries"]),
  },
};
</script>
