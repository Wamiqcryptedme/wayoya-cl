<template>
  <div class="flex h-screen overflow-hidden bg-brand-bg">
    
    <!-- Sidebar Desktop -->
    <aside class="hidden lg:block w-64 bg-white border-r border-gray-200 flex-shrink-0">
      <DashboardSidebar @close="() => {}" />
    </aside>

    <!-- Mobile Sidebar Overlay -->
    <transition name="fade">
      <div v-if="isMobileSidebarOpen" @click="isMobileSidebarOpen = false" class="fixed inset-0 bg-black/50 z-40 lg:hidden"></div>
    </transition>

    <!-- Mobile Sidebar -->
    <transition name="slide">
      <aside v-if="isMobileSidebarOpen" class="fixed left-0 top-0 bottom-0 w-64 bg-white z-50 lg:hidden">
        <DashboardSidebar @close="isMobileSidebarOpen = false" />
      </aside>
    </transition>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <DashboardHeader @toggle-sidebar="isMobileSidebarOpen = !isMobileSidebarOpen" />

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto">
        <router-view />
      </main>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue';
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue';

const isMobileSidebarOpen = ref(false);
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.slide-enter-active, .slide-leave-active { transition: transform 0.3s ease; }
.slide-enter-from, .slide-leave-to { transform: translateX(-100%); }
</style>