import { ChainInfo, SupportedChainId } from '../../types';
import { addressesByNetwork } from '../addressesByNetwork';

export const cronosTestnet: ChainInfo = {
  chainId: SupportedChainId.CRONOS_TESTNET,
  label: 'Cronos Testnet',
  explorer:
    process.env.TESTNET_EXPLORER_URL || 'https://explorer.cronos.org/testnet',
  scanText: 'Cronos Explorer',
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
