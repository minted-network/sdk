import { Signer } from 'ethers';

import { addressesByNetwork } from '../../constants';
import {
  FeeDistributor,
  FeeDistributor__factory,
  SupportedCronosChainId,
} from '../../types';
import { getContract } from '../../utils/getContract';

/**
 *
 * @param chainId the chain on which the contract is deployed
 * @param signer signer is required when you need to write to the contract.
 *
 * @returns the contract instance
 *
 */
export const getFeeDistributor = (
  chainId: SupportedCronosChainId,
  signer?: Signer
) =>
  getContract<FeeDistributor>(
    chainId,
    addressesByNetwork[chainId].FEE_DISTRIBUTOR,
    FeeDistributor__factory.abi,
    signer
  );
