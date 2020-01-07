import React from 'react';
import './App.css';

function App() {

  const listItems = wordList.map((wordList, i) =>
    <div className="word-card" key={i}>{wordList}</div>
  );

  return (
    <section>
      {listItems}
    </section>
  );
}

export default App;
