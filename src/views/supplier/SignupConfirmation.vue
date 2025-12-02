<template>
  <div class="flex flex-col min-h-screen bg-brand-bg">
    
    <!-- HEADER -->
    <header class="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-[60px] shrink-0 sticky top-0 z-40">
      <div class="w-28 md:w-32">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 523.33 107.67">
          <g><path fill="#009986" d="M0,37.94V12.18A10.07,10.07,0,0,1,10.07,2.11h.14A10.07,10.07,0,0,1,20.28,12.18V39.06c0,9.72,5.83,14.86,13.75,14.86,9.17,0,14.45-6.11,14.45-14.86V12.18A10.07,10.07,0,0,1,58.55,2.11h0A10.07,10.07,0,0,1,68.62,12.18V39.06c0,8.75,5.28,14.86,14.58,14.86C91.12,53.92,97,48.78,97,39.06V12.18A10.07,10.07,0,0,1,107,2.11h0a10.07,10.07,0,0,1,10.07,10.07V37.94c0,21.81-9.72,35-31.25,35C68.9,73,59.17,62.67,59.31,49.75H57.92c0,12.92-9.58,23.2-26.53,23.2C9.72,73,0,59.75,0,37.94Z"/><path fill="#009986" d="M162.65.72c21.95,0,36.53,14.44,36.53,36.11l.1,24.57a10.12,10.12,0,0,1-10.12,10.16h0A10.12,10.12,0,0,1,179,61.44V57h-1.25v1.39c0,7.23-7.64,14.59-21.11,14.59-18.34,0-30.56-13.62-30.56-34.73C126.12,14.19,140.7.72,162.65.72Zm-.14,53.34c11,0,16.53-7.09,16.53-17.23,0-10.41-6.39-17.22-16.39-17.22-9.72,0-16.39,6.94-16.39,17.22S152.65,54.06,162.51,54.06Z"/><path fill="#009986" d="M258.91,57.11h-1.25v1.67c0,9.44-9,14.17-19.87,14.17-22.08,0-29.44-12.78-29.44-34.31V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10V39.75c0,9.17,5.14,14.17,14.58,14.17,9.86,0,15.7-6.39,15.7-15.56V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10v64c0,19.73-13.48,31.53-36.12,31.53-14.09,0-24.78-4.42-29.93-13.73A10,10,0,0,1,222,79.2h0A10.18,10.18,0,0,1,231.07,85c2,4,6.48,5.92,13,5.92,9.73,0,14.87-4.59,14.87-13.2Z"/><path fill="#009986" d="M420.86,57.11h-1.25v1.67c0,9.44-9,14.17-19.86,14.17-22.09,0-29.45-12.78-29.45-34.31V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10V39.75c0,9.17,5.14,14.17,14.59,14.17,9.86,0,15.69-6.39,15.69-15.56V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10v64c0,19.73-13.47,31.53-36.11,31.53-14.09,0-24.79-4.42-29.94-13.73A10,10,0,0,1,384,79.2h0A10.16,10.16,0,0,1,393,85c2,4,6.49,5.92,13,5.92,9.72,0,14.86-4.59,14.86-13.2Z"/><path fill="#009986" d="M486.7.72c21.95,0,36.53,14.44,36.53,36.11l.1,24.57a10.12,10.12,0,0,1-10.12,10.16h0a10.12,10.12,0,0,1-10.12-10.12V57h-1.25v1.39c0,7.23-7.64,14.59-21.11,14.59-18.34,0-30.56-13.62-30.56-34.73C450.17,14.19,464.75.72,486.7.72Zm-.14,53.34c11,0,16.53-7.09,16.53-17.23,0-10.41-6.39-17.22-16.39-17.22-9.72,0-16.39,6.94-16.39,17.22S476.7,54.06,486.56,54.06Z"/><rect fill="#f76d4d" x="287.75" width="74.88" height="74.88" rx="36"/></g>
        </svg>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="flex-1 flex items-center justify-center p-4 pb-32 py-12 md:py-[70px] md:p-8 overflow-y-auto">
      
      <!-- Confirmation Card -->
      <div class="w-full max-w-xl bg-white rounded-xl border border-gray-200 py-10 p-5 md:p-6 animate-fade-in-up">
        
        <!-- Check Icon -->
        <div class="w-12 h-12 bg-brand-tealLight rounded-full flex items-center justify-center mb-6">
          <svg class="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <!-- Headings -->
        <h1 class="text-2xl font-bold text-brand-teal mb-2">Onboarding complete</h1>
        <p class="text-gray-500 text-sm mb-8">Thank you for signing up with Wayoya</p>

        <!-- Divider -->
        <div class="h-px bg-gray-200 w-full mb-8"></div>

        <!-- What's Next Section -->
        <div class="mb-8">
          <h3 class="text-sm font-semibold text-brand-dark mb-2">What's next</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-brand-teal mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span class="text-sm text-brand-dark">Check your email <strong>{{ userEmail }}</strong> to verify your account</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-400 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              <span class="text-sm text-brand-dark">You won't be able to log into your dashboard until your email is verified</span>
            </li>
          </ul>
        </div>

        <div class="h-px bg-gray-200 w-full mb-8"></div>

        <!-- Review Process Section -->
        <div>
          <h3 class="text-sm font-semibold text-brand-dark mb-2">Review process</h3>
          <p class="text-brand-dark text-sm leading-relaxed">Our team will review your details and documents. This usually takes 12 - 24 hours. You'll receive an email once your account is approved.</p>
        </div>

        <!-- Resend Email Button -->
        <div class="mt-8">
          <button 
            @click="resendVerificationEmail"
            :disabled="isResending || cooldownSeconds > 0"
            class="w-full py-3 border-2 border-brand-teal text-brand-teal hover:bg-brand-tealLight rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <span v-if="!isResending && cooldownSeconds === 0">Resend verification email</span>
            <span v-else-if="isResending">Sending...</span>
            <span v-else>Resend in {{ cooldownSeconds }}s</span>
          </button>
          <p v-if="resendSuccess" class="text-brand-teal text-sm text-center mt-2">✓ Email sent successfully!</p>
          <p v-if="resendError" class="text-red-500 text-sm text-center mt-2">{{ resendError }}</p>
        </div>

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
            <div class="w-6 h-6 bg-white/20 rounded flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">F</div>
            <div class="w-6 h-6 bg-white/20 rounded flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">I</div>
            <div class="w-6 h-6 bg-white/20 rounded flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">X</div>
          </div>
          <p class="text-xs opacity-60">© 2026 wayoya</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabase';

