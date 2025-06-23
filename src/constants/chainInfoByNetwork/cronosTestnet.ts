import { ChainInfo, SupportedChainId } from '../../types';
import { addressesByNetwork } from '../addressesByNetwork';

export const cronosTestnet: ChainInfo = {
  chainId: SupportedChainId.CRONOS_TESTNET,
  label: 'Cronos Testnet',
  explorer: 'https://testnet.cronoscan.com',
  scanText: 'Cronoscan',
  rpcUrl:
    process.env.CRONOS_TESTNET_RPC_URL ||
    'https://testnet.cronoslabs.com/v1/77e80d886c8ee62b04cdb49c63de4f31',
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
