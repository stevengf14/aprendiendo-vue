<template>
  <section id="content">
    <h2 class="subheader">{{title}}</h2>
    <hr />
    <h1>Este es MI COMPONENTE</h1>
    <h2>{{ subtitulo }}</h2>
    <hr />
  </section>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      title: "My Component",
      subtitulo: "Soy el subtítulo de mi componente",
    };
  },
};
</script>
