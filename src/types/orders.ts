import { BytesLike } from 'ethers';

import { OrderTypes } from './contracts/IExecutionStrategy';

/**
 * /!\ This type is used for the signature and should perfectly match the object signed by the user
 * Do not update unless the contract has been updated
 */
export type MakerOrder = Pick<
  OrderTypes.MakerOrderStruct,
  | 'isOrderAsk' // true --> ask / false --> bid
  | 'signer' // signer address of the maker order
  | 'collection'
  | 'price'
  | 'tokenId'
  | 'amount' // amount of tokens to sell/purchase (must be 1 for ERC721, 1+ for ERC1155)
  | 'strategy' // strategy for trade execution (e.g., DutchAuction, StandardSaleForFixedPrice)
  | 'currency' // currency address
  | 'nonce' // order nonce (must be unique unless new maker order is meant to override existing one e.g., lower ask price)
  | 'startTime'
  | 'endTime'
  | 'minPercentageToAsk'
> & {
  params: string[]; // params (e.g., price, target account for private sale)
};

export type MakerOrderWithEncodedParams = Omit<MakerOrder, 'params'> & {
  params: BytesLike;
};

/** MakerOrderWithSignature matches the type used for API order mutations and contract calls. */
export type MakerOrderWithSignature = MakerOrder & {
  signature: string;
};

/** MakerOrderWithVRS match the type sent to the contract when executing a trade */
export type MakerOrderWithVRS = MakerOrderWithEncodedParams & {
  v: number;
  r: string;
  s: string;
};

export type TakerOrder = Omit<OrderTypes.TakerOrderStruct, 'params'> & {
  params: unknown[]; // params (e.g., price)
};

export type TakerOrderWithEncodedParams = OrderTypes.TakerOrderStruct;
