import calculate from './calculate';
import operate from './operate';

jest.mock('./operate');

describe('calculate', () => {
  afterEach(() => {
    operate.mockReset();
  });

  it('should return an object with total, next, and operation set to null when buttonName is "AC"', () => {
    const result = calculate({}, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should update next property correctly when buttonName is a number', () => {
    const obj = {
      total: '2',
      next: '3',
      operation: '+',
    };

    const result = calculate(obj, '4');
    expect(result).toEqual({
      total: '2',
      next: '34',
      operation: '+',
    });
  });

  it('should handle the "." button correctly', () => {
    const obj = {
      total: '2',
      next: '3',
      operation: '+',
    };

    const result = calculate(obj, '.');
    expect(result).toEqual({
      total: '2',
      next: '3.',
      operation: '+',
    });
  });

  // Add more test cases to cover the different branches and scenarios

  // Example test for the "=" button
  it('should call operate and return the correct result when buttonName is "="', () => {
    const obj = {
      total: '2',
      next: '3',
      operation: '+',
    };

    operate.mockImplementationOnce(() => '5');

    const result = calculate(obj, '=');
    expect(operate).toHaveBeenCalledWith('2', '3', '+');
    expect(result).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });
});
