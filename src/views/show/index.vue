<template>
  <div id="showPage">
    <Header title="电影演出" />
    <div class="show-tabs">
      <router-link tag="div" to="/show/movie" :class="{active: $route.path === '/show/movie'}">
        电影
      </router-link>
      <router-link tag="div" to="/show/concert" :class="{active: $route.path === '/show/concert'}">
        演唱会
      </router-link>
      <router-link tag="div" to="/show/performance" :class="{active: $route.path === '/show/performance'}">
        演出
      </router-link>
      <router-link tag="div" to="/show/talkshow" :class="{active: $route.path === '/show/talkshow'}">
        脱口秀
      </router-link>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'showPage',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
#showPage {
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  padding-bottom: 60px;
  .show-tabs {
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: 100;
    div {
      flex: 1;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
      color: #666;
      position: relative;
      transition: all 0.3s ease;
      &:hover {
        color: #ff4d4f;
        background-color: rgba(255, 77, 79, 0.05);
      }
      &.active {
        color: #ff4d4f;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 3px;
          background: linear-gradient(to right, #ff4d4f, #ff7875);
          border-radius: 2px;
          animation: tabSlide 0.3s ease;
        }
      }
    }
  }
  @keyframes tabSlide {
    from {
      width: 0;
    }
    to {
      width: 30px;
    }
  }
}
</style>
