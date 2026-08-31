export type Service = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  features: string[];
  steps: string[];
  faqs: { q: string; a: string }[];
  pricing?: { item: string; price: string }[];
  whyChooseUsTitle?: string;
  whyChooseUs?: string[];
  whyChooseUsIntro?: string;
  whyChooseUsClosing?: string;
  introSection?: { title: string; paragraph: string };
  whyEssential?: { title: string; intro: string; causes?: string[]; closing?: string };
  getStarted?: { title?: string; intro: string; steps: { title: string; text: string }[] };
  whoNeedsIt?: { title: string; intro: string; list?: string[]; safetyNote?: string };
  beyondJumpstart?: { title: string; intro: string; services: string[]; closing?: string };
  whyPartner?: { title: string; intro: string; points?: string[]; closing?: string };
  vehicleTypes?: { title: string; intro: string; list: string[] };
  serviceHighlights?: { title: string; intro?: string; items: { icon: string; title: string; description: string; image?: string }[] };
  costFactorsTitle?: string;
  costFactorsParagraph?: string;
  costFactors?: string[];
  costFactorsDetailed?: { icon: string; title: string; description: string; image?: string }[];
  pricingTitle?: string;
  pricingNote?: string;
  pricingIntro?: { title: string; paragraphs: string[] };
  testimonials?: { name: string; area: string; quote: string }[];
  showBrands?: boolean;
  showAreas?: boolean;
  heroImage?: string;
  trustBar?: string[];
  featuresTitle?: string;
  featuresIntro?: string;
  featuresImage?: string;
  stepsTitle?: string;
  stepsIntro?: string;
  stepsImage?: string;
  otherServicesTitle?: string;
  otherServicesSubheading?: string;
  otherServicesImage?: string;
  relatedAutomotive?: { title: string; subheading?: string; items: { title: string; description: string }[]; image?: string };
  emergencyCTA?: { label?: string; title?: string; description?: string; supportingText?: string; image?: string };
  metaTitle?: string;
  metaDescription?: string;
};

