// src/FunnyForm.js

import React, { useState } from 'react';
import style from './pemiere_co.css'

const Premiere_co = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nCode: ${code}`);
  };

  return (
    <div className="funny-form-container">
      <form className="funny-form" onSubmit={handleSubmit}>
        <label>
        &ensp; Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
        &ensp;Code:
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <a href="../login" className="funny-link">Vous avez déja un compte ?</a>
    </div>
  );
};

export default Premiere_co;
