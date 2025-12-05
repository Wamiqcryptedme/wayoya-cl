<template>
  <div class="flex-1 overflow-y-auto pb-[200px] p-4 md:p-6 lg:p-8">
    
    <!-- Page Title & Tabs -->
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-brand-dark mb-6">Profile</h1>
      
      <!-- Tabs -->
      <div class="flex flex-wrap gap-3">
        <button 
          v-for="tab in availableTabs" 
          :key="tab.value"
          @click="activeTab = tab.value"
          :class="['px-5 py-2 rounded-xl text-sm font-semibold transition-colors', 
              activeTab === tab.value 
              ? 'bg-brand-teal text-white' 
              : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200']">
          {{ tab.label }}
        </button>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="bg-white rounded-xl border border-gray-200 p-6">

      <!-- 1. ACCOUNT TAB -->
      <div v-if="activeTab === 'Account'" class="animate-slide-in">
        <div class="mb-8">
          <h2 class="text-lg font-bold text-brand-dark">Account</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 mb-6">
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">Business name</label>
            <p class="text-sm text-brand-dark">{{ supplierData.business_name || '--' }}</p>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">Email</label>
            <p class="text-sm text-brand-dark">{{ supplierData.email || '--' }}</p>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">Category</label>
            <p class="text-sm text-brand-dark">{{ formatSupplierType(supplierData.supplier_type) }}</p>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">Operates as</label>
            <p class="text-sm text-brand-dark">{{ formatLegalStatus(supplierData.legal_status) || '--' }}</p>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">Based in</label>
            <p class="text-sm text-brand-dark">{{ supplierData.place_name || '--' }}</p>
          </div>
          
          <!-- Commission Display -->
<div v-if="isTourOperator">
  <label class="block text-xs font-medium text-gray-500 mb-1">Tours commission</label>
  <p class="text-sm text-brand-dark">{{ supplierData.commission_rates?.tours || supplierData.commission_rates?.tour || 0 }}%</p>
</div>
<div v-if="isTourOperator">
  <label class="block text-xs font-medium text-gray-500 mb-1">Treks commission</label>
  <p class="text-sm text-brand-dark">{{ supplierData.commission_rates?.treks || supplierData.commission_rates?.trek || 0 }}%</p>
</div>
<div v-if="!isTourOperator">
  <label class="block text-xs font-medium text-gray-500 mb-1">Commission</label>
  <p class="text-sm text-brand-dark">{{ getMainCommission() }}%</p>
