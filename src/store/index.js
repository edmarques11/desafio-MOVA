import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    typeSearch: "",
    countryFilter: "",
    countries: [],
    allCountries: [],
    viewCountry: {},
    pagination: {
      initLocal: 0,
      initPagination: 0,
    },
  },
  mutations: {
    change_typeSearch(state, payload) {
      state.typeSearch = payload;
    },
    change_countryFilter(state, payload) {
      state.countryFilter = payload;
    },
    change_countries(state, payload) {
      state.countries = payload;
    },
    change_allCountries(state, payload) {
      state.allCountries = payload;
    },
    change_viewCountry(state, payload) {
      state.viewCountry = payload;
    },
    change_pagination(state, payload) {
      state.pagination = payload;
    },
  },
  actions: {
    async get_countries(context, entrypoint) {
      try {
        const { countryFilter, typeSearch } = context.state;
        const baseUrl = process.env.VUE_APP_BASE_URL;

        const url = entrypoint
          ? baseUrl + `/${entrypoint}`
          : baseUrl + `/${typeSearch}/${countryFilter}`;

        const { data } = await axios.get(url);

        context.commit("change_countries", data);
      } catch (error) {
        console.error(error);
      }
    },

    async get_allCountries(context) {
      const baseUrl = process.env.VUE_APP_BASE_URL;
      const { data } = await axios.get(baseUrl + "/all");
      context.commit("change_allCountries", data);
    },
  },
  modules: {},
});
