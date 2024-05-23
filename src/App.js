import imageRickMorty from "./img/rick-morty.png";
import fondo from './img/fondo.jpg'; // Ajusta la ruta según la ubicación de tu imagen

import "./App.css";
import { useState } from "react";
import Characters from "./Components/Characters";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover', // Esto asegura que la imagen cubra toda el área del fondo
    backgroundPosition: 'center', // Esto centra la imagen
    height: '100vh', // Esto hace que el fondo ocupe toda la altura de la ventana
    width: '100%', // Esto hace que el fondo ocupe todo el ancho del contenedor
    margin: '0', // Elimina cualquier margen por defecto
    padding: '0', // Elimina cualquier padding por defecto
  };
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");

    const charactersApi = await api.json();
    setCharacters(charactersApi.results);
  };

  return (
    <div style={backgroundStyle} className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty </h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
