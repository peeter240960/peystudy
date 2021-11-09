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
import Swal from 'sweetalert2';
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "authLayout",
  middleware: "authen",
  computed: {
    ...mapGetters("authen", ["me"]),
  },
  data: () => ({
    interval: null,
  }),
  mounted() {
    this.interval = setInterval(async () => {
      try {
        await this.getMe();
      } catch (err) {
        if (err?.response?.status == 400) {
          Swal.fire({
            icon: "error",
            text: err?.response?.data?.message,
          });
          this.$router.push("/");
        }
      }
    }, 1000 * 60);
  },
  destroyed() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  methods: {
    ...mapActions("authen", ["getMe"]),
  },
};
</script>

<style>
</style>