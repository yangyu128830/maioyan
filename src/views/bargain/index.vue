<template>
  <div id="bargainPage">
    <Header title="特价" />
    <!-- 顶部搜索框 -->
    <div class="search-box">
      <input type="text" placeholder="搜索商品" v-model="searchKeyword" @input="handleSearch">
      <i class="iconfont search-icon">&#xe60c;</i>
    </div>

    <!-- 天天低价商品框 -->
    <div class="daily-bargain">
      <div class="daily-header">
        <h2>天天低价</h2>
        <button class="view-all" @click="viewAllBargains">查看全部</button>
      </div>
      <div class="daily-products">
        <div class="product-item" v-for="product in dailyBargains" :key="product.id" @click="viewProductDetail(product.id)">
          <img :src="product.img" :alt="product.name">
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p class="price">¥{{ product.price }}</p>
            <p class="original-price">¥{{ product.originalPrice }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 分类表 -->
    <div class="category-section">
      <div class="category-tabs">
        <span 
          v-for="category in categories" 
          :key="category.id" 
          :class="{ active: currentCategory === category.id }"
          @click="switchCategory(category.id)"
        >
          {{ category.name }}
        </span>
      </div>
      <div class="category-products">
        <div class="product-item" v-for="product in currentProducts" :key="product.id" @click="viewProductDetail(product.id)">
          <img :src="product.img" :alt="product.name">
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p class="price">¥{{ product.price }}</p>
            <p class="original-price">¥{{ product.originalPrice }}</p>
            <p class="sales">已售{{ product.sales }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 我的爆料板块 -->
    <div class="my-bargain">
      <div class="my-bargain-header">
        <h2>我的爆料</h2>
        <button class="submit-bargain" @click="submitBargain">我要爆料</button>
      </div>
      <div class="bargain-list" v-if="myBargains.length > 0">
        <div class="bargain-item" v-for="bargain in myBargains" :key="bargain.id">
          <img :src="bargain.img" :alt="bargain.name">
          <div class="bargain-info">
            <h3>{{ bargain.name }}</h3>
            <p class="price">¥{{ bargain.price }}</p>
            <p class="status">{{ bargain.status }}</p>
          </div>
        </div>
      </div>
      <div class="empty-bargain" v-else>
        <p>您还没有爆料过商品，快来分享您发现的低价好物吧！</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  name: 'BargainPage',
  components: {
    Header
  },
  data() {
    return {
      searchKeyword: '',
      currentCategory: 1,
      dailyBargains: [
        { id: 1, name: '特惠商品1', price: 9.9, originalPrice: 19.9, img: '@/assets/lazy1.jpg' },
        { id: 2, name: '特惠商品2', price: 19.9, originalPrice: 39.9, img: '@/assets/lazy1.jpg' },
        { id: 3, name: '特惠商品3', price: 29.9, originalPrice: 59.9, img: '@/assets/lazy1.jpg' },
        { id: 4, name: '特惠商品4', price: 39.9, originalPrice: 79.9, img: '@/assets/lazy1.jpg' }
      ],
      categories: [
        { id: 1, name: '精选' },
        { id: 2, name: '24h最热' },
        { id: 3, name: '3h最热' },
        { id: 4, name: '好价活动' },
        { id: 5, name: '食品' },
        { id: 6, name: '居家' }
      ],
      products: {
        1: [
          { id: 1, name: '精选商品1', price: 19.9, originalPrice: 39.9, sales: 1234, img: '@/assets/lazy1.jpg' },
          { id: 2, name: '精选商品2', price: 29.9, originalPrice: 59.9, sales: 5678, img: '@/assets/lazy1.jpg' },
          { id: 3, name: '精选商品3', price: 39.9, originalPrice: 79.9, sales: 9012, img: '@/assets/lazy1.jpg' },
          { id: 4, name: '精选商品4', price: 49.9, originalPrice: 99.9, sales: 3456, img: '@/assets/lazy1.jpg' }
        ],
        2: [
          { id: 5, name: '24h最热商品1', price: 9.9, originalPrice: 19.9, sales: 9876, img: '@/assets/lazy1.jpg' },
          { id: 6, name: '24h最热商品2', price: 19.9, originalPrice: 39.9, sales: 8765, img: '@/assets/lazy1.jpg' },
          { id: 7, name: '24h最热商品3', price: 29.9, originalPrice: 59.9, sales: 7654, img: '@/assets/lazy1.jpg' },
          { id: 8, name: '24h最热商品4', price: 39.9, originalPrice: 79.9, sales: 6543, img: '@/assets/lazy1.jpg' }
        ],
        3: [
          { id: 9, name: '3h最热商品1', price: 14.9, originalPrice: 29.9, sales: 5432, img: '@/assets/lazy1.jpg' },
          { id: 10, name: '3h最热商品2', price: 24.9, originalPrice: 49.9, sales: 4321, img: '@/assets/lazy1.jpg' },
          { id: 11, name: '3h最热商品3', price: 34.9, originalPrice: 69.9, sales: 3210, img: '@/assets/lazy1.jpg' },
          { id: 12, name: '3h最热商品4', price: 44.9, originalPrice: 89.9, sales: 2109, img: '@/assets/lazy1.jpg' }
        ],
        4: [
          { id: 13, name: '好价活动商品1', price: 15.9, originalPrice: 31.9, sales: 1122, img: '@/assets/lazy1.jpg' },
          { id: 14, name: '好价活动商品2', price: 25.9, originalPrice: 51.9, sales: 2233, img: '@/assets/lazy1.jpg' },
          { id: 15, name: '好价活动商品3', price: 35.9, originalPrice: 71.9, sales: 3344, img: '@/assets/lazy1.jpg' },
          { id: 16, name: '好价活动商品4', price: 45.9, originalPrice: 91.9, sales: 4455, img: '@/assets/lazy1.jpg' }
        ],
        5: [
          { id: 17, name: '食品商品1', price: 8.9, originalPrice: 17.9, sales: 5566, img: '@/assets/lazy1.jpg' },
          { id: 18, name: '食品商品2', price: 18.9, originalPrice: 37.9, sales: 6677, img: '@/assets/lazy1.jpg' },
          { id: 19, name: '食品商品3', price: 28.9, originalPrice: 57.9, sales: 7788, img: '@/assets/lazy1.jpg' },
          { id: 20, name: '食品商品4', price: 38.9, originalPrice: 77.9, sales: 8899, img: '@/assets/lazy1.jpg' }
        ],
        6: [
          { id: 21, name: '居家商品1', price: 12.9, originalPrice: 25.9, sales: 9900, img: '@/assets/lazy1.jpg' },
          { id: 22, name: '居家商品2', price: 22.9, originalPrice: 45.9, sales: 1011, img: '@/assets/lazy1.jpg' },
          { id: 23, name: '居家商品3', price: 32.9, originalPrice: 65.9, sales: 1122, img: '@/assets/lazy1.jpg' },
          { id: 24, name: '居家商品4', price: 42.9, originalPrice: 85.9, sales: 1233, img: '@/assets/lazy1.jpg' }
        ]
      },
      myBargains: [
        { id: 1, name: '我爆料的商品1', price: 9.9, status: '审核中', img: '@/assets/lazy1.jpg' },
        { id: 2, name: '我爆料的商品2', price: 19.9, status: '已通过', img: '@/assets/lazy1.jpg' }
      ]
    }
  },
  computed: {
    currentProducts() {
      return this.products[this.currentCategory] || [];
    }
  },
  methods: {
    handleSearch() {
      // 搜索功能实现
      // console.log('搜索关键词:', this.searchKeyword);
    },
    viewAllBargains() {
      // 查看全部天天低价商品
      // console.log('查看全部天天低价商品');
    },
    switchCategory(categoryId) {
      this.currentCategory = categoryId;
    },
    viewProductDetail(productId) {
      // 查看商品详情
      // console.log('查看商品详情:', productId);
      this.$router.push(`/bargain/detail/${productId}`);
    },
    submitBargain() {
      // 我要爆料
      // console.log('我要爆料');
      this.$router.push('/bargain/submit');
    }
  }
};
</script>

<style lang="scss" scoped>
#bargainPage {
  padding-top: 60px;
  padding-bottom: 70px;
  background-color: #f5f5f5;
}

