"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const NAV_LINKS = [
  { label: "시술안내", href: "#services" },
  { label: "갤러리", href: "#gallery" },
  { label: "후기", href: "#reviews" },
  { label: "오시는길", href: "#location" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled && !mobileOpen
            ? "bg-bg-primary/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-8">
          <a
            href="#"
            className="text-2xl leading-none tracking-[0.15em] text-text-primary lg:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            CHULDU HONGDAE
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.05em] text-text-secondary transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold tracking-wide text-bg-primary transition-all hover:bg-gold-hover hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
            >
              무료 상담
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 p-2 -mr-2 text-text-primary lg:hidden"
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-bg-primary lg:hidden"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-3 p-2 text-text-primary"
              aria-label="메뉴 닫기"
            >
              <X size={24} />
            </button>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl tracking-wide text-text-primary transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-sm bg-gold px-8 py-3 text-lg font-semibold text-bg-primary"
            >
              무료 상담
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
