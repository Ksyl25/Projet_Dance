"use client";
import Head from 'next/head';
import { useState } from 'react';

const HomePage = () => {
  const [data, setData] = useState({
    cardsPurchased: 4,
    currentMembers: 40,
    mostProfitableCourse: 'Cours de salsa',
    incomeEntries: [],
    cashRegister: 0,
  });

  const handleAddIncomeEntry = (entry) => {
    setData({
      ...data,
      incomeEntries: [...data.incomeEntries, entry],
    });
  };

  const handleCreditCashRegister = (amount, description) => {
    setData({
      ...data,
      cashRegister: data.cashRegister + amount,
      incomeEntries: [...data.incomeEntries, { amount, description, type: 'credit' }],
    });
  };

  const handleDebitCashRegister = (amount, description) => {
    setData({
      ...data,
      cashRegister: data.cashRegister - amount,
      incomeEntries: [...data.incomeEntries, { amount, description, type: 'debit' }],
    });
  };

  return (
    <div style={{ backgroundColor: '#D97904', padding: '20px', color: '#fff' }}>
      <Head>
        <title>Association Finance Tracker</title>
      </Head>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <img src="/path-to-your-first-chart-image" alt="Graphique des recettes" style={{ width: '300px' }} />
        </div>
        <div>
          <img src="/path-to-your-second-chart-image" alt="Graphique des tailles" style={{ width: '300px' }} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h2>Nombre de carte acheter : {data.cardsPurchased}</h2>
        </div>
        <div>
          <h2>Nombre d'adhérents actuelle : {data.currentMembers}</h2>
        </div>
      </div>
      <div>
        <h3>Cours le plus rentable : {data.mostProfitableCourse}</h3>
      </div>
      <div>
        <h2>Suivi des recettes</h2>
        <p>
          L’association doit pouvoir suivre les recettes de ses cours afin de gérer au mieux ses
          déclarations et ses finances.
        </p>
        <ul>
          <li>Lister les entrées d’argents sur une période et en faire un csv ou un excel</li>
          <li>
            Les entrées d’argent peuvent être regroupées par professeurs, cours, ou type de cours
          </li>
        </ul>
      </div>
      <div>
        <h2>Gestion de caisse</h2>
        <p>En option, une gestion de caisse peut être très appréciable.</p>
        <p>Le but ici serait de connaître le contenu de la caisse.</p>
        <ul>
          <li>
            être créditée (avec une description pour définir d’où vient l’argent)
          </li>
          <li>
            être modifiée de manière automatique avec les achats en espèce
          </li>
          <li>
            être débitée (avec une description où part l’argent)
          </li>
        </ul>
        <p>Chacune de ces actions doit être datée afin d’établir un suivi.</p>
      </div>
    </div>
  );
};

export default HomePage;
