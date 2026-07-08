import Chart from "react-apexcharts";

export default function PriorityBarChart() {
  const series = [
    {
      name: "Projetos",
      data: [120, 95, 80, 60, 40],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      fontFamily: "Inter, sans-serif",
    },

    colors: ["#8425a1"],

    dataLabels: {
      enabled: false,
    },

    grid: {
      borderColor: "#E2E8F0",
      strokeDashArray: 4,
    },

    stroke: {
      show: false,
    },

    plotOptions: {
      bar: {
        borderRadius: 12,
        columnWidth: "45%",
        distributed: false,
      },
    },

    xaxis: {
      categories: [
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],

      labels: {
        style: {
          colors: "#6e2e8a",
          fontSize: "13px",
        },
      },

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      labels: {
        style: {
          colors: "#94A3B8",
          fontSize: "12px",
        },
      },
    },

    tooltip: {
      theme: "light",
    },

    legend: {
      show: false,
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
          Distribuição de Entregas
        </h3>

        <p
          style={{
            marginTop: "8px",
            fontSize: "14px",
            color: "#64748B",
          }}
        >
          Volume de projetos por janela de compromisso
        </p>
      </div>

      <Chart
        options={options}
        series={series}
        type="bar"
        height={280}
      />

      <div
        style={{
          marginTop: "20px",
          padding: "16px",
          borderRadius: "16px",
          background: "#FAF5FF",
          borderLeft: "4px solid #7C3AED",
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
            color: "#475569",
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        >
          Agosto concentra o maior volume da carteira e
          representa o principal ponto de atenção para o
          planejamento da equipe nos próximos meses.
        </div>
      </div>
    </div>
  );
}