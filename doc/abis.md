# ABIs

The SDK exposes most of the Minted contract ABIs. For convenience, some commonly used ABIs are also exported.

## Usages

```ts
// Typescript
import { ERC20__factory } from '@minted-network/sdk';
const { abi } = ERC20__factory;
// JSON
import erc20Abi from '@minted-network/sdk/dist/abis/ERC20.json';
```

`ethers.Contract` implement, [visit Contract Getters](./contracts.md):

```ts
import { getERC20 } from '@minted-network/sdk';
```

<!-- :octocat: [Contracts source code(WIP)](https://github.com/minted-network/)

:book: [Extended documentation(WIP)](). -->

## Minted Exchange ABIs

- **MintedExchange**: Minted exchange, where all the trading actions are done (execute a trade, cancel orders, etc...).

- **IExecutionStrategy**: Generic interface for Strategies contracts. You can use it to interact with all the strategies (only the implementation changes).

- **TransferSelectorNFT**: Select the right transfer manager based on the collection's supported interface. Used to transfer an NFT when a trade is executed.

- **RoyaltyFeeRegistry**: Royalty fee registry for the Minted exchange. Contains royalties information for all the collections.

- **RoyaltyFeeSetter**: Allow creators to set their royalties in the registry.

- **RoyaltyFeeManager**: Compute the royalties for a specific trade, based on the registry information.

## Minted Rarity ABIs

- **RarityRegistry**: Allow creators to set NFT rarities in the registry.

## Minted Staking ABIs

- **FeeDistributor**: Handle WCRO distribution.

- **TokenDistributor**: Distribute the MTD tokens.

- **RewardsDistributor**: Distribute trading or listing rewards using a merkle tree for data validation.

- **MintedAirdrop**: Initial airdrop contract.

- **MintedBoost**: Stake NFTs to boost earings of MTD deposit.

- **MultiplierRegistry**: Control boost multiplier factor of NFT (by rarity).

## Minted Launchpad ABIs

- **LaunchpadERC721**: Allow creators to control launch of collection.

## Minted Bulk Buy ABIs

- **MintedAggregator**: Allow users to batch buy NFTs. This is the user facing contract that allows users to execute bulk buy erc721/erc1155 on Minted exchange. This contract passes user’s data to proxy to execute the bulk buy request.

- **MintedProxy**: This contract have actual code logic to call bulk buy on the Minted exchange.

## Minted Token (MTD) ABIs

- **VVSPair**: Calculate MTD price (MTD/USDC) by rates of MTD/VVS and VVS/USDC.

## Other ABIs (Not created by Minted)

- **ERC20**: Generic ERC20 ABI

- **ERC721**: Generic ERC721 ABI

- **ERC1155**: Generic ERC1155 ABI

- **ReverseRecords**: ENS reverse record ABI
