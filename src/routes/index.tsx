import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Moon,
  Sun,
  Leaf,
  Heart,
  Menu,
  X,
  Plus,
  Minus,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Icon } from "lucide-react";
import { teddyBear } from "@lucide/lab";
import heroImage from "@/assets/hero-mother-baby.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Binky & Blanket Care — Soft support for new beginnings" },
      {
        name: "description",
        content:
          "Warm, professional postpartum and newborn care. Overnight support, daytime help, nursery preparation, and intensive care for growing families.",
      },
      { property: "og:title", content: "Binky & Blanket Care" },
      {
        property: "og:description",
        content: "Soft support for new beginnings — postpartum and newborn care.",
      },
    ],
  }),
  component: Home,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />
      <main>
        <Hero />
        <HowICanHelp />
        <Services />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-18 py-4 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2.5 min-w-0">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/30 ring-1 ring-primary/40">
            <Heart className="h-5 w-5 text-accent" fill="currentColor" />
          </span>
          <span className="font-display text-lg sm:text-xl tracking-tight text-accent truncate">
            Binky &amp; Blanket Care
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-foreground/75 hover:text-accent transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold shadow-[var(--shadow-soft)] hover:opacity-90 transition"
          >
            Free Consultation
          </a>
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden rounded-full p-2 hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-card">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-base text-foreground/85 hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold"
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-accent/80">
            <Sparkles className="h-3.5 w-3.5" />
            Soft support for new beginnings
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-accent">
            Welcome to{" "}
            <span className="italic text-foreground">Binky &amp; Blanket Care</span>
          </h1>
          <p className="mt-5 text-lg text-foreground/80 max-w-xl">
            Soft, steady postpartum and newborn care for families who deserve
            rest, reassurance, and support.
          </p>
          <div className="mt-6 space-y-4 text-foreground/75 max-w-xl leading-relaxed">
            <p>
              The postpartum journey can be beautiful, exhausting, emotional,
              and overwhelming — all at the same time.
            </p>
            <p>
              At Binky &amp; Blanket Care, I provide practical, educational,
              and emotional support so families can focus on healing, bonding,
              and adjusting to life with their new baby.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold shadow-[var(--shadow-cozy)] hover:opacity-90 transition"
            >
              Request Support
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full bg-secondary text-foreground px-7 py-3.5 text-sm font-semibold border border-border/70 hover:bg-muted transition"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative">
          <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 rounded-full bg-primary/40" />
          <div className="pointer-events-none absolute -bottom-6 -right-4 h-32 w-32 rounded-full bg-accent/15" />
          <div className="pointer-events-none absolute top-1/3 -right-10 h-16 w-16 rounded-full bg-secondary" />

          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-cozy)] ring-1 ring-border/60 bg-card aspect-[4/5]">
            <img
              src={heroImage}
              alt="A mother gently cradling her newborn wrapped in a cream knit blanket"
              className="h-full w-full object-cover"
              width={1280}
              height={1280}
            />
            <span className="sr-only">Add warm newborn/family photo here.</span>
          </div>

          <div className="absolute -bottom-6 left-6 sm:left-10 rounded-2xl bg-card px-5 py-4 shadow-[var(--shadow-soft)] ring-1 ring-border/70 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/40">
              <Moon className="h-5 w-5 text-accent" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Trusted, gentle care
              </div>
              <div className="text-sm font-semibold text-accent">
                6+ years supporting families
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- How I Can Help ---------------- */
function HowICanHelp() {
  const cards = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Practical Support",
      text: "Giving parents the opportunity to rest while knowing their baby is cared for with love and attention.",
      list: [
        "Newborn care",
        "Diapering",
        "Bottle preparation",
        "Feeding support",
        "Burping",
        "Soothing techniques",
        "Sleep routines",
        "Light baby-related organization",
        "Nursery preparation",
      ],
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Informational Support",
      text: "Calm guidance for first-time parents and growing families navigating newborn routines, feeding questions, sleep patterns, and daily care.",
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: "Emotional Support",
      text: "A calm, non-judgmental presence during an intense transition. Postpartum recovery is not always easy, and families deserve to feel supported through it.",
    },
  ];

  return (
    <section id="help" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.18em] text-accent/70">
            How I Can Help
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-accent">
            How I Can Help Your Family
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            Gentle, hands-on care that gives parents space to rest, recover,
            and feel more confident during the postpartum season.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group rounded-[2rem] bg-card p-8 ring-1 ring-border/60 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-cozy)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-primary/30 text-accent">
                {c.icon}
              </span>
              <h3 className="mt-6 font-display text-2xl text-accent">
                {c.title}
              </h3>
              <p className="mt-3 text-foreground/75 leading-relaxed">{c.text}</p>
              {c.list && (
                <ul className="mt-5 grid grid-cols-1 gap-2">
                  {c.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/75"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    {
      icon: <Moon className="h-6 w-6" />,
      title: "Overnight Newborn Care",
      price: "$45–50/hour",
      minimum: "9-hour shift · 3 shifts per week",
      description:
        "Overnight support allows parents to rest while I care for the baby throughout the night.",
      includes: [
        "Feeding support",
        "Bottle preparation",
        "Diaper changes",
        "Soothing and settling",
        "Sleep tracking",
        "Parent updates",
        "Laundry",
      ],
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Daytime Support",
      price: "$40/hour",
      minimum: "9-hour shift · 3 shifts per week",
      description:
        "Daytime care is perfect for families who need recovery support, extra hands, or reassurance during the day.",
      includes: [
        "Recovery support",
        "Extra hands during the day",
        "First-time parents",
        "Families with multiple children",
      ],
    },
    {
      icon: <Icon iconNode={teddyBear} className="h-6 w-6" />,
      title: "Nursery Preparation",
      price: "Starting at $350 flat rate",
      description:
        "Preparing your baby's space before arrival so the transition home feels smoother and more organized.",
      includes: [
        "Washing baby clothing",
        "Sanitizing bottles and accessories",
        "Organizing nursery essentials",
        "Setting up changing stations",
        "Preparing feeding stations",
        "Creating a functional newborn environment",
      ],
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Intensive Postpartum Care",
      price: "Custom Packages Available",
      description:
        "Personalized support plans for families needing more comprehensive care.",
      note: "Please inquire for pricing and availability.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.18em] text-accent/70">
            Services
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-accent">
            Care, shaped around your family
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            Flexible postpartum care designed around your family's needs,
            schedule, and season of life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-[2rem] bg-card p-8 ring-1 ring-border/60 shadow-[var(--shadow-soft)] flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-primary/30 text-accent">
                  {s.icon}
                </span>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Investment
                  </div>
                  <div className="font-display text-accent text-lg">
                    {s.price}
                  </div>
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl text-accent">
                {s.title}
              </h3>
              {s.minimum && (
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  Minimum · {s.minimum}
                </div>
              )}
              <p className="mt-4 text-foreground/75 leading-relaxed">
                {s.description}
              </p>
              {s.includes && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.includes.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground/75"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              )}
              {s.note && (
                <p className="mt-5 text-sm italic text-muted-foreground">
                  {s.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[2.5rem] bg-card p-8 sm:p-10 ring-1 ring-border/60 shadow-[var(--shadow-soft)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl text-accent">
              Not sure which service fits your family?
            </h3>
            <p className="mt-2 text-foreground/70">
              Let's chat — every family's season looks a little different.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex justify-center items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold shadow-[var(--shadow-soft)] hover:opacity-90 transition shrink-0"
          >
            Request a Free Consultation
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  const training = [
    "Certified Postpartum Birthworker — Cornerstone Birthwork Training",
    "Montessori Certification",
    "Sleep Training Education",
    "Early Childhood Development Certification",
    "Degree in Law",
    "Currently pursuing nursing education",
  ];

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
        {/* Portrait placeholder */}
        <div className="relative order-first lg:order-last">
          <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/40" />
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-accent/15" />
          <div className="relative rounded-[2.5rem] overflow-hidden ring-1 ring-border/60 shadow-[var(--shadow-cozy)] aspect-[4/5] bg-gradient-to-br from-secondary to-muted grid place-items-center">
            <div className="text-center px-6">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/40 text-accent">
                <Heart className="h-7 w-7" />
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Image placeholder
              </p>
              <p className="mt-1 font-display text-xl text-accent">
                Add Kamilla photo here
              </p>
            </div>
          </div>

          {/* Training card */}
          <div className="mt-8 rounded-[2rem] bg-card p-7 ring-1 ring-border/60 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/30 text-accent">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl text-accent">
                Professional Training
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {training.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.18em] text-accent/70">
            About Kamilla
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-accent">
            Caring for Mothers. Supporting Families.
          </h2>

          <blockquote className="mt-7 rounded-[1.75rem] bg-secondary/60 ring-1 ring-border/60 p-6 sm:p-7">
            <p className="font-display italic text-xl sm:text-2xl text-accent leading-snug">
              "I believe postpartum care begins with caring for the mother.
              When mothers are supported, families thrive."
            </p>
          </blockquote>

          <div className="mt-7 space-y-5 text-foreground/80 leading-relaxed">
            <p>Hi, I'm Kamilla!</p>
            <p>
              I was born and raised in Brazil in a large, loving family where
              caring for one another was simply part of everyday life. One of my
              greatest inspirations was my grandmother, a traditional midwife,
              who shared generations of wisdom and practical newborn care
              knowledge with our family. Many of the nurturing instincts I
              carry today began with her teachings.
            </p>
            <p>
              My passion for postpartum care became deeply personal when I
              helped support my own mother through postpartum depression.
              Witnessing the emotional, physical, and mental challenges that
              can accompany the postpartum period opened my eyes to how much
              support mothers truly need during this vulnerable transition.
            </p>
            <p>
              That experience led me to dedicate my career to postpartum and
              newborn care, always keeping one belief at the center of my work:
              when we care for the mother, we care for the entire family.
            </p>
            <p>
              I do not romanticize postpartum recovery. While welcoming a baby
              can be joyful, it can also be overwhelming, exhausting, lonely,
              and emotionally demanding. My goal is to help families carry that
              load by providing compassionate, practical, and evidence-based
              support so parents never feel they have to navigate this season
              alone.
            </p>
            <p>
              Over the past 6+ years, I have worked internationally with
              families from diverse cultural backgrounds, parenting styles, and
              family structures. These experiences have taught me that every
              family is unique and deserves individualized support that honors
              their values and needs.
            </p>
            <p>
              My mission is simple: to provide the steady, nurturing support
              that allows parents to rest, recover, build confidence, and enjoy
              more meaningful moments with their growing family.
            </p>
            <p className="font-display italic text-accent text-lg">
              You don't have to carry the postpartum journey alone. Let me help
              lighten the load. I look forward to supporting you during this
              beautiful and transformative chapter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    {
      q: "What is postpartum care?",
      a: "Postpartum care is support for families after the birth of a baby. I help with newborn care, parent recovery, and emotional adjustment during this transition period.",
    },
    {
      q: "What services do you offer?",
      a: "I offer overnight newborn care, daytime newborn support, nursery preparation before baby arrives, intensive postpartum care packages, and emotional, informational, and practical support for new parents.",
    },
    {
      q: "What is the minimum booking requirement?",
      a: "The minimum booking is 9-hour shifts, at least 3 times per week. This helps create consistency and better support for both baby and parents.",
    },
    {
      q: "How do you support families?",
      a: "I support families in three main ways: practical support, informational support, and emotional support. Practical support includes newborn care, diapering, feeding support, sleep routines, and helping parents rest. Informational support includes guidance for first-time parents, newborn behavior education, and answering day-to-day questions. Emotional support means offering a calm, non-judgmental presence during the postpartum period. I do not romanticize postpartum recovery — I understand it can be physically and emotionally intense. My role is to help carry that load so parents can rest and recover.",
    },
    {
      q: "What is included in nursery preparation?",
      a: "Nursery preparation includes organizing the baby's space before arrival, washing and sanitizing baby clothes, linens, bottles, and basic setup to make the transition home smoother.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.18em] text-accent/70">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-accent">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {items.map((it, idx) => {
            const open = openIdx === idx;
            return (
              <div
                key={it.q}
                className="rounded-[1.75rem] bg-card ring-1 ring-border/60 shadow-[var(--shadow-soft)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(open ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 sm:px-8 py-5 sm:py-6"
                  aria-expanded={open}
                >
                  <span className="font-display text-lg sm:text-xl text-accent">
                    {it.q}
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/30 text-accent">
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {open && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-7 text-foreground/75 leading-relaxed">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-start">
        <div className="lg:sticky lg:top-28">
          <span className="text-xs uppercase tracking-[0.18em] text-accent/70">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-accent">
            Schedule a Free Consultation
          </h2>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Tell me a little about your family, your due date or baby's age,
            and what kind of support you are looking for. I'll follow up to
            discuss availability and next steps.
          </p>

          <div className="mt-8 rounded-[1.75rem] bg-secondary/60 ring-1 ring-border/60 p-6 grid place-items-center aspect-[4/3]">
            <div className="text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/40 text-accent">
                <Leaf className="h-6 w-6" />
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Image placeholder
              </p>
              <p className="font-display text-lg text-accent">
                Soft nursery / baby detail
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-[2.5rem] bg-card ring-1 ring-border/60 shadow-[var(--shadow-cozy)] p-7 sm:p-10"
        >
          {sent ? (
            <div className="text-center py-10">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/40 text-accent">
                <Heart className="h-6 w-6" fill="currentColor" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-accent">
                Thank you, your request has been received.
              </h3>
              <p className="mt-3 text-foreground/75">
                I'll reach out personally within 1–2 days to talk about your
                family's needs.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First Name" name="firstName" required />
              <Field label="Last Name" name="lastName" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone Number" name="phone" type="tel" />
              <Field
                label="Location / Neighborhood"
                name="location"
                className="sm:col-span-2"
              />
              <Field
                label="Expected Due Date or Baby's Age"
                name="due"
                className="sm:col-span-2"
              />

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-accent mb-2">
                  Which service are you interested in?{" "}
                  <span className="text-accent/60">*</span>
                </label>
                <select
                  required
                  defaultValue=""
                  name="service"
                  className="w-full rounded-2xl bg-background border border-border px-5 py-3.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                >
                  <option value="" disabled>
                    Select an option…
                  </option>
                  <option>Overnight Newborn Care</option>
                  <option>Daytime Support</option>
                  <option>Nursery Preparation</option>
                  <option>Intensive Postpartum Care</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-accent mb-2">
                  How can I support your family?{" "}
                  <span className="text-accent/60">*</span>
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Share a little about your family, your hopes, and any questions…"
                  className="w-full rounded-2xl bg-background border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
                />
              </div>

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold shadow-[var(--shadow-cozy)] hover:opacity-90 transition"
                >
                  Request Consultation
                  <ChevronRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-xs text-muted-foreground">
                  * Required fields. Your information stays private.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-accent mb-2"
      >
        {label} {required && <span className="text-accent/60">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl bg-background border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
      />
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/30 ring-1 ring-primary/40">
              <Heart className="h-5 w-5 text-accent" fill="currentColor" />
            </span>
            <span className="font-display text-xl text-accent">
              Binky &amp; Blanket Care
            </span>
          </div>
          <p className="mt-4 font-display italic text-accent/80">
            "Soft support for new beginnings"
          </p>
          <p className="mt-3 text-sm text-foreground/70 max-w-sm">
            Postpartum and newborn care support for growing families.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent">Explore</h4>
          <ul className="mt-4 space-y-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-foreground/75 hover:text-accent transition"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-accent">Get in touch</h4>
          <p className="mt-4 text-sm text-foreground/75">
            Ready when you are. Reach out for a free consultation and we'll
            find the right fit for your family.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
          >
            Free Consultation
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 text-xs text-muted-foreground text-center">
          © 2026 Binky &amp; Blanket Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
