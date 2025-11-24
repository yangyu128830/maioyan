<template>
  <div id="productDetail">
    <Header title="商品详情" />
    <!-- 商品图片 -->
    <div class="product-image">
      <img :src="product.img" :alt="product.name">
    </div>

    <!-- 商品信息 -->
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <div class="price-section">
        <span class="current-price">¥{{ product.price }}</span>
        <span class="original-price">¥{{ product.originalPrice }}</span>
        <span class="discount">{{ product.discount }}折</span>
      </div>
      <div class="sales-info">
        <span>已售{{ product.sales }}</span>
        <span>好评率{{ product.rating }}%</span>
      </div>
      <div class="product-tags">
        <span v-for="tag in product.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>

    <!-- 商品详情 -->
    <div class="product-details">
      <h2>商品详情</h2>
      <div class="detail-content">
        <p>{{ product.description }}</p>
        <img :src="product.detailImg" alt="商品详情">
      </div>
    </div>

    <!-- 规格选择 -->
    <div class="specification-section">
      <h2>选择规格</h2>
      <div class="spec-list">
        <div 
          v-for="spec in product.specifications" 
          :key="spec.id"
          :class="{ active: selectedSpec === spec.id }"
          @click="selectSpec(spec.id)"
          class="spec-item"
        >
          {{ spec.name }}
        </div>
      </div>
    </div>

    <!-- 评论区 -->
    <div class="comment-section">
      <h2>用户评价 ({{ product.comments.length }})</h2>
      <div class="comment-list">
        <div class="comment-item" v-for="comment in product.comments" :key="comment.id">
          <div class="comment-header">
            <img :src="comment.avatar" alt="用户头像" class="avatar">
            <div class="user-info">
              <span class="username">{{ comment.username }}</span>
              <span class="time">{{ comment.time }}</span>
            </div>
            <div class="rating">
              <span v-for="i in 5" :key="i" class="star" :class="{ active: i <= comment.rating }"></span>
            </div>
          </div>
          <div class="comment-content">
            {{ comment.content }}
          </div>
          <div class="comment-images" v-if="comment.images.length > 0">
            <img v-for="(image, index) in comment.images" :key="index" :src="image" alt="评论图片">
          </div>
        </div>
      </div>
    </div>

    <!-- 底部购买栏 -->
    <div class="bottom-bar">
      <div class="action-buttons">
        <button class="btn-cart" @click="addToCart">加入购物车</button>
        <button class="btn-buy" @click="buyNow">立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  name: 'ProductDetail',
  components: {
    Header
  },
  data() {
    return {
      productId: this.$route.params.id,
      selectedSpec: 1,
      product: {
        id: 1,
        name: '示例商品',
        price: 19.9,
        originalPrice: 39.9,
        discount: 5,
        sales: 1234,
        rating: 98,
        img: '@/assets/lazy1.jpg',
        detailImg: '@/assets/lazy1.jpg',
        description: '这是一个示例商品的详细描述，包含商品的特点、规格、使用方法等信息。这个商品质量非常好，价格实惠，是您的不二选择。',
        tags: ['限时特惠', '热销商品', '好评如潮'],
        specifications: [
          { id: 1, name: '规格1' },
          { id: 2, name: '规格2' },
          { id: 3, name: '规格3' }
        ],
        comments: [
          {
            id: 1,
            username: '用户1',
            avatar: '@/assets/lazy1.jpg',
            time: '2023-05-10',
            rating: 5,
            content: '这个商品非常好，价格实惠，质量也不错，值得购买。',
            images: ['@/assets/lazy1.jpg', '@/assets/lazy1.jpg']
          },
          {
            id: 2,
            username: '用户2',
            avatar: '@/assets/lazy1.jpg',
            time: '2023-05-09',
            rating: 4,
            content: '商品质量还可以，就是物流有点慢，总体来说还是不错的。',
            images: []
          }
        ]
      }
    }
  },
  mounted() {
    // 根据商品ID获取商品详情
    this.getProductDetail();
  },
  methods: {
    getProductDetail() {
      // 这里可以通过API获取商品详情，现在使用模拟数据
      // console.log('获取商品详情:', this.productId);
      // 假设已经获取到商品数据并赋值给this.product
    },
    selectSpec(specId) {
      this.selectedSpec = specId;
    },
    addToCart() {
      // console.log('加入购物车');
      this.$messageBox({
        title: '提示',
        content: '商品已加入购物车',
        cancel: null
      });
    },
    buyNow() {
      // console.log('立即购买');
      this.$messageBox({
        title: '提示',
        content: '正在跳转到支付页面',
        cancel: null
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#productDetail {
  padding-bottom: 80px;
  background-color: #f5f5f5;
}

/* 商品图片样式 */
.product-image {
  width: 100%;
  height: 300px;
  margin-top: 40px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* 商品信息样式 */
.product-info {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  
  h1 {
    font-size: 18px;
    color: #333;
    margin-bottom: 15px;
    line-height: 1.4;
  }
  
  .price-section {
    margin-bottom: 10px;
    
    .current-price {
      font-size: 24px;
      color: #ff4444;
      font-weight: bold;
      margin-right: 10px;
    }
    
    .original-price {
      font-size: 16px;
      color: #999;
      text-decoration: line-through;
      margin-right: 10px;
    }
    
    .discount {
      font-size: 14px;
      color: #ff4444;
      background-color: rgba(255, 68, 68, 0.1);
      padding: 2px 6px;
      border-radius: 4px;
    }
  }
  
  .sales-info {
    color: #999;
    font-size: 14px;
    margin-bottom: 10px;
    
    span {
      margin-right: 15px;
    }
  }
  
  .product-tags {
    .tag {
      display: inline-block;
      background-color: #f0f0f0;
      color: #666;
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 4px;
      margin-right: 8px;
      margin-bottom: 8px;
    }
  }
}

/* 商品详情样式 */
.product-details {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  
  h2 {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
  }
  
  .detail-content {
    p {
      color: #666;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 15px;
    }
    
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }
}

/* 规格选择样式 */
.specification-section {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  
  h2 {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
  }
  
  .spec-list {
    display: flex;
    flex-wrap: wrap;
    
    .spec-item {
      width: 30%;
      height: 40px;
      border: 1px solid #ddd;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 3%;
      margin-bottom: 10px;
      font-size: 14px;
      color: #333;
      
      &.active {
        border-color: #ff4444;
        color: #ff4444;
      }
    }
  }
}

/* 评论区样式 */
.comment-section {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  
  h2 {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
  }
  
  .comment-list {
    .comment-item {
      margin-bottom: 20px;
      
      .comment-header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }
        
        .user-info {
          flex: 1;
          
          .username {
            font-size: 14px;
            color: #333;
            margin-right: 10px;
          }
          
          .time {
            font-size: 12px;
            color: #999;
          }
        }
        
        .rating {
          .star {
            display: inline-block;
            width: 16px;
            height: 16px;
            background-color: #ddd;
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
            margin-right: 2px;
            
            &.active {
              background-color: #ffcc00;
            }
          }
        }
      }
      
      .comment-content {
        font-size: 14px;
        color: #666;
        line-height: 1.6;
        margin-bottom: 10px;
      }
      
      .comment-images {
        display: flex;
        
        img {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          margin-right: 10px;
        }
      }
    }
  }
}

/* 底部购买栏样式 */
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  border-top: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  z-index: 100;
  
  .action-buttons {
    display: flex;
    width: 100%;
    
    .btn-cart {
      flex: 1;
      height: 45px;
      background-color: #fff;
      color: #ff4444;
      border: 1px solid #ff4444;
      border-radius: 4px;
      margin-right: 10px;
      font-size: 16px;
    }
    
    .btn-buy {
      flex: 2;
      height: 45px;
      background-color: #ff4444;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 16px;
    }
  }
}
</style>