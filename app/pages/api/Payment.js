import { useState } from 'react';

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    email: '',
    firstName: '',
    lastName: '',
    studentId: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/createPayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Payer un cours de danse</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="amount"
          placeholder="Montant"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="studentId"
          placeholder="ID Étudiant"
          value={formData.studentId}
          onChange={handleChange}
          required
        />
        <button type="submit">Payer</button>
      </form>
    </div>
  );
}
