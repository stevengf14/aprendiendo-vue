<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Peliculas</h2>
        <!--Listado de peliculas-->
        <div id="movies">
          <div v-for="movie in movies" v-bind:key="movie.title">
            <Movie :movie="movie" />
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Movie from "./Movie";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Movies",
  components: {
    Movie,
    Sidebar,
  },
  data() {
    return {
      movies: [
        {
          title: "La Estafa de los Logan",
          year: 2019,
          image:
            "http://cinamigos.com/wp-content/uploads/2017/08/logan-lucky.jpg",
        },
        {
          title: "Gran Torino",
          year: 2015,
          image: "https://assets.puzzlefactory.pl/puzzle/265/858/original.jpg",
        },
        {
          title: "Diamante de Sangre",
          year: 2006,
          image:
            "https://frasesdelapelicula.com/wp-content/uploads/2014/02/diamante-de-sangre.jpeg",
        },
      ],
    };
  },
};
</script>
