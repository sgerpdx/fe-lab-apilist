import React, { Component } from 'react';
import { fetchSingleCharacter } from '../services/AvatarAPI';
import SingleDetail from '../components/app/characters/SingleDetail';

export default class SingleContainer extends Component {
  state = {
    loading: true,
    characterData: {},
  };

  componentDidMount = async () => {
    const newData = await fetchSingleCharacter(this.props.match.params.id);
    this.setState({ characterData: newData, loading: false });
  };

  render() {
    if (this.state.loading) return <h3>Loading...</h3>;

    return (
      <>
        <SingleDetail character={this.state.characterData} />
      </>
    );
  }
}
