<template>
  <div class="networkError">
    <h1>Uh-Oh!</h1>
    <h3>
      It looks like you're experiencing some network issues
    </h3>
    <h3>
      <router-link :to="{ name: 'EventList' }">
        Back to the home page
      </router-link>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'NetworkError'
}
</script>
