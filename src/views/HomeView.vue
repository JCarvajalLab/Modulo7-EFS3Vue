<template>
  <div class="home-view">
    <BannerItem />
    <div class="botones-categoria">
      <button @click="irACategoria('rap')">Rap</button>
      <button @click="irACategoria('pop')">Pop</button>
      <button @click="irACategoria('rock')">Rock</button>
    </div>
  </div>
</template>

<script>
import BannerItem from '@/components/BannerItem.vue'

export default {
  name: 'HomeView',
  components: { 
    BannerItem 
  },
  methods: {
    irACategoria(categoria) {
      this.$router.push({ name: 'vinilos', params: { categoria } })
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