<template>
  <el-scrollbar id="scroll">
    <el-menu
      mode="vertical"
      class="slider-menu"
      :show-timeout="200"
      :collapse="!isCollapse"
      :background-color="bg"
      :text-color="tc"
      :active-text-color="atc"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  name: "slider",
  data() {
    return {
      bg: "#556d84",
      tc: "#fff",
      atc: "#41B883"
    };
  },
  computed: {
    isCollapse() {
      return this.$store.getters.sliderState;
    }
  }
};
</script>

<style>
.el-scrollbar__wrap {
  overflow-x: hidden;
}
.el-scrollbar__view {
  height: 100%;
}
</style>
<style lang="scss" scoped>
.slider-menu {
  height: 100%;
  overflow-x: hidden;
  &:not(.el-menu--collapse) {
    // 解决element-ui collapsen bug
    height: 100%;
    width: 240px;
  }
}
</style>