export const fetchCharacters = async () => {
  const res = await fetch(
    'https://last-airbender-api.herokuapp.com/api/v1/characters'
  );
  const data = await res.json();

  return data.map((character) => ({
    id: character._id,
    name: character.name,
    faction: character.affiliation,
    image: character.photoUrl,
  }));
};

export const fetchSingleCharacter = async (id) => {
  const res = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`
  );
  const character = await res.json();

  return {
    id: character._id,
    name: character.name,
    faction: character.affiliation,
    image: character.photoUrl,
    role: character.position,
  };
};
