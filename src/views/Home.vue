<template>
  <div class="home">
    <van-nav-bar class="home-title" title="零工社区">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <div class="content">
      <div class="left">
        <van-tabs v-model="active" animated>
          <van-tab title="需求"> <div class="home-nav"></div> </van-tab>
          <van-tab title="服务">123123</van-tab>
        </van-tabs>
      </div>

      <div class="right">
        <span class="location">成都</span>
      </div>
    </div>
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

<style lang="scss" src="@/assets/css/home.scss"></style>
