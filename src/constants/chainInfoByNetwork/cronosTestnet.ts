import { ChainInfo, SupportedChainId } from '../../types';
import { addressesByNetwork } from '../addressesByNetwork';

export const cronosTestnet: ChainInfo = {
  chainId: SupportedChainId.CRONOS_TESTNET,
  label: 'Cronos Testnet',
  explorer: 'https://testnet.cronoscan.com',
  scanText: 'Cronoscan',
  rpcUrl: process.env.RPC_NETWORK_338 || 'https://evm-t3.cronos.org/',
  wrappedCurrency: {
    address: addressesByNetwork[SupportedChainId.CRONOS_TESTNET].WETH,
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
