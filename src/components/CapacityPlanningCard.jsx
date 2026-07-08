export default function CapacityPlanningCard() {
  const projetistas = 6;

  const capacidadeDiaPorProjetista = 1.5;
  const diasUteisMes = 22;
  const mesesProjeto = 3;

  const capacidadeDiaria =
    projetistas * capacidadeDiaPorProjetista;

  const capacidadeMensal =
    capacidadeDiaria * diasUteisMes;

  const capacidadeTrimestral =
    capacidadeMensal * mesesProjeto;

  const carteiraProjetos = 324;

  const capacidadeLivre =
    capacidadeTrimestral - carteiraProjetos;

  const utilizacao = Math.round(
    (carteiraProjetos /
      capacidadeTrimestral) *
    100
  );

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "18px",
        border: "1px solid #E5E7EB",
        boxShadow:
          "0 4px 12px rgba(0,0,0,.05)",
        width: "100%",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: "18px",
          fontWeight: 700,
          color: "#0F172A",
        }}
      >
        Capacity Planning
      </h3>

      <div
        style={{
          color: "#64748B",
          fontSize: "12px",
          marginTop: "4px",
          marginBottom: "20px",
        }}
      >
        Planejamento da capacidade operacional
      </div>

      <div
        style={{
          background: "#F8FAFC",
          borderRadius: "14px",
          padding: "16px",
          marginBottom: "18px",
        }}
      >
        <div
          style={{
            color: "#64748B",
            fontSize: "12px",
            marginBottom: "4px",
          }}
        >
          Utilização da Capacidade
        </div>

        <div
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#0F172A",
          }}
        >
          {utilizacao}%
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "18px",
        }}
      >
        <MiniRow
          label="Equipe"
          value={`${projetistas} Projetistas`}
        />

        <MiniRow
          label="Capacidade de Entrega"
          value={`${Math.round(
            capacidadeTrimestral
          )} Projetos`}
        />

        <MiniRow
          label="Carteira Atual"
          value={`${carteiraProjetos} Projetos`}
        />

        <MiniRow
          label="Capacidade Livre"
          value={`${Math.round(
            capacidadeLivre
          )} Projetos`}
        />
      </div>

      <div
        style={{
          borderTop: "1px solid #E5E7EB",
          paddingTop: "14px",
        }}
      >
        <div
          style={{
            fontWeight: "700",
            fontSize: "14px",
            marginBottom: "10px",
            color: "#0F172A",
          }}
        >
          Insight Executivo
        </div>

        <div
          style={{
            color: "#475569",
            fontSize: "13px",
            lineHeight: 1.7,
          }}
        >
          A capacidade atual permite absorver
          100% da carteira prevista para o período
          de 3 meses.

          A equipe possui capacidade estimada de
          {` ${Math.round(
            capacidadeTrimestral
          )} projetos`},
          frente a uma demanda de
          {` ${carteiraProjetos} projetos`},
          mantendo folga operacional de
          {` ${Math.round(
            capacidadeLivre
          )} projetos`}.
        </div>
      </div>
    </div>
  );
}

function MiniRow({
  label,
  value,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",
        background: "#F8FAFC",
        padding: "12px 14px",
        borderRadius: "12px",
      }}
    >
      <span
        style={{
          color: "#64748B",
          fontSize: "13px",
        }}
      >
        {label}
      </span>

      <strong
        style={{
          color: "#0F172A",
        }}
      >
        {value}
      </strong>
    </div>
  );
}