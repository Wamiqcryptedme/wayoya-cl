<template>
  <div class="flex flex-col min-h-screen">
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
      <div class="w-full max-w-lg bg-white rounded-xl border border-gray-200 p-5 md:p-6 relative">
        
        <!-- Progress Bar -->
        <div class="flex gap-2 mt-3 mb-8 max-w-lg px-6">
          <div 
            v-for="step in 5" 
            :key="step" 
            :class="['h-1.5 flex-1 rounded-full transition-colors duration-300', 
                     step <= currentStep ? 'bg-brand-teal' : 'bg-brand-tealLight']">
          </div>
        </div>

        <!-- Back Button (Steps 2-5) -->
        <button 
          v-if="currentStep > 1" 
          @click="currentStep--" 
          class="flex items-center text-xl font-semibold text-brand-dark mb-6 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span v-if="currentStep === 2">About your business</span>
          <span v-if="currentStep === 3">How you operate</span>
          <span v-if="currentStep === 4">About your services</span>
          <span v-if="currentStep === 5">Documents</span>
        </button>

        <!-- STEP 1: CATEGORY SELECTION -->
        <div v-if="currentStep === 1" class="animate-fade-in">
          <h2 class="text-xl font-semibold text-brand-dark mb-6">Select your category</h2>
          <div class="space-y-0">
            <div 
              v-for="cat in categories" 
              :key="cat.id" 
              @click="selectCategory(cat.id)"
              class="flex items-center justify-between p-6 px-0 border-b-[1.5px] border-gray-200 cursor-pointer transition-all group">
              <div>
                <h3 class="font-semibold text-sm text-brand-dark group-hover:text-brand-teal transition-colors">{{ cat.label }}</h3>
                <p class="text-sm text-gray-500 mt-0.5">{{ cat.desc }}</p>
              </div>
              <div class="text-gray-500 group-hover:text-brand-teal transition-colors" v-html="cat.icon"></div>
            </div>
          </div>
          <div class="bg-white p-1 mt-[-5px] z-1"></div>
        </div>

        <!-- STEP 2: ABOUT BUSINESS -->
        <div v-if="currentStep === 2" class="animate-fade-in space-y-5">
          <div>
            <label class="block text-sm font-semibold text-brand-dark mb-2">Country</label>
            <select v-model="formData.country" class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl bg-white focus:border-brand-teal outline-none custom-select text-gray-600">
              <option>Pakistan</option>
              <option>United Arab Emirates</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-brand-dark mb-2">
              {{ formData.category === 'Stay' ? 'Property name' : 'Business name' }}
            </label>
            <input type="text" v-model="formData.businessName" class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none">
          </div>
          <div>
            <label class="block text-sm font-semibold text-brand-dark mb-2">Phone number</label>
            <input type="tel" v-model="formData.phone" class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none">
          </div>
          <div>
            <label class="block text-sm font-semibold text-brand-dark mb-2">Email address</label>
            <input type="email" v-model="formData.email" class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none">
          </div>
          <div>
            <label class="block text-sm font-semibold text-brand-dark mb-2">Set password</label>
            <input type="password" v-model="formData.password" class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none" placeholder="Atleast 8 characters">
          </div>
          <div class="bg-brand-tealLight leading-tight text-brand-text text-sm p-2.5 rounded-xl flex items-center gap-2">
            <svg class="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            We'll send you an email to verify your account
          </div>
        </div>

        <!-- STEP 3: HOW YOU OPERATE -->
        <div v-if="currentStep === 3" class="animate-fade-in space-y-6">
          <div>
            <label class="block text-sm font-semibold text-brand-dark mb-3">Business type</label>
            <div class="space-y-3">
              <div 
                v-for="type in businessTypes" 
                :key="type.id" 
                @click="formData.businessType = type.id"
                :class="['flex items-center p-4 border-[1.5px] rounded-xl cursor-pointer transition-colors', 
                         formData.businessType === type.id ? 'border-brand-teal bg-brand-tealLight text-brand-teal' : 'border-gray-200 hover:bg-gray-50']">
                <span class="mr-3 text-gray-500" v-html="type.icon"></span>
                <span class="font-medium text-sm text-brand-dark">{{ type.label }}</span>
              </div>
            </div>
          </div>

          <!-- Conditional Fields based on Business Type -->
          <div v-if="formData.businessType === 'Individual'" class="space-y-5">
            <div>
              <label class="block text-sm font-semibold text-brand-dark mb-2">Full Name</label>
              <input type="text" v-model="formData.fullName" class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl outline-none focus:border-brand-teal">
            </div>
            <div>
              <label class="block text-sm font-semibold text-brand-dark mb-2">CNIC Number</label>
              <input type="text" v-model="formData.cnic" class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl outline-none focus:border-brand-teal">
            </div>
          </div>
          <div v-else-if="formData.businessType === 'Registered'" class="space-y-5">
            <div>
              <label class="block text-sm font-semibold text-brand-dark mb-2">Legal business name</label>
              <input type="text" v-model="formData.legalName" class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl outline-none focus:border-brand-teal">
            </div>
            <div>
              <label class="block text-sm font-bold text-brand-dark mb-2">CNIC Number (Owner)</label>
              <input type="text" v-model="formData.cnic" class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl outline-none focus:border-brand-teal">
