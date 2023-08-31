import { ContractInterface, ethers, Signer } from 'ethers';

import { SupportedChainId } from '../types';
import { getProvider } from '../utils/getProvider';

/**
 *
 * @param chainId the chain on which the contract is deployed
 * @param address the contract address
 * @param abi the contract abi
 * @param Signer signer is required when you need to write to the contract.
 *
 * @returns the contract instance
 *
 */
export function getContract<T extends ethers.Contract = ethers.Contract>(
  chainId: SupportedChainId,
  address: string,
  abi: ContractInterface,
  signer?: Signer
): T {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return new ethers.Contract(address, abi, signer ?? getProvider(chainId)) as T;
}
