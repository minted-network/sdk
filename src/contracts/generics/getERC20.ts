import { Signer } from 'ethers';

import { ERC20, ERC20__factory, SupportedChainId } from '../../types';
import { getContract } from '../../utils/getContract';

/**
 *
 * @param chainId the chain on which the contract is deployed
 * @param contractAddress the contract address
 * @param signer only needed need to write to the contract
 *
 * @returns the contract instance
 */
export const getERC20 = (
  chainId: SupportedChainId,
  contractAddress: string,
  signer?: Signer
) => getContract<ERC20>(chainId, contractAddress, ERC20__factory.abi, signer);
