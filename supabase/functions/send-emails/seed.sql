-- ==========================================
-- SEED: ATTRIBUTES FOR SUPPLIER SIGNUP
-- ==========================================

-- Property Types (for Stay)
INSERT INTO attributes (name, category, group_name) VALUES
('Hotel', 'property_type', 'accommodation'),
('Guest House', 'property_type', 'accommodation'),
('Resort', 'property_type', 'accommodation'),
('Hostel', 'property_type', 'accommodation'),
('Apartment', 'property_type', 'accommodation'),
('Villa', 'property_type', 'accommodation'),
('Cottage', 'property_type', 'accommodation');

-- Amenities (for Stay facilities)
INSERT INTO attributes (name, category, group_name) VALUES
('Free Wi-Fi', 'amenity', 'facilities'),
('Parking', 'amenity', 'facilities'),
('Room Service', 'amenity', 'facilities'),
('Swimming Pool', 'amenity', 'facilities'),
('Gym', 'amenity', 'facilities'),
('Restaurant', 'amenity', 'facilities'),
('24/7 Reception', 'amenity', 'facilities'),
('Laundry Service', 'amenity', 'facilities'),
('Airport Shuttle', 'amenity', 'facilities'),
('Pet Friendly', 'amenity', 'facilities');

-- Activity Types (for Activity Provider)
INSERT INTO attributes (name, category, group_name) VALUES
('Paragliding', 'activity_type', 'adventure'),
('Boating', 'activity_type', 'adventure'),
('Zip Lining', 'activity_type', 'adventure'),
('Rock Climbing', 'activity_type', 'adventure'),
('Rafting', 'activity_type', 'adventure'),
('Camping', 'activity_type', 'adventure'),
('Skiing', 'activity_type', 'adventure'),
('Horse Riding', 'activity_type', 'adventure');

-- Tour Services (for Tour Operators)
INSERT INTO attributes (name, category, group_name) VALUES
('Day tours', 'tour_service', 'services'),
('Group tours', 'tour_service', 'services'),
('Trekking', 'tour_service', 'services'),
('Mountaineering', 'tour_service', 'services'),
('Cultural tours', 'tour_service', 'services'),
('Photography tours', 'tour_service', 'services');

-- Guide Specialities
INSERT INTO attributes (name, category, group_name) VALUES
('History', 'guide_speciality', 'expertise'),
('Culture', 'guide_speciality', 'expertise'),
('Hiking', 'guide_speciality', 'expertise'),
('Food', 'guide_speciality', 'expertise'),
('Photography', 'guide_speciality', 'expertise'),
('Wildlife', 'guide_speciality', 'expertise');