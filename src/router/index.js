import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:title/:page",
    name: "Books",
    component: () =>
      import(/* webpackChunkName: "Books" */ "../views/Books.vue"),
  },
  {
    path: "/detail/:isbn",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "BooksDetail" */ "../views/Detail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
