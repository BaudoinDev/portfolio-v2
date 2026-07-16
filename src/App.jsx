import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Server,
  Smartphone,
  ShoppingBag,
  Wrench,
  Mail,
  ShieldCheck,
  User,
  ChevronRight,
  ChevronLeft,
  Languages,
  Eye,
  X,
  ImageOff,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import testimage from "./pic.jpeg";
import pharmanetImg1 from "./assets/projects/pharmanet-1.png";  
import pharmanetImg2 from "./assets/projects/pharmanet-2.png";
import pharmanetImg3 from "./assets/projects/pharmanet-3.png";
import pharmanetImg4 from "./assets/projects/pharmanet-4.png";
import pharmanetImg5 from "./assets/projects/pharmanet-5.png";
import aliRestoImg1 from "./assets/projects/ali-1.png";
import aliRestoImg2 from "./assets/projects/ali-2.png";
import aliRestoImg3 from "./assets/projects/ali-3.png";
import aliRestoImg4 from "./assets/projects/ali-4.png";
import portfolioImg1 from "./assets/projects/portfolio-1.png";
import portfolioImg2 from "./assets/projects/portfolio-2.png";
import portfolioImg3 from "./assets/projects/portfolio-3.png";
import portfolioImg4 from "./assets/projects/portfolio-4.png";
import portfolioImg5 from "./assets/projects/portfolio-5.png";

/* ────────────────────────────────────────────────────────────
   PROJECT SCREENSHOTS — add yours here.
   1. Drop your images somewhere like ./assets/projects/
   2. Import them at the top of the file in your own project, e.g.
        pharmanetImg1  from  ./assets/projects/pharmanet-1.jpg
        pharmanetImg2  from  ./assets/projects/pharmanet-2.jpg
        pharmanetImg3  from  ./assets/projects/pharmanet-3.jpg
        portfolioImg1  from  ./assets/projects/portfolio-1.jpg
   3. Reference them in the `images` array of the matching
      project object inside CONTENT.en.projects / CONTENT.fr.projects
      (further down this file — same array for both languages).
──────────────────────────────────────────────────────────────*/


/*
  DESIGN TOKENS
  bg      #0F172A  (deep slate — base)
  surface #131F38  (card surface, one step up from bg)
  line    #22314F  (hairline borders)
  primary #3B82F6  (blue — CTAs, links)
  secondary #38BDF8 (cyan — secondary accents, glow)
  secure  #22C55E  (green — "status" signature: online/secure indicators)
  text    #FFFFFF
  muted   #94A3B8
*/

const COLORS = {
  bg: "#0F172A",
  surface: "#131F38",
  surfaceHover: "#182746",
  line: "#22314F",
  primary: "#3B82F6",
  secondary: "#38BDF8",
  secure: "#22C55E",
  text: "#FFFFFF",
  muted: "#94A3B8",
};

const EMAIL = "baudoinadjadji13@gmail.com";
const HANDLE = "BaudoinDev";
const NAME = "Baudoin Adjadji";

/* ── Content in both languages. Tech names (skill items, tool
   names, framework tags) stay identical across locales on purpose —
   translating "Laravel" or "MySQL" would be wrong, not helpful. ── */
