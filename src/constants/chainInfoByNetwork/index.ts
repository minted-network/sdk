import { ChainInfo, SupportedChainId } from '../../types';
import { cronosMainnet } from './cronosMainnet';
import { cronosTestnet } from './cronosTestnet';
import { goerli } from './goerli';
import { mainnet } from './mainnet';

export const chainInfoByNetwork: Readonly<Record<SupportedChainId, ChainInfo>> =
  {
    [SupportedChainId.MAINNET]: mainnet,
    [SupportedChainId.GOERLI]: goerli,
    [SupportedChainId.CRONOS_MAINNET]: cronosMainnet,
    [SupportedChainId.CRONOS_TESTNET]: cronosTestnet,
  };
