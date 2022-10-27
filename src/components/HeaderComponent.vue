<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo">
        <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
        <span id="brand"> <strong>Curso</strong>Vue </span>
      </div>

      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home">Inicio</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/form">Formulario</router-link>
          </li>
          <li>
            <router-link to="/page">Página</router-link>
          </li>
          <li>
            <router-link to="/my-component">Mi Componente</router-link>
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
