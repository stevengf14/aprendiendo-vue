<template src="./CreateArticle.html"></template>

<script>
import axios from "axios";
import Sidebar from "./Sidebar.vue";
import Global from "../Global";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";

export default {
  name: "CreateArticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
      submitted: false,
      file: "",
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
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
    },
    createArticle() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.url + "save", this.article)
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
                      this.article = response.data.article;
                      this.$router.push("/blog");
                    } else {
                      // Show error alert
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else {
                this.article = response.data.article;
                this.$router.push("/blog");
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
