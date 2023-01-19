import { render, screen } from '@testing-library/react';
import Home from '../pages/home/Home';

require('@testing-library/jest-dom');

describe('This is a test for home component', () => {
  it('renders the Home component without any error', () => {
    const output = render(<Home />);
    expect(output).toMatchSnapshot();
  });

  it('The text "Welcome to our page!" should be rendered in Home component without any error', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });
});
