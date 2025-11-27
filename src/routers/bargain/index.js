export default {
    path: '/bargain',
    component: () => import('@/views/bargain'),
    children: [
        {
            path: 'detail/:goodsId',
            components: {
                detail: () => import('@/views/bargain/detail.vue'),
            },
            props: {
                detail: true
            }
        }
    ]
}
