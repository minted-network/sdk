import { ethers } from 'ethers';

/**
 * some hardware cold wallet can generate signatures that are not verifiable on BE side
 * normalizing by split and join can solve the problem
 * https://docs.ethers.io/v5/api/utils/bytes/#byte-manipulation--signature-conversion
 */
export const normalizeSignature = (signature: string) =>
  ethers.utils.joinSignature(ethers.utils.splitSignature(signature));
