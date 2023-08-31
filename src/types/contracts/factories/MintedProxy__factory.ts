/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { MintedProxy, MintedProxyInterface } from "../MintedProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketplace",
        type: "address",
      },
      {
        internalType: "address",
        name: "_aggregator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BadSignatureS",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    name: "BadSignatureV",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidOrderLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignatureEOA",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignatureERC1271",
    type: "error",
  },
  {
    inputs: [],
    name: "NullSignerAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "WrongSignatureLength",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "aggregator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address",
            name: "collection",
            type: "address",
          },
          {
            internalType: "enum CollectionType",
            name: "collectionType",
            type: "uint8",
          },
          {
            internalType: "uint256[]",
            name: "tokenIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct BasicOrder[]",
        name: "orders",
        type: "tuple[]",
      },
      {
        internalType: "bytes[]",
        name: "ordersExtraData",
        type: "bytes[]",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isAtomic",
        type: "bool",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "marketplace",
    outputs: [
      {
        internalType: "contract IMintedExchange",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class MintedProxy__factory {
  static readonly abi = _abi;
  static createInterface(): MintedProxyInterface {
    return new utils.Interface(_abi) as MintedProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintedProxy {
    return new Contract(address, _abi, signerOrProvider) as MintedProxy;
  }
}