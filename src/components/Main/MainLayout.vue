<template>
    <div>
    <sidebar-components/>
    <!-- <sample-code/> -->
    <nav-bar-components/>
    <sub-nav-bar-components/>
    <!-- <main-content/> -->
    <router-view/>
    </div>
</template>

<script>
// import SampleCode from '../SampleCode.vue'
import SidebarComponents from '../SidebarComponents.vue'
import NavBarComponents from '../NavBarComponents.vue'
import SubNavBarComponents from '../SubNavBarComponents.vue'
// import MainContent from '../MainContent.vue'

export default {
    components: {
        SidebarComponents,
        NavBarComponents,
        SubNavBarComponents,
        // MainContent,
        // SampleCode,
    }
}
</script>

<style>
</style>