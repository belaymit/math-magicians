import ButtonsNumbers from "../components/buttonsNumbers/ButtonsNumbers";
import { render, screen, fireEvent } from '@testing-library/react';
require('@testing-library/jest-dom');
describe('Testing the Button Number Component',()=>{
    const handleClick = jest.fn();

    it('Checking for Number to be Render without any error',()=>{
        const btn = render(
            <ButtonsNumbers handleClick = {handleClick} />
        );
        expect(btn).toMatchSnapshot();
    });
    
    it('Checking for +/- Buttons to be Render on the screen',()=>{
        render(
            <ButtonsNumbers handleClick = {handleClick} />
        );
        expect(screen.getByText('+/-')).toBeInTheDocument();
    });
    
    it('Checking for User Interaction',()=>{
        render(
            <ButtonsNumbers handleClick = {handleClick} />
        );
        const output = screen.getByText('5')
        fireEvent.click(output);
    });
    it('Checking for Button Interaction',()=>{
        render(
            <ButtonsNumbers handleClick = {handleClick} />
        );
        const output = screen.getByText('5')
        fireEvent.click(output);
        expect(handleClick).toHaveBeenCalled();
    });
});