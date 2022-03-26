<template>
  <h1>Create an IWBB</h1>

  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <label>
        Category:
        <input v-model="event.category" type="text" placeholder="Category" />
      </label>

      <h3>Name & describe your IWBB</h3>
      <label>
        Title
        <input v-model="event.title" type="text" placeholder="Title" />
      </label>
      <label>
        Description
        <input
          v-model="event.description"
          type="text"
          placeholder="Description"
        />
      </label>

      <h3>Where is your IWBB?</h3>
      <label>
        Location
        <input v-model="event.location" type="text" placeholder="Location" />
      </label>

      <h3>When is your IWBB?</h3>
      <label>
        Date
        <input v-model="event.date" type="text" placeholder="Date" />
      </label>
      <label>
        Time
        <input v-model="event.time" type="text" placeholder="Time" />
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
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
    onSubmit() {
      const event = {
        ...this.event,
        id: uuidv4(),
        organizer: this.$store.state.user
      }
      this.$store
        .dispatch('createEvent', event)
        .then(() => {
          this.$router.push({
            name: 'EventDetails',
            params: { id: event.id }
          })
        })
        .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        })
    }
  }
}
</script>
