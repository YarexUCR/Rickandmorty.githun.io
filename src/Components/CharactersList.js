import React from 'react';
import CharacterCard from './CharactersCard';

export default function CharactersList({ characters }) {
    return (
        <div className="container-characters">
            {characters.map((character, index) => (
                <CharacterCard character={character} key={index} />
            ))}
        </div>
    );
}