<template>
  <h1>Wouldn't be bad to do...</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        id="page-prev"
        v-if="page !== 1"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
      >
        <button type="button" class="btn-pagination">
          &#60; Previous
        </button>
      </router-link>

      <router-link
        id="page-next"
        v-if="hasNextPage"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
      >
        <button type="button" class="btn-pagination">
          Next &#62;
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { watchEffect } from 'vue'
export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard
  },
  created() {
    watchEffect(() => {
      this.$store.dispatch('fetchEvents', this.page).catch(error => {
        this.$router.push({
          name: 'ErrorDisplay',
          params: { error: error }
        })
      })
    })
  },
  computed: {
    events() {
      return this.$store.state.events
    },
    hasNextPage() {
      const totalPages = Math.ceil(
        this.$store.state.totalEvents / this.$store.state.perPage
      )
      return this.page < totalPages
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  width: 290px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.pagination a {
  text-decoration: none;
  color: white;
}
.btn-pagination {
  height: 2em;
  width: 7.5em;
  /*flex: 1;*/
  font-size: 1em;
  font-weight: bolder;
  padding: 0 0.75em;
}
#page-prev {
  grid-column-start: 1;
  grid-column-end: 2;
  margin-left: 2px;
}
#page-next {
  grid-column-start: 3;
  grid-column-end: 4;
  margin-right: 2px;
}
</style>
