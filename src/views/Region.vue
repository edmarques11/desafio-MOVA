<template>
  <div>
    <h3 class="mt-4 mb-4">Fitrado por região da {{ region }}</h3>
    <view-flags />
  </div>
</template>

<script>
import ViewFlags from "../components/ViewFlags";
export default {
  name: "Region",
  data() {
    return {
      region: this.$route.params.regionName,
    };
  },
  components: {
    ViewFlags,
  },
};
</script>

<style scoped>
h3 {
  color: #02ae99;
}
</style>
