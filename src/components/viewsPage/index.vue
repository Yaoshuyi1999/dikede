<template>
  <div class="pagination">
    <div>
      共{{ getSearchInfo.totalCount }}条记录&nbsp;&nbsp;第{{
        getSearchInfo.pageIndex
      }}/{{ getSearchInfo.totalPage }}页
    </div>
    <div class="page_right">
      <el-button class="page_btn" @click="onPageUp">上一页</el-button>
      <el-button class="page_btn" @click="onNextPage">下一页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    getSearchInfo: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },

  created() {},

  methods: {
    onPageUp(){
        console.log('上一页');
    },
    onNextPage(){
        console.log('下一页');
    }
  },
};
</script>

<style lang="scss" scoped>
.pagination{
    display: flex;
    justify-content: space-between;
    padding: 32px 16px;
}
.page_btn {
  width: 70px;
  height: 32px;
  background-color: #d5ddf8;
  padding: 0;
}
</style>
