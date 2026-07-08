export default function RiskPanel() {
  const riscos = [
    {
      tipo: "CRÍTICO",
      titulo: "Projetos sem priorização",
      descricao:
        "Existem projetos aguardando definição de prioridade.",
      cor: "#EF4444",
      bg: "#FEE2E2",
    },
    {
      tipo: "ALERTA",
      titulo: "Pico de demanda em Agosto",
      descricao:
        "Agosto concentra o maior volume da carteira.",
      cor: "#F59E0B",
      bg: "#FEF3C7",
    },
    {
      tipo: "ATENÇÃO",
      titulo: "Concentração Regional",
      descricao:
        "SP representa grande parte da demanda total.",
      cor: "#3B82F6",
      bg: "#DBEAFE",
    },
    {
      tipo: "OK",
      titulo: "Capacidade suficiente",
      descricao:
        "A equipe atual suporta a demanda prevista.",
      cor: "#10B981",
      bg: "#DCFCE7",
    },
  ];

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "24px",
        marginTop: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,.05)",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <h3
          style={{
            margin: 0,
          }}
        >
          Painel de Riscos
        </h3>

        <div
          style={{
            color: "#64748B",
            marginTop: "5px",
            fontSize: "14px",
          }}
        >
          Principais riscos e oportunidades da carteira
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {riscos.map((risco) => (
          <div
            key={risco.titulo}
            style={{
              background: risco.bg,
              borderLeft: `5px solid ${risco.cor}`,
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <div
              style={{
                color: risco.cor,
                fontWeight: "bold",
                fontSize: "12px",
                marginBottom: "6px",
              }}
            >
              {risco.tipo}
            </div>

            <div
              style={{
                fontWeight: "600",
                marginBottom: "6px",
              }}
            >
              {risco.titulo}
            </div>

            <div
              style={{
                fontSize: "14px",
                color: "#475569",
              }}
            >
              {risco.descricao}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "20px",
          paddingTop: "20px",
          borderTop: "1px solid #E5E7EB",
        }}
      >
        <h4
          style={{
            marginBottom: "10px",
            marginTop: 0,
          }}
        >
          Recomendação Executiva
        </h4>

        <p
          style={{
            color: "#64748B",
            lineHeight: "1.6",
            margin: 0,
          }}
        >
          Priorizar projetos de Agosto, revisar itens sem
          priorização definida e redistribuir a carga entre
          as regionais para reduzir riscos operacionais.
        </p>
      </div>
    </div>
  );
}