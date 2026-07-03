export const navItemsEl = [
  { label: "Ποιοι Είμαστε", href: "#about" },
  { label: "AI Εμπειρίες & Εκδηλώσεις", href: "#experiences" },
  { label: "AI Media", href: "#media" },
  { label: "Καινοτομία & Ρομποτική", href: "#innovation" },
  { label: "Εμπορικές Υπηρεσίες", href: "#services" },
  { label: "Επικοινωνία", href: "#contact" },
] as const;

export const heroEl = {
  headline: "Το πρώτο AI-driven agency για technology storytelling.",
  subline:
    "Η Victorious Network συνδυάζει Τεχνητή Νοημοσύνη, Δημόσιες Σχέσεις και Marketing ειδικά για καινοτομία, ρομποτική και technology brands που χρειάζονται ορατότητα, κύρος και ισχυρή παρουσία στην αγορά.",
  motto: "Elevate · Innovate · Triumph",
  primaryCta: { label: "Επικοινωνήστε μαζί μας", href: "#contact" },
  secondaryCta: { label: "Οι υπηρεσίες μας", href: "#experiences" },
} as const;

export const aboutEl = {
  kicker: "Ποιοι Είμαστε",
  title: "Ένας κόμβος αριστείας που συνδέει την τεχνολογία με την κοινωνία.",
  text:
    "Ενισχύουμε τον αντίκτυπο πρωτοπόρων τεχνολογίας διεθνώς, συνδυάζοντας AI-driven στρατηγική, στοχευμένη επικοινωνία και παγκόσμια εμβέλεια. Μετατρέπουμε τη σύνθετη καινοτομία σε δημόσια παρουσία, αξέχαστες εμπειρίες και δυναμική αγοράς.",
  ceo: {
    name: "Andriana Manetta",
    title: "Ιδρύτρια & CEO",
    bio:
      "Σύμβουλος επικοινωνίας και marketing με εκτενή εμπειρία στη στρατηγική επικοινωνία, την καινοτομία και το technology branding. Ως ιδρύτρια και CEO της Victorious Network και Head of Marketing της Sophia the Robot, δραστηριοποιείται στη διασταύρωση επικοινωνίας, τεχνητής νοημοσύνης και τεχνολογίας νέας γενιάς.",
    photo: "/assets/ceo-andriana-manetta.jpg",
  },
} as const;

