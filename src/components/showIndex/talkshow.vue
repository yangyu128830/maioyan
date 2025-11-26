<template>
  <div class="talkshow-category">
    <!-- 热门脱口秀 -->
    <section class="section">
      <h2 class="section-title">热门脱口秀</h2>
      <div class="talkshow-list">
        <div class="talkshow-item" v-for="talkshow in hotTalkshows" :key="talkshow.id">
          <img :src="talkshow.image" :alt="talkshow.title" class="talkshow-poster">
          <div class="talkshow-info">
            <h3 class="talkshow-title">{{ talkshow.title }}</h3>
            <p class="talkshow-performer">{{ talkshow.performer }}</p>
            <p class="talkshow-venue">{{ talkshow.venue }} | {{ talkshow.date }}</p>
            <div class="talkshow-price">¥{{ talkshow.price }}起</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 即将开演 -->
    <section class="section">
      <h2 class="section-title">即将开演</h2>
      <div class="talkshow-list">
        <div class="talkshow-item" v-for="talkshow in upcomingTalkshows" :key="talkshow.id">
          <img :src="talkshow.image" :alt="talkshow.title" class="talkshow-poster">
          <div class="talkshow-info">
            <h3 class="talkshow-title">{{ talkshow.title }}</h3>
            <p class="talkshow-performer">{{ talkshow.performer }}</p>
            <p class="talkshow-venue">{{ talkshow.venue }} | {{ talkshow.date }}</p>
            <div class="talkshow-price">¥{{ talkshow.price }}起</div>
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
    
    <!-- 脱口秀推荐广告 -->
    <section class="section">
      <div class="ad-banner">
        <img src="https://via.placeholder.com/600x200" alt="脱口秀推荐" class="ad-image">
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
  name: 'TalkshowCategory',
  data() {
    return {
      // 热门脱口秀数据
      hotTalkshows: [
        {
          id: 1,
          title: '李诞脱口秀专场',
          performer: '李诞',
          venue: '上海国际体操中心',
          date: '2023-10-28',
          image: 'https://via.placeholder.com/200x300',
          price: 280
        },
        {
          id: 2,
          title: '池子脱口秀巡演',
          performer: '池子',
          venue: '北京展览馆剧场',
          date: '2023-11-15',
          image: 'https://via.placeholder.com/200x300',
          price: 380
        },
        {
          id: 3,
          title: '呼兰脱口秀专场',
          performer: '呼兰',
          venue: '广州体育馆',
          date: '2023-12-08',
          image: 'https://via.placeholder.com/200x300',
          price: 260
        }
      ],
      
      // 即将开演数据
      upcomingTalkshows: [
        {
          id: 4,
          title: '王建国脱口秀专场',
          performer: '王建国',
          venue: '深圳保利剧院',
          date: '2023-12-20',
          image: 'https://via.placeholder.com/200x300',
          price: 240
        },
        {
          id: 5,
          title: '杨笠脱口秀巡演',
          performer: '杨笠',
          venue: '杭州大剧院',
          date: '2024-01-10',
          image: 'https://via.placeholder.com/200x300',
          price: 320
        }
      ],
      
      // 热门推荐数据
      recommendations: [
        {
          id: 6,
          title: '脱口秀双人套票',
          description: '两张门票立减80元',
          image: 'https://via.placeholder.com/150x100',
          tag: '双人优惠'
        },
        {
          id: 7,
          title: '开放麦体验票',
          description: '新人演员表演，仅需50元',
          image: 'https://via.placeholder.com/150x100',
          tag: '开放麦'
        }
      ],
      
      // 优惠团购数据
      groupBuys: [
        {
          id: 8,
          title: '李诞脱口秀双人套票',
          description: '两张门票+签名海报',
          image: 'https://via.placeholder.com/200x150',
          originalPrice: 600,
          currentPrice: 520
        },
        {
          id: 9,
          title: '脱口秀四人套票',
          description: '四张门票+饮品套餐',
          image: 'https://via.placeholder.com/200x150',
          originalPrice: 1000,
          currentPrice: 880
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.talkshow-category {
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

.talkshow-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.talkshow-item {
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

.talkshow-poster {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  .talkshow-item:hover & {
    transform: scale(1.05);
  }
}

.talkshow-info {
  padding: 15px;
}

.talkshow-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.talkshow-desc {
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

.talkshow-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  
  .talkshow-price {
    color: #ff4d4f;
    font-weight: 600;
    font-size: 14px;
  }
  
  .talkshow-date {
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
