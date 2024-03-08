import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:6247')
    .then(response => {
      if (!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setMessage(data?.message))
    .catch(error => console.log('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
        <h1>{ message }</h1>
    </div>
  );
}

export default App;
