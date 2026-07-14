// Central copy source for the OneSIS marketing site.
// Keeping content here (instead of scattered inline in JSX) makes it easy
// to hand this file to a non-developer for copy edits later.

export const nav = {
  logo: "OneSIS",
  parentBadge: "SIS Group Co.",
  cta: "Company Profile",
  links: [
    // {
    //   label: "HOME",
    //   href: "/",
    // },
    {
      label: "COMPANY",
      href: "#",
      children: [
        { label: "About SIS Group", href: "/company/sis-group" },
        { label: "About OneSIS", href: "/company/onesis" },
        { label: "Board", href: "/company/board" },
        { label: "Management Team", href: "/company/management" },
        { label: "Why OneSIS", href: "/company/why-onesis" },
        { label: "News", href: "/company/news" },
        { label: "Training", href: "/company/training" },
      ],
    },
    {
      label: "SOLUTIONS",
      href: "#",
      children: [
        { label: "Integrated Facility Management ", href: "/solutions/integrated-fm" },

        {
          label: "Property Management",
          href: "/solutions/property-management",
        },
        {
          label: "Infrastructure Care",
          href: "/solutions/specialized-services",
        },
        {
          label: "Corporate Interior Solutions",
          href: "",
        },
      ],
    },
    {
      label: "CAREER",
      href: "/career",
      children: [
        { label: "Why Work With Us", href: "#" },
        { label: "Current Openings", href: "/career/current-openings" },
        { label: "Employee Benefits", href: "/career/employee-benefits" },
      ],
    },
    {
      label: "CONTACT US",
      href: "#",
      children: [
        { label: "Become a Partner", href: "/contact/partnership-form" },
        { label: "Presence Map", href: "/contact/presence-map" },
        { label: "Contact Form", href: "/contact/contact-form" },
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
  eyebrow: "One Vision, Every Solution",
  heading: ["Reimagining Workplace Solutions", " for Modern India. "],
  headingAccent: "Integrated Facility Management",
  body: "Technology-driven, fully Group Companies Managed facility solutions — FM, property management, hardcore repair & maintenance, and office fitouts — backed by SIS Group's ₹20,059 Cr enterprise strength.",
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
  heading: ["Reimagining Facilities for", ""],
  headingAccent: "Modern India",
  body: "Born with a vision to redefine IFM, OneSIS combines the strength of the SIS Group's legacy with next-generation technology and operational excellence. Today, we deliver integrated facility management, workplace engineering, sustainability, and infrastructure solutions across India through a self-performed service model, through Group companies ensuring complete accountability, consistent quality, and measurable business outcomes.",
  badges: [
    "Group Companies Managed",
    "Technology-First",
    "SIS Group Backup",
    "SLA Guaranteed",
    "Pan-India Presence",
    // "Single Vendor",
  ],
  facts: [
    { value: "2023", label: "Established, India" },
    { value: "100%", label: "SIS Ltd Subsidiary" },
    { value: "₹20,059 Cr", label: "SIS Group Revenue" },
    { value: "3.5 Lakh", label: "SIS Group Employees" },
    { value: "16", label: "SIS Group Companies" },
    { value: "29", label: "States" },
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
        "Commercial & Residential  property operations with full owner occupant and transparency  satisfaction.",
      tags: ["Commercial","Residential", "Mall Management"],
      image: "verticalPropertyMgmt",
    },
    {
      index: "03",
      title: "Infrastructure Care",
      description:
        "Structural, civil & mechanical repair work by trained technicians — zero compromise on safety.",
      tags: ["Engineering and TEchnical Services", "Civil and Building Maintenance ", "Asset Care and Life cycle Management", "Infrastructure Reliability ","Sustainability services"],
      image: "verticalHardcoreRepair",
    },
    {
      index: "04",
      title: "Corporate Interior Solutions",
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
  heading: "Integrated Facility ",
  headingAccent: "Management",
  body: "Comprehensive infrastructure care encompassing engineering, preventive maintenance, repairs, refurbishment, MEP services, compliance, and lifecycle asset management.",
  checklist: [
    "MEP — Mechanical, Electrical & Plumbing",
    "HVAC servicing & overhaul",
    "Waterproofing & facade restoration",
    "Predictive & preventive maintenance",
    "Structural & civil repair works",
  ],
};

export const officeInterior = {
  eyebrow: "Fitout Division",
  heading: "Workplace Interior Solutions",
  headingAccent: "Management",
  body: "Turnkey interiors, fit-outs, integrating innovative design, energy-efficient materials, and sustainable workplace solutions.",
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

export const corporateInterior = {
  eyebrow: "Infrastructure Care",
  heading: "Infrastructure",
  headingAccent: "Care",
  body: "Structural, civil & mechanical repair work by trained technicians — zero compromise on safety.",
  checklist: [
    "Civil Works",
    "HVAC",
    "Electrical",
    "Plumbing",
  ],
  cta: "Explore Infrastructure Care",
  imageCaption: "Infrastructure Care",
  imageSubcaption: "Structural, Civil & Mechanical Services",
};
export const propertyManagement = {
  eyebrow: "Real Estate Management",
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
        "Group Companies Managed and digitised last-mile operations across all service lines — driving operational excellence at scale.",
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
        "Office experience and occupier satisfaction through best-in-class practices and continuous service benchmarking.",
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
  headingAccent: "Create Impact",
  body: "Across corporate campuses, tech parks, commercial towers, residential society, hospitals, and retail chains - Wherever you are in India, OneSIS serves full accountability and real-time visibility that drives performance.",
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
  body: "Talk to our team and discover how OneSIS can simplify your facility needs — FM, property management, asset Restoration & Maintenance and Workplace Interior Solutions — under one roof, with guaranteed SLAs.",
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
    "A SIS Group company delivering technology-driven, self-managed integrated facility management, real estate services, hardcore repair & maintenance, and office interior management across India.",
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
        "Integrated Facility Management",
        "Real Estate Services",
        "Asset Restoration & Maintenance",
        "Workplace Interior Solutions",
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
