import { addressesByNetwork } from '../constants';
import { SupportedChainId } from '../types';
import { getERC20 } from './generics';

/**
 * @param chainId the chain on which the WETH contract is deployed
 *
 * @returns the WETH contract instance
 */
export const getWETH = (chainId: SupportedChainId) =>
  getERC20(chainId, addressesByNetwork[chainId].WETH);
