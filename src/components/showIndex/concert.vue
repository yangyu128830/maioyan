<template>
  <div class="concert-show">
    <!-- 热门演唱会 -->
    <div class="hot-shows">
      <div class="section-title">热门演唱会</div>
      <div class="show-list">
        <div class="show-item" v-for="show in hotShows" :key="show.id">
          <img :src="show.img" alt="" class="show-img">
          <div class="show-info">
            <div class="show-name">{{ show.name }}</div>
            <div class="show-desc">{{ show.desc }}</div>
            <div class="show-price">¥{{ show.price }}起</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 即将开演 -->
    <div class="coming-shows">
      <div class="section-title">即将开演</div>
      <div class="show-list">
        <div class="show-item" v-for="show in comingShows" :key="show.id">
          <img :src="show.img" alt="" class="show-img">
          <div class="show-info">
            <div class="show-name">{{ show.name }}</div>
            <div class="show-desc">{{ show.desc }}</div>
            <div class="show-date">{{ show.date }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 热门推荐 -->
    <div class="hot-recommends">
      <div class="section-title">热门推荐</div>
      <div class="recommend-list">
        <div class="recommend-item" v-for="item in hotRecommends" :key="item.id">
          <img :src="item.img" alt="" class="recommend-img">
          <div class="recommend-name">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <!-- 演唱会推荐广告 -->
    <div class="concert-ad">
      <img src="@/assets/movie.jpg" alt="演唱会推荐" class="ad-img">
    </div>

    <!-- 优惠团购 -->
    <div class="group-buy">
      <div class="section-title">优惠团购</div>
      <div class="group-list">
        <div class="group-item" v-for="item in groupBuys" :key="item.id">
          <img :src="item.img" alt="" class="group-img">
          <div class="group-info">
            <div class="group-name">{{ item.name }}</div>
            <div class="group-desc">{{ item.desc }}</div>
            <div class="group-price">
              <span class="current-price">¥{{ item.currentPrice }}</span>
              <span class="original-price">¥{{ item.originalPrice }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'concertShow',
  data() {
    return {
      hotShows: [
        {
          id: 1,
          img: 'https://via.placeholder.com/120x160',
          name: '周杰伦演唱会',
          desc: '上海体育场 2025-12-25',
          price: 580
        },
        {
          id: 2,
          img: 'https://via.placeholder.com/120x160',
          name: '林俊杰演唱会',
          desc: '北京鸟巢 2025-11-18',
          price: 480
        },
        {
          id: 3,
          img: 'https://via.placeholder.com/120x160',
          name: '陈奕迅演唱会',
          desc: '广州天河体育场 2025-10-07',
          price: 520
        }
      ],
      comingShows: [
        {
          id: 4,
          img: 'https://via.placeholder.com/120x160',
          name: 'TFBOYS演唱会',
          desc: '深圳大运中心 2026-01-15',
          date: '即将开演'
        },
        {
          id: 5,
          img: 'https://via.placeholder.com/120x160',
          name: '蔡依林演唱会',
          desc: '成都凤凰山体育中心 2026-02-20',
          date: '即将开演'
        }
      ],
      hotRecommends: [
        {
          id: 6,
          img: 'https://via.placeholder.com/80x80',
          name: '华语歌手演唱会'
        },
        {
          id: 7,
          img: 'https://via.placeholder.com/80x80',
          name: '欧美歌手演唱会'
        },
        {
          id: 8,
          img: 'https://via.placeholder.com/80x80',
          name: '韩国组合演唱会'
        },
        {
          id: 9,
          img: 'https://via.placeholder.com/80x80',
          name: '日本歌手演唱会'
        }
      ],
      groupBuys: [
        {
          id: 10,
          img: 'https://via.placeholder.com/100x100',
          name: '双人演唱会套票',
          desc: '两张演唱会门票+两张纪念海报',
          currentPrice: 999,
          originalPrice: 1299
        },
        {
          id: 11,
          img: 'https://via.placeholder.com/100x100',
          name: '演唱会VIP套票',
          desc: '一张VIP门票+后台合影机会',
          currentPrice: 2999,
          originalPrice: 3999
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.concert-show {
  padding: 15px;
  .section-title {
    font-size: 20px;
    font-weight: 600;
    margin: 25px 0 15px 0;
    color: #333;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: -15px;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 20px;
      background: linear-gradient(to bottom, #ff4d4f, #ff7875);
      border-radius: 2px;
    }
  }
  .show-list {
    display: flex;
    overflow-x: auto;
    padding-bottom: 15px;
    scrollbar-width: thin;
    scrollbar-color: #ff4d4f #f5f5f5;
    &::-webkit-scrollbar {
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      background: #f5f5f5;
      border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background: #ff4d4f;
      border-radius: 3px;
    }
    .show-item {
      width: 140px;
      margin-right: 18px;
      flex-shrink: 0;
      background-color: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
      }
      .show-img {
        width: 140px;
        height: 187px;
        object-fit: cover;
      }
      .show-info {
        padding: 12px;
        .show-name {
          font-size: 15px;
          font-weight: 500;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 4px;
        }
        .show-desc {
          font-size: 12px;
          color: #666;
          margin-bottom: 6px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .show-price {
          font-size: 16px;
          font-weight: 600;
          color: #ff4d4f;
        }
        .show-date {
          font-size: 12px;
          color: #999;
          margin-top: 6px;
          padding: 2px 8px;
          background-color: #f5f5f5;
          border-radius: 10px;
          display: inline-block;
        }
      }
    }
  }
  .recommend-list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    .recommend-item {
      width: calc(25% - 11px);
      margin-bottom: 15px;
      text-align: center;
      transition: all 0.3s ease;
      &:hover {
        transform: translateY(-3px);
      }
      .recommend-img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 0 auto;
        display: block;
        object-fit: cover;
        border: 3px solid #fff;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        &:hover {
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
      }
      .recommend-name {
        font-size: 12px;
        font-weight: 500;
        color: #333;
        text-align: center;
        margin-top: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .concert-ad {
    margin: 30px 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
    .ad-img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .group-list {
    .group-item {
      display: flex;
      margin-bottom: 18px;
      background-color: #fff;
      border-radius: 12px;
      padding: 15px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
      }
      .group-img {
        width: 100px;
        height: 100px;
        border-radius: 8px;
        margin-right: 15px;
        object-fit: cover;
      }
      .group-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .group-name {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin-bottom: 6px;
        }
        .group-desc {
          font-size: 13px;
          color: #666;
          margin-bottom: 10px;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .group-price {
          .current-price {
            font-size: 20px;
            font-weight: 700;
            color: #ff4d4f;
          }
          .original-price {
            font-size: 13px;
            color: #999;
            text-decoration: line-through;
            margin-left: 8px;
          }
        }
      }
    }
  }
}
</style>
