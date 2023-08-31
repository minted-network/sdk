import { convertUnit2Wei, convertWei2Unit } from './unitConverters';

describe('unitConverters', () => {
  it('convertUnit2Wei', () => {
    expect(convertUnit2Wei('1').toString()).toBe('1000000000000000000');
  });
  it('convertWei2Unit', () => {
    expect(convertWei2Unit('1')).toBe('0.000000000000000001');
  });
});
