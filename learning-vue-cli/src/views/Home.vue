<template>
  <div>
    <h1>Current Tickets</h1>
    <div v-for="ticket in tickets" :key="ticket.id">
      <hr>
      <div class="ticket">
        <p>{{ticket.problem}}</p>
        <p> <i>-- {{ticket.name}}</i></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ticket-home',
  data() {
    return {}
  },
  computed: {
    tickets() {
      return this.$root.$data.getTickets();
    }
  }
}
</script>
