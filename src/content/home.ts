// Navigation — single landing page, anchor links
export type PillarContent = {
  readonly id: string;
  readonly visualType: "experiences" | "media" | "innovation" | "commercial";
  readonly kicker: string;
  readonly title: string;
  readonly intro: string;
  readonly items: readonly { readonly title: string; readonly description: string }[];
  readonly cta: { readonly prompt: string; readonly label: string; readonly href: string };
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "AI Experiences & Events", href: "#experiences" },
  { label: "AI Media", href: "#media" },
  { label: "Innovation & Robotics", href: "#innovation" },
  { label: "Commercial Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

// HERO
export const hero = {
  headline: "The AI-driven agency for technology storytelling.",
  subline:
    "Victorious Network designs AI experiences, media productions, robotics activations and strategic communication that turn technology into cultural and commercial impact.",
  motto: "Elevate · Innovate · Triumph",
  primaryCta: { label: "Our Services", href: "#experiences" },
  secondaryCta: { label: "Brief us", href: "#contact" },
} as const;

// ABOUT — company + CEO
export const about = {
  kicker: "Who We Are",
  title: "A hub of excellence bridging technology and society.",
  text:
    "We amplify the impact of technology pioneers worldwide by combining AI-driven strategy, targeted communication and global reach. Victorious Network transforms complex innovation into public presence, memorable experiences and market momentum.",
  ceo: {
    name: "Andriana Manetta",
    title: "Founder & CEO",
    bio:
      "Communication & marketing strategist with extensive experience in strategic communications, marketing innovation and technology branding. As founder and CEO of Victorious Network — and Head of Marketing for Sophia the Robot — she works at the intersection of communication, artificial intelligence and next-generation technology. A TEDx and international conference speaker.",
    // Replace with an official headshot you own the rights to.
    photo: "/assets/ceo-andriana-manetta.jpg",
  },
} as const;

// PILLAR 1 — AI Experiences & Events
export const pillarExperiences = {
  id: "experiences",
  visualType: "experiences",
  kicker: "Pillar 01",
  title: "AI Experiences & Events",
  intro:
    "We design immersive experiences that make technology impossible to ignore. Through humanoid robots, holograms, digital twins, expos and hackathons, we connect brands with audiences, sponsors, developers and the future of customer engagement.",
  items: [
    {
      title: "Sophia the Robot",
      description:
        "We bring Sophia the Robot, one of the world's most recognizable humanoid robots, into keynote moments, PR activations, corporate presentations, interviews and public-facing campaigns that create instant attention.",
    },
    {
      title: "Holograms & AI Digital Twins",
      description:
        "We create immersive brand moments through 3D holograms, AI installations and digital replicas for leaders, products and concepts, turning physical spaces into high-impact technology stages.",
    },
    {
      title: "Expos & Hackathons",
      description:
        "We design and support technology exhibitions, innovation showcases, hackathons and robotics competitions, connecting brands with developer communities, partners and the wider innovation ecosystem.",
    },
    {
      title: "Interactive AI Activations",
      description:
        "We build installations that react to movement, voice or audience choices, transforming every interaction into a memorable live experience.",
    },
  ],
  cta: { prompt: "Want an experience that makes your brand impossible to ignore?", label: "Book an experience", href: "#contact" },
} as const;

// PILLAR 2 — AI Media
export const pillarMedia = {
  id: "media",
  visualType: "media",
  kicker: "Pillar 02",
  title: "AI Media",
  intro:
    "We redefine digital content production through a studio model enhanced by Generative AI. From podcasts and vidcasts to multilingual video and cinematic AI environments, we help brands communicate globally with speed, clarity and premium aesthetics.",
  items: [
    {
      title: "AI Filming Studio",
      description:
        "A pioneering production studio combining classic podcast and vidcast formats with AI-powered workflows, giving your brand professional audiovisual presence from concept to final delivery.",
    },
    {
      title: "Podcast & Vidcast Production",
      description:
        "High-quality video and audio content designed to capture attention across platforms while preserving authentic human interaction and strong editorial direction.",
    },
    {
      title: "Multilingual AI Video",
      description:
        "AI translation, voice adaptation and lip-sync workflows that allow your message to reach multiple markets without repeated filming or fragmented production cycles.",
    },
    {
      title: "AI-Generated Environments",
      description:
        "We place presenters, executives and products inside premium digital environments that extend what is possible beyond traditional filming locations.",
    },
  ],
  cta: { prompt: "Ready to turn your message into premium AI-powered media?", label: "Let's produce together", href: "#contact" },
} as const;

// PILLAR 3 — Innovation & Robotics
export const pillarInnovation = {
  id: "innovation",
  visualType: "innovation",
  kicker: "Pillar 03",
  title: "Innovation & Robotics",
  intro:
    "We connect leading robotics technology with business, academic and investment ecosystems. Our work creates bridges between research, startups, universities and market opportunities, turning innovation into strategic growth.",
  items: [
    {
      title: "Robotics Solutions",
      description:
        "We support access, integration and presentation of robotics solutions for businesses, events and innovation programs, bringing intelligent physical presence into real-world use cases.",
    },
    {
      title: "Sophia the Robot",
      description:
        "Victorious Network connects brands and institutions with Sophia the Robot for keynote appearances, PR moments and symbolic conversations around AI, society and the future.",
    },
    {
      title: "Startups",
      description:
        "We help technology startups move toward recognition, product-market fit, ecosystem integration and meaningful access to partners, clients and market leaders.",
    },
    {
      title: "Research Collaborations & Universities",
      description:
        "We bridge academic research and industry application by building collaborations with universities, research centers and institutions that can unlock knowledge transfer and funding pathways.",
    },
  ],
  cta: { prompt: "Looking for robotics or innovation partnerships?", label: "Tell us about your project", href: "#contact" },
} as const;

// PILLAR 4 — Commercial Services
export const pillarServices = {
  id: "services",
  visualType: "commercial",
  kicker: "Pillar 04",
  title: "Commercial Services",
  intro:
    "Technology excellence needs the right commercial direction. We design market entry, branding, PR and digital campaign systems that convert innovation into visibility, sales, partnerships and international recognition.",
  items: [
    {
      title: "Market Entry",
      description:
        "Strategic planning and guidance for entering new geographic markets, identifying opportunities, understanding competition and adapting your model for growth.",
    },
    {
      title: "PR, Branding & Technology Storytelling",
      description:
        "We turn complex technology into a compelling public story, building strong brand presence, media visibility and communication systems that audiences understand.",
    },
    {
      title: "Ecosystem Integration & Funding Access",
      description:
        "We connect companies and startups with institutions, universities, research centers, incubators, strategic partners, investors, VCs and funding opportunities.",
    },
    {
      title: "360° Digital Solutions",
      description:
        "Integrated digital solutions including content creation, AI copywriting, video production, social media, websites, localization and performance-focused digital campaigns.",
    },
    {
      title: "Data-Driven Campaigns",
      description:
        "Targeted digital campaigns focused on ROI, conversion and the audiences that matter most to your brand's growth.",
    },
  ],
  cta: { prompt: "Need a tailored strategy for your brand?", label: "Request a proposal", href: "#contact" },
} as const;

// Ordered list of pillars for easy mapping in sections
export const pillars = [
  pillarExperiences,
  pillarMedia,
  pillarInnovation,
  pillarServices,
] as const;

// CLOSING CTA / CONTACT
export const closing = {
  kicker: "Contact Victorious Network",
  headline: "Ready for the next Victorious story?",
  text:
    "Tell us about your project, idea or brief. Our AI and PR specialists will help shape the strategy that makes your brand stand out.",
  cta: { label: "Submit a brief", href: "mailto:info@victoriousnetwork.com" },
  contact: {
    address: "54 Kifisou Ave. Side Road, Athens 104 42",
    phone: "+30 211 182 0195",
    email: "info@victoriousnetwork.com",
  },
} as const;
