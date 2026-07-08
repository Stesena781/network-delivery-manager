import { useEffect, useState } from "react";
import { carregarProjetos } from "../../services/excelService";

import TopBar from "../../components/TopBar";
import KpiCard from "../../components/KpiCard";
import FiltersBar from "../../components/FiltersBar";
import PriorityBarChart from "../../components/PriorityBarChart";
import CapacityPlanningCard from "../../components/CapacityPlanningCard";
import RegionalChart from "../../components/RegionalChart";
import PortfolioStatusCard from "../../components/PortfolioStatusCard";
import RiskPanel from "../../components/RiskPanel";
import StorytellingPanel from "../../components/StorytellingPanel";
import ProjectJourney from "../../components/ProjectJourney";

import "../../styles/dashboard.css";

function Dashboard() {
  const [projetos, setProjetos] = useState([]);

  const [filtros, setFiltros] = useState({
    regional: "Todas",
    responsavel: "Todos",
    prioridade: "Todas",
    transmissao: "Todas",
    idmetro: "Todos",
  });

  useEffect(() => {
    carregarProjetos()
      .then((dados) => {
        console.log("PROJETO 1:", dados[0]);
        setProjetos(dados);
      })
      .catch((erro) => {
        console.error("ERRO:", erro);
      });
  }, []);

  const projetosFiltrados = projetos.filter((p) => {
    const regionalOk =
      filtros.regional === "Todas" ||
      p.REG === filtros.regional;

    const projetoOk =
      filtros.responsavel === "Todos" ||
      p["RESPONSÁVEL"] === filtros.responsavel;

    const prioridadeOk =
      filtros.prioridade === "Todas" ||
      p["ESCOPO PMO/PRIORIDADE"] === filtros.prioridade;

    const transmissaoOk =
      filtros.transmissao === "Todas" ||
      p["TIPO TRANSMISSÃO DPTX"] === filtros.transmissao;

    const idmetroOk =
      filtros.idmetro === "Todos" ||
      p.IDMETRO === filtros.idmetro;

    return (
      regionalOk &&
      projetoOk &&
      prioridadeOk &&
      transmissaoOk &&
      idmetroOk
    );
  });

  const projetoSelecionado =
    projetosFiltrados.length > 0
      ? projetosFiltrados[0]
      : null;

  return (
    <div className="dashboard">
      <div className="workspace">
        <TopBar />

        <div className="content">
          <FiltersBar
            filtros={filtros}
            setFiltros={setFiltros}
          />

          <KpiCard
            projetos={projetosFiltrados}
          />

          <ProjectJourney
            projeto={projetoSelecionado}
          />

        

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <PortfolioStatusCard />

            <PriorityBarChart
              projetos={projetosFiltrados}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 380px",
              gap: "20px",
              marginTop: "20px",
              alignItems: "start",
            }}
          >
            <RegionalChart
              projetos={projetosFiltrados}
            />

            <CapacityPlanningCard
              projetos={projetosFiltrados}
            />
          </div>

          <StorytellingPanel />

          <RiskPanel
            projetos={projetosFiltrados}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;