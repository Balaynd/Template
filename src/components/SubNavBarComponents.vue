<template>
    <div>
        <button type="button" class="contact">Contacts</button>
        <input type="search" placeholder="Search" class="search-box">
        <i class="fas fa-search"></i>
        <button type="button" class="add-contact">Add Contacts</button>
    </div>
</template>

<script>
    export default {
        name: 'SubNavBarComponents'
    }
</script>

<style scoped>
div{
    width: 100%;
    height: 50px;
    background: white;
}

.contact{
    float: left;
    border-style: solid;
    border-width: 2px;
    border-color: #f1f1f1;
    background: #fff;
    padding: 12px;
    margin-top: -2px;
    border-radius: 0;
}

.contact:hover{
    background: #929292;
}

.search-box{
    float: left;
    margin: 8px;
    padding: 5px;
    border-radius: 4px;
    border: none;
    background: #E5E5E5;
    outline:none;
}

i{
    float: left;
    padding: 9px;
    margin-top: 8px;
    margin-left: -15px;
    color: black;
    background: #E5E5E5;
    border-radius: 5px;
}

i:hover{
    background: #929292;
    border-radius: 5px;
}

.add-contact{
    float: right;
    padding: 7px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    margin-right: 20px;
    background: #E5E5E5;
    color: #0392D8;
}

.add-contact:hover{
    background: #929292;
    border-radius: 5px;
}


</style>