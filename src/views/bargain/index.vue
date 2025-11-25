<template>
  <div id="bargain">
    <Header title="特价"/>
    <div class="content">
      <!-- 搜索框 -->
      <div class="search-bar">
        <input type="text" placeholder="搜索特价商品" v-model="searchKeyword" @input="onSearch">
        <i class="iconfont icon-search"></i>
      </div>

      <!-- 天天低价商品框 -->
      <div class="daily-deals">
        <div class="daily-deals-header">
          <h2>天天低价</h2>
          <button class="view-all" @click="viewAllDeals">查看全部</button>
        </div>
        <div class="daily-deals-list">
          <div class="deal-item" v-for="item in dailyDeals" :key="item.id" @click="goToDetail(item.id)">
            <img :src="item.image" :alt="item.name">
            <div class="deal-info">
              <h3>{{ item.name }}</h3>
              <p class="price">¥{{ item.price }}</p>
              <p class="original-price">¥{{ item.originalPrice }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 分类表 -->
      <div class="category-tabs">
        <div class="category-tab" v-for="category in categories" :key="category.id" :class="{ active: currentCategory === category.id }" @click="switchCategory(category.id)">
          {{ category.name }}
        </div>
      </div>

      <!-- 商品列表 -->
      <div class="product-list">
        <div class="product-item" v-for="product in filteredProducts" :key="product.id" @click="goToDetail(product.id)">
          <img :src="product.image" :alt="product.name">
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p class="price">¥{{ product.price }}</p>
            <p class="original-price">¥{{ product.originalPrice }}</p>
            <p class="sales">已售{{ product.sales }}件</p>
          </div>
        </div>
      </div>

      <!-- 我的爆料板块 -->
      <div class="my-submissions">
        <div class="my-submissions-header">
          <h2>我的爆料</h2>
          <button class="submit-deal" @click="goToSubmit">发布爆料</button>
        </div>
        <div class="submissions-list" v-if="mySubmissions.length > 0">
          <div class="submission-item" v-for="item in mySubmissions" :key="item.id">
            <img :src="item.image" :alt="item.name">
            <div class="submission-info">
              <h3>{{ item.name }}</h3>
              <p class="price">¥{{ item.price }}</p>
              <p class="status">{{ item.status }}</p>
            </div>
          </div>
        </div>
        <div class="empty-submissions" v-else>
          <p>您还没有发布过爆料，快来分享您发现的低价商品吧！</p>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'BargainIndex',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      searchKeyword: '',
      currentCategory: 1,
      categories: [
        { id: 1, name: '精选' },
        { id: 2, name: '24h最热' },
        { id: 3, name: '3h最热' },
        { id: 4, name: '好价活动' },
        { id: 5, name: '食品' },
        { id: 6, name: '居家' }
      ],
      dailyDeals: [
        { id: 1, name: '特价商品1', price: 9.9, originalPrice: 19.9, image: '@/assets/lazy1.jpg' },
        { id: 2, name: '特价商品2', price: 19.9, originalPrice: 39.9, image: '@/assets/movie.jpg' },
        { id: 3, name: '特价商品3', price: 29.9, originalPrice: 59.9, image: '@/assets/CityHall.png' }
      ],
      allProducts: [
        { id: 1, name: '精选商品1', price: 19.9, originalPrice: 39.9, image: '@/assets/lazy1.jpg', sales: 100, category: 1 },
        { id: 2, name: '精选商品2', price: 29.9, originalPrice: 59.9, image: '@/assets/movie.jpg', sales: 200, category: 1 },
        { id: 3, name: '24h最热商品1', price: 9.9, originalPrice: 19.9, image: '@/assets/CityHall.png', sales: 300, category: 2 },
        { id: 4, name: '24h最热商品2', price: 39.9, originalPrice: 79.9, image: '@/assets/lazy1.jpg', sales: 400, category: 2 },
        { id: 5, name: '3h最热商品1', price: 14.9, originalPrice: 29.9, image: '@/assets/movie.jpg', sales: 500, category: 3 },
        { id: 6, name: '3h最热商品2', price: 49.9, originalPrice: 99.9, image: '@/assets/CityHall.png', sales: 600, category: 3 },
        { id: 7, name: '好价活动商品1', price: 24.9, originalPrice: 49.9, image: '@/assets/lazy1.jpg', sales: 700, category: 4 },
        { id: 8, name: '好价活动商品2', price: 59.9, originalPrice: 119.9, image: '@/assets/movie.jpg', sales: 800, category: 4 },
        { id: 9, name: '食品商品1', price: 12.9, originalPrice: 25.9, image: '@/assets/CityHall.png', sales: 900, category: 5 },
        { id: 10, name: '食品商品2', price: 34.9, originalPrice: 69.9, image: '@/assets/lazy1.jpg', sales: 1000, category: 5 },
        { id: 11, name: '居家商品1', price: 49.9, originalPrice: 99.9, image: '@/assets/movie.jpg', sales: 1100, category: 6 },
        { id: 12, name: '居家商品2', price: 79.9, originalPrice: 159.9, image: '@/assets/CityHall.png', sales: 1200, category: 6 }
      ],
      mySubmissions: []
    }
  },
  computed: {
    filteredProducts() {
      let products = this.allProducts.filter(product => product.category === this.currentCategory);
      if (this.searchKeyword) {
        products = products.filter(product => product.name.includes(this.searchKeyword));
      }
      return products;
    }
  },
  methods: {
    onSearch() {
      // 搜索逻辑
    },
    viewAllDeals() {
      // 查看全部天天低价商品
      this.currentCategory = 1;
    },
    switchCategory(categoryId) {
      this.currentCategory = categoryId;
    },
    goToDetail(productId) {
      this.$router.push(`/bargain/detail/${productId}`);
    },
    goToSubmit() {
      this.$router.push('/bargain/submit');
    }
  }
}
</script>

