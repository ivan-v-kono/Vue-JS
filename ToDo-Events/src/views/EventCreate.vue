<template>
  <h1>Create an event</h1>
  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <label for="category">Select a category: </label>
      <select id="category" v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >{{ option }}</option>
      </select>

      <h3>Name & describe your event</h3>

      <label for="title">Title</label>
      <input
        id="title"
        v-model="event.title"
        type="text"
        placeholder="Title"
      >

      <label for="description">Description</label>
      <input
        id="description"
        v-model="event.description"
        type="text"
        placeholder="Description"
      />

      <h3>Where is your event?</h3>

      <label for="location">Location</label>
      <input
        id="location"
        v-model="event.location"
        type="text"
        placeholder="Location"
      />

      <h3>When is your event?</h3>
      <label for="date">Date</label>
      <input
        id="date"
        v-model="event.date"
        type="text"
        placeholder="Date"
      />

      <label for="time">Time</label>
      <input
        id="time"
        v-model="event.time"
        type="text"
        placeholder="Time"
      />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'EventCreate',
  data () {
    return {
      categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
      event: {
        id: '',
        category: '',
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        organizer: ''
      }
    }
  },
  methods: {
    onSubmit () {
      const event = {
        ...this.event,
        id: uuidv4(),
        organizer: this.$store.state.user
      }
      this.$store.dispatch('createEvent', event)
    }
  }
}
</script>

<style scoped>

</style>
