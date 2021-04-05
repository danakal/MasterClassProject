<template>
  <div>
    <h1>Welcome to the Forum</h1>
    <ThreadList :threads="threads" />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import ThreadList from "@/components/ThreadList.vue";

export default {
  components: {
    ThreadList,
  },
  data() {
    return {
      threads: sourceData.threads,
    };
  },
};
</script>
