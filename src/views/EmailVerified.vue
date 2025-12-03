<template>
  <div class="flex flex-col min-h-screen bg-white">
    
    <!-- HEADER -->
    <header class="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-[60px] shrink-0 sticky top-0 z-40">
      <div class="w-28 md:w-32">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 523.33 107.67">
          <g><path fill="#009986" d="M0,37.94V12.18A10.07,10.07,0,0,1,10.07,2.11h.14A10.07,10.07,0,0,1,20.28,12.18V39.06c0,9.72,5.83,14.86,13.75,14.86,9.17,0,14.45-6.11,14.45-14.86V12.18A10.07,10.07,0,0,1,58.55,2.11h0A10.07,10.07,0,0,1,68.62,12.18V39.06c0,8.75,5.28,14.86,14.58,14.86C91.12,53.92,97,48.78,97,39.06V12.18A10.07,10.07,0,0,1,107,2.11h0a10.07,10.07,0,0,1,10.07,10.07V37.94c0,21.81-9.72,35-31.25,35C68.9,73,59.17,62.67,59.31,49.75H57.92c0,12.92-9.58,23.2-26.53,23.2C9.72,73,0,59.75,0,37.94Z"/><path fill="#009986" d="M162.65.72c21.95,0,36.53,14.44,36.53,36.11l.1,24.57a10.12,10.12,0,0,1-10.12,10.16h0A10.12,10.12,0,0,1,179,61.44V57h-1.25v1.39c0,7.23-7.64,14.59-21.11,14.59-18.34,0-30.56-13.62-30.56-34.73C126.12,14.19,140.7.72,162.65.72Zm-.14,53.34c11,0,16.53-7.09,16.53-17.23,0-10.41-6.39-17.22-16.39-17.22-9.72,0-16.39,6.94-16.39,17.22S152.65,54.06,162.51,54.06Z"/><path fill="#009986" d="M258.91,57.11h-1.25v1.67c0,9.44-9,14.17-19.87,14.17-22.08,0-29.44-12.78-29.44-34.31V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10V39.75c0,9.17,5.14,14.17,14.58,14.17,9.86,0,15.7-6.39,15.7-15.56V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10v64c0,19.73-13.48,31.53-36.12,31.53-14.09,0-24.78-4.42-29.93-13.73A10,10,0,0,1,222,79.2h0A10.18,10.18,0,0,1,231.07,85c2,4,6.48,5.92,13,5.92,9.73,0,14.87-4.59,14.87-13.2Z"/><path fill="#009986" d="M420.86,57.11h-1.25v1.67c0,9.44-9,14.17-19.86,14.17-22.09,0-29.45-12.78-29.45-34.31V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10V39.75c0,9.17,5.14,14.17,14.59,14.17,9.86,0,15.69-6.39,15.69-15.56V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10v64c0,19.73-13.47,31.53-36.11,31.53-14.09,0-24.79-4.42-29.94-13.73A10,10,0,0,1,384,79.2h0A10.16,10.16,0,0,1,393,85c2,4,6.49,5.92,13,5.92,9.72,0,14.86-4.59,14.86-13.2Z"/><path fill="#009986" d="M486.7.72c21.95,0,36.53,14.44,36.53,36.11l.1,24.57a10.12,10.12,0,0,1-10.12,10.16h0a10.12,10.12,0,0,1-10.12-10.12V57h-1.25v1.39c0,7.23-7.64,14.59-21.11,14.59-18.34,0-30.56-13.62-30.56-34.73C450.17,14.19,464.75.72,486.7.72Zm-.14,53.34c11,0,16.53-7.09,16.53-17.23,0-10.41-6.39-17.22-16.39-17.22-9.72,0-16.39,6.94-16.39,17.22S476.7,54.06,486.56,54.06Z"/><rect fill="#f76d4d" x="287.75" width="74.88" height="74.88" rx="36"/></g>
        </svg>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="flex-1 flex bg-white items-center justify-center p-4 md:p-8 py-10">
      
      <!-- Loading State -->
      <div v-if="isProcessing" class="text-center max-w-md mx-auto animate-fade-in-up">
        <div class="w-16 h-16 border-4 border-brand-tealLight border-t-brand-teal rounded-full animate-spin mx-auto mb-4"></div>
        <h1 class="text-xl font-bold text-brand-dark mb-2">Just a sec...</h1>
        <p class="text-gray-500 text-sm">Please wait while we verify your email</p>
      </div>

      <!-- Success State -->
      <div v-else-if="!errorMessage" class="text-center max-w-md mx-auto animate-fade-in-up">
        <div class="w-12 h-12 bg-brand-tealLight rounded-full flex items-center justify-center mb-3 mx-auto">
          <svg class="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-brand-teal mb-3">Email verified</h1>
        <p class="text-gray-500 text-sm mb-6 leading-relaxed">Your email has been successfully verified. Your account is now under review by our team.</p>

        <p class="text-sm text-gray-500">You can now close this page.</p>
      </div>

      <!-- Error State -->
      <div v-else class="text-center max-w-md mx-auto animate-fade-in-up">
        <div class="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-3 mx-auto">
          <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-red-500 mb-3">Verification failed</h1>
        <p class="text-gray-500 text-sm mb-6">{{ errorMessage }}</p>
      </div>

    </main>
    
    <!-- Footer -->
    <footer class="bg-brand-tealDark text-white py-8 px-6 mt-auto shrink-0">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-sm opacity-80 space-y-1 text-center md:text-left">
          <p class="font-bold text-white">Legal</p>
          <a href="#" class="block hover:underline">Privacy policy</a>
          <a href="#" class="block hover:underline">Terms and conditions</a>
        </div>
        <div class="text-sm opacity-80 space-y-1 text-center md:text-right">
          <p class="font-bold text-white">Support</p>
          <a href="#" class="block hover:underline">Content guidelines</a>
          <a href="#" class="block hover:underline">Fair pricing policy</a>
        </div>
        <div class="text-center md:text-right">
          <div class="flex gap-4 mb-2 justify-center md:justify-end">
            <div class="w-6 h-6 bg-white/20 rounded flex items-center justify-center cursor-pointer">F</div>
            <div class="w-6 h-6 bg-white/20 rounded flex items-center justify-center cursor-pointer">I</div>
            <div class="w-6 h-6 bg-white/20 rounded flex items-center justify-center cursor-pointer">X</div>
          </div>
          <p class="text-xs opacity-60">© 2026 wayoya</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '@/services/authService';
