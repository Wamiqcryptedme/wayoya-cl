<template>
  <div class="flex flex-col h-full">
    
    <!-- Desktop Logo -->
    <div class="hidden lg:flex h-20 items-center px-6 shrink-0 mt-2">
      <div class="w-28">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 523.33 107.67">
          <g><path fill="#009986" d="M0,37.94V12.18A10.07,10.07,0,0,1,10.07,2.11h.14A10.07,10.07,0,0,1,20.28,12.18V39.06c0,9.72,5.83,14.86,13.75,14.86,9.17,0,14.45-6.11,14.45-14.86V12.18A10.07,10.07,0,0,1,58.55,2.11h0A10.07,10.07,0,0,1,68.62,12.18V39.06c0,8.75,5.28,14.86,14.58,14.86C91.12,53.92,97,48.78,97,39.06V12.18A10.07,10.07,0,0,1,107,2.11h0a10.07,10.07,0,0,1,10.07,10.07V37.94c0,21.81-9.72,35-31.25,35C68.9,73,59.17,62.67,59.31,49.75H57.92c0,12.92-9.58,23.2-26.53,23.2C9.72,73,0,59.75,0,37.94Z"/><path fill="#009986" d="M162.65.72c21.95,0,36.53,14.44,36.53,36.11l.1,24.57a10.12,10.12,0,0,1-10.12,10.16h0A10.12,10.12,0,0,1,179,61.44V57h-1.25v1.39c0,7.23-7.64,14.59-21.11,14.59-18.34,0-30.56-13.62-30.56-34.73C126.12,14.19,140.7.72,162.65.72Zm-.14,53.34c11,0,16.53-7.09,16.53-17.23,0-10.41-6.39-17.22-16.39-17.22-9.72,0-16.39,6.94-16.39,17.22S152.65,54.06,162.51,54.06Z"/><path fill="#009986" d="M258.91,57.11h-1.25v1.67c0,9.44-9,14.17-19.87,14.17-22.08,0-29.44-12.78-29.44-34.31V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10V39.75c0,9.17,5.14,14.17,14.58,14.17,9.86,0,15.7-6.39,15.7-15.56V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10v64c0,19.73-13.48,31.53-36.12,31.53-14.09,0-24.78-4.42-29.93-13.73A10,10,0,0,1,222,79.2h0A10.18,10.18,0,0,1,231.07,85c2,4,6.48,5.92,13,5.92,9.73,0,14.87-4.59,14.87-13.2Z"/><path fill="#009986" d="M420.86,57.11h-1.25v1.67c0,9.44-9,14.17-19.86,14.17-22.09,0-29.45-12.78-29.45-34.31V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10V39.75c0,9.17,5.14,14.17,14.59,14.17,9.86,0,15.69-6.39,15.69-15.56V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10v64c0,19.73-13.47,31.53-36.11,31.53-14.09,0-24.79-4.42-29.94-13.73A10,10,0,0,1,384,79.2h0A10.16,10.16,0,0,1,393,85c2,4,6.49,5.92,13,5.92,9.72,0,14.86-4.59,14.86-13.2Z"/><path fill="#009986" d="M486.7.72c21.95,0,36.53,14.44,36.53,36.11l.1,24.57a10.12,10.12,0,0,1-10.12,10.16h0a10.12,10.12,0,0,1-10.12-10.12V57h-1.25v1.39c0,7.23-7.64,14.59-21.11,14.59-18.34,0-30.56-13.62-30.56-34.73C450.17,14.19,464.75.72,486.7.72Zm-.14,53.34c11,0,16.53-7.09,16.53-17.23,0-10.41-6.39-17.22-16.39-17.22-9.72,0-16.39,6.94-16.39,17.22S476.7,54.06,486.56,54.06Z"/><rect fill="#f76d4d" x="287.75" width="74.88" height="74.88" rx="36"/></g>
        </svg>
      </div>
    </div>

    <!-- Mobile Sidebar Header -->
    <div class="lg:hidden py-4 flex items-center justify-between px-6 mb-4 border-b border-gray-200">
      <span class="text-xs font-bold text-gray-400 uppercase tracking-wider"></span>
      <button @click="$emit('close')" class="text-gray-400 hover:text-brand-teal">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>

    <nav class="flex-1 overflow-y-auto py-2 px-4 space-y-6">
      <!-- Menu -->
      <div>
        <p class="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Menu</p>
        <div class="space-y-1">
          <router-link
            v-for="item in menuItems"
            :key="item.to"
            :to="item.to"
            @click="$emit('close')"
            :class="['w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all', 
                     $route.path === item.to ? 'bg-brand-tealLight text-brand-teal' : 'text-gray-600 hover:bg-brand-tealLight hover:text-brand-text']">
            <span class="mr-3" v-html="item.icon"></span>
            {{ item.label }}
          </router-link>
        </div>
      </div>

      <!-- Actions -->
      <div>
        <p class="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Actions</p>
        <div class="space-y-1">
          <button class="w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl text-gray-600 hover:bg-brand-bg hover:text-brand-text group transition-all">
            <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            Create a listing
          </button>
          <button class="w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl text-gray-600 hover:bg-brand-bg hover:text-brand-text group transition-all">
            <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            Open support ticket
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const menuItems = [
  { label: 'Home', to: '/home', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>' },
  { label: 'Listings', to: '/listings', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>' },
  { label: 'Bookings', to: '/bookings', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>' },
  { label: 'Revenue', to: '/revenue', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' },
  { label: 'Reviews', to: '/reviews', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>' },
  { label: 'Profile', to: '/profile', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>' },
];

defineEmits(['close']);
</script>