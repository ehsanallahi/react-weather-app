import React from 'react';
import './App.css';
import Search from './components/search/search'; // Correct the path to the Search component

function App() {
  const handleOnSearchChange = (searchDate) => {
    console.log(searchDate);
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
