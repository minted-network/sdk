import { addressesByNetwork } from '../constants';
import { SupportedCronosChainId, VVSPair, VVSPair__factory } from '../types';
import { getContract } from '../utils/getContract';

export const getMtdVvsPair = (chainId: SupportedCronosChainId) =>
  getContract<VVSPair>(
    chainId,
    addressesByNetwork[chainId].MTD_VVS_LP,
    VVSPair__factory.abi
  );

export const getVvsUsdcPair = (chainId: SupportedCronosChainId) =>
  getContract<VVSPair>(
    chainId,
    addressesByNetwork[chainId].VVS_USDC_LP,
    VVSPair__factory.abi
  );
