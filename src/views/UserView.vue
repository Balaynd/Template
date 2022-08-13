<template>
    <div class="container">
        <h1>Welcome to UserView</h1>
        <b-table
            striped
            hover
            :fields="fields"
            :items="items"
        >
            <template #cell(actions)="data">
                <b-button>View albums of {{ data.item.id }}</b-button>
            </template>

 </b-table>
    </div>
</template>



<script>
    const axios = require('axios').default;

    export default {
        name: 'UserView',
        data() {
            return {
                fields: [
                    // A virtual column that doesn't exist in items
                    'id',
                    // A column that needs custom formatting
                    { key: 'name', label: 'Full Name' },
                    // A regular column
                    'username',
                    // A regular column
                    'email',

                    { key: 'actions', label: 'Actions' }
                ],
                items: [
                    { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                    { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                    { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                    { age: 38, first_name: 'Jami', last_name: 'Carney' }
                ]
            }
        },
        mounted () {
            axios.get('http://localhost:8000/api/user')
                .then(response => {
                    this.items = response.data.data;
                });
        },
    }
</script>

<style scoped>
div{
    background: #EEEEEE;
    height: 100%;
}

h1{
    text-align: center;
}
</style>