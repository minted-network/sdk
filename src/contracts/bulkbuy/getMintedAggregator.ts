import { Signer } from 'ethers';

import { addressesByNetwork } from '../../constants';
import {
  MintedAggregator,
  MintedAggregator__factory,
  SupportedChainId,
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
export const getMintedAggregator = (
  chainId: SupportedChainId,
  signer?: Signer
) =>
  getContract<MintedAggregator>(
    chainId,
    addressesByNetwork[chainId].MINTED_AGGREGATOR,
    MintedAggregator__factory.abi,
    signer
  );
