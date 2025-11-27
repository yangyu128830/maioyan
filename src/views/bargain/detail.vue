<template>
  <div class="goods-detail">
    <Header title="商品详情" />
    <div class="detail-header">
      <button @click="goBack" class="back-button">← 返回</button>
      <h1>{{ goods.name }}</h1>
    </div>
    
    <div class="detail-content">
      <div class="goods-image">
        <img :src="goods.image" :alt="goods.name">
      </div>
      
      <div class="goods-info">
        <div class="price-section">
          <span class="current-price">¥{{ goods.price }}</span>
          <span class="original-price">¥{{ goods.originalPrice }}</span>
          <span class="discount">{{ goods.discount }}折</span>
        </div>
        
        <div class="sales-info">
          <span>已售 {{ goods.salesVolume }} 件</span>
          <span>好评率 {{ goods.rating }}%</span>
        </div>
        
        <div class="goods-description">
          <h3>商品描述</h3>
          <p>{{ goods.description }}</p>
        </div>
        
        <div class="goods-specs">
          <h3>商品规格</h3>
          <ul>
            <li v-for="spec in goods.specs" :key="spec.name">
              <span>{{ spec.name }}:</span>
              <span>{{ spec.value }}</span>
            </li>
          </ul>
        </div>
        
        <div class="seller-info">
          <h3>商家信息</h3>
          <div class="seller-details">
            <img :src="goods.seller.avatar" :alt="goods.seller.name" class="seller-avatar">
            <div class="seller-info-text">
              <h4>{{ goods.seller.name }}</h4>
              <p>评分: {{ goods.seller.rating }}</p>
              <p>销量: {{ goods.seller.salesVolume }}</p>
            </div>
          </div>
        </div>
        
        <div class="comments-section">
          <h3>用户评价 ({{ goods.comments.length }})</h3>
          <div class="comment-item" v-for="comment in goods.comments" :key="comment.id">
            <div class="comment-header">
              <img :src="comment.user.avatar" :alt="comment.user.name" class="user-avatar">
              <div class="user-info">
                <h4>{{ comment.user.name }}</h4>
                <p>{{ comment.date }}</p>
              </div>
              <div class="comment-rating">
                <span v-for="i in 5" :key="i" :class="{ 'star-active': i <= comment.rating }">★</span>
              </div>
            </div>
            <p class="comment-content">{{ comment.content }}</p>
            <div class="comment-images" v-if="comment.images.length > 0">
              <img v-for="(image, index) in comment.images" :key="index" :src="image" :alt="'评价图片' + (index + 1)">
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="buy-section">
      <button class="add-cart-button" @click="addToCart">加入购物车</button>
      <button class="buy-now-button" @click="buyNow">立即购买</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'GoodsDetail',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      goods: {
        id: this.$route.params.goodsId,
        name: '示例商品',
        price: 9.9,
        originalPrice: 19.9,
        discount: 5,
        image: 'https://via.placeholder.com/300',
        salesVolume: 1000,
        rating: 95,
        description: '这是一个示例商品的详细描述。该商品质量优良，价格实惠，深受广大消费者的喜爱。',
        specs: [
          { name: '品牌', value: '示例品牌' },
          { name: '型号', value: '示例型号' },
          { name: '规格', value: '示例规格' },
          { name: '产地', value: '示例产地' }
        ],
        seller: {
          name: '示例商家',
          avatar: 'https://via.placeholder.com/50',
          rating: 4.8,
          salesVolume: 10000
        },
        comments: [
          {
            id: 1,
            user: {
              name: '用户1',
              avatar: 'https://via.placeholder.com/40'
            },
            rating: 5,
            content: '商品质量很好，价格实惠，值得购买。',
            date: '2023-01-01',
            images: []
          },
          {
            id: 2,
            user: {
              name: '用户2',
              avatar: 'https://via.placeholder.com/40'
            },
            rating: 4,
            content: '商品质量不错，就是物流有点慢。',
            date: '2023-01-02',
            images: ['https://via.placeholder.com/100']
          }
        ]
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    addToCart() {
      alert('商品已加入购物车')
    },
    buyNow() {
      alert('立即购买功能')
    }
  },
  mounted() {
    // 这里可以添加获取商品详情的逻辑
  }
}
</script>