</div>
</div>
<div v-else-if="formData.businessType === 'Company'" class="space-y-5">
<div>
<label class="block text-sm font-semibold text-brand-dark mb-2">Company name</label>
<input type="text" v-model="formData.companyName" class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl outline-none focus:border-brand-teal">
</div>
<div>
<label class="block text-sm font-semibold text-brand-dark mb-2">Registration number</label>
<input type="text" v-model="formData.regNum" class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl outline-none focus:border-brand-teal">
</div>
<div>
<label class="block text-sm font-semibold text-brand-dark mb-2">National tax number (NTN)</label>
<input type="text" v-model="formData.ntn" class="w-full text-sm px-4 py-3 border-[1.5px] border-gray-200 rounded-xl outline-none focus:border-brand-teal">
</div>
</div>
</div>

    <!-- STEP 4: ABOUT SERVICES -->
    <div v-if="currentStep === 4" class="animate-fade-in space-y-5">
      
      <!-- Tour Operator & Guide -->
      <div v-if="['Tour Operator', 'Guide'].includes(formData.category)">
        <div class="mb-5">
          <label class="block text-sm font-semibold text-brand-dark mb-2">Where do you operate from?</label>
          <select v-model="formData.operatingCity" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl bg-white custom-select">
            <option v-for="place in places" :key="place.id" :value="place.id">{{ place.name }}</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-brand-dark mb-2">
            {{ formData.category === 'Guide' ? 'Your address' : 'Office address' }}
          </label>
          <input type="text" v-model="formData.address" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none">
        </div>
        <div class="mb-5" v-if="formData.category === 'Tour Operator'">
          <label class="block text-sm font-semibold text-brand-dark mb-2">What type of services do you offer?</label>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="service in tourServices" 
              :key="service.id" 
              @click="toggleAttribute(service.id, 'services')"
              :class="['px-4 py-2 text-sm border-[1.5px] rounded-xl transition-colors', 
                       formData.serviceIds.includes(service.id) ? 'bg-brand-teal text-white border-brand-teal' : 'text-gray-600 border-gray-200 hover:border-brand-teal']">
              {{ service.name }}
            </button>
          </div>
        </div>
        <div class="mb-5" v-if="formData.category === 'Guide'">
          <label class="block text-sm font-semibold text-brand-dark mb-2">Speciality</label>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="spec in guideSpecialities" 
              :key="spec.id" 
              @click="toggleAttribute(spec.id, 'specialities')"
              :class="['px-4 py-2 text-sm border-[1.5px] rounded-xl transition-colors', 
                       formData.specialityIds.includes(spec.id) ? 'bg-brand-teal text-white border-brand-teal' : 'text-gray-600 border-gray-200 hover:border-brand-teal']">
              {{ spec.name }}
            </button>
          </div>
          <label class="block text-sm font-semibold text-brand-dark mt-4 mb-2">Guide since</label>
          <select v-model="formData.guideSince" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl bg-white custom-select">
            <option v-for="year in yearsSince2000" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-brand-dark mb-2">Do you serve international tourists?</label>
          <div class="grid grid-cols-2 gap-4">
            <button 
              @click="formData.serveInternational = true" 
              :class="['py-2 text-sm border-[1.5px] rounded-xl transition-all', 
                       formData.serveInternational ? 'bg-brand-teal text-white border-brand-teal' : 'hover:border-brand-teal']">
              Yes
            </button>
            <button 
              @click="formData.serveInternational = false" 
              :class="['py-2 text-sm border-[1.5px] rounded-xl transition-all', 
                       !formData.serveInternational ? 'bg-brand-teal text-white border-brand-teal' : 'hover:border-brand-teal']">
              No
            </button>
          </div>
        </div>
      </div>

      <!-- Stays -->
      <div v-if="formData.category === 'Stay'">
        <div class="mb-5">
          <label class="block text-sm font-bold text-brand-dark mb-2">City or region</label>
          <select v-model="formData.operatingCity" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl bg-white custom-select">
            <option v-for="place in places" :key="place.id" :value="place.id">{{ place.name }}</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="block text-sm font-bold text-brand-dark mb-2">Property address</label>
          <input type="text" v-model="formData.address" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none">
        </div>
        <div class="mb-5">
          <label class="block text-sm font-bold text-brand-dark mb-2">Property type</label>
          <select v-model="formData.propertyTypeId" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl bg-white custom-select">
            <option v-for="type in propertyTypes" :key="type.id" :value="type.id">{{ type.name }}</option>
          </select>
        </div>
        
        <!-- Facilities Dropdown -->
        <div class="mb-5 relative">
          <label class="block text-sm font-semibold text-brand-dark mb-2">Available facilities</label>
          <button 
            @click="isFacilitiesDropdownOpen = !isFacilitiesDropdownOpen" 
            class="w-full flex items-center justify-between px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl bg-white text-left focus:border-brand-teal transition-colors">
            <span :class="formData.facilityIds.length ? 'text-brand-dark' : 'text-gray-400'">
              {{ formData.facilityIds.length ? `${formData.facilityIds.length} facilities selected` : 'Select facilities' }}
            </span>
            <svg class="w-4 h-4 text-gray-400 transition-transform" :class="isFacilitiesDropdownOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-if="isFacilitiesDropdownOpen" class="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 p-2 max-h-48 overflow-y-auto">
            <label v-for="facility in facilities" :key="facility.id" class="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg">
              <input type="checkbox" :value="facility.id" v-model="formData.facilityIds" class="custom-checkbox mr-3">
              <span class="text-sm text-gray-600 font-medium">{{ facility.name }}</span>
            </label>
          </div>
        </div>

        <div class="mb-5">
          <label class="block text-sm font-semibold text-brand-dark mb-2">Number of rooms</label>
          <input type="number" v-model="formData.roomCount" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none">
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-brand-dark mb-2">Property photos</label>
          <input 
            type="file" 
            ref="propertyPhotosInput"
            @change="handlePropertyPhotosSelect"
            accept="image/*"
            multiple
            class="hidden">
          <div 
            @click="$refs.propertyPhotosInput.click()"
            class="border-2 border-dashed border-gray-300 rounded-xl h-24 flex items-center justify-center text-gray-400 cursor-pointer hover:border-brand-teal transition-colors">
            <span class="text-sm font-medium">
              {{ propertyPhotoFiles.length ? `${propertyPhotoFiles.length} photos selected` : 'Upload photos' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Activity & Rental -->
      <div v-if="['Activity', 'Rental'].includes(formData.category)">
        <div class="mb-5">
          <label class="block text-sm font-semibold text-brand-dark mb-2">City or region</label>
          <select v-model="formData.operatingCity" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl bg-white custom-select">
            <option v-for="place in places" :key="place.id" :value="place.id">{{ place.name }}</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-brand-dark mb-2">Address</label>
          <input type="text" v-model="formData.address" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none">
        </div>
        
        <div v-if="formData.category === 'Activity'">
          <div class="mb-5">
            <label class="block text-sm font-semibold text-brand-dark mb-2">Type of activity</label>
            <select v-model="formData.activityTypeId" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl bg-white custom-select">
              <option v-for="type in activityTypes" :key="type.id" :value="type.id">{{ type.name }}</option>
            </select>
          </div>
        </div>
        <div v-if="formData.category === 'Rental'">
          <div class="mb-5">
            <label class="block text-sm font-semibold text-brand-dark mb-2">Rental type</label>
            <div class="grid grid-cols-2 gap-4">
              <button 
                @click="formData.rentalType = 'Car'" 
                :class="['py-2 text-sm border-[1.5px] rounded-xl transition-all', 
                         formData.rentalType === 'Car' ? 'bg-brand-teal text-white border-brand-teal' : 'hover:border-brand-teal']">
                Car
              </button>
              <button 
                @click="formData.rentalType = 'Bike'" 
                :class="['py-2 text-sm border-[1.5px] rounded-xl transition-all', 
                         formData.rentalType === 'Bike' ? 'bg-brand-teal text-white border-brand-teal' : 'hover:border-brand-teal']">
                Bike
              </button>
            </div>
          </div>
          <div class="mb-5">
            <label class="block text-sm font-semibold text-brand-dark mb-2">Number of vehicles</label>
            <input type="number" v-model="formData.vehicleCount" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal outline-none">
          </div>
          <div class="mb-5">
            <label class="block text-sm font-semibold text-brand-dark mb-2">Require security deposit?</label>
            <div class="grid grid-cols-2 gap-4">
              <button 
                @click="formData.securityDeposit = true" 
                :class="['py-2 border rounded-xl transition-all', 
                         formData.securityDeposit ? 'bg-brand-teal text-white border-brand-teal' : 'hover:border-brand-teal']">
                Yes
              </button>
              <button 
                @click="formData.securityDeposit = false" 
                :class="['py-2 border rounded-xl transition-all', 
                         !formData.securityDeposit ? 'bg-brand-teal text-white border-brand-teal' : 'hover:border-brand-teal']">
                No
              </button>
            </div>
          </div>
        </div>

        <div class="mb-5">
          <label class="block text-sm font-semibold text-brand-dark mb-2">Operational days</label>
          <select v-model="formData.operationalDays" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl bg-white custom-select outline-none">
            <option>Monday to Sunday</option>
            <option>Monday to Friday</option>
            <option>Monday to Saturday</option>
          </select>
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-brand-dark mb-2">Open time</label>
          <input type="time" v-model="formData.openTime" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal bg-white custom-select outline-none">
        </div>
        <div class="mb-5">
          <label class="block text-sm font-semibold text-brand-dark mb-2">Close time</label>
          <input type="time" v-model="formData.closeTime" class="w-full px-4 py-3 text-sm border-[1.5px] border-gray-200 rounded-xl focus:border-brand-teal bg-white custom-select outline-none">
        </div>
      </div>
    </div>

    <!-- STEP 5: DOCUMENTS -->
    <div v-if="currentStep === 5" class="animate-fade-in space-y-6">
      
      <!-- Company Registration (Only for Company) -->
      <div v-if="formData.businessType === 'Company'">
        <h3 class="text-sm font-bold text-brand-dark mb-2">Company registration</h3>
        <input 
          type="file" 
          ref="companyRegInput"
          @change="handleDocumentSelect('companyReg', $event)"
          accept=".pdf,.jpg,.jpeg,.png"
          class="hidden">
        <div 
          v-if="!documentFiles.companyReg"
          @click="$refs.companyRegInput.click()"
          class="border-2 border-dashed border-gray-300 rounded-xl h-32 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 text-gray-500 hover:text-brand-teal hover:border-brand-teal transition-all">
          <span class="text-2xl mb-1">+</span>
          <span class="text-sm font-medium">Upload file</span>
          <span class="text-xs text-gray-400 mt-1">PDF, JPEG</span>
        </div>
        <div v-else class="border border-gray-200 rounded-xl p-4 flex justify-between items-center">
          <span class="text-sm text-gray-600">{{ documentFiles.companyReg.name }}</span>
          <button @click="removeDocument('companyReg')" class="text-gray-400 hover:text-red-500">✕</button>
        </div>
      </div>

      <!-- DTS License or Optional License -->
      <div>
        <h3 class="text-sm font-bold text-brand-dark mb-2">
          {{ ['Stay', 'Tour Operator', 'Guide'].includes(formData.category) ? 'DTS License' : 'License (Optional)' }}
        </h3>
        <input 
          type="file" 
          ref="licenseInput"
          @change="handleDocumentSelect('license', $event)"
          accept=".pdf,.jpg,.jpeg,.png"
          class="hidden">
        <div 
          v-if="!documentFiles.license"
          @click="$refs.licenseInput.click()"
          class="border-2 border-dashed border-gray-300 rounded-xl h-24 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 text-gray-500 transition-colors">
          <span class="text-sm font-medium">Upload file</span>
        </div>
        <div v-else class="border border-gray-200 rounded-xl p-4 flex justify-between items-center">
          <span class="text-sm text-gray-600">{{ documentFiles.license.name }}</span>
          <button @click="removeDocument('license')" class="text-gray-400 hover:text-red-500">✕</button>
        </div>
        
        <div v-if="['Stay', 'Tour Operator', 'Guide'].includes(formData.category)" class="bg-teal-50 p-4 rounded-xl mt-2 flex items-start gap-3 text-xs text-brand-dark/80">
          <div class="w-4 h-4 rounded-full border border-brand-teal text-brand-teal flex items-center justify-center font-bold shrink-0">i</div>
          <p>DTS License helps us verify you and maintain quality standards. This step ensures trust and credibility on Wayoya.</p>
        </div>
      </div>
    </div>

    <!-- Navigation Button -->
    <div v-if="currentStep > 1" class="mt-6">
      <button 
        @click="handleNextStep" 
        :disabled="isLoading"
        class="w-full py-3 bg-brand-teal text-white font-bold rounded-xl transition-colors relative flex items-center justify-center disabled:opacity-50">
        <span v-if="!isLoading">{{ currentStep === 5 ? 'Finish' : 'Next' }}</span>
        <svg v-else class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </button>
    </div>

    <!-- Error Message -->
    <div v-if="errorMessage" class="mt-4 p-3 bg-red-100 border border-red-200 rounded-xl text-red-700 text-sm text-center font-medium flex items-center justify-center gap-2 animate-shake">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      {{ errorMessage }}
    </div>

  </div>
