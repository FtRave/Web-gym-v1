import type { LucideIcon } from "lucide-react";
import {
  Dumbbell, HeartPulse, Users, Salad, Sparkles, ShieldCheck,
  Waves, Lock, ShowerHead, ParkingCircle, Wifi, Coffee, Users2,
  Bike, Activity, GraduationCap, Music, Snowflake, Camera,
  Droplet, Accessibility, Flame,
} from "lucide-react";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/equipment", label: "Equipment" },
  { to: "/trainers", label: "Trainers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export const CONTACT = {
  address: "204 Ironworks Avenue, Downtown, CA 90014",
  phone: "+1 (415) 555-0142",
  email: "hello@ironpulsefitness.com",
  hoursWeek: "Mon – Sat · 5:00 AM – 11:00 PM",
  hoursSun: "Sunday · 6:00 AM – 8:00 PM",
  whatsapp: "https://wa.me/14155550142",
} as const;

export const STATS = [
  { value: "2,500+", label: "Active Members" },
  { value: "15+", label: "Certified Trainers" },
  { value: "100+", label: "Premium Machines" },
  { value: "24/7", label: "Member Support" },
] as const;

export type WhyChoose = { icon: LucideIcon; title: string; body: string };
export const WHY_CHOOSE: WhyChoose[] = [
  { icon: Dumbbell, title: "Modern Equipment", body: "Latest Technogym, Life Fitness and Rogue gear across every zone." },
  { icon: GraduationCap, title: "Certified Trainers", body: "NASM, ACE and ISSA credentialed coaches with 5+ years experience." },
  { icon: Sparkles, title: "Personalized Plans", body: "Custom-built programs tailored to your body, goals and lifestyle." },
  { icon: HeartPulse, title: "Cardio & Strength", body: "Distinct zones so you never wait — engineered airflow keeps you fresh." },
  { icon: ShieldCheck, title: "Clean Environment", body: "Sanitized hourly. Every station wiped after use, always." },
  { icon: Salad, title: "Nutrition Support", body: "In-house dietitians and macro-friendly meals at our protein bar." },
];

export type Facility = { icon: LucideIcon; label: string };
export const FACILITIES: Facility[] = [
  { icon: Waves, label: "Steam Room" },
  { icon: Lock, label: "Locker Room" },
  { icon: ShowerHead, label: "Showers" },
  { icon: ParkingCircle, label: "Parking" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: Coffee, label: "Protein Bar" },
  { icon: Users2, label: "Group Classes" },
  { icon: Bike, label: "Cardio Zone" },
  { icon: Activity, label: "Functional Zone" },
  { icon: GraduationCap, label: "Personal Training" },
  { icon: Sparkles, label: "Yoga Studio" },
  { icon: Music, label: "Zumba Studio" },
  { icon: Flame, label: "CrossFit Area" },
  { icon: Snowflake, label: "Air Conditioning" },
  { icon: Camera, label: "CCTV Security" },
  { icon: Droplet, label: "Drinking Water" },
  { icon: Music, label: "Music System" },
  { icon: Accessibility, label: "Wheelchair Access" },
];

export type Trainer = {
  name: string; role: string; experience: string;
  specialization: string[]; certifications: string[]; bio: string; initials: string;
};
export const TRAINERS: Trainer[] = [
  { name: "Rahul Sharma", role: "Senior Strength Coach", experience: "8 years",
    specialization: ["Bodybuilding", "Powerlifting"],
    certifications: ["NSCA-CSCS", "IFBB Pro"],
    bio: "Rahul has coached national-level lifters and specializes in progressive overload programming.",
    initials: "RS" },
  { name: "Aisha Kapoor", role: "Head of Group Fitness", experience: "6 years",
    specialization: ["HIIT", "Zumba", "Dance Cardio"],
    certifications: ["ACE-CPT", "Zumba B1"],
    bio: "Aisha turns every class into a party while delivering serious, science-backed conditioning.",
    initials: "AK" },
  { name: "Marcus Bennett", role: "Performance Coach", experience: "10 years",
    specialization: ["CrossFit", "Olympic Lifting"],
    certifications: ["CF-L3", "USAW-L1"],
    bio: "Ex-college athlete building explosive power and bulletproof mobility for weekend warriors.",
    initials: "MB" },
  { name: "Priya Verma", role: "Yoga & Mobility Lead", experience: "7 years",
    specialization: ["Vinyasa", "Rehab", "Mobility"],
    certifications: ["RYT-500", "FRC-Mobility"],
    bio: "Priya helps lifters move better, breathe deeper and recover faster.",
    initials: "PV" },
  { name: "Diego Martinez", role: "Nutrition & Physique Coach", experience: "9 years",
    specialization: ["Fat Loss", "Contest Prep"],
    certifications: ["Precision Nutrition L2", "NASM-CPT"],
    bio: "Diego combines flexible dieting with smart training to reshape physiques sustainably.",
    initials: "DM" },
  { name: "Sofia Chen", role: "Women's Strength Coach", experience: "5 years",
    specialization: ["Strength", "Postnatal Fitness"],
    certifications: ["NASM-CPT", "Pre/Postnatal Coach"],
    bio: "Sofia builds confident, strong women through evidence-based lifting programs.",
    initials: "SC" },
];

