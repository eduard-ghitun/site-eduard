export const DEFAULT_LANGUAGE = "ro";

export const LANGUAGE_STORAGE_KEY = "gdevelopment-language";

export const LANGUAGE_OPTIONS = [
  { code: "ro", label: "RO" },
  { code: "en", label: "EN" }
];

export const translations = {
  ro: {
    meta: {
      title: "Web Developer Cluj-Napoca | Creare Website-uri Moderne | gdevelopment.ro",
      description:
        "Eduard este developer în Cluj-Napoca. Creează site-uri, le îmbunătățește și oferă ajutor pentru prezența online.",
      keywords:
        "web developer Cluj-Napoca, creare site Cluj, dezvoltare website Cluj, mentenanta website Cluj, web development Romania",
      ogLocale: "ro_RO"
    },
    languages: {
      ro: "Română",
      en: "Engleză"
    },
    nav: {
      ariaLabel: "Navigare principală",
      openMenu: "Deschide meniul",
      closeMenu: "Închide meniul",
      languageSwitcherLabel: "Selectează limba",
      items: [
        { label: "Acasă", href: "#hero" },
        { label: "Despre", href: "#despre" },
        { label: "Servicii", href: "#servicii" },
        { label: "Proiecte", href: "#proiecte" },
        { label: "Contact", href: "#contact" }
      ],
      cta: "Hai să vorbim",
      mobileLanguageLabel: "Limba site-ului"
    },
    hero: {
      kicker: "Site-uri • Îmbunătățiri • Integrări",
      title: {
        lead: "Un site care",
        accent: "să te reprezinte."
      },
      description:
        "Salut, sunt Eduard. Creez site-uri pentru oameni și afaceri care vor să se prezinte mai bine online. Dacă pornești de la zero sau ai un site care are nevoie de o schimbare, te pot ajuta.",
      terminalAriaLabel: "Introducere",
      terminalLines: [
        "initializare website...",
        "incarcare componente...",
        "bun venit la GDevelopment"
      ],
      ctaPrimary: "Vezi ce am realizat",
      ctaSecondary: "Hai să vorbim",
      stats: ["Discuți direct cu mine", "Site adaptat pentru telefon", "Pași clari de la început"],
      process: {
        label: "Cum lucrăm împreună",
        status: "Disponibil",
        title: "Punem proiectul în ordine, pas cu pas.",
        description: "Îți explic ce urmează în fiecare etapă, fără să încărcăm discuția cu termeni tehnici.",
        steps: [
          "Îmi spui ce ai nevoie. Vorbim despre afacerea ta, ce vrei să prezinți și ce ai vrea să facă site-ul.",
          "Stabilim direcția. Punem în ordine paginile, aspectul, funcționalitățile și pașii proiectului.",
          "Construiesc și verificăm. Realizez site-ul, îți arăt cum prinde contur și discutăm ajustările necesare înainte de lansare."
        ]
      },
      focus: {
        label: "Ce contează",
        title: "Un site care se explică singur și rămâne ușor de folosit.",
        description:
          "Pun accent pe informații bine așezate, detalii îngrijite și o experiență simplă pentru oamenii care intră pe site."
      }
    },
    about: {
      eyebrow: "Despre mine",
      title: "Salut, eu sunt Eduard.",
      description:
        "Sunt developer în Cluj-Napoca și construiesc site-uri care explică simplu ce oferi.",
      profileLabel: "Despre mine",
      heading: "Un site bun trebuie să fie ușor de înțeles și de folosit.",
      paragraphs: [
        "Sunt developer în Cluj-Napoca și am absolvit Facultatea de Automatică și Calculatoare la UTCN. Îmi place să construiesc lucruri utile și să acord atenție felului în care arată și se folosesc.",
        "Pentru mine, un site bun trebuie să explice clar ce oferi și să fie ușor de folosit. Vreau ca oamenii care îl vizitează să găsească repede ce îi interesează și să știe cum să te contacteze.",
        "Cu mine discuți direct despre proiect: ce ai nevoie, ce se poate face și care sunt pașii următori."
      ],
      highlights: [
        { value: "UTCN", label: "Automatica si Calculatoare" },
        { value: "Direct", label: "Vorbim fără intermediar" },
        { value: "Clar", label: "Explic pe înțelesul tău" }
      ],
      principlesLabel: "Principii",
      principlesTitle: "Lucrurile importante pentru mine într-un proiect.",
      principles: [
        {
          title: "Înțelegem nevoia",
          description: "Începem cu ce vrei să comunice site-ul și cu informațiile de care au nevoie vizitatorii."
        },
        {
          title: "Păstrăm lucrurile simple",
          description: "Organizez conținutul astfel încât oamenii să poată parcurge site-ul fără efort."
        },
        {
          title: "Construim cu grijă",
          description: "Mă ocup de detaliile tehnice ca site-ul să fie stabil și ușor de actualizat."
        },
        {
          title: "Rămânem în legătură",
          description: "Discutăm fiecare pas important și ajustăm proiectul înainte de lansare."
        }
      ]
    },
    services: {
      eyebrow: "Servicii",
      title: "Cu ce te pot ajuta",
      description:
        "Poate ai nevoie de primul tău site. Poate vrei să îl îmbunătățești pe cel pe care îl ai deja. Pornim de la ce îți trebuie.",
      introLabel: "Ce ofer",
      introTitle: "Alegem împreună ce are sens pentru site-ul tău.",
      imageAlt: "Spațiu de lucru pentru dezvoltarea unui site",
      availability: "Îmi poți scrie despre proiectul tău",
      items: [
        {
          title: "Creare site",
          description:
            "Construiesc un site în care oamenii să înțeleagă ce oferi, să îți descopere serviciile și să te poată contacta ușor."
        },
        {
          title: "Mentenanță",
          description:
            "Mă ocup de actualizări, erori și mici modificări, ca site-ul tău să funcționeze bine și să rămână la zi."
        },
        {
          title: "Redesign",
          description:
            "Dacă site-ul nu te mai reprezintă, îi putem schimba aspectul și organizarea, astfel încât să fie mai plăcut și mai ușor de parcurs."
        },
        {
          title: "Modernizare",
          description:
            "Îmbunătățesc site-urile existente care se încarcă greu, se folosesc dificil sau au nevoie de funcționalități noi."
        },
        {
          title: "Integrări",
          description:
            "Conectez site-ul cu alte aplicații și servicii, în funcție de ce ai nevoie să faci."
        },
        {
          title: "Funcționalități AI",
          description:
            "Pot adăuga un asistent pentru întrebări frecvente sau automatizări pentru sarcini repetitive, acolo unde acestea îți sunt utile."
        }
      ]
    },
    officeDesign: {
      meta: {
        title: "Amenajare și design pentru birouri | gdevelopment.ro",
        description: "Consultanță online pentru amenajarea unui gaming setup, home office sau birou corporate și selecția produselor potrivite.",
        keywords: "amenajare birou, design birou, gaming setup, home office, birou corporate, consultanță setup",
        ogLocale: "ro_RO"
      },
      serviceCard: {
        title: "Un birou în care să îți placă să stai.",
        description: "Te ajut să alegi mobilierul, iluminatul și echipamentele potrivite pentru un spațiu comod, organizat și pe gustul tău.",
        cta: "Descoperă serviciile de design pentru birouri"
      },
      hero: {
        eyebrow: "Amenajare și selecție de produse",
        title: "Biroul tău, gândit pentru tine.",
        description: "Pentru muncă, gaming sau ambele, un birou ar trebui să fie comod și să îți placă felul în care arată. Te ajut să alegi și să așezi lucrurile astfel încât să se potrivească spațiului, bugetului și modului în care îl folosești.",
        note: "Planificarea și consultanța se pot face online. Serviciul include amenajarea de setup și selecția de produse recomandate; nu include montaj, lucrări electrice sau servicii de arhitectură."
      },
      services: [
        {
          id: "gaming-setup",
          label: "Gaming setup",
          title: "Un setup pe gustul tău, în care fiecare lucru își găsește locul.",
          items: [
            "Alegerea biroului și a scaunului.",
            "Poziționarea monitorului, laptopului sau PC-ului.",
            "Recomandări pentru periferice și echipamente audio.",
            "Iluminat ambiental și RGB, potrivit stilului dorit.",
            "Organizarea cablurilor și a accesoriilor."
          ]
        },
        {
          id: "home-office",
          label: "Home office",
          title: "Un loc în care să lucrezi comod și care să se potrivească în casa ta.",
          items: [
            "Alegerea mobilierului în funcție de spațiul disponibil.",
            "Organizarea suprafeței de lucru și a depozitării.",
            "Poziționarea ecranelor și a accesoriilor.",
            "Iluminat pentru lucru și atmosferă.",
            "Recomandări pentru echipamente și gestionarea cablurilor."
          ]
        },
        {
          id: "birouri-corporate",
          label: "Birouri corporate",
          title: "Spații de lucru ordonate, plăcute și potrivite echipei tale.",
          items: [
            "Propuneri de amenajare pentru posturile de lucru.",
            "Selectarea mobilierului și a accesoriilor.",
            "O direcție vizuală unitară, potrivită companiei.",
            "Recomandări pentru monitoare, periferice și echipamente audio-video.",
            "Organizarea cablurilor și folosirea eficientă a spațiului."
          ]
        }
      ],
      cta: "Discută despre acest serviciu",
      process: {
        eyebrow: "Cum funcționează",
        title: "Începem cu spațiul pe care îl ai.",
        steps: [
          "Îmi trimiți câteva fotografii, dimensiunile spațiului și bugetul.",
          "Discutăm ce îți place și de ce ai nevoie.",
          "Pregătesc propunerea de amenajare și lista de produse recomandate."
        ],
        note: "Putem face toate acestea online, în ritmul care îți este comod."
      },
      contact: {
        title: "Hai să găsim varianta potrivită pentru biroul tău.",
        description: "Trimite-mi câteva poze cu spațiul și spune-mi ce ai vrea să schimbi.",
        cta: "Hai să vorbim"
      }
    },
    portfolio: {
      eyebrow: "Proiecte",
      title: "Câteva dintre proiectele mele",
      description: "Uite câteva exemple de site-uri la care am lucrat.",
      tags: ["Site-uri de prezentare", "Servicii locale", "Proiecte online"],
      previewAlt: "Previzualizare {title}",
      projectLabel: "Proiect",
      featured: "Recomandat",
      actions: {
        live: "Vezi proiectul",
        github: "Vezi pe GitHub",
        comingSoon: "Link în curând"
      },
      projects: [
        {
          title: "Proiect avocat",
          description:
            "Site de prezentare pentru un cabinet de avocatură. Am realizat o interfață profesionistă, gândită pentru a face informațiile ușor de găsit.",
          technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"]
        },
        {
          title: "ServiceAuto",
          description:
            "Site de prezentare pentru un service auto. Am realizat varianta responsive și modul de prezentare a serviciilor.",
          technologies: ["React", "Vite", "Design responsive", "UI/UX"]
        },
        {
          title: "NorthSiteCrew",
          description:
            "Site de prezentare pentru zona automotive. Am organizat secțiunile dedicate serviciilor și navigarea dintre ele.",
          technologies: ["React", "Vite", "Tailwind CSS", "Design responsive"]
        },
        {
          title: "Proiect DekoConstruct",
          description:
            "Site de prezentare pentru domeniul construcțiilor. Am realizat paginile care pun în evidență serviciile oferite.",
          technologies: ["React", "Vite", "Tailwind CSS", "Design responsive"]
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Ai un proiect în minte?",
      description:
        "Spune-mi ce ai vrea să construim sau ce te nemulțumește la site-ul actual. Nu trebuie să ai toate detaliile pregătite — le putem clarifica împreună.",
      channelsTitle: "Cum mă poți contacta",
      channelsLead: "Alege metoda care îți este mai comodă",
      channelsText: "și îmi poți scrie direct.",
      responseNote: "Poți lăsa câteva detalii, iar eu revin către tine.",
      info: [
        {
          id: "email",
          label: "Email",
          value: "eduard.ghitun@yahoo.com",
          href: "mailto:eduard.ghitun@yahoo.com"
        },
        {
          id: "phone",
          label: "Telefon",
          value: "0742 226 227",
          href: "tel:0742226227"
        },
        {
          id: "instagram",
          label: "Instagram",
          value: "@eduardghitun",
          href: "https://www.instagram.com/eduardghitun",
          external: true
        }
      ],
      form: {
        nameLabel: "Nume",
        namePlaceholder: "Numele tău",
        emailLabel: "Email",
        emailPlaceholder: "email@exemplu.ro",
        messageLabel: "Mesaj",
        messagePlaceholder: "Spune-mi pe scurt cu ce te pot ajuta...",
        submit: "Scrie-mi despre proiect",
        sending: "Se trimite...",
        success: "Mulțumesc! Mesajul tău a fost trimis.",
        errors: {
          required: "Completează numele, emailul și mesajul înainte să trimiți.",
          invalidEmail: "Introdu o adresă de email validă.",
          sendFailure:
            "Mesajul nu a plecat acum. Încearcă din nou sau scrie-mi direct pe email."
        }
      }
    },
    footer: {
      description: "Site-uri, îmbunătățiri și ajutor pentru prezența ta online.",
      navTitle: "Navigare",
      contactTitle: "Contact",
      collaborationTitle: "Colaborare",
      collaborationText:
        "Lucrez cu oameni și afaceri din Cluj-Napoca și de la distanță, din toată România.",
      cta: "Hai să vorbim",
      rightsReserved: "Toate drepturile rezervate.",
      seoLine: "Web Developer Cluj-Napoca | Creare Website-uri Moderne | gdevelopment.ro"
    }
  },
  en: {
    meta: {
      title: "Web Developer in Cluj-Napoca | Modern Websites | gdevelopment.ro",
      description:
        "Eduard is a web developer in Cluj-Napoca. He builds websites, improves existing ones, and helps with your online presence.",
      keywords:
        "web developer Cluj-Napoca, website development Cluj, modern websites Romania, website maintenance Cluj, web development",
      ogLocale: "en_US"
    },
    languages: {
      ro: "Romanian",
      en: "English"
    },
    nav: {
      ariaLabel: "Primary navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageSwitcherLabel: "Select language",
      items: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#despre" },
        { label: "Services", href: "#servicii" },
        { label: "Projects", href: "#proiecte" },
        { label: "Contact", href: "#contact" }
      ],
      cta: "Let's talk",
      mobileLanguageLabel: "Website language"
    },
    hero: {
      kicker: "Websites • Improvements • Integrations",
      title: {
        lead: "A website that",
        accent: "feels like you."
      },
      description:
        "Hi, I'm Eduard. I build websites for people and businesses who want to present themselves better online. Whether you are starting from scratch or your current site needs a change, I can help.",
      terminalAriaLabel: "Introduction",
      terminalLines: [
        "initializing website...",
        "loading components...",
        "welcome to GDevelopment"
      ],
      ctaPrimary: "See my work",
      ctaSecondary: "Let's talk",
      stats: ["You talk directly to me", "Built for phones too", "Clear steps from the start"],
      process: {
        label: "How we work together",
        status: "Available",
        title: "We put the project in order, one step at a time.",
        description: "I explain what comes next at every stage, without filling the conversation with technical jargon.",
        steps: [
          "You tell me what you need. We talk about your work, what you want to show, and what the site should do.",
          "We set the direction. We arrange the pages, look, features, and project steps.",
          "I build and we review. I show you how the site is taking shape and we discuss adjustments before launch."
        ]
      },
      focus: {
        label: "What matters",
        title: "A website that explains itself and stays easy to use.",
        description:
          "I focus on well-placed information, thoughtful details, and a simple experience for the people visiting the site."
      }
    },
    about: {
      eyebrow: "About me",
      title: "Hi, I'm Eduard.",
      description:
        "I'm a developer in Cluj-Napoca and I build websites that explain what you offer in a simple way.",
      profileLabel: "About me",
      heading: "A good website should be easy to understand and use.",
      paragraphs: [
        "I'm a developer in Cluj-Napoca and I graduated from the Faculty of Automation and Computer Science at UTCN. I enjoy building useful things and paying close attention to how they look and feel to use.",
        "For me, a good website clearly explains what you offer and is easy to use. I want visitors to quickly find what matters to them and know how to get in touch.",
        "You speak directly with me about the project: what you need, what can be done, and what the next steps are."
      ],
      highlights: [
        { value: "UTCN", label: "Automation and Computer Science" },
        { value: "Direct", label: "No intermediaries" },
        { value: "Clear", label: "Plain-language explanations" }
      ],
      principlesLabel: "Principles",
      principlesTitle: "What matters to me in a project.",
      principles: [
        {
          title: "Understand the need",
          description: "We start with what the site needs to say and what visitors need to find."
        },
        {
          title: "Keep it simple",
          description: "I organise the content so people can move through the site without effort."
        },
        {
          title: "Build with care",
          description: "I handle the technical details so the site is stable and easy to update."
        },
        {
          title: "Stay in touch",
          description: "We discuss each important step and adjust the project before launch."
        }
      ]
    },
    services: {
      eyebrow: "Services",
      title: "How I can help",
      description:
        "Maybe you need your first website. Maybe you want to improve the one you already have. We start with what you need.",
      introLabel: "What I offer",
      introTitle: "Together, we choose what makes sense for your website.",
      imageAlt: "Web development workspace",
      availability: "Tell me about your project",
      items: [
        {
          title: "Website creation",
          description:
            "I build a website where people can understand what you offer, explore your services, and contact you easily."
        },
        {
          title: "Maintenance",
          description:
            "I take care of updates, errors, and small changes so your website works well and stays current."
        },
        {
          title: "Redesign",
          description:
            "If your website no longer feels like you, we can change its look and organisation to make it more pleasant and easier to browse."
        },
        {
          title: "Modernisation",
          description:
            "I improve existing websites that load slowly, are hard to use, or need new functionality."
        },
        {
          title: "Integrations",
          description:
            "I connect your website with other apps and services, depending on what you need it to do."
        },
        {
          title: "AI features",
          description:
            "I can add a frequently-asked-questions assistant or automate repetitive tasks where that is genuinely useful to you."
        }
      ]
    },
    officeDesign: {
      meta: {
        title: "Office setup and design | gdevelopment.ro",
        description: "Online consultation for planning a gaming setup, home office, or corporate office and selecting suitable products.",
        keywords: "office setup, office design, gaming setup, home office, corporate office, setup consultation",
        ogLocale: "en_US"
      },
      serviceCard: {
        title: "An office you enjoy spending time in.",
        description: "I can help you choose furniture, lighting, and equipment for a comfortable, organised space that feels like yours.",
        cta: "Explore office design services"
      },
      hero: {
        eyebrow: "Setup planning and product selection",
        title: "Your workspace, planned around you.",
        description: "For work, gaming, or both, a desk setup should be comfortable and look the way you like. I help you choose and arrange things to fit the space, budget, and how you use it.",
        note: "Planning and consultation can happen online. The service covers setup planning and product selection; it does not include installation, electrical work, or architectural services."
      },
      services: [
        {
          id: "gaming-setup",
          label: "Gaming setup",
          title: "A setup that feels like yours, where everything has its place.",
          items: [
            "Choosing the desk and chair.",
            "Positioning the monitor, laptop, or PC.",
            "Recommendations for peripherals and audio equipment.",
            "Ambient and RGB lighting to match the style you want.",
            "Organising cables and accessories."
          ]
        },
        {
          id: "home-office",
          label: "Home office",
          title: "A comfortable place to work that fits naturally into your home.",
          items: [
            "Choosing furniture based on the available space.",
            "Organising the work surface and storage.",
            "Positioning screens and accessories.",
            "Lighting for work and atmosphere.",
            "Recommendations for equipment and cable management."
          ]
        },
        {
          id: "birouri-corporate",
          label: "Corporate offices",
          title: "Orderly, pleasant workspaces that suit your team.",
          items: [
            "Workspace planning proposals.",
            "Selecting furniture and accessories.",
            "A unified visual direction that fits the company.",
            "Recommendations for monitors, peripherals, and audio-video equipment.",
            "Cable organisation and efficient use of space."
          ]
        }
      ],
      cta: "Discuss this service",
      process: {
        eyebrow: "How it works",
        title: "We start with the space you have.",
        steps: [
          "You send me a few photos, the space dimensions, and your budget.",
          "We talk about what you like and what you need.",
          "I prepare the setup proposal and a list of recommended products."
        ],
        note: "We can do all of this online, at a pace that works for you."
      },
      contact: {
        title: "Let's find the right setup for your office.",
        description: "Send me a few photos of the space and tell me what you would like to change.",
        cta: "Let's talk"
      }
    },
    portfolio: {
      eyebrow: "Projects",
      title: "A few of my projects",
      description: "Here are a few websites I have worked on.",
      tags: ["Presentation websites", "Local services", "Online projects"],
      previewAlt: "Preview {title}",
      projectLabel: "Project",
      featured: "Featured",
      actions: {
        live: "View project",
        github: "View on GitHub",
        comingSoon: "Link coming soon"
      },
      projects: [
        {
          title: "Law Firm Project",
          description:
            "A presentation website for a law firm. I built a professional interface designed to make important information easy to find.",
          technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"]
        },
        {
          title: "ServiceAuto",
          description:
            "A presentation website for an auto service business. I built the responsive version and the service showcase.",
          technologies: ["React", "Vite", "Responsive design", "UI/UX"]
        },
        {
          title: "NorthSiteCrew",
          description:
            "A presentation website for the automotive space. I organised the service sections and the navigation between them.",
          technologies: ["React", "Vite", "Tailwind CSS", "Responsive design"]
        },
        {
          title: "DekoConstruct Project",
          description:
            "A presentation website for the construction industry. I built the pages that bring the offered services into view.",
          technologies: ["React", "Vite", "Tailwind CSS", "Responsive design"]
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Have a project in mind?",
      description:
        "Tell me what you would like to build or what you do not like about your current website. You do not need to have every detail ready — we can work it out together.",
      channelsTitle: "How to reach me",
      channelsLead: "Choose the option that feels most convenient",
      channelsText: "and write to me directly.",
      responseNote: "Leave a few details and I will get back to you.",
      info: [
        {
          id: "email",
          label: "Email",
          value: "eduard.ghitun@yahoo.com",
          href: "mailto:eduard.ghitun@yahoo.com"
        },
        {
          id: "phone",
          label: "Phone",
          value: "0742 226 227",
          href: "tel:0742226227"
        },
        {
          id: "instagram",
          label: "Instagram",
          value: "@eduardghitun",
          href: "https://www.instagram.com/eduardghitun",
          external: true
        }
      ],
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "email@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Briefly tell me how I can help...",
        submit: "Tell me about your project",
        sending: "Sending...",
        success: "Thank you! Your message has been sent.",
        errors: {
          required: "Please complete your name, email, and message before sending it.",
          invalidEmail: "Please enter a valid email address.",
          sendFailure: "Your message did not go through just now. Please try again or email me directly."
        }
      }
    },
    footer: {
      description: "Websites, improvements, and help with your online presence.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      collaborationTitle: "Collaboration",
      collaborationText: "I work with people and businesses in Cluj-Napoca and remotely across Romania.",
      cta: "Let's talk",
      rightsReserved: "All rights reserved.",
      seoLine: "Web Developer in Cluj-Napoca | Modern Websites | gdevelopment.ro"
    }
  }
};
