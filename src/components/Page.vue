<template>
  <section id="content">
    <h2 class="subheader">Página de Pruebas</h2>
    <h3>{{ id_from_url }}</h3>
    <button @click="updateName()">Update Name</button>
    <button @click="redirectToBlog()">Redirect to Blog</button>
    <h4>{{ name }}</h4>
  </section>
</template>

<script>
export default {
  name: "Page",
  created() {
    console.log("Component created");
  },
  mounted() {
    this.id_from_url = this.$route.params.id;
    console.log("Component mounted");
  },
  updated() {
    console.log("Component updated");
  },
  destroyed() {
    console.log("Component distroyed");
  },
  data() {
    return {
      id_from_url: null,
      name: "Steven",
    };
  },
  methods: {
    updateName() {
      this.name = "ANDRES";
      console.log(this.name);
    },
    redirectToBlog() {
      this.$router.push("/blog");
      // this.$router.push({ name: "page", params: { id: "Redirection" } });
    },
  },
};
</script>
