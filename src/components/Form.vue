<template>
  <div class="general">
    <Slider text="Formulario"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Form",
  components: {
    Slider,
    Sidebar,
  },
};
</script>