<style lang="scss" scoped>
#bargain {
  .content {
    padding-top: 40px;
    padding-bottom: 60px;

    .search-bar {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: #f5f5f5;
      position: relative;

      input {
        width: 100%;
        padding: 8px 30px 8px 10px;
        border: none;
        border-radius: 20px;
        background-color: #fff;
        font-size: 14px;
      }

      i {
        position: absolute;
        right: 20px;
        color: #999;
        font-size: 16px;
      }
    }

    .daily-deals {
      padding: 10px;
      background-color: #fff;
      margin-bottom: 10px;

      .daily-deals-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        h2 {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        .view-all {
          padding: 5px 10px;
          background-color: #ff6b6b;
          color: #fff;
          border: none;
          border-radius: 15px;
          font-size: 14px;
        }
      }

      .daily-deals-list {
        display: flex;
        overflow-x: auto;

        .deal-item {
          flex-shrink: 0;
          width: 120px;
          margin-right: 10px;
          cursor: pointer;

          img {
            width: 100%;
            height: 120px;
            object-fit: cover;
            border-radius: 8px;
          }

          .deal-info {
            h3 {
              font-size: 14px;
              margin: 5px 0;
              color: #333;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .price {
              font-size: 16px;
              color: #ff6b6b;
              font-weight: bold;
              margin: 0;
            }

            .original-price {
              font-size: 12px;
              color: #999;
              text-decoration: line-through;
              margin: 0;
            }
          }
        }
      }
    }

    .category-tabs {
      display: flex;
      overflow-x: auto;
      padding: 10px;
      background-color: #fff;
      margin-bottom: 10px;
      border-bottom: 1px solid #f0f0f0;

      .category-tab {
        flex-shrink: 0;
        padding: 8px 15px;
        margin-right: 10px;
        background-color: #f5f5f5;
        border-radius: 20px;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s;

        &.active {
          background-color: #ff6b6b;
          color: #fff;
        }
      }
    }

    .product-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      padding: 10px;
      background-color: #f5f5f5;

      .product-item {
        background-color: #fff;
        border-radius: 8px;
        overflow: hidden;
        cursor: pointer;

        img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .product-info {
          padding: 10px;

          h3 {
            font-size: 14px;
            margin: 0 0 5px 0;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .price {
            font-size: 16px;
            color: #ff6b6b;
            font-weight: bold;
            margin: 0 0 2px 0;
          }

          .original-price {
            font-size: 12px;
            color: #999;
            text-decoration: line-through;
            margin: 0 0 2px 0;
          }

          .sales {
            font-size: 12px;
            color: #999;
            margin: 0;
          }
        }
      }
    }

    .my-submissions {
      padding: 10px;
      background-color: #fff;
      margin-bottom: 10px;

      .my-submissions-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        h2 {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        .submit-deal {
          padding: 5px 10px;
          background-color: #ff6b6b;
          color: #fff;
          border: none;
          border-radius: 15px;
          font-size: 14px;
        }
      }

      .submissions-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        .submission-item {
          background-color: #f5f5f5;
          border-radius: 8px;
          overflow: hidden;

          img {
            width: 100%;
            height: 120px;
            object-fit: cover;
          }

          .submission-info {
            padding: 8px;

            h3 {
              font-size: 14px;
              margin: 0 0 5px 0;
              color: #333;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }

            .price {
              font-size: 16px;
              color: #ff6b6b;
              font-weight: bold;
              margin: 0 0 2px 0;
            }

            .status {
              font-size: 12px;
              color: #999;
              margin: 0;
            }
          }
        }
      }

      .empty-submissions {
        text-align: center;
        padding: 20px;
        color: #999;
      }
    }
  }
}

