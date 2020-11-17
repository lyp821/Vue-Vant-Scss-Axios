<template>
  <div class="home">
    <van-nav-bar title="零工社区">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    }
  },
}
</script>

<style lang="scss">
.van-nav-bar {
  // background: #fe6b0d;
  // background: $themeColor;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-icon {
    color: #fff;
  }
}
</style>
