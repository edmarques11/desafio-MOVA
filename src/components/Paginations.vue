<template>
  <div class="pagination">
    <div class="back" @click="prevPage()">
      <img src="../assets/Vector-back.svg" alt="back" />
    </div>
    <div v-for="(page, index) in pages" :key="index">
      <div @click="changeCurrentPage(page)" :id="`page${page}`" class="page">
        {{ page }}
      </div>
    </div>
    <div class="go" @click="nextPage()">
      <img src="../assets/Vector-go.svg" alt="go" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Paginations",
  data() {
    return {
      currentPage: 1,
      pages: [1, 2, 3, 4, 5],
    };
  },
  mounted() {
    const pageSelected = document.getElementById(`page${this.currentPage}`);
    pageSelected.className = "pageSelected";
  },
  computed: {
    ...mapState(["countries", "pagination"]),
  },
  watch: {
    currentPage: function () {
      this.$store.commit("change_pagination", {
        initLocal: this.currentPage !== 1 ? this.currentPage * 3 : 0,
        initPagination: this.currentPage,
      });
      this.populatePages();
    },
  },
  methods: {
    nextPage() {
      const limitPages = Math.floor(this.countries.length / 3) - 1;
      if (limitPages < this.currentPage + 5) {
        return (this.currentPage = limitPages);
      }
      this.currentPage += 5;
    },
    prevPage() {
      if (this.currentPage - 1 < 1) {
        return (this.currentPage = 1);
      }
      this.currentPage -= 1;
    },
    changeCurrentPage(value) {
      this.currentPage = value;
    },
    populatePages() {
      this.pages = [];
      let count = 0;
      for (
        let index = this.currentPage;
        index < this.countries.length / 3;
        index++
      ) {
        count++;

        this.pages.push(index);

        if (count === 5) break;
      }
    },
  },
};
</script>

<style>
.pagination {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 40px;
}

.page {
  width: 34px;
  height: 34px;
  margin: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #8d8d8d;
  background: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  cursor: pointer;
}

.pageSelected {
  width: 34px;
  height: 34px;
  margin: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background: #6d2080;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
}

.back,
.go {
  width: 28px;
  height: 28px;
  margin: 0 14px 0 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #8d8d8d;
  background: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  cursor: pointer;
}

.back > img,
.go > img {
  height: 7px;
}
</style>
