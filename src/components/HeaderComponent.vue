<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <router-link :to="'/home'">
        <div id="logo">
          <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
          <span id="brand"> <strong>Curso</strong> Vue</span>
        </div>
      </router-link>

      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home" active-class="active">Inicio</router-link>
          </li>
          <li>
            <router-link to="/blog" active-class="active">Blog</router-link>
          </li>
          <li>
            <router-link to="/form" active-class="active"
              >Formulario</router-link
            >
          </li>
          <li>
            <router-link to="/page" active-class="active">Página</router-link>
          </li>
          <li>
            <router-link to="/movies" active-class="active"
              >Películas</router-link
            >
          </li>
        </ul>
      </nav>

      <!--LIMPIAR FLOTADOS-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
