//import { data } from 'autoprefixer';
import React from 'react';
import CharacterDetail from './CharacterDetail';

export default function CharactersList({ characters }) {
  return (
    <section>
      <CharacterDetail characters={characters} />
    </section>
  );
}
