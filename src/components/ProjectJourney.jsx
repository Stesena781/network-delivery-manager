export default function ProjectJourney() {
  const etapas = [
    {
      titulo: "Regional",
      valor: "RJ/ES",
      status: "concluido",
    },
    {
      titulo: "Engenharia",
      valor: "Aprovada",
      status: "concluido",
    },
    {
      titulo: "Vistoria",
      valor: "Aprovada",
      status: "concluido",
    },
    {
      titulo: "Projeto",
      valor: "M2026_RJTVO_01",
      status: "concluido",
    },
    {
      titulo: "Execução",
      valor: "Estamos aqui",
      status: "atual",
    },
    {
      titulo: "Término",
      valor: "22/10/2026",
      status: "futuro",
    },
  ];

  const etapaAtualIndex = etapas.findIndex((etapa) => etapa.status === "atual");

  const getStepColor = (status) => {
    if (status === "concluido") return "#10B981";
    if (status === "atual") return "#7C3AED";
    return "#CBD5E1";
  };

  const getStepBackground = (status) => {
    if (status === "concluido") {
      return "linear-gradient(135deg, #10B981 0%, #059669 100%)";
    }

    if (status === "atual") {
      return "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)";
    }

    return "linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 100%)";
  };

  const getConnectorBackground = (index) => {
    if (index < etapaAtualIndex) {
      return "linear-gradient(90deg, #10B981 0%, #7C3AED 100%)";
    }

    if (index === etapaAtualIndex) {
      return "linear-gradient(90deg, #7C3AED 0%, #E5E7EB 100%)";
    }

    return "#E5E7EB";
  };

  return (
    <div
      style={{
        width: "100%",
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 55%, #FAF5FF 100%)",
        borderRadius: "28px",
        padding: "26px",
        border: "1px solid #F1F5F9",
        boxShadow: "0px 18px 45px rgba(15,23,42,.08)",
        marginTop: "20px",
        fontFamily: "Inter, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "190px",
          height: "190px",
          borderRadius: "999px",
          background: "rgba(124,58,237,.10)",
          top: "-80px",
          right: "-70px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "140px",
          height: "140px",
          borderRadius: "999px",
          background: "rgba(16,185,129,.08)",
          bottom: "-56px",
          left: "-44px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "7px 12px",
                borderRadius: "999px",
                background: "#F3E8FF",
                color: "#7C3AED",
                fontSize: "12px",
                fontWeight: 800,
                marginBottom: "12px",
                letterSpacing: ".02em",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "999px",
                  background: "#7C3AED",
                  boxShadow: "0 0 0 4px rgba(124,58,237,.14)",
                }}
              />
              JORNADA DO PROJETO
            </div>

            <h3
              style={{
                margin: 0,
                color: "#0F172A",
                fontSize: "28px",
                lineHeight: 1.15,
                fontWeight: 900,
                letterSpacing: "-.03em",
              }}
            >
              Jornada de Execução do Projeto
            </h3>

            <div
              style={{
                marginTop: "8px",
                color: "#64748B",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              IDMETRO:{" "}
              <strong
                style={{
                  color: "#334155",
                  fontWeight: 800,
                }}
              >
                M2026_RJTVO_01
              </strong>
            </div>
          </div>

          <div
            style={{
              minWidth: "190px",
              padding: "14px 16px",
              borderRadius: "20px",
              background: "#FFFFFF",
              border: "1px solid #EDE9FE",
              boxShadow: "0 10px 25px rgba(124,58,237,.08)",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#64748B",
                fontWeight: 700,
                marginBottom: "7px",
              }}
            >
              Status atual
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "999px",
                  background: "#7C3AED",
                  boxShadow: "0 0 0 5px rgba(124,58,237,.14)",
                }}
              />

              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 900,
                  color: "#0F172A",
                  letterSpacing: "-.03em",
                }}
              >
                Execução
              </span>
            </div>

            <div
              style={{
                marginTop: "8px",
                display: "inline-flex",
                alignItems: "center",
                padding: "5px 9px",
                borderRadius: "999px",
                background: "#ECFDF5",
                color: "#047857",
                fontSize: "12px",
                fontWeight: 800,
              }}
            >
              4 etapas concluídas
            </div>
          </div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,.78)",
            border: "1px solid #F1F5F9",
            borderRadius: "26px",
            padding: "30px 18px 24px",
            overflowX: "auto",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.7)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              minWidth: "1180px",
              padding: "28px 8px 10px",
            }}
          >
            {etapas.map((etapa, index) => {
              const isAtual = etapa.status === "atual";
              const isConcluido = etapa.status === "concluido";
              const isFuturo = etapa.status === "futuro";

              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      minWidth: "170px",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    {isAtual && (
                      <div
                        style={{
                          position: "absolute",
                          top: "-42px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          pointerEvents: "none",
                          animation: "arrowFloat 1.25s ease-in-out infinite",
                        }}
                      >
                        <div
                          style={{
                            padding: "5px 10px",
                            borderRadius: "999px",
                            background: "#7C3AED",
                            color: "#FFFFFF",
                            fontSize: "11px",
                            fontWeight: 900,
                            boxShadow: "0 12px 24px rgba(124,58,237,.30)",
                            whiteSpace: "nowrap",
                            marginBottom: "4px",
                          }}
                        >
                          ESTAMOS AQUI
                        </div>

                        <div
                          style={{
                            width: 0,
                            height: 0,
                            borderLeft: "9px solid transparent",
                            borderRight: "9px solid transparent",
                            borderTop: "12px solid #7C3AED",
                            filter: "drop-shadow(0 8px 8px rgba(124,58,237,.25))",
                          }}
                        />
                      </div>
                    )}

                    <div
                      style={{
                        width: isAtual ? "68px" : "58px",
                        height: isAtual ? "68px" : "58px",
                        margin: "0 auto",
                        borderRadius: "999px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        fontWeight: 900,
                        fontSize: isAtual ? "22px" : "18px",
                        background: getStepBackground(etapa.status),
                        border: isAtual
                          ? "5px solid rgba(255,255,255,.95)"
                          : "4px solid #FFFFFF",
                        boxShadow: isAtual
                          ? "0 0 0 10px rgba(124,58,237,.14), 0 20px 38px rgba(124,58,237,.30)"
                          : isConcluido
                          ? "0 14px 28px rgba(16,185,129,.22)"
                          : "0 10px 22px rgba(148,163,184,.18)",
                        transform: isAtual ? "translateY(-4px)" : "none",
                        transition: "all .25s ease",
                      }}
                    >
                      {isConcluido ? "✓" : isAtual ? "⌃" : "○"}
                    </div>

                    <div
                      style={{
                        marginTop: "14px",
                        fontWeight: 900,
                        color: isAtual ? "#6D28D9" : "#0F172A",
                        fontSize: isAtual ? "15px" : "14px",
                        letterSpacing: "-.01em",
                      }}
                    >
                      {etapa.titulo}
                    </div>

                    <div
                      style={{
                        margin: "7px auto 0",
                        width: "fit-content",
                        maxWidth: "150px",
                        color: isAtual
                          ? "#6D28D9"
                          : isFuturo
                          ? "#94A3B8"
                          : "#64748B",
                        fontSize: "12px",
                        fontWeight: isAtual ? 900 : 700,
                        lineHeight: 1.4,
                        padding: isAtual ? "6px 10px" : "0",
                        borderRadius: "999px",
                        background: isAtual ? "#F3E8FF" : "transparent",
                        border: isAtual ? "1px solid #E9D5FF" : "none",
                      }}
                    >
                      {etapa.valor}
                    </div>
                  </div>

                  {index < etapas.length - 1 && (
                    <div
                      style={{
                        width: "78px",
                        height: "8px",
                        borderRadius: "999px",
                        background: "#E5E7EB",
                        margin: "0 -4px",
                        position: "relative",
                        overflow: "hidden",
                        transform: "translateY(-30px)",
                        boxShadow: "inset 0 1px 2px rgba(15,23,42,.08)",
                      }}
                    >
                      <div
                        style={{
                          width: index <= etapaAtualIndex ? "100%" : "0%",
                          height: "100%",
                          borderRadius: "999px",
                          background: getConnectorBackground(index),
                          transition: "width .45s ease",
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: "16px",
          }}
        >
          <div
            style={{
              background: "#FAF5FF",
              border: "1px solid #E9D5FF",
              borderLeft: "5px solid #7C3AED",
              padding: "18px",
              borderRadius: "22px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "12px",
                  background: "#7C3AED",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  boxShadow: "0 10px 22px rgba(124,58,237,.28)",
                }}
              >
                i
              </div>

              <strong
                style={{
                  color: "#0F172A",
                  fontSize: "15px",
                  fontWeight: 900,
                }}
              >
                Situação Atual
              </strong>
            </div>

            <div
              style={{
                marginTop: "8px",
                color: "#475569",
                lineHeight: 1.7,
                fontSize: "14px",
              }}
            >
              O projeto encontra-se atualmente na etapa de{" "}
              <strong style={{ color: "#6D28D9" }}>Execução</strong>. Todas as
              fases anteriores foram concluídas e aprovadas. A previsão
              permanece para encerramento em{" "}
              <strong style={{ color: "#0F172A" }}>22/10/2026</strong>.
            </div>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #F1F5F9",
              padding: "18px",
              borderRadius: "22px",
              boxShadow: "0 10px 25px rgba(15,23,42,.05)",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: 800,
                color: "#64748B",
                marginBottom: "12px",
              }}
            >
              Progresso da jornada
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "14px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "34px",
                    lineHeight: 1,
                    fontWeight: 900,
                    color: "#0F172A",
                    letterSpacing: "-.05em",
                  }}
                >
                  80%
                </div>

                <div
                  style={{
                    marginTop: "6px",
                    color: "#64748B",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  Avanço operacional
                </div>
              </div>

              <div
                style={{
                  width: "86px",
                  height: "86px",
                  borderRadius: "999px",
                  background:
                    "conic-gradient(#7C3AED 0deg 288deg, #EDE9FE 288deg 360deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 12px 28px rgba(124,58,237,.12)",
                }}
              >
                <div
                  style={{
                    width: "62px",
                    height: "62px",
                    borderRadius: "999px",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7C3AED",
                    fontWeight: 900,
                    fontSize: "13px",
                  }}
                >
                  4/5
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "14px",
                height: "9px",
                borderRadius: "999px",
                background: "#F1F5F9",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "100%",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(90deg, #10B981 0%, #7C3AED 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes arrowFloat {
            0% {
              transform: translateX(-50%) translateY(0);
            }
            50% {
              transform: translateX(-50%) translateY(-8px);
            }
            100% {
              transform: translateX(-50%) translateY(0);
            }
          }

          @media (max-width: 980px) {
            div[style*="grid-template-columns: 1.1fr .9fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}