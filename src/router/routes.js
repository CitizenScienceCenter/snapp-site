
import Login from '@/views/user/Login'
import Register from '@/views/user/Register'
import Profile from '@/views/user/Profile'

import RequestReset from '@/views/shared/user/RequestReset'
import Reset from '@/views/shared/user/Reset'

import * as Challenge from '@/views/challenge'
import Forum from '@/views/Forum'
import Ranking from '@/views/Ranking'

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
const Home = resolve => {
    require.ensure(["../views/Home.vue"], () => {
        resolve(require("../views/Home.vue"));
    });
};
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
        path: "/",
        component: Home,
        name: 'Home',
        beforeEnter: null,
        meta: {
            requiresAuth: true,
            i18n: "page-homepage",
            nav: false
        }
    },
    {
        path: "/challenge",
        component: Challenge.Task,
        name: "Challenge",
        meta: {requiresAuth: true, i18n: 'page-challenge', nav: true},
        children: [
            {
                path: ":id",
                name: "ChallengeTaskId",
                component: Challenge.Task,
                meta: {
                    requiresAuth: true,
                    i18n: 'page-challenge'
                }
            }
        ]
    },
    {
        path: "/ranking",
        component: Ranking,
        name: "Ranking",
        meta: {requiresAuth: true, i18n: 'page-ranking', nav: true},
    },
    {
        path: "/forum",
        component: Forum,
        name: "Forum",
        meta: {requiresAuth: true, i18n: 'page-forum', nav: true},
    },
    {
        path: "/about",
        component: About,
        meta: {i18n: "page-about", nav: true}
    },
    {
        path: "/terms",
        component: Terms,
        meta: {i18n: "page-terms", nav: false}
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {i18n: 'page-login', nav: false}
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {i18n: 'page-register', nav: false}
    },
    {
        path: "/reset",
        name: "ResetRequest",
        component: RequestReset,
        meta: {i18n: 'page-reset', nav: false}
    },
    {
        path: "/reset/:token",
        name: "Reset",
        component: Reset,
        meta: {i18n: 'page-reset', nav: false}
    },
    {
        path: "/profile",
        name: "UserProfile",
        component: Profile,
        meta: {requiresAuth: true, i18n: 'page-profile', nav: false}
    },
    {
        path: "/error",
        name: "Error",
        component: Home.Error,
        meta: {i18n: 'page-profile', nav: false}
    }
];
