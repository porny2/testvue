import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('./views/home' /* webpackChunkName: 'home' */)
const about = () => import('./views/about' /* webpackChunkName: 'about' */)
const contract = () => import('./views/contract' /* webpackChunkName: 'contract' */)
const User = () => import('./views/User' /* webpackChunkName: 'user' */)
const UserProfile = () => import('./views/UserProfile' /* webpackChunkName: 'user-profle' */)
//  import home from './views/home'
// import about from   './views/about'
// import contract from './views/contract'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: home },
    { path: '/about', component: about },
    { path: '/contract', component: contract },
    { path: '/user', component: User },
    { path: '/user/:id', component: UserProfile },
    { path: '*', component: home }
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router