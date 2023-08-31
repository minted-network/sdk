import {
  BigNumber,
  BigNumberish,
  ContractTransaction,
  PayableOverrides,
  Signer,
} from 'ethers';

import { BULK_BUY_EXTRA_GAS } from '../../constants';
import { MintedAggregator, SupportedChainId } from '../../types';
import { getMintedAggregator } from './getMintedAggregator';

type Options = {
  chainId: SupportedChainId;
  tokenTransfer: Parameters<MintedAggregator['execute']>[0];
  tradeData: Parameters<MintedAggregator['execute']>[1];
  recipient: string;
  isAtomic?: boolean;
  signer?: Signer;
  overrides?: PayableOverrides & { from?: string };
};

type GasLimitGetter = (
  estimatedGas: BigNumberish,
  amount: number
) => BigNumberish;

export const executeBulkBuy = async (
  opts: Options,
  getGasLimit: GasLimitGetter = defaultGasLimitGetter
): Promise<ContractTransaction> => {
  const {
    chainId,
    tokenTransfer,
    tradeData,
    recipient,
    isAtomic = false,
    signer,
    overrides = {},
  } = opts;
  const mintedAggregator = getMintedAggregator(chainId, signer);
  const estimatedGas = await mintedAggregator.estimateGas.execute(
    tokenTransfer,
    tradeData,
    recipient,
    isAtomic
  );
  return mintedAggregator.execute(
    tokenTransfer,
    tradeData,
    recipient,
    isAtomic,
    {
      gasLimit: getGasLimit(estimatedGas, tradeData[0].orders.length),
      ...overrides,
    }
  );
};

export const defaultGasLimitGetter = (
  estimatedGas: BigNumberish,
  amount: number
) => BigNumber.from(amount).mul(BULK_BUY_EXTRA_GAS).add(estimatedGas);
