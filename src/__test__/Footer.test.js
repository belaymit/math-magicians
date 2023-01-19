import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/footer/Footer';

require('@testing-library/jest-dom');

describe('Test for Footer component', () => {
  it('renders Quote component without any error', () => {
    const output = render(<BrowserRouter><Footer /></BrowserRouter>);
    expect(output).toMatchSnapshot();
  });

  it("renders Quote component with the correct text 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' ", () => {
    render(<BrowserRouter><Footer /></BrowserRouter>);
    expect(screen.getByText('Lorem ipsum dolor sit amet consectetur adipisicing elit.')).toBeInTheDocument();
  });
});
