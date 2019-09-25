<template>
  <div class="navbar">
    <div class="nav-left">
      <icon name="logo" :scale="5"></icon>
      <span>xxx管理后台</span>
    </div>
    <div class="nav-right">
      <div class="change">
        <div class="toggle" @click="toggleSideBar">
          <icon class="category-icon" name="category" :scale="2.8"></icon>
        </div>
        <crumbs />
      </div>

      <div class="setting">
        
        <el-dropdown trigger="click" @command="changeLanguage">
          <span class="el-dropdown-link">
            {{lang==='zh' ?'中文' :'English'}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div class="user">{{$t('admin')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Crumbs from "@/components/Crumbs";
export default {
  name: "navbar",
  components: {
    Crumbs
  },
  data() {
    return {};
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar', !this.sliderState)
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('changeLanguage', lang)
    }
  },
  computed: {
    sliderState() {
      return this.$store.getters.sliderState
    },
    lang() {
      return this.$store.getters.lang
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  display: flex;
  align-items: center;

  .nav-left {
    display: flex;
    align-items: center;
    width: 220px;
    height: 60px;
    span {
      padding-left: 10px;
      font-size: 18px;
      font-weight: bold;
      color: #42b983;
    }
  }

  .nav-right {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;

    .change {
      height: 60px;
      display: flex;
      align-items: center;
      .toggle {
        color: #515151;
        cursor: pointer;
        padding: 0 15px;
        transition: color 0.28s;
        &:hover {
          color: #42b983;
        }

        .iconfont {
          font-size: 20px;
          color: #42b983;
        }
      }
    }

    .setting {
      flex: 1;
      height: 60px;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .user {
        margin-left: 20px;
      }
    }
  }
}

.el-dropdown-link:hover {
  cursor: pointer;
  color: #42B983;
}
</style>