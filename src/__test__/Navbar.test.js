import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

require('@testing-library/jest-dom');

describe('Test for Navbar component', () => {
  it('renders Navbar component without any error', () => {
    const output = render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(output).toMatchSnapshot();
  });

  it("renders navbar component with the correct text 'Math Magician' ", () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText('Math Magician')).toBeInTheDocument();
  });
});
