import { ChainInfo, SupportedChainId } from '../../types';
import { addressesByNetwork } from '../addressesByNetwork';

export const mainnet: ChainInfo = {
  chainId: SupportedChainId.MAINNET,
  label: 'Ethereum',
  explorer: 'https://etherscan.io',
  scanText: 'Etherscan',
  rpcUrl: 'https://mainnet.infura.io/v3/ecfe790020c54ba1a7ba9538446b42d1',
  wrappedCurrency: {
    address: addressesByNetwork[SupportedChainId.MAINNET].WETH,
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
