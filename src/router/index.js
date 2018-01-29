import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '../page/MovieList'
import videoPage from '../page/videoPage.vue'
import text from '../components/ratings.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MovieList',
      component: MovieList
    },
    {
      path: '/videoPage',
      name: 'videoPage',
      component: videoPage
    },
    {
      path: '/test',
      name: 'text',
      component: text
    }
  ]
})
