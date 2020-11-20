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
      </div>
      <div class="right">
        <span class="location">{{ location }}</span>
      </div>
    </div>
    <main class="home-main">
      <dropdown-item />
      <van-swipe :autoplay="3000" height="120">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="home-img" :src="image" alt="" />
        </van-swipe-item>
      </van-swipe>

      <section class="home-section">
        <p class="home-p">公共资源服务</p>
      </section>

      <detail-item :dataList="dataList"></detail-item>
    </main>
  </div>
</template>

<script>
import DropdownItem from '@/components/DropdownItem.vue'
import DetailItem from '@/components/DetailItem.vue'

export default {
  components: {
    DetailItem,
    DropdownItem,
  },
  data() {
    return {
      active: 0,
      location: '未选择',
      images: this.global.swipeImgs,
      sectionImgUrl: this.global.sectionImgUrl,
      dataList: [
        {
          id: 1,
          status: '需求',
          title: '后厨墩子',
          grade: '100',
          money: 200,
          address: '四川省成都市青羊区大石西路56号',
          category: [{ title: '计时' }, { title: '上门服务' }, { title: '在线零工' }],
          logo: require('../assets/img/公共资源服务.png'),
          company: '潘晓明',
        },
        {
          id: 2,
          status: '需求',
          title: '兼职经纪人',
          grade: '100',
          money: 200,
          address: '青羊区光华大道一段866号(西三环成温大道与武青路交叉口',
          category: [{ title: '计时' }, { title: '上门服务' }, { title: '在线零工' }],
          logo: require('../assets/img/公共资源服务.png'),
          company: '成都科技有限公司',
        },
        {
          id: 3,
          status: '需求',
          title: '兼职经纪人',
          grade: '100',
          money: 200,
          address: '青羊区光华大道一段866号(西三环成温大道与武青路交叉口',
          category: [{ title: '计时' }, { title: '上门服务' }, { title: '在线零工' }],
          logo: require('../assets/img/公共资源服务.png'),
          company: '成都科技有限公司',
        },
        {
          id: 4,
          status: '需求',
          title: '兼职经纪人',
          grade: '100',
          money: 200,
          address: '青羊区光华大道一段866号(西三环成温大道与武青路交叉口',
          category: [{ title: '计时' }, { title: '上门服务' }, { title: '在线零工' }],
          logo: require('../assets/img/公共资源服务.png'),
          company: '成都科技有限公司',
        },
      ],
    }
  },
  mounted() {
    this.common.title('零工市场')
  },
}
</script>

<style lang="scss" src="@/assets/css/home.scss"></style>
