import { addressesByNetwork } from '../constants';
import { getMakerOrderTypeAndDomain } from './getMakerOrderTypeAndDomain';

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

describe('getMakerOrderTypeAndDomain', () => {
  it('has a valid domain with verifyingContract', () => {
    const { domain } = getMakerOrderTypeAndDomain(1, ZERO_ADDRESS);
    expect(domain).toEqual({
      name: 'MintedExchange',
      version: '1',
      chainId: 1,
      verifyingContract: ZERO_ADDRESS,
    });
  });
  it('has a valid domain without verifyingContract (mainnet)', () => {
    const { domain } = getMakerOrderTypeAndDomain(1);
    expect(domain).toEqual({
      name: 'MintedExchange',
      version: '1',
      chainId: 1,
      verifyingContract: addressesByNetwork[1].MINTED_EXCHANGE,
    });
  });
  it('has a valid domain without verifyingContract (goerli)', () => {
    const { domain } = getMakerOrderTypeAndDomain(5);
    expect(domain).toEqual({
      name: 'MintedExchange',
      version: '1',
      chainId: 5,
      verifyingContract: addressesByNetwork[5].MINTED_EXCHANGE,
    });
  });
});
