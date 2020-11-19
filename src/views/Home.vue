<template>
  <div class="home">
    <van-nav-bar class="home-title" title="零工市场">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <div class="content">
      <div class="left">
        <van-tabs v-model="active" animated>
          <van-tab title="需求" />
          <van-tab title="服务" />
        </van-tabs>
        <dropdown-item />
        <van-swipe :autoplay="3000" height="120">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img class="home-img" :src="image" alt="" />
          </van-swipe-item>
        </van-swipe>

        <section class="section">
          <img class="home-img_section" :src="sectionImgUrl" alt="" />
        </section>
      </div>

      <div class="right">
        <span class="location">{{ location }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownItem from '@/components/DropdownItem.vue'

export default {
  components: {
    DropdownItem,
  },
  data() {
    return {
      active: 0,
      location: '未选择',
      images: this.global.swipeImgs,
      sectionImgUrl: this.global.sectionImgUrl,
    }
  },
  mounted() {
    this.common.title('零工市场')
  },
}
</script>

<style lang="scss" src="@/assets/css/home.scss"></style>