<style lang="scss" scoped>
.goods-detail {
  padding-bottom: 80px; // 为底部购买栏留出空间
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.detail-header {
  display: flex;
  align-items: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
  margin-bottom: 20px;
  
  .back-button {
    background: none;
    border: none;
    font-size: 18px;
    margin-right: 15px;
    cursor: pointer;
    color: #333;
    transition: all 0.3s ease;
    &:hover {
      transform: translateX(-5px);
      color: #ff6b6b;
    }
  }
  
  h1 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
}

.detail-content {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 20px;
  overflow: hidden;
  
  .goods-image {
    padding: 20px;
    text-align: center;
    
    img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }
  }
  
  .goods-info {
    padding: 0 20px 20px;
    
    .price-section {
      margin-bottom: 15px;
      
      .current-price {
        font-size: 24px;
        color: #ff4d4f;
        font-weight: bold;
      }
      
      .original-price {
        font-size: 14px;
        color: #999;
        text-decoration: line-through;
        margin-left: 10px;
      }
      
      .discount {
        font-size: 14px;
        color: #fff;
        background: linear-gradient(45deg, #ff6b6b, #ee5a24);
        padding: 2px 5px;
        border-radius: 4px;
        margin-left: 10px;
      }
    }
    
    .sales-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      font-size: 14px;
      color: #999;
      background: rgba(255, 255, 255, 0.1);
      padding: 10px;
      border-radius: 8px;
      backdrop-filter: blur(10px);
    }
    
    .goods-description,
    .goods-specs,
    .seller-info,
    .comments-section {
      margin-bottom: 20px;
      
      h3 {
        margin: 0 0 10px 0;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        position: relative;
        padding-left: 15px;
      }
      h3::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 20px;
        background: linear-gradient(180deg, #ff6b6b, #ee5a24);
        border-radius: 2px;
      }
    }
    
    .goods-description p {
      font-size: 14px;
      line-height: 1.5;
      color: #fff;
      background: rgba(255, 255, 255, 0.1);
      padding: 15px;
      border-radius: 12px;
      backdrop-filter: blur(10px);
    }
    
    .goods-specs ul {
      list-style: none;
      padding: 0;
      margin: 0;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 15px;
      
      li {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        font-size: 14px;
        
        span:first-child {
          color: #999;
        }
        
        span:last-child {
          color: #333;
        }
      }
    }
    
    .seller-details {
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 15px;
      
      .seller-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 15px;
      }
      
      .seller-info-text {
        h4 {
          margin: 0 0 5px 0;
          font-size: 14px;
          font-weight: bold;
        }
        
        p {
          margin: 0;
          font-size: 12px;
          color: #999;
        }
      }
    }
    
    .comment-item {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 15px;
      margin-bottom: 10px;
      
      .comment-header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 15px;
        }
        
        .user-info {
          flex: 1;
          
          h4 {
            margin: 0 0 5px 0;
            font-size: 14px;
            font-weight: bold;
          }
          
          p {
            margin: 0;
            font-size: 12px;
            color: #999;
          }
        }
        
        .comment-rating {
          .star-active {
            color: #ffc107;
          }
        }
      }
      
      .comment-content {
        font-size: 14px;
        line-height: 1.5;
        margin-bottom: 10px;
      }
      
      .comment-images {
        display: flex;
        
        img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
          margin-right: 10px;
        }
      }
    }
  }
}

.buy-section {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  
  .add-cart-button {
    flex: 1;
    padding: 12px;
    margin-right: 10px;
    background: linear-gradient(45deg, #ffc107, #ff9800);
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
  }
  
  .buy-now-button {
    flex: 1;
    padding: 12px;
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3);
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
