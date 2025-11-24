<template>
  <div id="bargain-detail">
    <Header title="商品详情">
      <i class="back" @touchstart="handleBack" @click="handleBack"></i>
    </Header>
    <div class="content">
      <!-- 商品图片 -->
      <div class="product-image">
        <img :src="product.image" :alt="product.name">
      </div>

      <!-- 商品信息 -->
      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <div class="price-section">
          <span class="current-price">¥{{ product.price }}</span>
          <span class="original-price">¥{{ product.originalPrice }}</span>
        </div>
        <div class="sales-info">
          <span>已售{{ product.sales }}件</span>
          <span>好评率{{ product.rating }}%</span>
        </div>
        <div class="product-description">
          <h3>商品描述</h3>
          <p>{{ product.description }}</p>
        </div>
        <div class="product-specs">
          <h3>商品规格</h3>
          <ul>
            <li v-for="(spec, index) in product.specs" :key="index">{{ spec }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="bottom-buttons">
      <button class="add-to-cart">加入购物车</button>
      <button class="buy-now">立即购买</button>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'BargainDetail',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      product: {
        id: 1,
        name: '特价商品1',
        price: 9.9,
        originalPrice: 19.9,
        image: '@/assets/lazy1.jpg',
        sales: 100,
        rating: 95,
        description: '这是一个非常实惠的特价商品，质量优良，价格便宜，欢迎购买！',
        specs: ['规格1', '规格2', '规格3']
      }
    }
  },
  created() {
    // 根据路由参数获取商品详情
    const productId = this.$route.params.id;
    // 这里可以添加获取商品详情的逻辑
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
    addToCart() {
      // 加入购物车逻辑
      alert('商品已加入购物车');
    },
    buyNow() {
      // 立即购买逻辑
      alert('立即购买功能开发中');
    }
  }
}
</script>

<style lang="scss" scoped>
#bargain-detail {
  .content {
    padding-top: 40px;
    padding-bottom: 120px;

    .product-image {
      width: 100%;
      height: 300px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .product-info {
      padding: 15px;
      background-color: #fff;

      h1 {
        font-size: 20px;
        font-weight: bold;
        color: #333;
        margin: 0 0 15px 0;
      }

      .price-section {
        margin-bottom: 15px;

        .current-price {
          font-size: 24px;
          color: #ff6b6b;
          font-weight: bold;
          margin-right: 10px;
        }

        .original-price {
          font-size: 16px;
          color: #999;
          text-decoration: line-through;
        }
      }

      .sales-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #f0f0f0;
        color: #999;
        font-size: 14px;
      }

      .product-description {
        margin-bottom: 15px;

        h3 {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin: 0 0 10px 0;
        }

        p {
          font-size: 14px;
          color: #666;
          line-height: 1.5;
          margin: 0 0 15px 0;
        }
      }

      .product-specs {
        h3 {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin: 0 0 10px 0;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          font-size: 14px;
          color: #666;
          margin-bottom: 5px;
        }
      }
    }

    .bottom-buttons {
      position: fixed;
      bottom: 60px;
      left: 0;
      right: 0;
      display: flex;
      padding: 10px;
      background-color: #fff;
      border-top: 1px solid #f0f0f0;

      button {
        flex: 1;
        padding: 12px;
        margin: 0 5px;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
      }

      .add-to-cart {
        background-color: #ff6b6b;
        color: #fff;
      }

      .buy-now {
        background-color: #ff9800;
        color: #fff;
      }
    }
  }
}
</style>