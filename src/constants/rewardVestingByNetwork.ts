import { SupportedChainId } from '../types';

type RewardVesting = Readonly<{
  factor: number;
  poolId: number;
}>;

export const rewardVestingByNetwork: Readonly<
  Record<SupportedChainId, Readonly<RewardVesting[]>>
> = {
  [SupportedChainId.MAINNET]: [],
  [SupportedChainId.GOERLI]: [],
  [SupportedChainId.CRONOS_MAINNET]: [
    { factor: 0.25, poolId: 0 },
    { factor: 0.25, poolId: 1 },
    { factor: 0.25, poolId: 2 },
  ],
  [SupportedChainId.CRONOS_TESTNET]: [
    { factor: 0.25, poolId: 0 },
    { factor: 0.25, poolId: 1 },
    { factor: 0.25, poolId: 2 },
  ],
};
