<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">
        Details
      </router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">
        Edit
      </router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>

<script>
export default {
  name: 'EventLayout',
  props: ['id'],
  created() {
    this.$store.dispatch('fetchEvent', this.id).catch(error => {
      if (error.response && error.response === 404) {
        this.$router.push({
          name: '404Resource',
          params: { resource: this.event }
        })
      } else {
        this.$router.push({ name: 'NetworkError' })
      }
    })
  },
  computed: {
    event() {
      return this.$store.state.event
    }
  }
  /*methods: {
    del() {
      this.$store
        .dispatch('removeEvent', this.id)
        .then(() => {
          this.$router.push({
            name: 'EventList'
          })
        })
        .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        })
    }
  }*/
}
</script>

<style scoped></style>