.search-bar input {
  width: 100%;
  padding: 8px 30px 8px 10px;
  border: none;
  border-radius: 20px;
  background-color: #fff;
  font-size: 14px;
}

.search-bar i {
  position: absolute;
  right: 20px;
  color: #999;
  font-size: 16px;
}

.daily-deals {
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
}

.daily-deals-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.daily-deals-header h2 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.view-all {
  padding: 5px 10px;
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: 14px;
}

.daily-deals-list {
  display: flex;
  overflow-x: auto;
}

.deal-item {
  flex-shrink: 0;
  width: 120px;
  margin-right: 10px;
  cursor: pointer;
}

.deal-item img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.deal-info h3 {
  font-size: 14px;
  margin: 5px 0;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.deal-info .price {
  font-size: 16px;
  color: #ff6b6b;
  font-weight: bold;
  margin: 0;
}

.deal-info .original-price {
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
  margin: 0;
}

.category-tabs {
  display: flex;
  overflow-x: auto;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}

.category-tab {
  flex-shrink: 0;
  padding: 8px 15px;
  margin-right: 10px;
  background-color: #f5f5f5;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.category-tab.active {
  background-color: #ff6b6b;
  color: #fff;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 10px;
  background-color: #f5f5f5;
}

.product-item {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.product-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.product-info {
  padding: 10px;
}

.product-info h3 {
  font-size: 14px;
  margin: 0 0 5px 0;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-info .price {
  font-size: 16px;
  color: #ff6b6b;
  font-weight: bold;
  margin: 0 0 2px 0;
}

.product-info .original-price {
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
  margin: 0 0 2px 0;
}

.product-info .sales {
  font-size: 12px;
  color: #999;
  margin: 0;
}

.my-submissions {
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
}

.my-submissions-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.my-submissions-header h2 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.submit-deal {
  padding: 5px 10px;
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: 14px;
}

.submissions-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.submission-item {
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
}

.submission-item img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.submission-info {
  padding: 8px;
}

.submission-info h3 {
  font-size: 14px;
  margin: 0 0 5px 0;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.submission-info .price {
  font-size: 16px;
  color: #ff6b6b;
  font-weight: bold;
  margin: 0 0 2px 0;
}

.submission-info .status {
  font-size: 12px;
  color: #999;
  margin: 0;
}

.empty-submissions {
  text-align: center;
  padding: 20px;
  color: #999;
}
</style>