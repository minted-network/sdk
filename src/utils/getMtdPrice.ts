import { addressesByNetwork } from '../constants';
import { getMtdVvsPair, getVvsUsdcPair } from '../contracts';
import { SupportedCronosChainId, VVSPair } from '../types';
import { convertWei2Unit } from './unitConverters';

export const getMtdPrice = async (chainId: SupportedCronosChainId) => {
  const mtdVvsRatio = await getMtdVvsRatio(chainId);
  const vvsUsdcRatio = await getVvsUsdcRatio(chainId);
  return 1 / (mtdVvsRatio * vvsUsdcRatio);
};

export const getMtdVvsRatio = async (chainId: SupportedCronosChainId) => {
  const mtdVvsPair = getMtdVvsPair(chainId);
  const { ratio, numeratorAddress } = await getRatio(mtdVvsPair);
  return isVvsToken(chainId, numeratorAddress) ? 1 / ratio : ratio;
};

export const getVvsUsdcRatio = async (chainId: SupportedCronosChainId) => {
  const vvsUsdcPair = getVvsUsdcPair(chainId);
  const { ratio, numeratorAddress } = await getRatio(vvsUsdcPair);
  return (isVvsToken(chainId, numeratorAddress) ? ratio : 1 / ratio) / 10 ** 12; // the number of decimals of USDC is 6, but we divide 10 ** 18
};

const getRatio = async (pair: VVSPair) => {
  const [mtdVvsReserves, token0] = await Promise.all([
    pair.getReserves(),
    pair.token0(),
  ]);
  const ratio =
    +convertWei2Unit(mtdVvsReserves._reserve0) /
    +convertWei2Unit(mtdVvsReserves._reserve1);
  return {
    ratio,
    numeratorAddress: token0,
  };
};

const isVvsToken = (chainId: SupportedCronosChainId, address: string) =>
  address.toLowerCase() === addressesByNetwork[chainId].VVS_TOKEN.toLowerCase();
