import React from 'react';

export default function CharacterDetail() {
  return (
    <>
      <div>Detail!</div>
      <li key={this.props.data.name}>
        <Link to={`/characters/${this.props.character.name}`}>
          <img src={this.props.data.character.image} height="80" />
        </Link>
      </li>
    </>
  );
}
