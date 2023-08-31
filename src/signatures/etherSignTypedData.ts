import { ethers, providers, TypedDataDomain, TypedDataField } from 'ethers';

import { Wallet } from '../types';
import { getWalletTypeByProvider } from '../utils';

/**
 * Copy of ethers '_signTypedData' helper, modified to support EIP-712 typed signatures with different call names
 * https://github.com/ethers-io/ethers.js/blob/73a46efea32c3f9a4833ed77896a216e3d3752a0/packages/providers/src.ts/json-rpc-provider.ts#L263
 * TESTED WITH - MetaMask, WalletConnect: Trust, Rainbow, MetaMask Mobile, SafePal
 * NOT CURRENTLY SUPPORTED - Trezor, TokenPocket, Math Wallet
 */
export const etherSignTypedData = async (
  provider: providers.JsonRpcProvider,
  address: string,
  domain: TypedDataDomain,
  types: Record<string, TypedDataField[]>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: Record<string, any>
): Promise<string> => {
  // Populate any ENS names (in-place)
  const populated = await ethers.utils._TypedDataEncoder.resolveNames(
    domain,
    types,
    value,
    async (name) => (await provider.resolveName(name)) ?? ''
  );
  const rpcData = ethers.utils._TypedDataEncoder.getPayload(
    populated.domain,
    types,
    populated.value
  );

  let method = 'eth_signTypedData'; // CoinBase wallet, Trust, MetaMask Mobile, Rainbow, SafePal
  if (WALLETS_TO_USE_V4.includes(getWalletTypeByProvider(provider))) {
    method = 'eth_signTypedData_v4';
  }

  return provider.send(method, [address, JSON.stringify(rpcData)]); // CoinBase wallet, Trust, MetaMask Mobile, Rainbow, SafePal
};

// MetaMask, Frame
const WALLETS_TO_USE_V4 = [Wallet.METAMASK, Wallet.FRAME];
