import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap — Facturapi",
  description: "O plano de evolução da plataforma Facturapi — o que está feito, o que está a ser construído e o que vem a seguir.",
};

const NAVY = "#2C3E50";
const GREEN = "#28A745";
const BG = "#F8FAF9";

/* ─── Types ─────────────────────────────────────────────────────────────────── */
type Status = "done" | "progress" | "next" | "planned";

interface RoadmapItem {
  title: string;
  desc: string;
  status: Status;
}

interface Phase {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  status: Status;
  items: RoadmapItem[];
}

/* ─── Data ──────────────────────────────────────────────────────────────────── */
const phases: Phase[] = [
  {
    id: "fase1",
    label: "Fase 1",
    title: "Fundação",
    subtitle: "A base legal e técnica para facturar em Portugal com conformidade total.",
    status: "done",
    items: [
      { title: "Emissão de Facturas (FT/FR/FS/NC/ND)", desc: "Criação, emissão e cancelamento de todos os tipos de documentos fiscais com numeração automática.", status: "done" },
      { title: "Séries AT e registo automático", desc: "Criação de séries por NIF e registo nos webservices da Autoridade Tributária.", status: "done" },
      { title: "ATCUD — Código Único de Documento", desc: "Geração e sincronização do ATCUD obrigatório por documento emitido.", status: "done" },
      { title: "QR Code fiscal (Portaria 195/2020)", desc: "QR Code gerado automaticamente em todos os documentos, verificável na app AT.", status: "done" },
      { title: "Hash chaining RSA-SHA1", desc: "Assinatura e encadeamento criptográfico de documentos conforme requisitos de certificação AT.", status: "done" },
      { title: "SAF-T(PT) v1.04_01", desc: "Exportação do ficheiro XML de auditoria fiscal mensal ou anual.", status: "done" },
      { title: "PDF com dados legais completos", desc: "Geração de PDF com ATCUD, QR Code, hash de controlo e número de certificado AT.", status: "done" },
      { title: "Gestão multi-cliente e multi-NIF", desc: "Arquitectura multi-tenant com clientes, API keys live/test e configurações NIF independentes.", status: "done" },
      { title: "Catálogo de produtos e serviços", desc: "Produtos reutilizáveis com auto-preenchimento nas linhas de factura.", status: "done" },
      { title: "Painel de administração web", desc: "Interface completa para gerir todos os recursos sem necessidade de código.", status: "done" },
    ],
  },
  {
    id: "fase2",
    label: "Fase 2",
    title: "Operação",
    subtitle: "Funcionalidades que tornam o dia-a-dia mais autónomo — envio de documentos, pagamentos e notificações.",
    status: "progress",
    items: [
      { title: "mTLS AT — certificado cliente", desc: "Integração completa com SOAP AT via certificado mTLS pós-certificação. Registo de séries totalmente automático.", status: "progress" },
      { title: "Envio de facturas por email", desc: "Envio automático do PDF ao comprador no momento da emissão, com template personalizável.", status: "next" },
      { title: "Estado de pagamento", desc: "Marcação de facturas como pagas, parcialmente pagas ou em atraso, com data de pagamento.", status: "next" },
      { title: "Lembretes automáticos de pagamento", desc: "Envio automático de lembretes por email para facturas em atraso, com intervalos configuráveis.", status: "next" },
      { title: "Webhooks", desc: "Notificações HTTP em tempo real para alterações de estado: factura emitida, cancelada, paga.", status: "next" },
      { title: "Relatórios de facturação", desc: "Relatórios de receita, IVA liquidado/dedutível e volume por período, exportáveis em CSV.", status: "planned" },
      { title: "Notas de crédito a partir de factura", desc: "Geração de NC directamente a partir de uma factura original, com preenchimento automático dos dados.", status: "planned" },
      { title: "Duplicar documento", desc: "Criar novo rascunho a partir de um documento existente — útil para facturas recorrentes ad-hoc.", status: "planned" },
    ],
  },
  {
    id: "fase3",
    label: "Fase 3",
    title: "Plataforma",
    subtitle: "Ferramentas de integração e personalização para equipas e sistemas externos.",
    status: "planned",
    items: [
      { title: "SDKs oficiais", desc: "Bibliotecas cliente para Node.js, PHP, Python e Go — com exemplos e documentação completa.", status: "planned" },
      { title: "Documentação interactiva (OpenAPI)", desc: "Documentação da API com playground integrado para testar endpoints sem código.", status: "planned" },
      { title: "Facturas recorrentes", desc: "Agendamento de emissão automática de documentos em intervalos fixos (semanal, mensal, anual).", status: "planned" },
      { title: "Multi-utilizador e permissões", desc: "Convidar membros de equipa com níveis de acesso: Administrador, Gestor e Leitura.", status: "planned" },
      { title: "Log de auditoria", desc: "Histórico completo de acções — quem fez o quê e quando — com filtros por utilizador e período.", status: "planned" },
      { title: "Templates de PDF personalizados", desc: "Personalizar logótipo, cores, disposição e rodapé do PDF emitido por cliente/NIF.", status: "planned" },
      { title: "Integração Stripe — pagamentos", desc: "Link de pagamento gerado automaticamente na factura, com sincronização automática do estado.", status: "planned" },
      { title: "Portal do cliente final", desc: "Página pública onde o destinatário pode consultar e descarregar os seus documentos.", status: "planned" },
    ],
  },
  {
    id: "fase4",
    label: "Fase 4",
    title: "Escala",
    subtitle: "Visão de longo prazo — integrações com ecossistemas externos e expansão da plataforma.",
    status: "planned",
    items: [
      { title: "Conectores e-commerce", desc: "Integrações nativas com Shopify, WooCommerce e plataformas de e-commerce para emissão automática.", status: "planned" },
      { title: "Integração contabilística", desc: "Exportação directa para software de contabilidade: Sage, PHC, Primavera e outros.", status: "planned" },
      { title: "App mobile (iOS/Android)", desc: "Consulta de facturas, aprovação de rascunhos e dashboard em mobilidade.", status: "planned" },
      { title: "White-label", desc: "Oferecer a plataforma sob a marca do parceiro, com domínio e identidade visual customizados.", status: "planned" },
      { title: "Expansão a outros mercados", desc: "Suporte a outros regimes fiscais europeus: Espanha (TicketBAI/SII), Brasil (NF-e) e outros.", status: "planned" },
    ],
  },
];

