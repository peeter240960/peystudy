<template>
  <div
    id="card"
    class="p-10 bg-white shadow-lg mx-auto text-sm md:text-lg text-center"
    style="max-width: 1024px"
  >
    <div v-if="exists">
      <nuxt-link to="/view">
        <button
          class="animate-bounce bg-yellow-400 rounded-lg shadow-lg px-4 py-2"
        >
          ดาวน์โหลด
        </button>
      </nuxt-link>
    </div>
    <div v-else>
      {{ message }}
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    exists: false,
    message: null,
  }),
  async fetch() {
    await this.checkPdf();
  },
  computed: {
    ...mapGetters("authen", ["me"]),
  },
  methods: {
    async getMessage() {
      try {
        const data = await this.$axios.$get(`/api/messages`);
        this.message = data.result[0]?.message;
      } catch (err) {
        if (err?.response?.status == 400) {
          Swal.fire({
            icon: "error",
            text: err?.response?.data?.message,
          });
          this.$router.push("/");
        }
        console.log("err get mess", err.message);
      }
    },
    async checkPdf() {
      try {
        await this.$axios.$get(`/api/check_has_file`);
        this.exists = true;
      } catch (err) {
        if (err?.response?.status == 400) {
          Swal.fire({
            icon: "error",
            text: err?.response?.data?.message,
          });
          this.$router.push("/");
        }
        console.log("err.message", err.message);
        this.exists = false;
        await this.getMessage();
      }
    },
  },
};
</script>