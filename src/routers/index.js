import Vue from 'vue'
import Router from 'vue-router'
// 为了方便管理，路由也按需加载
import movieRouter from '../routers/movie'
import cityRouter from '../routers/city'
import personRouter from '../routers/person'
import memberRouter from '../routers/member'
import bargainRouter from '../routers/bargain'
import showRouter from '../routers/show'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/movie/nowPlaying'
    },
   movieRouter,
   cityRouter,
   personRouter,
   memberRouter,
   bargainRouter,
   showRouter
  ]
})
