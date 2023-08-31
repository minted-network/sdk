import { defaultGasLimitGetter } from './executeBulkBuy';

describe('bulkBuy', () => {
  it('defaultGasLimitGetter', () => {
    expect(defaultGasLimitGetter('1', 10).toString()).toBe('3000001');
  });
});
