import { ethers, providers } from 'ethers';

import { normalizeSignature } from '../utils';

/**
 * @see https://eips.ethereum.org/EIPS/eip-191 personal_sign
 * @param signer
 * @param data string to hexlify and then personal_sign
 * @returns
 */
export const personalSignOfMinted = async (
  signer: providers.JsonRpcSigner,
  data: string
) => {
  const signature: string = await signer.provider.send('personal_sign', [
    ethers.utils.hexlify(ethers.utils.toUtf8Bytes(data)),
    await signer.getAddress(),
  ]);
  return normalizeSignature(signature);
};
