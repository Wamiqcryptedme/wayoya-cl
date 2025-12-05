<template>
  <div class="flex-1 overflow-y-auto p-4 pb-[100px] md:p-6 lg:p-8">
                
                <!-- === DASHBOARD GRID === -->
                <div class="dashboard-grid max-w-[1400px] mx-auto">
                    
                    <!-- 1. Overview Cards -->
                    <div class="area-overview grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <!-- Revenue Card -->
                        <div class="bg-white p-6 cursor-pointer rounded-xl border border-brand-border hover-float group cursor-default">
                            <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:text-brand-teal group-hover:bg-brand-tealLight transition-colors mb-4">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </div>
                            <p class="text-sm font-medium text-gray-500 mb-1">Revenue</p>
                            <h3 class="text-2xl font-bold text-brand-dark">Rs 2,163,527</h3>
                        </div>

                        <!-- Bookings Card -->
                        <div class="bg-white p-6 rounded-xl border border-brand-border hover-float group cursor-pointer">
                            <div class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:text-brand-teal group-hover:bg-brand-tealLight transition-colors mb-4">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            </div>
                            <p class="text-sm font-medium text-gray-500 mb-1">Bookings</p>
                            <h3 class="text-2xl font-bold text-brand-dark">48</h3>
                        </div>
                    </div>

                    <!-- 2. Setup -->
                    <div class="area-setup bg-white p-6 rounded-xl border border-brand-border">
                        <h3 class="text-lg font-bold text-brand-dark mb-4">Complete your setup</h3>
                        <div class="space-y-2">
                            <!-- Task 1 -->
                            <div class="flex items-center justify-between p-3 rounded-lg hover:bg-brand-tealLight transition-colors cursor-pointer group">
                                <span class="text-sm font-medium text-brand-text">Provide bank account details</span>
                                <div class="w-6 h-6 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center text-xs font-bold">i</div>
                            </div>
                            <div class="h-px bg-gray-200"></div>
                            <!-- Task 2 -->
                            <div class="flex items-center justify-between p-3 rounded-lg hover:bg-brand-tealLight transition-colors cursor-pointer group">
                                <span class="text-sm font-medium text-brand-text">Update your logo</span>
                                <div class="w-6 h-6 rounded-full bg-brand-tealLight text-brand-teal flex items-center justify-center">
                                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 3. Recent Activity (Right Sidebar on Desktop) -->
                    <div class="area-activity bg-white p-6 rounded-xl border border-brand-border h-full flex flex-col">
                        <h3 class="text-lg font-bold text-brand-dark mb-4">Recent activity</h3>
                        <div class="flex-1 space-y-1">
                            <!-- Items -->
                             <div class="p-3 hover:bg-brand-tealLight cursor-pointer rounded-lg border border-transparent transition-colors mb-2">
                                <div class="flex justify-between items-start mb-1">
                                    <div class="flex items-center gap-2">
                                        <span class="w-2 h-2 rounded-full bg-brand-teal"></span>
                                        <span class="text-sm font-semibold text-brand-dark">Booking received</span>
                                    </div>
                                    <span class="text-xs text-gray-500">1m ago</span>
                                </div>
                                <p class="text-xs text-gray-600 pl-4 truncate">ID: B2490123 - 14 Day Concordia Trek</p>
                            </div>

                            <div class="p-3 hover:bg-brand-tealLight cursor-pointer rounded-lg border border-transparent transition-colors">
                                <div class="flex justify-between items-start mb-1">
                                    <div class="flex items-center gap-2">
                                        <span class="w-2 h-2 rounded-full bg-brand-teal"></span>
                                        <span class="text-sm font-semibold text-brand-dark">Booking cancelled by customer</span>
                                    </div>
                                    <span class="text-xs text-gray-400">2h ago</span>
                                </div>
                                <p class="text-xs text-gray-500 pl-4 truncate">ID: B5738233 - Experience Spring Blossom</p>
                            </div>

                            <div class="p-3 hover:bg-brand-tealLight cursor-pointer rounded-lg border border-transparent transition-colors">
                                <div class="flex justify-between items-start mb-1">
                                    <div class="flex items-center gap-2">
                                        <span class="w-2 h-2 rounded-full bg-brand-teal"></span>
                                        <span class="text-sm font-semibold text-brand-dark">Listing approved</span>
                                    </div>
                                    <span class="text-xs text-gray-400">1d ago</span>
                                </div>
                                <p class="text-xs text-gray-500 pl-4 truncate">ID: L2478924 - Discover the Magic...</p>
                            </div>

                            <div class="p-3 hover:bg-brand-tealLight cursor-pointer rounded-lg border border-transparent transition-colors">
                                <div class="flex justify-between items-start mb-1">
                                    <div class="flex items-center gap-2">
                                        <span class="w-2 h-2 rounded-full bg-brand-teal"></span>
                                        <span class="text-sm font-semibold text-brand-dark">Payout processed</span>
                                    </div>
                                    <span class="text-xs text-gray-400">3w ago</span>
                                </div>
                                <p class="text-xs text-gray-500 pl-4 truncate">ID: P1289648 - Rs 25,000</p>
                            </div>
                        </div>
                    </div>

                    <!-- 4. Messages (Right Sidebar on Desktop) -->
                    <div class="area-messages bg-white p-6 rounded-xl border border-brand-border">
                        <h3 class="text-lg font-bold text-brand-dark mb-5">Messages</h3>
                        <div class="space-y-6">
                            <div v-for="msg in messages" :key="msg.id" class="flex gap-4 items-start group cursor-pointer">
                                <div class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" :style="{ backgroundColor: msg.color }">
                                    {{ msg.initials }}
                                </div>
                                <div class="flex-1 min-w-0 pb-2 border-b border-gray-50 group-last:border-0 group-last:pb-0">
                                    <div class="flex justify-between items-center mb-1">
                                        <h4 class="text-sm font-bold text-brand-dark truncate">{{ msg.name }}</h4>
                                        <span class="text-xs text-gray-400 whitespace-nowrap">{{ msg.time }}</span>
                                    </div>
                                    <p class="text-sm text-gray-500 truncate group-hover:text-brand-teal transition-colors">{{ msg.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 5. Charts -->
                    <div class="area-charts space-y-6">
                        <!-- Bookings Chart -->
                        <div class="bg-white p-6 rounded-xl border border-brand-border">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-lg font-bold text-brand-dark">Bookings</h3>
                                <div class="bg-gray-50 rounded-lg p-0.5 flex text-xs font-medium">
                                    <button class="px-3 py-1.5 bg-brand-teal text-white rounded-md shadow-sm">This year</button>
                                    <button class="px-3 py-1.5 text-gray-500 hover:text-gray-700">Last year</button>
                                </div>
                            </div>
                            <div id="bookingsChart" class="w-full lg:w-[565px] h-[250px]"></div>
                        </div>
                    </div>

                    <!-- 6. Table -->
                    <div class="area-table bg-white rounded-xl border border-brand-border py-6">
                         <h3 class="text-lg font-bold text-brand-dark mb-4 ml-6">Recent bookings</h3>
                         <!-- Scrollable Container -->
                         <div class="overflow-x-auto pb-2">
                            <table class="w-full text-left border-collapse whitespace-nowrap min-w-[800px] lg:min-w-full">
                                <thead>
                                    <tr class="text-xs text-gray-400 border-b border-gray-100">
                                        <th class="py-4 px-6 font-medium">ID</th>
                                        <th class="py-4 px-6 font-medium">Received</th>
                                        <th class="py-4 px-6 font-medium">Customer</th>
                                        <th class="py-4 px-6 font-medium">Booking</th>
                                        <th class="py-4 px-6 font-medium">Start date</th>
                                        <th class="py-4 px-6 font-medium">Amount</th>
                                        <th class="py-4 px-6 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm">
                                    <tr v-for="booking in recentBookings" :key="booking.id" class="border-b border-gray-200 cursor-pointer last:border-0 hover:bg-gray-50 transition-colors">
                                        <td class="py-4 px-6 text-brand-text">{{ booking.id }}</td>
                                        <td class="py-4 px-6 text-gray-500">{{ booking.dateTime }}</td>
                                        <td class="py-4 px-6 font-medium text-brand-dark">{{ booking.customer }}</td>
                                        <td class="py-4 px-6 text-brand-text">{{ booking.tour }}</td>
                                        <td class="py-4 px-6 text-brand-text">{{ booking.tourDate }}</td>
                                        <td class="py-4 px-6 font-medium text-brand-text">{{ booking.amount }}</td>
                                        <td class="py-4 px-6">
                                            <span class="font-semibold text-green-500">{{ booking.status }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                         </div>
                    </div>

                </div>
                </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Dummy data for messages
const messages = ref([
                    { id: 1, name: 'John Doe', initials: 'JD', color: '#4fd1c5', time: '5h ago', text: 'What hotels would we be staying i...' },
                    { id: 2, name: 'Wamiq Ahmed', initials: 'WA', color: '#fc8181', time: '1d ago', text: 'Sounds great!' },
                    { id: 3, name: 'Jane', initials: 'MJ', color: '#f6ad55', time: '3w ago', text: 'I hope that happens.' },
                    { id: 4, name: 'Faisal', initials: 'FS', color: '#9f7aea', time: '1m ago', text: 'Thank you' },
]);

// Dummy data for recent activity
const recentActivity = ref([
  { id: 1, title: 'Booking received', time: '1m ago', description: 'ID: B2490123 - 14 Day Concordia Trek' },
  { id: 2, title: 'Booking cancelled by customer', time: '2h ago', description: 'ID: B5738233 - Experience Spring Blossom' },
  { id: 3, title: 'Listing approved', time: '1d ago', description: 'ID: L2478924 - Discover the Magic...' },
  { id: 4, title: 'Payout processed', time: '3w ago', description: 'ID: P1289648 - Rs 25,000' },
]);

// Dummy data for bookings table
const recentBookings = ref([
  { id: 'F2732', dateTime: '22 July 2025', customer: 'Muhammad Lee', tour: '14 Day K2 Base Camp Tre...', tourDate: '17 July 2025', amount: '154,000', status: 'Confirmed' },
                    { id: 'C2798', dateTime: '22 July 2025', customer: 'Wamiq Ahmed', tour: 'Experience Spring Blosso...', tourDate: '2 Aug 2025', amount: '239,000', status: 'Confirmed' },
                    { id: 'F2733', dateTime: '21 July 2025', customer: 'Sarah Khan', tour: '3 Day Adventure to Nangma...', tourDate: '10 Aug 2025', amount: '95,000', status: 'Confirmed' },
                    { id: 'F2734', dateTime: '20 July 2025', customer: 'David Miller', tour: 'Weekend Trip to the Orm...', tourDate: '15 Aug 2025', amount: '45,000', status: 'Confirmed' },
                    { id: 'F2735', dateTime: '19 July 2025', customer: 'Ayesha Ali', tour: '7 Day Exploring Swat, Chi...', tourDate: '20 Aug 2025', amount: '210,000', status: 'Confirmed' },
]);

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Confirmed':
      return 'bg-green-100 text-green-700';
    case 'Pending':
      return 'bg-orange-100 text-orange-700';
    case 'Completed':
      return 'bg-blue-100 text-blue-700';
    case 'Cancelled':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};
</script>

<style scoped>
/* Card Float Effect */
.hover-float {
  transition: transform 0.2s ease;
}
.hover-float:hover {
  transform: translateY(-2px);
}

/* Grid Areas for Desktop Layout */
.dashboard-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .dashboard-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 400px;
    grid-template-rows: auto auto auto 1fr;
    grid-template-areas:
      "overview   activity"
      "setup      activity"
      "charts     messages"
      "table      table";
    align-items: start;
  }
  
  .area-overview { grid-area: overview; }
  .area-setup { grid-area: setup; }
  .area-activity { grid-area: activity; }
  .area-messages { grid-area: messages; }
  .area-charts { grid-area: charts; }
  .area-table { grid-area: table; }
}
</style>