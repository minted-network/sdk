import { ChainInfo, SupportedChainId } from '../../types';
import { addressesByNetwork } from '../addressesByNetwork';

export const cronosMainnet: ChainInfo = {
  chainId: SupportedChainId.CRONOS_MAINNET,
  label: 'Cronos',
  explorer: 'https://cronoscan.com',
  scanText: 'Cronoscan',
  rpcUrl: 'https://psta-forkenv.crorc.co/endpoints/5cbe8d9bb0615f81',
  wrappedCurrency: {
    address: addressesByNetwork[SupportedChainId.CRONOS_MAINNET].WETH,
    name: 'WCRO',
    symbol: 'WCRO',
    decimals: 18,
  },
  nativeCurrency: {
    name: 'CRO',
    symbol: 'CRO',
    decimals: 18,
  },
};
