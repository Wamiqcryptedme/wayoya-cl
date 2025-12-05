import { createRouter, createWebHistory } from 'vue-router';
import { supabase } from '@/lib/supabase';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },

    // AUTH ROUTES
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/Login.vue'),
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('@/views/auth/ForgotPassword.vue'),
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('@/views/auth/ResetPassword.vue'),
    },

    // ONBOARDING
    {
      path: '/signup',
      name: 'supplier-signup',
      component: () => import('@/views/supplier/SupplierSignup.vue'),
    },
    {
      path: '/confirmation',
      name: 'supplier-confirmation',
      component: () => import('@/views/supplier/SignupConfirmation.vue'),
    },
    {
      path: '/email-verified',
      name: 'email-verified',
      component: () => import('@/views/EmailVerified.vue'),
    },

    // DASHBOARD (Protected)
    {
      path: '/',
      component: () => import('@/layouts/DashboardLayout.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/dashboard/Home.vue'),
        },
        {
          path: 'listings',
          name: 'listings',
          component: () => import('@/views/dashboard/Placeholder.vue'),
        },
        {
          path: 'bookings',
          name: 'bookings',
          component: () => import('@/views/dashboard/Placeholder.vue'),
        },
        {
          path: 'revenue',
          name: 'revenue',
          component: () => import('@/views/dashboard/Placeholder.vue'),
        },
        {
          path: 'reviews',
          name: 'reviews',
          component: () => import('@/views/dashboard/Placeholder.vue'),
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/dashboard/Placeholder.vue'),
        },
      ],
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/login',
    },
  ],
});

// Auth guard
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;