<template>
  <section id="content">
    <h2 class="subheader">Peliculas</h2>
    <!--Listado de peliculas-->
    <div id="movies">
      <article
        class="article-item"
        v-for="movie in movies"
        v-bind:key="movie.title"
      >
        <div class="image-wrap">
          <img :src="movie.image" :alt="movie.title" :title="movie.title" />
        </div>

        <h2>{{ movie.title }}</h2>
        <span
          class="date"
          :class="{
            yeargreen: movie.year >= 2015,
            yearred: movie.year < 2015,
          }"
        >
          {{ movie.year }}
        </span>
        <a href="#">Leer más</a>

        <div class="clearfix"></div>
      </article>

      <!--AÑADIR ARTICULOS VIA JS-->
    </div>
  </section>
</template>

<script>
export default {
  name: "Movies",
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
