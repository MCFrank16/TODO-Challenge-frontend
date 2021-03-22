import React from 'react';
import Body from './components/Body';

function App() {
  return (
    <div className="h-screen bg-blue-900 App">
      <div className="w-screen h-56 bg-center bg-no-repeat bg-cover bg-upper-image-desktop sm:upper-image-mobile">
        <Body />    
      </div>
    </div>
  );
}

export default App;
