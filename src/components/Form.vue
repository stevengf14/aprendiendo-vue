<template>
  <div class="general">
    <Slider text="Formulario"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>

        <form class="mid-form" @submit.prevent="showUser()">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" name="name" v-model="user.name" />
            <div v-if="submitted && !$v.user.name.required">
              Este campo es requerido
            </div>
            <div v-if="submitted && !$v.user.name.minLength">
              Este campo debe tener más caracteres
            </div>
          </div>

          <div class="form-group">
            <label for="lastName">Apellidos</label>
            <input type="text" name="lastName" v-model="user.lastName" />
            <div v-if="submitted && !$v.user.lastName.required">
              Este campo es requerido
            </div>
            <div v-if="submitted && !$v.user.lastName.minLength">
              Este campo debe tener más caracteres
            </div>
          </div>

          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" v-model="user.bio"></textarea>
            <div v-if="submitted && !$v.user.bio.required">
              Este campo es requerido
            </div>
            <div v-if="submitted && !$v.user.bio.minLength">
              Este campo debe tener más caracteres
            </div>
          </div>

          <div class="form-group radibuttons">
            <input
              type="radio"
              name="gender"
              value="hombre"
              checked
              v-model="user.gender"
            />
            Hombre
            <input
              type="radio"
              name="gender"
              value="mujer"
              v-model="user.gender"
            />
            Mujer
            <input
              type="radio"
              name="gender"
              value="otro"
              v-model="user.gender"
            />
            Otro
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>

        <div class="data" v-if="user.name && user.lastName">
          <h3>{{ user.name + " " + user.lastName }}</h3>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Form",
  components: {
    Sidebar,
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(2),
      },
      lastName: {
        required,
        minLength: minLength(2),
      },
      bio: {
        required,
        minLength: minLength(10),
      },
    },
  },
  data() {
    return {
      submitted: false,
      user: {
        name: "",
        lastName: "",
        bio: "",
        gender: "",
      },
    };
  },
  methods: {
    showUser() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      alert("validación pasada");
    },
  },
};
</script>
