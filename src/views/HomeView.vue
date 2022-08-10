<template>
  <div class="home">
    <button type="button" class="previous">Previous</button>
    <button type="button" class="next">Next</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scope>
  div{
    background: #EEEEEE;
    height: 100%;
  }
  
  button{
    border: none;
    border-radius: 5px;
  }

  button:hover{
    background: #d3d3d3;
    border-radius: 5px;
  }

  .next{
    float: right;
    margin-right: 20px;
    background: #FAFAFA;
    color: #999999;
  }

  .previous{
    margin-left: 20px;
    background: #FAFAFA;
    color: #999999;
  }
</style>
