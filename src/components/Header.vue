<template>
  <header id="header">
    <div>
      <router-link to="/">
        <img src="../assets/logo_principal.png" alt="home" />
      </router-link>
      <router-link to="/">
        <img src="../assets/return_button.png" alt="back" />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 100px;
  background: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#header > div {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
}
</style>
