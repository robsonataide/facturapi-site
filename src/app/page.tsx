"use client";

import { useState, useEffect } from "react";

const NAVY = "#2C3E50";
const GREEN = "#28A745";
const BG = "#F8FAF9";

/* ─── Logo ─────────────────────────────────────────────────────────────────── */
function Logo() {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill={NAVY} />
        <rect x="8" y="8" width="16" height="2" rx="1" fill={GREEN} />
        <rect x="8" y="13" width="12" height="2" rx="1" fill="white" />
        <rect x="8" y="18" width="14" height="2" rx="1" fill="white" />
        <rect x="8" y="23" width="10" height="2" rx="1" fill="rgba(255,255,255,0.4)" />
      </svg>
      <span style={{ fontSize: 18, fontWeight: 800, color: NAVY, letterSpacing: "-0.03em" }}>
        facturapi
      </span>
    </span>
  );
}

/* ─── Navbar ────────────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Documentação", href: "#documentacao" },
  { label: "Contacto", href: "#contacto" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled || open ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled || open ? "1px solid #e5e7eb" : "1px solid transparent",
        transition: "all 0.2s",
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#" aria-label="Facturapi" style={{ textDecoration: "none" }}>
          <Logo />
        </a>

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                style={{ fontSize: 14, fontWeight: 500, color: "#64748b", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = NAVY)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 20px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                color: "white",
                background: GREEN,
                textDecoration: "none",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Começar
            </a>
          </div>
        )}

        {/* Hamburger button — mobile only */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              width: 40,
              height: 40,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              borderRadius: 8,
            }}
          >
            <span style={{
              display: "block", width: 22, height: 2, borderRadius: 2, background: NAVY,
              transition: "transform 0.2s, opacity 0.2s",
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: 22, height: 2, borderRadius: 2, background: NAVY,
              transition: "opacity 0.2s",
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: 22, height: 2, borderRadius: 2, background: NAVY,
              transition: "transform 0.2s, opacity 0.2s",
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }} />
          </button>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && open && (
        <div style={{
          background: "white",
          borderTop: "1px solid #e5e7eb",
          padding: "12px 24px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 16,
                fontWeight: 500,
                color: NAVY,
                textDecoration: "none",
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 12,
              padding: "13px 0",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 700,
              color: "white",
              background: GREEN,
              textDecoration: "none",
            }}
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
      style={{
        background: NAVY,
        paddingTop: 140,
        paddingBottom: 100,
        paddingLeft: 24,
        paddingRight: 24,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid pattern */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />
      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(40,167,69,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        {/* Pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
            color: "#6ee08a",
            background: "rgba(40,167,69,0.12)",
            border: "1px solid rgba(40,167,69,0.3)",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: GREEN,
              animation: "pulse 2s infinite",
            }}
          />
          Facturação portuguesa simplificada
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
        >
          A API de facturação que cumpre{" "}
          <span style={{ color: GREEN }}>todas as obrigações AT</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.65,
            marginBottom: 40,
            maxWidth: 560,
            margin: "0 auto 40px",
          }}
        >
          Emita facturas conformes com SAF-T(PT), ATCUD e QR Code fiscal.
          Integre em minutos com qualquer sistema.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 56 }}>
          <a
            href="#funcionalidades"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 28px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              color: "white",
              background: GREEN,
              textDecoration: "none",
              transition: "opacity 0.15s, transform 0.1s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Explorar funcionalidades
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </a>
          <a
            href="#contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "13px 28px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              color: "white",
              border: "1px solid rgba(255,255,255,0.28)",
              textDecoration: "none",
              background: "transparent",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            Entrar em contacto
          </a>
        </div>

        {/* Trust badges */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
          {["Programa Certificado AT", "SAF-T(PT) v1.04", "Portaria 195/2020"].map((label) => (
            <span key={label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Value Cards ───────────────────────────────────────────────────────────── */
const valueItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "100% Conforme com a AT",
    text: "ATCUD, SAF-T(PT) v1.04, QR Code fiscal e hash chaining RSA. Tudo automatizado e actualizado com a legislação vigente.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Integração via REST API",
    text: "Documentação OpenAPI, SDKs e exemplos de código. Emita uma factura em menos de 5 minutos a partir de qualquer linguagem.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Suporte Multi-NIF",
    text: "Gira múltiplas empresas numa só plataforma. Séries de facturação independentes por NIF, com isolamento total de dados.",
  },
];

function ValueCards() {
  return (
    <section id="funcionalidades" style={{ background: "white", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: GREEN, textTransform: "uppercase", marginBottom: 12 }}>
            Proposta de valor
          </p>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Tudo o que precisa para facturar em Portugal
          </h2>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {valueItems.map((item) => (
            <div
              key={item.title}
              style={{
                background: BG,
                border: "1px solid #e8f0eb",
                borderRadius: 16,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(40,167,69,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.65 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Features ──────────────────────────────────────────────────────────────── */
const features = [
  {
    tag: "Documentos Fiscais",
    title: "Facturas, Recibos e Notas de Crédito",
    text: "Emissão de documentos fiscais com numeração automática, validação de NIF e envio por email. Suporte a todos os tipos de documentos exigidos pela AT.",
    visual: (
      <div style={{ background: "white", borderRadius: 16, padding: 28, boxShadow: "0 4px 24px rgba(44,62,80,0.10)", minWidth: 0 }}>
        {[{ w: "70%", color: GREEN }, { w: "50%", color: "#e2e8f0" }, { w: "85%", color: "#e2e8f0" }, { w: "40%", color: "#e2e8f0" }].map((bar, i) => (
          <div key={i} style={{ height: 10, borderRadius: 5, background: bar.color, width: bar.w, marginBottom: i < 3 ? 14 : 0 }} />
        ))}
        <div style={{ marginTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ height: 32, width: 80, borderRadius: 8, background: "rgba(40,167,69,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
          </div>
          <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>factura_001.pdf</div>
        </div>
      </div>
    ),
  },
  {
    tag: "SAF-T(PT)",
    title: "Exportação SAF-T com um clique",
    text: "Exportação do ficheiro SAF-T mensal ou anual directamente do painel de administração. Formato v1.04_01 validado pela AT.",
    visual: (
      <div style={{ background: "white", borderRadius: 16, padding: 28, boxShadow: "0 4px 24px rgba(44,62,80,0.10)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {["Janeiro 2026", "Fevereiro 2026", "Março 2026"].map((month, i) => (
            <div key={month} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderRadius: 10, background: i === 2 ? "rgba(40,167,69,0.08)" : "#f8faf9", border: `1px solid ${i === 2 ? "rgba(40,167,69,0.2)" : "#f0f0f0"}` }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: NAVY }}>{month}</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: i === 2 ? GREEN : "#94a3b8", display: "flex", alignItems: "center", gap: 4 }}>
                {i === 2 ? (
                  <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg> Descarregar</>
                ) : "✓ Exportado"}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    tag: "QR Code & ATCUD",
    title: "QR Code fiscal e ATCUD automáticos",
    text: "Todos os documentos incluem QR Code fiscal e código ATCUD gerados automaticamente, conforme a Portaria 195/2020. Sem configuração manual.",
    visual: (
      <div style={{ background: "white", borderRadius: 16, padding: 28, boxShadow: "0 4px 24px rgba(44,62,80,0.10)", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ width: 80, height: 80, background: "#f0f0f0", borderRadius: 8, display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 2, padding: 8 }}>
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} style={{ borderRadius: 1, background: [0,1,5,6,4,9,10,14,15,16,20,21,12,18,24].includes(i) ? NAVY : "transparent" }} />
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 4 }}>ATCUD</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, fontFamily: "monospace" }}>0000-0001</div>
        </div>
      </div>
    ),
  },
  {
    tag: "Painel de Administração",
    title: "Gestão completa num só painel",
    text: "Interface web para gerir clientes, produtos, séries e consultar todas as facturas emitidas. Acesso rápido a relatórios e exportações.",
    visual: (
      <div style={{ background: "white", borderRadius: 16, padding: 20, boxShadow: "0 4px 24px rgba(44,62,80,0.10)" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {["Clientes", "Facturas", "Séries"].map((tab, i) => (
            <div key={tab} style={{ padding: "5px 12px", borderRadius: 6, fontSize: 11, fontWeight: 600, background: i === 1 ? NAVY : "#f1f5f9", color: i === 1 ? "white" : "#64748b" }}>
              {tab}
            </div>
          ))}
        </div>
        {[{ label: "FT 2026/001", amount: "€ 1.230,00", status: "Paga" }, { label: "FT 2026/002", amount: "€ 450,00", status: "Enviada" }, { label: "FT 2026/003", amount: "€ 890,50", status: "Rascunho" }].map((row) => (
          <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: "1px solid #f1f5f9" }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: NAVY }}>{row.label}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#64748b" }}>{row.amount}</span>
            <span style={{
              fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 999,
              background: row.status === "Paga" ? "rgba(40,167,69,0.12)" : row.status === "Enviada" ? "rgba(59,130,246,0.12)" : "#f1f5f9",
              color: row.status === "Paga" ? GREEN : row.status === "Enviada" ? "#3b82f6" : "#94a3b8",
            }}>
              {row.status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
];

function Features() {
  return (
    <section style={{ background: BG, padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: GREEN, textTransform: "uppercase", marginBottom: 12 }}>
            Como funciona
          </p>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Funcionalidades para o dia a dia
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className="features-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                alignItems: "center",
              }}
            >
              {/* Text — alternates left/right */}
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: GREEN, textTransform: "uppercase", marginBottom: 12 }}>
                  {f.tag}
                </p>
                <h3 style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", lineHeight: 1.25, marginBottom: 16 }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7 }}>{f.text}</p>
                <a
                  href="#contacto"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 24,
                    fontSize: 14,
                    fontWeight: 600,
                    color: GREEN,
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Saber mais
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </a>
              </div>

              {/* Visual */}
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>{f.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ───────────────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section id="contacto" style={{ background: GREEN, padding: "80px 24px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 800, color: "white", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
          Pronto para modernizar a sua facturação?
        </h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", lineHeight: 1.65, marginBottom: 36 }}>
          Junte-se às empresas que simplificaram os seus processos de facturação com o Facturapi.
        </p>
        <a
          href="mailto:hello@facturapi.pt"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "14px 32px",
            borderRadius: 999,
            fontSize: 15,
            fontWeight: 700,
            color: GREEN,
            background: "white",
            textDecoration: "none",
            transition: "opacity 0.15s, transform 0.1s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.92"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Entrar em contacto
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </a>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: NAVY, padding: "40px 24px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="rgba(255,255,255,0.12)" />
            <rect x="8" y="8" width="16" height="2" rx="1" fill={GREEN} />
            <rect x="8" y="13" width="12" height="2" rx="1" fill="white" />
            <rect x="8" y="18" width="14" height="2" rx="1" fill="white" />
            <rect x="8" y="23" width="10" height="2" rx="1" fill="rgba(255,255,255,0.4)" />
          </svg>
          <span style={{ fontSize: 14, fontWeight: 700, color: "white" }}>facturapi</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>
            © 2026 Todos os direitos reservados.
          </span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          {["Política de Privacidade", "Termos de Uso", "Contacto"].map((link) => (
            <a
              key={link}
              href="#"
              style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }`}</style>
      <Navbar />
      <main>
        <Hero />
        <ValueCards />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
