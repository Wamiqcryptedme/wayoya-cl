<template>
  <header class="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 shrink-0 z-40 sticky top-0">
    
    <!-- Mobile Logo & Toggle -->
    <div class="flex items-center gap-4 lg:hidden">
      <button @click="$emit('toggle-sidebar')" class="text-gray-600 p-1 -ml-1">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
      <div class="w-28 mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 523.33 107.67"><g><path fill="#009986" d="M0,37.94V12.18A10.07,10.07,0,0,1,10.07,2.11h.14A10.07,10.07,0,0,1,20.28,12.18V39.06c0,9.72,5.83,14.86,13.75,14.86,9.17,0,14.45-6.11,14.45-14.86V12.18A10.07,10.07,0,0,1,58.55,2.11h0A10.07,10.07,0,0,1,68.62,12.18V39.06c0,8.75,5.28,14.86,14.58,14.86C91.12,53.92,97,48.78,97,39.06V12.18A10.07,10.07,0,0,1,107,2.11h0a10.07,10.07,0,0,1,10.07,10.07V37.94c0,21.81-9.72,35-31.25,35C68.9,73,59.17,62.67,59.31,49.75H57.92c0,12.92-9.58,23.2-26.53,23.2C9.72,73,0,59.75,0,37.94Z"/><path fill="#009986" d="M162.65.72c21.95,0,36.53,14.44,36.53,36.11l.1,24.57a10.12,10.12,0,0,1-10.12,10.16h0A10.12,10.12,0,0,1,179,61.44V57h-1.25v1.39c0,7.23-7.64,14.59-21.11,14.59-18.34,0-30.56-13.62-30.56-34.73C126.12,14.19,140.7.72,162.65.72Zm-.14,53.34c11,0,16.53-7.09,16.53-17.23,0-10.41-6.39-17.22-16.39-17.22-9.72,0-16.39,6.94-16.39,17.22S152.65,54.06,162.51,54.06Z"/><path fill="#009986" d="M258.91,57.11h-1.25v1.67c0,9.44-9,14.17-19.87,14.17-22.08,0-29.44-12.78-29.44-34.31V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10V39.75c0,9.17,5.14,14.17,14.58,14.17,9.86,0,15.7-6.39,15.7-15.56V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10v64c0,19.73-13.48,31.53-36.12,31.53-14.09,0-24.78-4.42-29.93-13.73A10,10,0,0,1,222,79.2h0A10.18,10.18,0,0,1,231.07,85c2,4,6.48,5.92,13,5.92,9.73,0,14.87-4.59,14.87-13.2Z"/><path fill="#009986" d="M420.86,57.11h-1.25v1.67c0,9.44-9,14.17-19.86,14.17-22.09,0-29.45-12.78-29.45-34.31V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10V39.75c0,9.17,5.14,14.17,14.59,14.17,9.86,0,15.69-6.39,15.69-15.56V12.14a10,10,0,0,1,10-10h.22a10,10,0,0,1,10,10v64c0,19.73-13.47,31.53-36.11,31.53-14.09,0-24.79-4.42-29.94-13.73A10,10,0,0,1,384,79.2h0A10.16,10.16,0,0,1,393,85c2,4,6.49,5.92,13,5.92,9.72,0,14.86-4.59,14.86-13.2Z"/><path fill="#009986" d="M486.7.72c21.95,0,36.53,14.44,36.53,36.11l.1,24.57a10.12,10.12,0,0,1-10.12,10.16h0a10.12,10.12,0,0,1-10.12-10.12V57h-1.25v1.39c0,7.23-7.64,14.59-21.11,14.59-18.34,0-30.56-13.62-30.56-34.73C450.17,14.19,464.75.72,486.7.72Zm-.14,53.34c11,0,16.53-7.09,16.53-17.23,0-10.41-6.39-17.22-16.39-17.22-9.72,0-16.39,6.94-16.39,17.22S476.7,54.06,486.56,54.06Z"/><rect fill="#f76d4d" x="287.75" width="74.88" height="74.88" rx="36"/></g></svg>
      </div>
    </div>
    
    <!-- Search -->
    <div class="hidden md:block relative w-full max-w-md ml-0 lg:ml-4">
      <span class="absolute left-3 top-2.5 text-gray-400">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </span>
      <input type="text" class="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-teal transition-colors" placeholder="Search">
    </div>
    
    <!-- Right Side Icons -->
    <div class="flex items-center space-x-4 md:space-x-6 ml-auto">
      <!-- Notification Bell -->
      <div class="relative" ref="notificationDropdown">
        <button @click="toggleNotifications" class="relative text-gray-500 hover:text-brand-teal transition-colors outline-none">
          <svg class="mt-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          <span class="mt-2 absolute top-0 right-0 block h-2 w-2 rounded-full bg-brand-orange ring-2 ring-white"></span>
        </button>
        
        <!-- Notification Dropdown -->
        <transition name="fade">
          <div v-if="isNotificationOpen" class="absolute right-0 mt-3 w-80 sm:w-96 mr-[-20px] bg-white rounded-xl shadow-modal border border-gray-200 py-4 z-50 origin-top-right max-h-[500px] overflow-y-auto">
            <div class="px-5 pb-3 flex justify-between items-center">
              <h3 class="font-bold text-lg text-brand-dark">Notifications</h3>
            </div>
            <div class="px-5 py-4 hover:bg-brand-tealLight border-b border-gray-50 last:border-0 cursor-pointer transition-colors">
              <div class="flex justify-between items-start mb-2">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-brand-teal"></span>
                  <span class="text-sm font-bold text-brand-dark">Booking received</span>
                </div>
                <span class="text-xs text-gray-400">1m ago</span>
              </div>
              <p class="text-xs text-gray-500 pl-4.5 truncate">ID: B2490123 - 14 Day Concordia Trek</p>
            </div>
          </div>
        </transition>
      </div>

      <!-- Profile Dropdown -->
      <div class="relative" ref="profileDropdown">
        <button @click="toggleUserDropdown" class="flex items-center space-x-3 cursor-pointer outline-none group">
          <img :src="supplierLogo" class="w-9 h-9 rounded-full border border-gray-200 object-contain group-hover:border-brand-teal transition-colors" alt="Logo">
          <span class="hidden md:block text-sm font-semibold text-brand-dark">{{ businessName }}</span>
          <svg class="hidden md:block w-4 h-4 text-gray-400 transition-transform duration-200" :class="isUserDropdownOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>

        <!-- Dropdown Menu -->
        <transition name="fade">
          <div v-if="isUserDropdownOpen" class="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-modal border border-gray-200 z-50 origin-top-right">
            <button @click="openLogoModal" class="flex w-full items-center px-4 py-4 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Update logo
            </button>
            <div class="h-px bg-gray-200"></div>
            <button @click="handleLogout" :disabled="isLoggingOut" class="flex w-full items-center px-4 py-4 text-sm text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50">
              <svg v-if="!isLoggingOut" class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
              <svg v-else class="animate-spin h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isLoggingOut ? 'Logging out...' : 'Log out' }}
            </button>
          </div>
        </transition>
      </div>
    </div>

    <!-- Logo Upload Modal -->
    <transition name="fade">
      <div v-if="showLogoModal" class="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <div @click="closeLogoModal" class="absolute inset-0 bg-black/60"></div>
        <div class="bg-white rounded-xl shadow-modal w-full max-w-md relative z-10">
          
          <!-- Header -->
          <div class="flex justify-between items-center p-5">
            <h3 class="text-xl font-bold text-brand-dark">Update Logo</h3>
            <button @click="closeLogoModal" class="text-gray-400 hover:text-gray-600 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <div class="p-6">
            <input type="file" ref="logoInput" @change="handleLogoSelect" accept="image/png,image/jpeg,image/jpg" class="hidden">
            
            <!-- No image selected -->
            <div v-if="!selectedLogoFile" @click="$refs.logoInput.click()" class="border-2 border-dashed border-gray-300 rounded-xl h-64 flex flex-col items-center justify-center cursor-pointer hover:border-brand-teal hover:bg-brand-tealLight/30 transition-all group">
              <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-brand-tealLight group-hover:text-brand-teal transition-colors">
                <svg class="w-8 h-8 text-gray-400 group-hover:text-brand-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <span class="text-sm font-semibold text-gray-700 mb-1">Click to upload logo</span>
              <span class="text-xs text-gray-500">PNG or JPG (max 5MB)</span>
            </div>

            <!-- Image selected -->