const userEmail = ref('');
const isResending = ref(false);
const resendSuccess = ref(false);
const resendError = ref('');
const cooldownSeconds = ref(0);

// Get user email from localStorage (saved during signup)
onMounted(() => {
  const onboardingData = localStorage.getItem('pendingSupplierOnboarding');
  if (onboardingData) {
    const data = JSON.parse(onboardingData);
    // The email should be in the user's session or we can get it from auth
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        userEmail.value = user.email || '';
      }
    });
  }
});

const resendVerificationEmail = async () => {
  if (isResending.value || cooldownSeconds.value > 0) return;

  isResending.value = true;
  resendSuccess.value = false;
  resendError.value = '';

  try {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: userEmail.value,
      options: {
        emailRedirectTo: `${window.location.origin}/email-verified`,
      },
    });

    if (error) throw error;

    resendSuccess.value = true;
    
    // Start cooldown
    cooldownSeconds.value = 60;
    const interval = setInterval(() => {
      cooldownSeconds.value--;
      if (cooldownSeconds.value <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    // Clear success message after 5 seconds
    setTimeout(() => {
      resendSuccess.value = false;
    }, 5000);

  } catch (error: any) {
    resendError.value = error.message || 'Failed to resend email';
    console.error('Resend error:', error);
  } finally {
    isResending.value = false;
  }
};
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
</style>
