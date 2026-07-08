import Chart from "react-apexcharts";

export default function StatusDonutChart() {
  const series = [58, 132, 47, 71];

  const total = series.reduce((a, b) => a + b, 0);

  const options = {
    chart: {
      type: "donut",
      toolbar: {
        show: false,
      },
    },

    labels: [
      "Planejamento RE",
      "Projeto ENG RE",
      "ENG TX",
      "Impl RF",
    ],

    colors: [
      "#7C3AED",
      "#3B82F6",
      "#F59E0B",
      "#10B981",
    ],

    legend: {
      position: "right",
      fontSize: "14px",
      fontWeight: 500,
      labels: {
        colors: "#334155",
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      width: 0,
    },

    plotOptions: {
      pie: {
        donut: {
          size: "78%",

          labels: {
            show: true,

            total: {
              show: true,
              label: "Carteira",
              fontSize: "16px",

              formatter: () => total,
            },

            value: {
              show: true,
              fontSize: "42px",
              fontWeight: 700,
            },
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "24px",
        border: "1px solid #F1F5F9",
        boxShadow:
          "0px 10px 25px rgba(15,23,42,.06)",
      }}
    >
      <div
        style={{
          marginBottom: "24px",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: 700,
            color: "#0F172A",
          }}
        >
          Status Operacional
        </h3>

        <p
          style={{
            marginTop: "8px",
            fontSize: "14px",
            color: "#64748B",
          }}
        >
          Distribuição da carteira por etapa do processo
        </p>
      </div>

      <Chart
        options={options}
        series={series}
        type="donut"
        height={260}
      />

      <div
        style={{
          marginTop: "20px",
          padding: "16px",
          borderRadius: "16px",
          background: "#F8FAFC",
          borderLeft: "4px solid #832db5",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            marginBottom: "8px",
            color: "#0F172A",
          }}
        >
          Insight Executivo
        </div>

        <div
          style={{
            color: "#6c316b",
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        >
          Projeto ENG RE representa a maior parcela da carteira
          e concentra o principal esforço operacional para
          cumprimento do prazo da operação.
        </div>
      </div>

      <div
        style={{
          marginTop: "16px",
          color: "#7C3AED",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Ver detalhes →
      </div>
    </div>
  );
}