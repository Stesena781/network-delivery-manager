import { useState } from "react";

export default function CriticalProjectsTable() {
  const [search, setSearch] = useState("");

  const projetos = [
    {
      id: "M2026_SPBHU_01",
      regional: "SP",
      responsavel: "Projeto ENG RE",
      prioridade: "Novembro",
      transmissao: "FO APAGADA",
    },
    {
      id: "M2026_RJTVO_01",
      regional: "RJ/ES",
      responsavel: "Projeto ENG RE",
      prioridade: "Agosto",
      transmissao: "FO APAGADA",
    },
    {
      id: "M2025_MSCLL_01",
      regional: "CO/NO",
      responsavel: "Projeto ENG RE",
      prioridade: "Agosto",
      transmissao: "FO APAGADA",
    },
    {
      id: "M2026_SCILH_01",
      regional: "SUL",
      responsavel: "Projeto ENG RE",
      prioridade: "Outubro",
      transmissao: "FO APAGADA + BBN",
    },
    {
      id: "M2026_SPMLG_01",
      regional: "SP",
      responsavel: "Projeto ENG RE",
      prioridade: "Setembro",
      transmissao: "FO APAGADA + RD",
    },
  ];

  const filtered = projetos.filter(
    (item) =>
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.regional.toLowerCase().includes(search.toLowerCase()) ||
      item.prioridade.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "24px",
        marginTop: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <h3>Projetos Críticos</h3>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar projeto..."
          style={{
            padding: "10px 14px",
            borderRadius: "12px",
            border: "1px solid #CBD5E1",
            minWidth: "250px",
          }}
        />
      </div>

      <div
        style={{
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#F8FAFC",
              }}
            >
              <th style={th}>IDMETRO</th>
              <th style={th}>Regional</th>
              <th style={th}>Responsável</th>
              <th style={th}>Prioridade</th>
              <th style={th}>Transmissão</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
              <tr key={item.id}>
                <td style={td}>{item.id}</td>

                <td style={td}>{item.regional}</td>

                <td style={td}>{item.responsavel}</td>

                <td style={td}>
                  <span
                    style={{
                      background:
                        item.prioridade === "Agosto"
                          ? "#FEE2E2"
                          : "#DBEAFE",
                      color:
                        item.prioridade === "Agosto"
                          ? "#DC2626"
                          : "#2563EB",
                      padding: "6px 10px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {item.prioridade}
                  </span>
                </td>

                <td style={td}>{item.transmissao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const th = {
  textAlign: "left",
  padding: "12px",
  color: "#475569",
  fontWeight: 600,
};

const td = {
  padding: "12px",
  borderTop: "1px solid #E2E8F0",
};