import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '.';

describe('Hero element', () => {
  it('must contain a P element', () => {
      
    const text = 'The assignment is supposed to be executed as simple as possible. Code the template in HTML/CSS and try to avoid 3. party frameworks as much as possible. Creating the page with React components will grant extra megamate bonus points.';

    render(<Hero />);

    expect(screen.getByText(text)).toBeInTheDocument();

  })
});
