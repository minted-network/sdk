## Contract Addresses

`addressesByNetwork`
contract addresses of Minted

```ts
Readonly<Record<SupportedChainId, Addresses>>;
```

## Chain Info

`chainInfoByNetwork`
chain id, rpc url, currency info, etc.

```ts
Readonly<Record<SupportedChainId, ChainInfo>>;
```

## Reward Vestings

`rewardVestingByNetwork`

```ts
Readonly<Record<SupportedChainId, Readonly<RewardVesting[]>>>;
```

## NFT Staking Pools (WIP)

`nftStakingPoolByNetwork`

```ts
Readonly<Record<SupportedChainId, Readonly<NftStakingPool[]>>>;
```
