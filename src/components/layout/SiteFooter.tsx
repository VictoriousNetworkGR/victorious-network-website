"use client";

import { navItems } from "@/content/home";
import { navItemsEl } from "@/content/home-el";
import { closing } from "@/content/home";
import { closingEl } from "@/content/home-el";
import { useLanguage } from "@/components/providers/LanguageProvider";

const signalsEn = ["AI Storytelling", "Robotics", "Media", "Culture", "Market Impact"];
const signalsEl = ["AI Αφήγηση", "Ρομποτική", "Media", "Πολιτισμός", "Αντίκτυπος"];
const contactHrefs = new Set(["#contact"]);
const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/victoriousnetwork/" },
  { label: "Instagram", href: "https://www.instagram.com/victorious.network/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/victorious-network/posts/?feedView=all" },
] as const;

export function SiteFooter() {
  const { language } = useLanguage();
  const greek = language === "el";
  const currentNav = (greek ? navItemsEl : navItems).filter(
    (item) => !contactHrefs.has(item.href),
  );
  const contact = greek ? closingEl.contact : closing.contact;
  const signals = greek ? signalsEl : signalsEn;
  const contactCta = greek ? "Στείλτε brief" : "Submit a brief";

  return (
    <footer className="relative overflow-hidden border-t border-gold/20 bg-transparent px-5 pb-8 pt-20 text-paper sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_18%_0%,rgba(212,175,55,0.15),transparent_44%),radial-gradient(ellipse_at_82%_0%,rgba(9,20,38,0.78),transparent_48%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold">
              {greek ? "AI · Robotics · Media · Market Presence" : "AI · Robotics · Media · Market Presence"}
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.94] text-paper sm:text-7xl">
              {greek ? "Η καινοτομία αξίζει " : "Innovation deserves "}
              <span className="italic text-gold">
                {greek ? "σκηνή, φωνή και αγορά." : "a stage, a voice and a market."}
              </span>
            </h2>
          </div>
          <a href={greek ? closingEl.cta.href : closing.cta.href} data-cursor="Connect" data-magnetic className="group inline-flex w-fit items-center gap-5 border border-gold/45 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-champagne transition hover:bg-gold hover:text-ink">
            {contactCta}
            <span className="h-px w-10 bg-current transition group-hover:w-14" />
          </a>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-[1.05fr_0.85fr_0.9fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-4">
              <img src="/assets/vn-emblem-gold.png" alt="Victorious Network" className="h-14 w-auto" width={360} height={140} />
              <span className="border-l border-gold/25 pl-4">
                <span className="block font-serif text-xl">Victorious Network</span>
                <span className="mt-1 block text-[0.58rem] uppercase tracking-[0.26em] text-gold/70">AI · PR · Robotics · Media</span>
              </span>
            </a>
            <p className="mt-7 max-w-md text-sm leading-7 text-platinum/55">
              {greek
                ? "AI-driven επικοινωνία, ρομποτική παρουσία και premium media για brands που θέλουν να γίνουν ορατά, κατανοητά και αξέχαστα."
                : "AI-driven communications, robotics presence and premium media for brands that need to become visible, understood and remembered."}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.62rem] uppercase tracking-[0.18em] text-platinum/42">
              {signals.map((signal, index) => (
                <span key={signal} className="flex items-center gap-4">
                  {signal}
                  {index < signals.length - 1 ? <span className="h-1 w-1 rotate-45 bg-gold/55" /> : null}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">{greek ? "Δομή" : "Structure"}</p>
            <div className="mt-6 grid gap-3">
              {currentNav.map((item) => (
                <a key={item.href} href={item.href} className="group flex items-center justify-between border-b border-white/8 pb-3 text-sm text-platinum/58 transition hover:text-gold">
                  {item.label}
                  <span className="text-gold/35 transition group-hover:translate-x-1 group-hover:text-gold">→</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">{greek ? "Επικοινωνία" : "Contact"}</p>
            <a href={`mailto:${contact.email}`} data-cursor="Email" className="mt-6 block font-serif text-xl text-paper transition hover:text-gold">{contact.email}</a>
            <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="mt-3 block text-sm text-platinum/58 transition hover:text-gold">{contact.phone}</a>
            <p className="mt-3 text-sm leading-6 text-platinum/48">
              {contact.address}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-platinum/48">
              {greek ? "Briefs για AI experiences, media παραγωγή, ρομποτική παρουσία και εμπορική στρατηγική." : "Briefs for AI experiences, media production, robotics presence and commercial strategy."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-gold/20 px-3 py-2 text-[0.62rem] uppercase tracking-[0.16em] text-platinum/50 transition hover:border-gold/60 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/8 pt-6 text-[0.62rem] uppercase tracking-[0.14em] text-platinum/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Victorious Network</p>
          <p>{greek ? "Human-led AI · Culture · Impact" : "Human-led AI · Culture · Impact"}</p>
        </div>
      </div>
    </footer>
  );
}
