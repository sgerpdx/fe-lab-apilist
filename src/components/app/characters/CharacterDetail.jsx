import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterDetail({ characters }) {
  return (
    <section>
      <ul aria-label="List of Characters">
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>
              <img src={character.image} height="80" alt={character.id} />
            </Link>
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
