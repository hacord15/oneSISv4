// Central copy source for the OneSIS marketing site.
// Keeping content here (instead of scattered inline in JSX) makes it easy
// to hand this file to a non-developer for copy edits later.

export const nav = {
  logo: "OneSIS",
  parentBadge: "SIS Group Co.",
  cta: "Contact Us",
  links: [
    {
      label: "HOME",
      href: "/",
    },
    {
      label: "COMPANY",
      href: "#",
      children: [
        { label: "About SIS Group", href: "#" },
        { label: "About OneSIS", href: "#" },
        { label: "Board", href: "#" },
        { label: "Management", href: "#" },
        { label: "Why OneSIS", href: "#" },
        { label: "News", href: "#" },
        { label: "Training", href: "#" },
      ],
    },
    {
      label: "SOLUTIONS",
      href: "#",
      children: [
        { label: "Integrated FM", href: "#" },
        { label: "Property Management", href: "#" },
        { label: "Specialized Services", href: "#" },
      ],
    },
    {
      label: "CAREER",
      href: "#",
      children: [
        { label: "Why Work With Us", href: "#" },
        { label: "Current Openings", href: "#" },
        { label: "Employee Benefits", href: "#" },
      ],
    },
    {
      label: "CONTACT US",
      href: "/contact",
      children: [
        { label: "Become a Partner", href: "#" },
        { label: "Presence Map", href: "#" },
        { label: "Contact Form", href: "#" },
      ],
    },
  ],
};

export const anchorStrip = [
  "Integrated Facility Management",
  "Property Management",
  "Hardcore Repair & Maintenance",
  "Office Interior Management",
  "MEP Services",
  "EHS Compliance",
];

export const hero = {
  eyebrow: "India's #1 Facility Partner",
  heading: ["Manage Every", "Facility."],
  headingAccent: "One Contract.",
  body: "Technology-driven, fully self-delivered facility solutions — FM, property management, hardcore repair & maintenance, and office fitouts — backed by SIS Group's ₹20,059 Cr enterprise strength.",
  primaryCta: "Explore Solutions",
  secondaryCta: "Download Company Profile",
  scrollLabel: "Scroll to Explore",
  stats: [
    { value: "₹20,059 Cr", label: "Annual Turnover" },
    { value: "3.5 Lakh+", label: "Workforce Strength" },
    { value: "29 States", label: "Pan-India Presence" },
    { value: "320K+", label: "Sites Managed" },
  ],
};

export const about = {
  eyebrow: "About OneSIS",
  heading: ["Reimagining", "Facilities for"],
  headingAccent: "Modern India",
  body: "Founded in 2023–24 as a wholly owned subsidiary of SIS Ltd — India's #1 Business Services Group — OneSIS delivers comprehensive, technology-driven facility management. From property management and soft services to hardcore structural repairs and premium office fitouts. No sub-contracting. No excuses.",
  badges: [
    "100% Self-Delivered",
    "Technology-First",
    "SIS Group Backed",
    "SLA Guaranteed",
    "Pan-India",
    "Single Vendor",
  ],
  facts: [
    { value: "2023", label: "Established, India" },
    { value: "100%", label: "SIS Ltd Subsidiary" },
  ],
  imageCaption: "Residential & Commercial",
};

export const verticals = {
  eyebrow: "What We Offer",
  heading: ["Four Core Verticals,"],
  headingAccent: "One Accountable Partner",
  body: "Whether you need day-to-day facility upkeep, end-to-end property management, critical mechanical repairs, or a complete office interior transformation — OneSIS owns every outcome under a single agreement.",
  items: [
    {
      index: "01",
      title: "Integrated Facility Management",
      description:
        "End-to-end FM under a single agreement — eliminating multi-vendor complexity across every site.",
      tags: ["Soft Services", "MEP", "EHS", "Security", "Horticulture"],
      image: "verticalIntegratedFM",
    },
    {
      index: "02",
      title: "Property Management",
      description:
        "Residential & commercial property operations with full owner transparency and occupant satisfaction.",
      tags: ["Residential", "Commercial", "Asset Ops"],
      image: "verticalPropertyMgmt",
    },
    {
      index: "03",
      title: "Hardcore Repair & Maintenance",
      description:
        "Structural, civil & mechanical repair work by trained technicians — zero compromise on safety.",
      tags: ["Civil Works", "HVAC", "Electrical", "Plumbing"],
      image: "verticalHardcoreRepair",
    },
    {
      index: "04",
      title: "Office Interior Management",
      description:
        "Design-led, project-managed fitout solutions from concept to handover for corporate spaces.",
      tags: ["Design & Build", "Retrofitting", "PMC"],
      image: "verticalOfficeInterior",
    },
  ],
};

