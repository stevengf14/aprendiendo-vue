<template>
  <div class="general">
    <Slider text="Blog"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
        <div id="articles" v-if="articles">
          <article
            class="article-item"
            v-for="article in articles"
            :key="article.id"
          >
            <div class="image-wrap">
              <img
                :src="'http://localhost:3900/api/get-image/' + article.image"
                :alt="article.title"
                v-if="article.image"
              />
              <img
                src="../assets/images/default.jpg"
                :alt="article.title"
                v-if="!article.image"
              />

            </div>

            <h2>{{article.title}}</h2>
            <span class="date">{{article.date}}</span>
            <a href="#">Leer más</a>

            <div class="clearfix"></div>
          </article>

          <!--AÑADIR ARTICULOS VIA JS-->
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

export default {
  name: "Blog",
  components: {
    Slider,
    Sidebar,
  },
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    getArticles() {
      axios.get("http://localhost:3900/api/articles").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
        console.log(this.articles);
      });
    },
  },
};
</script>