const CONTENT = {
  en: {
    nav: ["Home", "About", "Skills", "Projects", "Certifications", "CV", "Contact"],
    availability: "available for freelance work",
    greeting: "Hi, I'm Baudoin ",
    roles: ["build web apps.", "build mobile apps.", "secure them."],
    heroDescription:
      "Web and mobile developer focused on efficient, secure, user-friendly digital solutions.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    secureBadge: "secure",
    aboutEyebrow: "Who I am",
    aboutTitle: "About Me",
    about:
      "I'm a software engineering graduate specialized in Information Systems and Software. I started with WordPress and Shopify, then moved into modern development with Laravel, PHP, JavaScript and Flutter. These days I split my time between shipping digital products and going deeper into cybersecurity — because building something well means understanding how it can break.",
    stats: [
      { number: "4+", label: "Years learning & building" },
      { number: "10+", label: "Technologies used" },
      { number: "+5", label: " Projects completed" },
    ],
    skillsEyebrow: "Toolbox",
    skillsTitle: "Skills",
    skillCategories: [
      { name: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"] },
      { name: "Backend", items: ["PHP", "Laravel", "MySQL"] },
      { name: "Mobile", items: ["Flutter", "Dart"] },
      { name: "CMS & E-commerce", items: ["WordPress", "Shopify", "WooCommerce"] },
      { name: "Tools", items: ["Git", "GitHub", "VS Code", "Figma", "Canva"] },
    ],
    projectsEyebrow: "Selected work",
    projectsTitle: "Featured Projects",
    projects: [
      {
        name: "PharmaNet",
        type: "Web Application",
        description:
          "A pharmacy management and networking platform connecting pharmacies, administrators and customers through one digital ecosystem — catalog, roles, and data, all in one place.",
        tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        features: ["Authentication", "Role management", "Database design", "Pharmacy catalog"],
        // TODO: replace with your imported screenshots, e.g. [pharmanetImg1, pharmanetImg2, pharmanetImg3]
        images: [pharmanetImg1, pharmanetImg2, pharmanetImg3, pharmanetImg4, pharmanetImg5],
      },
      {
        name: "Ali_Resto",
        type: "Mobile Application",
        description:
          "A mobile application for a restaurant, allowing users to browse the menu, make reservations, and place orders.",
        tech: ["Flutter", "Dart", "Firebase"],
        features: ["Menu browsing", "Table reservation", "Database design", "Online ordering"],
        // TODO: replace with your imported screenshots, e.g. [aliRestoImg1, aliRestoImg2, aliRestoImg3]
        images: [aliRestoImg1, aliRestoImg2, aliRestoImg3, aliRestoImg4],
      },
      {
        name: "Personal Portfolio",
        type: "Web Application",
        description:
          "This site — a responsive portfolio built to present my work, skills and professional journey clearly, without noise.",
        tech: ["React", "Tailwind CSS", "JavaScript"],
        features: [],
        // TODO: replace with your imported screenshots, e.g. [portfolioImg1]
        images: [portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg4, portfolioImg5],
      },
    ],
    viewProject: "View",
    source: "Source",
    modalNoImages: "Screenshots coming soon",
    certsEyebrow: "Credentials",
    certsTitle: "Certifications",
    certifications: [
      { name: "Responsive Web Design", issuer: "freeCodeCamp" },
      { name: "Professional Bachelor's Degree — Computer Systems and Software", issuer: "University" },
    ],
    contactEyebrow: "Get in touch",
    contactTitle: "Let's Work Together",
    contactText: "Have a project in mind, or an opportunity to discuss? I'd love to hear from you.",
    emailMe: "Email Me",
    linkedin: "LinkedIn",
    github: "GitHub",
    footerRights: "All rights reserved.",
    langToggleLabel: "FR",
  },

  fr: {
    nav: ["Accueil", "À propos", "Compétences", "Projets", "Certifications", "CV", "Contact"],
    availability: "disponible pour des missions freelance",
    greeting: "Salut, je suis Baudoin ",
    roles: ["développe des apps web.", "développe des apps mobiles.", " les sécurise."],
    heroDescription:
      "Développeur web et mobile, concentré sur des solutions numériques efficaces, sécurisées et agréables à utiliser.",
    viewProjects: "Voir mes projets",
    contactMe: "Me contacter",
    secureBadge: "sécurisé",
    aboutEyebrow: "Qui je suis",
    aboutTitle: "À propos de moi",
    about:
      "Je suis diplômé en génie logiciel, spécialisé en systèmes d'information et logiciels. J'ai commencé avec WordPress et Shopify, avant de passer au développement moderne avec Laravel, PHP, JavaScript et Flutter. Aujourd'hui, je partage mon temps entre la livraison de produits numériques et l'approfondissement de la cybersécurité — car bien construire, c'est aussi comprendre comment ça peut casser.",
    stats: [
      { number: "4+", label: "Années d'apprentissage" },
      { number: "10+", label: "Technologies utilisées" },
      { number: "+5", label: "Projets complétés" },
    ],
    skillsEyebrow: "Boîte à outils",
    skillsTitle: "Compétences",
    skillCategories: [
      { name: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"] },
      { name: "Backend", items: ["PHP", "Laravel", "MySQL"] },
      { name: "Mobile", items: ["Flutter", "Dart"] },
      { name: "CMS & E-commerce", items: ["WordPress", "Shopify", "WooCommerce"] },
      { name: "Outils", items: ["Git", "GitHub", "VS Code", "Figma", "Canva"] },
    ],
    projectsEyebrow: "Travaux sélectionnés",
    projectsTitle: "Projets phares",
    projects: [
      {
        name: "PharmaNet",
        type: "Application Web",
        description:
          "Une plateforme de gestion et de mise en réseau de pharmacies, connectant pharmacies, administrateurs et clients au sein d'un même écosystème numérique — catalogue, rôles et données réunis en un seul endroit.",
        tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        features: ["Authentification", "Gestion des rôles", "Conception base de données", "Catalogue pharmacie"],
        images: [pharmanetImg1, pharmanetImg2, pharmanetImg3, pharmanetImg4, pharmanetImg5],
      },
      {
        name: "Ali_Resto",
        type: "Application Mobile",
        description:
          "Une application mobile pour un restaurant.",
        tech: ["Flutter", "Dart", "Firebase"],
        features: ["Recherche menu", "Reservation de tables", "Conception base de données", "Commande en ligne"],
        images: [aliRestoImg1, aliRestoImg2, aliRestoImg3, aliRestoImg4],
      },
      {
        name: "Portfolio Personnel",
        type: "Application Web",
        description:
          "Ce site — un portfolio responsive conçu pour présenter clairement mon travail, mes compétences et mon parcours professionnel, sans superflu.",
        tech: ["React", "Tailwind CSS", "JavaScript"],
        features: [],
        // TODO: mêmes images que la version EN, ex. [portfolioImg1]
        images: [portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg4, portfolioImg5],
      },
    ],
    viewProject: "Voir",
    source: "Code source",
    modalNoImages: "Captures d'écran bientôt disponibles",
    certsEyebrow: "Diplômes & certifications",
    certsTitle: "Certifications",
    certifications: [
      { name: "Responsive Web Design", issuer: "freeCodeCamp" },
      { name: "Licence Professionnelle — Systèmes Informatiques et Logiciels", issuer: "Université" },
    ],
    contactEyebrow: "Restons en contact",
    contactTitle: "Travaillons ensemble",
    contactText: "Un projet en tête, ou une opportunité à discuter ? Je serais ravi d'échanger avec vous.",
    emailMe: "M'écrire",
    linkedin: "LinkedIn",
    github: "GitHub",
    footerRights: "Tous droits réservés.",
    langToggleLabel: "EN",
  },
};

/* Reveal-on-scroll wrapper */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SectionEyebrow({ children }) {
  return (
    <div
      className="text-xs tracking-widest uppercase mb-3 inline-flex items-center gap-2"
      style={{ color: COLORS.secondary, fontFamily: "'JetBrains Mono', monospace" }}
    >
      <span style={{ width: 16, height: 1, background: COLORS.secondary, display: "inline-block" }} />
      {children}
    </div>
  );
}

/* ── Section divider: a soft, glowing gradient line that fades at
   both edges, instead of a hard full-width border. It borrows the
   same blue → cyan gradient already used on the project cards, so it
   reads as an intentional signature rather than a leftover rule. ── */
function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: "100%",
        height: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.line} 15%, ${COLORS.primary}77 50%, ${COLORS.line} 85%, transparent 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "38%",
          height: 10,
          borderRadius: 9999,
          background: `${COLORS.secondary}`,
          opacity: 0.16,
          filter: "blur(10px)",
        }}
      />
    </div>
  );
}

