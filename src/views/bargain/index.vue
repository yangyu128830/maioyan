<template>
  <div id="bargain">
    <Header title="特价">
      <div class="header-right">
        <i class="iconfont icon-message" @click="showMessage"></i>
        <i class="iconfont icon-person" @click="goToPerson"></i>
      </div>
    </Header>
    
    <!-- 搜索框 -->
    <div class="search-section">
      <div class="search-bar">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜索特价商品" v-model="searchKeyword" @input="onSearch">
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="banner-section">
      <img src="@/assets/movie.jpg" alt="特价活动 banner" class="banner-image">
    </div>

    <!-- 天天低价商品框 -->
    <div class="daily-deals-section">
      <div class="section-header">
        <h2>天天低价</h2>
        <span class="more" @click="viewAllDeals">查看全部 ></span>
      </div>
      <div class="daily-deals-list">
        <div class="deal-item" v-for="item in dailyDeals" :key="item.id" @click="goToDetail(item.id)">
          <div class="deal-image-wrapper">
            <img :src="item.image" :alt="item.name" class="deal-image">
            <div class="discount-tag">
              {{ Math.round((1 - item.price / item.originalPrice) * 100) }}折
            </div>
          </div>
          <div class="deal-info">
            <h3 class="deal-name">{{ item.name }}</h3>
            <div class="price-section">
              <span class="current-price">¥{{ item.price }}</span>
              <span class="original-price">¥{{ item.originalPrice }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 分类表 -->
    <div class="category-section">
      <div class="category-tabs">
        <div class="category-tab" v-for="category in categories" :key="category.id" :class="{ active: currentCategory === category.id }" @click="switchCategory(category.id)">
          {{ category.name }}
        </div>
      </div>
    </div>

    <!-- 商品列表 -->
    <div class="product-section">
      <div class="product-list">
        <div class="product-item" v-for="product in filteredProducts" :key="product.id" @click="goToDetail(product.id)">
          <div class="product-image-wrapper">
            <img :src="product.image" :alt="product.name" class="product-image">
            <div class="sales-tag" v-if="product.sales > 0">
              已售{{ product.sales }}件
            </div>
          </div>
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <div class="price-section">
              <span class="current-price">¥{{ product.price }}</span>
              <span class="original-price">¥{{ product.originalPrice }}</span>
            </div>
            <div class="sales-info">
              <span class="sales-count">已售{{ product.sales }}件</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 我的爆料板块 -->
    <div class="submissions-section">
      <div class="section-header">
        <h2>我的爆料</h2>
        <button class="submit-btn" @click="goToSubmit">发布爆料</button>
      </div>
      <div class="submissions-list" v-if="mySubmissions.length > 0">
        <div class="submission-item" v-for="item in mySubmissions" :key="item.id">
          <div class="submission-image-wrapper">
            <img :src="item.image" :alt="item.name" class="submission-image">
          </div>
          <div class="submission-info">
            <h3 class="submission-name">{{ item.name }}</h3>
            <div class="price-section">
              <span class="current-price">¥{{ item.price }}</span>
            </div>
            <div class="status-section">
              <span class="status-tag" :class="item.status">{{ item.status }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="empty-submissions" v-else>
        <div class="empty-icon">
          <i class="iconfont icon-plus"></i>
        </div>
        <p class="empty-text">您还没有发布过爆料</p>
        <p class="empty-desc">快来分享您发现的低价商品吧！</p>
        <button class="empty-submit-btn" @click="goToSubmit">发布第一条爆料</button>
      </div>
    </div>
    
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";

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
        { id: 6, name: '居家' },
        { id: 7, name: '数码' },
        { id: 8, name: '美妆' }
      ],
      dailyDeals: [
        { id: 1, name: '精选零食大礼包', price: 9.9, originalPrice: 19.9, image: '@/assets/lazy1.jpg' },
        { id: 2, name: '优质纯棉T恤', price: 19.9, originalPrice: 39.9, image: '@/assets/movie.jpg' },
        { id: 3, name: '时尚运动鞋', price: 29.9, originalPrice: 59.9, image: '@/assets/CityHall.png' },
        { id: 4, name: '美味巧克力', price: 14.9, originalPrice: 29.9, image: '@/assets/lazy1.jpg' }
      ],
      allProducts: [
        { id: 1, name: '精选零食大礼包', price: 19.9, originalPrice: 39.9, image: '@/assets/lazy1.jpg', sales: 1234, category: 1 },
        { id: 2, name: '优质纯棉T恤', price: 29.9, originalPrice: 59.9, image: '@/assets/movie.jpg', sales: 2345, category: 1 },
        { id: 3, name: '时尚运动鞋', price: 99.9, originalPrice: 199.9, image: '@/assets/CityHall.png', sales: 3456, category: 1 },
        { id: 4, name: '美味巧克力', price: 24.9, originalPrice: 49.9, image: '@/assets/lazy1.jpg', sales: 4567, category: 1 },
        { id: 5, name: '24h热卖手机壳', price: 9.9, originalPrice: 19.9, image: '@/assets/movie.jpg', sales: 5678, category: 2 },
        { id: 6, name: '爆款蓝牙耳机', price: 39.9, originalPrice: 79.9, image: '@/assets/CityHall.png', sales: 6789, category: 2 },
        { id: 7, name: '3h新品面膜', price: 14.9, originalPrice: 29.9, image: '@/assets/lazy1.jpg', sales: 7890, category: 3 },
        { id: 8, name: '限时优惠洗发水', price: 49.9, originalPrice: 99.9, image: '@/assets/movie.jpg', sales: 8901, category: 3 },
        { id: 9, name: '好价活动洗衣液', price: 24.9, originalPrice: 49.9, image: '@/assets/CityHall.png', sales: 9012, category: 4 },
        { id: 10, name: '超值卫生纸', price: 59.9, originalPrice: 119.9, image: '@/assets/lazy1.jpg', sales: 10123, category: 4 },
        { id: 11, name: '健康有机食品', price: 12.9, originalPrice: 25.9, image: '@/assets/movie.jpg', sales: 11234, category: 5 },
        { id: 12, name: '美味坚果组合', price: 34.9, originalPrice: 69.9, image: '@/assets/CityHall.png', sales: 12345, category: 5 },
        { id: 13, name: '居家必备收纳盒', price: 49.9, originalPrice: 99.9, image: '@/assets/lazy1.jpg', sales: 13456, category: 6 },
        { id: 14, name: '舒适床上四件套', price: 79.9, originalPrice: 159.9, image: '@/assets/movie.jpg', sales: 14567, category: 6 },
        { id: 15, name: '最新款智能手机', price: 2999, originalPrice: 3999, image: '@/assets/CityHall.png', sales: 15678, category: 7 },
        { id: 16, name: '高性能笔记本电脑', price: 5999, originalPrice: 7999, image: '@/assets/lazy1.jpg', sales: 16789, category: 7 },
        { id: 17, name: '名牌口红套装', price: 199, originalPrice: 399, image: '@/assets/movie.jpg', sales: 17890, category: 8 },
        { id: 18, name: '高端护肤品礼盒', price: 499, originalPrice: 999, image: '@/assets/CityHall.png', sales: 18901, category: 8 }
      ],
      mySubmissions: [
        { id: 1, name: '我发布的特价商品1', price: 19.9, originalPrice: 39.9, image: '@/assets/lazy1.jpg', status: '审核中' },
        { id: 2, name: '我发布的特价商品2', price: 29.9, originalPrice: 59.9, image: '@/assets/movie.jpg', status: '已通过' }
      ]
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
      // eslint-disable-next-line no-console
      console.log('搜索关键词:', this.searchKeyword);
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
    },
    goToPerson() {
      this.$router.push('/person');
    },
    showMessage() {
      // 显示消息
      alert('消息功能开发中...');
    }
  }
}
</script>

