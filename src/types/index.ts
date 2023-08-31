export type { Addresses } from './addresses';
export {
  SupportedChainId,
  SupportedCronosChainId,
  SupportedEthereumChainId,
} from './chainId';
export type { ChainInfo } from './chainInfo';
export * from './contracts';
export type {
  MakerOrder,
  MakerOrderWithEncodedParams,
  MakerOrderWithSignature,
  MakerOrderWithVRS,
  TakerOrder,
  TakerOrderWithEncodedParams,
} from './orders';

export type SolidityType =
  | 'bool'
  | 'address'
  | 'uint256'
  | 'bytes'
  | 'bytes32'
  | 'bytes32[]';

export enum Wallet {
  METAMASK,
  FRAME,
  OTHER,
}
