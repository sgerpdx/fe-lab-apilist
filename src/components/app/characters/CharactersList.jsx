import { data } from 'autoprefixer';
import React from 'react';
import CharacterDetail from './CharacterDetail';

export default function CharactersList() {
  const avatarList = this.props.data.map((character) => (
    <CharacterDetail character={character} />
  ));

  return (
    <div>
      <p>List Alive</p>
      <ul key={data.name}>{avatarList}</ul>
    </div>
  );
}
