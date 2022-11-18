import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import VueMoment from "vue-moment";
import moment from "moment";
import "moment/locale/es";

import LastArticles from "./components/LastArticles";
import MyComponent from "./components/MyComponent";
import HelloWorld from "./components/HelloWorld";
import Blog from "./components/Blog";
import Form from "./components/Form";
import Page from "./components/Page";
import ErrorComponent from "./components/ErrorComponent";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Redirect from "./components/Redirect";
import Article from "./components/Article";
import CreateArticle from "./components/CreateArticle";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueMoment, { moment });

const routes = [
  { path: "/", component: LastArticles },
  { path: "/home", component: LastArticles },
  { path: "/blog", component: Blog },
  { path: "/article/:id", name: "article", component: Article },
  { path: "/create-article", name: "create", component: CreateArticle },
  { path: "/form", component: Form },
  { path: "/page/:id?", name: "page", component: Page },
  { path: "/movies", name: "movies", component: Movies },
  { path: "/last-articles", component: LastArticles },
  { path: "/search/:searchString", component: Search },
  { path: "/redirect/:searchString", component: Redirect },
  { path: "/my-component", component: MyComponent },
  { path: "hello-world", component: HelloWorld },
  { path: "*", component: ErrorComponent },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
