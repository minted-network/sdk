## Unit Converters

`convertUnit2Wei`

```ts
convertUnit2Wei('1'); // BigNumber('1000000000000000000')
```

`convertWei2Unit`

```ts
convertWei2Unit('1'); // '0.000000000000000001'
```

## Provider

`getProvider`

```ts
(chainId: SupportedChainId, opts?: Options, cache = true): ethers.providers.JsonRpcProvider;
```

`getWalletTypeByProvider`

```ts
(provider: ExtendedJsonRpcProvider): Wallet
```

## Contract

`getContract`

```ts
import { ContractInterface, ethers, Signer } from 'ethers';
<T extends ethers.Contract = ethers.Contract>(
  chainId: SupportedChainId,
  address: string,
  abi: ContractInterface,
  signer?: Signer
): T
```

## Minted Token

`getMtdPrice`

USDC / MTD

```ts
(chainId: SupportedCronosChainId): Promise<number>
```

`getMtdVvsRatio`

MTD / VVS

```ts
(chainId: SupportedCronosChainId): Promise<number>
```

`getVvsUsdcRatio`

VVS / USDC

```ts
(chainId: SupportedCronosChainId): Promise<number>
```

## Chain

`isSupportedChain` => chainId is SupportedChainId

`isSupportedCronosChain` => chainId is SupportedCronosChainId

`isSupportedEthereumChain` => chainId is SupportedEthereumChainId

## Signature

```ts
const normalizeSignature = (signature: string) =>
  ethers.utils.joinSignature(ethers.utils.splitSignature(signature));
```
