import { ethers } from 'ethers';

import { chainInfoByNetwork } from '../constants';
import { SupportedChainId } from '../types';

type Options = {
  ensAddress?: string;
};

/**
 *
 * @param chainId
 * @returns a JsonRpcProvider provider instance
 */
export const getProvider = (
  chainId: SupportedChainId,
  opts?: Options,
  cache = true
) => {
  return cache
    ? cachedProviders[chainId] ??
        (cachedProviders[chainId] = createProvider(chainId, opts))
    : createProvider(chainId, opts);
};

const cachedProviders: Partial<
  Record<SupportedChainId, ethers.providers.JsonRpcProvider>
> = {};

const createProvider = (chainId: SupportedChainId, opts?: Options) => {
  const { rpcUrl, label } = chainInfoByNetwork[chainId];
  return new ethers.providers.StaticJsonRpcProvider(rpcUrl, {
    name: label,
    chainId,
    ...opts,
  });
};
