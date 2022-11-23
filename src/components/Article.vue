<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="article">
          <div class="image-wrap">
            <img
              :src="url + 'get-image/' + article.image"
              :alt="article.title"
              v-if="article.image"
            />

            <img
              src="../assets/images/default.jpg"
              :alt="article.title"
              v-if="!article.image"
            />
          </div>

          <h1 class="subheader">{{ article.title }}</h1>
          <span class="date">{{ article.date | moment("from", "now") }}</span>
          <p>
            {{ article.content }}
          </p>

          <div class="clearfix"></div>
          <router-link :to="'/edit/' + article._id" class="btn btn-warning"
            >Editar</router-link
          >
          <a @click="deleteArticle(article._id)" class="btn btn-danger"
            >Eliminar</a
          >
        </article>
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
import swal from "sweetalert";

export default {
  name: "Article",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: null,
    };
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then((res) => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
    deleteArticle(articleId) {
      swal({
        title: "¿Estás seguro?",
        text: "Una vez eliminado, los cambios no se podrán revertir!",
        icon: "warning",
        buttons: ["No", "Si"],
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            axios.delete(this.url + "article/" + articleId).then((response) => {
              if (response.data.status == "success") {
                swal(
                  "Artículo eliminado",
                  "Artículo  eliminado correctamente",
                  "success"
                );
                this.$router.push("/blog");
              } else {
                swal(
                  "Error",
                  "Error durante la eliminación del artículo",
                  "error"
                );
              }
            });
          } else {
            swal("Artículo no eliminado");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
