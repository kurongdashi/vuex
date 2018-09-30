<template>
  <div class="page">
    <div class="top-box">
      <my-header @myToggle="myToggle()"></my-header>
    </div>
    <div class="left-box" :class="{'hide-box':hideLeftMenu}">
        <left-menu></left-menu>
    </div>
    <div class="right-content">
      <div class="right-box">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import myHeader from '../components/myHeader/myHeader'
  import leftMenu from '../components/leftMenu/leftMenu'

  export default {
    name: 'App',
    data() {
      return {
        //是否隐藏侧边栏
        hideLeftMenu: false,
      }
    },
    methods: {
      myToggle() {
        this.hideLeftMenu = !this.hideLeftMenu;
      }
    },
    components: {
      myHeader, leftMenu
    }
  }
</script>

<style lang="scss">
  .page {
    .top-box {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
    }
      .left-box {
        position: fixed;
        top: 80px;
        left: 0;
        bottom: 0;
        z-index: 10;
        width: 220px;
        transition: all 0.4s;
        background-color: #F2F5F7;
        border-radius: 4px;
        box-shadow: 0px 6px 18px 0px rgba(144, 164, 183, 0.69);
      }
      .right-content {
        position: fixed;
        top: 0;
        left: 0px;
        right: 0px;
        bottom: 0;
        padding: 80px 20px 20px 240px;
        overflow: auto;
        background-color: #fff;
        .right-box{
          background-color: #fff;
          box-shadow: 0px 6px 18px 0px rgba(144, 164, 183, 0.69);
          overflow: auto;
        }
      }


  }
</style>
