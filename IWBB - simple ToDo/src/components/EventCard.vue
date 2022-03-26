<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: event.id } }"
  >
    <div class="event-card">
      <div class="category" style="">
        <i>{{ event.category }}</i>
      </div>
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 1em;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  display: block;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
.category {
  margin-bottom: 0.5em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.category > i {
  display: inline-block;
  font-weight: bolder;
  color: rgb(10, 10, 231);
}
</style>
