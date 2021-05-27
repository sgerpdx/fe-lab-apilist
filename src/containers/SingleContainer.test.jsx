import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SingleContainer from './SingleContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';

const characterRes = {
  allies: ['His '],
  enemies: ['Korra '],
  _id: '5cf5679a915ecad153ab68d5',
  photoUrl:
    'https://vignette.wikia.nocookie.net/avatar/images/6/6f/Arik.png/revision/latest?cb=20140808184002',
  name: 'Arik',
  gender: 'Male',
  hair: 'Brown',
  skin: 'Tan',
  profession: 'Airman',
  position: 'Guard',
  affiliation: 'Earth Kingdom Air Force',
  first: '"',
};

const server = setupServer(
  rest.get(
    'https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68d5',
    (req, res, ctx) => {
      return res(ctx.json(characterRes));
    }
  )
);

describe('list container component for Avatar characters', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of characters', async () => {
    render(
      <MemoryRouter>
        <SingleContainer
          match={{ params: { id: '5cf5679a915ecad153ab68d5' } }}
        />
      </MemoryRouter>
    );

    const pageLoading = await screen.getByText('Loading...');
    expect(pageLoading).toMatchSnapshot();

    return waitFor(() => {
      screen.getByText(/Arik/);
      screen.getByAltText('5cf5679a915ecad153ab68d5');
    });
  });
});
