<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Peliculas</h2>

        <div class="my-data" v-if="myData">
          <p v-html="myData"></p>
          <br />
          {{ myTeam | upperCase | concatYear("EL MEJOR AÑO") }}
        </div>
        <div class="favorite" v-if="favorite">
          La película seleccionada es:
          <h3>{{ favorite.title }}</h3>
        </div>
        <!--Listado de peliculas-->
        <div id="movies">
          <div v-for="movie in moviesUpperCase" v-bind:key="movie.title">
            <Movie :movie="movie" @favorite="favoriteMovieComming" />
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
  methods: {
    favoriteMovieComming(favoriteMovie) {
      this.favorite = favoriteMovie;
    },
  },
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    },
    concatYear(value, message) {
      var date = new Date();
      return value + " " + date.getFullYear() + " " + message;
    },
  },
  computed: {
    moviesUpperCase() {
      var moviesModified = this.movies;
      for (var i = 0; i < moviesModified.length; i++) {
        moviesModified[i].title = moviesModified[i].title.toUpperCase();
      }

      return moviesModified;
    },
    myData() {
      return (
        this.myName + " " + this.myLastName + " </br> Team: " + this.myTeam
      );
    },
  },
  data() {
    return {
      myName: "Steven",
      myLastName: "Guaman",
      myTeam: "Real Madrid",
      favorite: null,
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
