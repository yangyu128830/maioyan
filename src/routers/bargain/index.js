export default {
    path: '/bargain',
    component: () => import('@/views/bargain'),
    children: [
        {
            path: '',
            component: () => import('@/views/bargain/index.vue')
        },
        {
            path: 'detail/:id',
            component: () => import('@/views/bargain/detail.vue'),
            props: true
        },
        {
            path: 'submit',
            component: () => import('@/views/bargain/submit.vue')
        }
    ]
}