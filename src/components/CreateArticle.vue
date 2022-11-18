<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear Artículo</h1>
        <!-- Form-->
        <form class="mid-form" v-on:submit.prevent="createArticle()">
          <div class="form-group">
            <label for="title">Título</label>
            <input type="text" name="title" v-model="article.title" />
          </div>
          <div class="form-group">
            <label for="content">Contenido</label>
            <textarea name="content" v-model="article.content"></textarea>
          </div>
          <div class="form-group">
            <label for="image">Imagen</label>
            <input type="file" name="image" />
          </div>
          <div class="clearfix"></div>
          <input type="submit" value="Guarda" class="btn btn-success" />
        </form>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "./Sidebar.vue";
import Global from "../Global";
import Article from "../models/Article";
// import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "CreateArticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
    };
  },
  methods: {
    createArticle() {
      axios
        .post(this.url + "save", this.article)
        .then((response) => {
          if (response.data.status == "success") {
            this.$router.push("/blog");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