</div>
        </div>

        <!-- Info Banner -->
        <div class="bg-orange-100 md:w-3/4 text-orange-700 rounded-xl p-3 flex items-start gap-2">
          <svg class="w-7 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <p class="text-sm text-brand-text">For any changes to your business information, please contact support</p>
        </div>
      </div>

      <!-- 2. FINANCE TAB -->
      <div v-if="activeTab === 'Finance'" class="animate-slide-in">
        <div class="mb-8">
          <h2 class="text-lg font-bold text-brand-dark">Finance</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label class="block text-sm font-semibold text-brand-dark mb-2">Bank</label>
            <input 
              type="text" 
              v-model="financeForm.bank_name" 
              :disabled="isFinanceSaved"
              class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none disabled:bg-gray-50 disabled:text-gray-500 transition-colors">
          </div>
          <div>
            <label class="block text-sm font-semibold text-brand-dark mb-2">Account title</label>
            <input 
              type="text" 
              v-model="financeForm.account_title" 
              :disabled="isFinanceSaved"
              class="w-full px-4 text-sm py-3 border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none disabled:bg-gray-50 disabled:text-gray-500 transition-colors">
          </div>
          <div>
            <label class="block text-sm font-semibold text-brand-dark mb-2">Account number</label>
            <input 
              type="text" 
              v-model="financeForm.account_number" 
              :disabled="isFinanceSaved"
              class="w-full px-4 text-sm py-3 border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none disabled:bg-gray-50 disabled:text-gray-500 transition-colors">
          </div>
        </div>
        
        <div class="mb-12 max-w-md">
          <label class="block text-sm font-semibold text-brand-dark mb-2">IBAN number</label>
          <input 
            type="text" 
            v-model="financeForm.iban" 
            :disabled="isFinanceSaved"
            class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none disabled:bg-gray-50 disabled:text-gray-500 transition-colors">
        </div>

        <div class="flex flex-col-reverse md:flex-row md:items-center justify-between gap-2">
          <div class="bg-orange-100 mt-4 md:mt-0 md:w-3/4 text-orange-700 rounded-xl p-3 flex items-start gap-2">
            <svg class="w-10 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="text-sm text-brand-text">The bank account must belong to the same individual, business, or company associated with this account</p>
          </div>
          
          <button 
            @click="saveFinance" 
            :disabled="isFinanceSaved || isSavingFinance"
            :class="['px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center', 
              isFinanceSaved ? 'bg-gray-200 text-gray-500 shadow-none cursor-not-allowed' : 'bg-brand-teal text-white hover:bg-brand-tealDark']">
            <span v-if="!isSavingFinance">{{ isFinanceSaved ? 'Details Saved' : 'Add account' }}</span>
            <svg v-else class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- 3. PROPERTY TAB (Only for Stays) -->
      <div v-if="activeTab === 'Property'" class="animate-slide-in">
        <div class="flex justify-between items-start mb-8">
          <h2 class="text-lg font-bold text-brand-dark">Property</h2>
          <button 
            @click="openPropertyModal" 
            class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-brand-teal transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 mb-10">
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">Check-in time</label>
            <p class="text-sm text-brand-dark">{{ propertyData.check_in_time || '--' }}</p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">Check-out time</label>
            <p class="text-sm text-brand-dark">{{ propertyData.check_out_time || '--' }}</p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">Pets allowed</label>
            <p class="text-sm text-brand-dark">{{ propertyData.pets_allowed !== null ? (propertyData.pets_allowed ? 'Yes' : 'No') : '--' }}</p>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">Extra mattress</label>
            <p class="text-sm text-brand-dark">{{ propertyData.extra_mattress !== null ? (propertyData.extra_mattress ? 'Yes' : 'No') : '--' }}</p>
          </div>
          <div class="md:col-span-2">
            <label class="block text-xs font-semibold text-gray-500 mb-1">Featured amenities</label>
            <p class="text-sm text-brand-dark">{{ propertyData.featured_amenities?.length ? propertyData.featured_amenities.join(', ') : 'None selected' }}</p>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-8 pb-5">
          <label class="block text-base font-semibold text-brand-dark mb-4">Frequently asked questions</label>
          <div v-if="propertyData.property_faqs?.length" class="space-y-3">
            <div v-for="(faq, index) in propertyData.property_faqs" :key="index" class="p-4 bg-white rounded-xl border-[1.5px] border-gray-200">
              <div class="font-medium text-sm text-brand-dark mb-1">{{ faq.question }}</div>
              <div class="text-sm text-gray-600">{{ faq.answer }}</div>
            </div>
          </div>
          <p v-else class="text-sm text-gray-500">--</p>
        </div>
      </div>
    </div>

    <!-- Property Edit Modal -->
    <transition name="fade">
      <div v-if="isPropertyModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <div @click="closePropertyModal" class="absolute inset-0 bg-black/60"></div>
        <div class="bg-white rounded-xl shadow-modal w-full max-w-lg p-5 relative z-10 flex flex-col max-h-[80vh]">
          
          <!-- Header -->
          <div class="flex justify-between items-center mb-6 shrink-0">
            <h3 class="text-xl font-bold text-brand-dark">Edit property details</h3>
            <button @click="closePropertyModal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <!-- Scrollable Body -->
          <div class="overflow-y-auto pr-2 space-y-6">
            
            <!-- Time Selectors -->
            <div>
              <label class="block text-sm font-semibold text-brand-dark mb-2">Check-in time</label>
              <select v-model="tempProperty.check_in_time" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none bg-white custom-select">
                <option value="Anytime">Anytime</option>
                <option value="12 PM">12 PM</option>
                <option value="2 PM">2 PM</option>
                <option value="3 PM">3 PM</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold text-brand-dark mb-2">Check-out time</label>
              <select v-model="tempProperty.check_out_time" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none bg-white custom-select">
                <option value="11 AM">11 AM</option>
                <option value="12 PM">12 PM</option>
                <option value="1 PM">1 PM</option>
              </select>
            </div>

            <!-- Toggles -->
            <div>
              <label class="block text-sm font-semibold text-brand-dark mb-2">Pets allowed</label>
              <div class="grid grid-cols-2 gap-3 p-1 bg-gray-50 rounded-xl border border-gray-200">
                <button @click="tempProperty.pets_allowed = true" :class="['py-2 rounded-lg text-sm font-medium transition-all', tempProperty.pets_allowed ? 'bg-brand-teal text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100']">Yes</button>
                <button @click="tempProperty.pets_allowed = false" :class="['py-2 rounded-lg text-sm font-medium transition-all', !tempProperty.pets_allowed ? 'bg-brand-teal text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100']">No</button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-brand-dark mb-2">Extra mattresses provided</label>
              <div class="grid grid-cols-2 gap-3 p-1 bg-gray-50 rounded-xl border border-gray-200">
                <button @click="tempProperty.extra_mattress = true" :class="['py-2 rounded-lg text-sm font-medium transition-all', tempProperty.extra_mattress ? 'bg-brand-teal text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100']">Yes</button>
                <button @click="tempProperty.extra_mattress = false" :class="['py-2 rounded-lg text-sm font-medium transition-all', !tempProperty.extra_mattress ? 'bg-brand-teal text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100']">No</button>
              </div>
            </div>

            <!-- Amenities Dropdown -->
            <div class="relative">
              <label class="block text-sm font-semibold text-brand-dark mb-2">Popular amenities (select 5)</label>
              <button 
                @click="isAmenitiesOpen = !isAmenitiesOpen" 
                class="w-full flex items-center justify-between px-4 py-3 border-[1.5px] border-gray-200 rounded-xl bg-white text-left focus:border-brand-teal transition-colors">
                <span class="text-sm" :class="tempProperty.featured_amenities.length ? 'text-brand-dark' : 'text-gray-400'">
                  {{ tempProperty.featured_amenities.length ? `${tempProperty.featured_amenities.length} amenities selected` : 'Select 5 amenities' }}
                </span>
                <svg class="w-4 h-4 text-gray-400 transition-transform" :class="isAmenitiesOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div v-if="isAmenitiesOpen" class="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-modal border border-gray-200 p-2 max-h-48 overflow-y-auto">
                <label v-for="amenity in availableAmenities" :key="amenity" class="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg">
                  <input 
                    type="checkbox" 
                    :value="amenity" 
                    v-model="tempProperty.featured_amenities" 
                    :disabled="tempProperty.featured_amenities.length >= 5 && !tempProperty.featured_amenities.includes(amenity)" 
                    class="custom-checkbox mr-3">
                  <span class="text-sm text-gray-600 font-medium">{{ amenity }}</span>
                </label>
              </div>
            </div>

            <!-- FAQs Dynamic List -->
            <div>
              <label class="block text-base font-semibold text-brand-dark mb-4 border-t pt-4">Frequently asked questions</label>
              <div class="space-y-4">
                <div v-for="(faq, index) in tempProperty.property_faqs" :key="index" class="relative group bg-gray-50 p-3 rounded-xl border border-gray-200">
                  <div class="mb-3">
                    <label class="block text-sm font-semibold text-brand-dark mb-1">Question</label>
                    <input 
                      type="text" 
                      v-model="tempProperty.property_faqs[index].question" 
                      class="w-full px-3 py-2 border-[1.5px] border-gray-200 rounded-lg focus:border-brand-teal outline-none bg-white text-sm transition-colors" 
                      placeholder="e.g. Is breakfast included?">
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-brand-dark mb-1">Answer</label>
                    <textarea 
                      v-model="tempProperty.property_faqs[index].answer" 
                      rows="2" 
                      class="w-full px-3 py-2 border-[1.5px] border-gray-200 rounded-lg focus:border-brand-teal outline-none bg-white text-sm resize-none transition-colors" 
                      placeholder="Answer..."></textarea>
                  </div>
                  <button 
                    v-if="tempProperty.property_faqs.length > 0" 
                    @click="tempProperty.property_faqs.splice(index, 1)" 
                    class="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
              </div>
              <button 
                @click="tempProperty.property_faqs.push({ question: '', answer: '' })" 
                class="mt-3 flex items-center text-sm font-medium text-gray-500 hover:text-brand-teal transition-colors">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                Add more
              </button>
            </div>
          </div>

          <!-- Footer -->
          <div class="mt-1 pt-4 shrink-0">
            <button 
              @click="saveProperty" 
              :disabled="isSavingProperty"
              class="w-full bg-brand-teal hover:bg-brand-tealDark text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center">
              <span v-if="!isSavingProperty">Save changes</span>
              <svg v-else class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </transition>

    <!-- Snackbar -->
    <transition name="fade">
      <div v-if="snackbar.show" 
           :class="['fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 z-[200]',
                    snackbar.type === 'success' ? 'bg-[#1caf82] text-white' : 'bg-red-500 text-white']">
        <svg v-if="snackbar.type === 'success'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <span class="font-medium">{{ snackbar.message }}</span>
      </div>
    </transition>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { profileService } from '@/services/profileService';
