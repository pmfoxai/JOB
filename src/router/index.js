import { createRouter, createWebHistory,createWebHashHistory  } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import Efect from '../middleware/Effectt/Effect';

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => AppLayout,
            meta: {
                middleware: [Efect],
            },
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: () => import('@/views/Home.vue'),
                },
                {
                    path: '/About',
                    name: 'About',
                    component: () => import('@/views/About.vue'),
                },
                {
                    path: '/service-solutions',
                    name: 'ServiceSolutions',
                    component: () => import('@/views/Services/ServiceSolutions.vue'),
                }
            ]
        },
        {
            path: "/:pathMatch(.*)*",
            name: 'NotFound',
            component: () => import('@/views/pages/NotFound.vue')
        }
    ]
});

function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];
    if (!subsequentMiddleware) return context.next;
    return (...parameters) => {
        context.next(...parameters);

        const nextMiddleware = nextFactory(context, middleware, index + 1);
        subsequentMiddleware({ ...context, next: nextMiddleware });
    };
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware];

        const context = {
            from,
            next,
            router,
            to,
        };
        const nextMiddleware = nextFactory(context, middleware, 1);

        return middleware[0]({ ...context, next: nextMiddleware });
    }
    return next();
});



export default router;
