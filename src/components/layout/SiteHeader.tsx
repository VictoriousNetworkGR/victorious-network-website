"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { navItems } from "@/content/home";
import { navItemsEl } from "@/content/home-el";

const contactHrefs = new Set(["#contact"]);

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const greek = language === "el";
  const currentNav = (greek ? navItemsEl : navItems).filter(
    (item) => !contactHrefs.has(item.href),
  );
  const contactLabel = greek ? "Επικοινωνία" : "Contact";
  const menuLabel = greek ? "Άνοιγμα πλοήγησης" : "Open navigation";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/15 bg-[linear-gradient(180deg,rgba(5,5,7,0.92),rgba(5,5,7,0.46)_72%,transparent)] backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl">
        <nav className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-3 sm:px-6 lg:px-8">
          <a href="#home" aria-label="Victorious Network" className="group flex min-w-0 items-center">
            <span className="relative grid h-12 w-20 shrink-0 place-items-center overflow-hidden sm:h-14 sm:w-24">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(212,175,55,0.18),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
              <img
                src="/assets/vn-emblem-gold.png"
                alt="Victorious Network"
                className="relative h-10 w-auto sm:h-12"
                width={360}
                height={140}
              />
            </span>
          </a>

          <div className="hidden items-center justify-center gap-1 xl:flex">
            {currentNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-cursor="Explore"
                data-magnetic
                className="group relative px-3 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-paper/58 transition hover:text-champagne 2xl:px-4"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="hidden items-center justify-end gap-4 xl:flex">
            <div className="flex items-center border-l border-gold/20 pl-4" aria-label="Language">
              {(["en", "el"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setLanguage(value)}
                  className={`px-2 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] transition ${language === value ? "text-gold" : "text-platinum/38 hover:text-paper"}`}
                >
                  {value === "el" ? "GR" : "EN"}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              data-cursor="Connect"
              data-magnetic
              className="group inline-flex items-center gap-3 border border-gold/55 bg-gold px-5 py-2.5 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-ink shadow-[0_0_2rem_rgba(212,175,55,0.2)] transition hover:bg-champagne"
            >
              {contactLabel}
              <span aria-hidden="true" className="-translate-y-px transition group-hover:translate-x-1">↗</span>
            </a>
          </div>

          <button
            type="button"
            aria-label={menuLabel}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="ml-auto grid h-11 w-11 place-items-center border border-gold/30 bg-gold/5 text-paper xl:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </nav>

        {isOpen ? (
          <div className="border-t border-gold/15 bg-ink/96 px-5 py-6 shadow-2xl backdrop-blur-2xl xl:hidden">
            <div className="grid gap-5">
              <div className="flex w-fit items-center border border-white/10 p-1">
                {(["en", "el"] as const).map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setLanguage(value)}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${language === value ? "bg-gold text-ink" : "text-platinum/60 hover:text-paper"}`}
                  >
                    {value === "el" ? "GR" : "EN"}
                  </button>
                ))}
              </div>
              <div className="grid gap-1">
                {currentNav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="border-b border-white/8 px-1 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-paper/72 transition hover:text-gold"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-gold px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-ink"
              >
                {contactLabel}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
