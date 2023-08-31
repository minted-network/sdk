import { Signer } from 'ethers';

import { ERC1155, ERC1155__factory, SupportedChainId } from '../../types';
import { getContract } from '../../utils/getContract';

/**
 *
 * @param chainId the chain on which the contract is deployed
 * @param contractAddress the contract address
 * @param signer only needed need to write to the contract
 *
 * @returns the contract instance
 */
export const getERC1155 = (
  chainId: SupportedChainId,
  contractAddress: string,
  signer?: Signer
) =>
  getContract<ERC1155>(chainId, contractAddress, ERC1155__factory.abi, signer);
