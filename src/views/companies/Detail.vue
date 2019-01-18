<template>
  <div>
    <h2>{{ $route.params.name }}</h2>
    <pre v-if="company && loaded">{{ company }}</pre>
    <pre v-else-if="loaded">No match found</pre>
    <div v-else>...</div>
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////////////////////////-->

<script>
export default {
  name: 'detail',
  data() {
    return {
      company: null,
      loaded: false
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const { data } = await this.axios.get(`http://localhost:4201/companies/${this.$route.params.name}`)
      this.company = data
      this.loaded = true
    }
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss">

</style>
