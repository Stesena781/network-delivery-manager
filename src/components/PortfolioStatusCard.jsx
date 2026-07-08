import Chart from "react-apexcharts";

export default function PortfolioStatusCard() {
  const series = [142, 97, 23, 18, 8];

  const options = {
    chart: {
      type: "donut",
      toolbar: {
        show: false,
      },
    },

    labels: [
      "Concluídos",
      "Em Andamento",
      "Atrasados",
      "Bloqueados",
      "Cancelados",
    ],

    colors: [
      "#10B981",
      "#3B82F6",
      "#EF4444",
      "#F59E0B",
      "#6B7280",
    ],

    legend: {
      position: "bottom",
      fontSize: "13px",
    },

    dataLabels: {
      enabled: true,
    },

    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
  };

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "24px",
        boxShadow:
          "0 4px 12px rgba(0,0,0,.05)",
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
        <div>
          <h3
            style={{
              margin: 0,
              color: "#0F172A",
            }}
          >
            Status da Carteira
          </h3>

          <div
            style={{
              marginTop: "4px",
              color: "#64748B",
              fontSize: "13px",
            }}
          >
            Saúde operacional da carteira
          </div>
        </div>

        <div
          style={{
            background: "#F8FAFC",
            padding: "10px 14px",
            borderRadius: "12px",
          }}
        >
          <strong>288</strong>
          <div
            style={{
              fontSize: "12px",
              color: "#64748B",
            }}
          >
            Projetos Ativos
          </div>
        </div>
      </div>

      <Chart
        options={options}
        series={series}
        type="donut"
        height={320}
      />

      <div
        style={{
          marginTop: "18px",
          padding: "14px",
          borderRadius: "12px",
          background: "#F8FAFC",
          borderLeft:
            "4px solid #10B981",
        }}
      >
        <strong>
          Insight Executivo
        </strong>

        <div
          style={{
            marginTop: "6px",
            color: "#475569",
            lineHeight: 1.6,
            fontSize: "13px",
          }}
        >
          A maior parte da carteira encontra-se
          concluída ou em andamento.
          Projetos atrasados e bloqueados
          representam pontos de atenção
          para acompanhamento da operação.
        </div>
      </div>
    </div>
  );
}