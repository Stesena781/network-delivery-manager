export default function StorytellingPanel() {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "24px",
        border: "1px solid #E5E7EB",
        boxShadow:
          "0 4px 12px rgba(0,0,0,.05)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "20px",
          color: "#0F172A",
        }}
      >
        Storytelling Executivo
      </h2>

      <Question
        question="O que recebemos?"
        answer="A carteira atual possui 373 projetos distribuídos entre as etapas de Planejamento RE, Projeto ENG RE, ENG TX e Implantação RF."
      />

      <Question
        question="Onde está a demanda?"
        answer="SP e NE/BA/SE concentram a maior parcela dos projetos da carteira."
      />

      <Question
        question="Existe capacidade?"
        answer="A equipe de 6 projetistas possui capacidade estimada para executar 594 projetos em 3 meses."
      />

      <Question
        question="Conseguimos entregar?"
        answer="A utilização estimada é de 55%, mantendo capacidade livre de aproximadamente 270 projetos."
      />

      <Question
        question="Qual o principal risco?"
        answer="Projetos dependentes de definição técnica podem impactar a velocidade de execução."
      />

      <Question
        question="Conclusão"
        answer="A capacidade disponível é suficiente para atender toda a carteira prevista dentro da janela planejada."
      />
    </div>
  );
}

function Question({
  question,
  answer,
}) {
  return (
    <div
      style={{
        marginBottom: "18px",
      }}
    >
      <div
        style={{
          fontWeight: "700",
          color: "#5B21B6",
          marginBottom: "4px",
        }}
      >
        {question}
      </div>

      <div
        style={{
          color: "#475569",
          lineHeight: 1.6,
        }}
      >
        {answer}
      </div>
    </div>
  );
}