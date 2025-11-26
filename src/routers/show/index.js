export default {
    path: '/show',
    component: () => import('@/views/show'),
    children: [
        {
            path: 'movie',
            component: () => import('@/components/showIndex/movie')
        },
        {
            path: 'concert',
            component: () => import('@/components/showIndex/concert')
        },
        {
            path: 'performance',
            component: () => import('@/components/showIndex/performance')
        },
        {
            path: 'talkshow',
            component: () => import('@/components/showIndex/talkshow')
        }
    ]
}