import { supabase } from '@/lib/supabase';
import { supplierService } from '@/services/supplierService';

const router = useRouter();

const isProcessing = ref(true);
const errorMessage = ref('');

onMounted(async () => {
  try {
    console.log('Starting email verification process...');

    // Step 1: Verify the user session exists
    const session = await authService.handleEmailVerification();
    
    if (!session || !session.user) {
      throw new Error('No active session found');
    }

    console.log('Session verified for user:', session.user.id);

    // Step 2: Get onboarding data from DATABASE
    console.log('Fetching onboarding data from database...');
    const { data: pendingData, error: fetchError } = await supabase
      .from('pending_onboarding')
      .select('onboarding_data')
      .eq('user_id', session.user.id)
      .single();

    if (fetchError || !pendingData) {
      console.error('Database error:', fetchError);
      throw new Error('Onboarding data not found. Please contact support.');
    }

    const onboardingData = pendingData.onboarding_data;
    console.log('Onboarding data loaded from database');

    // Step 3: Complete onboarding
    console.log('Creating supplier record...');
    const result = await supplierService.completeOnboarding(onboardingData);

    if (!result.success) {
      throw new Error(result.error || 'Failed to complete onboarding');
    }

    console.log('Supplier record created successfully');

    // Step 4: Send "Account Created" email
    console.log('📧 Sending account created email...');
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const emailResponse = await fetch(`${supabaseUrl}/functions/v1/send-supplier-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ supplierId: session.user.id }),
    });

    if (!emailResponse.ok) {
      console.warn('Failed to send email, but continuing...');
    } else {
      console.log('Account created email sent');
    }

    // Step 5: Delete pending data
    await supabase
      .from('pending_onboarding')
      .delete()
      .eq('user_id', session.user.id);

    console.log('Cleaned up pending onboarding data');

    // Step 6: Success!
    isProcessing.value = false;
    console.log('Email verification complete!');

  } catch (error: any) {
    console.error('Email verification error:', error);
    errorMessage.value = error.message || 'An unexpected error occurred';
    isProcessing.value = false;
  }
});
</script>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
