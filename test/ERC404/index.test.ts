import { ethers } from 'ethers';

import { ERC404, SupportedChainId } from '../../src';
import { getERC404 } from '../../src/contracts/generics';

const testERC404Config = {
  chainId: SupportedChainId.CRONOS_TESTNET,
  address: '0x1d99f27cb3d2b6c7fccb462e2892d30016b1e2c9',
} as const;

const mockAccount = {
  address: '0x50c19192Da90731083853096A76eC6E873dE7eca',
};

describe('ERC404', () => {
  let contract404: ERC404;
  beforeEach(() => {
    contract404 = getERC404(testERC404Config.chainId, testERC404Config.address);
  });

  it('getERC404 contract', () => {
    expect(typeof contract404.connect).toBe('function');
    expect(typeof contract404.approve).toBe('function');
    expect(typeof contract404.balanceOf).toBe('function');
    expect(typeof contract404.isApprovedForAll).toBe('function');
    expect(typeof contract404.ownerOf).toBe('function');
    expect(typeof contract404.transfer).toBe('function');
    expect(typeof contract404.totalSupply).toBe('function');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(contract404.supportsInterface).toBeUndefined();
  });

  it('test balanceOf', async () => {
    const balance = await contract404.balanceOf(mockAccount.address);
    const decimals = await contract404.decimals();
    const balanceDecimalism = ethers.utils.formatUnits(balance, decimals);
    expect(Number(balanceDecimalism)).toBeGreaterThan(0);
  });

  it('test symbol', async () => {
    const symbol = await contract404.symbol();
    expect(symbol).toBe('MINTED404');
  });

  it('test totalSupply', async () => {
    const totalSupply = await contract404.totalSupply();
    const totalSupplyDecimalism = ethers.utils.formatUnits(totalSupply, 18);
    expect(Number(totalSupplyDecimalism)).toBeGreaterThan(0);
  });
});
