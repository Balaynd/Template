<template>
    <div>
        <h1>Welcome to AlbumView</h1>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$route.params.userId);
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