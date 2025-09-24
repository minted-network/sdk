import { ChainInfo, SupportedChainId } from '../../types';
import { addressesByNetwork } from '../addressesByNetwork';

export const cronosMainnet: ChainInfo = {
  chainId: SupportedChainId.CRONOS_MAINNET,
  label: 'Cronos',
  explorer: process.env.MAINNET_EXPLORER_URL || 'https://explorer.cronos.org',
  scanText: 'Cronos Explorer',
  rpcUrl: process.env.RPC_NETWORK_25 || 'https://evm.cronos.org',
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
