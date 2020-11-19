<template>
  <div class="dropdown">
    <van-dropdown-menu active-color="#fe6b0d">
      <van-dropdown-item title="区域" v-model="value" :options="option" />
      <van-dropdown-item title="零工类型" v-model="value" :options="option" />
      <van-dropdown-item title="默认排序" v-model="value" :options="option" />
      <van-dropdown-item title="筛选" ref="item"> </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
    }
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle()
    },
  },
}
</script>
<style lang="scss">
.dropdown {
  .van-dropdown-menu__bar {
    box-shadow: none;
    justify-content: space-between;
    .van-dropdown-menu__item {
      flex: none;
      .van-ellipsis {
        color: $Color;
        font-size: 14px;
      }
      .van-dropdown-menu__title {
        padding: 0 8px 0 0;
      }
      .van-dropdown-menu__title--active {
        .van-ellipsis {
          color: $themeColor;
        }
      }
      .van-dropdown-menu__title::after {
        border-color: transparent transparent $Color $Color;
      }
      .van-dropdown-menu__title--active::after {
        border-color: transparent transparent $themeColor $themeColor;
      }
    }
  }
}
</style>
