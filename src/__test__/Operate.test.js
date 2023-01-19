import operate from '../logic/operate';

const number1 = 5;
const number2 = 10;
describe('test for operate function', () => {
  it('should be 15', () => {
    const output = operate(number1, number2, '+');
    expect(output).toBe('15');
  });
  it('should be 15', () => {
    const output = operate(number1, number2, '-');
    expect(output).toBe('-5');
  });
  it('should be 15', () => {
    const output = operate(number1, number2, 'x');
    expect(output).toBe('50');
  });

  it('should be 15', () => {
    const output = operate(number2, number1, '÷');
    expect(output).toBe('2');
  });

  it('should be undefined', () => {
    const output = operate(number2, '0.', '÷');
    expect(output).toBe('Can\'t divide by 0.');
  });

  it('should be 0', () => {
    const output = operate(number2, number1, '%');
    expect(output).toBe('0');
  });

  it('should be undefined', () => {
    const output = operate(number2, '0.', '%');
    expect(output).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
