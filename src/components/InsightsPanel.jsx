export default function InsightsPanel() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,.05)",
        height: "100%",
      }}
    >
      <h3
        style={{
          marginBottom: "20px",
          color: "#1E293B",
        }}
      >
        Insights Executivos
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{
            background: "#ECFDF5",
            borderLeft: "4px solid #10B981",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          <strong>Capacidade suficiente</strong>
          <p
            style={{
              margin: "8px 0 0 0",
              color: "#475569",
              fontSize: "14px",
            }}
          >
            A equipe atual possui capacidade para absorver a carteira prevista.
          </p>
        </div>

        <div
          style={{
            background: "#FEF3C7",
            borderLeft: "4px solid #F59E0B",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          <strong>Atenção para Agosto</strong>

          <p
            style={{
              margin: "8px 0 0 0",
              color: "#475569",
              fontSize: "14px",
            }}
          >
            Agosto concentra o maior volume de projetos da carteira.
          </p>
        </div>

        <div
          style={{
            background: "#DBEAFE",
            borderLeft: "4px solid #3B82F6",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          <strong>Regional SP</strong>

          <p
            style={{
              margin: "8px 0 0 0",
              color: "#475569",
              fontSize: "14px",
            }}
          >
            SP representa a maior concentração de demanda.
          </p>
        </div>

        <div
          style={{
            background: "#FEE2E2",
            borderLeft: "4px solid #EF4444",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          <strong>Priorização pendente</strong>

          <p
            style={{
              margin: "8px 0 0 0",
              color: "#475569",
              fontSize: "14px",
            }}
          >
            Existem projetos classificados sem priorização definida.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          paddingTop: "20px",
          borderTop: "1px solid #E2E8F0",
        }}
      >
        <h4
          style={{
            marginBottom: "10px",
          }}
        >
          Recomendação
        </h4>

        <p
          style={{
            color: "#64748B",
            lineHeight: "1.6",
            fontSize: "14px",
          }}
        >
          Direcionar recursos para projetos de Agosto e revisar itens sem
          priorização para reduzir risco operacional.
        </p>
      </div>
    </div>
  );
}