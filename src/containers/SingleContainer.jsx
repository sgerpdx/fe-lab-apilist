import React, { Component } from 'react';
import { fetchSingleCharacter } from '../services/AvatarAPI';
import CharacterDetail from '../components/app/characters/CharacterDetail';

export default class SingleContainer extends Component {
  state = {
    thingOne: '',
    loading: true,
    characterData: {},
  };

  componentDidMount = async () => {
    const newData = await fetchSingleCharacter();
    this.setState({ characterData: newData, loading: false });
  };

  render() {
    if (this.state.loading) return <h3>Loading...</h3>;

    return (
      <>
        <h2>Container</h2>
        <CharactersList character={this.state.characterData} />
      </>
    );
  }
}
