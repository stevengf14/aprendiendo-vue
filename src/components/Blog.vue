<template>
  <div class="general">
    <Slider text="Blog"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
        <div id="articles" v-if="articles">
          <Articles :articles="articles"></Articles>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Global from "../Global";
import Articles from "./Articles.vue";

export default {
  name: "Blog",
  components: {
    Slider,
    Sidebar,
    Articles,
  },
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      articles: null,
      url: Global.url,
    };
  },
  methods: {
    getArticles() {
      axios.get(this.url + "articles").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
      });
    },
  },
};
</script>
