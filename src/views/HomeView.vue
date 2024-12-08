<template>
<div class="home-view">
    <BannerItem />
    <p>Total de álbumes: {{ getTotalAlbumes }}</p>
    <div class="botones-categoria">
        <button @click="irACategoria('rap')">Rap ({{ getVinilosRap.length }})</button>
      <button @click="irACategoria('pop')">Pop ({{ getVinilosPop.length }})</button>
      <button @click="irACategoria('rock')">Rock ({{ getVinilosRock.length }})</button>
    </div>
    <br>
    <hr>
    <AddVinilosView />
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import BannerItem from '@/components/BannerItem.vue'
import AddVinilosView from '@/views/AddVinilosView.vue'

export default {
    name: 'HomeView',
    components: {
        BannerItem,
        AddVinilosView
    },
    computed: {
    ...mapGetters(['getVinilosRap', 'getVinilosPop', 'getVinilosRock', 'getTotalAlbumes'])
    },
    methods: {
        irACategoria(categoria) {
            this.$router.push({
                name: 'vinilos',
                params: {
                    categoria
                }
            })
        }
    },
}
</script>

<style scoped>
.home-view {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.botones-categoria {
    margin-top: 20px;
}

button {
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background-color: #3e8e41;
}
</style>
