<template>
  <div>
    <!-- 上边的一行表格查询 -->
    <viewsSearch
      text1="工单编号"
      text2="工单状态"
      :allTaskStatusList="allTaskStatusList"
    ></viewsSearch>
    <!-- 下边的整个表格 -->
    <div class="result">
      <!-- 按钮 -->
      <div class="bottom_button">
        <el-button
          icon="el-icon-circle-plus-outline"
          class="add_btn"
          @click="onAdd"
          >新建</el-button
        >
        <el-button class="set_btn" @click="onSet">工单配置</el-button>
      </div>
      <!-- 表格 -->
      <viewsForm
        :getSearchList="getSearchList"
        :tableHead="tableHead"
      >
      <el-button @click="onSet">查看详情</el-button>
      </viewsForm>
      <!-- 分页 -->
      <viewsPage :getSearchInfo="getSearchInfo"></viewsPage>
    </div>
  </div>
</template>

<script>
import { allTaskStatus, getSearch } from "@/api/workOrder";
import viewsSearch from "@/components/viewsSearch";
import viewsForm from "@/components/viewsForm";
import viewsPage from "@/components/viewsPage";
export default {
  name: "marketing",
  data() {
    return {
      tableHead: [
        {
          prop: "taskCode",
          label: "工单编号",
        },
        {
          prop: "innerCode",
          label: "设备编号",
        },
        {
          prop: "taskType.typeName",
          label: "工单类型",
        },
        {
          prop: "createType",
          label: "工单方式",
        },
        {
          prop: "taskStatusTypeEntity.statusName",
          label: "工单状态",
        },
        {
          prop: "userName",
          label: "运营人员",
        },
        {
          prop: "createTime",
          label: "创建日期",
        },
      ],
      allTaskStatusList: [],
      getSearchList: [],
      getSearchInfo: {},
    };
  },
  components: {
    viewsSearch,
    viewsForm,
    viewsPage,
  },

  created() {
    this.allTask();
  },

  methods: {
    onAdd() {
      console.log("新建");
    },
    onSet() {
      console.log("配置");
    },
    async allTask() {
      const resStatus = await allTaskStatus();
      this.allTaskStatusList = resStatus;
      //   console.log(this.allTaskStatusList);
      const resSearch = await getSearch();
      console.log(resSearch);
      this.getSearchInfo = resSearch;
      this.getSearchList = resSearch.currentPageRecords;
      console.log(this.getSearchList);
    },
  },
};
</script>

<style lang="scss" scoped>
.result {
  padding: 20px 15px 19px 17px;
  background-color: #fff;
  .bottom_button {
    margin-bottom: 20px;
    .add_btn {
      background: linear-gradient(135deg, #ff9743, #ff5e20);
      color: #fff;
      border: none;
    }
    .set_btn {
      background-color: #fbf4f0;
      border: none;
      color: #655b56;
    }
  }
}
</style>
