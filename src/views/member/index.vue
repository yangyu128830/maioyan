<template>
    <div id="member">
       <Header title="会员中心"/>
       <div class="content">
           <div class="member-info">
               <div class="member-avatar">
                   <img src="@/assets/personal.png" alt="头像">
               </div>
               <div class="member-level">
                   <h2>{{ memberLevel.name }}</h2>
                   <p>当前积分：{{ currentPoints }}</p>
                   <div class="progress-bar">
                       <div class="progress" :style="{ width: progressWidth + '%' }"></div>
                   </div>
                   <p>距离下一等级还需：{{ pointsToNextLevel }}分</p>
               </div>
           </div>
           
           <div class="member-benefits">
               <h3>会员福利</h3>
               <div class="benefits-list">
                   <div class="benefit-item" v-for="benefit in memberLevel.benefits" :key="benefit.id">
                       <div class="benefit-icon">{{ benefit.icon }}</div>
                       <div class="benefit-info">
                           <h4>{{ benefit.title }}</h4>
                           <p>{{ benefit.description }}</p>
                       </div>
                       <button v-if="benefit.canClaim && !benefit.claimed" @click="claimBenefit(benefit.id)" class="claim-btn">立即领取</button>
                       <span v-else-if="benefit.claimed" class="claimed-text">已领取</span>
                   </div>
               </div>
           </div>
           
           <div class="level-rules">
               <h3>会员等级规则</h3>
               <div class="rules-list">
                   <div class="rule-item" v-for="level in levels" :key="level.id" :class="{ active: level.id === memberLevel.id }">
                       <div class="rule-level">
                           <h4>{{ level.name }}</h4>
                           <p>{{ level.points }}分</p>
                       </div>
                       <div class="rule-benefits">
                           <ul>
                               <li v-for="benefit in level.benefits" :key="benefit.id">{{ benefit.title }}</li>
                           </ul>
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
    name:'member',
    components:{
        Header,
        Footer
    },
    data() {
        return {
            currentPoints: 800, // 当前积分，可修改测试不同等级
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
            // 根据当前积分判断会员等级
            if (this.currentPoints >= 10000) {
                return this.levels[2];
            } else if (this.currentPoints >= 1000) {
                return this.levels[1];
            } else if (this.currentPoints >= 500) {
                return this.levels[0];
            } else {
                return { name: '普通用户', benefits: [] };
            }
        },
        nextLevel() {
            // 计算下一等级
            if (this.currentPoints < 500) {
                return this.levels[0];
            } else if (this.currentPoints < 1000) {
                return this.levels[1];
            } else if (this.currentPoints < 10000) {
                return this.levels[2];
            } else {
                return null;
            }
        },
        pointsToNextLevel() {
            // 计算距离下一等级还需的积分
            if (this.nextLevel) {
                return this.nextLevel.points - this.currentPoints;
            } else {
                return 0;
            }
        },
        progressWidth() {
            // 计算进度条宽度
            if (this.nextLevel) {
                const currentLevelPoints = this.memberLevel.points || 0;
                const progress = (this.currentPoints - currentLevelPoints) / (this.nextLevel.points - currentLevelPoints) * 100;
                return Math.max(0, Math.min(100, progress));
            } else {
                return 100;
            }
        }
    },
    methods: {
        claimBenefit(benefitId) {
            // 领取福利
            const benefit = this.memberLevel.benefits.find(b => b.id === benefitId);
            if (benefit) {
                benefit.claimed = true;
                alert('福利领取成功！');
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
    }
    
    .member-info {
        display: flex;
        align-items: center;
        padding: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        margin-bottom: 20px;
    }
    
    .member-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
    .member-level {
        flex: 1;
        
        h2 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        
        p {
            font-size: 14px;
            margin-bottom: 10px;
        }
        
        .progress-bar {
            width: 100%;
            height: 8px;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 10px;
            
            .progress {
                height: 100%;
                background-color: white;
                transition: width 0.3s ease;
            }
        }
    }
    
    .member-benefits,
    .level-rules {
        padding: 0 20px;
        margin-bottom: 20px;
        
        h3 {
            font-size: 18px;
            margin-bottom: 15px;
            color: #333;
        }
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
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        
        .benefit-icon {
            font-size: 30px;
            margin-right: 15px;
        }
        
        .benefit-info {
            flex: 1;
            
            h4 {
                font-size: 16px;
                margin-bottom: 5px;
                color: #333;
            }
            
            p {
                font-size: 14px;
                color: #666;
            }
        }
        
        .claim-btn {
            padding: 8px 16px;
            background-color: #ff4d4f;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }
        
        .claimed-text {
            font-size: 14px;
            color: #999;
        }
    }
    
    .rules-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .rule-item {
        padding: 15px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-left: 4px solid #ddd;
        transition: all 0.3s ease;
        
        &.active {
            border-left-color: #667eea;
            box-shadow: 0 4px 8px rgba(102, 126, 234, 0.2);
        }
        
        .rule-level {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            
            h4 {
                font-size: 16px;
                color: #333;
            }
            
            p {
                font-size: 14px;
                color: #666;
            }
        }
        
        .rule-benefits {
            
            ul {
                list-style: none;
                
                li {
                    font-size: 14px;
                    color: #666;
                    margin-bottom: 5px;
                    padding-left: 15px;
                    position: relative;
                    
                    &::before {
                        content: '•';
                        position: absolute;
                        left: 0;
                        color: #667eea;
                    }
                }
            }
        }
    }
}
</style>