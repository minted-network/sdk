import { ChainInfo, SupportedChainId } from '../../types';
import { cronosMainnet } from './cronosMainnet';
import { cronosTestnet } from './cronosTestnet';
import { mainnet } from './mainnet';
import { sepolia } from './sepolia';

export const chainInfoByNetwork: Readonly<Record<SupportedChainId, ChainInfo>> =
  {
    [SupportedChainId.MAINNET]: mainnet,
    [SupportedChainId.SEPOLIA]: sepolia,
    [SupportedChainId.CRONOS_MAINNET]: cronosMainnet,
    [SupportedChainId.CRONOS_TESTNET]: cronosTestnet,
  };
