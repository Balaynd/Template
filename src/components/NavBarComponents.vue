<template>
<div>
    <input type="checkbox" id="check">
    <label for="check" class="menu">
      <i class="fas fa-bars" id="open"></i>
    </label>
    <button type="button" class="btn-1">Pages</button>
    <input type="checkbox" id="check1">
    <label for="check1" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
    <button type="button" class="btn-2">A</button>
    <p class="sample">Hi, Admin</p>
  <ul>
    <li><a href="#"><i class="fas fa-search"></i></a></li>
    <li><a href="#"><i class="fas fa-comment"></i></a></li>
    <li><a href="#"><i class="fas fa-flag"></i></a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'NavBarComponents',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

div{
  background: #ffffff;
  height: 60px;
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
}

.menu{
  color: white;
  font-size: 20px;
  float: left;
  margin-left: 20px;
}

.btn-1{
  margin: 15px;
  border-radius: 5px;
  border-style: none;
  line-height: 30px;
  float: left;
  background: #E5E5E5;
}

.btn-1:hover{
  background: #aaaaaa;
}

p{
  float: right;
  margin-top: 20px;
}

.btn-2{
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border-style: none;
  line-height: 30px;
  float: right;
  background: #1AAA8A;
  margin-right: 20px;
  width: 45px;
}

div ul{
  float: right;
  margin-right: 10x;
}

div ul li{
  display: inline-block;
  line-height: 45px;
  margin-right: 50px;
  margin-top: 7px;
}

div ul li a{
  color: #0392D8;
  font-size: 25px;
  padding: 5px 11px;
  border-radius: 5px;
}

a:hover{
  background: black;
  transition: .5s;
}


label #open{
  cursor: pointer;
  border-radius: 6px;
  font-size: 35px;
  color: black;
  padding: 5px 10px;
  margin-top: 7px;
  transition: all .5s;
}

#check1{
  display: none;
}

#check:checked ~ label #open{
  left: 300px;
  opacity: 0;
  pointer-events: none;
}

.checkbtn{
  font-size: 30px;
  color: black;
  cursor: pointer;
  float: right;
  margin: 10px 10px;
  display: none;
}

@media (max-width: 925px) {
  .menu{
    font-size: 30px;
    padding-left: 50px;
  }

  nav ul li a{
    font-size: 16px;
  }
}

@media (max-width: 858px){
  .checkbtn{
    display: block;
  }
  ul{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgb(161, 161, 161);
    top: 80px;
    right: -100%;
    text-align: center;
    transition: all .5s;
  }
  div ul li{
    display: block;
  }
  div ul li a{
    font-size: 20px;
  }
  a:hover{
  background: none;
  color: black;
  }
  #check1:checked ~ ul{
    right: 0;
  }
}

</style>
