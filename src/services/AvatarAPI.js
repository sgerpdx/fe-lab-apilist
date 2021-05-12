export const fetchCharacters = async () => {
  const res = await fetch(
    'https://last-airbender-api.herokuapp.com/api/v1/characters'
  );
  const { data } = await res.json();

  return data.map((character) => ({
    name: character.name,
    faction: character.affiliation,
    image: character.photoUrl,
  }));
};

// json format:
// [
//     {
//       "_id": "5cf5679a915ecad153ab68c8",
//       "allies": [
//         "Royal Earthbender Guards"
//       ],
//       "enemies": [
//         "Chin"
//       ],
//       "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441",
//       "name": "46th Earth King",
//       "affiliation": " Earth Kingdom Earth Kingdom Royal Family"
//     },
// ]
