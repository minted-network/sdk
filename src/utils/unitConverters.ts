import { BigNumberish, ethers } from 'ethers';

import { chainInfoByNetwork } from '../constants';
import { SupportedChainId } from '../types';

export const convertUnit2Wei = (
  value: string,
  chainId?: SupportedChainId,
  wrapped?: boolean
) => ethers.utils.parseUnits(value || '0', getDecimals(chainId, wrapped));

export const convertWei2Unit = (
  wei: BigNumberish,
  chainId?: SupportedChainId,
  wrapped?: boolean
) => ethers.utils.formatUnits(wei, getDecimals(chainId, wrapped));

const getDecimals = (
  chainId: SupportedChainId = SupportedChainId.MAINNET,
  wrapped = false
) =>
  wrapped
    ? chainInfoByNetwork[chainId].wrappedCurrency.decimals
    : chainInfoByNetwork[chainId].nativeCurrency.decimals;
