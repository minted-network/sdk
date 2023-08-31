import { Signer } from 'ethers';

import { addressesByNetwork } from '../constants';
import {
  RewardsDistributor,
  RewardsDistributor__factory,
  SupportedCronosChainId,
} from '../types';
import { getContract } from '../utils/getContract';

/**
 *
 * @param chainId the chain on which the contract is deployed
 * @param signer signer is required when you need to write to the contract.
 *
 * @returns the contract instance
 *
 */
export const getRewardDistributor_LISTING = (
  chainId: SupportedCronosChainId,
  signer?: Signer
) =>
  getContract<RewardsDistributor>(
    chainId,
    addressesByNetwork[chainId].REWARD_DISTRIBUTORS.LISTING,
    RewardsDistributor__factory.abi,
    signer
  );

/**
 *
 * @param chainId the chain on which the contract is deployed
 * @param signer signer is required when you need to write to the contract.
 *
 * @returns the contract instance
 *
 */
export const getRewardDistributor_TRADING = (
  chainId: SupportedCronosChainId,
  signer?: Signer
) =>
  getContract<RewardsDistributor>(
    chainId,
    addressesByNetwork[chainId].REWARD_DISTRIBUTORS.TRADING,
    RewardsDistributor__factory.abi,
    signer
  );
