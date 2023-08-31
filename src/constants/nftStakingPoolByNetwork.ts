import { SupportedChainId } from '../types';

type NftStakingPool = Readonly<{
  stakingContractAddress: string;
  collectionAddress: string;
  chain: SupportedChainId;
  symbol: string;
}>;

export const nftStakingPoolByNetwork: Readonly<
  Record<SupportedChainId, Readonly<NftStakingPool[]>>
> = {
  [SupportedChainId.MAINNET]: [],
  [SupportedChainId.GOERLI]: [],
  [SupportedChainId.CRONOS_MAINNET]: [
    {
      stakingContractAddress:
        '0x9AC4FbE85244792AF2e81D81c0306e5328c3214d'.toLowerCase(),
      collectionAddress:
        '0x06596ed89ac4609de47a21af7e36b38b2df57c26'.toLowerCase(),
      chain: SupportedChainId.CRONOS_MAINNET,
      symbol: 'CORGIAI',
    },
    {
      stakingContractAddress:
        '0x364a2b596b3D41dCDcD70D8470E0a11c709d0b80'.toLowerCase(),
      collectionAddress:
        '0xd25358e2cad3e1fd165887569892a99fffa674ac'.toLowerCase(),
      chain: SupportedChainId.CRONOS_MAINNET,
      symbol: 'CORGIAI',
    },
  ],
  [SupportedChainId.CRONOS_TESTNET]: [
    {
      stakingContractAddress:
        '0x733Cef267C8eC6c1CCecF4cc233463342713E9dc'.toLowerCase(),
      collectionAddress:
        '0x94dbade1d68b12973eaa7b4f438bb2694862ff15'.toLowerCase(),
      chain: SupportedChainId.CRONOS_TESTNET,
      symbol: 'MTD',
    },
  ],
};
