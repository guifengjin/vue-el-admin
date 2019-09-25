<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <nav-bar />
    </el-header>

    <!-- 主要内容 -->
    <el-container>
      <!-- 侧边栏 -->
      <slider />
      

      <!-- 主要内容 -->
      <el-main>
        Main
        <!-- <tags-view /> -->
        <!-- <app-main /> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from "./navbar";
import Slider from './slider'

export default {
  name: "layout",
  components: {
    NavBar,
    Slider
  },
  data() {
    return {
      
    };
  },
  computed: {
    sliderState() {
      return this.$store.getters.sliderState;
    }
  }
};
</script>

<style>
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  height: 61px;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
}
.el-aside {
  transition: width .3s;
  overflow-x: hidden;
}

.el-main {
  padding: 0;
  height: 100%;
  overflow: auto;
}
</style>