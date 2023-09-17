<script  lang="ts">
import { RouterLink, RouterView } from 'vue-router';

export default {
  data() {
    return {
      nome: '',
      idade: 0,
      param: 'EmbComponents',
    }

  },
  mounted() {
    if (Object.keys(this.$route.params).length) {
      console.log(this.$route.params.name);
      this.nome = this.$route.params.name;
      this.idade = this.$route.params.age;

    }
  }
}
</script>

<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/Pagina">pagina</RouterLink>
        <RouterLink to="/Pagina2" name="EmbComponent">pagina2 </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <router-view class="view embComponent" :name="param"></router-view>
  {{ nome }} {{ idade }}

  <button @click="param = 'pagina2'">Botao</button>
</template>

<style scoped></style>