/* ─── Status config ─────────────────────────────────────────────────────────── */
const statusConfig: Record<Status, { label: string; color: string; bg: string; dot: string }> = {
  done:     { label: "Concluído",   color: GREEN,    bg: "rgba(40,167,69,0.1)",  dot: GREEN },
  progress: { label: "Em curso",    color: "#2563eb", bg: "rgba(37,99,235,0.1)", dot: "#2563eb" },
  next:     { label: "A seguir",    color: "#d97706", bg: "rgba(217,119,6,0.1)", dot: "#d97706" },
  planned:  { label: "Planeado",    color: "#64748b", bg: "rgba(100,116,139,0.1)", dot: "#94a3b8" },
};

const phaseStatusConfig: Record<Status, { label: string; color: string; bg: string; border: string }> = {
  done:     { label: "Concluída",      color: GREEN,    bg: "rgba(40,167,69,0.12)",  border: "rgba(40,167,69,0.3)" },
  progress: { label: "Em progresso",  color: "#2563eb", bg: "rgba(37,99,235,0.10)", border: "rgba(37,99,235,0.3)" },
  next:     { label: "A seguir",       color: "#d97706", bg: "rgba(217,119,6,0.10)", border: "rgba(217,119,6,0.3)" },
  planned:  { label: "Planeada",       color: "#64748b", bg: "rgba(100,116,139,0.08)", border: "rgba(100,116,139,0.2)" },
};

/* ─── Components ────────────────────────────────────────────────────────────── */
function StatusBadge({ status }: { status: Status }) {
  const cfg = statusConfig[status];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "3px 10px", borderRadius: 999,
      fontSize: 11, fontWeight: 700,
      background: cfg.bg, color: cfg.color,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: cfg.dot, display: "inline-block" }} />
      {cfg.label}
    </span>
  );
}