import { authService } from '@/services/authService';
import { supabase } from '@/lib/supabase';

// State
const activeTab = ref('Account');
const isPropertyModalOpen = ref(false);
const isAmenitiesOpen = ref(false);
const isSavingFinance = ref(false);
const isSavingProperty = ref(false);

const snackbar = reactive({
  show: false,
  type: 'success' as 'success' | 'error',
  message: ''
});

// Data
const supplierData = reactive({
  business_name: '',
  email: '',
  supplier_type: '',
  legal_status: '',
  place_name: '',
  commission_rates: {} as any
});

const financeForm = reactive({
  bank_name: '',
  account_title: '',
  account_number: '',
  iban: ''
});

const propertyData = reactive({
  check_in_time: null as string | null,
  check_out_time: null as string | null,
  pets_allowed: null as boolean | null,
  extra_mattress: null as boolean | null,
  featured_amenities: [] as string[],
  property_faqs: [] as Array<{ question: string; answer: string }>
});

const tempProperty = reactive({
  check_in_time: '',
  check_out_time: '',
  pets_allowed: false,
  extra_mattress: false,
  featured_amenities: [] as string[],
  property_faqs: [] as Array<{ question: string; answer: string }>
});

const availableAmenities = ref<string[]>([]);
const isFinanceSaved = ref(false);