export type Plan = {
  name: string; price: string; period: string; features: string[]; highlighted?: boolean; cta: string;
};
export const PLANS: Plan[] = [
  { name: "Basic", price: "₹799", period: "/month", cta: "Start Basic",
    features: ["Full gym floor access", "Locker & shower use", "Free WiFi & parking", "Weekday 6 AM – 10 PM"] },
  { name: "Premium", price: "₹2499", period: "/month", highlighted: true, cta: "Go Premium",
    features: ["Everything in Basic", "24/7 unlimited access", "All group classes", "2 personal training sessions/mo", "Nutrition consultation", "Guest passes (2/mo)"] },
  { name: "Elite", price: "₹8499", period: "/month", cta: "Join Elite",
    features: ["Everything in Premium", "Weekly personal training", "Custom meal plan", "Recovery lounge access", "Priority booking", "Body composition scans"] },
];

export type Testimonial = { name: string; role: string; text: string; initials: string };
export const TESTIMONIALS: Testimonial[] = [
  { name: "Emma Thompson", role: "Software Engineer", initials: "ET",
    text: "The trainers completely transformed my fitness journey. Down 22 lbs in 5 months and feeling stronger than ever." },
  { name: "Jordan Reyes", role: "Marketing Lead", initials: "JR",
    text: "Cleanest gym I've ever trained at. The equipment is world-class and it's never crowded, even at peak hours." },
  { name: "Sana Patel", role: "Physician", initials: "SP",
    text: "Their programming and nutrition coaching are next level. Finally a gym that treats fitness like medicine." },
  { name: "Liam Novak", role: "Startup Founder", initials: "LN",
    text: "24/7 access changed everything for me. I can train at 5 AM before meetings — no excuses." },
  { name: "Maya Okonkwo", role: "Teacher", initials: "MO",
    text: "As a beginner I felt intimidated, but the coaches made me feel at home from day one. Now I deadlift 2× my bodyweight." },
  { name: "Kenji Tanaka", role: "Architect", initials: "KT",
    text: "The recovery lounge and mobility classes have saved my back. Worth every dollar of the Elite plan." },
  { name: "Alicia Moreno", role: "Nurse", initials: "AM",
    text: "Group classes are the highlight of my week. High energy, great music, and coaches who actually care." },
  { name: "Ethan Wright", role: "Consultant", initials: "EW",
    text: "Went from zero fitness to running my first half marathon in 8 months. The community here is unmatched." },
];

export type Faq = { q: string; a: string };
export const FAQS: Faq[] = [
  { q: "Do you offer personal training?", a: "Yes. Every membership tier can add 1:1 sessions with certified coaches; Premium and Elite plans include sessions each month." },
  { q: "Is parking available?", a: "Absolutely — 80 free covered spots plus valet on weekends." },
  { q: "Do beginners need prior experience?", a: "Not at all. Every new member gets a free onboarding session and a starter program built around them." },
  { q: "Are your trainers certified?", a: "All coaches hold nationally-recognized credentials (NASM, ACE, NSCA, ISSA) and re-certify annually." },
  { q: "Is there a trial session?", a: "Yes — book a complimentary day pass through the contact form and try the entire facility." },
  { q: "What is the cancellation policy?", a: "Cancel any time with 30 days notice. No hidden fees, no long-term lock-ins." },
];

