export default function FiltersBar({
  filtros,
  setFiltros,
}) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,.05)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr auto",
          gap: "20px",
          alignItems: "end",
        }}
      >
        {/* Regional */}
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#475569",
            }}
          >
            Regional
          </label>

          <select
            style={selectStyle}
            value={filtros.regional}
            onChange={(e) =>
              setFiltros({
                ...filtros,
                regional: e.target.value,
              })
            }
          >
            <option>Todas</option>
            <option>SP</option>
            <option>RJ/ES</option>
            <option>MG</option>
            <option>SUL</option>
            <option>CO/NO</option>
            <option>NE/BA/SE</option>
          </select>
        </div>

        {/* Projeto */}
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#475569",
            }}
          >
            Projeto
          </label>

          <select
            style={selectStyle}
            value={filtros.responsavel}
            onChange={(e) =>
              setFiltros({
                ...filtros,
                responsavel: e.target.value,
              })
            }
          >
            <option>Todos</option>

            <option>2. PLANEJAMENTO RE</option>

            <option>3. PROJETO ENG RE</option>

            <option>4. ENG TX - SUL</option>

            <option>9. IMPL - RF</option>
          </select>
        </div>

        {/* Prioridade */}
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#475569",
            }}
          >
            Prioridade
          </label>

          <select
            style={selectStyle}
            value={filtros.prioridade}
            onChange={(e) =>
              setFiltros({
                ...filtros,
                prioridade: e.target.value,
              })
            }
          >
            <option>Todas</option>
            <option>AGOSTO_26_ANT</option>
            <option>AGOSTO_26_COMPROMISSO</option>
            <option>SETEMBRO_26_COMPROMISSO</option>
            <option>OUTUBRO_26_COMPROMISSO</option>
            <option>NOVEMBRO_26_COMPROMISSO</option>
            <option>DEZEMBRO_26_COMPROMISSO</option>
            <option>SEM PRIORIZAÇÃO</option>
          </select>
        </div>

        {/* Transmissão */}
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#475569",
            }}
          >
            Transmissão
          </label>

          <select
            style={selectStyle}
            value={filtros.transmissao}
            onChange={(e) =>
              setFiltros({
                ...filtros,
                transmissao: e.target.value,
              })
            }
          >
            <option>Todas</option>
            <option>FO APAGADA</option>
            <option>FO APAGADA + BBN</option>
            <option>FO APAGADA + REUSO FO</option>
            <option>FO APAGADA + RD</option>
            <option>SEM DEFINIÇÃO</option>
          </select>
        </div>

        {/* Limpar */}
        <button
          onClick={() =>
            setFiltros({
              regional: "Todas",
              responsavel: "Todos",
              prioridade: "Todas",
              transmissao: "Todas",
            })
          }
          style={{
            background: "#FFFFFF",
            color: "#6D28D9",
            border: "2px solid #C4B5FD",
            borderRadius: "12px",
            padding: "14px 20px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Limpar Filtros
        </button>
      </div>
    </div>
  );
}

const selectStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #CBD5E1",
  background: "#FFF",
  fontSize: "14px",
};
