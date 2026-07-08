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
  const etapasConcluidas = etapas.filter((etapa) => etapa.status === "concluido").length;
  const etapasOperacionais = etapas.filter((etapa) => etapa.status !== "futuro").length;
  const progresso = Math.round((etapasConcluidas / etapasOperacionais) * 100);

  const getStepStyles = (status) => {
    if (status === "concluido") {
      return {
        circleBackground: "#FFFFFF",
        circleColor: "#10B981",
        circleBorder: "1px solid rgba(16,185,129,.28)",
        circleShadow: "0 10px 22px rgba(16,185,129,.10)",
        titleColor: "#0F172A",
        valueColor: "#64748B",
      };
    }

    if (status === "atual") {
      return {
        circleBackground: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
        circleColor: "#FFFFFF",
        circleBorder: "4px solid #FFFFFF",
        circleShadow:
          "0 0 0 8px rgba(124,58,237,.12), 0 18px 36px rgba(124,58,237,.28)",
        titleColor: "#6D28D9",
        valueColor: "#6D28D9",
      };
    }

    return {
      circleBackground: "#FFFFFF",
      circleColor: "#94A3B8",
      circleBorder: "1px solid #E2E8F0",
      circleShadow: "0 8px 18px rgba(148,163,184,.10)",
      titleColor: "#64748B",
      valueColor: "#94A3B8",
    };
  };

  const getConnectorStyle = (index) => {
    if (index < etapaAtualIndex) {
      return "linear-gradient(90deg, #10B981 0%, #7C3AED 100%)";
    }

    return "#E5E7EB";
  };

  return (
    <div
      style={{
        width: "100%",
        marginTop: "20px",
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "28px",
        boxShadow: "0 18px 45px rgba(15,23,42,.07)",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "30px 32px 28px",
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 72%, #FAF5FF 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            borderRadius: "999px",
            right: "-90px",
            top: "-110px",
            background:
              "radial-gradient(circle, rgba(124,58,237,.12) 0%, rgba(124,58,237,0) 68%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "180px",
            height: "180px",
            borderRadius: "999px",
            left: "-80px",
            bottom: "-100px",
            background:
              "radial-gradient(circle, rgba(16,185,129,.10) 0%, rgba(16,185,129,0) 70%)",
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
              marginBottom: "34px",
              maxWidth: "760px",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#0F172A",
                fontSize: "30px",
                lineHeight: 1.15,
                fontWeight: 850,
                letterSpacing: "-.035em",
              }}
            >
              Jornada de Execução do Projeto
            </h3>

            <div
              style={{
                marginTop: "10px",
                color: "#64748B",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              IDMETRO:{" "}
              <strong
                style={{
                  color: "#334155",
                  fontWeight: 750,
                  letterSpacing: "-.01em",
                }}
              >
                M2026_RJTVO_01
              </strong>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.82)",
              border: "1px solid #EEF2F7",
              borderRadius: "26px",
              padding: "34px 22px 30px",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,.85), 0 10px 30px rgba(15,23,42,.035)",
              overflowX: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                width: "100%",
                justifyContent: "space-between",
                padding: "28px 4px 2px",
              }}
            >
              {etapas.map((etapa, index) => {
                const isAtual = etapa.status === "atual";
                const isConcluido = etapa.status === "concluido";
                const styles = getStepStyles(etapa.status);

                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "130px",
                        textAlign: "center",
                        position: "relative",
                      }}
                    >
                      {isAtual && (
                        <div
                          style={{
                            position: "absolute",
                            top: "-36px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            animation: "journeyArrowFloat 1.35s ease-in-out infinite",
                            pointerEvents: "none",
                          }}
                        >
                          <div
                            style={{
                              width: 0,
                              height: 0,
                              borderLeft: "10px solid transparent",
                              borderRight: "10px solid transparent",
                              borderTop: "14px solid #7C3AED",
                              filter:
                                "drop-shadow(0 10px 10px rgba(124,58,237,.28))",
                            }}
                          />
                        </div>
                      )}

                      <div
                        style={{
                          width: isAtual ? "66px" : "56px",
                          height: isAtual ? "66px" : "56px",
                          margin: "0 auto",
                          borderRadius: "999px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: styles.circleBackground,
                          color: styles.circleColor,
                          border: styles.circleBorder,
                          boxShadow: styles.circleShadow,
                          fontSize: isAtual ? "24px" : "18px",
                          fontWeight: 900,
                          transform: isAtual ? "translateY(-5px)" : "none",
                          transition: "all .25s ease",
                        }}
                      >
                        {isConcluido ? "✓" : isAtual ? "⌃" : "○"}
                      </div>

                      <div
                        style={{
                          marginTop: isAtual ? "13px" : "16px",
                          color: styles.titleColor,
                          fontSize: "14px",
                          fontWeight: isAtual ? 850 : 750,
                          letterSpacing: "-.01em",
                        }}
                      >
                        {etapa.titulo}
                      </div>

                      <div
                        style={{
                          marginTop: "6px",
                          color: styles.valueColor,
                          fontSize: "12.5px",
                          lineHeight: 1.45,
                          fontWeight: isAtual ? 800 : 500,
                          maxWidth: "130px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      >
                        {etapa.valor}
                      </div>
                    </div>

                    {index < etapas.length - 1 && (
                      <div
                        style={{
                          width: "100px",
                          height: "2px",
                          borderRadius: "999px",
                          background: getConnectorStyle(index),
                          marginTop: "28px",
                          boxShadow:
                            index < etapaAtualIndex
                              ? "0 0 14px rgba(189, 183, 199, 0.16)"
                              : "none",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, .85fr)",
              gap: "18px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEF2F7",
                borderRadius: "24px",
                padding: "22px",
                boxShadow: "0 12px 28px rgba(15,23,42,.045)",
              }}
            >
              <div
                style={{
                  color: "#0F172A",
                  fontSize: "16px",
                  fontWeight: 850,
                  letterSpacing: "-.015em",
                  marginBottom: "16px",
                }}
              >
                Resumo Executivo
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    padding: "15px 16px",
                    borderRadius: "18px",
                    background: "#F8FAFC",
                    border: "1px solid #EEF2F7",
                  }}
                >
                  <div
                    style={{
                      color: "#64748B",
                      fontSize: "12px",
                      fontWeight: 700,
                      marginBottom: "6px",
                    }}
                  >
                    Fase atual
                  </div>

                  <div
                    style={{
                      color: "#6D28D9",
                      fontSize: "18px",
                      fontWeight: 850,
                      letterSpacing: "-.02em",
                    }}
                  >
                    Execução
                  </div>
                </div>

                <div
                  style={{
                    padding: "15px 16px",
                    borderRadius: "18px",
                    background: "#F8FAFC",
                    border: "1px solid #EEF2F7",
                  }}
                >
                  <div
                    style={{
                      color: "#64748B",
                      fontSize: "12px",
                      fontWeight: 700,
                      marginBottom: "6px",
                    }}
                  >
                    Etapas concluídas
                  </div>

                  <div
                    style={{
                      color: "#0F172A",
                      fontSize: "18px",
                      fontWeight: 850,
                      letterSpacing: "-.02em",
                    }}
                  >
                    4 de 5
                  </div>
                </div>

                <div
                  style={{
                    padding: "15px 16px",
                    borderRadius: "18px",
                    background: "#F8FAFC",
                    border: "1px solid #EEF2F7",
                  }}
                >
                  <div
                    style={{
                      color: "#64748B",
                      fontSize: "12px",
                      fontWeight: 700,
                      marginBottom: "6px",
                    }}
                  >
                    Previsão de encerramento
                  </div>

                  <div
                    style={{
                      color: "#0F172A",
                      fontSize: "18px",
                      fontWeight: 850,
                      letterSpacing: "-.02em",
                    }}
                  >
                    22/10/2026
                  </div>
                </div>

                <div
                  style={{
                    padding: "15px 16px",
                    borderRadius: "18px",
                    background: "#F0FDF4",
                    border: "1px solid #DCFCE7",
                  }}
                >
                  <div
                    style={{
                      color: "#166534",
                      fontSize: "12px",
                      fontWeight: 700,
                      marginBottom: "6px",
                    }}
                  >
                    Bloqueio operacional
                  </div>

                  <div
                    style={{
                      color: "#15803D",
                      fontSize: "18px",
                      fontWeight: 850,
                      letterSpacing: "-.02em",
                    }}
                  >
                    Não identificado
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #EEF2F7",
                borderRadius: "24px",
                padding: "22px",
                boxShadow: "0 12px 28px rgba(15,23,42,.045)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "16px",
                  marginBottom: "18px",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#0F172A",
                      fontSize: "16px",
                      fontWeight: 850,
                      letterSpacing: "-.015em",
                    }}
                  >
                    Progresso
                  </div>

                  <div
                    style={{
                      marginTop: "6px",
                      color: "#64748B",
                      fontSize: "13px",
                      lineHeight: 1.5,
                    }}
                  >
                    Avanço operacional consolidado da jornada.
                  </div>
                </div>

                <div
                  style={{
                    color: "#6D28D9",
                    fontSize: "34px",
                    lineHeight: 1,
                    fontWeight: 900,
                    letterSpacing: "-.06em",
                  }}
                >
                  {progresso}%
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "14px",
                  borderRadius: "999px",
                  background: "#EEF2F7",
                  overflow: "hidden",
                  boxShadow: "inset 0 1px 3px rgba(15,23,42,.08)",
                }}
              >
                <div
                  style={{
                    width: `${progresso}%`,
                    height: "100%",
                    borderRadius: "999px",
                    background:
                      "linear-gradient(90deg, #10B981 0%, #7C3AED 100%)",
                    boxShadow: "0 0 18px rgba(124,58,237,.20)",
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#94A3B8",
                  fontSize: "12px",
                  fontWeight: 650,
                }}
              >
                <span>Início</span>
                <span>Execução</span>
                <span>Término</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes journeyArrowFloat {
            0% {
              transform: translateX(-50%) translateY(0);
            }
            50% {
              transform: translateX(-50%) translateY(-7px);
            }
            100% {
              transform: translateX(-50%) translateY(0);
            }
          }

          @media (max-width: 1100px) {
            div[style*="grid-template-columns: minmax(0, 1.15fr) minmax(320px, .85fr)"] {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 720px) {
            div[style*="padding: 30px 32px 28px"] {
              padding: 24px 20px 22px !important;
            }

            div[style*="grid-template-columns: repeat(2, minmax(0, 1fr))"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}