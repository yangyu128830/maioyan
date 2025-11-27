<template>
  <div class="member-container">
    <!-- 会员头部信息 -->
    <div class="member-header" :class="memberLevel.toLowerCase()">
      <div class="member-info">
        <div class="avatar">
          <img src="@/assets/personal.png" alt="用户头像">
        </div>
        <div class="user-info">
          <h2 class="username">喵眼用户</h2>
          <div class="member-level">
            <span class="level-badge">{{ memberLevel }}</span>
            <span class="level-desc">{{ levelDescription }}</span>
          </div>
        </div>
      </div>
      <div class="points-info">
        <div class="current-points">
          <span class="points-label">当前积分</span>
          <span class="points-value">{{ currentPoints }}</span>
        </div>
        <div class="next-level">
          <span class="next-label">距离下一等级</span>
          <span class="next-need">{{ nextLevelNeed }}分</span>
        </div>
      </div>
    </div>

    <!-- 会员等级说明 -->
    <div class="level-explanation">
      <h3>会员等级说明</h3>
      <div class="level-list">
        <div class="level-item" :class="{ active: memberLevel === '白银' }">
          <div class="level-icon">🥈</div>
          <div class="level-details">
            <h4>白银会员</h4>
            <p>消费满500分即可升级</p>
            <div class="progress-bar">
              <div class="progress" :style="{ width: getProgress(500) + '%' }"></div>
            </div>
          </div>
        </div>
        <div class="level-item" :class="{ active: memberLevel === '黄金' }">
          <div class="level-icon">🥇</div>
          <div class="level-details">
            <h4>黄金会员</h4>
            <p>消费满1000分即可升级</p>
            <div class="progress-bar">
              <div class="progress" :style="{ width: getProgress(1000) + '%' }"></div>
            </div>
          </div>
        </div>
        <div class="level-item" :class="{ active: memberLevel === '黑金' }">
          <div class="level-icon">💎</div>
          <div class="level-details">
            <h4>黑金会员</h4>
            <p>消费满10000分即可升级</p>
            <div class="progress-bar">
              <div class="progress" :style="{ width: getProgress(10000) + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 会员福利 -->
    <div class="member-benefits">
      <h3>本月可领取福利</h3>
      <div class="benefits-list">
        <div class="benefit-item" v-for="benefit in availableBenefits" :key="benefit.id">
          <div class="benefit-icon">{{ benefit.icon }}</div>
          <div class="benefit-info">
            <h4>{{ benefit.title }}</h4>
            <p>{{ benefit.desc }}</p>
          </div>
          <button class="claim-btn" :disabled="benefit.claimed" @click="claimBenefit(benefit.id)">
            {{ benefit.claimed ? '已领取' : '立即领取' }}
          </button>
        </div>
      </div>
    </div>

    <!-- 积分变动记录 -->
    <div class="points-history">
      <h3>积分变动记录</h3>
      <div class="history-list">
        <div class="history-item" v-for="record in pointsHistory" :key="record.id">
          <div class="record-info">
            <span class="record-title">{{ record.title }}</span>
            <span class="record-date">{{ record.date }}</span>
          </div>
          <div class="record-points" :class="record.type">
            {{ record.type === 'income' ? '+' : '-' }}{{ record.points }}
          </div>
        </div>
      </div>
    </div>

    <!-- 测试操作区域 -->
    <div class="test-section">
      <h3>测试操作</h3>
      <div class="test-buttons">
        <button class="test-btn" @click="addPoints(100)">增加100积分</button>
        <button class="test-btn" @click="addPoints(500)">增加500积分</button>
        <button class="test-btn" @click="resetPoints">重置积分</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'memberIndex',
  data() {
    return {
      currentPoints: 350, // 当前积分
      claimedBenefits: [], // 已领取的福利ID
      pointsHistory: [
        { id: 1, title: '购买电影票', date: '2024-01-15', points: 80, type: 'income' },
        { id: 2, title: '购买电影票', date: '2024-01-10', points: 65, type: 'income' },
        { id: 3, title: '领取代金券', date: '2024-01-05', points: 50, type: 'expense' }
      ]
    }
  },
  computed: {
    // 计算会员等级
    memberLevel() {
      if (this.currentPoints >= 10000) {
        return '黑金'
      } else if (this.currentPoints >= 1000) {
        return '黄金'
      } else if (this.currentPoints >= 500) {
        return '白银'
      } else {
        return '普通'
      }
    },
    // 等级描述
    levelDescription() {
      const descriptions = {
        '普通': '加油消费，升级会员享更多福利',
        '白银': '每月可领取50元代金券',
        '黄金': '每月可领取100元代金券',
        '黑金': '每月可免费看电影2次'
      }
      return descriptions[this.memberLevel]
    },
    // 下一等级需要的积分
    nextLevelNeed() {
      if (this.currentPoints < 500) {
        return 500 - this.currentPoints
      } else if (this.currentPoints < 1000) {
        return 1000 - this.currentPoints
      } else if (this.currentPoints < 10000) {
        return 10000 - this.currentPoints
      } else {
        return 0
      }
    },
    // 可用福利
    availableBenefits() {
      const benefits = []
      
      if (this.memberLevel === '白银' || this.memberLevel === '黄金' || this.memberLevel === '黑金') {
        benefits.push({
          id: 1,
          icon: '🎫',
          title: '50元代金券',
          desc: '满100元可用',
          claimed: this.claimedBenefits.includes(1)
        })
      }
      
      if (this.memberLevel === '黄金' || this.memberLevel === '黑金') {
        benefits.push({
          id: 2,
          icon: '🎟️',
          title: '100元代金券',
          desc: '满200元可用',
          claimed: this.claimedBenefits.includes(2)
        })
      }
      
      if (this.memberLevel === '黑金') {
        benefits.push({
          id: 3,
          icon: '🎬',
          title: '免费观影券',
          desc: '每月2次免费观影机会',
          claimed: this.claimedBenefits.includes(3)
        })
      }
      
      return benefits
    }
  },
  methods: {
    // 获取等级进度
    getProgress(levelPoints) {
      if (this.currentPoints >= levelPoints) {
        return 100
      }
      return (this.currentPoints / levelPoints) * 100
    },
    // 领取福利
    claimBenefit(benefitId) {
      if (!this.claimedBenefits.includes(benefitId)) {
        this.claimedBenefits.push(benefitId)
        // 添加积分变动记录
        this.pointsHistory.unshift({
          id: Date.now(),
          title: '领取福利',
          date: new Date().toISOString().split('T')[0],
          points: benefitId === 1 ? 50 : benefitId === 2 ? 100 : 0,
          type: 'expense'
        })
      }
    },
    // 增加积分
    addPoints(points) {
      this.currentPoints += points
      // 添加积分变动记录
      this.pointsHistory.unshift({
        id: Date.now(),
        title: '测试增加积分',
        date: new Date().toISOString().split('T')[0],
        points: points,
        type: 'income'
      })
    },
    // 重置积分
    resetPoints() {
      this.currentPoints = 350
      this.claimedBenefits = []
    }
  }
}
</script>