</main>

<!-- Footer -->
<footer class="bg-[#008070] text-white py-8 px-6 mt-auto shrink-0">
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
import { ref, reactive, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '@/services/authService';
import { supplierService } from '@/services/supplierService';
import { uploadService } from '@/services/uploadService';

const router = useRouter();

// State
const currentStep = ref(1);
const isLoading = ref(false);
const errorMessage = ref('');
const isFacilitiesDropdownOpen = ref(false);

// Form Data
const formData = reactive({
  category: '',
  country: 'Pakistan',
  businessName: '',
  phone: '',
  email: '',
  password: '',
  businessType: 'Individual',
  fullName: '',
  cnic: '',
  legalName: '',
  companyName: '',
  regNum: '',
  ntn: '',
  operatingCity: '',
  address: '',
  serviceIds: [] as string[],
  specialityIds: [] as string[],
  guideSince: new Date().getFullYear(),
  serveInternational: true,
  propertyTypeId: '',
  facilityIds: [] as string[],
  roomCount: null as number | null,
  activityTypeId: '',
  rentalType: 'Car',
  vehicleCount: null as number | null,
  securityDeposit: true,
  operationalDays: 'Monday to Sunday',
  openTime: '',
  closeTime: '',
});

// File State
const documentFiles = reactive({
  companyReg: null as File | null,
  license: null as File | null,
});
const propertyPhotoFiles = ref<File[]>([]);
const propertyPhotosInput = ref<HTMLInputElement | null>(null);
const companyRegInput = ref<HTMLInputElement | null>(null);
const licenseInput = ref<HTMLInputElement | null>(null);

// Fetched Data
const places = ref<any[]>([]);
const propertyTypes = ref<any[]>([]);
const facilities = ref<any[]>([]);
const activityTypes = ref<any[]>([]);
const tourServices = ref<any[]>([]);
const guideSpecialities = ref<any[]>([]);

// Categories with SVG icons
const categories = [
  { 
    id: 'Stay', 
    label: 'Stay', 
    desc: 'Host travelers at your property',
    icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 41.76 28.92"><path d="M3.21,22.52c0,1.62,0,3.21,0,4.8A1.6,1.6,0,0,1,2,28.86a1.53,1.53,0,0,1-1.73-.71A2.4,2.4,0,0,1,0,27.06C0,23,0,19,0,14.92V1.72a1.61,1.61,0,1,1,3.21-.09c0,1,0,2,0,3V19.25H19.27v-8.8a3.77,3.77,0,0,1,4-4H37.74a3.77,3.77,0,0,1,4,4V27.16a1.61,1.61,0,0,1-2.19,1.63,1.54,1.54,0,0,1-1-1.52c0-1.39,0-2.78,0-4.17v-.58Zm35.34-3.27V10.46c0-.67-.15-.82-.82-.82H23.33c-.71,0-.84.13-.84.85v8.28c0,.16,0,.32,0,.48Z"/><path d="M11.21,17.14a5.9,5.9,0,1,1,5.93-5.88A5.93,5.93,0,0,1,11.21,17.14Zm0-3.22a2.68,2.68,0,1,0-2.7-2.67A2.69,2.69,0,0,0,11.26,13.92Z"/></svg>'
  },
  { 
    id: 'Tour Operator', 
    label: 'Tour operator', 
    desc: 'Offer guided tours and treks',
    icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23.59 36.07"><path d="M5.69,22.23a19.64,19.64,0,0,1-2.2-.11,4.11,4.11,0,0,1-3.48-4c0-1.86,0-3.73,0-5.59A4.15,4.15,0,0,1,7.49,10l.21.25a4.11,4.11,0,0,1,3.18-.37,4.21,4.21,0,0,1,3,3.75c.13,2.53,1.24,3.79,3.76,4.23.29.06.59.09.94.14-.11-.84-.21-1.63-.32-2.41-.06-.5-.14-1-.2-1.5a1.39,1.39,0,1,1,2.76-.32Q22,22.31,23.09,30.85c.16,1.19.33,2.38.49,3.56a1.39,1.39,0,1,1-2.76.35Q19.91,27.94,19,21.1c0-.22-.09-.34-.33-.35A9.66,9.66,0,0,1,14,19.34s0,0-.08,0V22a1.4,1.4,0,1,1-2.77,0V13.93a1.34,1.34,0,0,0-.74-1.27,1.26,1.26,0,0,0-1.36,0,1.31,1.31,0,0,0-.67,1.15c0,2.44,0,4.88,0,7.32A3.9,3.9,0,0,0,10,24.21c1.52,1.22,3.05,2.42,4.56,3.66a3,3,0,0,1,.73.89c.89,1.72,1.73,3.46,2.61,5.18a1.4,1.4,0,0,1-.13,1.62,1.38,1.38,0,0,1-2.33-.32Q14.24,33,13.11,30.67a2.75,2.75,0,0,0-.88-1.09c-.56-.41-1.08-.86-1.67-1.33-.29.85-.53,1.66-.84,2.44a2.79,2.79,0,0,1-.59,1c-1.3,1.34-2.63,2.65-4,4a1.36,1.36,0,0,1-1.63.29,1.29,1.29,0,0,1-.74-1.39,2.11,2.11,0,0,1,.5-.93C4.47,32.4,5.68,31.23,6.85,30a1.61,1.61,0,0,0,.38-.61c.32-.9.62-1.8.9-2.71a.48.48,0,0,0-.06-.44A7,7,0,0,1,5.69,22.23Zm-.14-2.81c0-2.39,0-4.72,0-7.06A1.34,1.34,0,0,0,4.15,11.1a1.37,1.37,0,0,0-1.36,1.35c0,1.88,0,3.75,0,5.63a1.36,1.36,0,0,0,1.28,1.33C4.55,19.44,5,19.42,5.55,19.42Z"/><path d="M9.75,8.32a4.16,4.16,0,1,1,4.13-4.19A4.18,4.18,0,0,1,9.75,8.32Zm0-2.77a1.39,1.39,0,1,0-.06-2.78A1.42,1.42,0,0,0,8.33,4.19,1.41,1.41,0,0,0,9.74,5.55Z"/></svg>'
  },
  { 
    id: 'Activity', 
    label: 'Activity provider', 
    desc: 'Provide outdoor or indoor activity',
    icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 29.49 29.97"><path d="M11.55,17.38c0-2.2-.06-4.4,0-6.6a12,12,0,0,1,1.11-4.4,11.88,11.88,0,0,1,3.41-4.67A6.68,6.68,0,0,1,25.23,2a12.93,12.93,0,0,1,4.09,7.73,13.66,13.66,0,0,1,.16,2.22c0,3.83,0,7.66,0,11.49a7.25,7.25,0,0,1-.68,3.37,5.35,5.35,0,0,1-4.17,2.85,23.47,23.47,0,0,1-8.44-.05,5.38,5.38,0,0,1-4.63-5.62c0-2.18,0-4.37,0-6.56Zm2.58,3.16c0,1.22-.06,2.39,0,3.56a2.85,2.85,0,0,0,2.6,3,20.56,20.56,0,0,0,4.7.28,11.78,11.78,0,0,0,3.44-.44,2.62,2.62,0,0,0,2-2.37c.08-.91.06-1.84.08-2.76,0-.41,0-.81,0-1.24Zm0-2.61H26.89V12H14.13Zm.24-8.52H26.64a.63.63,0,0,0,0-.14,10.19,10.19,0,0,0-3.31-5.58,4.09,4.09,0,0,0-5.52-.07,8.69,8.69,0,0,0-2.29,2.75A10.92,10.92,0,0,0,14.37,9.41Z"/><path d="M2.57,20.9c0-2.52,0-5,0-7.57a1.08,1.08,0,0,0-.27-.65c-.43-.48-.9-.92-1.35-1.37A3,3,0,0,1,0,9.09c0-2,0-4,0-6a2.9,2.9,0,0,1,2.73-3,11.55,11.55,0,0,1,2.2,0A2.91,2.91,0,0,1,7.68,3c0,2,0,4.08,0,6.13a3,3,0,0,1-.91,2.15c-.44.44-.87.9-1.33,1.33a.94.94,0,0,0-.32.76q0,7.53,0,15.06a1.36,1.36,0,0,1-.88,1.42,1.27,1.27,0,0,1-1.68-1.15c0-.75,0-1.5,0-2.25C2.56,24.61,2.57,22.75,2.57,20.9ZM3.84,10.63c.41-.42.78-.78,1.12-1.17A.65.65,0,0,0,5.12,9q0-2.94,0-5.88c0-.41-.15-.56-.55-.57s-1,0-1.44,0-.56.14-.56.55c0,2,0,3.92,0,5.89a.92.92,0,0,0,.2.49C3.09,9.88,3.45,10.22,3.84,10.63Z"/></svg>'
  },
  { 
    id: 'Rental', 
    label: 'Rental', 
    desc: 'Rent out cars, bikes, and more',
    icon: '<svg class="w-7 h-6" viewBox="0 0 44.64 24.28" fill="currentColor"><path d="M0,18c.06-.26.13-.53.17-.79L2.06,4.91c.12-.77.23-1.54.34-2.29-.82-.33-1.19-.9-1.07-1.55A1.36,1.36,0,0,1,2.85,0H23.46a4,4,0,0,1,3.33,1.67q2.27,3,4.54,6A1.06,1.06,0,0,0,32,8c3,.49,6,1,8.94,1.43a4.45,4.45,0,0,1,3.72,4.18c0,2.23,0,4.47,0,6.71a1.28,1.28,0,0,1-1.29,1.31q-.81,0-1.62,0a.65.65,0,0,0-.63.33,5.22,5.22,0,0,1-8.67,0,.64.64,0,0,0-.6-.32H10.21a.66.66,0,0,0-.63.34A5.2,5.2,0,0,1,1,22a12.31,12.31,0,0,1-1-2.29Zm3.29-3.83a5.26,5.26,0,0,1,4.9.54A5.23,5.23,0,0,1,10.52,19h21a5.27,5.27,0,0,1,2.07-4.13,5.17,5.17,0,0,1,3.37-1.09A5.37,5.37,0,0,1,42,18.22v-.39c0-1.32,0-2.65,0-4A1.85,1.85,0,0,0,40.46,12c-1.76-.29-3.53-.57-5.29-.84a6.92,6.92,0,0,0-.91,0H3.75ZM28.63,8.51c-.06-.11-.09-.2-.14-.27l-3.79-5a1.44,1.44,0,0,0-1.19-.63h-8.8l-.23,0V8.51ZM5.05,2.64,4.15,8.5h7.64V2.64ZM5.24,16.4a2.62,2.62,0,1,0,0,5.24,2.62,2.62,0,1,0,0-5.24Zm31.53,5.24a2.62,2.62,0,1,0,0-5.24,2.62,2.62,0,1,0,0,5.24Z"/></svg>'
  },
  { 
    id: 'Guide', 
    label: 'Tour guide', 
    desc: 'Offer unique local experiences',
    icon: '<svg class="w-6 h-6" viewBox="0 0 36 35.99" fill="currentColor"><path d="M14.15,26.33V18.22a1.35,1.35,0,0,1,1-1.5l6-2.4a1.78,1.78,0,0,1,1.43,0q2.7,1.1,5.4,2.15a1,1,0,0,0,.64,0c1.85-.72,3.7-1.47,5.55-2.21a1.27,1.27,0,0,1,1.71.6,1.06,1.06,0,0,1,.1.3,1.62,1.62,0,0,1,0,.44V31.94a1.31,1.31,0,0,1-1,1.45c-2,.82-4.07,1.62-6.1,2.45a1.78,1.78,0,0,1-1.36,0l-5.28-2.13a1.1,1.1,0,0,0-.87,0c-1.79.74-3.59,1.45-5.4,2.16a1.28,1.28,0,0,1-1.69-.63,1.17,1.17,0,0,1-.09-.24,4.51,4.51,0,0,1,0-.52Zm2.57,6.47c1.19-.47,2.33-.94,3.47-1.38a.5.5,0,0,0,.39-.58V17.33c-1.17.47-2.31.94-3.45,1.37a.51.51,0,0,0-.39.58V32.37Zm6.46-15.47V31a.52.52,0,0,0,.29.34c1.07.45,2.15.88,3.23,1.31l.32.09V19.17a.43.43,0,0,0-.18-.37Zm10.25,0-.4.14c-1,.41-2.05.84-3.09,1.23a.51.51,0,0,0-.38.55V32.78c1.18-.47,2.32-.93,3.46-1.37a.49.49,0,0,0,.38-.55V17.73Z"/><path d="M2.58,25.71h8.89a1.28,1.28,0,1,1,0,2.56h-10A1.3,1.3,0,0,1,0,27.18c0-.1,0-.20,0-.30V19.21a6.4,6.4,0,0,1,6.35-6.35c2.1,0,1.41-.21,3.18,1,.59.39,1.19.78,1.77,1.18a.39.39,0,0,0,.53,0c.9-.61,1.79-1.23,2.71-1.79a3,3,0,0,1,1.08-.34,5.34,5.34,0,0,1,1.13,0A1.28,1.28,0,0,1,18,14.13a1.22,1.22,0,0,1-1.16,1.27h-.06a2.79,2.79,0,0,0-1.91.65c-.77.55-1.58,1.06-2.37,1.59a1.36,1.36,0,0,1-1.84,0c-.86-.57-1.75-1.09-2.56-1.73A2.58,2.58,0,0,0,6,15.45a3.86,3.86,0,0,0-3.41,3.87v6.39Z"/><path d="M11.59,0A6.43,6.43,0,1,1,5.15,6.42v0A6.44,6.44,0,0,1,11.59,0Zm3.84,6.45a3.86,3.86,0,1,0-3.88,3.83h0A3.86,3.86,0,0,0,15.43,6.45Z"/></svg>'
  },
];

const businessTypes = [
  { id: 'Individual', label: 'Individual', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>' },
  { id: 'Registered', label: 'Registered business', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>' },
  { id: 'Company', label: 'Company', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>' },
];

const yearsSince2000 = computed(() => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 2000; year <= currentYear; year++) {
    years.push(year);
  }
  return years.reverse();
});

// Methods
const selectCategory = (id: string) => {
  formData.category = id;
  currentStep.value++;
};

const toggleAttribute = (attributeId: string, listName: 'services' | 'specialities') => {
  const list = listName === 'services' ? formData.serviceIds : formData.specialityIds;
  const idx = list.indexOf(attributeId);
  if (idx > -1) {
    list.splice(idx, 1);
  } else {
    list.push(attributeId);
  }
};

const handlePropertyPhotosSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    propertyPhotoFiles.value = Array.from(target.files);
  }
};