export type Program = { title: string; body: string };
export const PROGRAMS: Program[] = [
  { title: "Weight Loss", body: "Progressive cardio + strength with weekly macro coaching for sustainable fat loss." },
  { title: "Muscle Gain", body: "Hypertrophy-focused splits, structured overload and protein-first nutrition." },
  { title: "Strength", body: "Barbell-driven programming built on the big lifts with periodized peaks." },
  { title: "CrossFit", body: "Coached WODs blending gymnastics, conditioning and Olympic lifts." },
  { title: "Functional Fitness", body: "Movement quality, mobility and everyday-life strength." },
  { title: "Senior Fitness", body: "Low-impact strength and balance work to stay strong at any age." },
  { title: "Women's Fitness", body: "Female-led classes focused on strength, mobility and confidence." },
];

export type Schedule = { time: string; mon: string; tue: string; wed: string; thu: string; fri: string; sat: string };
export const TIMETABLE: Schedule[] = [
  { time: "6:00 AM", mon: "HIIT",       tue: "Strength",  wed: "HIIT",       thu: "Strength",  fri: "HIIT",       sat: "Bootcamp" },
  { time: "8:00 AM", mon: "Yoga",       tue: "Mobility",  wed: "Yoga",       thu: "Mobility",  fri: "Yoga",       sat: "Yoga Flow" },
  { time: "6:00 PM", mon: "CrossFit",   tue: "Zumba",     wed: "CrossFit",   thu: "Zumba",     fri: "CrossFit",   sat: "Open Gym" },
  { time: "7:30 PM", mon: "Powerlift",  tue: "Cycling",   wed: "Powerlift",  thu: "Cycling",   fri: "Powerlift",  sat: "Recovery" },
];

export type EquipmentCategory =
  | "Cardio" | "Chest" | "Back" | "Shoulder" | "Arms" | "Legs" | "Functional" | "Free Weights";
export type Equipment = {
  name: string; category: EquipmentCategory; brand: string; usage: string;
  targetMuscles: string[]; beginnerFriendly: boolean; availability: "Available" | "In High Use";
  description: string; difficulty: "Beginner" | "Intermediate" | "Advanced";
  recommendedFor: string; safetyTips: string;
};

