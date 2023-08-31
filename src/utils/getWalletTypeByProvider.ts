import { providers } from 'ethers';

import { Wallet } from '../types';

/**
 * Some provider instances extend the JsonRpcProvider API.
 * Optional values here can be used to identify the wallet connector
 */
interface ExtendedJsonRpcProvider extends providers.JsonRpcProvider {
  provider?: {
    isFrame?: boolean; // Frame injected wallet
  };
}

/**
 * Return the user wallet
 * Never use server side
 * @returns Wallet
 */
export const getWalletTypeByProvider = (
  provider: ExtendedJsonRpcProvider
): Wallet => {
  if (provider.connection.url === 'metamask') return Wallet.METAMASK;
  if (provider.provider?.isFrame) return Wallet.FRAME;
  return Wallet.OTHER;
};
