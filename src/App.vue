<script  lang="ts">
import { RouterLink, RouterView } from 'vue-router';

export default {
  data() {
    return {
      nome: '',
      idade: 0,
      param: 'EmbComponent',
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
      <!-- O router pode ser configurado com parametros e na configuração do router pode ter varios componentes para serem modificados junto com as variaveis. -->
      <nav>
        <RouterLink to="/Pagina">pagina</RouterLink>
        <RouterLink to="/Pagina2" name="EmbComponent">pagina2 </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <router-view class="view embComponent" :name="param"></router-view>
  {{ nome }} {{ idade }}

  <button @click="param = 'EmbComponent2'">Botao</button>
</template>

<style scoped></style>
