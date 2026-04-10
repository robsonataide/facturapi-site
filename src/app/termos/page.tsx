import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso — Facturapi",
  description: "Termos e condições de utilização do serviço Facturapi.",
};

const NAVY = "#2C3E50";
const GREEN = "#28A745";

export default function TermosPage() {
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
            <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.03em" }}><span style={{ color: NAVY }}>factur</span><span style={{ color: GREEN }}>api</span></span>
          </a>
          <a href="/" style={{ fontSize: 14, fontWeight: 500, color: "#64748b", textDecoration: "none" }}>← Voltar ao início</a>
        </div>
      </header>

      {/* Conteúdo */}
      <main style={{ maxWidth: 740, margin: "0 auto", padding: "64px 24px 96px" }}>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: NAVY, letterSpacing: "-0.02em", marginBottom: 8 }}>
          Termos de Uso
        </h1>
        <p style={{ fontSize: 14, color: "#94a3b8", marginBottom: 48 }}>Última actualização: Abril de 2026</p>

        <Sec title="1. Aceitação dos Termos">
          <P>Ao aceder ou utilizar o serviço <strong>Facturapi</strong> (disponível em <strong>facturapi.pt</strong>), o utilizador aceita ficar vinculado aos presentes Termos de Uso. Se não concordar com algum dos termos, não deve utilizar o serviço.</P>
        </Sec>

        <Sec title="2. Descrição do Serviço">
          <P>O Facturapi é uma plataforma de facturação electrónica que permite a emissão de documentos fiscais conformes com a legislação portuguesa, incluindo facturas, recibos, notas de crédito, exportação SAF-T(PT) e integração com os serviços da Autoridade Tributária (AT).</P>
          <P>O serviço destina-se exclusivamente a pessoas singulares ou colectivas que exerçam actividade económica em Portugal e possuam um Número de Identificação Fiscal (NIF) válido.</P>
        </Sec>

        <Sec title="3. Conta e Credenciais">
          <P>O utilizador é responsável pela confidencialidade das suas credenciais de acesso (email, senha, chaves de API). Deve notificar imediatamente o Facturapi em caso de acesso não autorizado à sua conta.</P>
          <P>É proibido partilhar credenciais de acesso ou chaves de API com terceiros não autorizados. Cada conta destina-se ao uso exclusivo do titular.</P>
        </Sec>

        <Sec title="4. Utilização Aceitável">
          <P>O utilizador compromete-se a utilizar o serviço apenas para fins legítimos e em conformidade com a legislação vigente. É expressamente proibido:</P>
          <ul style={ulStyle}>
            <li>Emitir documentos fiscais com informação falsa ou fraudulenta.</li>
            <li>Utilizar o serviço para actividades ilegais ou contrárias à boa-fé.</li>
            <li>Tentar aceder a dados de outros utilizadores ou comprometer a segurança do sistema.</li>
            <li>Realizar engenharia reversa, descompilar ou reproduzir o serviço.</li>
            <li>Sobrecarregar deliberadamente a infraestrutura do serviço (ataques de negação de serviço).</li>
          </ul>
        </Sec>

        <Sec title="5. Conformidade Fiscal">
          <P>O Facturapi gera documentos fiscais de acordo com a legislação portuguesa em vigor. No entanto, a responsabilidade pela correcta utilização do serviço e pelo cumprimento das obrigações fiscais é exclusivamente do utilizador.</P>
          <P>O utilizador deve garantir que os dados introduzidos (NIF, valores, descrições) são correctos e correspondem a transacções reais. A emissão de documentos fiscais falsos constitui crime punido por lei.</P>
        </Sec>

        <Sec title="6. Disponibilidade do Serviço">
          <P>O Facturapi esforça-se por manter o serviço disponível de forma contínua, mas não garante disponibilidade ininterrupta. Podem ocorrer períodos de manutenção programada, para os quais será dado aviso prévio sempre que possível.</P>
          <P>O Facturapi não se responsabiliza por danos decorrentes de interrupções temporárias do serviço fora do seu controlo, incluindo falhas de infraestrutura de terceiros.</P>
        </Sec>

        <Sec title="7. Propriedade Intelectual">
          <P>Todos os direitos de propriedade intelectual relativos ao serviço Facturapi (código, design, marca, documentação) são propriedade exclusiva do Facturapi ou dos seus licenciantes. O utilizador não adquire qualquer direito de propriedade intelectual pelo uso do serviço.</P>
          <P>Os documentos fiscais gerados pelo utilizador através da plataforma são propriedade do utilizador.</P>
        </Sec>

        <Sec title="8. Limitação de Responsabilidade">
          <P>Na máxima extensão permitida pela lei aplicável, o Facturapi não será responsável por danos indirectos, incidentais, especiais ou consequentes resultantes da utilização ou impossibilidade de utilização do serviço.</P>
          <P>A responsabilidade total do Facturapi perante o utilizador, por qualquer causa, não excederá o valor pago pelo utilizador pelo serviço nos 12 meses anteriores ao evento que deu origem à responsabilidade.</P>
        </Sec>

        <Sec title="9. Suspensão e Rescisão">
          <P>O Facturapi reserva-se o direito de suspender ou encerrar contas que violem estes Termos, sem aviso prévio em caso de violação grave. Em caso de rescisão, os dados do utilizador serão conservados pelo período legalmente exigido e posteriormente eliminados.</P>
          <P>O utilizador pode encerrar a sua conta a qualquer momento através do painel de administração ou por contacto direto.</P>
        </Sec>

        <Sec title="10. Alterações aos Termos">
          <P>O Facturapi pode actualizar estes Termos periodicamente. As alterações materiais serão comunicadas com um aviso prévio mínimo de 30 dias. A continuação da utilização do serviço após esse período constitui aceitação dos novos termos.</P>
        </Sec>

        <Sec title="11. Lei Aplicável e Foro">
          <P>Os presentes Termos são regidos pela lei portuguesa. Para a resolução de litígios, é competente o tribunal da comarca de Lisboa, sem prejuízo dos direitos dos consumidores nos termos da legislação aplicável.</P>
          <P>Para resolução alternativa de litígios, pode recorrer ao <strong>Centro de Arbitragem de Conflitos de Consumo de Lisboa</strong> em <strong>www.centroarbitragemlisboa.pt</strong>.</P>
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
            <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: "-0.03em" }}><span style={{ color: "white" }}>factur</span><span style={{ color: GREEN }}>api</span></span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginLeft: 4 }}>© 2026 Todos os direitos reservados.</span>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/privacidade" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Política de Privacidade</a>
            <a href="/termos" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Termos de Uso</a>
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
