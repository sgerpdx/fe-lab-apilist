import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarContainer from './AvatarContainer';
//import userEvent from '@testing-library/user-event';
//import { rest } from 'msw';
//import { setupServer } from 'msw/node';

describe('list container component for Avatar characters', () => {
  it('displays the correct stuff', async () => {
    render(<AvatarContainer />);

    const pageLoading = await screen.getByText('Loading...');
    expect(pageLoading).toMatchSnapshot();
  });
});
