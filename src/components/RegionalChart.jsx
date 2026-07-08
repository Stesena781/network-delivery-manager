export default function RegionalChart() {
  const regioes = [
    { nome: "SP", valor: 145, x: 330, y: 220 },
    { nome: "RJ/ES", valor: 35, x: 420, y: 260 },
    { nome: "MG", valor: 54, x: 400, y: 190 },
    { nome: "SUL", valor: 68, x: 280, y: 330 },
    { nome: "CO/NO", valor: 82, x: 220, y: 130 },
    { nome: "NE/BA/SE", valor: 120, x: 520, y: 140 },
  ];

  const max = Math.max(...regioes.map((r) => r.valor));

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "24px",
        marginTop: "20px",
        border: "1px solid #E5E7EB",
        boxShadow: "0 4px 12px rgba(0,0,0,.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h3
          style={{
            margin: 0,
          }}
        >
          Mapa Regional da Demanda
        </h3>

        <div
          style={{
            fontSize: "12px",
            color: "#64748B",
          }}
        >
          Distribuição geográfica da carteira
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "24px",
          alignItems: "center",
        }}
      >
        {/* MAPA */}

        <svg
          viewBox="0 0 700 400"
          style={{
            width: "100%",
            height: "400px",
          }}
        >
          {/* Contorno simplificado Brasil */}

          <path
            d="
              M170 90
              L250 50
              L450 60
              L560 120
              L600 220
              L540 340
              L420 370
              L290 350
              L220 280
              L160 180
              Z
            "
            fill="#F8FAFC"
            stroke="#CBD5E1"
            strokeWidth="2"
          />

          {regioes.map((regiao) => (
            <g key={regiao.nome}>
              <circle
                cx={regiao.x}
                cy={regiao.y}
                r={20 + (regiao.valor / max) * 30}
                fill="#790c91"
                opacity={0.75}
              />

              <text
                x={regiao.x}
                y={regiao.y - 8}
                textAnchor="middle"
                fill="#FFFFFF"
                fontWeight="700"
                fontSize="12"
              >
                {regiao.nome}
              </text>

              <text
                x={regiao.x}
                y={regiao.y + 12}
                textAnchor="middle"
                fill="#FFFFFF"
                fontWeight="700"
                fontSize="12"
              >
                {regiao.valor}
              </text>
            </g>
          ))}
        </svg>

        {/* RANKING */}

        <div>
          <h4
            style={{
              marginTop: 0,
              marginBottom: "16px",
            }}
          >
            Ranking Regional
          </h4>

          {[...regioes]
            .sort((a, b) => b.valor - a.valor)
            .map((regiao) => (
              <div
                key={regiao.nome}
                style={{
                  marginBottom: "14px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "4px",
                    fontSize: "14px",
                  }}
                >
                  <span>{regiao.nome}</span>
                  <strong>{regiao.valor}</strong>
                </div>

                <div
                  style={{
                    height: "6px",
                    background: "#6f1277",
                    borderRadius: "999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${(regiao.valor / max) * 100}%`,
                      height: "100%",
                      background: "#783694",
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* INSIGHT */}

      <div
        style={{
          marginTop: "20px",
          padding: "16px",
          borderRadius: "12px",
          background: "#F8FAFC",
          borderLeft: "4px solid #7C3AED",
        }}
      >
        <strong>
          Insight Regional
        </strong>

        <div
          style={{
            marginTop: "8px",
            color: "#475569",
            lineHeight: 1.6,
          }}
        >
          SP concentra a maior parcela da carteira,
          seguido por NE/BA/SE. As regiões Sudeste e
          Nordeste representam a maior parte da demanda
          operacional prevista.
        </div>
      </div>
    </div>
  );
}