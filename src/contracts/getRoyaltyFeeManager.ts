import { Signer } from 'ethers';

import { addressesByNetwork } from '../constants';
import {
  RoyaltyFeeManager,
  RoyaltyFeeManager__factory,
  SupportedChainId,
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
export const getRoyaltyFeeManager = (
  chainId: SupportedChainId,
  signer?: Signer
) =>
  getContract<RoyaltyFeeManager>(
    chainId,
    addressesByNetwork[chainId].ROYALTY_FEE_MANAGER,
    RoyaltyFeeManager__factory.abi,
    signer
  );
