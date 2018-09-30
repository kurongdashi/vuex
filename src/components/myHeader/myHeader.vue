<template>
    <div class="header">
        <div class="logo-box">
            <img src="./img/logo.png" alt="">
            <div class="title">商户平台</div>
            <div class="toggle" @click="myToggle()"><i class="el-icon-tickets"></i></div>
        </div>
        <div class="info-box">
          <span class="user"></span>
        </div>
    </div>
</template>

<script >
    export default {
      name: "myHeader",
      data(){
          return{

          }
      },
      methods:{
        myToggle(){
          this.$emit('myToggle');
        }
      }

    }
</script>

<style lang="scss">
  .header{
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    line-height: 60px;
    background-color: #fff;
    box-shadow:0px 6px 18px 0px rgba(144,164,183,0.22);
    .logo-box{
      img{
        width: 116px;
        height: 42px;
      }
      .title{
        vertical-align: top;
        display: inline-block;
        margin-left: 10px;
        font-size: 16px;
        line-height: 50px;

      }
      .toggle{
        vertical-align: top;
        display: inline-block;
        padding: 5px;
        line-height: 50px;
        font-size: 20px;
      }
    }
  }

</style>
