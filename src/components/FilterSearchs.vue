<template>
  <b-container>
    <b-row class="mb-5 mt-5">
      <b-col>
        <div class="mb-3">
          <label for="options" class="d-block">Filtrar por</label>
          <b-form-select name="options" class="options" v-model="selected">
            <b-form-select-option
              class="option"
              v-for="(option, index) in options"
              :key="index"
              :value="option.value"
              >{{ option.text }}</b-form-select-option
            >
          </b-form-select>
        </div>
      </b-col>
      <b-col>
        <div v-show="selected" class="mb-3">
          <label for="options2" class="d-block">Filtrar por</label>
          <b-form-select
            name="options2"
            class="options"
            v-model="selectedSecondary"
          >
            <b-form-select-option class="option" value="null"
              >Escolha uma opção</b-form-select-option
            >
            <b-form-select-option
              class="option"
              v-for="(option, index) in secondaryOptions"
              :key="index"
              :value="option"
              >{{ option }}</b-form-select-option
            >
          </b-form-select>
        </div>
      </b-col>
      <b-col>
        <div v-show="selected" class="mb-3">
          <b-button class="pesquisar" :disabled="!selectedSecondary"
            >Pesquisar</b-button
          >
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "FilterSearchs",
  data() {
    return {
      selected: null,
      selectedSecondary: null,
      types: [
        { region: { endpoint: "region" } },
        { capital: { endpoint: "capital" } },
        { languages: { endpoint: "lang" } },
        { name: { endpoint: "name" } },
        { callingcode: { endpoint: "callingcode" } },
      ],
      options: [
        { value: null, text: "Escolha uma opção" },
        { value: "region", text: "Região" },
        { value: "capital", text: "Capital" },
        { value: "languages", text: "Lingua" },
        { value: "name", text: "País" },
        { value: "callingcode", text: "Código de ligação" },
      ],
      secondaryOptions: [],
    };
  },
  watch: {
    selected: function () {
      this.$store.commit("change_typeSearch", this.selected);
      this.secondaryOptions = [];
      this.secondaryOptions = this.getTypesSearch(this.selected);
    },
  },
  computed: {
    ...mapState(["countries", "typeSearch", "typeFilter"]),
  },
  methods: {
    ...mapActions(["get_countries"]),
    getTypesSearch(option) {
      if (!option) return;
      const options = [];
      this.countries.filter((country) => {
        if (
          options.indexOf(country[option]) < 0 &&
          country[option] !== "" &&
          option !== "languages"
        ) {
          options.push(country[option]);
        }

        if (option === "languages") {
          for (const index in country[option]) {
            if (
              country[option][index].name &&
              options.indexOf(country[option][index].name) < 0
            )
              options.push(country[option][index].name);
          }
        }

        if (option === "callingcode" && country["callingCodes"]) {
          for (const index in country["callingCodes"])
            if (country["callingCodes"][index])
              options.push(country["callingCodes"][index]);
        }
      });

      if (option === "callingcode") options.shift();
      return options;
    },
  },
};
</script>

<style scoped>
.pesquisar {
  width: 156px;
  height: 36px;
  background-color: #6d2080;
  color: #fff;
  border-radius: 10px;
  position: relative;
  right: 80px !important;
}

.options {
  width: 316px;
  color: #8d8d8d;
  background: #fff;
  border-top: none;
  border-right: none;
  border-bottom: 2px solid #8d8d8d;
  border-left: none;
  font-weight: bold;
}

.option {
  font-weight: bold;
}

select:focus {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 0 none;
  outline: 0;
}

button:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

label {
  color: #6d2080;
  font-size: 0.8rem;
  position: relative;
  right: 130px !important;
}
</style>
