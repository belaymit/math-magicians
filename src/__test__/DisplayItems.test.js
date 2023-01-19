import { render, screen } from '@testing-library/react';
import DisplayItems from '../components/displayItems/DisplayItems';

require('@testing-library/jest-dom');

describe('Test for DisplayItems component', () => {
    const output = '5';
  it('renders Output without any error', () => {
    const result = render(<DisplayItems output={output}/>);
    expect(result).toMatchSnapshot();
  });

  it("renders Numeric Output without any error ", () => {
    render(<DisplayItems output={output}/>);
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
