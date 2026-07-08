import * as XLSX from "xlsx";

export async function carregarProjetos() {
  const response = await fetch(
    "/case___base_de_dados_-_projetos.xlsx"
  );

  const arrayBuffer =
    await response.arrayBuffer();

  const workbook =
    XLSX.read(arrayBuffer);

  const worksheet =
    workbook.Sheets[
      workbook.SheetNames[0]
    ];

  const data =
    XLSX.utils.sheet_to_json(
      worksheet
    );

  return data;
}