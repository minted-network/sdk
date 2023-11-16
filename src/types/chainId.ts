export enum SupportedChainId {
  MAINNET = 1,
  SEPOLIA = 11155111,
  CRONOS_MAINNET = 25,
  CRONOS_TESTNET = 338,
}

export type SupportedEthereumChainId =
  | SupportedChainId.MAINNET
  | SupportedChainId.SEPOLIA;

export type SupportedCronosChainId =
  | SupportedChainId.CRONOS_MAINNET
  | SupportedChainId.CRONOS_TESTNET;
