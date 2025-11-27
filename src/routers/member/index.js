import memberIndex from '@/views/member/index.vue'
import memberLevel from './level'

export default {
  path: '/member',
  name: 'member',
  component: memberIndex,
  children: [
    {
      path: 'level',
      name: 'memberLevel',
      component: memberLevel
    }
  ]
}