// Computed
const isTourOperator = computed(() => supplierData.supplier_type === 'tour_operator');

const availableTabs = computed(() => {
  const tabs = [
    { label: 'Account', value: 'Account' },
    { label: 'Finance', value: 'Finance' }
  ];
  
  if (supplierData.supplier_type === 'stay') {
    tabs.push({ label: 'Property', value: 'Property' });
  }
  
  return tabs;
});

// Methods
const formatSupplierType = (type: string) => {
  const typeMap: Record<string, string> = {
    'stay': 'Stay',
    'tour_operator': 'Tour Operator',
    'rental': 'Rental',
    'activity_provider': 'Activity Provider',
    'tour_guide': 'Tour Guide'
  };
  return typeMap[type] || type;
};

const formatLegalStatus = (status: string) => {
  const statusMap: Record<string, string> = {
    'Individual': 'Individual',
    'Registered': 'Registered Business',
    'Company': 'Company'
  };
  return statusMap[status] || status;
};

const getMainCommission = () => {
  const rates = supplierData.commission_rates;
  if (!rates) return 0;
  
  // Try different naming conventions
  return rates.stay || rates.rooms || 
         rates.rental || rates.rentals || 
         rates.activity || rates.activities || 
         rates.guide || rates.experiences || 
         rates.tour_guide || 0;
};

const showSnackbar = (message: string, type: 'success' | 'error' = 'success') => {
  snackbar.message = message;
  snackbar.type = type;
  snackbar.show = true;
  
  setTimeout(() => {
    snackbar.show = false;
  }, 3000);
};

