<template>
  <div id="member">
    <Header title="会员中心" />
    <div class="content">
      <!-- 会员信息卡片 -->
      <div class="member-card">
        <div class="member-avatar">
          <img src="@/assets/personal.png" alt="头像" @click="changeAvatar">
          <div class="avatar-edit">
            <i class="iconfont">&#xe63c;</i>
          </div>
        </div>
        <div class="member-info">
          <h2 class="member-name">用户名</h2>
          <p class="member-id">ID: 123456789</p>
          <div class="member-level-info">
            <span class="level-badge">{{ memberLevel.name }}</span>
            <span class="points-info">积分: {{ currentPoints }}</span>
          </div>
          <div class="level-progress">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: progressWidth + '%' }"></div>
            </div>
            <div class="progress-text">
              <span>距离{{ nextLevel.name }}还需{{ pointsToNextLevel }}分</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 会员功能菜单 -->
      <div class="member-menu">
        <div class="menu-item" @click="goToOrder">
          <i class="iconfont menu-icon">&#xe60a;</i>
          <span class="menu-title">我的订单</span>
          <i class="iconfont menu-arrow">&#xe65a;</i>
        </div>
        <div class="menu-item" @click="goToCoupons">
          <i class="iconfont menu-icon">&#xe60b;</i>
          <span class="menu-title">我的优惠券</span>
          <i class="iconfont menu-arrow">&#xe65a;</i>
          <span class="menu-badge">3</span>
        </div>
        <div class="menu-item" @click="goToPoints">
          <i class="iconfont menu-icon">&#xe60c;</i>
          <span class="menu-title">积分商城</span>
          <i class="iconfont menu-arrow">&#xe65a;</i>
        </div>
        <div class="menu-item" @click="goToInvite">
          <i class="iconfont menu-icon">&#xe60d;</i>
          <span class="menu-title">邀请好友</span>
          <i class="iconfont menu-arrow">&#xe65a;</i>
        </div>
      </div>

      <!-- 会员福利 -->
      <div class="benefits-section">
        <h3 class="section-title">会员福利</h3>
        <div class="benefits-grid">
          <div class="benefit-card" v-for="benefit in memberLevel.benefits" :key="benefit.id">
            <div class="benefit-icon">{{ benefit.icon }}</div>
            <div class="benefit-content">
              <h4 class="benefit-title">{{ benefit.title }}</h4>
              <p class="benefit-desc">{{ benefit.description }}</p>
              <button v-if="benefit.canClaim && !benefit.claimed" @click="claimBenefit(benefit.id)" class="claim-btn">立即领取</button>
              <span v-else-if="benefit.claimed" class="claimed-tag">已领取</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 等级规则 -->
      <div class="level-rules-section">
        <h3 class="section-title">会员等级规则</h3>
        <div class="rules-container">
          <div class="rule-card" v-for="level in levels" :key="level.id" :class="{ active: level.id === memberLevel.id }">
            <div class="rule-header">
              <h4 class="level-name">{{ level.name }}</h4>
              <p class="level-points">{{ level.points }}分</p>
            </div>
            <div class="rule-benefits">
              <ul>
                <li v-for="benefit in level.benefits" :key="benefit.id" class="benefit-item">
                  <i class="iconfont benefit-check">&#xe60e;</i>
                  <span>{{ benefit.title }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 会员特权说明 -->
      <div class="privileges-section">
        <h3 class="section-title">会员特权</h3>
        <div class="privileges-list">
          <div class="privilege-item">
            <i class="iconfont privilege-icon">&#xe60f;</i>
            <div class="privilege-content">
              <h4>专属客服</h4>
              <p>24小时在线服务</p>
            </div>
          </div>
          <div class="privilege-item">
            <i class="iconfont privilege-icon">&#xe610;</i>
            <div class="privilege-content">
              <h4>生日福利</h4>
              <p>生日当月可领取专属礼包</p>
            </div>
          </div>
          <div class="privilege-item">
            <i class="iconfont privilege-icon">&#xe611;</i>
            <div class="privilege-content">
              <h4>积分翻倍</h4>
              <p>购买电影票享受积分翻倍</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'member',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      currentPoints: 800,
      levels: [
        {
          id: 1,
          name: '白银会员',
          points: 500,
          benefits: [
            { id: 1, icon: '🎁', title: '每月50元代金券', description: '每月可领取50元代金券', canClaim: true, claimed: false },
            { id: 2, icon: '🎬', title: '专属折扣', description: '购买电影票享受9.5折优惠' }
          ]
        },
        {
          id: 2,
          name: '黄金会员',
          points: 1000,
          benefits: [
            { id: 3, icon: '🎁', title: '每月100元代金券', description: '每月可领取100元代金券', canClaim: true, claimed: false },
            { id: 4, icon: '🎬', title: '专属折扣', description: '购买电影票享受9折优惠' },
            { id: 5, icon: '🎫', title: '优先购票', description: '热门影片优先购票' }
          ]
        },
        {
          id: 3,
          name: '黑金会员',
          points: 10000,
          benefits: [
            { id: 6, icon: '🎬', title: '免费观影', description: '每月可免费观看2次电影', canClaim: true, claimed: false },
            { id: 7, icon: '🎁', title: '专属大礼包', description: '每月可领取专属大礼包' },
            { id: 8, icon: '🎫', title: '专属通道', description: '影院专属通道入场' },
            { id: 9, icon: '⭐', title: '专属客服', description: '24小时专属客服' }
          ]
        }
      ]
    }
  },
  computed: {
    memberLevel() {
      if (this.currentPoints >= 10000) {
        return this.levels[2]
      } else if (this.currentPoints >= 1000) {
        return this.levels[1]
      } else if (this.currentPoints >= 500) {
        return this.levels[0]
      } else {
        return { name: '普通用户', benefits: [] }
      }
    },
    nextLevel() {
      if (this.currentPoints < 500) {
        return this.levels[0]
      } else if (this.currentPoints < 1000) {
        return this.levels[1]
      } else if (this.currentPoints < 10000) {
        return this.levels[2]
      } else {
        return { name: '最高等级', points: this.currentPoints }
      }
    },
    pointsToNextLevel() {
      if (this.nextLevel && this.nextLevel.points > this.currentPoints) {
        return this.nextLevel.points - this.currentPoints
      } else {
        return 0
      }
    },
    progressWidth() {
      if (this.nextLevel && this.nextLevel.points > this.currentPoints) {
        const currentLevelPoints = this.memberLevel.points || 0
        const progress = (this.currentPoints - currentLevelPoints) / (this.nextLevel.points - currentLevelPoints) * 100
        return Math.max(0, Math.min(100, progress))
      } else {
        return 100
      }
    }
  },
  methods: {
    changeAvatar() {
      this.$messageBox({ title: '提示', content: '头像修改功能暂未开放', ok: '确定' })
    },
    goToOrder() {
      this.$router.push('/member/orders')
    },
    goToCoupons() {
      this.$router.push('/member/coupons')
    },
    goToPoints() {
      this.$router.push('/member/points')
    },
    goToInvite() {
      this.$messageBox({ title: '提示', content: '邀请好友功能暂未开放', ok: '确定' })
    },
    claimBenefit(benefitId) {
      const benefit = this.memberLevel.benefits.find(b => b.id === benefitId)
      if (benefit) {
        benefit.claimed = true
        this.$messageBox({ title: '提示', content: '福利领取成功！', ok: '确定' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#member {
  .content {
    margin-top: 40px;
    padding-bottom: 60px;
    background-color: #f5f5f5;
    min-height: calc(100vh - 100px);
  }

  /* 会员卡片 */
  .member-card {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    color: white;
    padding: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    .member-avatar {
      position: relative;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
      border: 4px solid rgba(255, 255, 255, 0.3);
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .avatar-edit {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
      }
    }

    .member-info {
      flex: 1;

      .member-name {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 8px;
      }

      .member-id {
        font-size: 14px;
        opacity: 0.9;
        margin-bottom: 12px;
      }

      .member-level-info {
        display: flex;
        align-items: center;
        margin-bottom: 12px;

        .level-badge {
          background-color: rgba(255, 255, 255, 0.3);
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 14px;
          margin-right: 12px;
        }

        .points-info {
          font-size: 14px;
        }
      }

      .level-progress {
        width: 100%;

        .progress-bar {
          width: 100%;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 6px;

          .progress-fill {
            height: 100%;
            background-color: white;
            transition: width 0.3s ease;
          }
        }

        .progress-text {
          font-size: 12px;
          opacity: 0.9;
        }
      }
    }
  }

  /* 会员菜单 */
  .member-menu {
    background-color: white;
    border-radius: 12px;
    margin-bottom: 20px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    .menu-item {
      display: flex;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid #f0f0f0;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:last-child {
        border-bottom: none;
      }

      &:active {
        background-color: #f5f5f5;
      }

      .menu-icon {
        font-size: 24px;
        color: #ff6b6b;
        margin-right: 16px;
      }

      .menu-title {
        flex: 1;
        font-size: 16px;
        color: #333;
      }

      .menu-arrow {
        font-size: 16px;
        color: #999;
      }

      .menu-badge {
        background-color: #ff4d4f;
        color: white;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 12px;
        margin-left: 8px;
      }
    }
  }

  /* 通用区块样式 */
  .benefits-section,
  .level-rules-section,
  .privileges-section {
    background-color: white;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    .section-title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid #ff6b6b;
    }
  }

  /* 福利网格 */
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;

    .benefit-card {
      background-color: #fafafa;
      border-radius: 8px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      border: 1px solid #e0e0e0;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .benefit-icon {
        font-size: 36px;
        margin-bottom: 12px;
      }

      .benefit-content {
        flex: 1;

        .benefit-title {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin-bottom: 8px;
        }

        .benefit-desc {
          font-size: 14px;
          color: #666;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .claim-btn {
          background-color: #ff6b6b;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.3s ease;

          &:active {
            background-color: #ee5a24;
          }
        }

        .claimed-tag {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }

  /* 等级规则 */
  .rules-container {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .rule-card {
      padding: 16px;
      border-radius: 8px;
      border: 2px solid #e0e0e0;
      transition: all 0.3s ease;

      &.active {
        border-color: #ff6b6b;
        background-color: rgba(255, 107, 107, 0.05);
        transform: scale(1.02);
      }

      .rule-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        .level-name {
          font-size: 16px;
          font-weight: bold;
          color: #333;
        }

        .level-points {
          font-size: 14px;
          color: #666;
        }
      }

      .rule-benefits {
        ul {
          list-style: none;

          .benefit-item {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #666;
            margin-bottom: 6px;

            .benefit-check {
              font-size: 16px;
              color: #52c41a;
              margin-right: 8px;
            }
          }
        }
      }
    }
  }

  /* 特权列表 */
  .privileges-list {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .privilege-item {
      display: flex;
      align-items: center;
      padding: 16px;
      background-color: #fafafa;
      border-radius: 8px;
      border: 1px solid #e0e0e0;

      .privilege-icon {
        font-size: 28px;
        color: #ff6b6b;
        margin-right: 16px;
      }

      .privilege-content {
        flex: 1;

        h4 {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin-bottom: 4px;
        }

        p {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
}
</style>