import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Un cours de ..."
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>Chercher</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    marginRight: '8px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default SearchBar;