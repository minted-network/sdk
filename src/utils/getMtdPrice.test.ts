import { getMtdPrice } from './getMtdPrice';

describe('getMtdPrice', () => {
  test.concurrent(
    'testnet',
    async () => {
      const usdc = await getMtdPrice(338);
      expect(usdc).toBeGreaterThan(0);
      expect(usdc).toBeLessThan(5);
    },
    10000
  );
  test.concurrent(
    'mainnet',
    async () => {
      const usdc = await getMtdPrice(25);
      expect(usdc).toBeGreaterThan(0.01);
      expect(usdc).toBeLessThan(0.1);
    },
    10000
  );
});
