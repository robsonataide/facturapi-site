import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Facturapi",
  description: "Política de privacidade e protecção de dados do Facturapi.",
};

const NAVY = "#2C3E50";
const GREEN = "#28A745";

export default function PrivacidadePage() {
  return (
    <>
      {/* Navbar simples */}
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
            <span style={{ fontSize: 16, fontWeight: 800, color: NAVY, letterSpacing: "-0.03em" }}>facturapi</span>
          </a>
          <a href="/" style={{ fontSize: 14, fontWeight: 500, color: "#64748b", textDecoration: "none" }}>← Voltar ao início</a>
        </div>
      </header>

      {/* Conteúdo */}
      <main style={{ maxWidth: 740, margin: "0 auto", padding: "64px 24px 96px" }}>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", marginBottom: 8 }}>
          Política de Privacidade
        </h1>
        <p style={{ fontSize: 14, color: "#94a3b8", marginBottom: 48 }}>Última actualização: Abril de 2026</p>

        <Sec title="1. Responsável pelo Tratamento">
          <P>O responsável pelo tratamento dos seus dados pessoais é a <strong>Facturapi</strong>, acessível em <strong>facturapi.pt</strong>.</P>
          <P>Para qualquer questão relacionada com a privacidade dos seus dados, pode contactar-nos através do endereço <strong>privacidade@facturapi.pt</strong>.</P>
        </Sec>

        <Sec title="2. Dados Recolhidos">
          <P>O Facturapi pode recolher as seguintes categorias de dados:</P>
          <ul style={ulStyle}>
            <li><strong>Dados de identificação</strong>: nome, endereço de email, NIF, número de telefone.</li>
            <li><strong>Dados de facturação</strong>: informação fiscal necessária para a emissão de documentos (NIF do cliente/fornecedor, morada, dados da empresa).</li>
            <li><strong>Dados de utilização</strong>: registos de acesso, endereço IP, tipo de navegador, páginas visitadas.</li>
            <li><strong>Dados técnicos</strong>: tokens de autenticação, chaves de API associadas à sua conta.</li>
          </ul>
        </Sec>

        <Sec title="3. Finalidade do Tratamento">
          <P>Os seus dados são tratados para as seguintes finalidades:</P>
          <ul style={ulStyle}>
            <li>Prestação do serviço de facturação electrónica e emissão de documentos fiscais.</li>
            <li>Cumprimento de obrigações legais e fiscais perante a Autoridade Tributária (AT).</li>
            <li>Gestão da relação contratual e suporte ao cliente.</li>
            <li>Melhoria e desenvolvimento do serviço.</li>
            <li>Segurança e prevenção de fraude.</li>
          </ul>
        </Sec>

        <Sec title="4. Base Legal">
          <P>O tratamento dos seus dados baseia-se nas seguintes bases legais, nos termos do Regulamento Geral sobre a Protecção de Dados (RGPD):</P>
          <ul style={ulStyle}>
            <li><strong>Execução de contrato</strong> (Art.º 6.º, n.º 1, al. b) do RGPD): para a prestação do serviço contratado.</li>
            <li><strong>Obrigação legal</strong> (Art.º 6.º, n.º 1, al. c) do RGPD): para cumprimento das obrigações fiscais e legais aplicáveis.</li>
            <li><strong>Interesse legítimo</strong> (Art.º 6.º, n.º 1, al. f) do RGPD): para segurança, prevenção de fraude e melhoria do serviço.</li>
          </ul>
        </Sec>

        <Sec title="5. Conservação dos Dados">
          <P>Os dados de facturação são conservados pelo período mínimo exigido pela legislação fiscal portuguesa (actualmente 10 anos). Os restantes dados são conservados pelo período necessário à prestação do serviço e enquanto a conta se mantiver activa, sendo eliminados no prazo de 90 dias após o encerramento da conta, salvo obrigação legal em contrário.</P>
        </Sec>

        <Sec title="6. Partilha de Dados">
          <P>Os seus dados não são vendidos a terceiros. Podemos partilhar dados com:</P>
          <ul style={ulStyle}>
            <li><strong>Autoridade Tributária (AT)</strong>: para cumprimento das obrigações de comunicação fiscal (SAF-T, séries, ATCUD).</li>
            <li><strong>Prestadores de serviços</strong>: fornecedores de infraestrutura cloud e alojamento, vinculados por contratos de processamento de dados e obrigados a manter a confidencialidade.</li>
          </ul>
        </Sec>

        <Sec title="7. Os Seus Direitos">
          <P>Nos termos do RGPD, tem os seguintes direitos:</P>
          <ul style={ulStyle}>
            <li><strong>Acesso</strong>: obter confirmação do tratamento e acesso aos seus dados.</li>
            <li><strong>Rectificação</strong>: corrigir dados inexactos ou incompletos.</li>
            <li><strong>Apagamento</strong>: solicitar a eliminação dos dados, nos casos previstos por lei.</li>
            <li><strong>Limitação</strong>: restringir o tratamento em determinadas circunstâncias.</li>
            <li><strong>Portabilidade</strong>: receber os seus dados num formato estruturado e legível por máquina.</li>
            <li><strong>Oposição</strong>: opor-se ao tratamento baseado em interesse legítimo.</li>
          </ul>
          <P>Para exercer estes direitos, contacte <strong>privacidade@facturapi.pt</strong>. Tem ainda o direito de apresentar reclamação à <strong>Comissão Nacional de Protecção de Dados (CNPD)</strong> em <strong>www.cnpd.pt</strong>.</P>
        </Sec>

        <Sec title="8. Segurança">
          <P>Adoptamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra acesso não autorizado, perda ou destruição, incluindo encriptação em trânsito (TLS) e em repouso, controlo de acessos e monitorização contínua dos sistemas.</P>
        </Sec>

        <Sec title="9. Cookies">
          <P>O site <strong>facturapi.pt</strong> utiliza exclusivamente cookies técnicos essenciais ao funcionamento. Não utilizamos cookies de rastreamento ou publicidade de terceiros.</P>
        </Sec>

        <Sec title="10. Alterações a esta Política">
          <P>Reservamo-nos o direito de actualizar esta política. Em caso de alterações materiais, notificaremos os utilizadores por email ou através de aviso no serviço. A data da última actualização está indicada no topo desta página.</P>
        </Sec>
      </main>

      <footer style={{ background: NAVY, padding: "32px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="rgba(255,255,255,0.12)" />
              <rect x="8" y="8" width="16" height="2" rx="1" fill={GREEN} />
              <rect x="8" y="13" width="12" height="2" rx="1" fill="white" />
              <rect x="8" y="18" width="14" height="2" rx="1" fill="white" />
              <rect x="8" y="23" width="10" height="2" rx="1" fill="rgba(255,255,255,0.45)" />
            </svg>
            <span style={{ fontSize: 14, fontWeight: 800, color: "white", letterSpacing: "-0.03em" }}>facturapi</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginLeft: 4 }}>© 2026 Todos os direitos reservados.</span>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/privacidade" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Política de Privacidade</a>
            <a href="/termos" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Termos de Uso</a>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ─── Helpers de formatação ─────────────────────────────────────────────────── */
function Sec({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 19, fontWeight: 700, color: "#2C3E50", marginBottom: 12, paddingBottom: 8, borderBottom: "1px solid #e8f0eb" }}>{title}</h2>
      {children}
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 12 }}>{children}</p>;
}

const ulStyle: React.CSSProperties = {
  paddingLeft: 20, marginBottom: 12, display: "flex", flexDirection: "column", gap: 6,
  fontSize: 15, color: "#475569", lineHeight: 1.7,
};
