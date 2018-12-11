import Activity from '@/views/Activity'
import * as User from '@/views/shared/user'
import Profile from '@/views/user/Profile'
import * as Challenge from '@/views/challenge'
import store from '../store/store.js'

const logout = (to, from, next) => {
    localStorage.removeItem('user');
    store.commit('c3s/user/SET_CURRENT_USER', null);
    store.commit('c3s/user/SET_ANON', false);
    next()
};

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
        meta: {page: "page-homepage", nav: false}
    },
    {
        path: "/logout",
        component: Home,
        name: "Logout",
        beforeEnter: logout,
        meta: {page: 'page-logout', nav: false}
    },
    {
        path: "/challenge",
        component: Activity,
        meta: {requiresAuth: true, page: 'page-challenge', nav: true},
        children: [
            /*
            {
                path: "",
                name: "ChallengeStart",
                component: Challenge.Start,
                meta: {
                    requiresAuth: true,
                    breadcrumb: "Transcribe",
                    page: 'page-challenge'
                }
            },
            */
            {
                path: "",
                name: "ChallengeTask",
                component: Challenge.Task,
                meta: {
                    requiresAuth: true,
                    page: 'page-challenge'
                }
            },
            {
                path: "complete",
                name: "ChallengeComplete",
                component: Challenge.Complete,
                meta: {
                    requiresAuth: true,
                    page: 'page-challenge'
                }
            }
        ]
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
        component: User.Login,
        meta: {page: 'page-login', nav: false}
    },
    {
        path: "/register",
        name: "Register",
        component: User.Register,
        meta: {page: 'page-register', nav: false}
    },
    {
        path: "/reset",
        name: "ResetRequest",
        component: User.RequestReset,
        meta: {page: 'page-reset', nav: false}
    },
    {
        path: "/reset/:token",
        name: "Reset",
        component: User.Reset,
        meta: {page: 'page-reset', nav: false}
    },
    {
        path: "/profile",
        name: "UserProfile",
        component: Profile,
        meta: {requiresAuth: true, breadcrumb: 'View User', page: 'page-profile', nav: false}
    },
    {
        path: "/error",
        name: "Error",
        component: Home.Error,
        meta: {page: 'page-profile', nav: false}
    }
];
