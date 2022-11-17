<template>
  <h1>Rederigiendo...</h1>
</template>
<script>
export default {
  name: "Redirect",
  mounted() {
    var searchString = this.$route.params.searchString;
    this.$router.push("/search/" + searchString);
  },
};
</script>
