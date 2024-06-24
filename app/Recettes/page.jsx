"use client";
import { useState } from 'react';
import { Parser } from 'json2csv';
import * as XLSX from 'xlsx';

const data = [
  { id: 1, date: '2024-01-01', professeur: 'Jean', cours: 'Yoga', type: 'Cours', montant: 50 },
  { id: 2, date: '2024-01-02', professeur: 'Marie', cours: 'Pilates', type: 'Cours', montant: 60 },
  // Ajoutez plus de données ici
];

export default function RecetteList() {
  const [filteredData, setFilteredData] = useState(data);

  const handleExportCSV = () => {
    const parser = new Parser();
    const csv = parser.parse(filteredData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'recettes.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Recettes');
    XLSX.writeFile(workbook, 'recettes.xlsx');
  };

  return (
    <div>
      <h2>Liste des Recettes</h2>
      <button onClick={handleExportCSV}>Exporter en CSV</button>
      <button onClick={handleExportExcel}>Exporter en Excel</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Professeur</th>
            <th>Cours</th>
            <th>Type</th>
            <th>Montant</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(recette => (
            <tr key={recette.id}>
              <td>{recette.date}</td>
              <td>{recette.professeur}</td>
              <td>{recette.cours}</td>
              <td>{recette.type}</td>
              <td>{recette.montant}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
