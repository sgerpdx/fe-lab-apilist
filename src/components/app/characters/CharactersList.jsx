//import { data } from 'autoprefixer';
import React from 'react';
import CharacterDetail from './CharacterDetail';

export default function CharactersList({ characters }) {
  console.log('>>>CHAR-List', characters);
  return (
    <section>
      <CharacterDetail characters={characters} />
    </section>
  );
}
