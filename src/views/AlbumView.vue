<template>
    <div>
        <h1>Welcome to AlbumView</h1>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$route.params.userId);
            axios.get('http://localhost:8000/api/user/' . this.$route.params.userId)
                .then(response => {
                    this.items = response.data.data;
                });
        }
    }
</script>

<style scoped>
div{
    background: #EEEEEE;
    height: 100%;
}

h1{
    text-align: center;
}
</style>