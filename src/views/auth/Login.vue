<template>
  <div class="flex flex-col min-h-screen bg-brand-bg">
    
    <!-- HEADER -->
    <header class="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-[60px] shrink-0">
      <div class="w-28 md:w-32">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 523.33 107.67">
          <g><path fill="#009986" d="M0,37.94V12.18A10.07,10.07,0,0,1,10.07,2.11h.14A10.07,10.07,0,0,1,20.28,12.18V39.06c0,9.72,5.83,14.86,13.75,14.86,9.17,0,14.45-6.11,14.45-14.86V12.18A10.07,10.07,0,0,1,58.55,2.11h0A10.07,10.07,0,0,1,68.62,12.18V39.06c0,8.75,5.28,14.86,14.58,14.86C91.12,53.92,97,48.78,97,39.06V12.18A10.07,10.07,0,0,1,107,2.11h0a10.07,10.07,0,0,1,10.07,10.07V37.94c0,21.81-9.72,35-31.25,35C68.9,73,59.17,62.67,59.31,49.75H57.92c0,12.92-9.58,23.2-26.53,23.2C9.72,73,0,59.75,0,37.94Z"/><path fill="#009986" d="M162.65.72c21.95,0,36.53,14.44,36.53,36.11l.1,24.57a10.12,10.12,0,0,1-10.12,10.16h0A10.12,10.12,0,0,1,179,61.44V57h-1.25v1.39c0,7.23-7.64,14.59-21.11,14.59-18.34,0-30.56-13.62-30.56-34.73C126.12,14.19,140.7.72,162.65.72Zm-.14,53.34c11,0,16.53-7.09,16.53-17.23,0-10.41-6.39-17.22-16.39-17.22-9.72,0-16.39,6.94-16.39,17.22S152.65,54.06,162.51,54.06Z"/><path fill="#009986" d="M258.91,57.11h-1.25v1.67c0,9.44-9,14.17-19.87,14.17-22.08,0-29.44-12.78-29.44-34.31V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10V39.75c0,9.17,5.14,14.17,14.58,14.17,9.86,0,15.7-6.39,15.7-15.56V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10v64c0,19.73-13.48,31.53-36.12,31.53-14.09,0-24.78-4.42-29.93-13.73A10,10,0,0,1,222,79.2h0A10.18,10.18,0,0,1,231.07,85c2,4,6.48,5.92,13,5.92,9.73,0,14.87-4.59,14.87-13.2Z"/><path fill="#009986" d="M420.86,57.11h-1.25v1.67c0,9.44-9,14.17-19.86,14.17-22.09,0-29.45-12.78-29.45-34.31V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10V39.75c0,9.17,5.14,14.17,14.59,14.17,9.86,0,15.69-6.39,15.69-15.56V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10v64c0,19.73-13.47,31.53-36.11,31.53-14.09,0-24.79-4.42-29.94-13.73A10,10,0,0,1,384,79.2h0A10.16,10.16,0,0,1,393,85c2,4,6.49,5.92,13,5.92,9.72,0,14.86-4.59,14.86-13.2Z"/><path fill="#009986" d="M486.7.72c21.95,0,36.53,14.44,36.53,36.11l.1,24.57a10.12,10.12,0,0,1-10.12,10.16h0a10.12,10.12,0,0,1-10.12-10.12V57h-1.25v1.39c0,7.23-7.64,14.59-21.11,14.59-18.34,0-30.56-13.62-30.56-34.73C450.17,14.19,464.75.72,486.7.72Zm-.14,53.34c11,0,16.53-7.09,16.53-17.23,0-10.41-6.39-17.22-16.39-17.22-9.72,0-16.39,6.94-16.39,17.22S476.7,54.06,486.56,54.06Z"/><rect fill="#f76d4d" x="287.75" width="74.88" height="74.88" rx="36"/></g>
        </svg>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="flex-1 flex items-center justify-center p-4 md:p-8">
      
      <div class="w-full max-w-lg bg-white rounded-xl border border-gray-200 py-6 p-5 md:p-6 md:py-8 my-14 relative">
        
        <h1 class="text-2xl font-bold text-brand-dark mb-8">Log in to your account</h1>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-sm font-semibold text-brand-dark mb-2">Email</label>
            <input 
              type="email" 
              v-model="email" 
              required
              class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none">
          </div>

          <div>
            <label class="block text-sm font-semibold text-brand-dark mb-2">Password</label>
            <input 
              type="password" 
              v-model="password" 
              required
              class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none">
          </div>

          <div class="flex items-center justify-between">
            <label class="flex items-center text-sm text-gray-600">
              <input type="checkbox" v-model="rememberMe" class="mr-2">
              Remember me
            </label>
            <router-link to="/forgot-password" class="text-sm font-semibold text-brand-teal hover:underline">
              Forgot password?
            </router-link>
          </div>

          <!-- Pending Message (Yellow/Orange) -->
