export default function ExecutiveSummary({
  projetos = [],
}) {
  const totalProjetos = projetos.length;

  const semPriorizacao = projetos.filter(
    (p) =>
      p["ESCOPO PMO/PRIORIDADE"] ===
      "SEM PRIORIZAÇÃO"
  ).length;

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "20px 24px",
        marginBottom: "20px",
        border: "1px solid #E5E7EB",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            color: "#7C3AED",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          Executive Summary
        </div>

        <div
          style={{
            color: "#334155",
            lineHeight: 1.6,
          }}
        >
          A carteira possui {totalProjetos} projetos.
          Projeto ENG RE concentra a maior parcela
          da demanda operacional.

          Existem {semPriorizacao} projetos sem
          priorização definida.
        </div>
      </div>

      <div
        style={{
          fontSize: "42px",
          color: "#10B981",
          fontWeight: 700,
        }}
      >
        87%
      </div>
    </div>
  );
}