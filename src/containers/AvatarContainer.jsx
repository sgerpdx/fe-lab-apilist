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
    this.setState({ characterData: newData, loading: false });
  };

  render() {
    if (this.state.loading) return <h3>Loading...</h3>;

    return (
      <>
        <h2>Container</h2>
        <CharactersList characters={this.state.characterData} />
      </>
    );
  }
}
