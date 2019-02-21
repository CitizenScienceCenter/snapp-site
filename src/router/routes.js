
import Login from '@/views/user/Login'
import Register from '@/views/user/Register'
import Profile from '@/views/user/Profile'

import RequestReset from '@/views/shared/user/RequestReset'
import Reset from '@/views/shared/user/Reset'

import * as Challenge from '@/views/challenge'
import Forum from '@/views/Forum'

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
            page: "page-homepage",
            nav: false
        }
    },
    /*
    {
        path: "/logout",
        component: Home,
        name: "Logout",
        beforeEnter: logout,
        meta: {
            page: 'page-logout',
            nav: false
        }
    },
    */
    {
        path: "/challenge",
        component: Challenge.Task,
        name: "Challenge",
        meta: {requiresAuth: true, page: 'page-challenge', nav: true},
        children: [
            /*
            {
                path: "",
                name: "ChallengeTask",
                component: Challenge.Task,
                meta: {
                    requiresAuth: true,
                    page: 'page-challenge'
                }
            },*/
            {
                path: ":id",
                name: "ChallengeTaskId",
                component: Challenge.Task,
                meta: {
                    requiresAuth: true,
                    page: 'page-challenge'
                }
            }
        ]
    },
    {
        path: "/forum",
        component: Forum,
        name: "Forum",
        meta: {requiresAuth: true, page: 'page-forum', nav: true},
    },
    {
        path: "/about",
        component: About,
        meta: {page: "page-about", nav: true}
    },
    {
        path: "/terms",
        component: Terms,
        meta: {page: "page-terms", nav: false}
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {page: 'page-login', nav: false}
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {page: 'page-register', nav: false}
    },
    {
        path: "/reset",
        name: "ResetRequest",
        component: RequestReset,
        meta: {page: 'page-reset', nav: false}
    },
    {
        path: "/reset/:token",
        name: "Reset",
        component: Reset,
        meta: {page: 'page-reset', nav: false}
    },
    {
        path: "/profile",
        name: "UserProfile",
        component: Profile,
        meta: {requiresAuth: true, page: 'page-profile', nav: false}
    },
    {
        path: "/error",
        name: "Error",
        component: Home.Error,
        meta: {page: 'page-profile', nav: false}
    }
];
