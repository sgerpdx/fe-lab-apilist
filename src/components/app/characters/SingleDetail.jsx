import React from 'react';

export default function CharacterDetail({ character }) {
  return (
    <section>
      <ul aria-label="Details on a Character">
        <li>
          <img src={character.image} alt={character.id} height="100" />
        </li>
        <li>Name: {character.name}</li>
        <li>Faction: {character.faction}</li>
        <li>Role: {character.role}</li>
      </ul>
    </section>
  );
}
