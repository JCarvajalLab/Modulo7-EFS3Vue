<template>
<div class="add-vinilos">
    <hr class="separator">
    <h1>Agregar nuevo Álbum</h1>
    <hr class="separator">
    <form @submit.prevent="agregarAlbum" class="album-form">
        <div class="form-row">
            <div class="form-group">
                <label for="artista">Artista:</label>
                <input type="text" id="artista" v-model="artista" required>
            </div>
            <div class="form-group">
                <label for="album">Álbum:</label>
                <input type="text" id="album" v-model="album" required>
            </div>
            <div class="form-group">
                <label for="imagen">Imagen:</label>
                <input type="text" id="imagen" v-model="imagen" required>
            </div>
            <div class="form-group">
                <label for="genero">Género:</label>
                <select id="genero" v-model="genero" required>
                    <option value="rap">Rap</option>
                    <option value="pop">Pop</option>
                    <option value="rock">Rock</option>
                </select>
            </div>
        </div>
        <button type="submit" class="submit-button">Agregar álbum</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'AddVinilosView',
    data() {
        return {
            artista: '',
            album: '',
            imagen: '',
            genero: ''
        }
    },
    methods: {
        agregarAlbum() {
            const nuevoAlbum = {
                id: Math.random(),
                artist: this.artista,
                category: this.genero,
                album: this.album,
                image: this.imagen
            }
            this.$store.commit('agregarAlbum', nuevoAlbum)
            this.$router.push({
                name: 'vinilos',
                params: {
                    categoria: this.genero
                }
            })
        }
    }
}
</script>

<style scoped>
.add-vinilos {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
}

.separator {
    border: none;
    border-top: 2px solid #ccc;
    margin: 20px 0;
}

h1 {
    margin-bottom: 20px;
}

.album-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap; /* Permite que los elementos se ajusten en varias líneas si es necesario */
}

.form-group {
    margin-bottom: 15px;
    flex: 1; /* Permite que cada grupo ocupe el mismo espacio */
    min-width: 150px; /* Establece un ancho mínimo para cada grupo */
    margin-right: 10px; /* Espacio entre los grupos */
}

.form-group:last-child {
    margin-right: 0; /* Elimina el margen derecho del último grupo */
}

label {
    display: block;
    margin-bottom: 5px;
}

input, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.submit-button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px; /* Espacio superior para el botón */
}

.submit-button:hover {
    background-color: #218838;
}
</style>