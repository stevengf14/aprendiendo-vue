<template>
  <article class="article-item">
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
    <input
      type="button"
      value="Marcar como favorito"
      @click="sendFavoriteToParent(movie)"
    />
    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "Movie",
  props: ["movie"],
  methods: {
    sendFavoriteToParent(movie) {
      this.$emit("favorite", movie);
    },
  },
};
</script>
