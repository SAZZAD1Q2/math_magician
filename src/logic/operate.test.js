import operate from './operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('should perform subtraction correctly', () => {
    expect(operate('5', '2', '-')).toBe('3');
  });

  it('should perform multiplication correctly', () => {
    expect(operate('2', '4', 'x')).toBe('8');
  });

  it('should perform division correctly', () => {
    expect(operate('10', '2', '÷')).toBe('5');
  });

  it('should handle division by zero', () => {
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should perform modulo operation correctly', () => {
    expect(operate('10', '7', '%')).toBe('3');
  });

  it('should handle modulo with zero divisor', () => {
    expect(operate('5', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operation', () => {
    expect(() => operate('2', '3', '#')).toThrow("Unknown operation '#'");
  });
});
