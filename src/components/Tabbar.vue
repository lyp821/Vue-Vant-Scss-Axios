<template>
  <div class="nav">
    <van-tabbar route>
      <van-tabbar-item replace to="/" class="icon-Vectoroddjobs">
        零工市场
      </van-tabbar-item>
      <van-tabbar-item replace to="/owner" class="icon-Vectorknowledge">
        知识产权
      </van-tabbar-item>
      <div class="icon ">
        <i class="icon-plus"></i>
      </div>
      <van-tabbar-item replace to="/message" class="icon-Vectormessage">
        消息
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" class="icon-Vectormy">
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
  line-height: 1.6rem;
  i {
    width: 1.066667rem;
    height: 1.066667rem;
    display: inline-block;
    line-height: 1.066667rem;
    border-radius: 8px;
    background: #fe6b0d;
  }
}

.van-tabbar-item--active,
.van-tabbar-item--active::before {
  color: #fe6b0d;
}
</style>
