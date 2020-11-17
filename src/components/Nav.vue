<template>
  <div class="nav">
    <van-tabbar route>
      <van-tabbar-item replace to="/home" class="icon-Vectoroddjobs">
        零工市场
      </van-tabbar-item>
      <van-tabbar-item replace to="/search" class="icon-Vectorknowledge">
        知识产权
      </van-tabbar-item>
      <div class="icon ">
        <i class="icon-plus"></i>
      </div>
      <van-tabbar-item replace to="/search" class="icon-Vectormessage">
        消息
      </van-tabbar-item>
      <van-tabbar-item replace to="/search" class="icon-Vectormy">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {},
}
</script>
<style lang="scss" scoped>
.icon {
  width: 20%;
  i {
    width: 40px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    border-radius: 8px;
    background: #fe6b0d;
  }
}

.van-tabbar-item--active,
.van-tabbar-item--active::before {
  color: #fe6b0d;
}
</style>
