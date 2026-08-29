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
  serviceHighlights?: { title: string; intro?: string; items: { icon: string; title: string; description: string }[] };
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
};

const services: Service[] = [
  {
    slug: "car-door-unlocking",
    title: "Car Door Unlocking",
    description: "Fast assistance for locked car doors, anywhere in Dubai.",
    intro:
      "Locked yourself out of your car? Our technicians reach you fast and open your car door safely, without damaging the lock or paintwork — for all vehicle makes and models.",
    features: [
      "Non-destructive entry techniques that protect your vehicle",
      "All vehicle makes and models covered",
      "Fast response across Dubai, 24/7",
      "Transparent pricing with no hidden charges",
    ],
    steps: [
      "Call or WhatsApp us with your location and vehicle details",
      "A technician is dispatched to your location immediately",
      "Your car door is unlocked safely, without damage",
      "You're back in your car in minutes",
    ],
    faqs: [
      { q: "Will unlocking my car damage the lock or door?", a: "No — we use professional, non-destructive tools designed to open car doors without damaging the lock or paintwork." },
      { q: "How fast can you reach me?", a: "Our technicians typically arrive within 30-45 minutes anywhere in Dubai." },
      { q: "Do you unlock all car brands?", a: "Yes, our technicians are trained on all vehicle makes and models, including luxury cars." },
      { q: "Are you available 24/7?", a: "Yes, we offer emergency car door unlocking around the clock, including holidays." },
    ],
  },
  {
    slug: "apartment-door-unlocking",
    title: "Apartment Door Unlocking",
    description: "Quick and reliable unlocking for apartment doors.",
    intro:
      "Locked out of your apartment? Our locksmiths open residential apartment doors quickly and cleanly, respecting your door and lock hardware.",
    features: [
      "Safe entry methods for all common lock types",
      "Minimal to no damage to your door or frame",
      "Fast response across Dubai buildings and communities",
      "Available for emergency and scheduled visits",
    ],
    steps: [
      "Call or WhatsApp us with your building and unit details",
      "A locksmith is dispatched to your address",
      "Your apartment door is unlocked safely",
      "Optional on-the-spot lock check or replacement",
    ],
    faqs: [
      { q: "Can you open any type of apartment door lock?", a: "Yes, we handle most common residential lock types, including deadbolts and smart locks." },
      { q: "Do I need to prove I live there?", a: "Yes, for your security we may ask for ID or proof of residence before unlocking." },
      { q: "How quickly can you arrive?", a: "Typically within 30-45 minutes anywhere in Dubai." },
      { q: "Can you replace the lock after unlocking it?", a: "Yes, we offer on-the-spot lock replacement if needed." },
    ],
  },
  {
    slug: "lock-replacement",
    title: "Lock Replacement",
    description: "Safe and secure lock replacement services for improved protection.",
    intro:
      "Whether your lock is worn out, damaged, or you simply want better security, we supply and fit quality replacement locks for homes, offices, and vehicles.",
    features: [
      "Wide range of lock brands and types in stock",
      "Clean installation with minimal disruption",
      "Upgrades available for improved security",
      "Same-day service across Dubai",
    ],
    steps: [
      "Call or WhatsApp us with your lock type and location",
      "We recommend the right replacement lock for your needs",
      "Technician fits the new lock on-site",
      "Keys handed over and lock tested",
    ],
    faqs: [
      { q: "How long does a lock replacement take?", a: "Most lock replacements are completed within 30-45 minutes." },
      { q: "Can you upgrade my lock to a more secure type?", a: "Yes, we offer higher-security lock options for homes and businesses." },
      { q: "Do you replace locks for offices and shops too?", a: "Yes, we handle residential, commercial, and vehicle locks." },
      { q: "Is the old lock removed and disposed of?", a: "Yes, we remove and dispose of the old lock as part of the service." },
    ],
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
