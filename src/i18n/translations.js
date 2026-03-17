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
        "Web developer din Cluj-Napoca specializat in creare website-uri moderne, mentenanta si modernizare site-uri. Solutii web rapide, optimizate si profesioniste.",
      keywords:
        "web developer Cluj-Napoca, creare site Cluj, dezvoltare website Cluj, mentenanta website Cluj, web development Romania",
      ogLocale: "ro_RO"
    },
    languages: {
      ro: "Romana",
      en: "Engleza"
    },
    nav: {
      ariaLabel: "Navigare principala",
      openMenu: "Deschide meniul",
      closeMenu: "Inchide meniul",
      languageSwitcherLabel: "Selecteaza limba",
      items: [
        { label: "Acasa", href: "#hero" },
        { label: "Despre", href: "#despre" },
        { label: "Servicii", href: "#servicii" },
        { label: "Proiecte", href: "#proiecte" },
        { label: "Contact", href: "#contact" }
      ],
      cta: "Cere oferta",
      mobileLanguageLabel: "Limba site-ului"
    },
    hero: {
      kicker: "Web Development • Mentenanta • Microservicii",
      title: {
        lead: "Website-uri",
        accent: "premium, rapide, memorabile."
      },
      description:
        "Construiesc website-uri rapide, moderne si optimizate pentru conversie, astfel incat afacerea ta sa inspire incredere si sa atraga mai multi clienti online.",
      terminalAriaLabel: "Introducere in terminal",
      terminalLines: [
        "initializare website...",
        "incarcare componente...",
        "bun venit la GDevelopment"
      ],
      ctaPrimary: "Vezi portofoliul",
      ctaSecondary: "Cere o oferta gratuita",
      stats: ["UI premium", "Performanta ridicata", "Experienta optimizata pentru conversie"],
      process: {
        label: "Procesul meu",
        status: "Disponibil",
        title: "Un proces simplu prin care transform ideile tale intr-un website profesional.",
        description: "De la analiza si design pana la lansare si optimizare pentru rezultate reale.",
        steps: [
          "Analizam obiectivele afacerii tale si structura website-ului.",
          "Construiesc designul si dezvolt website-ul folosind tehnologii moderne.",
          "Lansam website-ul si il optimizam pentru performanta si conversii."
        ]
      },
      focus: {
        label: "Prioritate",
        title: "Website-uri rapide, elegante si construite pentru rezultate reale.",
        description:
          "Fiecare proiect este realizat cu accent pe performanta, experienta de utilizare si o imagine profesionala care inspira incredere."
      }
    },
    about: {
      eyebrow: "Despre mine",
      title: "Despre mine",
      description:
        "Sunt web developer din Cluj-Napoca, cu baza tehnica solida si focus pe creare website-uri moderne, clare si scalabile pentru business-uri care vor crestere reala online.",
      profileLabel: "Profil profesional",
      heading: "Construiesc solutii web moderne, stabile si convingatoare vizual.",
      paragraphs: [
        "Am finalizat Facultatea de Automatica si Calculatoare din cadrul Universitatii Tehnice din Cluj-Napoca, iar in proiecte aplic o abordare riguroasa: analiza clara, arhitectura logica si dezvoltare web performanta pentru rezultate masurabile.",
        "Ofer creare website-uri moderne, mentenanta si modernizare website pentru proiecte existente, plus integrare si dezvoltare de microservicii pentru functionalitati avansate."
      ],
      highlights: [
        { value: "UTCN", label: "Automatica si Calculatoare" },
        { value: "UI modern", label: "Design clar si profesionist" },
        { value: "Scalabil", label: "Integrare microservicii" }
      ],
      principlesLabel: "Principii",
      principlesTitle: "Fiecare proiect este gandit ca un sistem clar, nu doar ca un layout.",
      principles: [
        {
          title: "Arhitectura clara",
          description: "Structura modulara, usor de intretinut si extins pentru proiecte pe termen lung."
        },
        {
          title: "UI bine lucrat",
          description: "Design curat, cu ierarhie vizuala puternica si atentie la detaliile de interactiune."
        },
        {
          title: "Implementari curate",
          description: "Cod predictibil, performant, orientat pe stabilitate si scalabilitate."
        },
        {
          title: "Livrare orientata pe business",
          description: "Fiecare decizie tehnica este corelata cu obiectivul real al proiectului."
        }
      ]
    },
    services: {
      eyebrow: "Servicii",
      title: "Servicii Web Development",
      description:
        "Servicii complete de web development in Cluj: creare website-uri moderne, mentenanta si modernizare website, plus dezvoltare web performanta cu microservicii si integrare AI.",
      introLabel: "Ce ofer",
      introTitle: "Servicii construite pentru claritate, ritm si rezultate solide.",
      imageAlt: "Spatiu de lucru pentru web development",
      availability: "Serviciu disponibil pentru proiecte noi",
      items: [
        {
          title: "Dezvoltare website",
          description:
            "Dezvolt website-uri rapide, scalabile si curate, construite cu tehnologii moderne si focus pe experienta utilizatorului."
        },
        {
          title: "Mentenanta website",
          description:
            "Asigur mentenanta continua: update-uri, corectii, monitorizare si optimizare pentru stabilitate pe termen lung."
        },
        {
          title: "Stilizare website",
          description:
            "Imbunatatesc vizual site-uri existente prin UI modern, ierarhie tipografica clara si interactiuni rafinate."
        },
        {
          title: "Modernizare website",
          description:
            "Refactorizez si actualizez site-uri vechi pentru performanta mai buna, design actual si cod intretinut corect."
        },
        {
          title: "Microservicii",
          description:
            "Pot proiecta, dezvolta si integra microservicii in aplicatii web pentru fluxuri de date mai flexibile si usor de extins."
        },
        {
          title: "Integrare AI",
          description:
            "Integrez functionalitati AI in website-uri si aplicatii web pentru automatizare, asistenta conversationala si fluxuri de lucru mai eficiente."
        }
      ]
    },
    portfolio: {
      eyebrow: "Proiecte",
      title: "Proiecte realizate",
      tags: ["Inginerie frontend", "UX/UI premium", "Integrare microservicii"],
      previewAlt: "Preview {title}",
      projectLabel: "Proiect",
      featured: "Recomandat",
      actions: {
        live: "Vizualizeaza proiectul",
        github: "Vezi pe GitHub",
        comingSoon: "Link in curand"
      },
      projects: [
        {
          title: "Proiect avocat",
          description:
            "Website modern de prezentare pentru un cabinet de avocatura, cu design profesionist, structura clara si interfata orientata spre incredere si conversie.",
          technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"]
        },
        {
          title: "ServiceAuto",
          description:
            "Site de prezentare modern pentru service auto, realizat cu design responsive, structura clara si focus pe prezentarea serviciilor intr-un mod profesionist.",
          technologies: ["React", "Vite", "Design responsive", "UI/UX"]
        },
        {
          title: "NorthSiteCrew",
          description:
            "Website de prezentare pentru zona automotive, cu layout modern, sectiuni clare pentru servicii si o interfata construita pentru impact vizual si navigare rapida.",
          technologies: ["React", "Vite", "Tailwind CSS", "Design responsive"]
        },
        {
          title: "Proiect DekoConstruct",
          description:
            "Website de prezentare pentru domeniul constructiilor, gandit pentru o imagine profesionista, structura clara si evidentiere rapida a serviciilor oferite.",
          technologies: ["React", "Vite", "Tailwind CSS", "Design responsive"]
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact Web Developer Cluj",
      description:
        "Pentru proiecte de web development in Cluj-Napoca sau colaborari remote in Romania, contacteaza-ma direct prin email, telefon sau Instagram.",
      channelsTitle: "Canale de contact",
      channelsLead: "Alege metoda preferata",
      channelsText: "si iti raspund in cel mai scurt timp.",
      responseNote: "Raspuns rapid in aceeasi zi lucratoare.",
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
        namePlaceholder: "Numele tau",
        emailLabel: "Email",
        emailPlaceholder: "email@exemplu.ro",
        messageLabel: "Mesaj",
        messagePlaceholder: "Scrie pe scurt ce iti doresti pentru site...",
        submit: "Trimite mesajul",
        sending: "Se trimite...",
        success: "Mesaj trimis cu succes.",
        errors: {
          required: "Completeaza numele, emailul si mesajul inainte de trimitere.",
          invalidEmail: "Introdu o adresa de email valida.",
          sendFailure:
            "Nu am putut trimite mesajul acum. Incearca din nou sau contacteaza-ma direct pe email."
        }
      }
    },
    footer: {
      description: "Web development premium, mentenanta si modernizare pentru proiecte serioase.",
      navTitle: "Navigare",
      contactTitle: "Contact",
      collaborationTitle: "Colaborare",
      collaborationText:
        "Proiecte disponibile pentru Cluj-Napoca si colaborari remote in toata Romania.",
      cta: "Trimite un mesaj",
      rightsReserved: "Toate drepturile rezervate.",
      seoLine: "Web Developer Cluj-Napoca | Creare Website-uri Moderne | gdevelopment.ro"
    }
  },
  en: {
    meta: {
      title: "Web Developer in Cluj-Napoca | Modern Websites | gdevelopment.ro",
      description:
        "Web developer based in Cluj-Napoca, building modern websites, handling maintenance, and upgrading existing sites. Fast, polished, business-focused web solutions.",
      keywords:
        "web developer Cluj-Napoca, website development Cluj, modern websites Romania, website maintenance Cluj, premium web development",
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
      cta: "Request a quote",
      mobileLanguageLabel: "Website language"
    },
    hero: {
      kicker: "Web Development • Maintenance • Microservices",
      title: {
        lead: "Websites",
        accent: "premium, fast, unforgettable."
      },
      description:
        "I build fast, modern, conversion-focused websites that help your business inspire trust and attract more clients online.",
      terminalAriaLabel: "Terminal introduction",
      terminalLines: [
        "initializing website...",
        "loading components...",
        "welcome to GDevelopment"
      ],
      ctaPrimary: "View portfolio",
      ctaSecondary: "Request a free quote",
      stats: ["Premium UI", "High performance", "Conversion-focused experience"],
      process: {
        label: "My process",
        status: "Available",
        title: "A simple process that turns your ideas into a professional website.",
        description: "From strategy and design to launch and refinement for measurable results.",
        steps: [
          "We define your business goals and the right website structure.",
          "I design and build the website using modern technologies.",
          "We launch the site and optimize it for performance and conversions."
        ]
      },
      focus: {
        label: "Focus",
        title: "Fast, elegant websites designed for real business results.",
        description:
          "Every project is crafted with performance, usability, and a professional image that builds trust."
      }
    },
    about: {
      eyebrow: "About me",
      title: "About me",
      description:
        "I am a web developer based in Cluj-Napoca, with a strong technical foundation and a clear focus on building modern, scalable websites for businesses that want real online growth.",
      profileLabel: "Professional profile",
      heading: "I build modern web solutions that are stable, polished, and convincing.",
      paragraphs: [
        "I graduated from the Faculty of Automation and Computer Science at the Technical University of Cluj-Napoca, and I bring a rigorous mindset to every project: clear analysis, sound architecture, and high-performance web development focused on measurable outcomes.",
        "I offer modern website creation, ongoing maintenance, and website modernization for existing platforms, along with microservices design and integration for advanced functionality."
      ],
      highlights: [
        { value: "UTCN", label: "Automation and Computer Science" },
        { value: "Modern UI", label: "Clear, professional design" },
        { value: "Scalable", label: "Microservices integration" }
      ],
      principlesLabel: "Principles",
      principlesTitle: "Every project is shaped as a clear system, not just a layout.",
      principles: [
        {
          title: "Clear architecture",
          description: "A modular structure that is easy to maintain and extend over time."
        },
        {
          title: "Well-crafted UI",
          description: "Clean design, strong visual hierarchy, and close attention to interaction details."
        },
        {
          title: "Clean implementation",
          description: "Predictable, high-performance code built for stability and scalability."
        },
        {
          title: "Business-driven delivery",
          description: "Every technical decision is aligned with the real objective of the project."
        }
      ]
    },
    services: {
      eyebrow: "Services",
      title: "Web Development Services",
      description:
        "Full web development services in Cluj: modern website creation, maintenance, website modernization, plus high-performance development with microservices and AI integration.",
      introLabel: "What I offer",
      introTitle: "Services designed for clarity, momentum, and reliable results.",
      imageAlt: "Web development workspace",
      availability: "Available for new projects",
      items: [
        {
          title: "Website development",
          description:
            "I build fast, scalable, clean websites using modern technologies and a strong focus on user experience."
        },
        {
          title: "Website maintenance",
          description:
            "I provide ongoing maintenance: updates, fixes, monitoring, and optimization for long-term stability."
        },
        {
          title: "Website styling",
          description:
            "I refine existing websites through modern UI, clear typographic hierarchy, and polished interactions."
        },
        {
          title: "Website modernization",
          description:
            "I refactor and upgrade older websites for better performance, a more current look, and maintainable code."
        },
        {
          title: "Microservices",
          description:
            "I can design, build, and integrate microservices into web applications for more flexible and extensible data flows."
        },
        {
          title: "AI integration",
          description:
            "I integrate AI capabilities into websites and web apps for automation, conversational assistance, and more efficient workflows."
        }
      ]
    },
    portfolio: {
      eyebrow: "Projects",
      title: "Selected projects",
      tags: ["Frontend engineering", "Premium UX/UI", "Microservices integration"],
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
            "A modern presentation website for a law firm, with a professional design, clear structure, and an interface built around trust and conversion.",
          technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"]
        },
        {
          title: "ServiceAuto",
          description:
            "A modern presentation website for an auto service business, built with responsive design, clear structure, and a polished service showcase.",
          technologies: ["React", "Vite", "Responsive design", "UI/UX"]
        },
        {
          title: "NorthSiteCrew",
          description:
            "A presentation website for the automotive space, with a modern layout, clear service sections, and an interface designed for visual impact and fast navigation.",
          technologies: ["React", "Vite", "Tailwind CSS", "Responsive design"]
        },
        {
          title: "DekoConstruct Project",
          description:
            "A presentation website for the construction industry, designed to communicate professionalism, clear structure, and the offered services at a glance.",
          technologies: ["React", "Vite", "Tailwind CSS", "Responsive design"]
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact a Web Developer in Cluj",
      description:
        "For web development projects in Cluj-Napoca or remote collaborations across Romania, reach out directly by email, phone, or Instagram.",
      channelsTitle: "Contact channels",
      channelsLead: "Choose the contact method that suits you",
      channelsText: "and I will get back to you as soon as possible.",
      responseNote: "Fast reply on the same business day.",
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
        messagePlaceholder: "Briefly tell me what you need for the website...",
        submit: "Send message",
        sending: "Sending...",
        success: "Message sent successfully.",
        errors: {
          required: "Please complete your name, email, and message before sending.",
          invalidEmail: "Please enter a valid email address.",
          sendFailure: "I could not send your message right now. Please try again or contact me by email."
        }
      }
    },
    footer: {
      description: "Premium web development, maintenance, and modernization for serious projects.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      collaborationTitle: "Collaboration",
      collaborationText: "Available for projects in Cluj-Napoca and remote collaborations across Romania.",
      cta: "Send a message",
      rightsReserved: "All rights reserved.",
      seoLine: "Web Developer in Cluj-Napoca | Modern Websites | gdevelopment.ro"
    }
  }
};
