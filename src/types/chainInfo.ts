import { SupportedChainId } from './chainId';

export type ChainInfo = Readonly<{
  label: string;
  rpcUrl: string;
  chainId: SupportedChainId;
  explorer: string;
  scanText: string;
  wrappedCurrency: {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
  };
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: 18;
  };
}>;
