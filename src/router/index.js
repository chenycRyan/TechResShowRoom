import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/mesHome',
    name: 'mesHome',
    component: () => import('@/views/mesHome.vue'),
    meta: {
      title: 'hb-kanban',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: 'hb-kanban',
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: {
      title: 'hb-kanban',
    },
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('@/views/menu.vue'),
    meta: {
      title: 'hb-kanban',
    },
  },
  {
    path: '/showWeb',
    name: 'showWeb',
    component: () => import('@/views/showWeb.vue'),
    meta: {
      title: 'hb-kanban',
    },
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/demo.vue'),
    meta: {
      title: '图片轮播',
    },
  },
  {
    path: '/fileView',
    name: 'fileView',
    component: () => import('@/views/file/fileView.vue'),
    meta: {
      title: 'hb-kanban',
    },
  },
  {
    path: '/liveView',
    name: 'liveView',
    component: () => import('@/views/liveView/liveView'),
    meta: { title: 'hb-kanban' },
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
