<template>
  <div class="bargain-container">
    <Header title="特价商品"/>
    <!-- 搜索框 -->
    <div class="search-box">
      <input type="text" placeholder="搜索商品" v-model="searchKeyword" @keyup.enter="searchGoods">
      <button @click="searchGoods" class="btn">搜索</button>
    </div>

    <!-- 天天低价商品框 -->
    <div class="daily-bargain">
      <div class="daily-header">
        <h2>天天低价</h2>
        <button @click="viewAllBargains">查看全部</button>
      </div>
      <div class="daily-goods">
        <div class="goods-item" v-for="goods in dailyGoods" :key="goods.id" @click="viewGoodsDetail(goods.id)">
          <img :src="goods.image" :alt="goods.name">
          <div class="goods-info">
            <h3>{{ goods.name }}</h3>
            <p class="price">¥{{ goods.price }}</p>
            <p class="original-price">¥{{ goods.originalPrice }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 分类表 -->
    <div class="category-section">
      <div class="category-tabs">
        <button 
          v-for="category in categories" 
          :key="category.id" 
          :class="{ active: currentCategory === category.id }"
          @click="switchCategory(category.id)"
        >
          {{ category.name }}
        </button>
      </div>
      <div class="category-goods">
        <div class="goods-item" v-for="goods in currentCategoryGoods" :key="goods.id" @click="viewGoodsDetail(goods.id)">
          <img :src="goods.image" :alt="goods.name">
          <div class="goods-info">
            <h3>{{ goods.name }}</h3>
            <p class="price">¥{{ goods.price }}</p>
            <p class="original-price">¥{{ goods.originalPrice }}</p>
            <p class="sales-volume">已售{{ goods.salesVolume }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 我的爆料 -->
    <div class="my-bargain">
      <div class="my-bargain-header">
        <h2>我的爆料</h2>
        <button @click="addBargain">+ 发布爆料</button>
      </div>
      <div class="my-bargain-list" v-if="myBargainList.length > 0">
        <div class="bargain-item" v-for="bargain in myBargainList" :key="bargain.id">
          <img :src="bargain.image" :alt="bargain.name">
          <div class="bargain-info">
            <h3>{{ bargain.name }}</h3>
            <p class="price">¥{{ bargain.price }}</p>
            <p class="status">{{ bargain.status }}</p>
          </div>
        </div>
      </div>
      <div class="empty-bargain" v-else>
        <p>您还没有发布过爆料，快来分享您发现的低价商品吧！</p>
      </div>
    </div>

    <!-- 商品详情弹窗 -->
    <div class="goods-detail-modal" v-if="showDetailModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ selectedGoods.name }}</h2>
          <button @click="closeDetailModal">×</button>
        </div>
        <div class="modal-body">
          <img :src="selectedGoods.image" :alt="selectedGoods.name">
          <div class="goods-detail-info">
            <p class="price">¥{{ selectedGoods.price }}</p>
            <p class="original-price">¥{{ selectedGoods.originalPrice }}</p>
            <p class="description">{{ selectedGoods.description }}</p>
            <p class="sales-volume">已售{{ selectedGoods.salesVolume }}</p>
            <button class="buy-button">立即购买</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  name: 'Bargain',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      searchKeyword: '',
      currentCategory: 1,
      showDetailModal: false,
      selectedGoods: {},
      dailyGoods: [
        { id: 1, name: '特价商品1', price: 9.9, originalPrice: 19.9, image: 'https://via.placeholder.com/100', salesVolume: 1000 },
        { id: 2, name: '特价商品2', price: 19.9, originalPrice: 39.9, image: 'https://via.placeholder.com/100', salesVolume: 800 },
        { id: 3, name: '特价商品3', price: 29.9, originalPrice: 59.9, image: 'https://via.placeholder.com/100', salesVolume: 600 },
        { id: 4, name: '特价商品4', price: 39.9, originalPrice: 79.9, image: 'https://via.placeholder.com/100', salesVolume: 400 }
      ],
      categories: [
        { id: 1, name: '精选' },
        { id: 2, name: '24h最热' },
        { id: 3, name: '3h最热' },
        { id: 4, name: '好价活动' },
        { id: 5, name: '食品' },
        { id: 6, name: '居家' }
      ],
      allGoods: {
        1: [
          { id: 1, name: '精选商品1', price: 9.9, originalPrice: 19.9, image: 'https://via.placeholder.com/100', salesVolume: 1000, description: '这是一个精选商品的描述' },
          { id: 2, name: '精选商品2', price: 19.9, originalPrice: 39.9, image: 'https://via.placeholder.com/100', salesVolume: 800, description: '这是一个精选商品的描述' },
          { id: 3, name: '精选商品3', price: 29.9, originalPrice: 59.9, image: 'https://via.placeholder.com/100', salesVolume: 600, description: '这是一个精选商品的描述' },
          { id: 4, name: '精选商品4', price: 39.9, originalPrice: 79.9, image: 'https://via.placeholder.com/100', salesVolume: 400, description: '这是一个精选商品的描述' }
        ],
        2: [
          { id: 5, name: '24h最热商品1', price: 19.9, originalPrice: 39.9, image: 'https://via.placeholder.com/100', salesVolume: 2000, description: '这是一个24h最热商品的描述' },
          { id: 6, name: '24h最热商品2', price: 29.9, originalPrice: 59.9, image: 'https://via.placeholder.com/100', salesVolume: 1800, description: '这是一个24h最热商品的描述' }
        ],
        3: [
          { id: 7, name: '3h最热商品1', price: 9.9, originalPrice: 19.9, image: 'https://via.placeholder.com/100', salesVolume: 1500, description: '这是一个3h最热商品的描述' },
          { id: 8, name: '3h最热商品2', price: 39.9, originalPrice: 79.9, image: 'https://via.placeholder.com/100', salesVolume: 1200, description: '这是一个3h最热商品的描述' }
        ],
        4: [
          { id: 9, name: '好价活动商品1', price: 49.9, originalPrice: 99.9, image: 'https://via.placeholder.com/100', salesVolume: 900, description: '这是一个好价活动商品的描述' },
          { id: 10, name: '好价活动商品2', price: 59.9, originalPrice: 119.9, image: 'https://via.placeholder.com/100', salesVolume: 700, description: '这是一个好价活动商品的描述' }
        ],
        5: [
          { id: 11, name: '食品商品1', price: 15.9, originalPrice: 29.9, image: 'https://via.placeholder.com/100', salesVolume: 1100, description: '这是一个食品商品的描述' },
          { id: 12, name: '食品商品2', price: 25.9, originalPrice: 49.9, image: 'https://via.placeholder.com/100', salesVolume: 900, description: '这是一个食品商品的描述' }
        ],
        6: [
          { id: 13, name: '居家商品1', price: 69.9, originalPrice: 139.9, image: 'https://via.placeholder.com/100', salesVolume: 800, description: '这是一个居家商品的描述' },
          { id: 14, name: '居家商品2', price: 79.9, originalPrice: 159.9, image: 'https://via.placeholder.com/100', salesVolume: 600, description: '这是一个居家商品的描述' }
        ]
      },
      myBargainList: [
        { id: 1, name: '我爆料的商品1', price: 9.9, image: 'https://via.placeholder.com/100', status: '审核中' },
        { id: 2, name: '我爆料的商品2', price: 19.9, image: 'https://via.placeholder.com/100', status: '已通过' }
      ]
    }
  },
  computed: {
    currentCategoryGoods() {
      return this.allGoods[this.currentCategory] || []
    }
  },
  methods: {
    searchGoods() {
      // 这里可以添加搜索逻辑
    },
    viewAllBargains() {
      // 这里可以添加查看全部逻辑
    },
    switchCategory(categoryId) {
      this.currentCategory = categoryId
    },
    viewGoodsDetail(goodsId) {
      // 查找选中的商品
      let goods = null
      for (let category in this.allGoods) {
        goods = this.allGoods[category].find(item => item.id === goodsId)
        if (goods) break
      }
      if (goods) {
        this.selectedGoods = goods
        this.showDetailModal = true
      }
    },
    closeDetailModal() {
      this.showDetailModal = false
      this.selectedGoods = {}
    },
    addBargain() {
      // 这里可以添加发布爆料逻辑
    }
  }
}
</script>

