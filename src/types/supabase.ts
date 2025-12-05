// ==========================================
// 1. ENUMS (Matching Database Exactly)
// ==========================================
export type UserRole = 'admin' | 'supplier' | 'customer';
export type SupplierType = 'stay' | 'tour_operator' | 'rental' | 'activity_provider' | 'tour_guide';
export type SupplierStatus = 'pending' | 'approved' | 'rejected' | 'suspended';
export type ListingType = 'room' | 'tour' | 'trek' | 'activity' | 'car' | 'bike' | 'experience';
export type ListingStatus = 'draft' | 'pending_review' | 'active' | 'inactive' | 'archived';
export type BookingStatus = 'pending' | 'pending_payment' | 'confirmed' | 'cancelled' | 'completed';
export type PaymentStatus = 'pending' | 'paid' | 'refunded' | 'failed';
export type TicketStatus = 'open' | 'in_progress' | 'resolved' | 'closed';
export type EditType = 'modification' | 'removal';
export type EditStatus = 'pending' | 'approved' | 'rejected';

// ==========================================
// 2. JSONB INTERFACES (The "Flexible" Data)
// ==========================================

// --- PRICING CONFIG (For Listings) ---
export interface PricingTier {
  name: string; // e.g., "Adults", "Children"
  age_min?: number;
  age_max?: number;
  price: number;
}

export interface AddOn {
  name: string;
  price: number;
  type: 'per_booking' | 'per_person' | 'per_day';
}

export interface PricingConfig {
  base: PricingTier;
  secondary?: PricingTier[];
  addons?: AddOn[];
}

// --- LISTING DETAILS (Polymorphic Shapes) ---

export interface DetailsTour {
  duration: string; // "8 days"
  tour_type: 'Group' | 'Private';
  start_time: string;
  end_time?: string;
  pickup_included: boolean;
  tour_theme?: string;
  starts_in: string; // City name
  places_covered: string[];
  itinerary: Array<{
    title: string;
    time?: string;
    overview: string;
  }>;
  inclusions: string[];
  exclusions: string[];
  highlights: string[];
  what_to_bring: string[];
  not_suitable_for?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  
  // Specifics for Treks/Activities
  difficulty?: 'Easy' | 'Moderate' | 'Hard' | 'Extreme';
  language?: string;
}

export interface DetailsVehicle {
  make: string; // Toyota
  model_year: number;
  fuel_type: string; // Hybrid, Petrol
  engine_capacity: string; // 1800cc
  transmission?: 'Automatic' | 'Manual'; // Cars only
  seating_capacity?: number; // Cars only
  features?: string[]; // Cruise control, etc.
  self_drive?: boolean;
  bike_type?: string; // Scooter, Dirt Bike (Bikes only)
  inclusions?: string[];
  exclusions?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

export interface DetailsRoom {
  size_sqft?: number;
  sleeps: number;
  bed_config: string; // "1 King" or "2 Single"
  amenities: string[];
  breakfast_price?: number;
  faqs?: Array<{ question: string; answer: string }>;
}

// Union type for all listing details
export type ListingDetails = DetailsTour | DetailsVehicle | DetailsRoom;

// --- SUPPLIER DETAILS ---
export interface SupplierDetails {
  // Stays
  check_in?: string;
  check_out?: string;
  pet_friendly?: boolean;
  extra_mattress_available?: boolean;
  
  // Rentals / Activities
  open_hours?: string; // "09:00 - 17:00"
  open_days?: string[]; // ["Mon", "Tue"...]
  security_deposit_required?: boolean;
  vehicle_count?: number;
  
  // Tour Guides
  specialty?: string;
  guide_since?: number;
  serves_foreigners?: boolean;
}

export interface BankDetails {
  bank_name: string;
  account_title: string;
  account_number: string;
  iban: string;
}

// --- BOOKING SNAPSHOT DETAILS (The "What exactly did I buy?" record) ---
export interface BookingItemSnapshot {
  name: string; // "Adults" or "Children"
  age_range?: string; // "18-65" (Captured from listing at time of booking)
  unit_price: number; // 78000
  quantity: number; // 2
  total: number; // 156000
}

export interface BookingAddonSnapshot {
  name: string; // "Photography"
  type: 'per_booking' | 'per_person' | 'per_day';
  unit_price: number;
  quantity: number; // 1
  total: number;
}

export interface BookingDetailsSnapshot {
  // For Tours/Treks/Activities: Breakdown of guests
  items?: BookingItemSnapshot[]; 
  
