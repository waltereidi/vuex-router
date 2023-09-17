<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
export default {
    mounted() {

        setTimeout(() => {
            this.$router.push({
                name: 'app',
                params: {
                    name: 'Heitor Ribeiro',
                    age: 31,
                },
            });
        }, 5000);
    }
}
</script>
<template>
    <h1>Pagina2</h1>
</template>
<style scoped></style>