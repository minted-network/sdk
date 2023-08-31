## Definitions

- `SupportedChainId`: Chain ID of the blockchain where your application is running. **[Visit](https://github.com/minted-network/minted-sdk/blob/master/src/types/chainId.ts#L1)**

- `MakerOrder`: The maker order object. **[Visit](https://github.com/minted-network/sdk/blob/master/src/types/orders.ts#L9)**

- `VerifyingContract (optional)`: Contract address where the signature will be used. It will always be the MintedExchange address (MINTED_EXCHANGE in the [addresses](https://github.com/minted-network/sdk/blob/master/src/constants/addressesByNetwork/mainnet.ts#L12). The address differs based on the chain you are using). If you don't provide it, it will use the exchange address for the chainId you provided.

- `JsonRpcSigner`: Json RPC signer object from [ethers](https://docs.ethers.io/v5/api/providers/jsonrpc-provider/#JsonRpcSigner).

- `Params`: The list of params(`any[]`) used to create the maker order.

## Generics

### encodeOrderParams

```ts
const { paramsTypes, encodedParams } = encodeOrderParams(params);
```

For a given array of params used to create a maker order, generate the corresponding array of param types, and [encode](https://docs.ethers.io/v5/api/utils/abi/coder/#AbiCoder-encode) the params in a data hex string.

### getMakerOrderTypeAndDomain

```ts
const { domain, type } = getMakerOrderTypeAndDomain(chainId, verifyingContract);
```

Generate the [EIP-712](https://eips.ethereum.org/EIPS/eip-712) `type` and `domain` information used to sign an order on Minted.

### generateMakerOrderTypedData

```ts
const { domain, value, type } = generateMakerOrderTypedData(
  signer,
  chainId,
  makerOrder,
  verifyingContract
);
```

Generate the domain, value, and type used to generate an EIP-712 (typed data signing) signature.

### signMakerOrder

```ts
const signature = await signMakerOrder(
  signer,
  chainId,
  makerOrder,
  verifyingContractAddress
);
```

Return signature hash. You can decompose the signature with [splitSignature](https://docs.ethers.io/v5/api/utils/bytes/#utils-splitSignature).

## Interact with Minted Services (off-chain)

### signMakerOrderAndNormalizeSignature

```ts
const signature = await signMakerOrderAndNormalizeSignature(
  signer,
  chainId,
  makerOrder,
  verifyingContractAddress
);
```

Some hardware cold wallet can generate signatures that are not verifiable on BE side. [Normalizing](https://docs.ethers.io/v5/api/utils/bytes/#byte-manipulation--signature-conversion) by split and join can solve the problem.

### signLoginOfMinted

```ts
const signature = await signLoginOfMinted(signer, account, timestamp);
```

Generate login token by signature from Public APIs(WIP), grant users access to read private data or write data.
