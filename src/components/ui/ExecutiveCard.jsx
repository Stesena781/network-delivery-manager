export default function ExecutiveCard({
  title,
  value,
  icon,
  subtitle,
  color = "#6D28D9",
}) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "24px",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
        border: "1px solid #F1F5F9",
        boxShadow:
          "0px 10px 25px rgba(15,23,42,.06)",
        transition: "all .2s ease",
        minHeight: "150px",
      }}
    >
      {/* Bolha decorativa */}
      <div
        style={{
          position: "absolute",
          top: "-35px",
          right: "-35px",
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          background: `${color}15`,
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              color: "#64748B",
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "12px",
            }}
          >
            {title}
          </div>

          <h1
            style={{
              margin: "0",
              color: "#0F172A",
              fontSize: "42px",
              fontWeight: "700",
              letterSpacing: "-1px",
              lineHeight: 1,
            }}
          >
            {value}
          </h1>

          <div
            style={{
              color: "#64748B",
              fontSize: "13px",
              marginTop: "10px",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background: `${color}15`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      </div>

      {/* Barra inferior */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: color,
        }}
      />
    </div>
  );
}