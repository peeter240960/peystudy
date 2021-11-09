<template>
  <embed
    name="B8A016742B29D8AF079F7AEBE2CAAC99"
    style="position: absolute; left: 0; top: 0"
    width="100%"
    height="100%"
    src="/api/download"
    type="application/pdf"
    internalid="B8A016742B29D8AF079F7AEBE2CAAC99"
  />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("authen", ["me"]),
  },
};
</script>

<style>
</style>