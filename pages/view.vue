<template>
  <div class="mx-auto" style="max-width: 1024px">
    <section class="bg-white p-10 flex justify-center items-center shadow-lg">
      <a
        href="/api/download"
        class="bg-yellow-400 rounded shadow-xl px-2 py-1"
        download
        >ดาวโหลด</a
      >
    </section>
    <embed
      name="B8A016742B29D8AF079F7AEBE2CAAC99"
      width="100%"
      height="1440px"
      src="/api/download"
      type="application/pdf"
      internalid="B8A016742B29D8AF079F7AEBE2CAAC99"
    />
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapGetters, mapActions } from "vuex";
export default {
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
    ...mapActions("authen", ["logout"]),
  },
};
</script>

<style>
</style>