<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  data: function () {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      countries: [],
    };
  },
  mounted() {
    this.getAllcountries();
  },
  methods: {
    async getAllcountries() {
      try {
        const response = await axios.get(this.baseUrl);
        console.log("aqui misera", response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
