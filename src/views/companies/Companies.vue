<template>
  <div>
    Hello
    <div v-if="companies">
      <div
        v-for="(company, index) in companies"
        :key="index">
        <router-link
          :to="`companies/${company}`">
          {{ company }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////////////////////////-->

<script>
export default {
  name: 'companies',
  data() {
    return {
      companies: null
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const response = await this.axios.get('http://localhost:4201/companies');
      this.companies = response.data.companies;
    }
  }
};
</script>

<!--/////////////////////////////////////////////////////////////////////////////////////////////-->

<style lang="scss">

</style>
