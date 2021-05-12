import React, { Component } from 'react';
import { fetchCharacters } from '../services/AvatarAPI';
import CharactersList from '../components/app/characters/CharactersList';

export default class AvatarContainer extends Component {
  state = {
    thingOne: '',
    loading: true,
    characterData: [],
  };

  componentDidMount = async () => {
    const newData = await fetchCharacters();
    this.setState({ characterData: newData });
  };

  render() {
    return (
      <>
        <CharactersList data={this.state.characterData} />
      </>
    );
  }
}
