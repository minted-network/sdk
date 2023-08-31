import { TypedDataDomain, TypedDataField } from 'ethers';

import { addressesByNetwork } from '../constants';
import { SupportedChainId } from '../types';

const version = 1;

/**
 * Get LR typed data for creating maker orders.
 * Use with a signTypedData function.
 * @see https://eips.ethereum.org/EIPS/eip-712
 * @param chainId Current chain id
 * @param verifyingContract Exchange contract address
 * @returns { types: Record<string, TypedDataField[]>, domain: TypedDataDomain }
 */
export const getMakerOrderTypeAndDomain = (
  chainId: SupportedChainId,
  verifyingContract?: string
): {
  types: Record<string, TypedDataField[]>;
  domain: TypedDataDomain;
} => {
  const domain: TypedDataDomain = {
    name: 'MintedExchange',
    version: version.toString(),
    chainId,
    verifyingContract: verifyingContract
      ? verifyingContract
      : addressesByNetwork[chainId].MINTED_EXCHANGE,
  };

  const types: Record<string, TypedDataField[]> = {
    MakerOrder: [
      { name: 'isOrderAsk', type: 'bool' },
      { name: 'signer', type: 'address' },
      { name: 'collection', type: 'address' },
      { name: 'price', type: 'uint256' },
      { name: 'tokenId', type: 'uint256' },
      { name: 'amount', type: 'uint256' },
      { name: 'strategy', type: 'address' },
      { name: 'currency', type: 'address' },
      { name: 'nonce', type: 'uint256' },
      { name: 'startTime', type: 'uint256' },
      { name: 'endTime', type: 'uint256' },
      { name: 'minPercentageToAsk', type: 'uint256' },
      { name: 'params', type: 'bytes' },
    ],
  };

  return {
    types,
    domain,
  };
};
