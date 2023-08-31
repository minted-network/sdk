export enum SupportedChainId {
  MAINNET = 1,
  GOERLI = 5,
  CRONOS_MAINNET = 25,
  CRONOS_TESTNET = 338,
}

export type SupportedEthereumChainId =
  | SupportedChainId.MAINNET
  | SupportedChainId.GOERLI;

export type SupportedCronosChainId =
  | SupportedChainId.CRONOS_MAINNET
  | SupportedChainId.CRONOS_TESTNET;
