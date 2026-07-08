export default function TopBar() {
  return (
    <div
      style={{
        height: "80px",
        background: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
          }}
        >
          Dashboard Executivo
        </h2>

        <span
          style={{
            color: "#64748B",
            fontSize: "14px",
          }}
        >
          Planejamento e Controle de Projetos
        </span>
      </div>

      <div>
        <button
          style={{
            padding: "10px 16px",
            borderRadius: "10px",
            border: "none",
            background: "#6D28D9",
            color: "#FFF",
            cursor: "pointer",
          }}
        >
          Exportar
        </button>
      </div>
    </div>
  );
}