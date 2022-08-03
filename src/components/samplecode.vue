<template>
    <div class="navBar">
        <div class="nav-bar-top">
            <div class="leftpanel">
                <p>Advance Exterior</p>
            </div>
            <div class="rightpanel">
                <a href="#">Search</a>
                <a href="#">Comment</a>
                <a href="#">Reports</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'samplecode',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navBar{
    width: 100%;
    height: 100%;
}

.nav-bar-top{
    background-color: black;
    color: white;
    display: flex;
}

.nav-bar-top .leftpanel{
    background-color: black;
    width: 20%;
}

.nav-bar-top .leftpanel p{
    text-align: center;
    margin: 10px;
}

.nav-bar-top .rightpanel{
    background-color: rgb(63, 63, 63);
    width: 80%;
    text-align: right;
    padding-top: 10px;
}

.nav-bar-top .rightpanel a{
    color: white;
    padding: 10px;
    text-decoration: none;
}

</style>