<style lang="scss" scoped>
.bargain-container {
  padding: 20px;
  padding-top: 68px; // 为顶部导航栏留出空间
  padding-bottom: 80px; // 为底部导航栏留出空间
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 搜索框样式 */
.search-box {
  display: flex;
  margin-bottom: 20px;
  input {
    flex: 1;
    padding: 10px 15px;
    border: none;
    border-radius: 25px 0 0 25px;
    outline: none;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
  }
  .btn {
    border-radius: 0 25px 25px 0;
    padding: 10px 20px;
    font-size: 14px;
  }
}

/* 天天低价样式 */
.daily-bargain {
  margin-bottom: 30px;
  .daily-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    h2 {
      margin: 0;
      font-size: 20px;
      color: #fff;
      position: relative;
      padding-left: 15px;
    }
    h2::before {
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
    button {
      padding: 5px 10px;
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 4px;
      cursor: pointer;
      color: #fff;
      font-size: 14px;
    }
  }
  .daily-goods {
    display: flex;
    overflow-x: auto;
    .goods-item {
      flex-shrink: 0;
      width: 150px;
      margin-right: 15px;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
      padding: 10px;
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
      }
      img {
        width: 100%;
        height: 120px;
        object-fit: cover;
        border-radius: 8px;
      }
      .goods-info {
        padding: 5px 0;
        h3 {
          margin: 5px 0;
          font-size: 14px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .price {
          margin: 5px 0;
          font-size: 16px;
          color: #ff4d4f;
          font-weight: bold;
        }
        .original-price {
          margin: 5px 0;
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
  margin-bottom: 30px;
  .category-tabs {
    display: flex;
    overflow-x: auto;
    margin-bottom: 15px;
    button {
      flex-shrink: 0;
      padding: 8px 16px;
      margin-right: 10px;
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      cursor: pointer;
      color: #fff;
      font-size: 14px;
      transition: all 0.3s ease;
      &.active {
        background: linear-gradient(45deg, #ff6b6b, #ee5a24);
        color: white;
        border-color: transparent;
        box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3);
      }
    }
  }
  .category-goods {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
    .goods-item {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
      padding: 10px;
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
      }
      img {
        width: 100%;
        height: 120px;
        object-fit: cover;
        border-radius: 8px;
      }
      .goods-info {
        padding: 5px 0;
        h3 {
          margin: 5px 0;
          font-size: 14px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .price {
          margin: 5px 0;
          font-size: 16px;
          color: #ff4d4f;
          font-weight: bold;
        }
        .original-price {
          margin: 5px 0;
          font-size: 12px;
          color: #999;
          text-decoration: line-through;
        }
        .sales-volume {
          margin: 5px 0;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}

/* 我的爆料样式 */
.my-bargain {
  .my-bargain-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    h2 {
      margin: 0;
      font-size: 20px;
      color: #fff;
      position: relative;
      padding-left: 15px;
    }
    h2::before {
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
    .btn {
      padding: 5px 10px;
      font-size: 14px;
    }
  }
  .my-bargain-list {
    .bargain-item {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
      }
      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
        margin-right: 15px;
      }
      .bargain-info {
        flex: 1;
        h3 {
          margin: 5px 0;
          font-size: 14px;
          color: #333;
        }
        .price {
          margin: 5px 0;
          font-size: 16px;
          color: #ff4d4f;
          font-weight: bold;
        }
        .status {
          margin: 5px 0;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  .empty-bargain {
    text-align: center;
    padding: 40px 0;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(10px);
  }
}

/* 商品详情弹窗样式 */
.goods-detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  .modal-content {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    width: 90%;
    max-width: 500px;
    max-height: 80%;
    overflow-y: auto;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      h2 {
        margin: 0;
        font-size: 18px;
        color: #333;
      }
      button {
        background-color: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #999;
      }
    }
    .modal-body {
      padding: 15px;
      display: flex;
      flex-direction: column;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 15px;
      }
      .goods-detail-info {
        .price {
          margin: 5px 0;
          font-size: 20px;
          color: #ff4d4f;
          font-weight: bold;
        }
        .original-price {
          margin: 5px 0;
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
        }
        .description {
          margin: 15px 0;
          font-size: 14px;
          color: #333;
          line-height: 1.5;
        }
        .sales-volume {
          margin: 5px 0;
          font-size: 12px;
          color: #999;
        }
        .btn {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 16px;
          width: 100%;
        }
      }
    }
  }
}
</style>