<style lang="scss" scoped>
.member-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 70px;
}

/* 会员头部样式 */
.member-header {
  padding: 20px;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  &.silver {
    background: linear-gradient(135deg, #c0c0c0 0%, #a8a8a8 100%);
  }
  
  &.gold {
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
    color: #333;
  }
  
  &.blackgold {
    background: linear-gradient(135deg, #2c2c2c 0%, #000000 100%);
  }
}

.member-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.user-info {
  flex: 1;
}

.username {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: bold;
}

.member-level {
  display: flex;
  align-items: center;
  gap: 10px;
}

.level-badge {
  padding: 4px 12px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
  font-weight: bold;
}

.level-desc {
  font-size: 12px;
  opacity: 0.9;
}

.points-info {
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.current-points,
.next-level {
  text-align: center;
}

.points-label,
.next-label {
  display: block;
  font-size: 12px;
  opacity: 0.8;
  margin-bottom: 5px;
}

.points-value,
.next-need {
  display: block;
  font-size: 16px;
  font-weight: bold;
}

/* 等级说明样式 */
.level-explanation {
  margin: 20px 15px;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.level-explanation h3 {
  margin: 0 0 15px 0;
  font-size: 16px;
  color: #333;
}

.level-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.level-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: #f8f9fa;
  transition: all 0.3s ease;
  
  &.active {
    background-color: #e8f4fd;
    border: 2px solid #409eff;
  }
}

.level-icon {
  font-size: 24px;
  margin-right: 15px;
}

.level-details {
  flex: 1;
}

.level-details h4 {
  margin: 0 0 5px 0;
  font-size: 14px;
  color: #333;
}

.level-details p {
  margin: 0 0 8px 0;
  font-size: 12px;
  color: #666;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #409eff;
  transition: width 0.3s ease;
}

/* 会员福利样式 */
.member-benefits {
  margin: 20px 15px;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.member-benefits h3 {
  margin: 0 0 15px 0;
  font-size: 16px;
  color: #333;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.benefit-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  background-color: #f8f9fa;
}

.benefit-icon {
  font-size: 28px;
  margin-right: 15px;
}

.benefit-info {
  flex: 1;
}

.benefit-info h4 {
  margin: 0 0 5px 0;
  font-size: 14px;
  color: #333;
}

.benefit-info p {
  margin: 0;
  font-size: 12px;
  color: #666;
}

.claim-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background-color: #409eff;
  color: white;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    background-color: #66b1ff;
  }
}

/* 积分记录样式 */
.points-history {
  margin: 20px 15px;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.points-history h3 {
  margin: 0 0 15px 0;
  font-size: 16px;
  color: #333;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
}

.record-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.record-title {
  font-size: 14px;
  color: #333;
}

.record-date {
  font-size: 12px;
  color: #999;
}

.record-points {
  font-size: 14px;
  font-weight: bold;
  
  &.income {
    color: #67c23a;
  }
  
  &.expense {
    color: #f56c6c;
  }
}

/* 测试区域样式 */
.test-section {
  margin: 20px 15px;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.test-section h3 {
  margin: 0 0 15px 0;
  font-size: 16px;
  color: #333;
}

.test-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.test-btn {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  background-color: #409eff;
  color: white;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #66b1ff;
  }
}
</style>
