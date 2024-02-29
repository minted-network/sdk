import { ChainInfo, SupportedChainId } from '../../types';
import { addressesByNetwork } from '../addressesByNetwork';

export const cronosMainnet: ChainInfo = {
  chainId: SupportedChainId.CRONOS_MAINNET,
  label: 'Cronos',
  explorer: 'https://explorer.cronos.org',
  scanText: 'Cronoscan',
  rpcUrl: 'https://mainnet.cronoslabs.org/v1/ea0f1c40f912a166bf1224fedd07b442',
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
