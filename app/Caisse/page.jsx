"use client";
import { useState } from 'react';

const initialTransactions = [
  { id: 1, date: '2024-01-01', type: 'Crédit', description: 'Cotisation', montant: 100 },
  { id: 2, date: '2024-01-02', type: 'Débit', description: 'Achat matériel', montant: 50 },
  // Ajoutez plus de transactions ici
];

export default function Caisse() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [newTransaction, setNewTransaction] = useState({ date: '', type: 'Crédit', description: '', montant: 0 });

  const handleAddTransaction = () => {
    setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1 }]);
    setNewTransaction({ date: '', type: 'Crédit', description: '', montant: 0 });
  };

  const getTotal = () => {
    return transactions.reduce((acc, transaction) => {
      return transaction.type === 'Crédit' ? acc + transaction.montant : acc - transaction.montant;
    }, 0);
  };

  return (
    <div>
      <h2>Gestion de Caisse</h2>
      <div>
        <h3>Ajouter une Transaction</h3>
        <input
          type="date"
          value={newTransaction.date}
          onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
        />
        <select
          value={newTransaction.type}
          onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
        >
          <option value="Crédit">Crédit</option>
          <option value="Débit">Débit</option>
        </select>
        <input
          type="text"
          placeholder="Description"
          value={newTransaction.description}
          onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Montant"
          value={newTransaction.montant}
          onChange={(e) => setNewTransaction({ ...newTransaction, montant: parseFloat(e.target.value) })}
        />
        <button onClick={handleAddTransaction}>Ajouter</button>
      </div>
      <h3>Total en Caisse: {getTotal()} €</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Description</th>
            <th>Montant</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>{transaction.description}</td>
              <td>{transaction.montant}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
