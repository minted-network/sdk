import { Signer } from 'ethers';

import { addressesByNetwork } from '../../constants';
import {
  MintedBoost,
  MintedBoost__factory,
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
export const getMintedBoost = (
  chainId: SupportedCronosChainId,
  signer?: Signer
) =>
  getContract<MintedBoost>(
    chainId,
    addressesByNetwork[chainId].MINTED_BOOST,
    MintedBoost__factory.abi,
    signer
  );
