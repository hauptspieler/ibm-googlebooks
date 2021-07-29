import React from 'react';
import './App.css';

function App() {
  const mainHeader = () => {
    return (
      <div className='main-image d-flex justify-content-center align-items-center flex-column'>
        { /* OVERLAY */}
        <div className='filter'></div>
        <h1 className='display-2 text-center text-white mb-3' style={{ zIndex: 2 }}>
          Google Books
        </h1>
      </div>
    )
  }
  return (
    <div>
      {mainHeader()}
    </div>
  );
}

export default App;
