import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    typeFilter: "",
    typeSearch: "",
    countries: [],
    pagination: {
      initLocal: 0,
      initPagination: 0,
    },
  },
  mutations: {
    change_typeFilter(state, payload) {
      state.typeFilter = payload;
    },
    change_typeSearch(state, payload) {
      state.typeSearch = payload;
    },
    change_countries(state, payload) {
      state.countries = payload;
    },
    change_pagination(state, payload) {
      state.pagination = payload;
    },
  },
  actions: {
    async get_countries(context, entrypoint) {
      try {
        const { typeFilter, typeSearch } = context.state;
        const baseUrl = process.env.VUE_APP_BASE_URL;

        const url = entrypoint
          ? baseUrl + `/${entrypoint}`
          : baseUrl + `/${typeFilter}/${typeSearch}`;

        const { data } = await axios.get(url);

        context.commit("change_countries", data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
