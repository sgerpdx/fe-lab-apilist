import React from 'react';
//proptypes

export default function CharacterDetail({ character }) {
  return (
    <section>
      <ul aria-label="Details on a Character">
        <li>
          <img src={character.image} height="100" />
        </li>
        <li>
          Name: <h2>{character.name}</h2>
        </li>
        <li>
          Faction: <p>{character.faction}</p>
        </li>
        <li>
          Role: <p>{character.role}</p>
        </li>
      </ul>
    </section>
  );
}
