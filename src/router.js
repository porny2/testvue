import Vue from 'vue'
import VueRouter from 'vue-router'

const Chart = () => import('./views/Chart' /* webpackChunkName: 'chart' */)
const Form = () => import('./views/Form' /* webpackChunkName: 'form' */)
const home = () => import('./views/home' /* webpackChunkName: 'home' */)
const about = () => import('./views/about' /* webpackChunkName: 'about' */)
const contract = () => import('./views/contract' /* webpackChunkName: 'contract' */)
const User = () => import('./views/User' /* webpackChunkName: 'user' */)
const UserProfile = () => import('./views/UserProfile' /* webpackChunkName: 'user-profle' */)
const I18n = () => import('./views/I18n' /* webpackChunkName: 'i18n' */)
//  import home from './views/home'
// import about from   './views/about'
// import contract from './views/contract'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: home },
    { path: '/form', component: Form },
    { path: '/chart', component: Chart },
    { path: '/about', component: about },
    { path: '/contract', component: contract },
    { path: '/user', component: User },
    { path: '/user/:id', component: UserProfile },
    { path: '/i18n', component: I18n },
    { path: '*', component: home }
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router