<style lang="scss" scoped>
#bargain {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
}

.content {
  flex: 1;
  overflow-y: auto;
  padding-top: 40px;
  padding-bottom: 60px;
}

/* Header 样式 */
.header-right {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}

.header-right i {
  color: #fff;
  font-size: 20px;
  margin-left: 15px;
  cursor: pointer;
}

/* 搜索框样式 */
.search-section {
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-bar {
  display: flex;
  align-items: center;
  padding: 8px 15px;
  background-color: #f5f5f5;
  border-radius: 25px;
}

.search-bar i {
  color: #999;
  font-size: 16px;
  margin-right: 10px;
}

.search-bar input {
  flex: 1;
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: #333;
}

.search-bar input::placeholder {
  color: #999;
}

/* 轮播图样式 */
.banner-section {
  margin-bottom: 10px;
}

.banner-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

/* 天天低价样式 */
.daily-deals-section {
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.section-header h2 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.section-header .more {
  color: red;
  font-size: 14px;
  cursor: pointer;
}

.daily-deals-list {
  display: flex;
  overflow-x: auto;
  padding-bottom: 10px;
}

.deal-item {
  flex-shrink: 0;
  width: 140px;
  margin-right: 15px;
  cursor: pointer;
}

.deal-image-wrapper {
  position: relative;
  margin-bottom: 10px;
}

.deal-image {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
}

.discount-tag {
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: red;
  color: #fff;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: bold;
}

.deal-info {
  padding: 0 5px;
}

.deal-name {
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.price-section {
  display: flex;
  align-items: baseline;
}

.current-price {
  font-size: 16px;
  color: red;
  font-weight: bold;
  margin-right: 5px;
}

.original-price {
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
}

/* 分类标签样式 */
.category-section {
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.category-tabs {
  display: flex;
  overflow-x: auto;
  padding-bottom: 10px;
}

.category-tab {
  flex-shrink: 0;
  padding: 8px 15px;
  margin-right: 10px;
  font-size: 14px;
  color: #333;
  border-radius: 20px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s;
}

.category-tab.active {
  background-color: red;
  color: #fff;
}

/* 商品列表样式 */
.product-section {
  padding: 0 10px;
  margin-bottom: 10px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-item {
  width: calc(50% - 5px);
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s;
}

.product-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.product-image-wrapper {
  position: relative;
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.sales-tag {
  position: absolute;
  bottom: 5px;
  right: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
}

.product-info {
  padding: 10px;
}

.product-name {
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.sales-info {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}

.sales-count {
  font-size: 12px;
  color: #999;
}

/* 我的爆料样式 */
.submissions-section {
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.submit-btn {
  padding: 6px 12px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  cursor: pointer;
}

.submissions-list {
  margin-bottom: 10px;
}

.submission-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.submission-item:last-child {
  border-bottom: none;
}

.submission-image-wrapper {
  margin-right: 15px;
}

.submission-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.submission-info {
  flex: 1;
}

.submission-name {
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.status-section {
  margin-top: 5px;
}

.status-tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

.status-tag.审核中 {
  background-color: #ffc107;
  color: #fff;
}

.status-tag.已通过 {
  background-color: #28a745;
  color: #fff;
}

.status-tag.已拒绝 {
  background-color: #dc3545;
  color: #fff;
}

.empty-submissions {
  text-align: center;
  padding: 40px 20px;
}

.empty-icon {
  width: 60px;
  height: 60px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.empty-icon i {
  font-size: 30px;
  color: #999;
}

.empty-text {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
}

.empty-desc {
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
}

.empty-submit-btn {
  padding: 10px 20px;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  cursor: pointer;
}
</style>