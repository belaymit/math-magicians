import calculate from '../logic/calculate';

describe('test for calculate function', () => {
  it('it should be 14', () => {
    const operation = {
      total: 8,
      next: 6,
      operation: '+',
    };

    const output = calculate(operation, '=');
    expect(output.total).toBe('14');
  });

  it('it should be 48', () => {
    const operation = {
      total: 8,
      next: 6,
      operation: 'x',
    };

    const output = calculate(operation, '=');
    expect(output.total).toBe('48');
  });

  it('it should be 2', () => {
    const operation = {
      total: 8,
      next: 6,
      operation: '-',
    };

    const output = calculate(operation, '=');
    expect(output.total).toBe('2');
  });

  it('it should be 2', () => {
    const operation = {
      total: 8,
      next: 4,
      operation: '÷',
    };

    const output = calculate(operation, '=');
    expect(output.total).toBe('2');
  });

  it('it should be 0', () => {
    const operation = {
      total: 8,
      next: 4,
      operation: '%',
    };

    const output = calculate(operation, '=');
    expect(output.total).toBe('0');
  });
});
