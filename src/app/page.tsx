"use client";

import { useState, useEffect } from "react";

/* ─── Logo SVG ─────────────────────────────────────────────────────────────── */
function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 68 68"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="64" height="64" rx="14" fill="#2C3E50" />
      <rect x="18" y="16" width="32" height="4" rx="2" fill="#28A745" />
      <rect x="18" y="26" width="24" height="4" rx="2" fill="white" />
      <rect x="18" y="36" width="28" height="4" rx="2" fill="white" />
      <rect x="18" y="46" width="20" height="4" rx="2" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}

/* ─── Navbar ────────────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + Wordmark */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Facturapi — página inicial">
          <Logo size={34} />
          <span
            className="text-xl font-extrabold tracking-tight"
            style={{ color: "#2C3E50", letterSpacing: "-0.03em" }}
          >
            facturapi
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#funcionalidades"
            className="text-sm font-medium text-gray-600 hover:text-[#2C3E50] transition-colors"
          >
            Funcionalidades
          </a>
          <a
            href="#documentacao"
            className="text-sm font-medium text-gray-600 hover:text-[#2C3E50] transition-colors"
          >
            Documentação
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-gray-600 hover:text-[#2C3E50] transition-colors"
          >
            Contacto
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-95"
            style={{ backgroundColor: "#28A745" }}
          >
            Começar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`block h-0.5 w-5 bg-[#2C3E50] rounded transition-transform duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-[#2C3E50] rounded transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-[#2C3E50] rounded transition-transform duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <a
            href="#funcionalidades"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-700 hover:text-[#2C3E50]"
          >
            Funcionalidades
          </a>
          <a
            href="#documentacao"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-700 hover:text-[#2C3E50]"
          >
            Documentação
          </a>
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-700 hover:text-[#2C3E50]"
          >
            Contacto
          </a>
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: "#28A745" }}
          >
            Começar
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative pt-32 pb-24 px-6 overflow-hidden hero-grid"
      style={{ backgroundColor: "#2C3E50" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(40,167,69,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Tag pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border"
          style={{
            backgroundColor: "rgba(40,167,69,0.12)",
            borderColor: "rgba(40,167,69,0.35)",
            color: "#6ee08a",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#28A745] inline-block animate-pulse" />
          Facturação portuguesa simplificada
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6"
          style={{ letterSpacing: "-0.02em" }}
        >
          A API de facturação que cumpre{" "}
          <span style={{ color: "#28A745" }}>todas as obrigações AT</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Emita facturas conformes com SAF-T(PT), ATCUD e QR Code fiscal.
          Integre em minutos com qualquer sistema.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#documentacao"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-green-900/30 active:scale-95 w-full sm:w-auto"
            style={{ backgroundColor: "#28A745" }}
          >
            Ver documentação
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
          </a>
          <a
            href="#funcionalidades"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-white border border-white/30 transition-all duration-200 hover:bg-white/10 active:scale-95 w-full sm:w-auto"
          >
            Explorar funcionalidades
          </a>
        </div>

        {/* Social proof strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-xs font-medium">
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#28A745" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Programa Certificado AT n.º 0123/AT
          </span>
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#28A745" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            SAF-T(PT) v1.04
          </span>
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#28A745" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Portaria 195/2020
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─── Value Proposition ─────────────────────────────────────────────────────── */
function ValueCards() {
  const cards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      ),
      title: "100% Conforme com a AT",
      text: "ATCUD, SAF-T(PT) v1.04, QR Code fiscal e hash chaining RSA. Tudo automatizado e sempre actualizado com a legislação vigente.",
      accent: "#28A745",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      title: "Integração via REST API",
      text: "Documentação OpenAPI, SDKs e exemplos de código em múltiplas linguagens. Emita uma factura em menos de 5 minutos.",
      accent: "#2C3E50",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: "Suporte Multi-NIF",
      text: "Gira múltiplas empresas numa só plataforma. Séries de facturação independentes por NIF, com isolamento total de dados.",
      accent: "#28A745",
    },
  ];

  return (
    <section
      id="funcionalidades"
      className="py-20 px-6"
      style={{ backgroundColor: "#F8FAF9" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#28A745" }}>
            Proposta de valor
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "#2C3E50", letterSpacing: "-0.02em" }}
          >
            Tudo o que precisa para facturar em Portugal
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 transition-colors duration-300"
                style={{
                  backgroundColor: `${card.accent}14`,
                  color: card.accent,
                }}
              >
                {card.icon}
              </div>

              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#2C3E50" }}
              >
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.text}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: card.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Features ──────────────────────────────────────────────────────────────── */
function Features() {
  const features = [
    {
      side: "left" as const,
      tag: "Documentos fiscais",
      title: "Facturas, Recibos e Notas de Crédito",
      text: "Emissão de documentos fiscais com numeração automática, validação de NIF e envio por email. Suporte a todos os tipos de documentos exigidos pela AT.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
          <rect width="200" height="200" rx="20" fill="#2C3E5008"/>
          <rect x="45" y="30" width="110" height="140" rx="10" fill="white" stroke="#2C3E5015" strokeWidth="1"/>
          <rect x="62" y="52" width="76" height="8" rx="4" fill="#28A745" opacity="0.9"/>
          <rect x="62" y="70" width="60" height="6" rx="3" fill="#2C3E5040"/>
          <rect x="62" y="84" width="76" height="1.5" rx="1" fill="#2C3E5015"/>
          <rect x="62" y="96" width="40" height="5" rx="2.5" fill="#2C3E5030"/>
          <rect x="120" y="95" width="18" height="5" rx="2.5" fill="#28A74560"/>
          <rect x="62" y="109" width="40" height="5" rx="2.5" fill="#2C3E5030"/>
          <rect x="120" y="108" width="18" height="5" rx="2.5" fill="#28A74560"/>
          <rect x="62" y="122" width="40" height="5" rx="2.5" fill="#2C3E5030"/>
          <rect x="120" y="121" width="18" height="5" rx="2.5" fill="#28A74560"/>
          <rect x="62" y="135" width="76" height="1.5" rx="1" fill="#2C3E5015"/>
          <rect x="110" y="144" width="28" height="7" rx="3.5" fill="#2C3E50" opacity="0.85"/>
          <circle cx="150" cy="148" r="18" fill="#28A745" opacity="0.95"/>
          <polyline points="142,148 147,153 158,143" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      side: "right" as const,
      tag: "Exportação",
      title: "SAF-T(PT) com um clique",
      text: "Exportação do ficheiro SAF-T mensal ou anual directamente do painel de administração. Formato v1.04 conforme com os requisitos da Autoridade Tributária.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
          <rect width="200" height="200" rx="20" fill="#28A74508"/>
          <rect x="40" y="50" width="120" height="90" rx="10" fill="white" stroke="#28A74520" strokeWidth="1.5"/>
          <rect x="40" y="50" width="120" height="28" rx="10" fill="#2C3E50"/>
          <rect x="40" y="65" width="120" height="13" fill="#2C3E50"/>
          <rect x="54" y="60" width="40" height="5" rx="2.5" fill="white" opacity="0.8"/>
          <rect x="54" y="90" width="22" height="5" rx="2.5" fill="#28A74570"/>
          <rect x="82" y="90" width="22" height="5" rx="2.5" fill="#28A74570"/>
          <rect x="110" y="90" width="22" height="5" rx="2.5" fill="#28A74570"/>
          <rect x="54" y="102" width="22" height="18" rx="4" fill="#28A74520"/>
          <rect x="82" y="102" width="22" height="18" rx="4" fill="#28A74540"/>
          <rect x="110" y="102" width="22" height="18" rx="4" fill="#28A74560"/>
          <rect x="54" y="124" width="22" height="6" rx="3" fill="#2C3E5025"/>
          <rect x="82" y="124" width="22" height="6" rx="3" fill="#2C3E5025"/>
          <rect x="110" y="124" width="22" height="6" rx="3" fill="#2C3E5025"/>
          <circle cx="100" cy="162" r="20" fill="#28A745"/>
          <path d="M93 162 L100 169 L107 155" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M93 158 L100 165" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      side: "left" as const,
      tag: "Conformidade",
      title: "QR Code e ATCUD",
      text: "Todos os documentos incluem QR Code fiscal e código ATCUD conforme Portaria 195/2020. Validação em tempo real pelos serviços da AT.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
          <rect width="200" height="200" rx="20" fill="#2C3E5008"/>
          <rect x="50" y="50" width="100" height="100" rx="12" fill="white" stroke="#2C3E5015" strokeWidth="1.5"/>
          {/* QR pattern */}
          <rect x="62" y="62" width="28" height="28" rx="4" fill="#2C3E50"/>
          <rect x="66" y="66" width="20" height="20" rx="2" fill="white"/>
          <rect x="70" y="70" width="12" height="12" rx="1" fill="#2C3E50"/>
          <rect x="110" y="62" width="28" height="28" rx="4" fill="#2C3E50"/>
          <rect x="114" y="66" width="20" height="20" rx="2" fill="white"/>
          <rect x="118" y="70" width="12" height="12" rx="1" fill="#2C3E50"/>
          <rect x="62" y="110" width="28" height="28" rx="4" fill="#2C3E50"/>
          <rect x="66" y="114" width="20" height="20" rx="2" fill="white"/>
          <rect x="70" y="118" width="12" height="12" rx="1" fill="#2C3E50"/>
          {/* Center dots */}
          <rect x="97" y="62" width="6" height="6" rx="1.5" fill="#28A745"/>
          <rect x="97" y="72" width="6" height="6" rx="1.5" fill="#2C3E50"/>
          <rect x="97" y="82" width="6" height="6" rx="1.5" fill="#28A745"/>
          <rect x="107" y="97" width="6" height="6" rx="1.5" fill="#2C3E50"/>
          <rect x="117" y="97" width="6" height="6" rx="1.5" fill="#28A745"/>
          <rect x="127" y="97" width="6" height="6" rx="1.5" fill="#2C3E50"/>
          <rect x="97" y="107" width="6" height="6" rx="1.5" fill="#28A745"/>
          <rect x="107" y="107" width="6" height="6" rx="1.5" fill="#2C3E50"/>
          <rect x="117" y="117" width="6" height="6" rx="1.5" fill="#28A745"/>
          <rect x="127" y="117" width="6" height="6" rx="1.5" fill="#2C3E50"/>
          <rect x="107" y="127" width="6" height="6" rx="1.5" fill="#2C3E50"/>
          <rect x="117" y="127" width="6" height="6" rx="1.5" fill="#28A745"/>
        </svg>
      ),
    },
    {
      side: "right" as const,
      tag: "Administração",
      title: "Painel de Administração",
      text: "Interface web para gerir clientes, produtos, séries e consultar todas as facturas emitidas. Pesquisa avançada, filtros e exportação de relatórios.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
          <rect width="200" height="200" rx="20" fill="#28A74508"/>
          <rect x="30" y="40" width="140" height="120" rx="10" fill="white" stroke="#28A74520" strokeWidth="1.5"/>
          {/* Sidebar */}
          <rect x="30" y="40" width="38" height="120" rx="10" fill="#2C3E50"/>
          <rect x="30" y="55" width="38" height="105" fill="#2C3E50"/>
          <circle cx="49" cy="56" r="8" fill="rgba(255,255,255,0.15)"/>
          <rect x="39" y="72" width="18" height="4" rx="2" fill="rgba(255,255,255,0.5)"/>
          <rect x="39" y="83" width="18" height="4" rx="2" fill="#28A745" opacity="0.9"/>
          <rect x="39" y="94" width="18" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
          <rect x="39" y="105" width="18" height="4" rx="2" fill="rgba(255,255,255,0.3)"/>
          {/* Main content */}
          <rect x="78" y="52" width="80" height="7" rx="3.5" fill="#2C3E50" opacity="0.7"/>
          <rect x="78" y="68" width="36" height="22" rx="6" fill="#28A74515"/>
          <rect x="122" y="68" width="36" height="22" rx="6" fill="#2C3E5010"/>
          <rect x="82" y="74" width="14" height="4" rx="2" fill="#28A745" opacity="0.8"/>
          <rect x="82" y="80" width="22" height="3" rx="1.5" fill="#2C3E5050"/>
          <rect x="78" y="100" width="80" height="1.5" rx="1" fill="#2C3E5010"/>
          <rect x="78" y="108" width="30" height="4" rx="2" fill="#2C3E5030"/>
          <rect x="78" y="118" width="80" height="5" rx="2.5" fill="#2C3E5015"/>
          <rect x="78" y="129" width="80" height="5" rx="2.5" fill="#2C3E5015"/>
          <rect x="78" y="140" width="80" height="5" rx="2.5" fill="#2C3E5015"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#28A745" }}>
            Como funciona
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "#2C3E50", letterSpacing: "-0.02em" }}
          >
            Funcionalidades para o dia a dia
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {features.map((feat, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                feat.side === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Illustration */}
              <div className="w-full md:w-5/12 flex-shrink-0">
                <div
                  className="w-full aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden"
                  style={{ backgroundColor: "#F8FAF9" }}
                >
                  {feat.icon}
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                  style={{
                    backgroundColor: "#28A74514",
                    color: "#28A745",
                  }}
                >
                  {feat.tag}
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight"
                  style={{ color: "#2C3E50", letterSpacing: "-0.02em" }}
                >
                  {feat.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed">{feat.text}</p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold" style={{ color: "#28A745" }}>
                  <span>Saber mais</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA final ─────────────────────────────────────────────────────────────── */
function CtaSection() {
  return (
    <section
      id="contacto"
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#28A745" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,0,0,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Pronto para modernizar a sua facturação?
        </h2>
        <p className="text-lg text-white/85 mb-10 leading-relaxed max-w-xl mx-auto font-medium">
          Junte-se às empresas que já simplificaram os seus processos de
          facturação com o Facturapi.
        </p>
        <a
          href="mailto:geral@facturapi.pt"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95"
          style={{
            backgroundColor: "white",
            color: "#28A745",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Entrar em contacto
        </a>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ backgroundColor: "#2C3E50" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + copyright */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              {/* Footer logo — white version */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 68 68"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="64" height="64" rx="14" fill="rgba(255,255,255,0.15)" />
                <rect x="18" y="16" width="32" height="4" rx="2" fill="#28A745" />
                <rect x="18" y="26" width="24" height="4" rx="2" fill="white" />
                <rect x="18" y="36" width="28" height="4" rx="2" fill="white" />
                <rect x="18" y="46" width="20" height="4" rx="2" fill="rgba(255,255,255,0.4)" />
              </svg>
              <span
                className="text-lg font-extrabold text-white tracking-tight"
                style={{ letterSpacing: "-0.03em" }}
              >
                facturapi
              </span>
            </div>
            <p className="text-sm text-gray-400">
              © 2026 Facturapi. Todos os direitos reservados.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="mailto:geral@facturapi.pt" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* AT certification badge */}
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl border"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
          >
            <div
              className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
              style={{ backgroundColor: "rgba(40,167,69,0.2)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#28A745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-white leading-snug">
                Processado por programa
              </p>
              <p className="text-xs font-semibold text-white leading-snug">
                certificado AT
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs text-gray-500 text-center sm:text-left">
            Facturação electrónica conforme com SAF-T(PT), ATCUD e Portaria 195/2020.
          </p>
          <p className="text-xs text-gray-500">
            Made in Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueCards />
        <Features />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
