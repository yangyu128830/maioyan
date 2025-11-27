<template>
  <div id="footerPage">
    <ul class="menu-list">
      <router-link tag="li" to="/movie">
        <img src="@/assets/movie.png" alt>
        <p>喵眼电影</p>
      </router-link>
      <router-link tag="li" to="/city">
          <img src="@/assets/CityHall.png" alt>
          <p>喵眼城市</p>
      </router-link>
      <router-link tag="li" to="/member">
        <img src="@/assets/message.png" alt>
        <p>会员中心</p>
      </router-link>
      <router-link tag="li" to="/person">
        <img src="@/assets/personal.png" alt>
        <p>个人中心</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name:'footerPage'
};
</script>

<style lang="scss" scoped>
#footerPage {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  background-color: #fff;
  z-index: 1000;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  
  ul {
    width: 100%;
    display: flex;
    list-style: none;
  }
  
  ul li {
    flex: 1;
    height: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
  }
  
  ul li:hover {
    background-color: #fafafa;
  }
  
  ul li img {
    display: block;
    width: 20px;
    height: 20px;
    margin-bottom: 6px;
  }
  
  ul li p {
    margin: 0;
    font-size: 12px;
    transition: color 0.3s ease;
  }
  
  .router-link-active {
    color: #ff4d4f;
  }
}
</style>
