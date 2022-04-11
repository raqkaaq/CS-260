<template>
    <div>
        <h1>Create a ticket</h1>
        <form v-if="creating" @submit.prevent="addTicket">
            <input v-model="name" placeholder="Name">
            <p></p>
            <textarea v-model="problem"></textarea>
            <br />
            <button type="submit">Submit</button>
        </form>
        <div v-else>
            <p>Thanks for giving us another ticket, yay more work.</p>
            <p><a @click="toggleForm" href="#">Submit another ticket</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'create-vue',
    data() {
        return{
            creating: true,
            name: '',
            problem: '',
        }
    },
    methods: {
        toggleForm(){
            this.creating = !this.creating;
        },
        addTicket(){
            this.$root.$data.addTicket(this.name, this.problem);
            this.name = '';
            this.problem = '';
            this.creating = false;
        },
    }
}
</script>
<style scoped>
input {
    font-size: 1.2em;
    height: 30px;
    width: 200px;
}
textarea{
    font-size: 1.6em;
    width: 100%;
    max-width: 500px;
    height: 100px;
}
button{
    margin-top: 20px;
    font-size: 1.2em;
}
</style>