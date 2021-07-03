<template>
  <div>
    <section class="section-wrap" v-for="(info, index) in personalInfoView" :key="index">
      <p class="section-title">{{ info.topic }}</p>

      <div class="chart-group" v-for="(detail, index) in info.chart" :key="index">
        <div :class="detail.classname">
          <div class="subject-title">{{ detail.title }}</div>
          <div class="chart" :style="{ width: detail.value + '%' }"></div>
          <div class="value">{{ detail.value }}%</div>
          <div class="value justify-content-between d-flex">
            {{ detail.value * detail.value }}/{{ detail.value * 100 }}
            <svg width="17" height="11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" fill="#0baa12">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11">
                <path
                  paint-order="stroke fill markers"
                  fill-rule="evenodd"
                  d="M16.9 5.082C15.347 2.05 12.27 0 8.75 0 5.229 0 2.152 2.052.6 5.082a.925.925 0 0 0 0 .836C2.153 8.948 5.229 11 8.75 11c3.52 0 6.598-2.052 8.15-5.082a.925.925 0 0 0 0-.836zM8.75 9.625c-2.826 0-5.417-1.576-6.816-4.125 1.399-2.55 3.99-4.125 6.816-4.125 2.826 0 5.417 1.576 6.816 4.125-1.4 2.549-3.99 4.125-6.816 4.125zm0-7.333a3.158 3.158 0 0 0-.895.143c.134.236.206.502.208.773 0 .886-.72 1.605-1.605 1.605a1.591 1.591 0 0 1-.773-.208A3.2 3.2 0 1 0 8.75 2.292z"
                />
              </svg>
            </svg>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import personalInfoView from "@/utils/viewUtils/adminStatistics/personalInfoHelper.js";

export default {
  name: "AdminStatsPersonalInfo",

  metaInfo: {
    title: "Myyinvest - Statistics > Personal Infomation (Admin)",
    titleTemplate: null
  },

  data() {
    return {
      personalInfoView
    };
  }
};
</script>

<style scoped>
.chart-group div {
  /* display: grid; */
  grid-template-columns: 3fr 5fr 1fr 1fr;
  /* width: 60%; */
}
</style>
