import { TypedDataDomain, TypedDataField } from 'ethers';

import {
  MakerOrder,
  MakerOrderWithEncodedParams,
  SupportedChainId,
} from '../types';
import { encodeOrderParams } from './encodeOrderParams';
import { getMakerOrderTypeAndDomain } from './getMakerOrderTypeAndDomain';

export const generateMakerOrderTypedData = (
  signerAddress: string,
  chainId: SupportedChainId,
  order: MakerOrder,
  verifyingContractAddress?: string
): {
  types: Record<string, TypedDataField[]>;
  domain: TypedDataDomain;
  value: MakerOrderWithEncodedParams;
} => {
  const { domain, types } = getMakerOrderTypeAndDomain(
    chainId,
    verifyingContractAddress
  );
  const { encodedParams } = encodeOrderParams(order.params);
  const value: MakerOrderWithEncodedParams = {
    ...order,
    signer: signerAddress,
    params: encodedParams,
  };

  return { domain, types, value };
};
