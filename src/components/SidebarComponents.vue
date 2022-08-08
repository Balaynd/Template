<template>
<div class="display">
  <input type="checkbox" id="check">
    <label for="check">
      <i class="fas fa-times" id="close"></i>
    </label>
  <div class="sidebar">
    <header>Advance Exterior</header>
    <ul>
      <li v-for="sidebar in sidebars"> {{ sidebar.note }}
        <a class="sidebar-menu" ><i class="menu-icon" :class="sidebar.icon"></i>{{ sidebar.text }}</a>
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
          text: 'Dashboard',
          icon: 'fa fa-th-large'
        },
        { note: 'CUSTOM' },
        { 
          text: 'User',
          icon: 'fas fa-user-friends'
        },
        { 
          text: 'Album',
          icon: 'far fa-images'
        },
        { 
          text: 'Photos',
          icon: 'far fa-image'
        },
        { 
          note: 'FEATURE' 
        
        },
        { 
          text: 'Subcontructor',
          icon: 'fa fa-th-large'
        },
        { 
          text: 'Supplier',
          icon: 'fas fa-archive'
        },
        { 
          text: 'Calendar',
          icon: 'fa fa-calendar'
        },
        { 
          text: 'File Upload',
          icon: 'fa fa-arrow-circle-o-up'
        },
        { 
          text: 'Widgets',
          icon: 'fa fa-th-large'
        },
        { 
          text: 'Calendar',
          icon: 'fa fa-calendar'
        },
        { 
          text: 'Charts',
          icon: 'fa fa-bar-chart'
        },
        { 
          text: 'Maps',
          icon: 'far fa-map'
        },
        
      ]
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

</style>
