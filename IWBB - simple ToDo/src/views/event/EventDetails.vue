<template>
  <!--<div v-if="event">
  <h4>{{ event.category }}</h4>
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails', params: { id } }">
        Details
      </router-link>
      |
      <router-link :to="{ name: 'EventEdit', params: { id } }">
        Edit
      </router-link>
    </div>-->
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
  <!--<div class="btn-group">
      <button class="btn-remove" type="button" @click="del()">
        <span>Del</span>
      </button>
      <button class="btn-remove" type="button">
        <span>Edit</span>
      </button>
    </div>
  </div>-->
</template>

<script>
export default {
  name: 'EventDetails',
  props: ['event']
  /*created() {
    this.$store.dispatch('fetchEvent', this.id).catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
  },
  computed: {
    event() {
      return this.$store.state.event
    }
  },
  methods: {
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

<style scoped>
/*.btn-remove {
  margin: 0 1.25em 0;
  padding: 0;
  height: 1.5em;
  width: 5em;
  color: white;
  display: inline-block;
  font-weight: bolder;
  background: linear-gradient(to right, #0a0ae7, #7f7fe5);
}
.btn-remove > span {
  padding: 0.75em;
}
.btn-group {
  margin-top: 10em;
}*/
</style>
