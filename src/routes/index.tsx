import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Menu, X, Play, ArrowRight, ArrowUpRight, Film, PenLine, Clapperboard,
  Scissors, Sparkles, Check, Star, Instagram, Youtube, Linkedin, Mail, Phone, MapPin,
} from "lucide-react";

import heroStudio from "@/assets/hero-studio.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ---------- Navbar ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
            <Film className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl tracking-wide">REELCRAFT</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              style={{ fontFamily: "var(--font-grotesk)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:gap-3 hover:shadow-[0_8px_0_0_var(--color-foreground)]"
          >
            Book a Call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-md border border-border p-2"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Book a Call <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 grain">
      {/* Geometric accents */}
      <div className="pointer-events-none absolute -top-10 -left-16 h-64 w-64 rounded-full border-2 border-primary/30" />
      <div className="pointer-events-none absolute bottom-20 right-8 h-40 w-40 border-2 border-foreground/10 rotate-12" />
      <div className="pointer-events-none absolute top-40 right-1/3 h-2 w-24 bg-primary/70" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-8 lg:gap-16">
        <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-center fade-up">
          <div className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-foreground/20 bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-primary pulse-dot" />
            Now booking Q1 productions
          </div>
          <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Your Content Deserves
            <span className="block text-primary italic">Cinematic Storytelling.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg" style={{ fontFamily: "var(--font-plex)" }}>
            We help founders and creators produce high-quality videos through scripting,
            shooting, editing and post-production that grow audiences and drive business.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-primary"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-foreground/80 px-6 py-3.5 text-sm font-semibold transition-all hover:border-primary hover:text-primary"
            >
              <Play className="h-4 w-4 fill-current" />
              View Portfolio
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              <span className="ml-1">4.9 from 120+ clients</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span>200M+ views generated</span>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-6 fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl border-2 border-primary translate-x-3 translate-y-3" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-foreground bg-black">
              <img
                src={heroStudio}
                alt="Cinematic studio production"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <button className="group absolute inset-0 grid place-items-center" aria-label="Play showreel">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="h-8 w-8 fill-current translate-x-0.5" />
                </span>
              </button>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs uppercase tracking-widest text-white">
                <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">Showreel · 2025</span>
                <span className="font-mono">01:42</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 border-y border-border/60 py-5 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap gap-16 font-display text-3xl md:text-4xl">
          {[...Array(2)].flatMap((_, r) =>
            ["Script", "★", "Shoot", "★", "Edit", "★", "Color", "★", "Sound", "★", "Deliver", "★"].map((w, i) => (
              <span key={`${r}-${i}`} className={w === "★" ? "text-primary" : "text-foreground/80"}>{w}</span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const services = [
    { icon: PenLine, title: "Script Writing", desc: "Story-first scripts engineered for hooks, retention and conversions across every platform." },
    { icon: Sparkles, title: "Pre-Production", desc: "Concepts, storyboards, shot lists, locations and casting — everything ready before we roll." },
    { icon: Clapperboard, title: "Production", desc: "Cinema cameras, expert crews and directors who know how to get performances on camera." },
    { icon: Scissors, title: "Video Editing", desc: "Pacing, cuts and rhythm that hold attention from the first frame to the final CTA." },
    { icon: Film, title: "Post Production", desc: "Color grading, sound design, motion graphics and delivery ready for any channel." },
  ];
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              — What we do
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] max-w-2xl">
              End-to-end video, <span className="text-primary italic">handled.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground" style={{ fontFamily: "var(--font-plex)" }}>
            One team from the first idea to the final export. No juggling freelancers, no messy handoffs — just cinematic content that ships on time.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="retro-border group relative flex flex-col gap-5 rounded-xl bg-card p-7"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="font-display text-3xl">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          ))}
          <a
            href="#contact"
            className="relative flex flex-col justify-between gap-5 rounded-xl bg-primary p-7 text-primary-foreground transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary-foreground text-primary">
                <Sparkles className="h-6 w-6" />
              </span>
              <span className="font-mono text-xs opacity-70">→</span>
            </div>
            <div>
              <h3 className="font-display text-3xl leading-tight">Not sure what you need?</h3>
              <p className="mt-2 text-sm opacity-90">Let's map out the perfect production plan for your brand.</p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              Book a free strategy call <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Portfolio ---------- */
