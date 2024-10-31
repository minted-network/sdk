import { ChainInfo, SupportedChainId } from '../../types';
import { addressesByNetwork } from '../addressesByNetwork';

export const cronosMainnet: ChainInfo = {
  chainId: SupportedChainId.CRONOS_MAINNET,
  label: 'Cronos',
  explorer: 'https://cronoscan.com',
  scanText: 'Cronoscan',
  rpcUrl:
    'https://mainnet-archive.cronoslabs.com/v1/77e80d886c8ee62b04cdb49c63de4f31',
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
