<template>
  <el-breadcrumb separator="/" class="crumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item :key='1'><a href="/">首页</a></el-breadcrumb-item>
      <el-breadcrumb-item :key='2'>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item :key='3'>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item :key='4'>活动详情</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {};
</script>

<style>
.crumb {
  font-size: 20px;
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>