<template>
  <b-container>
    <b-row class="mb-5 mt-5">
      <b-col>
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
      </b-col>
      <b-col> </b-col>
      <b-col> </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FilterSearchs",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Escolha uma opção" },
        { value: "region", text: "Região" },
        { value: "capital", text: "Capital" },
        { value: "lang", text: "Lingua" },
        { value: "all", text: "País" },
        { value: "alpha", text: "Código de ligação" },
      ],
    };
  },
  watch: {
    selected: function () {
      this.$store.commit("change_typeSearch", this.selected);
    },
  },
  computed: {
    ...mapState(["countries"]),
  },
  methods: {
    getTypesSearch() {
      this.countries.filter();
    },
  },
};
</script>

<style scoped>
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
