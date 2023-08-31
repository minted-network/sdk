# Generics

```ts
type GenericContractGetter = <T, Chain extends number = SupportedChainId>(
  chainId: Chain,
  contractAddress: string,
  signer?: Signer
) => T;

const getERC20: GenericContractGetter<ERC20>;

const getERC721: GenericContractGetter<ERC721>;

const getLaunchpadERC721: GenericContractGetter<LaunchpadERC721>;

const getERC1155: GenericContractGetter<ERC1155>;
```

# Multi Chains

## Minted Aggregator

`getMintedAggregator`

```ts
(
  chainId: SupportedChainId,
  signer?: Signer
): MintedAggregator
```

`executeBulkBuy`

```ts
type Options = {
  chainId: SupportedChainId;
  tokenTransfer: TokenTransferStruct[];
  tradeData: IMintedAggregator.TradeDataStruct[];
  recipient: string;
  isAtomic?: boolean;
  signer?: Signer;
  overrides?: PayableOverrides & { from?: PromiseOrValue<string> };
};

type GasLimitGetter = (
  estimatedGas: BigNumberish,
  amount: number
) => BigNumberish;

const executeBulkBuy = (
  opts: Options,
  getGasLimit?: GasLimitGetter
): Promise<ContractTransaction>

const defaultGasLimitGetter = (
  estimatedGas: BigNumberish,
  amount: number
) => BigNumber.from(amount).mul(300000).add(estimatedGas);
```

## Minted Proxy

TBD

## Minted Exchange

`getMintedExchange`

```ts
(
  chainId: SupportedChainId,
  signer?: Signer
): MintedExchange
```

## Royalty Fee Manager

`getRoyaltyFeeManager`

```ts
(
  chainId: SupportedChainId,
  signer?: Signer
): RoyaltyFeeManager
```

## Wrapped Token

Wrapped token contract
`getWETH`

```ts
(
  chainId: SupportedChainId,
): ERC20
```

## Rarity Registry

`getRarityRegistry`

```ts
(
  chainId: SupportedChainId,
  rarityRegistryAddress: string,
  signer?: Signer
): RarityRegistry
```

# Cronos Only

## Rewards Distributor

`getRewardDistributor_LISTING`

```ts
(
  chainId: SupportedCronosChainId,
  signer?: Signer,
): RewardsDistributor
```

`getRewardDistributor_TRADING`

```ts
(
  chainId: SupportedCronosChainId,
  signer?: Signer,
): RewardsDistributor
```

## Minted Token

MTD token contract
`getMintedToken`

```ts
(
  chainId: SupportedCronosChainId,
  signer?: Signer,
): ERC20
```

## Minted Boost

`getMintedBoost`

```ts
(
  chainId: SupportedCronosChainId,
  signer?: Signer
): MintedBoost
```

## Fee Distributor

`getFeeDistributor`

```ts
(
  chainId: SupportedCronosChainId,
  signer?: Signer
): FeeDistributor
```

## Token Distributor

`getTokenDistributor`

```ts
(
  chainId: SupportedCronosChainId,
  signer?: Signer
): TokenDistributor
```

## Multiplier Registry

`getMultiplierRegistry`

```ts
(
  chainId: SupportedCronosChainId,
  signer?: Signer
): MultiplierRegistry
```

## VVS

`getMtdVvsPair`

```ts
(
  chainId: SupportedCronosChainId,
): VVSPair
```

`getVvsUsdcPair`

```ts
(
  chainId: SupportedCronosChainId,
): VVSPair
```
