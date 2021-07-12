<template>
    <div class="pagination">
      <button 
        @click.prevent="changePage(paginationData.currentPage - 1)"
        :class="{'button-disabled': paginationData.currentPage === 1}"
        :disabled="paginationData.currentPage === 1 ? true : false"
        class="mt-2"
        >Previous
      </button>
        <button 
        class="mt-2" 
        v-for="(page, index) in paginationData.lastPage" 
        @click.prevent="changePage(page)"
        :key="index" :class="[paginationData.currentPage === page ? 'button-active' : '']">
          {{ page }}
        </button>
      <button 
        @click.prevent="changePage(paginationData.currentPage + 1)"
        :class="{'button-disabled': paginationData.currentPage === paginationData.lastPage}"
        :disabled="paginationData.currentPage === paginationData.lastPage ? true : false"
        class="mt-2"
        >Next
      </button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
    }
  },
  props: {
    paginationData: {
      type: Object,
      required: true,
    }
  },
  methods: {
    changePage(page) {
      this.$emit('pagination', page)
    }
  },
};
</script>

<style scoped>
.pagination {
  border-top: 1px solid grey;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: auto;
  /* margin-top: var(--base-size); */
}

.pagination button {
  padding: 5px 10px;
  border: 1px solid var(--myyinvest-red);
  border-radius: 5px;
  color: var(--myyinvest-red);
  background-color: var(--myinvest-white);
}

.pagination button:first-child {
  margin-left: auto;
}

.pagination button:not(:first-child) {
  margin-left: 10px;
}

.pagination button:hover,
.pagination button:focus,
.pagination .button-active {
  background-color: var(--myyinvest-red);
  color: var(--myyinvest-white);
}
.button-disabled {
  border: 1px solid #999999 !important;
  background-color: #cccccc !important;
  color: #666666 !important;
}
</style>
