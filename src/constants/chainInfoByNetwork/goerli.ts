import { ChainInfo, SupportedChainId } from '../../types';
import { addressesByNetwork } from '../addressesByNetwork';

export const goerli: ChainInfo = {
  chainId: SupportedChainId.GOERLI,
  label: 'Goerli',
  explorer: 'https://goerli.etherscan.io',
  scanText: 'Etherscan',
  rpcUrl: 'https://goerli.infura.io/v3/d265d8b0b34f4b47b23cde23290cd8f0',
  wrappedCurrency: {
    address: addressesByNetwork[SupportedChainId.GOERLI].WETH,
    name: 'WETH',
    symbol: 'WETH',
    decimals: 18,
  },
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
};