export const statsStrip = [
  { value: "₹20,059 Cr", label: "Group Revenue" },
  { value: "3.5 Lakh+", label: "Employees" },
  { value: "16", label: "Group Companies" },
  { value: "29", label: "States" },
  { value: "320K+", label: "Permanent Staff" },
];

export const hardcoreRepair = {
  eyebrow: "Core Activity",
  heading: "Hardcore Repair",
  headingAccent: "& Maintenance",
  body: "We handle the critical, often-deferred maintenance work that other FM companies avoid — with specialist teams, heavy equipment and proven safety protocols.",
  checklist: [
    "Structural & civil repair works",
    "MEP — Mechanical, Electrical & Plumbing",
    "HVAC servicing & overhaul",
    "Waterproofing & facade restoration",
    "Predictive & preventive maintenance",
  ],
};

export const officeInterior = {
  eyebrow: "Fitout Division",
  heading: "Office Interior",
  headingAccent: "Management",
  body: "From blank floor plates to fully operational workplaces — OneSIS manages every phase of office fitout with design expertise and project discipline.",
  checklist: [
    "Concept design & space planning",
    "Design & Build (D&B) execution",
    "Furniture, fixtures & fit-out",
    "IT & AV infrastructure integration",
    "Civil upgrades & retrofitting",
    "Handover, snagging & FM transition",
  ],
  stats: [
    { value: "320K+", label: "Permanent Staff" },
    { value: "630+", label: "Districts" },
    { value: "368", label: "Offices" },
  ],
};

export const propertyManagement = {
  eyebrow: "Property Division",
  heading: "End-to-End",
  headingAccent: "Property Management",
  body: "OneSIS delivers seamless property operations for residential complexes and commercial assets — combining technology-driven oversight, trained on-site teams, and 24/7 owner visibility dashboards.",
  checklist: [
    "Residential society & tower management",
    "Commercial office & retail property operations",
    "Vendor & contractor coordination",
    "Asset lifecycle tracking & compliance",
    "Occupant experience management",
    "Real-time owner dashboards & reporting",
  ],
  cta: "Explore Property Management",
  imageCaption: "Residential & Commercial",
  imageSubcaption: "Full-Spectrum Property Ops",
};

export const outcomes = {
  eyebrow: "Value Framework",
  heading: ["Four Outcomes"],
  headingAccent: "We Guarantee",
  body: "These are not brand promises — they are contractual outcomes tied to measurable KPIs at every client site, every day of the year. Transform. Reduce. Enable. Enhance.",
  items: [
    {
      index: "01",
      title: "Transform",
      description:
        "Self-delivered and digitised last-mile operations across all service lines — driving operational excellence at scale.",
    },
    {
      index: "02",
      title: "Reduce",
      description:
        "Lower people costs and energy overhead through technology-led efficiencies and smart workforce scheduling.",
    },
    {
      index: "03",
      title: "Enable",
      description:
        "Business control and compliance management with real-time dashboards putting clients in full operational command.",
    },
    {
      index: "04",
      title: "Enhance",
      description:
        "Office experience and staff satisfaction through best-in-class practices and continuous service benchmarking.",
    },
  ],
};

