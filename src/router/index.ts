import { createRouter, createWebHistory } from 'vue-router';
import { authService } from '@/services/authService';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ==========================================
    // SUPPLIER ONBOARDING FLOW (Phase 1)
    // ==========================================
    {
      path: '/',
      redirect: '/signup',
    },
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

    // Catch-all for now (we'll add more routes later)
    {
      path: '/:pathMatch(.*)*',
      redirect: '/signup',
    },
  ],
});

// No guards needed yet - just basic navigation
export default router;
