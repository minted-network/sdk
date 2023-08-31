import { providers, TypedDataDomain, TypedDataField, utils } from 'ethers';

import { MakerOrder, SolidityType, SupportedChainId } from '../types';
import { normalizeSignature } from '../utils';
import { etherSignTypedData } from './etherSignTypedData';

/**
 * Get LR typed data for creating maker orders.
 * Use with a signTypedData function.
 * @see https://eips.ethereum.org/EIPS/eip-712
 * @param chainId Current chain id
 * @param verifyingContract Exchange contract address
 * @returns { type: Record<string, TypedDataField[]>, domain: TypedDataDomain }
 */
export const getMakerOrderTypedData = (
  chainId: SupportedChainId,
  verifyingContract: string
): {
  types: Record<string, TypedDataField[]>;
  domain: TypedDataDomain;
} => {
  const domain: TypedDataDomain = {
    name: 'MintedExchange',
    version: '1',
    chainId,
    verifyingContract,
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

/**
 * Create a signature for a maker order
 * @param signer user signer
 * @param chainId current chain id
 * @param verifyingContractAddress Minted exchange contract address
 * @param order see MakerOrder
 * @param paramsTypes contains an array of solidity types mapping the params array types
 * @returns String signature
 */
export const signMakerOrder = async (
  signer: providers.JsonRpcSigner,
  chainId: SupportedChainId,
  verifyingContractAddress: string,
  order: MakerOrder,
  paramsTypes: SolidityType[]
): Promise<string | null> => {
  const signerAddress = await signer.getAddress();
  const { domain, types } = getMakerOrderTypedData(
    chainId,
    verifyingContractAddress
  );

  const value = {
    isOrderAsk: order.isOrderAsk,
    signer: signerAddress,
    collection: order.collection,
    price: order.price,
    tokenId: order.tokenId,
    amount: order.amount,
    strategy: order.strategy,
    currency: order.currency,
    nonce: order.nonce,
    startTime: order.startTime,
    endTime: order.endTime,
    minPercentageToAsk: order.minPercentageToAsk,
    params: utils.defaultAbiCoder.encode(paramsTypes, order.params),
  };

  const signature = await etherSignTypedData(
    signer.provider,
    signerAddress,
    domain,
    types,
    value
  );
  return signature ? normalizeSignature(signature) : null;
};
