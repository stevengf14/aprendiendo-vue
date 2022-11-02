<template>
  <section id="content">
    <h2 class="subheader">{{ title }}</h2>
    <hr />
    <h1>Este es MI COMPONENTE</h1>
    <h2>{{ subtitulo }}</h2>
    <hr />

    <h2>Reactividad</h2>
    <input type="text" v-model="name" />
    Mi nombre es <strong>{{ name }}</strong>

    <h2>Directivas Condicionales</h2>
    <input type="number" v-model="age" />
    Mi edad es <strong>{{ age }}</strong>

    <p class="alert-danger-provitional" v-if="age && age >= 18 && age < 65">
      ERES MAYOR DE EDAD
    </p>

    <p class="alert-advanced-provitional" v-else-if="age && age >= 65">
      ERES DE AVANZADA EDAD
    </p>

    <p class="alert-success-provitional" v-else>ERES MENOR DE EDAD</p>

    <h2>Directiva Iterativa</h2>
    <ol>
      <li v-for="movie in movies" :key="movie">{{ movie }}</li>
    </ol>
  </section>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      title: "My Component",
      subtitulo: "Soy el subtítulo de mi componente",
      name: "",
      age: 18,
      movies: ["Batman vs Superman", "Spiderman", "Jumanji", "Doctor Strange"],
    };
  },
};
</script>
