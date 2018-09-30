<template>
    <div class="menu">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#EFF4F7"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>门店管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/mainPage/storeMgt/store"><el-menu-item index="1-1">门店管理</el-menu-item></router-link>
                <router-link to="/mainPage/storeMgt/store1"><el-menu-item index="1-1">门店管理1</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "leftMenu",
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style lang="scss">
  .menu{
    background-color: #EFF4F7;
    .tac{
      background-color: #EFF4F7;
    }
  }
</style>
