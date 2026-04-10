import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentação — Facturapi",
  description: "A documentação técnica do Facturapi estará disponível quando a plataforma for comercializada.",
};

const NAVY = "#2C3E50";
const GREEN = "#28A745";

export default function DocumentacaoPage() {
  return (
    <>
      {/* Navbar */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e5e7eb",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill={NAVY} />
              <rect x="8" y="8" width="16" height="2" rx="1" fill={GREEN} />
              <rect x="8" y="13" width="12" height="2" rx="1" fill="white" />
              <rect x="8" y="18" width="14" height="2" rx="1" fill="white" />
              <rect x="8" y="23" width="10" height="2" rx="1" fill="rgba(255,255,255,0.45)" />
            </svg>
            <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.03em" }}>
              <span style={{ color: NAVY }}>factur</span><span style={{ color: GREEN }}>api</span>
            </span>
          </a>
          <a href="/" style={{ fontSize: 14, fontWeight: 500, color: "#64748b", textDecoration: "none" }}>← Voltar ao início</a>
        </div>
      </header>

      {/* Hero */}
      <main style={{ minHeight: "calc(100vh - 64px - 80px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px" }}>
        <div style={{ maxWidth: 560, textAlign: "center" }}>

          {/* Ícone */}
          <div style={{
            width: 72, height: 72, borderRadius: 20, background: "rgba(40,167,69,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 32px",
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 14px", borderRadius: 999, marginBottom: 24,
            fontSize: 12, fontWeight: 600,
            background: "rgba(40,167,69,0.08)", border: "1px solid rgba(40,167,69,0.2)",
            color: GREEN,
          }}>
            Em breve
          </div>

          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
            Documentação técnica
          </h1>

          <p style={{ fontSize: 17, color: "#64748b", lineHeight: 1.7, marginBottom: 40 }}>
            A documentação da API do Facturapi — endpoints, autenticação, exemplos de código e guias de integração — estará disponível quando a plataforma for comercializada.
          </p>

          {/* O que vai estar disponível */}
          <div style={{
            background: "#F8FAF9", border: "1px solid #e8f0eb", borderRadius: 16,
            padding: "28px 32px", textAlign: "left", marginBottom: 40,
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: GREEN, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
              O que vai estar disponível
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Referência completa da REST API (OpenAPI/Swagger)",
                "Guias de autenticação e gestão de chaves API",
                "Exemplos de código em múltiplas linguagens",
                "Guia de integração SAF-T(PT) e ATCUD",
                "Webhooks e notificações em tempo real",
                "SDKs para Node.js, PHP, Python e mais",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <svg style={{ flexShrink: 0, marginTop: 2 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="/" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 14, fontWeight: 600, color: NAVY, textDecoration: "none",
          }}>
            ← Voltar ao início
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: NAVY, padding: "28px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="rgba(255,255,255,0.12)" />
              <rect x="8" y="8" width="16" height="2" rx="1" fill={GREEN} />
              <rect x="8" y="13" width="12" height="2" rx="1" fill="white" />
              <rect x="8" y="18" width="14" height="2" rx="1" fill="white" />
              <rect x="8" y="23" width="10" height="2" rx="1" fill="rgba(255,255,255,0.45)" />
            </svg>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "-0.03em" }}>
              <span style={{ color: "white" }}>factur</span><span style={{ color: GREEN }}>api</span>
            </span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginLeft: 4 }}>© 2026 Todos os direitos reservados.</span>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/privacidade" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Política de Privacidade</a>
            <a href="/termos" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Termos de Uso</a>
          </div>
        </div>
      </footer>
    </>
  );
}
