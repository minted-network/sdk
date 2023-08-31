import { Signer } from 'ethers';

import {
  NftMasterChef,
  NftMasterChef__factory,
  SupportedChainId,
} from '../types';
import { getContract } from '../utils/getContract';

/**
 * staking
 * @param chainId the chain on which the contract is deployed
 * @param signer signer is required when you need to write to the contract.
 *
 * @returns the contract instance
 *
 */
export const getNftMasterChef = (
  chainId: SupportedChainId,
  address: string,
  signer?: Signer
) =>
  getContract<NftMasterChef>(
    chainId,
    address,
    NftMasterChef__factory.abi,
    signer
  );