<div v-else class="space-y-6">
  <!-- Preview with zoom controls -->
  <div class="space-y-4">
    <!-- Square container with circular cutout overlay -->
<!-- Square container with circular cutout overlay -->
<div class="relative w-64 h-64 mx-auto bg-gray-100 rounded-xl overflow-hidden">
  <!-- Image (zoomable, fills the square) -->
  <img 
    ref="logoPreviewImage"
    :src="logoPreviewUrl" 
    :style="{
      transform: `scale(${logoZoom / 100})`,
      transformOrigin: 'center center',
      transition: 'transform 0.1s ease'
    }"
    class="absolute inset-0 w-full h-full object-cover"
    alt="Logo preview"
  >
  
 <!-- Circular cutout overlay -->
<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
  <div class="w-full h-full rounded-full border-4 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.6)]"></div>
</div>
  
  <!-- Helper text -->
  <div class="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
    <span class="text-xs font-medium text-white bg-black/70 px-3 py-1.5 rounded-full">
      Logo will appear in a circle
    </span>
  </div>
</div>
                <!-- Zoom Slider -->
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-sm text-gray-600">
                    <span class="font-medium">Adjust size</span>
                    <span class="text-xs text-gray-500">{{ logoZoom }}%</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"></path></svg>
                    <input 
                      v-model.number="logoZoom" 
                      type="range" 
                      min="50" 
                      max="200" 
                      step="5"
                      class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    >
                    <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex gap-3">
                <button @click="closeLogoModal" class="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                  Cancel
                </button>
                <button @click="uploadLogo" :disabled="isUploadingLogo" class="flex-1 py-3 px-4 bg-brand-teal text-white font-semibold rounded-xl hover:bg-brand-tealDark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                  <span v-if="!isUploadingLogo">Save Changes</span>
                  <div v-else class="flex items-center gap-2">
                    <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Uploading...</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '@/services/authService';
