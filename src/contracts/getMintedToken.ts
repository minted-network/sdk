import { Signer } from 'ethers';

import { addressesByNetwork } from '../constants';
import { SupportedCronosChainId } from '../types';
import { getERC20 } from './generics';

/**
 *
 * @param chainId the chain on which the contract is deployed
 * @param signer signer is required when you need to write to the contract.
 *
 * @returns the contract instance
 *
 */
export const getMintedToken = (
  chainId: SupportedCronosChainId,
  signer?: Signer
) => getERC20(chainId, addressesByNetwork[chainId].MINTED_TOKEN, signer);
