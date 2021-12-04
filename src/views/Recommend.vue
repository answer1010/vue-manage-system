<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">就业推荐系统</div>
      <el-form :model="param" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="username">
            <template #prepend>
              <el-button icon="el-icon-user"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="param.password"
                    @keyup.enter="submitForm()">
            <template #prepend>
              <el-button icon="el-icon-lock"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>




<!--  <div>-->
<!--    <div class="crumbs">-->
<!--      <el-breadcrumb separator="/">-->
<!--        <el-breadcrumb-item>-->
<!--          <i class="el-icon-lx-cascades"></i> 推荐列表-->
<!--        </el-breadcrumb-item>-->
<!--      </el-breadcrumb>-->
<!--    </div>-->
<!--    <div><h1>推荐页面</h1></div>-->
<!--    <div class="login-btn">-->
<!--      <el-button type="primary" @click="getData()">登录</el-button>-->
<!--    </div>-->
<!--    <div>{{code}}</div>-->
<!--    <div>{{message}}</div>-->
<!--  </div>-->
</template>

<script>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import {loginData} from "../api/index";

export default {
  name: "Recommend.vue",
  setup() {
    const param = reactive({
      username: "",
      password: ""
    });

    const router = useRouter();

    const code = ref();
    const message = ref();

    const submitForm = () => {
      console.log(param);
      loginData(param).then((res) => {
        console.log(res);
        code.value = res.code;
        message.value = res.message;
        console.log("code:"+code.value);
        if (code.value == 200) {
          ElMessage.success("登录成功");
          localStorage.setItem("ms_username", param.username);
          router.push("/");
        } else {
          return false;
        }
      });
    };



    return {
      param,
      code,
      message,
      submitForm
    }

  }
}
</script>

<style scoped>

</style>