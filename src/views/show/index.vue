<template>
  <div id="show">
    <Header title="电影演出" />
    <!-- 顶部分类导航 -->
    <div class="category-nav">
      <ul>
        <li :class="{ active: activeCategory === 'movie' }" @click="switchCategory('movie')">
          电影
        </li>
        <li :class="{ active: activeCategory === 'concert' }" @click="switchCategory('concert')">
          演唱会
        </li>
        <li :class="{ active: activeCategory === 'performance' }" @click="switchCategory('performance')">
          演出
        </li>
        <li :class="{ active: activeCategory === 'talkshow' }" @click="switchCategory('talkshow')">
          脱口秀
        </li>
      </ul>
    </div>
    
    <!-- 内容区域 -->
    <div class="content">
      <!-- 电影分类内容 -->
      <div v-if="activeCategory === 'movie'" class="category-content">
        <!-- 热门电影演出 -->
        <section class="section">
          <h3 class="section-title">热门电影演出</h3>
          <div class="show-list">
            <div class="show-item" v-for="item in hotMovies" :key="item.id">
              <div class="show-img">
                <img :src="item.img | imgFormat('128.180')" :alt="item.nm">
              </div>
              <div class="show-info">
                <h4>{{ item.nm }}</h4>
                <p class="show-score">评分: {{ item.sc !== 0 ? item.sc : '暂无评分' }}</p>
                <p class="show-star">主演: {{ item.star }}</p>
                <p class="show-time">{{ item.showInfo }}</p>
              </div>
              <div class="show-buy">
                <button>立即购票</button>
              </div>
            </div>
          </div>
        </section>
        
        <!-- 待映电影 -->
        <section class="section">
          <h3 class="section-title">待映电影</h3>
          <div class="show-list">
            <div class="show-item" v-for="item in upcomingMovies" :key="item.id">
              <div class="show-img">
                <img :src="item.img | imgFormat('128.180')" :alt="item.nm">
                <div class="coming-soon">即将上映</div>
              </div>
              <div class="show-info">
                <h4>{{ item.nm }}</h4>
                <p class="show-star">主演: {{ item.star }}</p>
                <p class="show-release">上映时间: {{ item.rt }}</p>
              </div>
              <div class="show-buy">
                <button class="preorder">预约</button>
              </div>
            </div>
          </div>
        </section>
        
        <!-- 热门推荐 -->
        <section class="section">
          <h3 class="section-title">热门推荐</h3>
          <div class="recommend-list">
            <div class="recommend-item" v-for="item in movieRecommendations" :key="item.id">
              <img :src="item.img | imgFormat('200.280')" :alt="item.nm">
              <div class="recommend-overlay">
                <h4>{{ item.nm }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <!-- 演唱会分类内容 -->
      <div v-if="activeCategory === 'concert'" class="category-content">
        <section class="section">
          <h3 class="section-title">热门演唱会</h3>
          <div class="show-list">
            <div class="show-item" v-for="item in concerts" :key="item.id">
              <div class="show-img">
                <img :src="item.img | imgFormat('128.180')" :alt="item.nm">
              </div>
              <div class="show-info">
                <h4>{{ item.nm }}</h4>
                <p class="show-artist">艺人: {{ item.artist }}</p>
                <p class="show-time">{{ item.time }}</p>
                <p class="show-location">{{ item.location }}</p>
              </div>
              <div class="show-buy">
                <button>立即购票</button>
              </div>
            </div>
          </div>
        </section>
        
        <section class="section">
          <h3 class="section-title">热门推荐</h3>
          <div class="recommend-list">
            <div class="recommend-item" v-for="item in concertRecommendations" :key="item.id">
              <img :src="item.img | imgFormat('200.280')" :alt="item.nm">
              <div class="recommend-overlay">
                <h4>{{ item.nm }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <!-- 演出分类内容 -->
      <div v-if="activeCategory === 'performance'" class="category-content">
        <section class="section">
          <h3 class="section-title">热门演出</h3>
          <div class="show-list">
            <div class="show-item" v-for="item in performances" :key="item.id">
              <div class="show-img">
                <img :src="item.img | imgFormat('128.180')" :alt="item.nm">
              </div>
              <div class="show-info">
                <h4>{{ item.nm }}</h4>
                <p class="show-type">{{ item.type }}</p>
                <p class="show-time">{{ item.time }}</p>
                <p class="show-location">{{ item.location }}</p>
              </div>
              <div class="show-buy">
                <button>立即购票</button>
              </div>
            </div>
          </div>
        </section>
        
        <section class="section">
          <h3 class="section-title">热门推荐</h3>
          <div class="recommend-list">
            <div class="recommend-item" v-for="item in performanceRecommendations" :key="item.id">
              <img :src="item.img | imgFormat('200.280')" :alt="item.nm">
              <div class="recommend-overlay">
                <h4>{{ item.nm }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <!-- 脱口秀分类内容 -->
      <div v-if="activeCategory === 'talkshow'" class="category-content">
        <section class="section">
          <h3 class="section-title">热门脱口秀</h3>
          <div class="show-list">
            <div class="show-item" v-for="item in talkshows" :key="item.id">
              <div class="show-img">
                <img :src="item.img | imgFormat('128.180')" :alt="item.nm">
              </div>
              <div class="show-info">
                <h4>{{ item.nm }}</h4>
                <p class="show-actor">{{ item.actor }}</p>
                <p class="show-time">{{ item.time }}</p>
                <p class="show-location">{{ item.location }}</p>
              </div>
              <div class="show-buy">
                <button>立即购票</button>
              </div>
            </div>
          </div>
        </section>
        
        <section class="section">
          <h3 class="section-title">热门推荐</h3>
          <div class="recommend-list">
            <div class="recommend-item" v-for="item in talkshowRecommendations" :key="item.id">
              <img :src="item.img | imgFormat('200.280')" :alt="item.nm">
              <div class="recommend-overlay">
                <h4>{{ item.nm }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <!-- 新电影推荐广告 -->
      <section class="section ad-section">
        <h3 class="section-title">新片推荐</h3>
        <div class="ad-banner">
            <img :src="adBanner.img" :alt="adBanner.title">
            <div class="ad-info">
              <h3>{{ adBanner.title }}</h3>
              <p>{{ adBanner.desc }}</p>
              <button>立即购票</button>
            </div>
          </div>
      </section>
      
      <!-- 优惠团购 -->
      <section class="section">
        <h3 class="section-title">优惠团购</h3>
        <div class="group-buy-list">
          <div class="group-buy-item" v-for="item in groupBuys" :key="item.id">
            <div class="group-buy-img">
              <img :src="item.img | imgFormat('150.150')" :alt="item.title">
            </div>
            <div class="group-buy-info">
              <h4>{{ item.title }}</h4>
              <p class="group-buy-desc">{{ item.desc }}</p>
              <div class="group-buy-price">
                <span class="price">¥{{ item.price }}</span>
                <span class="original-price">¥{{ item.originalPrice }}</span>
                <span class="discount">{{ item.discount }}折</span>
              </div>
              <p class="group-buy-people">{{ item.people }}人已购买</p>
            </div>
            <div class="group-buy-btn">
              <button>立即抢购</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  name: "show",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeCategory: 'movie', // 默认显示电影分类
      // 电影数据
      hotMovies: [],
      upcomingMovies: [],
      movieRecommendations: [],
      // 演唱会数据
      concerts: [],
      concertRecommendations: [],
      // 演出数据
      performances: [],
      performanceRecommendations: [],
      // 脱口秀数据
      talkshows: [],
      talkshowRecommendations: [],
      // 广告和团购数据
      adBanner: {},
      groupBuys: []
    };
  },
  methods: {
    // 切换分类
    switchCategory(category) {
      this.activeCategory = category;
      // 根据分类加载对应数据
      this.loadCategoryData(category);
    },
    
    // 加载分类数据
    loadCategoryData(category) {
      const cityId = this.$store.state.city.id;
      
      switch (category) {
        case 'movie':
          this.loadMovieData(cityId);
          break;
        case 'concert':
          this.loadConcertData();
          break;
        case 'performance':
          this.loadPerformanceData();
          break;
        case 'talkshow':
          this.loadTalkshowData();
          break;
      }
    },
    
    // 加载电影数据
    loadMovieData(cityId) {
      // 加载热门电影
      this.axios.get(`/api/movieOnInfoList?cityId=${cityId}`)
        .then(res => {
          if (res.status === 200) {
            this.hotMovies = res.data.data.movieList;
          }
        })
        .catch(() => {
          // 获取热门电影失败
        });
      
      // 加载待映电影
      this.axios.get(`/api/movieComingList?cityId=${cityId}&pageNum=1&pageSize=10`)
        .then(res => {
          if (res.status === 200) {
            this.upcomingMovies = res.data.data.movieList;
          }
        })
        .catch(() => {
          // 获取待映电影失败
        });
      
      // 模拟热门推荐数据
      this.movieRecommendations = [
        {
          id: 1,
          nm: '复仇者联盟4',
          img: 'https://p0.meituan.net/w.h/movie/128.180/1234567890.jpg',
          desc: '终局之战，不容错过'
        },
        {
          id: 2,
          nm: '流浪地球',
          img: 'https://p0.meituan.net/w.h/movie/128.180/0987654321.jpg',
          desc: '中国科幻电影的里程碑'
        }
      ];
    },
    
    // 加载演唱会数据
    loadConcertData() {
      // 模拟演唱会数据
      this.concerts = [
        {
          id: 1,
          nm: '周杰伦演唱会',
          img: 'https://p0.meituan.net/w.h/concert/128.180/1122334455.jpg',
          artist: '周杰伦',
          time: '2023-12-25 19:30',
          location: '上海体育场'
        },
        {
          id: 2,
          nm: '林俊杰演唱会',
          img: 'https://p0.meituan.net/w.h/concert/128.180/2233445566.jpg',
          artist: '林俊杰',
          time: '2023-12-30 19:30',
          location: '北京鸟巢'
        }
      ];
      
      this.concertRecommendations = [
        {
          id: 1,
          nm: '周杰伦演唱会',
          img: 'https://p0.meituan.net/w.h/concert/200.280/1122334455.jpg',
          desc: '地表最强演唱会，震撼来袭'
        }
      ];
    },
    
    // 加载演出数据
    loadPerformanceData() {
      // 模拟演出数据
      this.performances = [
        {
          id: 1,
          nm: '开心麻花舞台剧',
          img: 'https://p0.meituan.net/w.h/performance/128.180/3344556677.jpg',
          type: '舞台剧',
          time: '2023-12-20 19:30',
          location: '上海话剧艺术中心'
        },
        {
          id: 2,
          nm: '民族音乐会',
          img: 'https://p0.meituan.net/w.h/performance/128.180/4455667788.jpg',
          type: '音乐会',
          time: '2023-12-22 19:30',
          location: '国家大剧院'
        }
      ];
      
      this.performanceRecommendations = [
        {
          id: 1,
          nm: '开心麻花舞台剧',
          img: 'https://p0.meituan.net/w.h/performance/200.280/3344556677.jpg',
          desc: '爆笑舞台剧，让你笑到停不下来'
        }
      ];
    },
    
    // 加载脱口秀数据
    loadTalkshowData() {
      // 模拟脱口秀数据
      this.talkshows = [
        {
          id: 1,
          nm: '李诞脱口秀专场',
          img: 'https://p0.meituan.net/w.h/talkshow/128.180/5566778899.jpg',
          actor: '李诞',
          time: '2023-12-18 19:30',
          location: '上海文化广场'
        },
        {
          id: 2,
          nm: '池子脱口秀',
          img: 'https://p0.meituan.net/w.h/talkshow/128.180/6677889900.jpg',
          actor: '池子',
          time: '2023-12-28 19:30',
          location: '北京展览馆'
        }
      ];
      
      this.talkshowRecommendations = [
        {
          id: 1,
          nm: '李诞脱口秀专场',
          img: 'https://p0.meituan.net/w.h/talkshow/200.280/5566778899.jpg',
          desc: '李诞带你领略脱口秀的魅力'
        }
      ];
    },
    
    // 加载广告和团购数据
    loadAdAndGroupBuyData() {
      // 模拟广告数据
      this.adBanner = {
        img: 'https://p0.meituan.net/w.h/ad/600.200/7788990011.jpg',
        title: '新片推荐：阿凡达2',
        desc: '震撼视觉效果，不容错过'
      };
      
      // 模拟团购数据
      this.groupBuys = [
        {
          id: 1,
          title: '电影票双人套票',
          img: 'https://p0.meituan.net/w.h/groupbuy/150.150/8899001122.jpg',
          desc: '两张电影票+两份可乐+一份爆米花',
          price: 99,
          originalPrice: 199,
          discount: 5,
          people: 1234
        },
        {
          id: 2,
          title: '演唱会门票优惠',
          img: 'https://p0.meituan.net/w.h/groupbuy/150.150/9900112233.jpg',
          desc: '周杰伦演唱会门票，立减100元',
          price: 499,
          originalPrice: 599,
          discount: 8.3,
          people: 5678
        }
      ];
    }
  },
  // 页面加载时获取数据
  mounted() {
    this.loadCategoryData(this.activeCategory);
    this.loadAdAndGroupBuyData();
  },
  // 图片格式化过滤器
  filters: {
    imgFormat: (data, arg) => {
      return data.replace(/w\.h/, arg);
    }
  }
};
</script>

<style lang="scss" scoped>
#show {
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .category-nav {
    position: fixed;
    top: 40px;
    left: 0;
    width: 100%;
    height: 44px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    z-index: 999;
    
    ul {
      display: flex;
      height: 100%;
      
      li {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #333;
        position: relative;
        
        &.active {
          color: #ff4d4f;
          
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 24px;
            height: 2px;
            background-color: #ff4d4f;
          }
        }
      }
    }
  }
  
  .content {
    flex: 1;
    margin-top: 84px;
    margin-bottom: 60px;
    overflow-y: auto;
    
    .section {
      margin-bottom: 20px;
      
      .section-title {
        font-size: 18px;
        font-weight: bold;
        color: #333;
        padding: 12px 15px;
        margin-bottom: 10px;
      }
    }
    
    .show-list {
      padding: 0 15px;
      
      .show-item {
        display: flex;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #f0f0f0;
        
        &:last-child {
          border-bottom: none;
        }
        
        .show-img {
          width: 80px;
          height: 112px;
          position: relative;
          margin-right: 12px;
          
          img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
          
          .coming-soon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.7);
            color: #fff;
            font-size: 12px;
            padding: 4px 8px;
            border-radius: 4px;
          }
        }
        
        .show-info {
          flex: 1;
          
          h4 {
            font-size: 16px;
            color: #333;
            margin-bottom: 6px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          
          p {
            font-size: 12px;
            color: #666;
            margin-bottom: 4px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            
            &.show-score {
              color: #ffb400;
            }
          }
        }
        
        .show-buy {
          
          button {
            width: 60px;
            height: 32px;
            background-color: #ff4d4f;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 12px;
            
            &.preorder {
              background-color: #ffa940;
            }
          }
        }
      }
    }
    
    .recommend-list {
      display: flex;
      overflow-x: auto;
      padding: 0 15px;
      
      .recommend-item {
        width: 140px;
        margin-right: 12px;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        
        img {
          width: 100%;
          height: 196px;
          object-fit: cover;
        }
        
        .recommend-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          padding: 12px 8px;
          
          h4 {
            font-size: 14px;
            color: #fff;
            margin-bottom: 4px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          
          p {
            font-size: 12px;
            color: #f0f0f0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    
    .ad-section {
      
      .ad-banner {
        position: relative;
        margin: 0 15px;
        border-radius: 8px;
        overflow: hidden;
        
        img {
          width: 100%;
          height: 120px;
          object-fit: cover;
        }
        
        .ad-info {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          
          h3 {
            font-size: 18px;
            margin-bottom: 8px;
          }
          
          p {
            font-size: 14px;
            margin-bottom: 12px;
          }
          
          button {
            width: 100px;
            height: 36px;
            background-color: #ff4d4f;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 14px;
          }
        }
      }
    }
    
    .group-buy-list {
      padding: 0 15px;
      
      .group-buy-item {
        display: flex;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #f0f0f0;
        
        &:last-child {
          border-bottom: none;
        }
        
        .group-buy-img {
          width: 80px;
          height: 80px;
          margin-right: 12px;
          
          img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
        }
        
        .group-buy-info {
          flex: 1;
          
          h4 {
            font-size: 16px;
            color: #333;
            margin-bottom: 6px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          
          .group-buy-desc {
            font-size: 12px;
            color: #666;
            margin-bottom: 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          
          .group-buy-price {
            margin-bottom: 4px;
            
            .price {
              font-size: 18px;
              color: #ff4d4f;
              font-weight: bold;
            }
            
            .original-price {
              font-size: 12px;
              color: #999;
              text-decoration: line-through;
              margin-left: 6px;
            }
            
            .discount {
              font-size: 12px;
              color: #ffa940;
              margin-left: 6px;
            }
          }
          
          .group-buy-people {
            font-size: 12px;
            color: #999;
          }
        }
        
        .group-buy-btn {
          
          button {
            width: 70px;
            height: 32px;
            background-color: #ff4d4f;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>