export const pillarsEl = [
  {
    id: "experiences",
    visualType: "experiences",
    kicker: "Πυλώνας 01",
    title: "AI Εμπειρίες & Εκδηλώσεις",
    intro: "Σχεδιάζουμε καθηλωτικές εμπειρίες που κάνουν την τεχνολογία αδύνατο να αγνοηθεί. Με humanoid robots, holograms, digital twins, expos και hackathons, συνδέουμε brands με κοινό, χορηγούς, developers και το μέλλον του customer engagement.",
    items: [
      { title: "Sophia the Robot", description: "Φέρνουμε τη Sophia the Robot, ένα από τα πιο αναγνωρίσιμα humanoid robots στον κόσμο, σε keynotes, PR activations, εταιρικές παρουσιάσεις, συνεντεύξεις και καμπάνιες που δημιουργούν άμεση προσοχή." },
      { title: "Holograms & AI Digital Twins", description: "Δημιουργούμε immersive brand moments με 3D holograms, AI installations και ψηφιακά αντίγραφα για ηγέτες, προϊόντα και concepts, μετατρέποντας φυσικούς χώρους σε high-impact τεχνολογικές σκηνές." },
      { title: "Expos & Hackathons", description: "Σχεδιάζουμε και υποστηρίζουμε τεχνολογικές εκθέσεις, innovation showcases, hackathons και robotics competitions, συνδέοντας brands με developers, συνεργάτες και το οικοσύστημα καινοτομίας." },
      { title: "Interactive AI Activations", description: "Δημιουργούμε εγκαταστάσεις που αντιδρούν στην κίνηση, στη φωνή ή στις επιλογές του κοινού, μετατρέποντας κάθε αλληλεπίδραση σε αξέχαστη live εμπειρία." },
    ],
    cta: { prompt: "Θέλετε μία εμπειρία που θα κάνει το brand σας αδύνατο να αγνοηθεί;", label: "Κλείστε μία εμπειρία", href: "#contact" },
  },
  {
    id: "media",
    visualType: "media",
    kicker: "Πυλώνας 02",
    title: "AI Media",
    intro: "Επαναπροσδιορίζουμε την παραγωγή ψηφιακού περιεχομένου μέσα από ένα studio model ενισχυμένο με Generative AI. Από podcasts και vidcasts μέχρι multilingual video και cinematic AI environments, βοηθάμε τα brands να επικοινωνούν παγκόσμια με ταχύτητα, καθαρότητα και premium αισθητική.",
    items: [
      { title: "AI Filming Studio", description: "Ένα πρωτοποριακό production studio που συνδυάζει κλασικά podcast και vidcast formats με AI-powered workflows, δίνοντας στο brand σας επαγγελματική οπτικοακουστική παρουσία από το concept έως την τελική παραγωγή." },
      { title: "Podcast & Vidcast Production", description: "Υψηλής ποιότητας video και audio περιεχόμενο, σχεδιασμένο να τραβά την προσοχή σε κάθε πλατφόρμα, κρατώντας αυθεντική ανθρώπινη αλληλεπίδραση και ισχυρή editorial κατεύθυνση." },
      { title: "Multilingual AI Video", description: "AI translation, voice adaptation και lip-sync workflows που επιτρέπουν στο μήνυμά σας να φτάσει σε πολλές αγορές χωρίς επαναλαμβανόμενα γυρίσματα ή κατακερματισμένη παραγωγή." },
      { title: "AI-Generated Environments", description: "Τοποθετούμε παρουσιαστές, στελέχη και προϊόντα σε premium ψηφιακά περιβάλλοντα που ξεπερνούν τα όρια των παραδοσιακών γυρισμάτων." },
    ],
    cta: { prompt: "Έτοιμοι να μετατρέψουμε το μήνυμά σας σε premium AI-powered media;", label: "Ας παράγουμε μαζί", href: "#contact" },
  },
  {
    id: "innovation",
    visualType: "innovation",
    kicker: "Πυλώνας 03",
    title: "Καινοτομία & Ρομποτική",
    intro: "Συνδέουμε κορυφαίες τεχνολογίες ρομποτικής με επιχειρήσεις, ακαδημαϊκά ιδρύματα και επενδυτικά οικοσυστήματα. Δημιουργούμε γέφυρες ανάμεσα στην έρευνα, τις startups, τα πανεπιστήμια και τις ευκαιρίες της αγοράς.",
    items: [
      { title: "Robotics Solutions", description: "Υποστηρίζουμε πρόσβαση, ενσωμάτωση και παρουσίαση ρομποτικών λύσεων για επιχειρήσεις, events και innovation programs, φέρνοντας έξυπνη φυσική παρουσία σε πραγματικές εφαρμογές." },
      { title: "Sophia the Robot", description: "Η Victorious Network συνδέει brands και οργανισμούς με τη Sophia the Robot για keynotes, PR moments και συμβολικές συζητήσεις γύρω από το AI, την κοινωνία και το μέλλον." },
      { title: "Startups", description: "Βοηθάμε technology startups να προχωρήσουν προς αναγνωρισιμότητα, product-market fit, ecosystem integration και ουσιαστική πρόσβαση σε συνεργάτες, πελάτες και ηγέτες αγοράς." },
      { title: "Έρευνα & Πανεπιστήμια", description: "Γεφυρώνουμε την ακαδημαϊκή έρευνα με την επιχειρησιακή εφαρμογή, δημιουργώντας συνεργασίες με πανεπιστήμια, ερευνητικά κέντρα και θεσμούς που ανοίγουν δρόμους γνώσης και χρηματοδότησης." },
    ],
    cta: { prompt: "Αναζητάτε συνεργασίες στη ρομποτική ή την καινοτομία;", label: "Μιλήστε μας για το project", href: "#contact" },
  },
  {
    id: "services",
    visualType: "commercial",
    kicker: "Πυλώνας 04",
    title: "Εμπορικές Υπηρεσίες",
    intro: "Η τεχνολογική υπεροχή χρειάζεται τη σωστή εμπορική κατεύθυνση. Σχεδιάζουμε market entry, branding, PR και digital campaign systems που μετατρέπουν την καινοτομία σε ορατότητα, πωλήσεις, συνεργασίες και διεθνή αναγνώριση.",
    items: [
      { title: "Market Entry", description: "Στρατηγικός σχεδιασμός και καθοδήγηση για είσοδο σε νέες γεωγραφικές αγορές, εντοπισμό ευκαιριών, ανάλυση ανταγωνισμού και προσαρμογή του μοντέλου σας για ανάπτυξη." },
      { title: "PR, Branding & Technology Storytelling", description: "Μετατρέπουμε την περίπλοκη τεχνολογία σε συναρπαστική δημόσια ιστορία, χτίζοντας ισχυρή εικόνα, media visibility και επικοινωνία που γίνεται κατανοητή." },
      { title: "Ecosystem Integration & Funding Access", description: "Συνδέουμε εταιρείες και startups με θεσμούς, πανεπιστήμια, ερευνητικά κέντρα, incubators, στρατηγικούς συνεργάτες, επενδυτές, VCs και χρηματοδοτικά εργαλεία." },
      { title: "360° Digital Solutions", description: "Ολοκληρωμένες ψηφιακές λύσεις: content creation, AI copywriting, video production, social media, websites, localization και performance-focused digital campaigns." },
      { title: "Data-Driven Campaigns", description: "Στοχευμένες ψηφιακές καμπάνιες με έμφαση στο ROI, στο conversion και στα κοινά που έχουν πραγματική σημασία για την ανάπτυξη του brand." },
    ],
    cta: { prompt: "Χρειάζεστε μία στρατηγική προσαρμοσμένη στο brand σας;", label: "Ζητήστε πρόταση", href: "#contact" },
  },
] as const;

export const closingEl = {
  kicker: "Επικοινωνήστε με τη Victorious Network",
  headline: "Έτοιμοι για το επόμενο Victorious story;",
  text: "Πείτε μας για το project, την ιδέα ή το brief σας. Η ομάδα των AI και PR ειδικών μας θα βοηθήσει να διαμορφώσουμε τη στρατηγική που θα κάνει το brand σας να ξεχωρίσει.",
  cta: { label: "Στείλτε brief", href: "mailto:info@victoriousnetwork.com" },
  contact: {
    address: "Παρ. Λεωφόρου Κηφισού 54, Αθήνα 104 42",
    phone: "+30 211 182 0195",
    email: "info@victoriousnetwork.com",
  },
} as const;
