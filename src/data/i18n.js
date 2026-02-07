export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "id", "ar"];
export const RTL_LANGUAGES = ["ar"];

export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact Us",
      language: "Language",
      selectLanguage: "Select Language"
    },
    theme: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode"
    },
    footer: {
      rights: "© {year} Raditya Adyatma. All rights reserved.",
      about: "About",
      work: "Work",
      contact: "Contact",
      linkedin: "LinkedIn",
      dribbble: "Dribbble",
      instagram: "Instagram"
    },
    home: {
      profileTitle: "Brand Designer and Fullstack Developer",
      heroHeadline: "YOUR DIGITAL DEVELOPMENT PARTNER",
      heroHighlight: "Digital Development",
      heroDescription:
        "Brand & Software Development Partner: Delivering high-quality digital experiences with precision and performance. Rads Dev is built for organizations and businesses who demand professional, future-ready solutions.",
      getInTouch: "Get in touch",
      metrics: {
        projects: "Projects Delivered",
        disciplines: "Disciplines Integrated",
        timeline: "Typical MVP Timeline"
      },
      selectedBuilds: "Selected Product Builds",
      trustTypes: [
        "Brand + Mobile",
        "Web Software",
        "Brand + Website",
        "Mobile + Backend",
        "LMS Platform",
        "Internal Product"
      ],
      servicesTitle: "Multidisciplinary Services",
      services: [
        {
          title: "Brand Systems",
          description:
            "Identity direction, visual language, and scalable design rules to keep every product touchpoint consistent.",
          items: ["Brand strategy", "Visual identity", "Design guidelines"]
        },
        {
          title: "Web Experiences",
          description:
            "Marketing and product websites built for performance, conversion, and editorial flexibility.",
          items: ["Landing pages", "CMS architecture", "Performance optimization"]
        },
        {
          title: "Software Products",
          description:
            "Product UX and frontend architecture for dashboards, internal tools, and SaaS platforms.",
          items: ["UX flows", "Design systems", "Frontend implementation"]
        },
        {
          title: "Mobile Apps",
          description:
            "Native-feeling mobile interfaces with clear task flows, robust states, and maintainable code.",
          items: ["iOS/Android UX", "Component libraries", "API integration"]
        }
      ],
      featuredLabel: "Featured Case Studies",
      featuredTitle: "Portfolio work with measurable outcomes",
      viewAll: "View all",
      openCaseStudy: "Open case study",
      processLabel: "Process",
      processTitle: "How projects move from brief to launch",
      process: [
        {
          title: "Discover",
          description: "Align goals, users, and constraints through focused product and brand discovery."
        },
        {
          title: "Define",
          description: "Translate findings into system direction, priorities, and measurable outcomes."
        },
        {
          title: "Design + Build",
          description: "Design and implementation happen in one loop to reduce handoff friction."
        },
        {
          title: "Launch + Iterate",
          description: "Release quickly, monitor behavior, and improve with clear post-launch priorities."
        }
      ],
      nextProject: "Next Project",
      nextTitle: "Need a partner who can handle brand, interface, and product build in one flow?",
      continueToContact: "Continue to contact"
    },
    about: {
      badge: "About",
      headline: "I design the brand and build the product so both feel like one system.",
      description:
        "My focus is helping teams launch clear, conversion-ready digital products across brand, website, software, and mobile. The goal is simple: make experiences understandable, maintainable, and effective in real use.",
      principlesTitle: "Principles",
      principles: [
        {
          title: "Outcome before decoration",
          description: "Every design or engineering decision must support a concrete product objective."
        },
        {
          title: "Brand and product in one loop",
          description: "Identity, UX, and implementation are developed together to avoid handoff drift."
        },
        {
          title: "MVP speed with long-term structure",
          description: "Ship quickly, but build systems that can scale without redesigning from zero."
        }
      ],
      capabilitiesTitle: "Capabilities",
      capabilities: [
        "Brand strategy and visual identity",
        "Web design and front-end engineering",
        "SaaS and internal software interfaces",
        "Mobile app UX and implementation",
        "Design systems and component architecture",
        "Cross-functional product delivery"
      ],
      workingStyleTitle: "Working Style",
      workingStyle: [
        {
          title: "Lean Collaboration",
          description: "Short feedback loops, visible priorities, and fast decision cycles."
        },
        {
          title: "Design-to-Code Continuity",
          description: "Components and interaction patterns are designed with implementation in mind."
        },
        {
          title: "Evidence-Based Iteration",
          description: "Decisions evolve based on product usage, not personal preference alone."
        }
      ]
    },
    work: {
      badge: "All Case Studies",
      headline: "Portfolio projects across brand, web, software, and mobile.",
      description:
        "Each case study explains challenge, approach, deliverables, and measurable outcomes from multidisciplinary execution.",
      openCase: "Open Case"
    },
    caseStudy: {
      backToWork: "Back to Work",
      badge: "Case Study",
      category: "Category",
      industry: "Industry",
      timeline: "Timeline",
      role: "Role",
      challenge: "Challenge",
      approach: "Approach",
      deliverables: "Deliverables",
      outcomes: "Outcomes",
      stack: "Stack",
      requestBreakdown: "Request Full Breakdown",
      livePreview: "Live Preview",
      previous: "Previous",
      next: "Next",
      start: "Start of case studies",
      end: "End of case studies"
    },
    contact: {
      badge: "Contact",
      headline: "Let\'s build your next product.",
      description:
        "Share your product goals, timeline, and current challenges. I can support strategy, design, and implementation end-to-end.",
      emailTitle: "Email",
      emailDescription: "Best for project scope and requirements.",
      quickCallTitle: "Quick Call",
      quickCallDescription: "Book a short intro call to align on goals and timeline.",
      quickCallButton: "Book Intro Call",
      inquiryTitle: "Quick Inquiry Form",
      inquiryDescription: "Fill this and we\'ll open your email app with a ready-to-send project brief.",
      instantTitle: "Instant channels",
      instantDescription: "Prefer faster communication? Reach me here.",
      emailButton: "Email",
      whatsappButton: "WhatsApp",
      callButton: "Book Call",
      form: {
        subjectPrefix: "Project Inquiry from",
        name: "Name",
        email: "Email",
        projectType: "Project Type",
        budget: "Budget",
        timeline: "Timeline",
        projectBrief: "Project Brief",
        placeholderName: "Your name",
        placeholderEmail: "you@email.com",
        placeholderProjectType: "Website / App / Software",
        placeholderBudget: "$3k - $10k",
        placeholderTimeline: "4 - 8 weeks",
        placeholderBrief: "What are you trying to build, for who, and what outcome matters most?",
        send: "Send Inquiry",
        reset: "Reset",
        statusMissing: "Please fill Name, Email, and Project Brief.",
        statusOpening: "Opening your email app..."
      }
    },
    notFound: {
      title: "Page not found",
      description: "The page you are looking for does not exist or has been moved.",
      backHome: "Back Home",
      viewWork: "View Work"
    }
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      contact: "Hubungi",
      language: "Bahasa",
      selectLanguage: "Pilih Bahasa"
    },
    theme: {
      switchToLight: "Ganti ke mode terang",
      switchToDark: "Ganti ke mode gelap"
    },
    footer: {
      rights: "© {year} Raditya Adyatma. Hak cipta dilindungi.",
      about: "Tentang",
      work: "Karya",
      contact: "Kontak",
      linkedin: "LinkedIn",
      dribbble: "Dribbble",
      instagram: "Instagram"
    },
    home: {
      profileTitle: "Brand Designer dan Fullstack Developer",
      heroHeadline: "MITRA PENGEMBANGAN DIGITAL ANDA",
      heroHighlight: "Pengembangan Digital",
      heroDescription:
        "Mitra Pengembangan Brand & Software: menghadirkan pengalaman digital berkualitas tinggi dengan presisi dan performa. Rads Dev hadir untuk organisasi dan bisnis yang membutuhkan solusi profesional dan siap masa depan.",
      getInTouch: "Hubungi Saya",
      metrics: {
        projects: "Proyek Selesai",
        disciplines: "Disiplin Terintegrasi",
        timeline: "Estimasi MVP"
      },
      selectedBuilds: "Proyek Produk Pilihan",
      trustTypes: [
        "Brand + Mobile",
        "Perangkat Lunak Web",
        "Brand + Website",
        "Mobile + Backend",
        "Platform LMS",
        "Produk Internal"
      ],
      servicesTitle: "Layanan Multidisiplin",
      services: [
        {
          title: "Sistem Brand",
          description:
            "Arah identitas, bahasa visual, dan aturan desain yang skalabel agar setiap touchpoint produk tetap konsisten.",
          items: ["Strategi brand", "Identitas visual", "Panduan desain"]
        },
        {
          title: "Pengalaman Web",
          description:
            "Website marketing dan produk yang dibangun untuk performa, konversi, dan fleksibilitas editorial.",
          items: ["Landing page", "Arsitektur CMS", "Optimasi performa"]
        },
        {
          title: "Produk Software",
          description:
            "UX produk dan arsitektur frontend untuk dashboard, tools internal, dan platform SaaS.",
          items: ["Alur UX", "Design system", "Implementasi frontend"]
        },
        {
          title: "Aplikasi Mobile",
          description:
            "Interface mobile yang natural dengan alur tugas jelas, state lengkap, dan kode yang mudah dirawat.",
          items: ["UX iOS/Android", "Pustaka komponen", "Integrasi API"]
        }
      ],
      featuredLabel: "Studi Kasus Unggulan",
      featuredTitle: "Karya portofolio dengan hasil terukur",
      viewAll: "Lihat semua",
      openCaseStudy: "Buka studi kasus",
      processLabel: "Proses",
      processTitle: "Cara proyek bergerak dari brief hingga rilis",
      process: [
        {
          title: "Temukan",
          description: "Menyelaraskan tujuan, pengguna, dan batasan melalui discovery produk dan brand yang fokus."
        },
        {
          title: "Tentukan",
          description: "Menerjemahkan temuan menjadi arah sistem, prioritas, dan target terukur."
        },
        {
          title: "Desain + Bangun",
          description: "Desain dan implementasi berjalan dalam satu loop untuk mengurangi friksi handoff."
        },
        {
          title: "Rilis + Iterasi",
          description: "Rilis cepat, pantau perilaku pengguna, lalu tingkatkan dengan prioritas pasca-rilis yang jelas."
        }
      ],
      nextProject: "Proyek Berikutnya",
      nextTitle: "Butuh partner yang bisa menangani brand, interface, dan pengembangan produk dalam satu alur?",
      continueToContact: "Lanjut ke kontak"
    },
    about: {
      badge: "Tentang",
      headline: "Saya merancang brand dan membangun produk agar terasa sebagai satu sistem.",
      description:
        "Fokus saya membantu tim meluncurkan produk digital yang jelas dan siap konversi, mencakup brand, website, software, dan mobile. Tujuannya sederhana: mudah dipahami, mudah dirawat, dan efektif dipakai.",
      principlesTitle: "Prinsip",
      principles: [
        {
          title: "Hasil sebelum dekorasi",
          description: "Setiap keputusan desain atau engineering harus mendukung tujuan produk yang konkret."
        },
        {
          title: "Brand dan produk dalam satu loop",
          description: "Identitas, UX, dan implementasi dikembangkan bersama untuk menghindari drift saat handoff."
        },
        {
          title: "Kecepatan MVP dengan struktur jangka panjang",
          description: "Rilis cepat, namun tetap membangun sistem yang bisa berkembang tanpa mulai ulang."
        }
      ],
      capabilitiesTitle: "Kapabilitas",
      capabilities: [
        "Strategi brand dan identitas visual",
        "Desain web dan engineering frontend",
        "Antarmuka SaaS dan software internal",
        "UX serta implementasi aplikasi mobile",
        "Design system dan arsitektur komponen",
        "Delivery produk lintas fungsi"
      ],
      workingStyleTitle: "Cara Kerja",
      workingStyle: [
        {
          title: "Kolaborasi Ringkas",
          description: "Siklus feedback pendek, prioritas terlihat, dan keputusan bergerak cepat."
        },
        {
          title: "Kontinuitas Desain-ke-Kode",
          description: "Komponen dan pola interaksi dirancang dengan implementasi yang realistis."
        },
        {
          title: "Iterasi Berbasis Bukti",
          description: "Keputusan berkembang dari data penggunaan produk, bukan preferensi pribadi semata."
        }
      ]
    },
    work: {
      badge: "Semua Studi Kasus",
      headline: "Proyek portofolio lintas brand, web, software, dan mobile.",
      description:
        "Setiap studi kasus menjelaskan tantangan, pendekatan, deliverables, dan hasil terukur dari eksekusi multidisiplin.",
      openCase: "Buka Kasus"
    },
    caseStudy: {
      backToWork: "Kembali ke Karya",
      badge: "Studi Kasus",
      category: "Kategori",
      industry: "Industri",
      timeline: "Durasi",
      role: "Peran",
      challenge: "Tantangan",
      approach: "Pendekatan",
      deliverables: "Deliverables",
      outcomes: "Hasil",
      stack: "Stack",
      requestBreakdown: "Minta Breakdown Lengkap",
      livePreview: "Lihat Langsung",
      previous: "Sebelumnya",
      next: "Berikutnya",
      start: "Awal daftar studi kasus",
      end: "Akhir daftar studi kasus"
    },
    contact: {
      badge: "Kontak",
      headline: "Mari bangun produk Anda berikutnya.",
      description:
        "Ceritakan tujuan produk, timeline, dan tantangan saat ini. Saya dapat mendukung strategi, desain, dan implementasi secara end-to-end.",
      emailTitle: "Email",
      emailDescription: "Terbaik untuk membahas scope dan kebutuhan proyek.",
      quickCallTitle: "Panggilan Singkat",
      quickCallDescription: "Jadwalkan panggilan singkat untuk menyelaraskan target dan timeline.",
      quickCallButton: "Jadwalkan Panggilan",
      inquiryTitle: "Form Inquiry Singkat",
      inquiryDescription: "Isi form ini dan aplikasi email Anda akan terbuka dengan brief proyek siap kirim.",
      instantTitle: "Kanal Instan",
      instantDescription: "Butuh komunikasi lebih cepat? Hubungi lewat kanal berikut.",
      emailButton: "Email",
      whatsappButton: "WhatsApp",
      callButton: "Jadwalkan Panggilan",
      form: {
        subjectPrefix: "Inquiry Proyek dari",
        name: "Nama",
        email: "Email",
        projectType: "Jenis Proyek",
        budget: "Anggaran",
        timeline: "Timeline",
        projectBrief: "Ringkasan Proyek",
        placeholderName: "Nama Anda",
        placeholderEmail: "anda@email.com",
        placeholderProjectType: "Website / Aplikasi / Software",
        placeholderBudget: "Rp50jt - Rp150jt",
        placeholderTimeline: "4 - 8 minggu",
        placeholderBrief: "Apa yang ingin Anda bangun, untuk siapa, dan hasil apa yang paling penting?",
        send: "Kirim Inquiry",
        reset: "Reset",
        statusMissing: "Mohon isi Nama, Email, dan Ringkasan Proyek.",
        statusOpening: "Membuka aplikasi email Anda..."
      }
    },
    notFound: {
      title: "Halaman tidak ditemukan",
      description: "Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.",
      backHome: "Kembali ke Beranda",
      viewWork: "Lihat Karya"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      services: "الخدمات",
      contact: "تواصل",
      language: "اللغة",
      selectLanguage: "اختر اللغة"
    },
    theme: {
      switchToLight: "التبديل إلى الوضع الفاتح",
      switchToDark: "التبديل إلى الوضع الداكن"
    },
    footer: {
      rights: "© {year} Raditya Adyatma. جميع الحقوق محفوظة.",
      about: "من أنا",
      work: "الأعمال",
      contact: "التواصل",
      linkedin: "لينكدإن",
      dribbble: "دريبل",
      instagram: "إنستغرام"
    },
    home: {
      profileTitle: "مصمم هوية ومطور فل ستاك",
      heroHeadline: "شريكك في التطوير الرقمي",
      heroHighlight: "التطوير الرقمي",
      heroDescription:
        "شريكك في تطوير الهوية والبرمجيات: نقدم تجارب رقمية عالية الجودة بدقة وأداء. تم بناء Rads Dev للمؤسسات والشركات التي تبحث عن حلول احترافية جاهزة للمستقبل.",
      getInTouch: "تواصل معي",
      metrics: {
        projects: "المشاريع المنجزة",
        disciplines: "التخصصات المتكاملة",
        timeline: "المدة المعتادة لـ MVP"
      },
      selectedBuilds: "نماذج منتجات مختارة",
      trustTypes: [
        "هوية + موبايل",
        "برمجيات ويب",
        "هوية + موقع",
        "موبايل + باك إند",
        "منصة تعليمية",
        "منتج داخلي"
      ],
      servicesTitle: "خدمات متعددة التخصصات",
      services: [
        {
          title: "أنظمة الهوية",
          description: "اتجاه الهوية واللغة البصرية وقواعد تصميم قابلة للتوسع لضمان اتساق كل نقاط التواصل.",
          items: ["استراتيجية الهوية", "هوية بصرية", "دليل تصميم"]
        },
        {
          title: "تجارب الويب",
          description: "مواقع تسويقية ومنتجية مبنية للأداء والتحويل ومرونة إدارة المحتوى.",
          items: ["صفحات هبوط", "هيكلة CMS", "تحسين الأداء"]
        },
        {
          title: "المنتجات البرمجية",
          description: "تجربة مستخدم للمنتج وهندسة واجهات أمامية للوحات التحكم والأدوات الداخلية ومنصات SaaS.",
          items: ["مسارات UX", "أنظمة تصميم", "تنفيذ الواجهة"]
        },
        {
          title: "تطبيقات الموبايل",
          description: "واجهات موبايل طبيعية مع تدفقات واضحة وحالات قوية وكود قابل للصيانة.",
          items: ["UX لـ iOS/Android", "مكتبة مكونات", "تكامل API"]
        }
      ],
      featuredLabel: "دراسات حالة مميزة",
      featuredTitle: "أعمال بورتفوليو بنتائج قابلة للقياس",
      viewAll: "عرض الكل",
      openCaseStudy: "فتح دراسة الحالة",
      processLabel: "العملية",
      processTitle: "كيف ينتقل المشروع من الفكرة إلى الإطلاق",
      process: [
        {
          title: "اكتشاف",
          description: "مواءمة الأهداف والمستخدمين والقيود عبر اكتشاف مركز للمنتج والهوية."
        },
        {
          title: "تحديد",
          description: "تحويل النتائج إلى اتجاه نظام وأولويات ومخرجات قابلة للقياس."
        },
        {
          title: "تصميم + بناء",
          description: "يتم التصميم والتنفيذ في دورة واحدة لتقليل احتكاك التسليم."
        },
        {
          title: "إطلاق + تحسين",
          description: "إطلاق سريع ومتابعة السلوك وتحسين مستمر وفق أولويات واضحة بعد الإطلاق."
        }
      ],
      nextProject: "المشروع القادم",
      nextTitle: "هل تحتاج شريكًا يجمع بين الهوية والواجهة وبناء المنتج في مسار واحد؟",
      continueToContact: "الانتقال إلى التواصل"
    },
    about: {
      badge: "من أنا",
      headline: "أصمم الهوية وأبني المنتج ليبدوا كنظام واحد متكامل.",
      description:
        "أركز على مساعدة الفرق في إطلاق منتجات رقمية واضحة وجاهزة للتحويل عبر الهوية والمواقع والبرمجيات والموبايل. الهدف بسيط: تجربة مفهومة وقابلة للصيانة وفعالة في الاستخدام الحقيقي.",
      principlesTitle: "المبادئ",
      principles: [
        {
          title: "النتيجة قبل الزخرفة",
          description: "كل قرار تصميم أو هندسة يجب أن يدعم هدفًا واضحًا للمنتج."
        },
        {
          title: "الهوية والمنتج في دورة واحدة",
          description: "تطوير الهوية وتجربة المستخدم والتنفيذ معًا لتجنب تباين التسليم."
        },
        {
          title: "سرعة MVP مع بنية طويلة المدى",
          description: "نطلق بسرعة ونبني نظامًا يمكنه التوسع دون إعادة البداية."
        }
      ],
      capabilitiesTitle: "القدرات",
      capabilities: [
        "استراتيجية الهوية والهوية البصرية",
        "تصميم الويب وهندسة الواجهة الأمامية",
        "واجهات SaaS والأنظمة الداخلية",
        "UX وتطوير تطبيقات الموبايل",
        "أنظمة تصميم وهندسة مكونات",
        "تسليم منتج متعدد التخصصات"
      ],
      workingStyleTitle: "أسلوب العمل",
      workingStyle: [
        {
          title: "تعاون رشيق",
          description: "دورات ملاحظات قصيرة وأولويات واضحة وقرارات سريعة."
        },
        {
          title: "استمرارية التصميم إلى الكود",
          description: "تصميم المكونات وأنماط التفاعل مع مراعاة التنفيذ الفعلي."
        },
        {
          title: "تحسين قائم على الدليل",
          description: "القرارات تتطور بناءً على استخدام المنتج وليس التفضيلات الشخصية فقط."
        }
      ]
    },
    work: {
      badge: "كل دراسات الحالة",
      headline: "مشاريع بورتفوليو عبر الهوية والويب والبرمجيات والموبايل.",
      description:
        "كل دراسة حالة تشرح التحدي والمنهجية والمخرجات والنتائج القابلة للقياس من تنفيذ متعدد التخصصات.",
      openCase: "فتح الحالة"
    },
    caseStudy: {
      backToWork: "العودة للأعمال",
      badge: "دراسة حالة",
      category: "التصنيف",
      industry: "القطاع",
      timeline: "المدة",
      role: "الدور",
      challenge: "التحدي",
      approach: "المنهجية",
      deliverables: "المخرجات",
      outcomes: "النتائج",
      stack: "التقنيات",
      requestBreakdown: "طلب تحليل مفصل",
      livePreview: "معاينة مباشرة",
      previous: "السابق",
      next: "التالي",
      start: "بداية دراسات الحالة",
      end: "نهاية دراسات الحالة"
    },
    contact: {
      badge: "التواصل",
      headline: "لنُنجز منتجك القادم.",
      description:
        "شارك أهداف منتجك والجدول الزمني والتحديات الحالية. يمكنني دعمك من الاستراتيجية إلى التصميم والتنفيذ بالكامل.",
      emailTitle: "البريد الإلكتروني",
      emailDescription: "الأفضل لمناقشة نطاق المشروع والمتطلبات.",
      quickCallTitle: "مكالمة سريعة",
      quickCallDescription: "احجز مكالمة تعريفية قصيرة لمواءمة الأهداف والجدول الزمني.",
      quickCallButton: "احجز مكالمة",
      inquiryTitle: "نموذج استفسار سريع",
      inquiryDescription: "املأ النموذج وسيفتح بريدك الإلكتروني برسالة جاهزة بملخص المشروع.",
      instantTitle: "قنوات فورية",
      instantDescription: "تفضّل تواصل أسرع؟ يمكنك الوصول لي من هنا.",
      emailButton: "بريد إلكتروني",
      whatsappButton: "واتساب",
      callButton: "احجز مكالمة",
      form: {
        subjectPrefix: "استفسار مشروع من",
        name: "الاسم",
        email: "البريد الإلكتروني",
        projectType: "نوع المشروع",
        budget: "الميزانية",
        timeline: "المدة الزمنية",
        projectBrief: "ملخص المشروع",
        placeholderName: "اسمك",
        placeholderEmail: "you@email.com",
        placeholderProjectType: "موقع / تطبيق / نظام",
        placeholderBudget: "$3k - $10k",
        placeholderTimeline: "4 - 8 أسابيع",
        placeholderBrief: "ما الذي تريد بناءه، ولمن، وما النتيجة الأهم؟",
        send: "إرسال الاستفسار",
        reset: "إعادة تعيين",
        statusMissing: "يرجى إدخال الاسم والبريد وملخص المشروع.",
        statusOpening: "جارٍ فتح تطبيق البريد..."
      }
    },
    notFound: {
      title: "الصفحة غير موجودة",
      description: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
      backHome: "العودة للرئيسية",
      viewWork: "عرض الأعمال"
    }
  }
};
