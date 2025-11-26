<template>
  <div class="performance-category">
    <!-- 热门演出 -->
    <section class="section">
      <h2 class="section-title">热门演出</h2>
      <div class="performance-list">
        <div class="performance-item" v-for="performance in hotPerformances" :key="performance.id">
          <img :src="performance.image" :alt="performance.title" class="performance-poster">
          <div class="performance-info">
            <h3 class="performance-title">{{ performance.title }}</h3>
            <p class="performance-type">{{ performance.type }}</p>
            <p class="performance-venue">{{ performance.venue }} | {{ performance.date }}</p>
            <div class="performance-price">¥{{ performance.price }}起</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 即将上演 -->
    <section class="section">
      <h2 class="section-title">即将上演</h2>
      <div class="performance-list">
        <div class="performance-item" v-for="performance in upcomingPerformances" :key="performance.id">
          <img :src="performance.image" :alt="performance.title" class="performance-poster">
          <div class="performance-info">
            <h3 class="performance-title">{{ performance.title }}</h3>
            <p class="performance-type">{{ performance.type }}</p>
            <p class="performance-venue">{{ performance.venue }} | {{ performance.date }}</p>
            <div class="performance-price">¥{{ performance.price }}起</div>
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
    
    <!-- 演出推荐广告 -->
    <section class="section">
      <div class="ad-banner">
        <img src="https://via.placeholder.com/600x200" alt="演出推荐" class="ad-image">
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
  name: 'PerformanceCategory',
  data() {
    return {
      // 热门演出数据
      hotPerformances: [
        {
          id: 1,
          title: '开心麻花经典喜剧《夏洛特烦恼》',
          type: '话剧',
          venue: '北京喜剧院',
          date: '2023-10-20',
          image: 'https://via.placeholder.com/200x300',
          price: 180
        },
        {
          id: 2,
          title: '国家话剧院《四世同堂》',
          type: '话剧',
          venue: '国家大剧院',
          date: '2023-11-10',
          image: 'https://via.placeholder.com/200x300',
          price: 280
        },
        {
          id: 3,
          title: '杨丽萍舞蹈剧场《十面埋伏》',
          type: '舞蹈',
          venue: '上海大剧院',
          date: '2023-12-05',
          image: 'https://via.placeholder.com/200x300',
          price: 380
        }
      ],
      
      // 即将上演数据
      upcomingPerformances: [
        {
          id: 4,
          title: '孟京辉戏剧作品《恋爱的犀牛》',
          type: '话剧',
          venue: '蜂巢剧场',
          date: '2023-12-15',
          image: 'https://via.placeholder.com/200x300',
          price: 160
        },
        {
          id: 5,
          title: '中央芭蕾舞团《天鹅湖》',
          type: '芭蕾舞',
          venue: '天桥剧场',
          date: '2024-01-05',
          image: 'https://via.placeholder.com/200x300',
          price: 480
        }
      ],
      
      // 热门推荐数据
      recommendations: [
        {
          id: 6,
          title: '话剧套票优惠',
          description: '两张话剧门票立减100元',
          image: 'https://via.placeholder.com/150x100',
          tag: '套票优惠'
        },
        {
          id: 7,
          title: '亲子演出套票',
          description: '一大一小亲子套票仅需280元',
          image: 'https://via.placeholder.com/150x100',
          tag: '亲子优惠'
        }
      ],
      
      // 优惠团购数据
      groupBuys: [
        {
          id: 8,
          title: '开心麻花双人套票',
          description: '两张《夏洛特烦恼》门票+小吃',
          image: 'https://via.placeholder.com/200x150',
          originalPrice: 400,
          currentPrice: 320
        },
        {
          id: 9,
          title: '芭蕾舞剧家庭套票',
          description: '三张《天鹅湖》门票+纪念册',
          image: 'https://via.placeholder.com/200x150',
          originalPrice: 1200,
          currentPrice: 980
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.performance-category {
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

.performance-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.performance-item {
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

.performance-poster {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  .performance-item:hover & {
    transform: scale(1.05);
  }
}

.performance-info {
  padding: 15px;
}

.performance-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.performance-desc {
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

.performance-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  
  .performance-price {
    color: #ff4d4f;
    font-weight: 600;
    font-size: 14px;
  }
  
  .performance-date {
    color: #1890ff;
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
