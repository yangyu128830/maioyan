import Vue from 'vue'
import Router from 'vue-router'
import ShowIndex from '../../views/show/index.vue'

Vue.use(Router)

export default {
  path: '/show',
  name: 'show',
  component: ShowIndex,
  children: [
    {
      path: 'movie',
      name: 'showMovie',
      component: () => import('../../components/showIndex/movie.vue')
    },
    {
      path: 'concert',
      name: 'showConcert',
      component: () => import('../../components/showIndex/concert.vue')
    },
    {
      path: 'performance',
      name: 'showPerformance',
      component: () => import('../../components/showIndex/performance.vue')
    },
    {
      path: 'talkshow',
      name: 'showTalkshow',
      component: () => import('../../components/showIndex/talkshow.vue')
    },
    {
      path: '',
      redirect: 'movie'
    }
  ]
}
