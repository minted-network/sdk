import { Signer } from 'ethers';

import {
  LaunchpadERC20,
  LaunchpadERC20__factory,
  SupportedChainId,
} from '../../types';
import { getContract } from '../../utils/getContract';

/**
 *
 * @param chainId the chain on which the contract is deployed
 * @param contractAddress the contract address
 * @param signer signer is required when you need to write to the contract.
 *
 * @returns the contract instance
 */
export const getLaunchpadERC20 = (
  chainId: SupportedChainId,
  contractAddress: string,
  signer?: Signer
) =>
  getContract<LaunchpadERC20>(
    chainId,
    contractAddress,
    LaunchpadERC20__factory.abi,
    signer
  );