const saveFinance = async () => {
  // Validate
  if (!financeForm.bank_name || !financeForm.account_title || !financeForm.account_number || !financeForm.iban) {
    showSnackbar('Please fill in all fields', 'error');
    return;
  }

  isSavingFinance.value = true;
  
  try {
    const user = await authService.getCurrentUser();
    if (!user) throw new Error('Not authenticated');

    await profileService.updateFinance(user.id, financeForm);
    
    isFinanceSaved.value = true;
    showSnackbar('Bank details saved successfully');
    
  } catch (error: any) {
    console.error('Failed to save finance:', error);
    showSnackbar('Failed to save bank details', 'error');
  } finally {
    isSavingFinance.value = false;
  }
};

const openPropertyModal = () => {
  // Clone current state
  Object.assign(tempProperty, {
    check_in_time: propertyData.check_in_time || 'Anytime',
    check_out_time: propertyData.check_out_time || '11 AM',
    pets_allowed: propertyData.pets_allowed ?? false,
    extra_mattress: propertyData.extra_mattress ?? false,
    featured_amenities: [...propertyData.featured_amenities],
    property_faqs: JSON.parse(JSON.stringify(propertyData.property_faqs))
  });
  isPropertyModalOpen.value = true;
};

const closePropertyModal = () => {
  isPropertyModalOpen.value = false;
  isAmenitiesOpen.value = false;
};

const saveProperty = async () => {
  isSavingProperty.value = true;
  
  try {
    const user = await authService.getCurrentUser();
    if (!user) throw new Error('Not authenticated');

    await profileService.updatePropertyDetails(user.id, tempProperty);
    
    // Update local state
    Object.assign(propertyData, tempProperty);
    
    closePropertyModal();
    showSnackbar('Property details saved successfully');
    
  } catch (error: any) {
    console.error('Failed to save property:', error);
    showSnackbar('Failed to save property details', 'error');
  } finally {
    isSavingProperty.value = false;
  }
};

// Load data on mount
onMounted(async () => {
  try {
    const user = await authService.getCurrentUser();
    if (!user) return;

    // Load supplier profile
    const profile = await profileService.getSupplierProfile(user.id);
    
    if (profile) {
      Object.assign(supplierData, {
        business_name: profile.business_name,
        email: profile.profile.email,
        supplier_type: profile.supplier_type,
        legal_status: profile.legal_status,
        place_name: profile.place_name,
        commission_rates: profile.commission_rates || {}
      });

      // Load finance data
      if (profile.bank_details) {
        Object.assign(financeForm, profile.bank_details);
        isFinanceSaved.value = true;
      }

      // Load property data (for Stays only)
      if (profile.supplier_type === 'stay' && profile.details) {
        Object.assign(propertyData, {
          check_in_time: profile.details.check_in_time,
          check_out_time: profile.details.check_out_time,
          pets_allowed: profile.details.pets_allowed,
          extra_mattress: profile.details.extra_mattress,
          featured_amenities: profile.details.featured_amenities || [],
          property_faqs: profile.details.property_faqs || []
        });

// Load available amenities from signup
if (profile.supplier_type === 'stay') {
  const { data: supplierAttrs, error: attrError } = await supabase
    .from('supplier_attributes')
    .select(`
      attribute_id,
      attributes!inner(
        id,
        name,
        category
      )
    `)
    .eq('supplier_id', user.id);

  console.log('Supplier attributes:', supplierAttrs); // Debug log

  if (supplierAttrs && !attrError) {
    // Filter only amenity-type attributes
    availableAmenities.value = supplierAttrs
      .filter(sa => sa.attributes?.category === 'amenity')
      .map(sa => sa.attributes?.name)
      .filter(Boolean) as string[];
    
    console.log('Available amenities:', availableAmenities.value); // Debug log
  } else {
    console.error('Failed to load amenities:', attrError);
  }
}
      }
    }
    
  } catch (error) {
    console.error('Failed to load profile:', error);
  }
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.animate-slide-in {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
.animate-spin { animation: spin 1s linear infinite; }
</style>