function Portfolio() {
  const items = [
    { img: p1, title: "Founder Story · SaaS", tag: "Brand Film", dur: "2:14" },
    { img: p2, title: "Product Launch Campaign", tag: "Commercial", dur: "0:45" },
    { img: p3, title: "Creator Documentary", tag: "Docu-Series", dur: "6:30" },
    { img: p4, title: "Fashion Editorial", tag: "Campaign", dur: "1:20" },
    { img: p5, title: "Podcast Series", tag: "Studio", dur: "12 eps" },
    { img: p6, title: "Coach Content System", tag: "Social", dur: "24 clips" },
  ];
  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">— Selected work</div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] max-w-2xl">
              Frames we're <span className="text-primary italic">proud of.</span>
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary">
            View more work <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <a
              key={i}
              href="#contact"
              className="group relative block overflow-hidden rounded-xl border-2 border-foreground bg-black aspect-[4/3]"
            >
              <img
                src={it.img}
                alt={it.title}
                width={1024}
                height={640}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  <Play className="h-6 w-6 fill-current translate-x-0.5" />
                </span>
              </div>
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  {it.tag}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <h3 className="font-display text-2xl leading-tight">{it.title}</h3>
                <span className="font-mono text-xs opacity-80">{it.dur}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-7 py-3.5 text-sm font-semibold transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            View More Work <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  const plans = [
    {
      name: "Growth",
      desc: "For creators & founders starting to build in public.",
      price: "$1,800",
      unit: "/ month",
      features: ["8 short-form videos", "1 round of revisions", "Basic color & sound", "Captions & thumbnails", "48h turnaround"],
      popular: false,
    },
    {
      name: "Growth Plus",
      desc: "Our most-loved package for scaling brands.",
      price: "$3,600",
      unit: "/ month",
      features: ["16 short-form + 2 long-form", "2 rounds of revisions", "Cinematic color & sound", "Motion graphics package", "Dedicated editor & PM", "24h turnaround"],
      popular: true,
    },
    {
      name: "Growth Pro",
      desc: "Full-production partner for premium brands.",
      price: "$7,500",
      unit: "/ month",
      features: ["Full monthly shoot day", "Unlimited short-form edits", "Long-form + ads suite", "Strategy & content system", "On-call producer", "Priority everything"],
      popular: false,
    },
  ];
  return (
    <section id="pricing" className="relative py-24 md:py-32 grain">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">— Pricing</div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            Simple packages. <span className="text-primary italic">Cinematic output.</span>
          </h2>
          <p className="mt-5 text-muted-foreground" style={{ fontFamily: "var(--font-plex)" }}>
            Month-to-month, no long lock-ins. Upgrade, pause or downgrade anytime.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-2xl bg-card p-8 transition-transform ${
                p.popular
                  ? "border-2 border-primary shadow-[10px_10px_0_0_var(--color-primary)] lg:scale-105 lg:-translate-y-2 z-10"
                  : "border-2 border-foreground shadow-[6px_6px_0_0_var(--color-foreground)] hover:-translate-y-1"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-4xl">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="my-6 flex items-baseline gap-2 border-y border-border py-6">
                <span className="font-display text-5xl">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.unit}</span>
              </div>
              <ul className="mb-8 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className={`mt-0.5 grid h-5 w-5 place-items-center rounded-full ${p.popular ? "bg-primary text-primary-foreground" : "bg-foreground text-background"}`}>
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
                  p.popular
                    ? "bg-primary text-primary-foreground hover:shadow-[0_6px_0_0_var(--color-foreground)]"
                    : "bg-foreground text-background hover:bg-primary"
                }`}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function useCounter(target: number, duration = 1600) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            setVal(Math.floor(target * (1 - Math.pow(1 - t, 3))));
            if (t < 1) requestAnimationFrame(tick);
            else setVal(target);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);
  return { val, ref };
}

function Stat({ n, suffix, label }: { n: number; suffix: string; label: string }) {
  const { val, ref } = useCounter(n);
  return (
    <div className="border-t-2 border-foreground pt-4">
      <div className="font-display text-5xl md:text-6xl leading-none">
        <span ref={ref}>{val.toLocaleString()}</span>
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8 lg:gap-16">
        <div className="md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 border-2 border-primary translate-x-3 translate-y-3 rounded-xl" />
            <img
              src={aboutTeam}
              alt="Reelcraft team at work"
              width={1200}
              height={1400}
              loading="lazy"
              className="relative rounded-xl border-2 border-foreground object-cover aspect-[4/5] w-full"
            />
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">— About us</div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            A studio built for <span className="text-primary italic">founders who film.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl" style={{ fontFamily: "var(--font-plex)" }}>
            Reelcraft was founded by directors and editors who spent a decade making ads for
            Fortune 500s — and got tired of watching brilliant founders produce forgettable content.
            We bring cinematic craft to personal brands, coaches and startups who actually
            have something to say.
          </p>
          <p className="mt-4 text-muted-foreground max-w-xl" style={{ fontFamily: "var(--font-plex)" }}>
            One embedded team. Every stage of production. Zero drama.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            <Stat n={420} suffix="+" label="Projects Completed" />
            <Stat n={140} suffix="+" label="Happy Clients" />
            <Stat n={9} suffix="yrs" label="Experience" />
            <Stat n={200} suffix="M+" label="Views Generated" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Enquiry ---------- */
function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!String(fd.get("name") || "").trim()) errs.name = "Please enter your name.";
    const phone = String(fd.get("phone") || "").trim();
    if (!phone || phone.length < 6) errs.phone = "Please enter a valid phone number.";
    if (!String(fd.get("message") || "").trim()) errs.message = "Tell us a little about your project.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-foreground py-24 text-background md:py-32 grain">
      <div className="pointer-events-none absolute top-10 left-10 h-72 w-72 rounded-full border-2 border-primary/40" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-40 w-40 border-2 border-background/10 rotate-12" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-1 w-32 bg-primary" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">— Let's talk</div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            Ready to make something <span className="text-primary italic">unforgettable?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-background/70" style={{ fontFamily: "var(--font-plex)" }}>
            Tell us about your brand and goals. We'll get back with a tailored plan and quote.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl bg-background p-6 text-foreground shadow-2xl md:p-10 border-2 border-primary">
          {submitted ? (
            <div className="py-16 text-center">
              <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="font-display text-4xl">Message received.</h3>
              <p className="mt-3 text-muted-foreground">
                We'll be in touch within 24 hours. In the meantime, keep creating.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name*" name="name" placeholder="Jane Founder" error={errors.name} />
                <Field label="Phone Number*" name="phone" type="tel" placeholder="+1 555 000 0000" error={errors.phone} />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Preferred Time to Contact" name="time" placeholder="Weekdays, 10am–4pm EST" />
                <Field label="Business / Brand Name" name="brand" placeholder="Optional" />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Tell us about your project*
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="What are you making? What's the goal? Any references?"
                  className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
                />
                {errors.message && <p className="mt-1 text-xs text-primary">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-[0_8px_0_0_var(--color-foreground)]"
              >
                Let's Build Something Amazing
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                We typically respond within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, error,
}: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15"
      />
      {error && <p className="mt-1 text-xs text-primary">{error}</p>}
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-black text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
                <Film className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl tracking-wide text-white">REELCRAFT</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              A full-service video production studio helping founders, creators and brands
              tell stories that convert.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition-colors hover:bg-primary hover:border-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home","Portfolio","Pricing","About","Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Script Writing","Pre-Production","Production","Video Editing","Post Production"].map((l) => (
                <li key={l}><a href="#services" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary" /> hello@reelcraft.studio</li>
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +1 (555) 010-2040</li>
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Brooklyn, NY · Remote worldwide</li>
            </ul>
          </div>
        </div>

        <div className="marquee-line mt-14 mb-6" />
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Reelcraft Studio. All rights reserved.</p>
          <p>Made with cinematic obsession · Est. 2016</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <About />
        <Enquiry />
      </main>
      <Footer />
    </div>
  );
}
