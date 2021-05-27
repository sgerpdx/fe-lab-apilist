import React from 'react';
import { Link } from 'react-router-dom';
//proptypes

export default function CharacterDetail({ characters }) {
  return (
    <section>
      <ul aria-label="List of Characters">
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/characters/${character.name}`}>
              <img src={character.image} height="80" />
            </Link>
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