export const EQUIPMENT: Equipment[] = [
  // Cardio
  { name: "Treadmill", category: "Cardio", brand: "Technogym Excite", usage: "Walking, running, incline training", targetMuscles: ["Legs", "Core", "Cardiovascular"], beginnerFriendly: true, availability: "Available", description: "Commercial-grade treadmill with cushioned deck and interactive display.", difficulty: "Beginner", recommendedFor: "All fitness levels", safetyTips: "Attach safety clip, start slow, keep hands off rails while running." },
  { name: "Cross Trainer", category: "Cardio", brand: "Life Fitness", usage: "Low-impact full-body cardio", targetMuscles: ["Legs", "Arms", "Core"], beginnerFriendly: true, availability: "Available", description: "Elliptical with adjustable resistance and stride length.", difficulty: "Beginner", recommendedFor: "Joint-sensitive members", safetyTips: "Maintain upright posture and full stride range." },
  { name: "Exercise Bike", category: "Cardio", brand: "Keiser M3i", usage: "Indoor cycling, spin classes", targetMuscles: ["Quads", "Glutes", "Calves"], beginnerFriendly: true, availability: "Available", description: "Magnetic-resistance spin bike with cadence and power display.", difficulty: "Beginner", recommendedFor: "Cyclists, fat-loss programs", safetyTips: "Set saddle to hip height; secure shoes in cages." },
  { name: "Stair Climber", category: "Cardio", brand: "StairMaster 8G", usage: "Vertical endurance training", targetMuscles: ["Glutes", "Quads", "Calves"], beginnerFriendly: false, availability: "In High Use", description: "Rotating staircase for high-intensity lower-body cardio.", difficulty: "Intermediate", recommendedFor: "Fat loss, glute development", safetyTips: "Do not lean on rails; keep feet flat on steps." },
  { name: "Rowing Machine", category: "Cardio", brand: "Concept2 RowErg", usage: "Full-body cardio and strength", targetMuscles: ["Back", "Legs", "Core", "Arms"], beginnerFriendly: true, availability: "Available", description: "Air-resistance rower — the gold standard for indoor rowing.", difficulty: "Beginner", recommendedFor: "Everyone", safetyTips: "Drive with legs first, then hips, then arms." },
  // Chest
  { name: "Chest Press", category: "Chest", brand: "Hammer Strength", usage: "Compound pressing movement", targetMuscles: ["Chest", "Triceps", "Shoulders"], beginnerFriendly: true, availability: "Available", description: "Plate-loaded iso-lateral chest press for balanced strength.", difficulty: "Beginner", recommendedFor: "Building pressing strength", safetyTips: "Keep back flat, elbows tracked at 45°." },
  { name: "Pec Deck", category: "Chest", brand: "Nautilus", usage: "Chest isolation", targetMuscles: ["Pectorals"], beginnerFriendly: true, availability: "Available", description: "Selectorized pec fly with adjustable seat.", difficulty: "Beginner", recommendedFor: "Chest hypertrophy", safetyTips: "Squeeze at midline; avoid overstretch at start." },
  { name: "Incline Press", category: "Chest", brand: "Hammer Strength", usage: "Upper-chest development", targetMuscles: ["Upper Chest", "Front Delts"], beginnerFriendly: true, availability: "Available", description: "30° incline plate-loaded press.", difficulty: "Intermediate", recommendedFor: "Balanced chest shape", safetyTips: "Keep shoulder blades retracted." },
  { name: "Cable Fly Station", category: "Chest", brand: "Life Fitness Signature", usage: "Chest isolation across angles", targetMuscles: ["Chest"], beginnerFriendly: true, availability: "Available", description: "Dual adjustable cable columns for high/mid/low flies.", difficulty: "Intermediate", recommendedFor: "Chest detail work", safetyTips: "Maintain slight elbow bend throughout." },
  // Back
  { name: "Lat Pulldown", category: "Back", brand: "Life Fitness", usage: "Vertical pulling", targetMuscles: ["Lats", "Biceps", "Rear Delts"], beginnerFriendly: true, availability: "Available", description: "Selectorized lat pulldown with multi-grip bar.", difficulty: "Beginner", recommendedFor: "Back width", safetyTips: "Pull to upper chest, don't swing." },
  { name: "Seated Row", category: "Back", brand: "Hammer Strength", usage: "Horizontal pulling", targetMuscles: ["Mid Back", "Biceps"], beginnerFriendly: true, availability: "Available", description: "Iso-lateral seated row.", difficulty: "Beginner", recommendedFor: "Back thickness", safetyTips: "Keep chest tall, elbows in." },
  { name: "T-Bar Row", category: "Back", brand: "Rogue", usage: "Heavy back rowing", targetMuscles: ["Mid Back", "Lats"], beginnerFriendly: false, availability: "Available", description: "Landmine-style T-bar with multiple grip options.", difficulty: "Intermediate", recommendedFor: "Building back mass", safetyTips: "Brace core; hinge at hips." },
  { name: "Deadlift Platform", category: "Back", brand: "Rogue", usage: "Barbell deadlifts and Olympic lifts", targetMuscles: ["Posterior Chain", "Grip"], beginnerFriendly: false, availability: "Available", description: "Rubber-inlaid platform with bumper plates.", difficulty: "Advanced", recommendedFor: "Strength athletes", safetyTips: "Neutral spine, bar close to body." },
  // Shoulder
  { name: "Shoulder Press", category: "Shoulder", brand: "Hammer Strength", usage: "Vertical pressing", targetMuscles: ["Shoulders", "Triceps"], beginnerFriendly: true, availability: "Available", description: "Plate-loaded overhead press.", difficulty: "Beginner", recommendedFor: "Shoulder mass", safetyTips: "Avoid arching lower back." },
  { name: "Lateral Raise Machine", category: "Shoulder", brand: "Nautilus", usage: "Side-delt isolation", targetMuscles: ["Side Delts"], beginnerFriendly: true, availability: "Available", description: "Selectorized lateral raise for constant tension.", difficulty: "Beginner", recommendedFor: "Shoulder width", safetyTips: "Lead with elbows; controlled tempo." },
  // Arms
  { name: "Bicep Curl Machine", category: "Arms", brand: "Life Fitness", usage: "Bicep isolation", targetMuscles: ["Biceps"], beginnerFriendly: true, availability: "Available", description: "Fixed-path preacher-style bicep curl.", difficulty: "Beginner", recommendedFor: "Arm hypertrophy", safetyTips: "Full range, no swinging." },
  { name: "Tricep Pushdown", category: "Arms", brand: "Life Fitness Cable", usage: "Tricep isolation", targetMuscles: ["Triceps"], beginnerFriendly: true, availability: "Available", description: "Cable pushdown with rope and V-bar attachments.", difficulty: "Beginner", recommendedFor: "Arm definition", safetyTips: "Keep elbows pinned to sides." },
  // Legs
  { name: "Leg Press", category: "Legs", brand: "Hammer Strength", usage: "Heavy compound leg movement", targetMuscles: ["Quads", "Glutes", "Hamstrings"], beginnerFriendly: true, availability: "Available", description: "45° plate-loaded leg press.", difficulty: "Beginner", recommendedFor: "Leg mass building", safetyTips: "Never lock knees; keep lower back on pad." },
  { name: "Hack Squat", category: "Legs", brand: "Hammer Strength", usage: "Quad-focused squat", targetMuscles: ["Quads", "Glutes"], beginnerFriendly: false, availability: "Available", description: "Angled hack squat with safety catches.", difficulty: "Intermediate", recommendedFor: "Quad development", safetyTips: "Track knees over toes; controlled descent." },
  { name: "Smith Machine", category: "Legs", brand: "Life Fitness", usage: "Guided barbell work", targetMuscles: ["Full Body"], beginnerFriendly: true, availability: "Available", description: "Counter-balanced Smith machine with safety hooks.", difficulty: "Beginner", recommendedFor: "Solo lifters", safetyTips: "Rotate bar to lock at any point." },
  // Functional
  { name: "Battle Ropes", category: "Functional", brand: "Rogue", usage: "Conditioning and grip", targetMuscles: ["Shoulders", "Core", "Grip"], beginnerFriendly: true, availability: "Available", description: "50 ft heavy training ropes anchored to floor.", difficulty: "Beginner", recommendedFor: "Cardio finishers", safetyTips: "Soft knees, athletic stance." },
  { name: "Kettlebells", category: "Functional", brand: "Rogue Kettlebells", usage: "Ballistic and grinding lifts", targetMuscles: ["Full Body"], beginnerFriendly: true, availability: "Available", description: "Full range from 8 – 48 kg competition kettlebells.", difficulty: "Intermediate", recommendedFor: "Conditioning and strength", safetyTips: "Learn hip hinge before swings." },
  { name: "TRX Suspension", category: "Functional", brand: "TRX Pro", usage: "Bodyweight training", targetMuscles: ["Full Body"], beginnerFriendly: true, availability: "Available", description: "Anchored suspension straps for scalable bodyweight work.", difficulty: "Beginner", recommendedFor: "Core and stability", safetyTips: "Check anchor before every set." },
  // Free Weights
  { name: "Dumbbells", category: "Free Weights", brand: "Rogue Hex", usage: "Full library 2.5 – 100 lbs", targetMuscles: ["Full Body"], beginnerFriendly: true, availability: "Available", description: "Two complete dumbbell racks with 2.5-lb increments.", difficulty: "Beginner", recommendedFor: "Every training style", safetyTips: "Return to rack; avoid dropping." },
  { name: "Olympic Barbells", category: "Free Weights", brand: "Rogue Ohio Bar", usage: "Squat, bench, deadlift, Olympic lifts", targetMuscles: ["Full Body"], beginnerFriendly: false, availability: "Available", description: "Multiple 20 kg and 15 kg Olympic bars.", difficulty: "Intermediate", recommendedFor: "Strength training", safetyTips: "Use collars every set." },
  { name: "Adjustable Benches", category: "Free Weights", brand: "Rep Fitness", usage: "Flat, incline, decline pressing", targetMuscles: ["Chest", "Shoulders"], beginnerFriendly: true, availability: "Available", description: "Commercial-grade adjustable benches at every rack.", difficulty: "Beginner", recommendedFor: "Pressing and rowing", safetyTips: "Lock pin fully before loading." },
];

export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  "Cardio", "Chest", "Back", "Shoulder", "Arms", "Legs", "Functional", "Free Weights",
];

export type GalleryTile = { label: string; hue: number; tall?: boolean };
export const GALLERY: GalleryTile[] = [
  { label: "Strength Zone", hue: 210, tall: true },
  { label: "Cardio Deck", hue: 195 },
  { label: "Functional Turf", hue: 220, tall: true },
  { label: "Yoga Studio", hue: 260 },
  { label: "CrossFit Rig", hue: 200 },
  { label: "Free Weights", hue: 205, tall: true },
  { label: "Group Class", hue: 190 },
  { label: "Recovery Lounge", hue: 230 },
  { label: "Protein Bar", hue: 40, tall: true },
  { label: "Locker Room", hue: 215 },
];
