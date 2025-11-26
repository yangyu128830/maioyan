<template>
  <div id="showPage">
    <!-- 顶部分类标签 -->
    <div class="category-tabs">
      <router-link 
        v-for="category in categories" 
        :key="category.path"
        :to="`/show/${category.path}`"
        :class="['tab-item', { active: $route.path.includes(category.path) }]"
      >
        {{ category.name }}
      </router-link>
    </div>
    
    <!-- 内容区域 -->
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowIndex',
  data() {
    return {
      categories: [
        { name: '电影', path: 'movie' },
        { name: '演唱会', path: 'concert' },
        { name: '演出', path: 'performance' },
        { name: '脱口秀', path: 'talkshow' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#showPage {
  padding-bottom: 60px; // 为底部导航留出空间
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.category-tabs {
  display: flex;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 12px 12px;
  overflow: hidden;
  margin-bottom: 20px;
  
  .tab-item {
    flex: 1;
    padding: 15px 0;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #666;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      background: rgba(102, 126, 234, 0.1);
      color: #667eea;
    }
    
    &.active {
      color: #667eea;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 60%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        border-radius: 2px;
      }
    }
  }
}

.content-wrapper {
  padding: 0 15px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .category-tabs .tab-item {
    font-size: 14px;
    padding: 12px 0;
  }
}

@media (max-width: 480px) {
  .category-tabs .tab-item {
    font-size: 13px;
    padding: 10px 0;
  }

  .content-wrapper {
    padding: 0 10px;
  }
}
</style>
