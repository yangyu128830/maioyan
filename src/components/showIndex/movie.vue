<template>
  <div class="movie-category">
    <!-- 热门电影演出 -->
    <section class="section">
      <h2 class="section-title">热门电影演出</h2>
      <div class="movie-list">
        <div class="movie-item" v-for="movie in hotMovies" :key="movie.id">
          <img :src="movie.image" :alt="movie.title" class="movie-poster">
          <div class="movie-info">
            <h3 class="movie-title">{{ movie.title }}</h3>
            <p class="movie-desc">{{ movie.description }}</p>
            <div class="movie-meta">
              <span class="movie-price">¥{{ movie.price }}</span>
              <span class="movie-rating">评分 {{ movie.rating }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 待映电影 -->
    <section class="section">
      <h2 class="section-title">待映电影</h2>
      <div class="movie-list">
        <div class="movie-item" v-for="movie in upcomingMovies" :key="movie.id">
          <img :src="movie.image" :alt="movie.title" class="movie-poster">
          <div class="movie-info">
            <h3 class="movie-title">{{ movie.title }}</h3>
            <p class="movie-desc">{{ movie.description }}</p>
            <div class="movie-meta">
              <span class="movie-release">上映时间: {{ movie.releaseDate }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 热门推荐 -->
    <section class="section">
      <h2 class="section-title">热门推荐</h2>
      <div class="recommendation-list">
        <div class="recommendation-item" v-for="item in recommendations" :key="item.id">
          <img :src="item.image" :alt="item.title" class="recommendation-image">
          <div class="recommendation-info">
            <h3 class="recommendation-title">{{ item.title }}</h3>
            <p class="recommendation-desc">{{ item.description }}</p>
            <span class="recommendation-tag">{{ item.tag }}</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 新电影推荐广告 -->
    <section class="section">
      <div class="ad-banner">
        <img src="@/assets/movie.jpg" alt="新电影推荐" class="ad-image">
      </div>
    </section>
    
    <!-- 优惠团购 -->
    <section class="section">
      <h2 class="section-title">优惠团购</h2>
      <div class="group-buy-list">
        <div class="group-buy-item" v-for="item in groupBuys" :key="item.id">
          <img :src="item.image" :alt="item.title" class="group-buy-image">
          <div class="group-buy-info">
            <h3 class="group-buy-title">{{ item.title }}</h3>
            <p class="group-buy-desc">{{ item.description }}</p>
            <div class="group-buy-price">
              <span class="original-price">¥{{ item.originalPrice }}</span>
              <span class="current-price">¥{{ item.currentPrice }}</span>
            </div>
            <button class="buy-btn">立即购买</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MovieCategory',
  data() {
    return {
      // 热门电影演出数据
      hotMovies: [
        {
          id: 1,
          title: '复仇者联盟4：终局之战',
          description: '漫威超级英雄终极之战',
          image: 'https://via.placeholder.com/200x300',
          price: 89,
          rating: 9.2
        },
        {
          id: 2,
          title: '流浪地球',
          description: '中国科幻电影里程碑',
          image: 'https://via.placeholder.com/200x300',
          price: 79,
          rating: 8.5
        },
        {
          id: 3,
          title: '哪吒之魔童降世',
          description: '国产动画电影佳作',
          image: 'https://via.placeholder.com/200x300',
          price: 69,
          rating: 8.8
        }
      ],
      
      // 待映电影数据
      upcomingMovies: [
        {
          id: 4,
          title: '阿凡达2：水之道',
          description: '詹姆斯·卡梅隆全新力作',
          image: 'https://via.placeholder.com/200x300',
          releaseDate: '2022-12-16'
        },
        {
          id: 5,
          title: '蜘蛛侠：纵横宇宙',
          description: '多元宇宙冒险继续',
          image: 'https://via.placeholder.com/200x300',
          releaseDate: '2023-06-02'
        }
      ],
      
      // 热门推荐数据
      recommendations: [
        {
          id: 6,
          title: '电影票优惠套餐',
          description: '2张电影票+2杯可乐+1桶爆米花',
          image: 'https://via.placeholder.com/150x100',
          tag: '优惠套餐'
        },
        {
          id: 7,
          title: 'IMAX观影体验',
          description: '极致视听享受',
          image: 'https://via.placeholder.com/150x100',
          tag: 'IMAX'
        }
      ],
      
      // 优惠团购数据
      groupBuys: [
        {
          id: 8,
          title: '双人观影套餐',
          description: '2张电影票+小吃套餐',
          image: 'https://via.placeholder.com/200x150',
          originalPrice: 120,
          currentPrice: 88
        },
        {
          id: 9,
          title: '家庭观影套票',
          description: '4张电影票+全家桶套餐',
          image: 'https://via.placeholder.com/200x150',
          originalPrice: 200,
          currentPrice: 138
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-category {
  padding: 0;
}

.section {
  margin-bottom: 25px;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
  }
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  padding-left: 15px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 20px;
    background: linear-gradient(180deg, #ff4d4f, #ff7875);
    border-radius: 2px;
  }
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.movie-item {
  width: calc(33.333% - 13.333px);
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
}

.movie-poster {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  .movie-item:hover & {
    transform: scale(1.05);
  }
}

.movie-info {
  padding: 15px;
}

.movie-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.movie-desc {
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.4;
}

.movie-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  
  .movie-price {
    color: #ff4d4f;
    font-weight: 600;
    font-size: 14px;
  }
  
  .movie-rating {
    color: #faad14;
    font-weight: 500;
  }
}

.recommendation-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.recommendation-item {
  display: flex;
  gap: 15px;
  padding: 15px;
  border-radius: 10px;
  background-color: #f8f9fa;
  transition: all 0.3s ease;
  border-left: 4px solid #1890ff;
  
  &:hover {
    background-color: #e9ecef;
    transform: translateX(5px);
  }
}

.recommendation-image {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.recommendation-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.recommendation-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.recommendation-desc {
  font-size: 13px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.4;
}

.recommendation-tag {
  font-size: 11px;
  color: #fff;
  background: linear-gradient(90deg, #1890ff, #40a9ff);
  padding: 4px 10px;
  border-radius: 12px;
  align-self: flex-start;
  font-weight: 500;
}

.ad-banner {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  .ad-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
}

.group-buy-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.group-buy-item {
  display: flex;
  gap: 20px;
  padding: 15px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }
}

.group-buy-image {
  width: 160px;
  height: 110px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.group-buy-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.group-buy-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.group-buy-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.4;
}

.group-buy-price {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  
  .original-price {
    font-size: 15px;
    color: #999;
    text-decoration: line-through;
    font-weight: 400;
  }
  
  .current-price {
    font-size: 22px;
    color: #ff4d4f;
    font-weight: 600;
  }
}

.buy-btn {
  align-self: flex-start;
  padding: 10px 20px;
  background: linear-gradient(90deg, #ff4d4f, #ff7875);
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 77, 79, 0.3);
  
  &:hover {
    background: linear-gradient(90deg, #ff7875, #ff4d4f);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 77, 79, 0.4);
  }
}
</style>
