import { render, screen } from '@testing-library/react';
import Quotes from '../pages/quotes/Quotes';

require('@testing-library/jest-dom');

describe('Test for Quote component', () => {
  it('renders Quote component without any error', () => {
    const output = render(<Quotes />);
    expect(output).toMatchSnapshot();
  });

  it("renders Quote component with the correct text 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston.' ", () => {
    render(<Quotes />);
    expect(screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston.')).toBeInTheDocument();
  });
});
