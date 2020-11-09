import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, resolved, rejected) {
  if (resolved === undefined && rejected === undefined) {
    return originPush.call(this, location).catch(e => {});
  } else {
    return originPush.call(this, location, resolved, rejected);
  }
}

VueRouter.prototype.replace = function (location, resolved, rejected) {
  if (resolved === undefined && rejected === undefined) {
    return originReplace.call(this, location).catch(e => {});
  } else {
    return originReplace.call(this, location, resolved, rejected);
  }
}

Vue.use(VueRouter)




const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router