const handleDocumentSelect = (docType: 'companyReg' | 'license', event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    documentFiles[docType] = target.files[0];
  }
};

const removeDocument = (docType: 'companyReg' | 'license') => {
  documentFiles[docType] = null;
  if (docType === 'companyReg' && companyRegInput.value) {
    companyRegInput.value.value = '';
  } else if (docType === 'license' && licenseInput.value) {
    licenseInput.value.value = '';
  }
};

const validateStep = (step: number): boolean => {
  errorMessage.value = '';

  if (step === 2) {
    if (!formData.businessName || !formData.phone || !formData.email || !formData.password) {
      errorMessage.value = "Please fill in all required fields.";
      return false;
    }
    if (formData.password.length < 8) {
      errorMessage.value = "Password must be at least 8 characters.";
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errorMessage.value = "Please enter a valid email address.";
      return false;
    }
  }

  if (step === 3) {
    if (formData.businessType === 'Individual') {
      if (!formData.fullName || !formData.cnic) {
        errorMessage.value = "Please fill in all required fields.";
        return false;
      }
      if (!/^\d{13}$/.test(formData.cnic)) {
        errorMessage.value = "CNIC must be exactly 13 digits (numeric only).";
        return false;
      }
    } else if (formData.businessType === 'Registered') {
      if (!formData.legalName || !formData.cnic) {
        errorMessage.value = "Please fill in all required fields.";
        return false;
      }
      if (!/^\d{13}$/.test(formData.cnic)) {
        errorMessage.value = "CNIC must be exactly 13 digits (numeric only).";
        return false;
      }
    } else if (formData.businessType === 'Company') {
      if (!formData.companyName || !formData.regNum || !formData.ntn) {
        errorMessage.value = "Please fill in all required fields.";
        return false;
      }
    }
  }

  if (step === 4) {
    if (!formData.operatingCity || !formData.address) {
      errorMessage.value = "Please fill in location details.";
      return false;
    }
    if (formData.category === 'Tour Operator' && formData.serviceIds.length === 0) {
      errorMessage.value = "Please select at least one service type.";
      return false;
    }
    if (formData.category === 'Stay') {
      if (formData.facilityIds.length === 0) {
        errorMessage.value = "Please select at least one facility.";
        return false;
      }
      if (propertyPhotoFiles.value.length === 0) {
        errorMessage.value = "Please upload at least one property photo.";
        return false;
      }
    }
  }

  if (step === 5) {
    const needsDoc = ['Stay', 'Tour Operator', 'Guide'].includes(formData.category) || formData.businessType === 'Company';
    
    if (formData.businessType === 'Company' && !documentFiles.companyReg) {
      errorMessage.value = "Please upload company registration document.";
      return false;
    }
    
    if (needsDoc && !documentFiles.license) {
      errorMessage.value = "Please upload the required license document.";
      return false;
    }
  }

  return true;
};

