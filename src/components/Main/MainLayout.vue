<template>
    <div>
    <sidebar-components/>
    <!-- <sample-code/> -->
    <nav-bar-components/>
    <router-view/>
    </div>
</template>

<script>
// import SampleCode from '../SampleCode.vue'
import SidebarComponents from '../SidebarComponents.vue'
import NavBarComponents from '../NavBarComponents.vue'

    export default {
        components: {
            SidebarComponents,
            NavBarComponents,
            // SampleCode,
        }
    }
</script>

<style scoped>

</style>