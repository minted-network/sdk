import { providers } from 'ethers';

import { MakerOrder, SupportedChainId } from '../types';
import { normalizeSignature } from '../utils';
import { etherSignTypedData } from './etherSignTypedData';
import { generateMakerOrderTypedData } from './generateMakerOrderTypedData';

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
  order: MakerOrder,
  verifyingContractAddress?: string
): Promise<string> => {
  const signerAddress = await signer.getAddress();
  const { domain, types, value } = generateMakerOrderTypedData(
    signerAddress,
    chainId,
    order,
    verifyingContractAddress
  );
  const signatureHash = await etherSignTypedData(
    signer.provider,
    signerAddress,
    domain,
    types,
    value
  );
  return signatureHash;
};

/**
 *
 * @param args
 * @returns normalized signature
 */
export const signMakerOrderAndNormalizeSignature = async (
  ...args: Parameters<typeof signMakerOrder>
): Promise<string | undefined> => {
  const signatureHash = await signMakerOrder(...args);
  return signatureHash ? normalizeSignature(signatureHash) : undefined;
};