export const accountability = {
  eyebrow: "The OneSIS Advantage",
  heading: "Built for",
  headingAccent: "Accountability",
  headingTail: "at Every Level",
  body: "We combine the scale of India's largest business services group with the agility of a specialist FM provider — delivering outcomes that larger, fragmented vendors simply cannot match.",
  items: [
    {
      index: "01",
      title: "One-Stop Solution",
      description:
        "Integrated FM, property management, hardcore repair and office fitouts under a single agreement — eliminating multi-vendor complexity.",
    },
    {
      index: "02",
      title: "SLA-Based Accountability",
      description:
        "Fixed KPIs ensure transparency and performance-driven billing at every site, with no surprises at month end.",
    },
    {
      index: "03",
      title: "SIS Group Backing",
      description:
        "The financial strength and brand trust of a ₹20,059 Cr listed enterprise behind every contract you sign.",
    },
    {
      index: "04",
      title: "Real-Time Visibility",
      description:
        "Live dashboards, IoT-enabled monitoring, and digital reporting give clients complete operational control at all times.",
    },
    {
      index: "05",
      title: "Trained Workforce",
      description:
        "320K+ permanent staff trained on the proprietary M-Trainer platform ensuring skills, compliance, and service consistency.",
    },
    {
      index: "06",
      title: "Pan-India Reach",
      description:
        "Operational across 29 states, 630+ districts, and 368 offices enabling truly seamless national deployments.",
    },
  ],
};

export const whereWeOperate = {
  heading: "Where We",
  headingAccent: "Operate",
  body: "Corporate campuses, tech parks, residential towers, hospitals, retail chains — if it's a facility, OneSIS can run it with full accountability and real-time visibility.",
};

export const technology = {
  eyebrow: "Proprietary Tech",
  heading: "Powered by",
  headingAccent: "Intelligent",
  headingTail: "Platforms",
  body: "Our integrated digital stack gives clients real-time operational intelligence, automated compliance tracking, and full transparency — no black boxes, ever.",
  cta: "Explore Technology",
  platforms: [
    {
      name: "One Point App",
      tag: "Field Operations",
      description:
        "Mobile-first tool for field teams — task management, attendance, compliance checklists in one app.",
      highlighted: false,
    },
    {
      name: "iOPS",
      tag: "Integrated Ops Platform",
      description:
        "Central command dashboard for real-time facility monitoring, SLA tracking, and client reporting.",
      highlighted: false,
    },
    {
      name: "FACTECH",
      tag: "FM Platform",
      description:
        "Comprehensive FM workflow automation — from ticket raising to preventive maintenance scheduling.",
      highlighted: true,
    },
    {
      name: "M-Trainer",
      tag: "Workforce L&D",
      description:
        "Proprietary digital learning platform ensuring consistent skill upgradation across 320K+ permanent staff.",
      highlighted: false,
    },
  ],
};

export const cta = {
  eyebrow: "Get Started",
  heading: "Ready to",
  headingAccent: "Transform",
  headingTail: "Your Facility?",
  body: "Talk to our team and discover how OneSIS can simplify your facility needs — FM, property management, repair & maintenance, and fitouts — under one roof, with guaranteed SLAs.",
  primaryCta: "Contact Our Team",
  secondaryCta: "Download Profile",
  stats: [
    { value: "₹20,059 Cr", label: "Group Revenue", highlighted: false },
    { value: "3.5L", label: "Employees", highlighted: false },
    { value: "29", label: "States", highlighted: true },
    { value: "16", label: "Group Companies", highlighted: false },
  ],
};

export const footer = {
  description:
    "A 100% SIS Group company delivering technology-driven, self-managed facility management, property management, hardcore repair & maintenance, and office interior management across India.",
  badge: "Part of SIS Group — India's #1 FM Company",
  columns: [
    {
      title: "Company",
      links: [
        "About SIS Group",
        "About OneSIS",
        "Board & Management",
        "Why OneSIS",
        "News & Updates",
      ],
    },
    {
      title: "Solutions",
      links: [
        "Integrated FM",
        "Property Management",
        "Repair & Maintenance",
        "Office Fitouts",
        "Technology Platforms",
      ],
    },
    {
      title: "Connect",
      links: ["Contact Us", "Careers", "Download Profile", "Privacy Policy"],
    },
  ],
  social: ["LinkedIn", "Twitter", "Instagram"],
  copyright: "© 2024 OneSIS. A SIS Ltd Company. All rights reserved.",
};
