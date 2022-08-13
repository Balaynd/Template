<template>
<div class="display">
  <input type="checkbox" id="check">
    <label for="check">
      <i class="fas fa-times" id="close"></i>
    </label>
  <div class="sidebar">
    <header>Advance Exterior</header>
    <ul>
      <li v-for="sidebar in sidebars" :key="sidebar.id"> {{ sidebar.note }}
        <a @click="onClick(sidebar.path)" class="sidebar-menu"><i class="menu-icon" :class="sidebar.icon"></i>{{ sidebar.text }}</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'SidebarComponents',
 data() {
    return {
      sidebars: [
        {
          id: 1,
          text: 'Dashboard',
          icon: 'fa fa-th-large',
        },
        {
          id: 2,
          note: 'CUSTOM'
        },
        {
          id: 3,
          text: 'User',
          icon: 'fas fa-user-friends',
          path: 'UserPage',
        },
        {
          id: 4,
          text: 'Album',
          icon: 'far fa-images',
          path: 'AlbumPage',
        },
        {
          id: 5,
          text: 'Photos',
          icon: 'far fa-image',
          path: 'PhotoPage',
        },
        {
          id: 6,
          note: 'FEATURE'
        },
        {
          id: 7,
          text: 'Subcontructor',
          icon: 'fa fa-th-large'
        },
        {
          id: 8,
          text: 'Supplier',
          icon: 'fas fa-archive'
        },
        {
          id: 9,
          text: 'Calendar',
          icon: 'fa fa-calendar'
        },
        {
          id: 10,
          text: 'File Upload',
          icon: 'fa fa-arrow-circle-o-up'
        },
        {
          id: 11,
          text: 'Widgets',
          icon: 'fa fa-th-large'
        },
        {
          id: 12,
          text: 'Calendar',
          icon: 'fa fa-calendar'
        },
        {
          id: 13,
          text: 'Charts',
          icon: 'fa fa-bar-chart'
        },
        {
          id: 14,
          text: 'Maps',
          icon: 'far fa-map'
        },
      ]
    }
  },
  methods:{
    onClick(path){
      this.$router.push({ name: path })
    }
  },
}

</script>

<style>
#check{
  display: none;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
  margin: 0%;
  padding: 0%;
  list-style: none;
}

.display{
  margin-top: -24px;
}

.sidebar{
  position: fixed;
  left: -300px;
  width: 300px;
  height: 100%;
  background: #262626;
  transition: all .5s ease;
}

.sidebar header{
  font-size: 25px;
  color: white;
  text-align: center;
  line-height: 60px ;
  background: #101010;
  user-select: none;
}

li{
  text-align: left;
  color: #484940;
  font-size: 20px;
  margin-left: 20px;
}

.sidebar-menu{
  padding: 3px;
}

a{
  padding: 5px;
  height: 100%;
  width: 100%;
  font-size: 25px;
  text-decoration: none;
  line-height: 65px;
  color: white;
  cursor: pointer;
}

i{
  color: white;
}

.menu-icon{
  font-size: 25px;
  margin-right: 15%;
}


label #close{
  position: absolute;
  cursor: pointer;
  background: #101010;
  border-radius: 6px;
  z-index: 1111;
  left: -255px;
  top: 10px;
  font-size: 30px;
  color: white;
  padding: 5px 10px;
  transition: all .5s;
}

#check:checked ~ .sidebar{
  left: 0;
}


#check:checked ~ label #close{
  left: 255px;
}

@media only screen and (max-width:800px) {
  /* For tablets: */
  .sidebar {
    max-width: 100%;
  }
}
@media only screen and (max-width:500px) {
  /* For mobile phones: */
  .sidebar {
    max-width: 100%;
  }
}

</style>
