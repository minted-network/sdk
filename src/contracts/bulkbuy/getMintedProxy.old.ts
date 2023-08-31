import { Signer } from 'ethers';

import { addressesByNetwork } from '../../constants';
import {
  MintedProxy,
  MintedProxy__factory,
  SupportedChainId,
} from '../../types';
import { getContract } from '../../utils';

/**
 * @param chainId the chain on which the contract is deployed
 * @param signer signer is required when you need to write to the contract.
 *
 * @returns the contract instance
 *
 */
export const getMintedProxy = (chainId: SupportedChainId, signer?: Signer) =>
  getContract<MintedProxy>(
    chainId,
    addressesByNetwork[chainId].MINTED_PROXY,
    MintedProxy__factory.abi,
    signer
  );

/**
 * @param chainId
 * @param signer
 * @returns
 */
export const getMintedProxyExecuteSelector = async (
  chainId: SupportedChainId,
  signer?: Signer
) =>
  getMintedProxy(chainId, signer).interface.getSighash(
    'execute((address,address,uint8,uint256[],uint256[],uint256,address,uint256,uint256,bytes)[],bytes[],bytes,address,bool,uint256,address)'
  );
