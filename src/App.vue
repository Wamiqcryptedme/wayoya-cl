<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  // Listen for auth state changes
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      console.log('User signed in:', session?.user.email);
    }
    
    if (event === 'SIGNED_OUT') {
      console.log('User signed out');
      router.push({ name: 'home' });
    }
    
    // Handle email verification confirmation
    if (event === 'USER_UPDATED') {
      console.log('User updated (email verified)');
    }
  });
});
</script>