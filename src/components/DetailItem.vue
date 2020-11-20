<template>
  <div class="detail">
    <!-- {{ dataList }} -->
    <div class="detail-item" v-for="item of dataList" :key="item.id">
      <div class="detail-header">
        <div class="detail-header-left">
          <span class="detail-header_status">{{ item.status }}</span>
          <span class="detail-header_title">{{ item.title }}</span>
          <span class="detail-header_grade">诚信值:{{ item.grade }}</span>
        </div>
        <span class="detail-header_price">{{ item.money }}/天</span>
      </div>

      <p class="detail-address">{{ item.address }}</p>
      <p class="detail-category">
        <span v-for="category in item.category" :key="category.id">{{ category.title }}</span>
      </p>
      <div class="detail-company">
        <img :src="item.logo" alt="" />
        <span>{{ item.company }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataList'],
  data() {
    return {}
  },
  mounted() {
    console.log(this.dataList)
  },
}
</script>
<style lang="scss">
.detail {
  margin-bottom: 60px;
  .detail-item {
    padding: 14px 0px;
  }
  .detail-header {
    height: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .detail-header-left {
      display: flex;
      align-items: center;

      .detail-header_status {
        display: inline-block;
        width: 30px;
        border-radius: 2px;
        padding: 0 2px;
        background: $themeColor;
        font-size: 11px;
        color: #fff;
      }

      .detail-header_title {
        display: inline-block;
        height: 22px;
        padding: 0 8px;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
      }

      .detail-header_grade {
        font-size: 11px;
        font-weight: 400;
        padding: 0 2px;
        color: rgba(67, 188, 8, 1);
        border: 1px solid rgba(67, 188, 8, 1);
        border-radius: 2px;
      }
    }
    .detail-header_price {
      @extend .detail-header_title;
      color: $themeColor;
      font-weight: 600;
    }
  }

  .detail-address {
    margin: 4px 0 8px;
    font-size: 13px;
    line-height: 17px;
    color: #95a4b3;
    text-align: left;
    @include ell;
  }

  .detail-category {
    text-align: left;

    span {
      font-size: 11px;
      line-height: 16px;
      text-align: center;
      color: $Color;
      padding: 2px 4px;
      background: #f4f4f8;
      border-radius: 2px;
      margin-right: 4px;
    }
  }

  .detail-company {
    margin-top: 12px;
    display: flex;
    justify-content: start;
    align-items: center;
    img {
      display: block;
      width: 20px;
      height: 20px;
      border: 0.5px solid #e9eaeb;
      box-sizing: border-box;
      border-radius: 20px;
    }
    span {
      margin-left: 4px;
      text-align: center;
      color: $Color;
      font-size: 14px;
    }
  }
}
</style>
