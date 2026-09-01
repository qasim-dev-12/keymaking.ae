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
    title: "Safe Box Unlocking in Dubai",
    description: "Careful and confidential safe unlocking services across Dubai.",
    intro:
      "Locked out of your safe or forgotten the combination? Our professional locksmiths provide careful and confidential safe unlocking services across Dubai, helping you regain access while protecting the safe wherever possible.",
    heroImage: "/images/keymaking/safe-box-unlocking-hero-dubai.jpeg",
    featuresTitle: "What's Included",
    featuresIntro: "Our safe unlocking service is designed to help you regain access carefully, professionally and with your privacy in mind.",
    featuresImage: "/images/keymaking/professional-safe-unlocking-dubai.jpeg",
    features: [
      "Experience With a Wide Range of Safe Brands & Models — Assistance with many common home, office and commercial safe types.",
      "Careful, Non-Destructive Opening Where Possible — We prioritise professional methods designed to minimise damage to the safe.",
      "Confidential & Secure Service — Your property, contents and personal information are handled with discretion and professionalism.",
      "Available for Homes & Businesses — Safe unlocking assistance for residential properties, offices, shops and other suitable locations across Dubai.",
    ],
    stepsTitle: "How It Works",
    stepsIntro: "Our safe unlocking process is designed to keep the service professional, discreet and as safe as possible for your property.",
    stepsImage: "/images/keymaking/safe-locksmith-service-process.jpeg",
    steps: [
      "Call or WhatsApp Us — Tell us your safe brand, model and location, along with the access issue you're experiencing.",
      "A Specialist Is Dispatched — We arrange for a suitable locksmith specialist to attend your location based on the safe and service required.",
      "Safe Is Assessed & Opened Professionally — The technician assesses the safe and uses an appropriate professional method to restore access while minimising unnecessary damage.",
      "Optional Combination Reset or Lock Replacement — If required, we can discuss suitable options for resetting the safe's access system or replacing faulty lock components.",
    ],
    otherServicesTitle: "Our Other Locksmith Services",
    otherServicesSubheading: "Professional locksmith solutions for your home, vehicle and security needs.",
    otherServicesImage: "/images/keymaking/complete-locksmith-services-dubai.jpeg",
    relatedAutomotive: {
      title: "Safe & Security Solutions in Dubai",
      subheading: "Professional assistance for residential, office and commercial security needs.",
      image: "/images/keymaking/safe-security-solutions-dubai.jpeg",
      items: [
        { title: "Home Safe Unlocking", description: "Professional assistance when you're unable to access your residential safe." },
        { title: "Office Safe Unlocking", description: "Discreet safe access assistance for offices and businesses." },
        { title: "Digital Safe Assistance", description: "Help with compatible electronic and keypad-controlled safes." },
        { title: "Combination Lock Assistance", description: "Professional assistance when you have forgotten or cannot use your safe combination." },
        { title: "Safe Lock Replacement", description: "Replacement options for faulty or damaged safe locking components." },
        { title: "Safe Access & Security Assessment", description: "Professional assessment of suitable options after access has been restored." },
      ],
    },
    emergencyCTA: {
      label: "Emergency Locksmith Service",
      title: "Locked Out of Your Safe? Get Immediate Assistance!",
      description:
        "Don't worry if you can't access your safe. Our professional locksmiths provide careful and confidential safe unlocking assistance across Dubai, helping you regain access while protecting your property wherever possible.",
      supportingText:
        "Share your safe brand, model and location with our team. We'll help you understand the next steps and arrange professional assistance based on availability.",
      image: "/images/keymaking/emergency-safe-unlocking-dubai.jpeg",
    },
    faqs: [
      { q: "Will opening my safe damage it?", a: "We prioritise careful, non-destructive methods wherever possible. The outcome depends on the safe's condition, locking system and the nature of the access problem." },
      { q: "Do you work on all safe brands?", a: "We can assist with many common safe brands and models. Share the brand and model with us before the visit so our team can better understand the safe and service required." },
      { q: "Can you help if I have forgotten the combination?", a: "Yes. We provide professional assistance for suitable safes when the combination has been forgotten or access is no longer possible." },
      { q: "Is this service confidential?", a: "Yes. We understand that safes may contain sensitive documents, valuables or business assets, so our service is handled with discretion and professionalism." },
      { q: "Can you replace the safe lock after opening it?", a: "Yes. If the existing locking mechanism is faulty or you want to restore the safe to reliable working condition, we can assess suitable replacement options." },
      { q: "Do you provide safe unlocking for businesses?", a: "Yes. We provide safe-related locksmith assistance for suitable offices, shops, businesses and commercial properties across Dubai." },
    ],
    metaTitle: "Safe Box Unlocking Dubai | Professional Safe Locksmith",
    metaDescription: "Locked out of your safe in Dubai? Get professional and confidential safe box unlocking assistance for homes, offices and businesses. Call or WhatsApp our locksmith team.",
  },
  {
    slug: "car-key-replacement",
    title: "Car Key Replacement in Dubai",
    description: "Fast replacement for lost, broken, or damaged car keys.",
    intro:
      "Lost, broken, or damaged your car key? Our professional automotive locksmiths provide fast car key replacement across Dubai, including standard keys, remote keys and transponder keys for a wide range of vehicle makes and models.",
    heroImage: "/images/keymaking/car-key-replacement-hero-dubai.jpeg",
    featuresTitle: "What's Included",
    featuresIntro: "Get a replacement car key that is properly cut, programmed and tested for your vehicle.",
    featuresImage: "/images/keymaking/professional-car-key-replacement-dubai.jpeg",
    features: [
      "Replacement for Lost, Broken or Damaged Keys — Get a replacement when your original car key is lost, damaged, worn or no longer working.",
      "Standard, Remote & Transponder Keys — We provide suitable replacement options for different types of automotive keys.",
      "On-Site Key Cutting & Programming — Where supported, our mobile locksmith service can cut and program replacement keys at your location.",
      "Wide Range of Vehicle Brands Supported — Assistance is available for many popular vehicle makes and models across Dubai.",
    ],
    stepsTitle: "How It Works",
    stepsIntro: "Our simple process makes getting a replacement car key quick and convenient.",
    stepsImage: "/images/keymaking/mobile-car-key-programming-dubai.jpeg",
    steps: [
      "Call or WhatsApp Us — Share your vehicle make, model, year and location with our locksmith team.",
      "We Confirm the Correct Key — We identify the appropriate key type and replacement requirements for your vehicle.",
      "Technician Arrives With the Right Equipment — A professional automotive locksmith comes to your location with the necessary key cutting and programming equipment, where applicable.",
      "Key Is Cut, Programmed & Tested — The replacement key is prepared and tested to ensure it works correctly with your vehicle.",
    ],
    otherServicesTitle: "Our Other Locksmith Services",
    otherServicesSubheading: "Professional automotive, residential and security locksmith solutions across Dubai.",
    otherServicesImage: "/images/keymaking/automotive-locksmith-services-dubai.jpeg",
    relatedAutomotive: {
      title: "Car Key Types We Replace in Dubai",
      subheading: "Replacement solutions for a wide range of vehicle key types and systems.",
      image: "/images/keymaking/car-key-types-replacement-dubai.jpeg",
      items: [
        { title: "Standard Car Keys", description: "Replacement for traditional mechanical vehicle keys." },
        { title: "Remote Car Keys", description: "Replacement options for compatible remote locking keys." },
        { title: "Transponder Keys", description: "Replacement and programming assistance for compatible transponder-equipped vehicles." },
        { title: "Smart Key Fobs", description: "Solutions for suitable keyless-entry and smart key systems." },
        { title: "Flip Keys", description: "Replacement options for compatible folding and flip-style vehicle keys." },
        { title: "Spare Car Keys", description: "Create an additional key before your original is lost or damaged." },
      ],
    },
    emergencyCTA: {
      label: "Emergency Automotive Locksmith",
      title: "Lost Your Car Key? Get Immediate Assistance!",
      description:
        "Don't let a lost, broken or damaged car key stop your journey. Our professional automotive locksmiths provide car key replacement assistance across Dubai, with suitable cutting and programming services for supported vehicles.",
      supportingText:
        "Send us your vehicle make, model, year and location. Our team can advise you on the replacement options available for your vehicle.",
      image: "/images/keymaking/emergency-car-key-replacement-dubai.jpeg",
    },
    faqs: [
      { q: "Can you make a car key without the original?", a: "In many cases, a replacement key can be prepared using your vehicle's relevant information and compatible equipment. Requirements vary depending on the vehicle make, model and year." },
      { q: "Do you replace remote and transponder keys?", a: "Yes. We provide replacement and programming assistance for compatible remote, transponder and other automotive key types." },
      { q: "How long does car key replacement take?", a: "The time required depends on the vehicle, key type and whether programming is required. Many standard replacements can be completed during a single visit." },
      { q: "Do you come to my location?", a: "Yes. Our mobile automotive locksmith service can come to your location across Dubai, subject to service availability." },
      { q: "Can you make a spare car key?", a: "Yes. If you want a backup key before losing your existing one, we can provide suitable spare-key solutions for compatible vehicles." },
      { q: "Can you replace a damaged car key?", a: "Yes. We can assess damaged, worn or malfunctioning keys and advise whether repair or replacement is the most suitable option." },
    ],
    metaTitle: "Car Key Replacement Dubai | Lost & Damaged Car Keys",
    metaDescription: "Need a car key replacement in Dubai? Get professional replacement for lost, broken, remote and transponder keys, with on-site cutting and programming for supported vehicles.",
  },
  {
    slug: "car-key-programming",
    title: "Car Key Programming in Dubai",
    description: "Professional programming for compatible remote and transponder car keys.",
    intro:
      "Need a spare key programmed or your vehicle's key system restored? Our professional automotive locksmiths provide car key programming for compatible remote and transponder keys using professional diagnostic and programming equipment across Dubai.",
    heroImage: "/images/keymaking/car-key-programming-hero-dubai.jpeg",
    featuresTitle: "What's Included",
    featuresIntro: "Professional key programming solutions for compatible vehicle keys, remotes and transponder systems.",
    featuresImage: "/images/keymaking/professional-car-key-programming-dubai.jpeg",
    features: [
      "Remote & Transponder Key Programming — Programming assistance for compatible remote keys, transponder keys and vehicle key systems.",
      "Support for a Wide Range of Vehicle Brands — We work with many popular vehicle makes and models, subject to compatibility.",
      "On-Site Programming With Professional Equipment — Our mobile locksmith service can provide programming at your location where the vehicle and key system support it.",
      "Spare Key Programming — Program a compatible spare key so you have a backup ready when you need it.",
    ],
    stepsTitle: "How It Works",
    stepsIntro: "Our straightforward process makes car key programming convenient and hassle-free.",
    stepsImage: "/images/keymaking/mobile-car-key-programming-service.jpeg",
    steps: [
      "Call or WhatsApp Us — Share your vehicle make, model, year and location with our locksmith team.",
      "Technician Arrives With the Required Equipment — A professional automotive locksmith arrives with suitable diagnostic and programming equipment for your vehicle.",
      "Key Is Programmed & Synced to Your Vehicle — The compatible key or remote is programmed according to the vehicle's requirements.",
      "Function Tested Before the Technician Leaves — We test the key, remote functions and vehicle response to make sure everything is working correctly.",
    ],
    otherServicesTitle: "Our Other Locksmith Services",
    otherServicesSubheading: "Professional automotive, residential and security locksmith solutions across Dubai.",
    otherServicesImage: "/images/keymaking/automotive-locksmith-services-dubai.jpeg",
    relatedAutomotive: {
      title: "Car Key Programming Services in Dubai",
      subheading: "Programming solutions for compatible vehicle key and remote systems.",
      image: "/images/keymaking/car-key-programming-services-dubai.jpeg",
      items: [
        { title: "Remote Key Programming", description: "Program compatible remote keys for vehicle locking and unlocking functions." },
        { title: "Transponder Key Programming", description: "Programming assistance for compatible immobilizer-equipped vehicles." },
        { title: "Smart Key Programming", description: "Programming support for compatible keyless-entry and smart key systems." },
        { title: "Spare Key Programming", description: "Add a compatible backup key to your vehicle's existing key system." },
        { title: "Key Fob Programming", description: "Programming assistance for compatible vehicle key fobs and remotes." },
        { title: "Key System Diagnostics", description: "Professional diagnostic assessment when a compatible key or remote isn't functioning correctly." },
      ],
    },
    emergencyCTA: {
      label: "Emergency Automotive Locksmith",
      title: "Need Your Car Key Programmed? Get Immediate Assistance!",
      description:
        "Having trouble with your car key or remote? Our professional automotive locksmiths provide car key programming assistance across Dubai for compatible vehicles, helping you restore reliable access to your vehicle.",
      supportingText:
        "Send us your vehicle make, model, year and location. Our team can advise you on key programming and replacement options available for your vehicle.",
      image: "/images/keymaking/emergency-car-key-programming-dubai.jpeg",
    },
    faqs: [
      { q: "Can you program a spare key I already have?", a: "Yes, where the key is compatible with your vehicle, we can provide programming assistance using suitable professional equipment." },
      { q: "Do you support luxury and European vehicles?", a: "We provide programming assistance for many vehicle makes and models, including compatible luxury and European vehicles. Availability depends on the specific vehicle and key system." },
      { q: "How long does car key programming take?", a: "The time required depends on the vehicle, key type and programming requirements. Many compatible programming services can be completed during a single visit." },
      { q: "Is on-site programming available or do I need to visit a dealership?", a: "For supported vehicles, our mobile locksmith service can perform programming at your location, eliminating the need for a dealership visit in many situations." },
      { q: "Can you program a replacement key after losing the original?", a: "Depending on the vehicle, we may be able to provide both the replacement key and programming service. Vehicle details are required to confirm compatibility." },
      { q: "Why is my car key or remote not working?", a: "A key or remote can stop working for several reasons, including a depleted battery, damaged electronics, synchronisation issues or vehicle-system faults. We can assess the issue and advise on the appropriate solution." },
    ],
    metaTitle: "Car Key Programming Dubai | Remote & Transponder Key Programming",
    metaDescription: "Need car key programming in Dubai? Get professional programming for compatible remote, transponder, smart and spare car keys using professional automotive equipment.",
  },
  {
    slug: "house-door-unlocking",
    title: "House Door Unlocking in Dubai",
    description: "Fast and careful residential door unlocking across Dubai.",
    intro:
      "Locked out of your house? Our professional locksmiths provide fast and careful residential door unlocking across Dubai, helping you regain access while minimising the risk of damage to your door, lock or frame.",
    heroImage: "/images/keymaking/house-door-unlocking-hero-dubai.jpeg",
    featuresTitle: "What's Included",
    featuresIntro: "Our house door unlocking service is designed to help you regain access quickly while protecting your property wherever possible.",
    featuresImage: "/images/keymaking/professional-house-door-unlocking-dubai.jpeg",
    features: [
      "Safe Entry for Common Residential Lock Types — Professional unlocking assistance for many standard residential door locks and entry systems.",
      "Minimal to No Damage to Doors & Frames — We use appropriate non-destructive techniques wherever possible to protect your door and surrounding frame.",
      "Fast Response Across Dubai Neighborhoods — Our mobile locksmith team provides residential lockout assistance across Dubai.",
      "Emergency Assistance Day or Night — Get professional help when you're locked out of your home, including urgent lockout situations.",
    ],
    stepsTitle: "How It Works",
    stepsIntro: "Our simple process helps you regain access to your home safely and with minimal delay.",
    stepsImage: "/images/keymaking/mobile-house-locksmith-service-dubai.jpeg",
    steps: [
      "Call or WhatsApp Us — Share your address, location and lock type with our locksmith team.",
      "A Locksmith Is Dispatched — A professional residential locksmith is assigned and sent to your home as quickly as possible.",
      "Your Door Is Unlocked Safely — Our technician assesses the lock and uses an appropriate professional unlocking method.",
      "Optional Lock Check or Replacement — If requested, we can inspect the lock and advise on repair or replacement options after unlocking your door.",
    ],
    otherServicesTitle: "Our Other Locksmith Services",
    otherServicesSubheading: "Professional automotive, residential and security locksmith solutions across Dubai.",
    otherServicesImage: "/images/keymaking/complete-locksmith-services-dubai.jpeg",
    relatedAutomotive: {
      title: "Residential Locksmith Services in Dubai",
      subheading: "Reliable locksmith assistance for homes, villas and residential properties.",
      image: "/images/keymaking/residential-locksmith-services-dubai.jpeg",
      items: [
        { title: "House Door Unlocking", description: "Fast assistance when you are locked outside your home." },
        { title: "Lock Replacement", description: "Replace damaged, worn or outdated residential locks." },
        { title: "Lock Repair", description: "Professional assistance for faulty or difficult-to-operate locks." },
        { title: "Deadbolt Replacement", description: "Replacement options for suitable residential deadbolt systems." },
        { title: "Duplicate Key Cutting", description: "Create additional keys for compatible residential locks." },
        { title: "Padlock Key Replacement", description: "Replacement and key cutting solutions for suitable padlocks." },
      ],
    },
    emergencyCTA: {
      label: "Emergency Residential Locksmith",
      title: "Locked Out? Get Immediate Assistance!",
      description:
        "Don't worry if you're locked out of your home. Our professional locksmiths provide fast and reliable house door unlocking services across Dubai, helping you regain access safely and efficiently.",
      supportingText:
        "Share your location and basic lock details with our team. We'll help you understand the next steps and arrange professional assistance based on availability.",
      image: "/images/keymaking/emergency-house-lockout-dubai.jpeg",
    },
    faqs: [
      { q: "How fast can you reach my house?", a: "Response times depend on your location, traffic and technician availability. We aim to dispatch assistance as quickly as possible across Dubai." },
      { q: "Will you need proof that I live there?", a: "For security reasons, our locksmith may request reasonable proof that you are authorised to access the property before carrying out the service." },
      { q: "Can you unlock the door if the lock is damaged?", a: "Yes. We can assess the condition of the lock and determine the most suitable way to restore access." },
      { q: "Are you available at night?", a: "Emergency residential locksmith assistance is available around the clock for urgent lockout situations in Dubai." },
      { q: "Can you replace the lock after unlocking my door?", a: "Yes. If the lock is damaged, faulty or you want to upgrade your home security, we can provide suitable replacement options." },
      { q: "Can you unlock all types of house doors?", a: "We assist with many common residential door and lock types. The appropriate service depends on the specific door and locking system." },
    ],
    metaTitle: "House Door Unlocking Dubai | 24/7 Residential Locksmith",
    metaDescription: "Locked out of your house in Dubai? Get fast and professional house door unlocking with safe, non-destructive methods wherever possible. Call or WhatsApp our locksmith team.",
  },
  {
    slug: "padlock-key-cutting-replacement",
    title: "Padlock Key Cutting & Replacement in Dubai",
    description: "Precise padlock key cutting and replacement across Dubai.",
    intro:
      "Lost your padlock key or need a spare? We provide precise padlock key cutting and replacement services for a wide range of padlock types and brands across Dubai. We can also replace damaged or faulty padlocks where required.",
    heroImage: "/images/keymaking/padlock-key-cutting-replacement-hero-dubai.jpeg",
    featuresTitle: "What's Included",
    featuresIntro: "Get reliable padlock key cutting and replacement solutions for everyday residential, commercial and storage applications.",
    featuresImage: "/images/keymaking/professional-padlock-key-cutting-dubai.jpeg",
    features: [
      "Precision Key Cutting for Common Padlock Types — Accurate duplicate and replacement key cutting for many compatible padlock types.",
      "Padlock Replacement Available — If your padlock is damaged, worn or no longer reliable, we can help with a suitable replacement.",
      "Same-Day Service Across Dubai — Convenient locksmith assistance available across Dubai, subject to service availability.",
      "Suitable for Storage Units, Gates & Lockers — Solutions for compatible padlocks used on gates, storage units, lockers, cabinets and other applications.",
    ],
    stepsTitle: "How It Works",
    stepsIntro: "Our simple process makes padlock key cutting and replacement quick and convenient.",
    stepsImage: "/images/keymaking/mobile-padlock-key-service-dubai.jpeg",
    steps: [
      "Bring Your Padlock or Share Its Details — Provide the padlock, existing key or relevant brand and model information where available.",
      "We Cut a Precise Replacement Key — Our locksmith identifies the suitable key type and prepares a compatible replacement.",
      "Key or Padlock Is Tested On-Site — We test the newly cut key with the padlock to confirm smooth operation.",
      "You're Ready to Go — Once the key or replacement padlock works correctly, your service is complete.",
    ],
    otherServicesTitle: "Our Other Locksmith Services",
    otherServicesSubheading: "Professional automotive, residential and security locksmith solutions across Dubai.",
    otherServicesImage: "/images/keymaking/complete-locksmith-services-dubai.jpeg",
    relatedAutomotive: {
      title: "Padlock Solutions We Offer in Dubai",
      subheading: "Key cutting and replacement solutions for everyday padlock applications.",
      image: "/images/keymaking/padlock-security-solutions-dubai.jpeg",
      items: [
        { title: "Padlock Key Duplication", description: "Create spare keys for compatible padlocks." },
        { title: "Lost Padlock Key Replacement", description: "Get a suitable replacement when your original key is lost." },
        { title: "Damaged Key Replacement", description: "Replace worn, bent or damaged padlock keys." },
        { title: "Gate Padlock Solutions", description: "Key cutting and padlock replacement for suitable gates and entrances." },
        { title: "Storage Unit Padlocks", description: "Replacement keys and padlocks for compatible storage applications." },
        { title: "Locker & Cabinet Padlocks", description: "Convenient key replacement for suitable lockers, cabinets and equipment." },
      ],
    },
    emergencyCTA: {
      label: "Locksmith Service",
      title: "Lost Your Padlock Key? Get Immediate Assistance!",
      description:
        "Don't let a lost or damaged padlock key leave your gate, storage unit or locker inaccessible. Our professional locksmiths provide padlock key cutting and replacement services across Dubai.",
      supportingText:
        "Share your padlock details or location with our team. We'll advise you on the available key cutting or replacement options.",
      image: "/images/keymaking/emergency-padlock-key-replacement-dubai.jpeg",
    },
    faqs: [
      { q: "Can you cut a key without the original?", a: "In many cases, yes, depending on the padlock brand, model and available key information. Contact us with the padlock details so we can advise on the available options." },
      { q: "Do you replace the whole padlock if needed?", a: "Yes. If the padlock is damaged, worn or no longer suitable, we can help identify a compatible replacement." },
      { q: "How long does padlock key cutting take?", a: "Standard duplicate or replacement keys can often be prepared quickly, depending on the padlock and key type." },
      { q: "Do you offer mobile service?", a: "Yes. Mobile locksmith assistance is available across Dubai for suitable padlock key cutting and replacement requirements." },
      { q: "Can you make multiple duplicate padlock keys?", a: "Yes. We can prepare multiple compatible duplicate keys when the padlock and key type allow it." },
      { q: "Can you replace keys for gate and storage padlocks?", a: "Yes. We can assist with suitable padlocks used for gates, storage units, lockers and other compatible applications." },
    ],
    metaTitle: "Padlock Key Cutting & Replacement Dubai | Locksmith Service",
    metaDescription: "Need a padlock key cut or replaced in Dubai? Get professional key cutting, duplicate keys and padlock replacement for gates, lockers, storage units and more.",
  },
  {
    slug: "duplicate-key-cutting",
    title: "Duplicate Key Cutting in Dubai",
    description: "Precise duplicate key cutting for home, office and car.",
    intro:
      "Need a spare key for your home, office or car? We provide precise duplicate key cutting across Dubai, helping you keep reliable backup keys ready whenever you need them.",
    heroImage: "/images/keymaking/duplicate-key-cutting-hero-dubai.jpeg",
    featuresTitle: "What's Included",
    featuresIntro: "Get accurate duplicate keys made to keep convenient backups for your home, office, vehicle and other compatible locks.",
    featuresImage: "/images/keymaking/professional-duplicate-key-cutting-dubai.jpeg",
    features: [
      "Duplicate Keys for Home, Office & Car Locks — Key duplication for a range of compatible residential, commercial and automotive key types.",
      "Precision Cutting for a Clean Fit — Keys are cut carefully to match the original key and provide smooth operation where compatible.",
      "Multiple Copies Available in One Visit — Need several spare keys? Multiple duplicate copies can be prepared during the same service.",
      "Fast Turnaround While You Wait — Many standard keys can be duplicated quickly, depending on the key type and availability.",
    ],
    stepsTitle: "How It Works",
    stepsIntro: "Our simple key duplication process makes it easy to get reliable spare keys when you need them.",
    stepsImage: "/images/keymaking/mobile-duplicate-key-cutting-service.jpeg",
    steps: [
      "Bring or Share Details of the Key — Bring the original key to us or share the relevant key details so we can determine the appropriate duplication option.",
      "We Select the Correct Key Blank — Our locksmith identifies a suitable compatible key blank for the lock system.",
      "Key Is Cut & Tested for a Precise Fit — The duplicate key is precisely cut and checked to ensure it operates correctly with the compatible lock.",
      "Extra Copies Made on Request — Need more than one? We can prepare additional duplicate keys where suitable.",
    ],
    otherServicesTitle: "Our Other Locksmith Services",
    otherServicesSubheading: "Professional automotive, residential and security locksmith solutions across Dubai.",
    otherServicesImage: "/images/keymaking/complete-locksmith-services-dubai.jpeg",
    relatedAutomotive: {
      title: "Types of Keys We Duplicate in Dubai",
      subheading: "Reliable duplicate key solutions for everyday residential, commercial and selected automotive applications.",
      image: "/images/keymaking/key-types-duplicate-cutting-dubai.jpeg",
      items: [
        { title: "House Keys", description: "Duplicate keys for compatible residential door locks." },
        { title: "Apartment Keys", description: "Spare keys for compatible apartment and residential locking systems." },
        { title: "Office Keys", description: "Duplicate keys for suitable office and commercial doors." },
        { title: "Padlock Keys", description: "Additional keys for compatible padlocks used on gates, lockers and storage units." },
        { title: "Cabinet & Locker Keys", description: "Replacement and duplicate keys for suitable cabinets, lockers and similar locks." },
        { title: "Selected Car Keys", description: "Duplicate automotive keys for compatible vehicle key systems." },
      ],
    },
    emergencyCTA: {
      label: "Key Cutting Service",
      title: "Need a Spare Key? Get It Cut Today!",
      description:
        "Don't wait until you lose your only key. Get a reliable duplicate key made for your home, office, padlock or compatible vehicle and keep a backup ready when you need it.",
      supportingText:
        "Share your key type or location with our team and we'll advise you on the available duplicate key cutting options.",
      image: "/images/keymaking/spare-key-cutting-dubai.jpeg",
    },
    faqs: [
      { q: "How long does it take to cut a duplicate key?", a: "Many standard keys can be duplicated within minutes. The exact time depends on the key type and whether any additional work is required." },
      { q: "Can you duplicate car keys too?", a: "Yes, we can assist with selected compatible automotive keys. Some vehicle keys may also require programming in addition to cutting." },
      { q: "Do you offer mobile key duplication service?", a: "Mobile availability depends on the key type and service required. Contact us with your location and key details so we can advise you." },
      { q: "Can I get more than one duplicate key at a time?", a: "Yes. Multiple copies can be prepared where the key type and blank availability allow it." },
      { q: "Can you duplicate a worn or damaged key?", a: "It depends on the condition of the original. If the key is too worn or damaged to use as a reliable pattern, a replacement solution may be recommended." },
      { q: "Can you duplicate keys for offices and commercial properties?", a: "Yes. We provide duplicate key cutting for suitable office, commercial and residential locking systems." },
    ],
    metaTitle: "Duplicate Key Cutting Dubai | Home, Office & Car Keys",
    metaDescription: "Need duplicate keys in Dubai? Get precise key cutting for compatible home, apartment, office, padlock and selected car keys. Fast and professional locksmith service.",
  },
  {
    slug: "maintaining-repairing-locks",
    title: "Lock Repair & Maintenance in Dubai",
    description: "Professional lock repair and maintenance across Dubai.",
    intro:
      "Stiff, damaged or worn locks can leave your property less secure. Our professional locksmiths repair and maintain suitable lock systems to keep your doors operating smoothly, reliably and securely across Dubai.",
    heroImage: "/images/keymaking/lock-repair-maintenance-hero-dubai.jpeg",
    featuresTitle: "What's Included",
    featuresIntro: "Keep your locks operating smoothly and address minor issues before they become bigger security or access problems.",
    featuresImage: "/images/keymaking/professional-lock-repair-maintenance-dubai.jpeg",
    features: [
      "Lubrication & Adjustment of Stiff or Sticky Locks — Professional adjustment and maintenance to improve the operation of suitable locks.",
      "Repair of Worn or Damaged Lock Mechanisms — We assess faulty components and repair suitable lock mechanisms where possible.",
      "Inspection of Lock Systems for Early Warning Signs — Identify wear, alignment issues and other problems that may affect lock performance.",
      "Scheduled Maintenance Plans Available — Regular maintenance can help keep suitable locks operating reliably over time.",
    ],
    stepsTitle: "How It Works",
    stepsIntro: "Our straightforward process helps identify lock problems and restore smooth, reliable operation.",
    stepsImage: "/images/keymaking/mobile-lock-repair-service-dubai.jpeg",
    steps: [
      "Call or WhatsApp Us — Describe the issue you're experiencing with your lock and share your location.",
      "A Technician Inspects the Lock — Our locksmith assesses the lock, door alignment and key operation to identify the likely cause of the problem.",
      "Repairs or Adjustments Are Carried Out — Where possible, the technician repairs, adjusts or services the affected components on-site.",
      "Lock Tested for Smooth Operation — The lock and key are tested to ensure the door operates correctly before the service is completed.",
    ],
    otherServicesTitle: "Our Other Locksmith Services",
    otherServicesSubheading: "Professional automotive, residential and security locksmith solutions across Dubai.",
    otherServicesImage: "/images/keymaking/complete-locksmith-services-dubai.jpeg",
    relatedAutomotive: {
      title: "Lock Repair & Maintenance Solutions in Dubai",
      subheading: "Professional care for residential, commercial and compatible security locks.",
      image: "/images/keymaking/lock-repair-maintenance-solutions-dubai.jpeg",
      items: [
        { title: "Stiff Lock Repair", description: "Improve locks that are difficult to turn or operate." },
        { title: "Sticky Lock Maintenance", description: "Inspection and adjustment for locks that stick or feel inconsistent." },
        { title: "Lock Alignment Adjustment", description: "Help resolve suitable lock and door alignment issues affecting operation." },
        { title: "Worn Lock Mechanism Repair", description: "Assessment and repair of suitable worn internal components." },
        { title: "Door Lock Maintenance", description: "Routine inspection and servicing to help maintain reliable operation." },
        { title: "Security Lock Inspection", description: "Check suitable locks for visible signs of wear, damage or performance issues." },
      ],
    },
    emergencyCTA: {
      label: "Lock Repair & Maintenance Service",
      title: "Is Your Lock Stiff or Damaged? Get It Checked Today!",
      description:
        "Don't wait for a small lock problem to become a complete lockout. Our professional locksmiths provide lock inspection, repair and maintenance services across Dubai to help keep your doors operating smoothly and reliably.",
      supportingText:
        "Tell us what is wrong with your lock and share your location. Our team can advise you on the next steps and arrange a locksmith visit based on availability.",
      image: "/images/keymaking/lock-repair-maintenance-cta-dubai.jpeg",
    },
    faqs: [
      { q: "What are the signs my lock needs maintenance?", a: "Stiffness, difficulty turning the key, inconsistent operation, loose hardware or a door that no longer locks smoothly can all indicate that your lock may need attention." },
      { q: "Can you repair a lock instead of replacing it?", a: "In many cases, yes. We assess the lock and determine whether repair, adjustment or complete replacement is the most suitable option." },
      { q: "Do you offer maintenance for commercial properties?", a: "Yes. We can provide suitable lock inspection, repair and maintenance services for offices, shops and other commercial properties." },
      { q: "How often should locks be serviced?", a: "There is no single schedule for every lock. Usage, environment, lock type and condition all affect maintenance requirements. We can advise based on the condition of your locks." },
      { q: "Can you repair a lock that is difficult to turn?", a: "Yes. A stiff lock may be caused by wear, alignment issues or other mechanical problems. We can inspect the lock and recommend an appropriate solution." },
      { q: "When should I replace a lock instead of repairing it?", a: "If a lock is severely worn, damaged, unreliable or no longer provides the security you require, replacement may be more practical than repair." },
    ],
    metaTitle: "Lock Repair & Maintenance Dubai | Residential & Commercial Locksmith",
    metaDescription: "Need lock repair or maintenance in Dubai? Get professional assistance for stiff, sticky, worn or damaged locks, with inspection, adjustment and repair services.",
  },
];

export default services;
