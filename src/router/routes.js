export default [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/mine.vue'),
  },
  {
    path: '/owner',
    name: 'owner',
    component: () => import(/* webpackChunkName: "owner" */ '../views/owner.vue'),
  },
  {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "message" */ '../views/message.vue'),
  },
]