  // For Rentals:
  is_self_drive?: boolean;
  rental_days?: number;
  
  // For Stays:
  nights?: number;
  
  // Common
  addons?: BookingAddonSnapshot[];
}

// ==========================================
// 3. DATABASE TABLES (Row Definitions)
// ==========================================

export interface Profile {
  id: string; // UUID
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  role: UserRole;
  created_at: string;
}

export interface Place {
  id: string;
  name: string;
  province: string;
  country: string;
  image_url: string | null;
  is_active: boolean;
}

export interface Supplier {
  id: string; // UUID (matches Profile ID)
  business_name: string;
  supplier_type: SupplierType;
  contact_person: string | null;
  phone: string | null;
  address: string | null;
  place_id: string | null;
  coordinates: { x: number; y: number } | null; // PostGIS point
  
  // Legal
  legal_status: string | null;
  national_id: string | null;
  company_reg_number: string | null;
  ntn_number: string | null;
  verification_docs: Record<string, string> | null;
  
  // Settings
  status: SupplierStatus;
  admin_remarks: string | null;
  commission_rates: Record<string, number>; // { "tour": 20 }
  bank_details: BankDetails | null;
  
  // Content
  about: string | null;
  logo_url: string | null;
  details: SupplierDetails;
  
  rating_avg: number;
  review_count: number;
  created_at: string;
}

export interface Listing {
  id: string;
  supplier_id: string;
  place_id: string | null;
  
  title: string;
  slug: string | null;
  type: ListingType;
  description: string | null;
  status: ListingStatus;
  
  meeting_address: string | null;
  currency: string;
  pricing_config: PricingConfig;
  details: ListingDetails; // <--- The Magic Polymorphic Type
  
  created_at: string;
  updated_at: string;
}

export interface ListingEdit {
  id: string;
  listing_id: string | null;
  supplier_id: string;
  edit_type: EditType;
  snapshot_before: Listing; // Full snapshot
  snapshot_after: Listing;  // Full snapshot
  status: EditStatus;
  admin_remarks: string | null;
  created_at: string;
  processed_at: string | null;
}

export interface ListingImage {
  id: string;
  listing_id: string;
  image_url: string;
  caption: string | null;
  sort_order: number;
}

export interface Availability {
  id: string;
  listing_id: string;
  date: string; // ISO Date "YYYY-MM-DD"
  slots_total: number | null;
  slots_booked: number;
  is_blocked: boolean;
  price_override: number | null;
}

export interface Booking {
  id: string;
  customer_id: string;
  listing_id: string;
  supplier_id: string;
  
  start_date: string; // ISO Timestamp
  end_date: string;
  
  guest_count: number;
  currency: string;
  exchange_rate_snapshot: number;
  total_price: number;
  commission_amount: number;
  coupon_code: string | null;
  
  booking_details: BookingDetailsSnapshot; // Explicit snapshot of selections
  
  status: BookingStatus;
  payment_status: PaymentStatus;
  created_at: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  rate_to_base: number;
  is_active: boolean;
  last_updated: string;
}

// ==========================================
// 4. SUPABASE DATABASE HELPERS
// ==========================================

export interface Database {
  public: {
    Tables: {
      profiles: { Row: Profile; Insert: Profile; Update: Partial<Profile> };
      places: { Row: Place; Insert: Place; Update: Partial<Place> };
      suppliers: { Row: Supplier; Insert: Supplier; Update: Partial<Supplier> };
      listings: { Row: Listing; Insert: Listing; Update: Partial<Listing> };
      listing_edits: { Row: ListingEdit; Insert: ListingEdit; Update: Partial<ListingEdit> };
      listing_images: { Row: ListingImage; Insert: ListingImage; Update: Partial<ListingImage> };
      availability: { Row: Availability; Insert: Availability; Update: Partial<Availability> };
      bookings: { Row: Booking; Insert: Booking; Update: Partial<Booking> };
      currencies: { Row: Currency; Insert: Currency; Update: Partial<Currency> };
      // ... Add other tables as needed (reviews, tickets, etc)
    };
  };
}