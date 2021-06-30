import Home from '@/views/Home'

// import Login from '@/views/user/Login'
// import Profile from '@/views/user/Profile'

// import RequestReset from '@/views/shared/user/RequestReset'
// import Reset from '@/views/shared/user/Reset'

// import Identification from '@/views/Identification'
// import Forum from '@/views/Forum'

// import Ranking from '@/views/ranking/Ranking'
import RankingSpring2019 from "@/views/ranking/RankingSpring2019";

import ChildView from '@/views/shared/ChildView';
import RankingAutumn2019 from "../views/ranking/RankingAutumn2019";

/*
const logout = (to, from, next) => {
    //localStorage.removeItem('user');
    store.commit('c3s/user/SET_CURRENT_USER', null);
    store.commit('c3s/user/SET_ANON', false);
    console.log('logout');
    next();
};
*/

// lazy loading routes
const About = resolve => {
    require.ensure(["../views/static/About.vue"], () => {
        resolve(require("../views/static/About.vue"));
    });
};
const Terms = resolve => {
    require.ensure(["../views/shared/static/Terms.vue"], () => {
        resolve(require("../views/shared/static/Terms.vue"));
    });
};

export const routes = [
         {
           path: "/:lang",
           component: {
             render(c) {
               return c("router-view");
             },
           },
           children: [
             {
               path: "",
               component: Home,
               name: "Home",
               beforeEnter: null,
               meta: {
                 requiresAuth: true,
                 i18n: "navigation-homepage",
                 nav: false,
               },
             },
            //  {
            //    path: "identification",
            //    component: Identification,
            //    name: "Identification",
            //    meta: {
            //      requiresAuth: true,
            //      i18n: "navigation-identification",
            //      nav: false,
            //    },
            //    children: [
            //      {
            //        path: ":id",
            //        name: "ChallengeTaskId",
            //        component: Identification,
            //        meta: {
            //          requiresAuth: true,
            //          i18n: "navigation-challenge",
            //        },
            //      },
            //    ],
            //  },
             {
               path: "about",
               component: About,
               meta: { i18n: "navigation-about", nav: true },
             },
             {
               path: "ranking",
               component: ChildView,
               meta: { i18n: "navigation-ranking", nav: true },
               redirect: "ranking/autumn-2019",
               children: [
                //  {
                //    path: "current",
                //    component: Ranking,
                //    meta: {
                //      requiresAuth: true,
                //      i18n: "navigation-current-ranking",
                //      nav: false,
                //    },
                //  },
                 {
                   path: "autumn-2019",
                   component: RankingAutumn2019,
                   meta: { i18n: "navigation-ranking-autumn-2019", nav: true },
                 },
                 {
                   path: "spring-2019",
                   component: RankingSpring2019,
                   meta: { i18n: "navigation-ranking-spring-2019", nav: true },
                 },
               ],
             },
            //  {
            //    path: "forum",
            //    component: Forum,
            //    name: "Forum",
            //    meta: {
            //      requiresAuth: true,
            //      i18n: "navigation-forum",
            //      nav: false,
            //    },
            //  },
             {
               path: "terms",
               component: Terms,
               meta: { i18n: "navigation-terms", nav: false },
             },
             //  {
             //    path: "login",
             //    name: "Login",
             //    component: Login,
             //    meta: { i18n: "navigation-login", nav: false },
             //  },
             //  {
             //    path: "reset",
             //    name: "ResetRequest",
             //    component: RequestReset,
             //    meta: { i18n: "navigation-reset", nav: false },
             //  },
             //  {
             //    path: "reset/:token",
             //    name: "Reset",
             //    component: Reset,
             //    meta: { i18n: "navigation-reset", nav: false },
             //  },
             //  {
             //    path: "profile",
             //    name: "UserProfile",
             //    component: Profile,
             //    meta: {
             //      requiresAuth: true,
             //      i18n: "navigation-profile",
             //      nav: false,
             //    },
             //  },
             {
               path: "error",
               name: "Error",
               component: Home.Error,
               meta: { i18n: "navigation-profile", nav: false },
             },
           ],
         },
       ];
