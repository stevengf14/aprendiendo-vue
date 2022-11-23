<template src="./CreateArticle.html"></template>

<script>
import axios from "axios";
import Sidebar from "./Sidebar.vue";
import Global from "../Global";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "EditArticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
      submitted: false,
      file: "",
      isEdit: true,
      articleId: "",
    };
  },
  validations: {
    article: {
      title: {
        required,
      },
      content: {
        required,
      },
    },
  },
  mounted() {
    this.articleId = this.$route.params.id;
    this.getArticle(this.articleId);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
    },
    save() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        console.log(this.articleId);
        axios
          .put(this.url + "article/" + this.articleId, this.article)
          .then((response) => {
            if (response.data.status == "success") {
              // Upload file
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);
                axios
                  .post(
                    this.url + "upload-image/" + response.data.article._id,
                    formData
                  )
                  .then((response) => {
                    if (response.data.article) {
                      swal(
                        "Artículo editado",
                        "Artículo editado correctamente",
                        "success"
                      );
                      this.article = response.data.article;
                      this.$router.push("/article/" + this.articleId);
                    } else {
                      swal(
                        "Error",
                        "Error durante la edición del artículo",
                        "error"
                      );
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else {
                swal(
                  "Artículo editado",
                  "Artículo editado correctamente",
                  "success"
                );
                this.article = response.data.article;
                this.$router.push("/article/" + this.articleId);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then((res) => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
  },
};
</script>