/* 搜索框样式 */
.search-box {
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  z-index: 100;
  
  input {
    flex: 1;
    height: 35px;
    border: none;
    border-radius: 17.5px;
    background-color: #f0f0f0;
    padding: 0 15px;
    font-size: 14px;
    
    &::placeholder {
      color: #999;
    }
  }
  
  .search-icon {
    position: absolute;
    right: 30px;
    color: #999;
    font-size: 16px;
  }
}

/* 天天低价样式 */
.daily-bargain {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 15px;
  
  .daily-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    
    h2 {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
    
    .view-all {
      background-color: #ff4444;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 4px 12px;
      font-size: 14px;
    }
  }
  
  .daily-products {
    display: flex;
    overflow-x: auto;
    
    .product-item {
      width: 120px;
      margin-right: 15px;
      flex-shrink: 0;
      
      img {
        width: 100%;
        height: 120px;
        border-radius: 8px;
        margin-bottom: 8px;
      }
      
      .product-info {
        h3 {
          font-size: 14px;
          color: #333;
          margin-bottom: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .price {
          font-size: 16px;
          color: #ff4444;
          font-weight: bold;
          margin-bottom: 2px;
        }
        
        .original-price {
          font-size: 12px;
          color: #999;
          text-decoration: line-through;
        }
      }
    }
  }
}

/* 分类表样式 */
.category-section {
  background-color: #fff;
  margin-bottom: 10px;
  
  .category-tabs {
    display: flex;
    overflow-x: auto;
    padding: 15px;
    border-bottom: 1px solid #f0f0f0;
    
    span {
      padding: 6px 12px;
      margin-right: 15px;
      font-size: 14px;
      color: #666;
      border-radius: 16px;
      flex-shrink: 0;
      
      &.active {
        background-color: #ff4444;
        color: #fff;
      }
    }
  }
  
  .category-products {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    
    .product-item {
      width: 50%;
      padding: 0 7.5px;
      margin-bottom: 15px;
      box-sizing: border-box;
      
      img {
        width: 100%;
        height: 160px;
        border-radius: 8px;
        margin-bottom: 8px;
      }
      
      .product-info {
        h3 {
          font-size: 14px;
          color: #333;
          margin-bottom: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        
        .price {
          font-size: 16px;
          color: #ff4444;
          font-weight: bold;
          margin-bottom: 2px;
        }
        
        .original-price {
          font-size: 12px;
          color: #999;
          text-decoration: line-through;
          margin-right: 8px;
        }
        
        .sales {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}

/* 我的爆料样式 */
.my-bargain {
  background-color: #fff;
  padding: 15px;
  
  .my-bargain-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    
    h2 {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
    
    .submit-bargain {
      background-color: #ff4444;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 4px 12px;
      font-size: 14px;
    }
  }
  
  .bargain-list {
    .bargain-item {
      display: flex;
      margin-bottom: 15px;
      
      img {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        margin-right: 15px;
      }
      
      .bargain-info {
        flex: 1;
        h3 {
          font-size: 14px;
          color: #333;
          margin-bottom: 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        
        .price {
          font-size: 16px;
          color: #ff4444;
          font-weight: bold;
          margin-bottom: 4px;
        }
        
        .status {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  
  .empty-bargain {
    text-align: center;
    padding: 30px 0;
    color: #999;
    font-size: 14px;
  }
}
</style>