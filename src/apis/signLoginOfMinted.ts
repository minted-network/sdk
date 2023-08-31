import { providers } from 'ethers';

import { personalSignOfMinted } from './personalSignOfMinted';

/**
 * TODO: Login Api of Minted Service
 *
 * Sign login message for Minted.
 * The signature will be used to authenticate the account.
 * Passing [account, timestamp, signature] to Minted Service to generate login token.
 * @param signer
 * @param account
 * @param timestamp
 * @returns signature, signerAddress
 */
export const signLoginOfMinted = async (
  signer: providers.JsonRpcSigner,
  account: string,
  timestamp: number
) => personalSignOfMinted(signer, getLoginMsgToSign(account, timestamp));

const getLoginMsgToSign = (account: string, timestamp: number) =>
  `Welcome to Minted!

Please sign to let us verify that you are the owner of this address: ${account.toLowerCase()}

By signing you confirm that you accept the following:

Minted Terms and Conditions: https://minted.network/about/termsandconditions.pdf
Minted Code of Conduct: https://minted.network/about/codeofconduct.pdf

and acknowledge that you have read our Minted Privacy Notice: https://minted.network/about/privacynotice.pdf

This request and signature will not trigger a blockchain transaction nor cost any gas fees.
The electronic hash record will be stored in our databases as a record of your agreement.

Your authentication status will reset after 24 hours.
timestamp: ${timestamp}`;
