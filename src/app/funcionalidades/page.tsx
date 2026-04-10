import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funcionalidades — Facturapi",
  description:
    "Tudo o que o Facturapi oferece: emissão de facturas, ATCUD, SAF-T(PT), séries AT, gestão de clientes, API keys e muito mais.",
};

const NAVY = "#2C3E50";
const GREEN = "#28A745";
const BG = "#F8FAF9";

/* ─── Helpers ───────────────────────────────────────────────────────────────── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: 999,
      fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" as const,
      background: "rgba(40,167,69,0.1)", color: GREEN, marginBottom: 14,
    }}>
      {children}
    </span>
  );
}

function Check() {
  return (
    <svg style={{ flexShrink: 0, marginTop: 2 }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <Check />
          <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}

function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <Tag>{tag}</Tag>
      <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: subtitle ? 14 : 0 }}>
        {title}
      </h2>
      {subtitle && <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, maxWidth: 600 }}>{subtitle}</p>}
    </div>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "white", border: "1px solid #e8f0eb", borderRadius: 16, padding: "28px 24px" }}>
      <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(40,167,69,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{title}</h3>
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ borderTop: "1px solid #e8f0eb", margin: "72px 0" }} />;
}

function Badge({ label, color = NAVY }: { label: string; color?: string }) {
  return (
    <span style={{
      display: "inline-block", padding: "2px 8px", borderRadius: 6,
      fontSize: 11, fontWeight: 700, background: color === GREEN ? "rgba(40,167,69,0.1)" : "rgba(44,62,80,0.08)",
      color, marginRight: 6, marginBottom: 4,
    }}>
      {label}
    </span>
  );
}

/* ─── Ícones ────────────────────────────────────────────────────────────────── */
const IconDoc = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>;
const IconUsers = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
const IconKey = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="15" r="5" /><line x1="15.09" y1="7.14" x2="19.5" y2="2" /><line x1="19.5" y1="2" x2="22" y2="4.5" /><line x1="17" y1="7" x2="19.5" y2="4.5" /></svg>;
const IconShield = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>;
const IconBox = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>;
const IconFolder = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>;
const IconCode = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;
const IconQr = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="5" height="5" /><rect x="16" y="3" width="5" height="5" /><rect x="3" y="16" width="5" height="5" /><rect x="10" y="3" width="1" height="1" /><rect x="10" y="10" width="1" height="1" /><path d="M10 16h4v4" /><path d="M16 16h.01" /><path d="M14 10h6" /><path d="M10 6v4" /></svg>;
const IconDownload = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;
const IconLayout = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>;

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function FuncionalidadesPage() {
  return (
    <>
      {/* Navbar */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill={NAVY} />
              <rect x="8" y="8" width="16" height="2" rx="1" fill={GREEN} />
              <rect x="8" y="13" width="12" height="2" rx="1" fill="white" />
              <rect x="8" y="18" width="14" height="2" rx="1" fill="white" />
              <rect x="8" y="23" width="10" height="2" rx="1" fill="rgba(255,255,255,0.45)" />
            </svg>
            <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.03em" }}>
              <span style={{ color: NAVY }}>factur</span><span style={{ color: GREEN }}>api</span>
            </span>
          </a>
          <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="/#funcionalidades" style={{ fontSize: 14, fontWeight: 500, color: "#64748b", textDecoration: "none" }}>Início</a>
            <a href="/documentacao" style={{ fontSize: 14, fontWeight: 500, color: "#64748b", textDecoration: "none" }}>Documentação</a>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px 96px" }}>

        {/* Page hero */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <Tag>Funcionalidades</Tag>
          <h1 style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 20 }}>
            Tudo o que a plataforma oferece
          </h1>
          <p style={{ fontSize: 18, color: "#64748b", lineHeight: 1.7, maxWidth: 580, margin: "0 auto" }}>
            Do painel de administração à API — uma solução completa de facturação electrónica conforme com a legislação portuguesa.
          </p>
        </div>

        {/* ── 1. Dashboard ── */}
        <section>
          <SectionHeader
            tag="Visão geral"
            title="Dashboard centralizado"
            subtitle="Acompanhe em tempo real o estado da sua actividade de facturação — clientes, chaves API, configurações fiscais e documentos emitidos."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { label: "Total de Clientes", desc: "Visão global de todos os clientes API registados na plataforma." },
              { label: "Chaves API activas", desc: "Contagem de keys live e test em utilização em todos os clientes." },
              { label: "Configurações NIF", desc: "Número de empresas (NIFs) configuradas com credenciais AT." },
              { label: "Facturas emitidas", desc: "Total acumulado de documentos fiscais em todos os estados." },
            ].map(({ label, desc }) => (
              <div key={label} style={{ background: "white", border: "1px solid #e8f0eb", borderRadius: 14, padding: "24px 20px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: GREEN, marginBottom: 8 }}>{label}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── 2. Clientes & API Keys ── */}
        <section>
          <SectionHeader
            tag="Multi-cliente"
            title="Gestão de clientes e chaves API"
            subtitle="Arquitectura multi-tenant que permite gerir múltiplos clientes, cada um com as suas próprias chaves de acesso e configurações fiscais independentes."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            <Card icon={<IconUsers />} title="Gestão de clientes">
              <FeatureList items={[
                "Criar e listar clientes com nome e email",
                "Ver contadores de API keys e NIFs por cliente",
                "Acesso rápido ao detalhe de cada cliente",
                "Avatar automático com inicial do nome",
              ]} />
            </Card>
            <Card icon={<IconKey />} title="Chaves API (API Keys)">
              <FeatureList items={[
                "Gerar chaves com <strong>label</strong> personalizada",
                "Dois ambientes: <strong>live</strong> (produção) e <strong>test</strong> (sandbox)",
                "Public Key + Secret Key — secret exibida apenas uma vez",
                "Copiar chaves para clipboard com confirmação visual",
                "Revogar chaves individualmente (badge de revogada)",
                "Ver data de criação e última utilização",
              ]} />
            </Card>
            <Card icon={<IconShield />} title="Configuração NIF (empresa)">
              <FeatureList items={[
                "NIF da empresa (9 dígitos, validado)",
                "Nome da empresa e tipo de entidade (ENI / Empresa)",
                "Regime de IVA: Normal ou Isento",
                "Credenciais AT: username, password, número certificado",
                "Ambiente AT: Produção ou Sandbox",
                "Morada completa: rua, código postal, cidade, país",
              ]} />
            </Card>
          </div>
        </section>

        <Divider />

        {/* ── 3. Séries ── */}
        <section>
          <SectionHeader
            tag="Séries de faturação"
            title="Séries AT — todos os tipos de documento"
            subtitle="Crie e gira séries de faturação separadas por tipo, ano e NIF. Registe directamente na Autoridade Tributária a partir da plataforma."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 40 }}>
            <Card icon={<IconFolder />} title="Criar e gerir séries">
              <FeatureList items={[
                "Definir código da série (ex: <code style='font-family:monospace;font-size:12px;background:#f1f5f9;padding:1px 5px;border-radius:4px'>FT 2026/A</code>)",
                "Associar a um NIF específico",
                "Definir ano de exercício",
                "Controlo de sequência automático (lastSequence)",
                "Activar ou desactivar séries",
                "Ver contagem de documentos emitidos por série",
              ]} />
            </Card>
            <div style={{ background: "white", border: "1px solid #e8f0eb", borderRadius: 16, padding: "28px 24px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 16 }}>Tipos de documento suportados</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { code: "FT", label: "Fatura", desc: "Documento fiscal padrão para venda de bens ou serviços." },
                  { code: "FR", label: "Fatura-Recibo", desc: "Fatura com comprovativo de pagamento imediato." },
                  { code: "FS", label: "Fatura Simplificada", desc: "Para transacções de pequeno valor a consumidores finais." },
                  { code: "NC", label: "Nota de Crédito", desc: "Documento de rectificação — redução de valor facturado." },
                  { code: "ND", label: "Nota de Débito", desc: "Documento de rectificação — aumento de valor facturado." },
                ].map(({ code, label, desc }) => (
                  <div key={code} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, width: 32, height: 22, borderRadius: 5, background: "rgba(40,167,69,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, color: GREEN, fontFamily: "monospace" }}>{code}</span>
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 700, color: NAVY }}>{label}</span>
                      <span style={{ fontSize: 12, color: "#94a3b8", marginLeft: 6 }}>—</span>
                      <span style={{ fontSize: 12, color: "#64748b", marginLeft: 6 }}>{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card icon={<IconShield />} title="Registo na AT">
              <FeatureList items={[
                "Registar série directamente nos webservices AT",
                "Receber código de validação AT (<strong>atCode</strong>) automaticamente",
                "Estado de validação visível na listagem (<strong>Pendente</strong> / código AT)",
                "Suporte a ambiente sandbox para testes",
              ]} />
            </Card>
          </div>
        </section>

        <Divider />

        {/* ── 4. Facturas ── */}
        <section>
          <SectionHeader
            tag="Documentos fiscais"
            title="Emissão completa de documentos"
            subtitle="Crie, emita, cancele e gera PDFs de documentos fiscais com numeração automática, cálculo de IVA em tempo real e integração com a AT."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 40 }}>
            <Card icon={<IconDoc />} title="Criar documento">
              <FeatureList items={[
                "Seleccionar série (filtra por NIF do cliente)",
                "Dados do comprador: NIF, nome, morada completa",
                "Múltiplas linhas de produto/serviço",
                "Seleccionar produto do catálogo (preenche campos automaticamente)",
                "Quantidade com precisão de 3 casas decimais",
                "Preço unitário com precisão de 2 casas decimais",
                "Notas internas opcionais",
              ]} />
            </Card>
            <Card icon={<IconLayout />} title="Cálculo de IVA em tempo real">
              <FeatureList items={[
                "Subtotal calculado automaticamente por linha",
                "IVA agregado por taxa (NOR / INT / RED / ISE)",
                "Total final actualizado a cada alteração",
                "Suporte a documentos isentos de IVA (ISE)",
              ]} />
              <div style={{ marginTop: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#64748b", marginBottom: 8 }}>Códigos IVA:</div>
                <div>
                  {[["NOR", "Normal"], ["INT", "Intermédio"], ["RED", "Reduzido"], ["ISE", "Isento"]].map(([code, label]) => (
                    <Badge key={code} label={`${code} — ${label}`} color={code === "ISE" ? NAVY : GREEN} />
                  ))}
                </div>
              </div>
            </Card>
            <Card icon={<IconDoc />} title="Ciclo de vida do documento">
              <FeatureList items={[
                "<strong>Rascunho</strong>: criado, editável, ainda não fiscal",
                "<strong>Emitir</strong>: torna o documento legal e imutável",
                "<strong>Cancelar</strong>: anula o documento com registo",
                "Transições de estado auditadas e irreversíveis",
              ]} />
              <div style={{ marginTop: 16, display: "flex", gap: 6 }}>
                <Badge label="Rascunho" color={NAVY} />
                <span style={{ fontSize: 12, color: "#94a3b8", alignSelf: "center" }}>→</span>
                <Badge label="Emitida" color={GREEN} />
                <span style={{ fontSize: 12, color: "#94a3b8", alignSelf: "center" }}>→</span>
                <Badge label="Cancelada" color="#dc2626" />
              </div>
            </Card>
          </div>

          {/* PDF row */}
          <div style={{ background: "white", border: "1px solid #e8f0eb", borderRadius: 16, padding: "28px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <IconDownload />
                <h3 style={{ fontSize: 16, fontWeight: 700, color: NAVY }}>PDF automático</h3>
              </div>
              <FeatureList items={[
                "Download directo do PDF a partir da listagem",
                "Documento formatado com todos os dados legais",
                "Inclui ATCUD, QR Code fiscal e hash de controlo",
                "Rodapé com número de certificado AT",
              ]} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <IconQr />
                <h3 style={{ fontSize: 16, fontWeight: 700, color: NAVY }}>QR Code fiscal</h3>
              </div>
              <FeatureList items={[
                "Gerado automaticamente em todos os documentos",
                "Conforme Portaria 195/2020",
                "Inclui hash de controlo (campo Q)",
                "Verificável pelo consumidor final na app AT",
              ]} />
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 5. Compliance AT ── */}
        <section>
          <SectionHeader
            tag="Compliance AT"
            title="Conformidade total com a Autoridade Tributária"
            subtitle="Todos os requisitos legais de facturação electrónica em Portugal implementados e automatizados."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            <Card icon={<IconShield />} title="ATCUD — Código Único de Documento">
              <FeatureList items={[
                "Gerado automaticamente para cada documento emitido",
                "Sincronização com os webservices AT",
                "Acção manual disponível por documento na listagem",
                "Formato: <code style='font-family:monospace;font-size:12px;background:#f1f5f9;padding:1px 5px;border-radius:4px'>CÓDIGO-SÉRIE_Nº</code> conforme legislação",
                "Obrigatório para documentos a partir de 2023",
              ]} />
            </Card>
            <Card icon={<IconShield />} title="Hash chaining RSA">
              <FeatureList items={[
                "Assinatura de cada documento com chave RSA-SHA1",
                "Encadeamento de hashes entre documentos consecutivos",
                "Campos assinados: data, hora de sistema, número, total, hash anterior",
                "hashControl: caracteres [1,11,21,31] do base64 (requisito certificação)",
                "Chave privada configurada via variável de ambiente segura",
              ]} />
            </Card>
            <Card icon={<IconDownload />} title="SAF-T(PT) v1.04_01">
              <FeatureList items={[
                "Exportação do ficheiro XML de auditoria fiscal",
                "Seleccionar período: anual ou por mês específico",
                "Download directo a partir das definições",
                "Formato validado v1.04_01 conforme portaria AT",
                "Contém: transacções, clientes, produtos, totais de IVA",
                "Obrigatório submeter até ao dia 5 do mês seguinte",
              ]} />
            </Card>
          </div>
        </section>

        <Divider />

        {/* ── 6. Catálogo de Produtos ── */}
        <section>
          <SectionHeader
            tag="Catálogo"
            title="Gestão de produtos e serviços"
            subtitle="Mantenha um catálogo de produtos e serviços reutilizável. Ao criar documentos, basta seleccionar o produto para preencher os campos automaticamente."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            <Card icon={<IconBox />} title="Criar produtos">
              <FeatureList items={[
                "Nome e descrição do produto/serviço",
                "Preço unitário pré-definido",
                "Taxa de IVA por defeito",
                "Código IVA associado (NOR/INT/RED/ISE)",
                "Unidade de medida: unidade, hora, litro, metro, m², m³",
                "Activação/desactivação (soft delete)",
              ]} />
            </Card>
            <Card icon={<IconBox />} title="Produtos padrão">
              <FeatureList items={[
                "Seed de produtos standard com um clique",
                "Incluídos: Consultoria (€20/un, 23% IVA) e Serviço Digital (€20/un, 23% IVA)",
                "Editáveis e personalizáveis após criação",
                "Ponto de partida rápido para novos clientes",
              ]} />
            </Card>
            <Card icon={<IconDoc />} title="Auto-preenchimento em facturas">
              <FeatureList items={[
                "Ao seleccionar produto numa linha de fatura, preenche automaticamente:",
                "→ Descrição do produto",
                "→ Preço unitário",
                "→ Taxa de IVA",
                "→ Código IVA",
                "Editável após preenchimento automático",
              ]} />
            </Card>
          </div>
        </section>

        <Divider />

        {/* ── 7. API ── */}
        <section>
          <SectionHeader
            tag="REST API"
            title="API completa para integração"
            subtitle="Todos os recursos acessíveis via REST API autenticada. Integre a facturação directamente no seu sistema em qualquer linguagem."
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
            <Card icon={<IconCode />} title="Autenticação">
              <FeatureList items={[
                "Chave admin via header <code style='font-family:monospace;font-size:12px;background:#f1f5f9;padding:1px 5px;border-radius:4px'>x-admin-key</code>",
                "Ambiente live/test controlado pela API key do cliente",
                "Chaves geráveis e revogáveis a qualquer momento",
                "Sem expiração automática — controlo total pelo administrador",
              ]} />
            </Card>
            <Card icon={<IconCode />} title="Endpoints disponíveis">
              <FeatureList items={[
                "Clientes: listar, criar",
                "API Keys: listar, gerar, revogar",
                "NIF Config: obter, criar/actualizar",
                "Séries: listar, criar, registar na AT",
                "Facturas: listar, criar, emitir, cancelar, PDF, ATCUD",
                "Produtos: listar, criar, eliminar",
                "SAF-T: exportar XML (anual ou mensal)",
              ]} />
            </Card>
          </div>
          {/* Endpoint preview */}
          <div style={{ background: "white", border: "1px solid #e8f0eb", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid #f1f5f9" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>Alguns endpoints</h3>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: BG }}>
                    <th style={{ padding: "10px 20px", textAlign: "left", fontWeight: 600, color: "#64748b", whiteSpace: "nowrap" as const }}>Método</th>
                    <th style={{ padding: "10px 20px", textAlign: "left", fontWeight: 600, color: "#64748b" }}>Endpoint</th>
                    <th style={{ padding: "10px 20px", textAlign: "left", fontWeight: 600, color: "#64748b" }}>Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["POST", "/invoices", "Criar factura"],
                    ["POST", "/invoices/{id}/issue", "Emitir — torna o documento legal"],
                    ["GET", "/invoices/{id}/pdf", "Download PDF com ATCUD e QR Code"],
                    ["POST", "/series", "Criar série de documentos"],
                    ["GET", "/saft", "Exportar SAF-T(PT) v1.04"],
                  ].map(([method, path, desc], i) => (
                    <tr key={path} style={{ borderTop: "1px solid #f1f5f9", background: i % 2 === 0 ? "white" : "rgba(248,250,249,0.5)" }}>
                      <td style={{ padding: "10px 20px", whiteSpace: "nowrap" as const }}>
                        <span style={{
                          fontFamily: "monospace", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 5,
                          background: method === "GET" ? "rgba(59,130,246,0.1)" : "rgba(40,167,69,0.1)",
                          color: method === "GET" ? "#3b82f6" : GREEN,
                        }}>
                          {method}
                        </span>
                      </td>
                      <td style={{ padding: "10px 20px", fontFamily: "monospace", fontSize: 12, color: NAVY, whiteSpace: "nowrap" as const }}>{path}</td>
                      <td style={{ padding: "10px 20px", color: "#64748b" }}>{desc}</td>
                    </tr>
                  ))}
                  <tr style={{ borderTop: "1px solid #f1f5f9", background: "rgba(248,250,249,0.5)" }}>
                    <td colSpan={3} style={{ padding: "12px 20px", color: "#94a3b8", fontSize: 13, fontStyle: "italic" }}>
                      ... e muito mais — gestão de clientes, produtos, séries, recibos, notas de crédito, webhooks e SDKs.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

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
