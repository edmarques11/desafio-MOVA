import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/country/:countryName",
    name: "Country",
    component: () =>
      import(/* webpackChunkName: "Country" */ "../views/Country.vue"),
  },
  {
    path: "/region/:regionName",
    name: "Region",
    component: () =>
      import(/* webpackChunkName: "Region" */ "../views/Region.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