<div v-if="pendingMessage" class="p-3 bg-yellow-50 border border-yellow-100 rounded-xl text-yellow-700 text-sm flex items-center gap-2">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  {{ pendingMessage }}
</div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="p-3 bg-red-100 rounded-xl text-red-700 text-sm flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {{ errorMessage }}
          </div>

          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full py-3 bg-brand-teal text-white font-bold rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center">
            <span v-if="!isLoading">Login</span>
            <svg v-else class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </button>
        </form>

        <div class="mt-6 text-center text-sm text-gray-600">
          Don't have an account? 
          <router-link to="/signup" class="text-brand-teal font-semibold hover:underline">
            Sign up
          </router-link>
        </div>

      </div>

    </main>

    <!-- Footer -->
    <footer class="bg-brand-tealDark text-white py-8 px-6 mt-auto shrink-0">
      <div class="max-w-5xl mx-auto text-center">
        <p class="text-sm opacity-80">Need help? Contact us at <a href="mailto:support@wayoya.com" class="underline">support@wayoya.com</a></p>
        <p class="text-xs opacity-60 mt-4">© 2026 wayoya</p>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '@/services/authService';
import { supplierService } from '@/services/supplierService';

const router = useRouter();

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const isLoading = ref(false);
const errorMessage = ref('');
const pendingMessage = ref('');

const handleLogin = async () => {
  if (!email.value || !password.value) {
    errorMessage.value = 'Please fill in all fields';
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';
  pendingMessage.value = '';

  try {
    // Step 1: Login with Supabase Auth
    const { user } = await authService.login(email.value, password.value);
    
    if (!user) {
      throw new Error('Login failed');
    }

    console.log('✅ User authenticated:', user.id);

    // Step 2: Check if supplier profile exists and is approved
    const supplier = await supplierService.getSupplierProfile(user.id);

    if (!supplier) {
      // User exists but no supplier profile (shouldn't happen normally)
      errorMessage.value = 'Supplier account not found. Please contact support.';
      await authService.logout();
      return;
    }

    console.log('✅ Supplier status:', supplier.status);

    // Step 3: Check approval status
    if (supplier.status === 'pending') {
      pendingMessage.value = 'Your account is under review. We\'ll notify you once it\'s approved (usually 12-24 hours).';
      await authService.logout(); // Log them out
      return;
    }

    if (supplier.status === 'rejected') {
      errorMessage.value = 'Your account application was not approved. Please contact support for more information.';
      await authService.logout();
      return;
    }

    if (supplier.status === 'suspended') {
      errorMessage.value = 'Your account has been suspended. Please contact support.';
      await authService.logout();
      return;
    }

    // Step 4: Status is 'approved' - Allow login
    console.log('✅ Login successful! Redirecting to dashboard...');
    
    // TODO: Redirect to dashboard (will implement in next phase)
    alert('Login successful! Dashboard coming soon...');
    
 } catch (error: any) {
  console.error('❌ Login error:', error);
  
  if (error.message?.includes('Invalid login credentials')) {
    errorMessage.value = 'Invalid email or password';
  } else if (error.message?.includes('Email not confirmed')) {
    errorMessage.value = 'Please verify your email first. Check your inbox for the verification link.';
  } else if (error.message?.includes('No match for')) {
    // Router error - ignore and show generic message
    errorMessage.value = 'Unable to complete login. Please try again.';
  } else {
    errorMessage.value = error.message || 'Login failed. Please try again.';
  }
} finally {
  isLoading.value = false;
}
};
</script>

<style scoped>
@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

</style>
