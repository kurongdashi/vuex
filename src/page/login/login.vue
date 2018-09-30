<template>
    <div class="login">
      <div class="form-box">
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" >
          <el-form-item label="账号">
            <el-input v-model="loginObj.username"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="loginObj.address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex';

    export default {
        name: "login",
      data(){
          return{
            labelPosition:'right',

            loginObj:{
              username:'',
              address:'',
            }
          }
      },
      methods:{
          onSubmit(){
            this.saveLoginState(this.loginObj)
            this.$router.push('/mainPage/storeMgt/store')

          },
        ...mapActions(['saveLoginState'])

      }
    }
</script>

<style lang="scss">
  html,body,#app,.app{
    height: 100%;
  }
  .login{
    height: 100%;
    background-color:#F2F5F7;
    .form-box{
      padding: 100px;
      width: 320px;
      height: 200px;
      margin: 0 auto;
    }
  }

</style>
