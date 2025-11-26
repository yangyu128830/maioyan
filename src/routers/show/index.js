export default {
    path: '/show',
    component: () => import('@/views/show'),
    children: [
        // 可以在这里添加电影演出页面的子路由
    ]
}