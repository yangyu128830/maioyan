<template>
  <div id="memberLevel">
    <Header title="会员等级详情" />
    <div class="content">
      <div class="level-info">
        <h2>会员等级说明</h2>
        <p>喵眼电影会员分为三个等级：白银会员、黄金会员和黑金会员。会员等级根据积分进行划分，不同等级享受不同的福利。</p>
      </div>
      
      <div class="level-list">
        <div class="level-item silver">
          <div class="level-header">
            <h3>白银会员</h3>
            <p>积分：≥500分</p>
          </div>
          <div class="level-benefits">
            <h4>享受福利：</h4>
            <ul>
              <li>每月可领取50元代金券</li>
              <li>购票享受9.5折优惠</li>
              <li>优先参与电影首映礼活动</li>
              <li>专属客服服务</li>
            </ul>
          </div>
        </div>
        
        <div class="level-item gold">
          <div class="level-header">
            <h3>黄金会员</h3>
            <p>积分：≥1000分</p>
          </div>
          <div class="level-benefits">
            <h4>享受福利：</h4>
            <ul>
              <li>每月可领取100元代金券</li>
              <li>购票享受9折优惠</li>
              <li>优先参与电影首映礼活动</li>
              <li>专属客服服务</li>
              <li>免费观看每月精选电影一部</li>
            </ul>
          </div>
        </div>
        
        <div class="level-item black">
          <div class="level-header">
            <h3>黑金会员</h3>
            <p>积分：≥10000分</p>
          </div>
          <div class="level-benefits">
            <h4>享受福利：</h4>
            <ul>
              <li>每月可免费观看电影2次</li>
              <li>购票享受8.5折优惠</li>
              <li>优先参与电影首映礼活动</li>
              <li>专属客服服务</li>
              <li>免费观看每月精选电影一部</li>
              <li>生日当天免费观看电影</li>
              <li>专属电影周边礼品</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="积分规则">
        <h3>积分规则</h3>
        <ul>
          <li>每购票1元积1分</li>
          <li>参与活动可获得额外积分</li>
          <li>积分有效期为12个月</li>
          <li>积分可用于兑换代金券和免费观影券</li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'memberLevel',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
#memberLevel {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;

  .content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;

    .level-info {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      h2 {
        color: #333;
        margin-bottom: 10px;
      }

      p {
        color: #666;
        line-height: 1.5;
      }
    }

    .level-list {
      margin-bottom: 20px;

      .level-item {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        .level-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;

          h3 {
            color: #333;
            font-size: 18px;
            font-weight: bold;
          }

          p {
            color: #666;
          }
        }

        .level-benefits {
          h4 {
            color: #333;
            margin-bottom: 10px;
          }

          ul {
            list-style: none;
            padding: 0;

            li {
              color: #666;
              line-height: 1.8;
              position: relative;
              padding-left: 20px;

              &::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: #4CAF50;
                font-weight: bold;
              }
            }
          }
        }

        &.silver {
          border-left: 5px solid #C0C0C0;
        }

        &.gold {
          border-left: 5px solid #FFD700;
        }

        &.black {
          border-left: 5px solid #000000;
        }
      }
    }

    .积分规则 {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      h3 {
        color: #333;
        margin-bottom: 15px;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          color: #666;
          line-height: 1.8;
          position: relative;
          padding-left: 20px;

          &::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #333;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
