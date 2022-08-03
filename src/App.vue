<template>
  <div id="app">
    <!-- <nav-bar-components/> -->
    <sidebar-components/>
    <samplecode/>
    <router-view/>
  </div>
</template>

<script>
// import NavBarComponents from './components/NavBarComponents.vue'
import samplecode from './components/samplecode.vue'
import SidebarComponents from './components/SidebarComponents.vue'


export default{
  components: { 
    SidebarComponents,
    samplecode
    // NavBarComponents, 
    },
}


</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
