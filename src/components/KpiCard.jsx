import ExecutiveCard from "./ui/ExecutiveCard";
import {
  BarChart3,
  Target,
  Activity,
  Building2,
  AlertTriangle,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function KpiCard({ projetos = [] }) {
  const capacidadeTrimestral = 594;

  const utilizacao = Math.round(
    (projetos.length / capacidadeTrimestral) * 100
  );

  const cards = [
    {
      title: "Carteira Total",
      value: projetos.length,
      subtitle: "Projetos da carteira",
      icon: <BarChart3 size={28} color="#7C3AED" />,
      color: "#7C3AED",
    },

    {
      title: "Planejamento RE",
      value: projetos.filter(
        (p) =>
          p["RESPONSÁVEL"] ===
          "2. PLANEJAMENTO RE"
      ).length,
      subtitle: "Fase de planejamento",
      icon: <Target size={28} color="#f8fcf9" />,
      color: "#e8ede9",
    },

    {
      title: "Projeto ENG RE",
      value: projetos.filter(
        (p) =>
          p["RESPONSÁVEL"] ===
          "3. PROJETO ENG RE"
      ).length,
      subtitle: "Projetos em elaboração",
      icon: <Activity size={28} color="#eff2f7" />,
      color: "#e6e8ec",
    },

    {
      title: "ENG TX",
      value: projetos.filter(
        (p) =>
          p["RESPONSÁVEL"] ===
          "4. ENG TX - SUL"
      ).length,
      subtitle: "Atualizações DPTX",
      icon: <Building2 size={28} color="#f8f6f2" />,
      color: "#f4f3f0",
    },

    {
      title: "Impl RF",
      value: projetos.filter(
        (p) =>
          p["RESPONSÁVEL"] ===
          "9. IMPL - RF"
      ).length,
      subtitle: "Implantação RF",
      icon: <CheckCircle2 size={28} color="#f1f6f4" />,
      color: "#fafcfb",
    },

    {
      title: "Sem Priorização",
      value: projetos.filter(
        (p) =>
          p["ESCOPO PMO/PRIORIDADE"] ===
          "SEM PRIORIZAÇÃO"
      ).length,
      subtitle: "Projetos sem compromisso",
      icon: <AlertTriangle size={28} color="#fdf9f9" />,
      color: "#f5f1f1",
    },

    {
      title: "Sem Definição",
      value: projetos.filter(
        (p) =>
          p["TIPO TRANSMISSÃO DPTX"] ===
          "SEM DEFINIÇÃO"
      ).length,
      subtitle: "Transmissão pendente",
      icon: <AlertTriangle size={28} color="#f6ecec" />,
      color: "#f7f0f0",
    },

    {
      title: "Utilização",
      value: `${utilizacao}%`,
      subtitle: "Capacidade operacional",
      icon: <TrendingUp size={28} color="#eae6f3" />,
      color: "#f5f2fc",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(210px,1fr))",
        gap: "16px",
        marginBottom: "24px",
      }}
    >
      {cards.map((card) => (
        <ExecutiveCard
          key={card.title}
          title={card.title}
          value={card.value}
          subtitle={card.subtitle}
          color={card.color}
          icon={card.icon}
        />
      ))}
    </div>
  );
}