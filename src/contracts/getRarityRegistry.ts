import { Signer } from 'ethers';

import {
  RarityRegistry,
  RarityRegistry__factory,
  SupportedChainId,
} from '../types';
import { getContract } from '../utils/getContract';

export const getRarityRegistry = (
  chainId: SupportedChainId,
  rarityRegistryAddress: string,
  signer?: Signer
) =>
  getContract<RarityRegistry>(
    chainId,
    rarityRegistryAddress,
    RarityRegistry__factory.abi,
    signer
  );
