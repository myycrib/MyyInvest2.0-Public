<template>
  <div class="download-overlay" v-if="noDownloadModal === false">
    <div class="download-modal">
      <p>Kindly select range</p>

      <div class="date-range">
        <span>From</span>
        <input class="form-control" type="date" name="start-date" id="start-date" />
        <span class="to-date">To</span>
        <input class="form-control" type="date" name="end-date" id="end-date" />
      </div>

      <div>
        <button @click="cancelDownload">Cancel</button>
        <button @click="proceedDownload">Proceed</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noDownloadModal: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      startDate: "",
      minDate: "2021-01-02",
      endDate: "",
      maxDate: "2022-12-31",
      submitStatus: null,
      validForm: true,
    };
  },
  methods: {
    cancelDownload() {
      this.$emit("closeModal");
    },
    proceedDownload() {
      alert("What next?");
    },
  },
};
</script>

<style scoped>
.download-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1111;
}

.download-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 350px;
  padding: calc(2 * var(--base-size));
  border-radius: 10px;
  background-color: var(--myyinvest-white);
  transform: translate(-50%, -50%);
}

.download-modal p {
  font-size: var(--font-sm);
  font-weight: 600;
  text-align: center;
}

.download-modal label {
  font-weight: 600;
}

.download-modal div label.to-date {
  margin-top: 10px;
}

.download-modal div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--base-size);
}

.download-modal div.date-range {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.download-modal div button {
  padding: 5px;
  border: 2px solid var(--myyinvest-red);
  color: var(--myyinvest-red);
  font-weight: 600;
  border-radius: 5px;
  background-color: var(--myyinvest-white);
}

.download-modal div button:hover,
.download-modal div button:focus {
  border: 2px solid transparent;
  color: var(--myyinvest-white);
  background-color: var(--myyinvest-red);
}
</style>
