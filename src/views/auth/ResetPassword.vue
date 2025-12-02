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
  
  <div class="w-full max-w-md bg-white rounded-xl border border-gray-200 p-8">
    
    <!-- Success State -->
    <div v-if="passwordReset" class="text-center">
      <div class="w-12 h-12 bg-brand-tealLight rounded-full flex items-center justify-center mb-4 mx-auto">
        <svg class="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-brand-dark mb-2">Password reset successful</h1>
      <p class="text-sm text-gray-600 mb-6">
        Your password has been updated. You can now login with your new password.
      </p>
      <router-link to="/login" class="inline-block px-6 py-3 bg-brand-teal text-white font-semibold rounded-xl transition-colors">
        Go to Login
      </router-link>
    </div>

    <!-- Form State -->
    <div v-else>
      <h1 class="text-2xl font-bold text-brand-dark mb-2">Reset your password</h1>
      <p class="text-sm text-gray-500 mb-8">Enter your new password below</p>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label class="block text-sm font-semibold text-brand-dark mb-2">New Password</label>
          <input 
            type="password" 
            v-model="newPassword" 
            required
            placeholder="At least 8 characters"
            class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none">
        </div>

        <div>
          <label class="block text-sm font-semibold text-brand-dark mb-2">Confirm Password</label>
          <input 
            type="password" 
            v-model="confirmPassword" 
            required
            placeholder="Re-enter your password"
            class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none">
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
          class="w-full py-3.5 bg-brand-teal hover:bg-brand-tealDark text-white font-bold rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center">
          <span v-if="!isLoading">Reset Password</span>
          <svg v-else class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </button>
      </form>
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

const router = useRouter();

const newPassword = ref('');
const confirmPassword = ref('');
const isLoading = ref(false);
const errorMessage = ref('');
const passwordReset = ref(false);

const handleSubmit = async () => {
  errorMessage.value = '';

  if (newPassword.value.length < 8) {
    errorMessage.value = 'Password must be at least 8 characters';
    return;
  }

  if (newPassword.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match';
    return;
  }

  isLoading.value = true;

  try {
    await authService.updatePassword(newPassword.value);
    passwordReset.value = true;
  } catch (error: any) {
    console.error('❌ Password reset error:', error);
    errorMessage.value = error.message || 'Failed to reset password. Please try again.';
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