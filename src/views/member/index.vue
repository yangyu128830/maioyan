<template>
  <div id="memberPage">
    <Header title="会员中心"/>
    <div class="content">
      <div class="member-info">
        <div class="member-avatar">
          <img src="@/assets/personal.png" alt="头像">
        </div>
        <div class="member-details">
          <h2>会员中心</h2>
          <p class="member-level">{{ memberLevel }}</p>
          <p class="member-score">当前积分：{{ memberScore }}分</p>
        </div>
      </div>

      <div class="level-info">
        <h3>会员等级说明</h3>
        <div class="level-list">
          <div class="level-item" :class="{ active: memberScore >= 500 && memberScore < 1000 }">
            <div class="level-name">白银会员</div>
            <div class="level-requirement">500分</div>
            <div class="level-benefit">每月可领取50元代金券</div>
          </div>
          <div class="level-item" :class="{ active: memberScore >= 1000 && memberScore < 10000 }">
            <div class="level-name">黄金会员</div>
            <div class="level-requirement">1000分</div>
            <div class="level-benefit">每月可领取100元代金券</div>
          </div>
          <div class="level-item" :class="{ active: memberScore >= 10000 }">
            <div class="level-name">黑金会员</div>
            <div class="level-requirement">10000分</div>
            <div class="level-benefit">每月可免费看电影2次</div>
          </div>
        </div>
        <router-link to="/member/level" class="level-detail-link">查看详细等级说明</router-link>
      </div>

      <div class="benefit-section">
        <h3>我的福利</h3>
        <div class="benefit-list">
          <div class="benefit-item">
            <div class="benefit-name">{{ currentBenefit }}</div>
            <button class="claim-btn" @click="claimBenefit">领取福利</button>
          </div>
        </div>
      </div>

      <div class="test-section">
        <h3>测试操作</h3>
        <div class="test-buttons">
          <button @click="addScore(500)">添加500分</button>
          <button @click="addScore(1000)">添加1000分</button>
          <button @click="addScore(10000)">添加10000分</button>
          <button @click="resetScore">重置积分</button>
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
  name: 'memberIndex',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      memberScore: 0
    }
  },
  computed: {
    memberLevel() {
      if (this.memberScore >= 10000) {
        return '黑金会员'
      } else if (this.memberScore >= 1000) {
        return '黄金会员'
      } else if (this.memberScore >= 500) {
        return '白银会员'
      } else {
        return '普通会员'
      }
    },
    currentBenefit() {
      if (this.memberScore >= 10000) {
        return '每月免费看电影2次'
      } else if (this.memberScore >= 1000) {
        return '每月50元代金券'
      } else if (this.memberScore >= 500) {
        return '每月100元代金券'
      } else {
        return '暂无福利'
      }
    }
  },
  methods: {
    addScore(score) {
      this.memberScore += score
    },
    resetScore() {
      this.memberScore = 0
    },
    claimBenefit() {
      if (this.memberScore < 500) {
        return
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#memberPage {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;

  .content {
    flex: 1;
    margin-top: 40px;
    padding: 20px;
    padding-bottom: 60px; // 为底部导航栏留出空间

    .member-info {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background-color: #ff4d4f;
      color: white;
      border-radius: 8px;
      margin-bottom: 20px;

      .member-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;
        background-color: white;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .member-details {
        text-align: left;

        h2 {
          margin: 0 0 10px 0;
          font-size: 24px;
        }

        .member-level {
          margin: 0 0 5px 0;
          font-size: 18px;
          font-weight: bold;
        }

        .member-score {
          margin: 0;
          font-size: 16px;
        }
      }
    }

    .level-info,
    .benefit-section,
    .test-section {
      background-color: white;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

      h3 {
        margin: 0 0 20px 0;
        font-size: 18px;
        color: #333;
      }
    }

    .level-info {
      .level-detail-link {
        display: inline-block;
        margin-top: 10px;
        color: #4CAF50;
        text-decoration: none;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .level-list {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .level-item {
        padding: 15px;
        border-radius: 8px;
        border: 2px solid #e0e0e0;
        transition: all 0.3s ease;

        &.active {
          border-color: #ff4d4f;
          background-color: #fff3f3;
        }

        .level-name {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .level-requirement {
          font-size: 14px;
          color: #666;
          margin-bottom: 5px;
        }

        .level-benefit {
          font-size: 14px;
          color: #ff4d4f;
        }
      }
    }

    .benefit-list {
      .benefit-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        background-color: #fafafa;
        border-radius: 8px;

        .benefit-name {
          font-size: 16px;
          color: #333;
        }

        .claim-btn {
          background-color: #ff4d4f;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;

          &:hover {
            background-color: #ff7875;
          }
        }
      }
    }

    .test-section {
      .test-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        button {
          background-color: #1890ff;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;

          &:hover {
            background-color: #40a9ff;
          }
        }
      }
    }
  }
}
</style>
