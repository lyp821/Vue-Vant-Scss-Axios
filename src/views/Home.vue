<template>
  <div class="home">
    <van-nav-bar class="home-title" title="零工社区">
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
.home {
  .van-nav-bar__title {
    color: #fff;
  }
  .van-nav-bar {
    background: $themeColor;
  }

  .van-icon {
    color: #fff;
  }
}
</style>