import { supplierService } from '@/services/supplierService';
import { uploadService } from '@/services/uploadService';
import { supabase } from '@/lib/supabase';

defineEmits(['toggle-sidebar']);

const router = useRouter();

// State
const isNotificationOpen = ref(false);
const isUserDropdownOpen = ref(false);
const showLogoModal = ref(false);
const isLoggingOut = ref(false);
const isUploadingLogo = ref(false);

const supplierLogo = ref('https://placehold.co/50x50/F2F2F2/F2F2F2');
const businessName = ref('');
const supplierId = ref('');

// Logo upload
const selectedLogoFile = ref<File | null>(null);
const logoPreviewUrl = ref<string | null>(null);
const logoInput = ref<HTMLInputElement | null>(null);
const logoPreviewImage = ref<HTMLImageElement | null>(null);
const logoZoom = ref(100);

// Refs for click outside
const notificationDropdown = ref<HTMLElement | null>(null);
const profileDropdown = ref<HTMLElement | null>(null);

// Generate initials avatar
const generateInitialsAvatar = (name: string): string => {
  const words = name.trim().split(' ').filter(w => w.length > 0);
  let initials = '';
  
  if (words.length === 1) {
    initials = words[0].substring(0, 2).toUpperCase();
  } else {
    initials = (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }
  
  // Create SVG with gray background and teal initials
  const svg = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#E5E7EB"/>
      <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="Arial, sans-serif" font-size="80" font-weight="bold" fill="#009986">${initials}</text>
    </svg>
  `;
  
  return 'data:image/svg+xml;base64,' + btoa(svg);
};

// Fetch supplier data on mount
onMounted(async () => {
  try {
    const user = await authService.getCurrentUser();
    if (user) {
      supplierId.value = user.id;
      const supplier = await supplierService.getSupplierProfile(user.id);
      if (supplier) {
        businessName.value = supplier.business_name;
        
        // Use uploaded logo if exists, otherwise generate initials avatar
        if (supplier.logo_url) {
          supplierLogo.value = supplier.logo_url;
        } else {
          supplierLogo.value = generateInitialsAvatar(supplier.business_name);
        }
      }
    }
  } catch (error) {
    console.error('Failed to load supplier data:', error);
  }

  // Add click outside listeners
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

// Handle click outside dropdowns
const handleClickOutside = (event: MouseEvent) => {
  if (notificationDropdown.value && !notificationDropdown.value.contains(event.target as Node)) {
    isNotificationOpen.value = false;
  }
  if (profileDropdown.value && !profileDropdown.value.contains(event.target as Node)) {
    isUserDropdownOpen.value = false;
  }
};

const toggleNotifications = () => {
  isNotificationOpen.value = !isNotificationOpen.value;
  if (isNotificationOpen.value) {
    isUserDropdownOpen.value = false;
  }
};

const toggleUserDropdown = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value;
  if (isUserDropdownOpen.value) {
    isNotificationOpen.value = false;
  }
};

const openLogoModal = () => {
  showLogoModal.value = true;
  isUserDropdownOpen.value = false;
};

const closeLogoModal = () => {
  showLogoModal.value = false;
  selectedLogoFile.value = null;
  logoPreviewUrl.value = null;
  logoZoom.value = 100;
  if (logoInput.value) {
    logoInput.value.value = '';
  }
};

const handleLogoSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    
    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }
    
    // Validate file type
    if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
      alert('Only PNG and JPG files are allowed');
      return;
    }
    
    selectedLogoFile.value = file;
    logoPreviewUrl.value = URL.createObjectURL(file);
    logoZoom.value = 100;
  }
};

const uploadLogo = async () => {
  if (!selectedLogoFile.value) return;

  isUploadingLogo.value = true;
  try {
    const user = await authService.getCurrentUser();
    if (!user) throw new Error('Not authenticated');

    // Upload to Cloudflare
    const logoUrl = await uploadService.uploadPropertyPhoto(selectedLogoFile.value);

    // Update supplier record
    const { error } = await supabase
      .from('suppliers')
      .update({ logo_url: logoUrl })
      .eq('id', user.id);

    if (error) throw error;

    // Update local state
    supplierLogo.value = logoUrl;
    closeLogoModal();
    
  } catch (error: any) {
    console.error('Logo upload failed:', error);
    alert('Failed to upload logo. Please try again.');
  } finally {
    isUploadingLogo.value = false;
  }
};

const handleLogout = async () => {
  isLoggingOut.value = true;
  try {
    await authService.logout();
    router.push('/login');
  } catch (error) {
    console.error('Logout failed:', error);
    alert('Failed to logout. Please try again.');
  } finally {
    isLoggingOut.value = false;
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@keyframes spin {
  to { transform: rotate(360deg); }
}
.animate-spin { animation: spin 1s linear infinite; }

/* Custom slider styling */
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #009986;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #009986;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.slider::-webkit-slider-thumb:hover {
  background: #008070;
  transform: scale(1.1);
}

.slider::-moz-range-thumb:hover {
  background: #008070;
  transform: scale(1.1);
}
</style>