const handleNextStep = async () => {
  if (currentStep.value === 5) {
    await finishOnboarding();
  } else {
    if (validateStep(currentStep.value)) {
      errorMessage.value = '';
      currentStep.value++;
    }
  }
};

const finishOnboarding = async () => {
  if (!validateStep(5)) return;

  isLoading.value = true;
  errorMessage.value = '';

  try {
    console.log('Starting onboarding process...');

    // ============================================
    // STEP 1: SIGN UP USER FIRST
    // ============================================
    console.log('Creating user account...');
    const { user } = await authService.signUp(formData.email, formData.password, {
      contactPerson: formData.fullName || formData.businessName,
      businessName: formData.businessName,
    });

    if (!user) {
      throw new Error('Failed to create user account');
    }

    console.log('User created:', user.id);

    // ============================================
    // STEP 2: Upload Documents (with user ID)
    // ============================================
    let docUrls: Record<string, string> = {};

if (documentFiles.license) {
  console.log('📄 Uploading license document...');
  const licenseUrl = await uploadService.uploadDocument(
    documentFiles.license,
    'temp', //  Upload to temp folder
    'license'
  );
  docUrls.license = licenseUrl;
  console.log(' License uploaded:', licenseUrl);
}

if (documentFiles.companyReg) {
  console.log(' Uploading company registration...');
  const companyRegUrl = await uploadService.uploadDocument(
    documentFiles.companyReg,
    'temp', //  Upload to temp folder
    'company_registration'
  );
  docUrls.companyReg = companyRegUrl;
  console.log(' Company reg uploaded:', companyRegUrl);
}

    // ============================================
    // STEP 3: Upload Property Photos (if Stay)
    // ============================================
    let photoUrls: string[] = [];
    if (formData.category === 'Stay' && propertyPhotoFiles.value.length > 0) {
      console.log('📸 Uploading property photos...');
      photoUrls = await uploadService.uploadPropertyPhotos(propertyPhotoFiles.value);
      console.log('Photos uploaded:', photoUrls.length, 'files');
    }

    // ============================================
    // STEP 4: Prepare Onboarding Data
    // ============================================
    const onboardingData = prepareOnboardingData(docUrls, photoUrls);

    // ============================================
    // STEP 5: Save to DATABASE (not localStorage!)
    // ============================================
    console.log('Saving onboarding data to database...');
    
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    // Use service role to bypass RLS (user not authenticated yet)
    const { error: dbError } = await fetch(`${supabaseUrl}/rest/v1/pending_onboarding`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        user_id: user.id,
        onboarding_data: onboardingData,
      }),
    });

    if (dbError) {
      throw new Error('Failed to save onboarding data');
    }

    console.log('Onboarding data saved to database');

    // ============================================
    // STEP 6: Redirect to Confirmation Page
    // ============================================
    console.log('Onboarding complete! Redirecting to confirmation...');
    router.push('/confirmation');

  } catch (error: any) {
    console.error('Onboarding error:', error);
    
    if (error.message?.includes('row-level security')) {
      errorMessage.value = 'Upload failed. Please try again.';
    } else if (error.message?.includes('User already registered')) {
      errorMessage.value = 'This email is already registered. Please use a different email.';
    } else if (error.message?.includes('already been registered')) {
      errorMessage.value = 'This email is already registered. Please login instead.';
    } else {
      errorMessage.value = error.message || 'An error occurred. Please try again.';
    }
  } finally {
    isLoading.value = false;
  }
};
const prepareOnboardingData = (docUrls: Record<string, string>, photoUrls: string[]) => {
const data: any = {
category: formData.category,
businessName: formData.businessName,
contactPerson: formData.fullName || formData.businessName,
phone: formData.phone,
address: formData.address,
placeId: formData.operatingCity,
legalStatus: formData.businessType,
nationalId: formData.cnic || null,
companyRegNumber: formData.regNum || null,
ntnNumber: formData.ntn || null,
verificationDocs: docUrls,
details: {},
attributeIds: [],
};
// Add category-specific details
if (formData.category === 'Stay') {
data.details = {
property_type_id: formData.propertyTypeId,
room_count: formData.roomCount,
property_photos: photoUrls,
};
data.attributeIds = [...formData.facilityIds];
if (formData.propertyTypeId) {
data.attributeIds.push(formData.propertyTypeId);
}
} else if (formData.category === 'Tour Operator') {
data.details = {
serve_international: formData.serveInternational,
};
data.attributeIds = [...formData.serviceIds];
} else if (formData.category === 'Guide') {
data.details = {
guide_since: formData.guideSince,
serve_international: formData.serveInternational,
};
data.attributeIds = [...formData.specialityIds];
} else if (formData.category === 'Activity') {
data.details = {
activity_type_id: formData.activityTypeId,
open_hours: `${formData.openTime} - ${formData.closeTime}`,
open_days: formData.operationalDays,
};
if (formData.activityTypeId) {
data.attributeIds.push(formData.activityTypeId);
}
} else if (formData.category === 'Rental') {
data.details = {
rental_type: formData.rentalType,
vehicle_count: formData.vehicleCount,
security_deposit_required: formData.securityDeposit,
open_hours: `${formData.openTime} - ${formData.closeTime}`,
open_days: formData.operationalDays,
};
}
return data;
};
// Fetch data on mount
onMounted(async () => {
try {
console.log('📥 Fetching dropdown data...');
places.value = await supplierService.getPlaces();
propertyTypes.value = await supplierService.getAttributesByCategory('property_type');
facilities.value = await supplierService.getAttributesByCategory('amenity');
activityTypes.value = await supplierService.getAttributesByCategory('activity_type');
tourServices.value = await supplierService.getAttributesByCategory('tour_service');
guideSpecialities.value = await supplierService.getAttributesByCategory('guide_speciality');

console.log('✅ Dropdown data loaded');
} catch (error) {
console.error('❌ Failed to load dropdown data:', error);
}
});
</script>