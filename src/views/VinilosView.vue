<template>
<div>
    <h1>Vinilos de {{ $route.params.categoria }}</h1>
    <div class="vinilos-container">
        <div v-for="vinilo in getVinilos()" :key="vinilo.id" class="vinilo-card">
            <h2>{{ vinilo.artist }}</h2>
            <img :src="vinilo.image" alt="Imagen del vinilo">
            <p>{{ vinilo.album }}</p>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'

export default {
    name: 'VinilosView',
    computed: {
        ...mapGetters(['getVinilosRap', 'getVinilosPop', 'getVinilosRock'])
    },
    methods: {
        getVinilos() {
            const categoria = this.$route.params.categoria
            if (categoria === 'rap') return this.getVinilosRap
            if (categoria === 'pop') return this.getVinilosPop
            if (categoria === 'rock') return this.getVinilosRock
        }
    }
}
</script>

<style scoped>
.vinilos-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.vinilo-card {
    width: 25%;
    margin: 10px;
    padding: 20px;
    width: 400px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.vinilo-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
}
</style>
