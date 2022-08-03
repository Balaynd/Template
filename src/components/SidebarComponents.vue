<template>
  <div>
    <h2>{{ age }}</h2>
    <b-button v-b-toggle.sidebar-1 >>></b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponents',

  data() {
    return {
      myClass: '',
      person: {
        firstname: 'Gerald',
        lastname: 'Austria'
      },
      age: 10,
    }
  },
  methods: {
    onKeyChange(e) {
      this.person.firstname = e.target.value;
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
