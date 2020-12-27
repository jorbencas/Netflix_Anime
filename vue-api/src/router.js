import Vue from 'vue';
import Router from 'vue-router'
import Core from "./mixings";

Vue.use(Router)

let router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import("@/views/HelloWorld") 
    },
    {
      path: '/Animes',
      name: 'Animes',
      component: () => import("@/views/Anime")
    },
    {
      path: '/Animes',
      name: 'Animes:id',
      component: () => import('@/views/AnimeDetails')
    }
  ]
})


router.beforeEach((to, from, next) => {
  if (Core.$currentUser != undefined) {
    switch (Core.$currentUser.kind) {
      case 'admin':
        Core.to('/Auth');
        break;
      default:
          Core.to('/');
        break;
    }
  }else{
    if(to.router == 'Configuration') Core.to('/')
    else Core.to('/')
  }
  next();
});

export default router;