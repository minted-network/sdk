import {
  SupportedChainId,
  SupportedCronosChainId,
  SupportedEthereumChainId,
} from '../types';

export const isSupportedChain = (
  chainId: number
): chainId is SupportedChainId => {
  return isSupportedCronosChain(chainId) || isSupportedEthereumChain(chainId);
};

export const isSupportedCronosChain = (
  chainId: number
): chainId is SupportedCronosChainId => {
  return isSupportedChainGeneric<SupportedCronosChainId>(chainId, [
    SupportedChainId.CRONOS_MAINNET,
    SupportedChainId.CRONOS_TESTNET,
  ]);
};

export const isSupportedEthereumChain = (
  chainId: number
): chainId is SupportedEthereumChainId => {
  return isSupportedChainGeneric<SupportedEthereumChainId>(chainId, [
    SupportedChainId.MAINNET,
    SupportedChainId.GOERLI,
  ]);
};

const isSupportedChainGeneric = <T extends number>(
  chainId: number,
  list: T[]
): chainId is T => list.some((id) => id === chainId);
