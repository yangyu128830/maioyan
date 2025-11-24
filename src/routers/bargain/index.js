import BargainIndex from '@/views/bargain/index'
import BargainDetail from '@/views/bargain/detail'
import BargainSubmit from '@/views/bargain/submit'

export default {
  path: '/bargain',
  component: BargainIndex,
  children: [
    {
      path: '',
      name: 'BargainIndex',
      component: BargainIndex
    },
    {
      path: 'detail/:id',
      name: 'BargainDetail',
      component: BargainDetail
    },
    {
      path: 'submit',
      name: 'BargainSubmit',
      component: BargainSubmit
    }
  ]
}