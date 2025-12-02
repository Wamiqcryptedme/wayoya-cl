import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ==========================================
    // DEFAULT LANDING PAGE
    // ==========================================
    {
      path: '/',
      redirect: '/login', // ✅ Changed from /signup to /login
    },

    // ==========================================
    // AUTH ROUTES
    // ==========================================
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

    // ==========================================
    // SUPPLIER ONBOARDING FLOW
    // ==========================================
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

    // Catch-all
    {
      path: '/:pathMatch(.*)*',
      redirect: '/login',
    },
  ],
});

export default router;