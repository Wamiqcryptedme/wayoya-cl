import { createRouter, createWebHistory } from 'vue-router';
import { authService } from '@/services/authService';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/supplier/signup',
      name: 'supplier-signup',
      component: () => import('@/views/supplier/SupplierSignup.vue'),
      meta: { 
        requiresGuest: true, // Only accessible when NOT logged in
      },
    },
    {
      path: '/supplier/confirmation',
      name: 'supplier-confirmation',
      component: () => import('@/views/supplier/SignupConfirmation.vue'),
      meta: { 
        requiresGuest: true,
      },
    },
    {
      path: '/email-verified',
      name: 'email-verified',
      component: () => import('@/views/EmailVerified.vue'),
      meta: {
        requiresAuth: true, // Must be logged in (Supabase auto-logs in after email verification)
    },
  },
  ],
});

// ==========================================
// NAVIGATION GUARDS
// ==========================================

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const requiresGuest = to.meta.requiresGuest;
  const requiresRole = to.meta.requiresRole as string | undefined;
  const requiresApproval = to.meta.requiresApproval;
  const isPendingPage = to.meta.isPendingPage;

  try {
    // Get current user
    const user = await authService.getCurrentUser();
    const isAuthenticated = !!user;

    // RULE 1: Guest-only routes (signup, login)
    if (requiresGuest && isAuthenticated) {
      // Already logged in, redirect to appropriate dashboard
      const profile = await getUserProfile(user.id);
      return next(getDashboardRoute(profile?.role));
    }

    // RULE 2: Auth required
    if (requiresAuth && !isAuthenticated) {
      return next({ name: 'login', query: { redirect: to.fullPath } });
    }

    // RULE 3: Role-based access
    if (requiresRole && isAuthenticated) {
      const profile = await getUserProfile(user.id);
      
      if (!profile || profile.role !== requiresRole) {
        return next({ name: 'unauthorized' });
      }

      // RULE 4: Supplier approval check
      if (requiresRole === 'supplier' && requiresApproval && !isPendingPage) {
        const { supplierService } = await import('@/services/supplierService');
        const supplier = await supplierService.getSupplierProfile(user.id);

        if (!supplier) {
          // Supplier record doesn't exist yet (shouldn't happen, but handle it)
          return next({ name: 'supplier-pending' });
        }

        if (supplier.status === 'pending') {
          return next({ name: 'supplier-pending' });
        }

        if (supplier.status === 'rejected') {
          // TODO: Create a "Rejected" page explaining why
          return next({ name: 'supplier-pending' }); // For now, same page
        }

        if (supplier.status === 'suspended') {
          return next({ name: 'unauthorized' });
        }

        // Status is 'approved', allow access
      }
    }

    // All checks passed
    next();

  } catch (error) {
    console.error('Navigation guard error:', error);
    
    // On error, allow navigation to public routes
    if (!requiresAuth) {
      next();
    } else {
      next({ name: 'login' });
    }
  }
});

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get user profile from database
 */
async function getUserProfile(userId: string) {
  try {
    const { supabase } = await import('@/lib/supabase');
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Failed to get user profile:', error);
    return null;
  }
}

/**
 * Get default dashboard route based on role
 */
function getDashboardRoute(role?: string) {
  switch (role) {
    case 'admin':
      return { name: 'admin-dashboard' };
    case 'supplier':
      return { name: 'supplier-dashboard' };
    case 'customer':
      return { name: 'customer-bookings' };
    default:
      return { name: 'home' };
  }
}

export default router;



