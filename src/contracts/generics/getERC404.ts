import { Signer } from 'ethers';

import { ERC404, ERC404__factory, SupportedChainId } from '../../types';
import { getContract } from '../../utils/getContract';

/**
 *
 * @param chainId the chain on which the contract is deployed
 * @param contractAddress the contract address
 * @param signer only needed need to write to the contract
 *
 * @returns the contract instance
 */
export const getERC404 = (
  chainId: SupportedChainId,
  contractAddress: string,
  signer?: Signer
) => getContract<ERC404>(chainId, contractAddress, ERC404__factory.abi, signer);