const services: Service[] = [
  {
    slug: "car-door-unlocking",
    title: "Car Door Unlocking in Dubai",
    description: "Fast assistance for locked car doors, anywhere in Dubai.",
    intro:
      "Locked out of your car? Our professional locksmiths provide fast, safe and non-destructive car door unlocking across Dubai. We use specialist tools and techniques to unlock your vehicle without damaging the door, lock or paintwork.",
    heroImage: "/images/keymaking/car-door-hero.jpeg",
    trustBar: ["Fast Response", "Non-Destructive", "Professional Locksmiths", "24/7 Emergency Assistance"],
    featuresTitle: "What's Included With Our Car Door Unlocking Service",
    featuresIntro: "Our car unlocking service is designed to get you back on the road quickly while keeping your vehicle protected.",
    featuresImage: "/images/keymaking/car-door-whats-included.jpeg",
    features: [
      "Non-Destructive Unlocking — Professional unlocking techniques designed to protect your vehicle's doors, locks, windows and paintwork.",
      "All Vehicle Makes & Models — We assist with a wide range of cars, from everyday vehicles to premium and luxury models.",
      "Fast Response Across Dubai — Our mobile locksmith team is available for emergency car lockout situations across Dubai.",
      "Transparent Pricing — Clear pricing before the service begins, with no unnecessary hidden charges.",
    ],
    stepsTitle: "How Our Car Door Unlocking Service Works",
    stepsIntro: "Getting locked out of your car doesn't have to be stressful. Our simple four-step process gets you back inside quickly.",
    stepsImage: "/images/keymaking/car-door-how-it-works.jpeg",
    steps: [
      "Call or WhatsApp Us — Share your location, vehicle details and the type of lockout you are experiencing.",
      "Technician Dispatched — A professional automotive locksmith is dispatched to your location as quickly as possible.",
      "Safe Vehicle Unlocking — Our technician uses appropriate professional tools and techniques to unlock your vehicle without unnecessary damage.",
      "You're Back on the Road — Once your vehicle is safely unlocked, you can get back to your journey without unnecessary delays.",
    ],
    otherServicesTitle: "Our Other Locksmith Services",
    otherServicesSubheading: "Professional automotive and residential locksmith solutions across Dubai.",
    otherServicesImage: "/images/keymaking/car-door-other-services.jpeg",
    relatedAutomotive: {
      title: "Complete Automotive Assistance in Dubai",
      subheading: "More than just car door unlocking — get reliable roadside and automotive support when you need it.",
      image: "/images/keymaking/car-door-automotive-assistance.jpeg",
      items: [
        { title: "Car Battery Replacement", description: "Fast mobile battery replacement for vehicles across Dubai." },
        { title: "Battery Diagnostics", description: "Professional battery testing to identify weak or failing batteries." },
        { title: "Jump Start Assistance", description: "Quick roadside assistance when your vehicle battery has lost power." },
        { title: "Tyre Replacement", description: "Convenient roadside tyre replacement when you need immediate assistance." },
        { title: "Flat Tyre Assistance", description: "Get help with flat tyres and get back on the road quickly." },
        { title: "Roadside Assistance", description: "Practical roadside support for unexpected vehicle problems." },
      ],
    },
    emergencyCTA: {
      label: "Emergency Locksmith Service",
      title: "Locked Out? Get Immediate Assistance!",
      description:
        "Don't worry if you're locked out of your vehicle. Our professional automotive locksmiths provide fast and reliable car door unlocking services across Dubai, helping you regain access to your vehicle safely and efficiently.",
      supportingText:
        "Available for emergency car lockout assistance across Dubai. Contact us with your location and vehicle details, and our team will guide you through the next steps.",
      image: "/images/keymaking/car-door-emergency-cta.jpeg",
    },
    faqs: [
      { q: "Will you unlock my car without damaging the lock or door?", a: "Yes. Our technicians use professional non-destructive unlocking techniques wherever possible to protect your vehicle's lock, door and surrounding components." },
      { q: "How quickly can you reach me?", a: "Response times depend on your location and traffic conditions in Dubai. We aim to dispatch a technician as quickly as possible after receiving your call or WhatsApp request." },
      { q: "Can you unlock all car brands?", a: "We assist with a wide range of vehicle makes and models. Share your vehicle's make, model and year with us so our technician can prepare the appropriate equipment." },
      { q: "Are you available 24/7?", a: "Our emergency locksmith service is available around the clock for car lockout assistance in Dubai." },
      { q: "Can you help if I have lost my car keys?", a: "Yes. Depending on your vehicle, we may be able to assist with car key replacement, key cutting or programming in addition to unlocking the vehicle." },
      { q: "Do you provide car unlocking outside Dubai?", a: "Service availability can depend on the location. Contact us with your exact area and our team can confirm assistance." },
    ],
  },
  {
    slug: "apartment-door-unlocking",
    title: "Apartment Door Unlocking in Dubai",
    description: "Quick and reliable unlocking for apartment doors.",
    intro:
      "Locked out of your apartment? Our professional locksmiths provide fast and safe apartment door unlocking across Dubai. We use professional techniques to regain access with minimal risk of damage to your door, lock or frame.",
    heroImage: "/images/keymaking/apartment-door-unlocking-hero-dubai.jpeg",
    featuresTitle: "What's Included",
    featuresIntro: "Our apartment unlocking service is designed to restore access quickly while protecting your door and lock wherever possible.",
    featuresImage: "/images/keymaking/apartment-locksmith-safe-entry.jpeg",
    features: [
      "Safe Entry Methods for Common Lock Types — Professional unlocking techniques suitable for many common residential locks and door systems.",
      "Minimal to No Damage to Your Door or Frame — We use appropriate non-destructive methods whenever possible to help protect your property.",
      "Fast Response Across Dubai — Our mobile locksmith team provides rapid assistance across Dubai apartments, residential buildings and communities.",
      "Emergency & Scheduled Visits Available — Get locksmith assistance for urgent lockouts or arrange a convenient visit for a planned service.",
    ],
    stepsTitle: "How It Works",
    stepsIntro: "Our simple process helps you regain access to your apartment safely and with minimal delay.",
    stepsImage: "/images/keymaking/apartment-locksmith-service-process.jpeg",
    steps: [
      "Call or WhatsApp Us — Share your building, apartment/unit details and the type of lockout you're experiencing.",
      "A Locksmith Is Dispatched — A professional locksmith is assigned and sent to your location as quickly as possible.",
      "Your Apartment Door Is Unlocked Safely — Our technician assesses the lock and uses the appropriate professional unlocking technique.",
      "Optional Lock Check or Replacement — If required, we can inspect the lock and provide replacement or repair options after unlocking your door.",
    ],
    otherServicesTitle: "Our Other Locksmith Services",
    otherServicesSubheading: "Hover a service to see what it covers.",
    otherServicesImage: "/images/keymaking/dubai-locksmith-services.jpeg",
    relatedAutomotive: {
      title: "Emergency Locksmith Services in Dubai",
      subheading: "Reliable locksmith assistance for your home, apartment, vehicle and security needs.",
      image: "/images/keymaking/emergency-locksmith-services-dubai.jpeg",
      items: [
        { title: "Emergency Lockout Assistance", description: "Fast help when you're locked outside your home or apartment." },
        { title: "Lock Replacement", description: "Replace damaged, faulty or outdated locks with suitable alternatives." },
        { title: "Lock Repair", description: "Professional assistance for locks that are difficult to operate or malfunctioning." },
        { title: "House Door Unlocking", description: "Safe unlocking assistance for residential doors and entrances." },
        { title: "Car Door Unlocking", description: "Professional vehicle lockout assistance across Dubai." },
        { title: "Safe Box Unlocking", description: "Specialist assistance for accessing locked safes." },
      ],
    },
    emergencyCTA: {
      label: "Emergency Locksmith Service",
      title: "Locked Out? Get Immediate Assistance!",
      description:
        "Don't worry if you're locked out of your apartment. Our professional locksmiths provide fast and reliable apartment door unlocking services across Dubai, helping you regain access safely and efficiently.",
      supportingText:
        "Share your location and apartment details with our team. We'll help you understand the next steps and arrange locksmith assistance as quickly as possible.",
      image: "/images/keymaking/emergency-apartment-lockout-dubai.jpeg",
    },
    faqs: [
      { q: "Can you open any type of apartment door lock?", a: "We handle many common residential lock types, including standard deadbolts, cylinder locks and compatible smart locks. The available method depends on the specific lock and door system." },
      { q: "Do I need to prove I live there?", a: "For security reasons, our locksmith may request reasonable proof that you are authorized to access the property before carrying out the service." },
      { q: "How quickly can you arrive?", a: "Response times depend on your location, traffic and technician availability. We aim to dispatch assistance as quickly as possible across Dubai." },
      { q: "Can you replace the lock after unlocking the door?", a: "Yes. If your lock is damaged, faulty or you would like to upgrade it, we can assess the lock and provide suitable replacement options." },
      { q: "Can you unlock a smart apartment lock?", a: "We can assist with compatible smart and electronic locking systems. Please provide the lock type or model when contacting us." },
      { q: "Are apartment unlocking services available 24/7?", a: "Our emergency locksmith service is available around the clock for urgent lockout situations in Dubai." },
    ],
    metaTitle: "Apartment Door Unlocking Dubai | 24/7 Locksmith Assistance",
    metaDescription: "Locked out of your apartment in Dubai? Get fast, safe and professional apartment door unlocking from experienced locksmiths. Call or WhatsApp for immediate assistance.",
  },
  {
    slug: "lock-replacement",
    title: "Lock Replacement in Dubai",
    description: "Safe and secure lock replacement services for improved protection.",
    intro:
      "Whether your lock is worn, damaged, or no longer provides the security you need, our professional locksmiths can supply and replace suitable locks for homes, apartments, offices and commercial properties across Dubai.",
    heroImage: "/images/keymaking/lock-replacement-hero-dubai.jpeg",
    featuresTitle: "What's Included",
    featuresIntro: "Get a professional lock replacement tailored to your property's security requirements, door type and existing hardware.",
    featuresImage: "/images/keymaking/professional-lock-replacement-dubai.jpeg",
    features: [
      "Wide Range of Lock Brands & Types — Access suitable replacement options for common residential, apartment, office and commercial door systems.",
      "Clean Installation With Minimal Disruption — Our locksmiths remove the existing lock and install the replacement carefully and efficiently.",
      "Security Upgrades Available — Upgrade worn or outdated locks with modern security solutions designed for improved protection.",
      "Same-Day Service Across Dubai — Get convenient lock replacement assistance at your location, subject to availability.",
    ],
    stepsTitle: "How It Works",
    stepsIntro: "Our straightforward lock replacement process makes it easy to improve your property's security.",
    stepsImage: "/images/keymaking/locksmith-lock-installation-process.jpeg",
    steps: [
      "Call or WhatsApp Us — Share your lock type, property type and location with our locksmith team.",
      "We Recommend the Right Lock — Based on your door and security requirements, we recommend a suitable replacement option.",
      "Technician Fits the New Lock On-Site — Our locksmith arrives at your location and professionally removes the existing lock before installing the replacement.",
      "Keys Handed Over & Lock Tested — We test the new lock and keys to ensure everything operates correctly before completing the service.",
    ],
    otherServicesTitle: "Our Other Locksmith Services",
    otherServicesSubheading: "Hover a service to see what it covers.",
    otherServicesImage: "/images/keymaking/complete-locksmith-services-dubai.jpeg",
    relatedAutomotive: {
      title: "Lock Solutions We Offer in Dubai",
      subheading: "Reliable replacement options for different properties and security requirements.",
      image: "/images/keymaking/door-lock-security-solutions-dubai.jpeg",
      items: [
        { title: "Residential Door Locks", description: "Replacement locks for villas, houses and residential entrances." },
        { title: "Apartment Door Locks", description: "Suitable lock replacement solutions for apartment doors and residential buildings." },
        { title: "Office Door Locks", description: "Security-focused replacement options for offices and commercial spaces." },
        { title: "High-Security Locks", description: "Upgrade your existing lock with a more advanced security solution where suitable." },
        { title: "Cylinder Lock Replacement", description: "Replace worn, damaged or faulty lock cylinders efficiently." },
        { title: "Digital & Smart Locks", description: "Modern electronic locking solutions for compatible doors and properties." },
      ],
    },
    emergencyCTA: {
      label: "Emergency Locksmith Service",
      title: "Need a Lock Replaced? Get Immediate Assistance!",
      description:
        "Don't wait with a damaged, faulty or compromised lock. Our professional locksmiths provide fast lock replacement assistance across Dubai for homes, apartments, offices and commercial properties.",
      supportingText:
        "Tell us your location and lock requirements. Our team can guide you on the next steps and arrange a locksmith visit based on availability.",
      image: "/images/keymaking/emergency-lock-replacement-dubai.jpeg",
    },
    faqs: [
      { q: "How long does a lock replacement take?", a: "Many standard lock replacements can be completed within approximately 30–60 minutes, depending on the lock type, door configuration and installation requirements." },
      { q: "Can you upgrade my lock to a more secure type?", a: "Yes. We can assess your existing lock and recommend suitable security upgrades based on your door and property requirements." },
      { q: "Do you replace locks for offices and shops too?", a: "Yes. We provide lock replacement solutions for residential properties, offices, shops and other suitable commercial locations." },
      { q: "Is the old lock removed and disposed of?", a: "Yes. When requested, the old lock hardware can be removed as part of the replacement service." },
      { q: "Can you replace a lock if I have lost my keys?", a: "Yes. If your keys are lost or you are concerned that someone may have access to them, replacing the lock or cylinder can provide an additional level of security." },
      { q: "Can you replace a damaged or jammed lock?", a: "Yes. We can assess the lock, determine whether replacement is appropriate and install a suitable replacement where required." },
    ],
    metaTitle: "Lock Replacement Dubai | Home, Apartment & Office Locksmith",
    metaDescription: "Need a lock replacement in Dubai? Get professional lock replacement for homes, apartments, offices and shops. Upgrade damaged or outdated locks with reliable locksmith assistance.",
  },
  {
    slug: "safe-box-unlocking",
    title: "Safe Box Unlocking",
    description: "Secure solutions to open locked safety boxes.",
    intro:
      "Locked out of your safe or forgotten the combination? Our technicians open safe boxes carefully, preserving the safe wherever possible.",
    features: [
      "Experience with a wide range of safe brands and models",
      "Careful, non-destructive opening methods where possible",
      "Confidential and secure service",
      "Available for homes and businesses",
    ],
    steps: [
      "Call or WhatsApp us with your safe brand and model, if known",
      "A specialist is dispatched to your location",
      "Your safe is opened using the appropriate method",
      "Optional combination reset or lock replacement",
    ],
    faqs: [
      { q: "Will opening my safe damage it?", a: "We always attempt non-destructive methods first to preserve your safe." },
      { q: "Do you work on all safe brands?", a: "We have experience with most residential and commercial safe brands." },
      { q: "Can you reset the combination afterward?", a: "Yes, we can reset combinations or replace the lock mechanism if needed." },
      { q: "Is this service confidential?", a: "Yes, all safe unlocking jobs are handled discreetly and securely." },
    ],
  },
  {
    slug: "car-key-replacement",
    title: "Car Key Replacement",
    description: "Quick and reliable replacement keys for lost, broken, or damaged car keys.",
    intro:
      "Lost, broken, or damaged your car key? We cut and program replacement keys for most vehicle makes and models, on-site across Dubai.",
    features: [
      "Replacement for lost, broken, or damaged keys",
      "Standard, remote, and transponder keys covered",
      "On-site cutting and programming",
      "Wide range of vehicle brands supported",
    ],
    steps: [
      "Call or WhatsApp us with your vehicle make, model, and location",
      "We confirm the correct key type for your vehicle",
      "A technician arrives with the blank key and equipment",
      "Key is cut, programmed, and tested on the spot",
    ],
    faqs: [
      { q: "Can you make a car key without the original?", a: "Yes, in most cases we can cut and program a new key using your vehicle's details." },
      { q: "Do you cover remote and transponder keys?", a: "Yes, we handle standard, remote, and transponder key replacement." },
      { q: "How long does a replacement take?", a: "Most car key replacements are completed on-site within an hour." },
      { q: "Do you come to my location?", a: "Yes, our technicians come to your home, office, or roadside location." },
    ],
  },
  {
    slug: "car-key-programming",
    title: "Car Key Programming",
    description: "Quick and secure car key programming for all vehicle types, including remote and transponder keys.",
    intro:
      "Need a spare key programmed or your vehicle's key system reset? We program remote and transponder keys on-site using professional diagnostic equipment.",
    features: [
      "Remote and transponder key programming",
      "Support for a wide range of vehicle brands",
      "On-site programming using professional equipment",
      "Spare key programming for existing keys",
    ],
    steps: [
      "Call or WhatsApp us with your vehicle make and model",
      "Technician arrives with the required programming equipment",
      "Key is programmed and synced to your vehicle",
      "Function tested before the technician leaves",
    ],
    faqs: [
      { q: "Can you program a spare key I already have?", a: "Yes, if the key is compatible with your vehicle, we can program it on-site." },
      { q: "Do you support luxury and European vehicles?", a: "Yes, our equipment covers most vehicle brands including European and Japanese makes." },
      { q: "How long does programming take?", a: "Most key programming jobs are completed within 30-60 minutes." },
      { q: "Is on-site programming as reliable as a dealership?", a: "Yes, we use professional-grade diagnostic tools comparable to dealership equipment." },
    ],
  },
  {
    slug: "house-door-unlocking",
    title: "House Door Unlocking",
    description: "Trusted unlocking services for residential doors.",
    intro:
      "Locked out of your house? Our locksmiths open residential doors quickly and carefully, minimizing any damage to your door and lock.",
    features: [
      "Safe entry for all common residential lock types",
      "Minimal to no damage to doors and frames",
      "Fast response across Dubai neighborhoods",
      "Available for emergencies, day or night",
    ],
    steps: [
      "Call or WhatsApp us with your address and lock type",
      "A locksmith is dispatched to your home",
      "Your door is unlocked safely",
      "Optional lock check or replacement on request",
    ],
    faqs: [
      { q: "How fast can you reach my house?", a: "Typically within 30-45 minutes anywhere in Dubai." },
      { q: "Will you need proof I live there?", a: "Yes, for security purposes we may request ID or proof of residence." },
      { q: "Can you fix the lock if it's damaged?", a: "Yes, we offer on-the-spot lock repair or replacement if needed." },
      { q: "Are you available at night?", a: "Yes, we provide 24/7 emergency house unlocking services." },
    ],
  },
  {
    slug: "padlock-key-cutting-replacement",
    title: "Padlock Key Cutting & Replacement",
    description: "Precise cutting and replacement for padlock keys.",
    intro:
      "Lost your padlock key or need a spare? We cut precise replacement keys for a wide range of padlock brands and sizes, or replace the padlock entirely if needed.",
    features: [
      "Precision key cutting for most padlock brands",
      "Padlock replacement available if the lock is damaged",
      "Same-day service across Dubai",
      "Suitable for storage units, gates, and lockers",
    ],
    steps: [
      "Bring your padlock or share its brand and details",
      "We cut a precise replacement key or source a matching padlock",
      "Key or padlock is tested on-site",
      "You're ready to go",
    ],
    faqs: [
      { q: "Can you cut a key without the original?", a: "In many cases, yes, depending on the padlock brand and lock mechanism." },
      { q: "Do you replace the whole padlock if needed?", a: "Yes, we can supply and fit a replacement padlock if the original can't be keyed." },
      { q: "How long does key cutting take?", a: "Most padlock keys are cut within minutes." },
      { q: "Do you offer mobile service for this?", a: "Yes, we can come to your location or you can bring the padlock to us." },
    ],
  },
  {
    slug: "duplicate-key-cutting",
    title: "Duplicate Key Cutting",
    description: "Quick duplication of spare keys for home, office, or car.",
    intro:
      "Need a spare key for your home, office, or car? We cut precise duplicate keys quickly, so you always have a backup on hand.",
    features: [
      "Duplicate keys for home, office, and car locks",
      "Precision cutting for a clean fit",
      "Multiple copies available in one visit",
      "Fast turnaround, often while you wait",
    ],
    steps: [
      "Bring or share details of the key you need duplicated",
      "We select the correct key blank",
      "Key is cut and tested for a precise fit",
      "Extra copies made on request",
    ],
    faqs: [
      { q: "How long does it take to cut a duplicate key?", a: "Most duplicate keys are ready within minutes." },
      { q: "Can you duplicate car keys too?", a: "Basic car keys can be duplicated; remote and transponder keys may need programming as well." },
      { q: "Do you offer a mobile duplication service?", a: "Yes, our technicians can bring key-cutting equipment to your location." },
      { q: "Can I get more than one copy at a time?", a: "Yes, we can cut multiple duplicates in a single visit." },
    ],
  },
  {
    slug: "maintaining-repairing-locks",
    title: "Maintaining & Repairing Locks",
    description: "Regular maintenance and repair services for locks and key systems.",
    intro:
      "Sticky, stiff, or worn locks can fail when you least expect it. We service and repair locks and key systems to keep them working smoothly and reliably.",
    features: [
      "Lubrication and adjustment of stiff or sticky locks",
      "Repair of worn or damaged lock mechanisms",
      "Inspection of key systems for early warning signs",
      "Scheduled maintenance plans available",
    ],
    steps: [
      "Call or WhatsApp us to describe the issue with your lock",
      "A technician inspects the lock and key system",
      "Necessary repairs or adjustments are carried out on-site",
      "Lock tested to confirm smooth operation",
    ],
    faqs: [
      { q: "What are signs my lock needs maintenance?", a: "Stiffness, difficulty turning the key, or a loose handle are common warning signs." },
      { q: "Can you repair a lock instead of replacing it?", a: "Yes, many locks can be repaired and restored to smooth working condition." },
      { q: "Do you offer maintenance for commercial properties?", a: "Yes, we offer maintenance visits for both residential and commercial locks." },
      { q: "How often should locks be serviced?", a: "We recommend a check-up at least once a year, or sooner in high-use locations." },
    ],
  },
];

export default services;
