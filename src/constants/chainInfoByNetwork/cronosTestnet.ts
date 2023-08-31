import { ChainInfo, SupportedChainId } from '../../types';
import { addressesByNetwork } from '../addressesByNetwork';

export const cronosTestnet: ChainInfo = {
  chainId: SupportedChainId.CRONOS_TESTNET,
  label: 'Cronos Testnet',
  explorer: 'https://testnet.cronoscan.com',
  scanText: 'Cronoscan',
  rpcUrl: 'https://testnet.cronoslabs.org/v1/ea0f1c40f912a166bf1224fedd07b442',
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
