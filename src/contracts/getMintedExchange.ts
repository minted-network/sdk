import { Signer } from 'ethers';

import { addressesByNetwork } from '../constants';
import {
  MintedExchange,
  MintedExchange__factory,
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
export const getMintedExchange = (chainId: SupportedChainId, signer?: Signer) =>
  getContract<MintedExchange>(
    chainId,
    addressesByNetwork[chainId].MINTED_EXCHANGE,
    MintedExchange__factory.abi,
    signer
  );
