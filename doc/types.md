## Chain ID

```ts
enum SupportedChainId {
  MAINNET = 1,
  GOERLI = 5,
  CRONOS_MAINNET = 25,
  CRONOS_TESTNET = 338,
}

type SupportedEthereumChainId =
  | SupportedChainId.MAINNET
  | SupportedChainId.GOERLI;

type SupportedCronosChainId =
  | SupportedChainId.CRONOS_MAINNET
  | SupportedChainId.CRONOS_TESTNET;
```

## Chain Info

`ChainInfo`

## Contract Addresses

`Addresses`

## Orders

`MakerOrder`

`TakerOrder`

## Wallet Type

```ts
enum Wallet {
  METAMASK,
  FRAME,
  OTHER,
}
```