const SKILL_ICONS = [Code2, Server, Smartphone, ShoppingBag, Wrench];

function RotatingRole({ roles }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setIdx(0);
    setSub(0);
    setDeleting(false);
  }, [roles]);

  useEffect(() => {
    const current = roles[idx % roles.length];
    const speed = deleting ? 28 : 55;
    const pause = 1400;

    const t = setTimeout(() => {
      if (!deleting && sub < current.length) {
        setSub(sub + 1);
      } else if (!deleting && sub === current.length) {
        setTimeout(() => setDeleting(true), pause);
      } else if (deleting && sub > 0) {
        setSub(sub - 1);
      } else if (deleting && sub === 0) {
        setDeleting(false);
        setIdx((idx + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(t);
  }, [sub, deleting, idx, roles]);

  return (
    <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {roles[idx % roles.length].slice(0, sub)}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: COLORS.secondary,
          marginLeft: "3px",
          verticalAlign: "-0.15em",
          animation: "blinkCursor 1s step-end infinite",
        }}
      />
    </span>
  );
}

/* ── Project modal: image carousel instead of a live link ── */
function ProjectModal({ project, noImagesText, viewLabel, onClose }) {
  const [slide, setSlide] = useState(0);
  const images = project?.images || [];

  useEffect(() => {
    setSlide(0);
  }, [project]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setSlide((s) => (images.length ? (s + 1) % images.length : 0));
      if (e.key === "ArrowLeft") setSlide((s) => (images.length ? (s - 1 + images.length) % images.length : 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(6,10,20,0.82)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-xl overflow-hidden"
        style={{ background: COLORS.surface, border: `1px solid ${COLORS.line}` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: `1px solid ${COLORS.line}` }}>
          <h3 className="heading text-lg font-medium">{project.name}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ border: `1px solid ${COLORS.line}`, color: COLORS.muted }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Carousel area */}
        <div className="relative" style={{ aspectRatio: "16 / 10", background: "#0b1220" }}>
          {images.length > 0 ? (
            <img
              src={images[slide]}
              alt={`${project.name} screenshot ${slide + 1}`}
              className="w-full h-full object-cover"
            />
          ) : (
            /* TODO: this placeholder disappears automatically once `images` is populated above */
            <div className="w-full h-full flex flex-col items-center justify-center gap-3" style={{ color: COLORS.muted }}>
              <ImageOff size={28} />
              <p className="text-xs mono">{noImagesText}</p>
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                onClick={() => setSlide((s) => (s - 1 + images.length) % images.length)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(15,23,42,0.7)", color: COLORS.text }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setSlide((s) => (s + 1) % images.length)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(15,23,42,0.7)", color: COLORS.text }}
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 py-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === slide ? 18 : 6,
                  height: 6,
                  borderRadius: 9999,
                  background: i === slide ? COLORS.secondary : COLORS.line,
                  transition: "all .25s ease",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("fr"); // French shown by default per request
  const [activeProject, setActiveProject] = useState(null);
  const c = CONTENT[lang];

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleLang = () => setLang((l) => (l === "en" ? "fr" : "en"));

  return (
    <div
      lang={lang}
      style={{
        background: COLORS.bg,
        color: COLORS.text,
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        /* ── Global edge/scrollbar fix ──
           The restricted, "boxed-in" look on the left/right comes from
           two common culprits: (1) default html/body margin, and (2)
           Vite's default #root rule (max-width: 1280px; margin: 0 auto;
           padding: 2rem;) which every fresh Vite+React app ships with
           in index.css/App.css. Both are neutralized here so the page
           truly runs edge-to-edge regardless of what's left in those
           files. If you still see a gap after this, check App.css /
           index.css for a leftover #root or body max-width rule. */
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
          background: ${COLORS.bg};
        }
        #root {
          max-width: none !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          text-align: initial !important;
        }
        *, *::before, *::after { box-sizing: border-box; }

        ::-webkit-scrollbar { width: 10px; height: 10px; }
        ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.line}; border-radius: 9999px; }
        ::-webkit-scrollbar-thumb:hover { background: ${COLORS.primary}; }
        * { scrollbar-color: ${COLORS.line} ${COLORS.bg}; scrollbar-width: thin; }

        @keyframes blinkCursor { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.55); }
          70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinSlowReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
        }

        .heading { font-family: 'Poppins', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }

        a:focus-visible, button:focus-visible {
          outline: 2px solid ${COLORS.secondary};
          outline-offset: 3px;
        }

        .skill-chip {
          transition: border-color .25s ease, color .25s ease, transform .25s ease;
        }
        .skill-chip:hover {
          border-color: ${COLORS.secondary};
          color: ${COLORS.secondary};
          transform: translateY(-2px);
        }

        .project-card {
          transition: transform .3s ease, border-color .3s ease, background .3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: ${COLORS.primary};
          background: ${COLORS.surfaceHover};
        }

        .nav-link { position: relative; }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -4px;
          width: 0%; height: 1px;
          background: ${COLORS.secondary};
          transition: width .25s ease;
        }
        .nav-link:hover::after { width: 100%; }

        .cta-primary {
          background: ${COLORS.primary};
          transition: background .25s ease, transform .2s ease, box-shadow .25s ease;
        }
        .cta-primary:hover {
          background: ${COLORS.secondary};
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -10px rgba(56,189,248,0.5);
        }
        .cta-secondary {
          transition: border-color .25s ease, color .25s ease, background .25s ease;
        }
        .cta-secondary:hover {
          border-color: ${COLORS.secondary};
          color: ${COLORS.secondary};
          background: rgba(56,189,248,0.06);
        }

        .view-btn {
          transition: opacity .2s ease;
        }
        .view-btn:hover { opacity: .7; }

        .lang-toggle {
          transition: border-color .25s ease, color .25s ease, background .25s ease;
        }
        .lang-toggle:hover {
          border-color: ${COLORS.secondary};
          color: ${COLORS.secondary};
        }
      `}</style>

      {/* ── NAVBAR ───────────────────────────────────────── */}
      <header
  className="fixed top-0 left-0 right-0 z-50"
  style={{
    background: "rgba(15,23,42,0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: `1px solid ${COLORS.line}`,
  }}
>
  <div className="max-w-full px-6 h-16 flex items-center justify-between">
    <button
      onClick={() => scrollTo("home")}
      className="heading text-lg font-semibold tracking-tight"
      style={{ color: COLORS.text }}
    >
      {HANDLE}
      <span style={{ color: COLORS.secondary }}>.</span>
    </button>

    <nav className="hidden md:flex items-center gap-8">
      {c.nav.map((item, i) =>
        CONTENT.en.nav[i].toLowerCase() === "cv" ? (
          <a
            key={item}
            href="cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-sm"
            style={{ color: COLORS.muted }}
          >
            {item}
          </a>
        ) : (
          <button
            key={item}
            onClick={() => scrollTo(CONTENT.en.nav[i].toLowerCase())}
            className="nav-link text-sm"
            style={{ color: COLORS.muted }}
          >
            {item}
          </button>
        )
      )}
    </nav>

    <div className="flex items-center gap-3">
      <button
        onClick={toggleLang}
        className="lang-toggle mono text-xs px-3 py-1.5 rounded-full inline-flex items-center gap-1.5"
        style={{ border: `1px solid ${COLORS.line}`, color: COLORS.text }}
        aria-label="Switch language / Changer de langue"
        title="Switch language / Changer de langue"
      >
        <Languages size={13} />
        {c.langToggleLabel}
      </button>

      <button
        className="md:hidden text-sm mono"
        style={{ color: COLORS.text }}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "×" : "≡"}
      </button>
    </div>
  </div>

  {menuOpen && (
    <div className="md:hidden px-6 pb-5 flex flex-col gap-4" style={{ borderTop: `1px solid ${COLORS.line}` }}>
      {c.nav.map((item, i) =>
        CONTENT.en.nav[i].toLowerCase() === "cv" ? (
          <a
            key={item}
            href="cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-left pt-3"
            style={{ color: COLORS.muted }}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ) : (
          <button
            key={item}
            onClick={() => scrollTo(CONTENT.en.nav[i].toLowerCase())}
            className="text-sm text-left pt-3"
            style={{ color: COLORS.muted }}
          >
            {item}
          </button>
        )
      )}
    </div>
  )}
</header>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="home" className="w-full relative overflow-hidden pt-40 pb-24 px-6">
        <div
          className="absolute pointer-events-none"
          style={{
            width: 560,
            height: 560,
            top: "-10%",
            right: "-10%",
            borderRadius: "9999px",
            background: `radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(59,130,246,0) 70%)`,
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 420,
            height: 420,
            bottom: "-10%",
            left: "-8%",
            borderRadius: "9999px",
            background: `radial-gradient(circle, rgba(56,189,248,0.12) 0%, rgba(56,189,248,0) 70%)`,
          }}
        />

        <div className="max-w-full mx-auto relative grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 mono text-xs tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
              style={{ border: `1px solid ${COLORS.line}`, color: COLORS.muted }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "9999px",
                  background: COLORS.secure,
                  display: "inline-block",
                  animation: "pulseDot 2s infinite",
                }}
              />
              {c.availability}
            </div>

            <p className="text-lg mb-2" style={{ color: COLORS.muted }}>
              {c.greeting}
            </p>

            <h1 className="heading font-semibold leading-[1.08] mb-6" style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)" }}>
              {lang === "en" ? "I " : "Je "}
              <span style={{ color: COLORS.secondary }}>
                <RotatingRole roles={c.roles} />
              </span>
            </h1>

            <p className="text-base leading-relaxed mb-9 max-w-md" style={{ color: COLORS.muted }}>
              {c.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("projects")} className="cta-primary text-white text-sm font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2">
                {c.viewProjects} <ChevronRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="cta-secondary text-sm font-medium px-6 py-3 rounded-lg"
                style={{ border: `1px solid ${COLORS.line}`, color: COLORS.text }}
              >
                {c.contactMe}
              </button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mx-auto flex items-center justify-center" style={{ width: 300, height: 300 }}>
              <div
                className="absolute inset-0 rounded-full"
                style={{ border: `1px dashed ${COLORS.secondary}55`, animation: "spinSlow 30s linear infinite" }}
              />
              <div
                className="absolute rounded-full"
                style={{ inset: 14, border: `1px dashed ${COLORS.primary}44`, animation: "spinSlowReverse 40s linear infinite" }}
              />
              <div
                className="relative rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  width: 220,
                  height: 220,
                  background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
                  animation: "floatY 5s ease-in-out infinite",
                }}
              >
                {/* Your photo. To swap it, just change the `testimage` import at the top of the file. */}
                <img
                  src={testimage}
                  alt="Baudoin Adjadji"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div
                className="absolute bottom-2 right-2 mono text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1.5"
                style={{ background: COLORS.surface, border: `1px solid ${COLORS.line}`, color: COLORS.text }}
              >
                <ShieldCheck size={13} color={COLORS.secure} />
                {c.secureBadge}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section id="about" className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionEyebrow>{c.aboutEyebrow}</SectionEyebrow>
            <h2 className="heading text-3xl md:text-4xl font-semibold mb-8">{c.aboutTitle}</h2>
            <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
              {c.about}
            </p>
          </Reveal>

          <div className="grid grid-cols-3 gap-6 mt-14">
            {c.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div
                  className="text-center rounded-xl px-4 py-8"
                  style={{ background: COLORS.surface, border: `1px solid ${COLORS.line}` }}
                >
                  <div className="heading text-3xl md:text-4xl font-semibold mb-1" style={{ color: COLORS.secondary }}>
                    {s.number}
                  </div>
                  <div className="text-xs md:text-sm" style={{ color: COLORS.muted }}>
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── SKILLS ───────────────────────────────────────── */}
      <section id="skills" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionEyebrow>{c.skillsEyebrow}</SectionEyebrow>
            <h2 className="heading text-3xl md:text-4xl font-semibold mb-12">{c.skillsTitle}</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.skillCategories.map((cat, i) => {
              const Icon = SKILL_ICONS[i] || Code2;
              return (
                <Reveal key={cat.name} delay={i * 80}>
                  <div
                    className="rounded-xl p-6 h-full"
                    style={{ background: COLORS.surface, border: `1px solid ${COLORS.line}` }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: "rgba(59,130,246,0.12)" }}
                    >
                      <Icon size={19} color={COLORS.secondary} />
                    </div>
                    <h3 className="heading text-base font-medium mb-4">{cat.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="skill-chip text-xs px-3 py-1.5 rounded-md"
                          style={{ border: `1px solid ${COLORS.line}`, color: COLORS.muted }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── PROJECTS ─────────────────────────────────────── */}
      <section id="projects" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionEyebrow>{c.projectsEyebrow}</SectionEyebrow>
            <h2 className="heading text-3xl md:text-4xl font-semibold mb-12">{c.projectsTitle}</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {c.projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div
                  className="project-card rounded-xl overflow-hidden h-full flex flex-col"
                  style={{ background: COLORS.surface, border: `1px solid ${COLORS.line}` }}
                >
                  <div
                    className="h-2"
                    style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})` }}
                  />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="heading text-xl font-medium">{p.name}</h3>
                      <span className="mono text-[10px] uppercase tracking-wider px-2 py-1 rounded" style={{ color: COLORS.secondary, background: "rgba(56,189,248,0.1)" }}>
                        {p.type}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: COLORS.muted }}>
                      {p.description}
                    </p>

                    {p.features.length > 0 && (
                      <ul className="grid grid-cols-2 gap-1.5 mb-5">
                        {p.features.map((f) => (
                          <li key={f} className="text-xs flex items-center gap-1.5" style={{ color: COLORS.muted }}>
                            <span style={{ width: 4, height: 4, borderRadius: 9999, background: COLORS.secure, display: "inline-block" }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tech.map((t) => (
                        <span key={t} className="mono text-[11px] px-2.5 py-1 rounded" style={{ border: `1px solid ${COLORS.line}`, color: COLORS.text }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-5 pt-4" style={{ borderTop: `1px solid ${COLORS.line}` }}>
                      {/* "View" opens the screenshot modal instead of linking to a live site */}
                      <button
                        onClick={() => setActiveProject(p)}
                        className="view-btn text-xs inline-flex items-center gap-1.5"
                        style={{ color: COLORS.secondary }}
                      >
                        <Eye size={13} /> {c.viewProject}
                      </button>
                      <a href="#" className="view-btn text-xs inline-flex items-center gap-1.5" style={{ color: COLORS.secondary }}>
                        <FaGithub size={13} /> {c.source}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── CERTIFICATIONS ───────────────────────────────── */}
      <section id="certifications" className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionEyebrow>{c.certsEyebrow}</SectionEyebrow>
            <h2 className="heading text-3xl md:text-4xl font-semibold mb-12">{c.certsTitle}</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {c.certifications.map((cert, i) => (
              <Reveal key={cert.name} delay={i * 100}>
                <div
                  className="rounded-xl p-6 flex items-start gap-4"
                  style={{ background: COLORS.surface, border: `1px solid ${COLORS.line}` }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(34,197,94,0.12)" }}>
                    <ShieldCheck size={18} color={COLORS.secure} />
                  </div>
                  <div>
                    <h3 className="heading text-sm font-medium mb-1">{cert.name}</h3>
                    <p className="text-xs" style={{ color: COLORS.muted }}>{cert.issuer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <SectionEyebrow>{c.contactEyebrow}</SectionEyebrow>
            <h2 className="heading text-3xl md:text-4xl font-semibold mb-4">{c.contactTitle}</h2>
            <p className="text-sm mb-10 max-w-2xl mx-auto" style={{ color: COLORS.muted, textAlign: "center" }}>
                       {c.contactText}
            </p> <br />

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="cta-primary text-white text-sm font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2"
              >
                <Mail size={16} /> {c.emailMe}
              </a>
              <a
                href="https://www.linkedin.com/in/baudoin-adjadji-a939052b4/"
                className="cta-secondary text-sm font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2"
                style={{ border: `1px solid ${COLORS.line}`, color: COLORS.text }}
              >
                <FaLinkedin size={16} /> {c.linkedin}
              </a>
              <a
                href="https://github.com/baudoindev"
                className="cta-secondary text-sm font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2"
                style={{ border: `1px solid ${COLORS.line}`, color: COLORS.text }}
              >
                <FaGithub size={16} /> {c.github}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="px-6 py-8" style={{ borderTop: `1px solid ${COLORS.line}` }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs" style={{ color: COLORS.muted }}>
            © 2026 {NAME}. {c.footerRights}
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/baudoindev" aria-label="GitHub" style={{ color: COLORS.muted }}>
              <FaGithub size={16} />
            </a>
            <a href="https://www.linkedin.com/in/baudoin-adjadji-a939052b4/" aria-label="LinkedIn" style={{ color: COLORS.muted }}>
              <FaLinkedin size={16} />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" style={{ color: COLORS.muted }}>
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>

      {/* ── PROJECT MODAL ────────────────────────────────── */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          noImagesText={c.modalNoImages}
          viewLabel={c.viewProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}