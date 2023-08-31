import { Signer } from 'ethers';

import { addressesByNetwork } from '../../constants';
import {
  MultiplierRegistry,
  MultiplierRegistry__factory,
  SupportedCronosChainId,
} from '../../types';
import { getContract } from '../../utils/getContract';

export const getMultiplierRegistry = (
  chainId: SupportedCronosChainId,
  signer?: Signer
) =>
  getContract<MultiplierRegistry>(
    chainId,
    addressesByNetwork[chainId].MINTED_BOOST_MULTIPLIER_REGISTRY,
    MultiplierRegistry__factory.abi,
    signer
  );