function Item({ item }: { item: RoadmapItem }) {
  const cfg = statusConfig[item.status];
  return (
    <div style={{
      display: "flex", gap: 14, alignItems: "flex-start",
      padding: "14px 0",
      borderBottom: "1px solid #f1f5f9",
      opacity: item.status === "planned" ? 0.75 : 1,
    }}>
      {/* icon */}
      <div style={{ flexShrink: 0, marginTop: 2, width: 18, height: 18, borderRadius: "50%", background: cfg.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {item.status === "done" ? (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={cfg.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : item.status === "progress" ? (
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: cfg.dot }} />
        ) : (
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: cfg.dot }} />
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: item.status === "planned" ? "#64748b" : NAVY }}>{item.title}</span>
          <StatusBadge status={item.status} />
        </div>
        <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function RoadmapPage() {
  const doneCount = phases.flatMap(p => p.items).filter(i => i.status === "done").length;
  const total = phases.flatMap(p => p.items).length;
  const pct = Math.round((doneCount / total) * 100);

  return (
    <>
      {/* Navbar */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
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
          <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="/funcionalidades" style={{ fontSize: 14, fontWeight: 500, color: "#64748b", textDecoration: "none" }}>Funcionalidades</a>
            <a href="/documentacao" style={{ fontSize: 14, fontWeight: 500, color: "#64748b", textDecoration: "none" }}>Documentação</a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "72px 24px 96px" }}>

        {/* Hero */}
        <div style={{ marginBottom: 64 }}>
          <span style={{ display: "inline-block", padding: "3px 12px", borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" as const, background: "rgba(40,167,69,0.1)", color: GREEN, marginBottom: 16 }}>
            Roadmap público
          </span>
          <h1 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 16 }}>
            O plano de evolução do Facturapi
          </h1>
          <p style={{ fontSize: 17, color: "#64748b", lineHeight: 1.7, maxWidth: 560, marginBottom: 36 }}>
            Transparência total sobre o que está construído, o que está em desenvolvimento e o que vem a seguir.
          </p>

          {/* Progress bar */}
          <div style={{ background: "white", border: "1px solid #e8f0eb", borderRadius: 14, padding: "20px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: NAVY }}>Progresso geral</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: GREEN }}>{pct}% concluído</span>
            </div>
            <div style={{ height: 8, borderRadius: 999, background: "#f1f5f9", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${pct}%`, borderRadius: 999, background: GREEN, transition: "width 0.6s ease" }} />
            </div>
            <div style={{ display: "flex", gap: 20, marginTop: 14, flexWrap: "wrap" as const }}>
              {(["done", "progress", "next", "planned"] as Status[]).map((s) => {
                const count = phases.flatMap(p => p.items).filter(i => i.status === s).length;
                const cfg = statusConfig[s];
                return (
                  <span key={s} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#64748b" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: cfg.dot }} />
                    <span style={{ fontWeight: 600, color: cfg.color }}>{count}</span> {cfg.label.toLowerCase()}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Phases */}
        {phases.map((phase) => {
          const pcfg = phaseStatusConfig[phase.status];
          return (
            <section key={phase.id} style={{ marginBottom: 56 }}>
              {/* Phase header */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 28, paddingBottom: 20, borderBottom: `2px solid ${phase.status === "done" ? "rgba(40,167,69,0.2)" : "#f1f5f9"}` }}>
                {/* Label pill */}
                <div style={{ flexShrink: 0, padding: "4px 14px", borderRadius: 999, border: `1px solid ${pcfg.border}`, background: pcfg.bg, fontSize: 12, fontWeight: 800, color: pcfg.color, letterSpacing: "0.05em", marginTop: 4 }}>
                  {phase.label}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" as const, marginBottom: 6 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", margin: 0 }}>
                      {phase.title}
                    </h2>
                    <span style={{ padding: "2px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, background: pcfg.bg, color: pcfg.color, border: `1px solid ${pcfg.border}` }}>
                      {pcfg.label}
                    </span>
                  </div>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{phase.subtitle}</p>
                </div>
              </div>

              {/* Items */}
              <div style={{ background: "white", border: "1px solid #e8f0eb", borderRadius: 16, padding: "0 24px" }}>
                {phase.items.map((item, i) => (
                  <div key={item.title} style={{ borderBottom: i < phase.items.length - 1 ? "none" : "none" }}>
                    <Item item={item} />
                  </div>
                ))}
              </div>

              {/* Done count for completed phase */}
              {phase.status === "done" && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12, paddingLeft: 4 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span style={{ fontSize: 12, fontWeight: 600, color: GREEN }}>{phase.items.length} funcionalidades entregues</span>
                </div>
              )}
            </section>
          );
        })}

        {/* Legend */}
        <div style={{ background: BG, border: "1px solid #e8f0eb", borderRadius: 14, padding: "20px 24px", marginTop: 8 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.07em", textTransform: "uppercase" as const, marginBottom: 14 }}>Legenda</p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" as const }}>
            {(["done", "progress", "next", "planned"] as Status[]).map((s) => {
              const cfg = statusConfig[s];
              return (
                <span key={s} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: cfg.dot, flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: cfg.color }}>{cfg.label}</span>
                </span>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: NAVY, padding: "32px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
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
