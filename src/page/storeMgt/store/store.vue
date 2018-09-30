<template>
  <div class="store" >
    <!--搜索-->
    <div class="search-box">
      <div class="title">
        <i class="el-icon-search"></i> <span>查询条件</span>
      </div>
      <!--搜索条件-->
      <div class="form-box">
        <el-form :inline="true" :model="searchObj"  class="demo-form-inline" size="mini">
          <el-form-item label="门店账号">
            <el-input v-model="searchObj.account" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="门店名称">
            <el-input v-model="searchObj.name" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="searchObj.status" placeholder="">
              <el-option label="全部" value="shanghai"></el-option>
              <el-option label="正常" value="beijing"></el-option>
              <el-option label="已停用" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="创建日期">
            <template>
              <div class="block">
                <el-date-picker
                  v-model="searchObj.create_date"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </div>
            </template>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
    <!--表格-->
    <div class="table-box" v-loading="loading"
         element-loading-text="加载中..."
         element-loading-background="rgba(0, 0, 0, 0.5)"
    >
      <template>
        <el-table
          :data="tableData"
          style="width: 100%"
          height="800"
          >
          <el-table-column
            type="index"
            :index="1" >
          </el-table-column>
          <el-table-column
            prop="account"
            label="门店账号"
            width="150">
          </el-table-column>
          <el-table-column
            prop="number"
            label="门店编号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="门店名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="man"
            label="负责人"
            width="120">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="电话"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="120">
          </el-table-column>
          <el-table-column
            prop="time"
            label="创建时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            width="60">
          </el-table-column>
          <el-table-column
            prop="opt"
            label="操作"
            width="240">
            <template slot-scope="scope">
              <el-button type="text" size="small">修改</el-button>
              <el-button type="text" size="small">密码重置</el-button>
              <el-button type="text" size="small">密码重置</el-button>
              <el-button type="text" size="small">密码重置</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <!--分页-->
      <div class="pagination-box">
        <el-pagination
          background
          @current-change="pageChange"
          :page-size="5"
          layout="prev, pager, next,total"
          :total="20">
        </el-pagination>
      </div>
    </div>


  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "store",
    data() {
      return {
        searchObj: {
          create_date:null,
          account:'',
          name: '',
          status: ''
        },
        tableData: [],
        pageIndex:1,
        loading:false,
      }
    },
    mounted() {

    this.$message('消息文字','success');

     console.log( this.getUserName);
     console.log( this.getAddress);
     console.log( this.add);

      this.__getData();
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      resetForm() {
        this.searchObj.create_date=null;
        this.searchObj.account=null;
        this.searchObj.name=null;
        this.searchObj.status=null;
      },
      pageChange(pageIndex){
        this.pageIndex=pageIndex;
        this.__getData();
      },
      __getData() {
        this.loading=true;
        let len=10;
        let pageIndex=this.pageIndex
        let start=(pageIndex-1)*len;
        let end=start+len;
        let list = [];
        for (let i = start; i < end; i++) {
          let obj = {
            account: 'test'+i,
            number: 'MD'+i+'号',
            name: '王小虎'+i,
            man: '王小虎'+i,
            phone: '上海',
            address: '上海市普陀区金沙江路 1518 弄',
            time: '2018-9-29 14:17:18',
            status: '正常',

          }
          list.push(obj);
        }
        let that=this;
        setTimeout(function () {
          that.loading=false;
          that.tableData =list;
        },1000)

      }

    },
    //计算属性
    computed: {
      add(){
        return 'hello';
      },
      ...mapGetters(['getUserName','getAddress'])
    }
  }
</script>

<style lang="scss">
  .store {
    /*background-color:transparent;*/
    .search-box {
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0px 6px 18px 0px rgba(144, 164, 183, 0.69);

      .title {
        border-bottom: 1px solid #F2F5F7;
        height: 34px;
        padding: 0 15px;
        line-height: 34px;
        font-size: 16px;
        color: #262626;
        .el-icon-search {
          color: #4E84FE;

        }

      }
      .form-box {
        padding: 10px 15px;

      }
    }
    .table-box{
      margin-top: 20px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0px 6px 18px 0px rgba(144, 164, 183, 0.69);
      .pagination-box{
        padding: 10px;
        text-align: center;
      }
    }

  }
</style>
