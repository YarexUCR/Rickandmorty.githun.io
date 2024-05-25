import React from 'react';
import CharactersList from './CharactersList';

export default function Characters({ characters, setCharacters }) {

    const resetCharacters = () => {
        setCharacters(null);
    };

    console.log(characters);

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>
                Volver a la página principal
            </span>
            <CharactersList characters={characters} />
            <span className="back-home" onClick={resetCharacters}>
                Volver a la página principal
            </span>
        </div>
    );
}
