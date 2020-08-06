import React from 'react';
import data from './data';

function App() {
  const printAll = () =>{
    // con stringify
    //console.log(JSON.stringify(data));

    data.coches.map(coche =>
      console.log("Marca: ", coche.marca +" // ", "Modelo", coche.modelo + " // ", coche.puertas ? 
      "Puertas " + coche.puertas + " // Precio " + coche.precio
      : 
      "Cilindrada " + coche.cilindrada + " // Precio " + coche.precio )      
      )
  }
  const printMax = () => {
    const max = data.coches.reduce(function (prev, current) {
      return parseFloat(prev.precio) > parseFloat(current.precio)
        ? prev
        : current;
    });
    console.log(max.marca);
  };
  
  const printMin = () => {
    const min = data.coches.reduce(function (prev, current) {
      return parseFloat(prev.precio) < parseFloat(current.precio)
        ? prev
        : current;
    });
    console.log(min.marca);
  };
  
  const modelByLetter = () => {
    for (let i = 0; i < data.coches.length; i++) {
      if (data.coches[i].marca.charAt(0) === 'Y') {
        console.log(data.coches[i].modelo + ' ' + data.coches[i].precio);
        break;
      }
    }
  };
  return (  
    <div className="App">
      <header className="App-header">
        <h1>Testing app</h1>
        {printAll()}
        {printMax()}
      {printMin()}
      {modelByLetter()}
      </header>
      <div></div>
    </div>
  );
}

export default App;
