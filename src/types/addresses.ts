/**
 * Minted Contract Addresses
 */
export type Addresses = Readonly<{
  WETH: string;
  MINTED_EXCHANGE: string;
  MINTED_AGGREGATOR: string;
  MINTED_PROXY: string;

  STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE: string;
  STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE: string;
  STRATEGY_PRIVATE_SALE: string;
  STRATEGY_DUTCH_AUCTION: string;
  STRATEGY_ENGLISH_AUCTION: string;

  TRANSFER_MANAGER_ERC721: string;
  TRANSFER_MANAGER_ERC1155: string;
  TRANSFER_MANAGER_NON_COMPLIANT_ERC721: string;
  TRANSFER_SELECTOR_NFT: string;

  ROYALTY_FEE_SETTER: string;
  ROYALTY_FEE_MANAGER: string;
  ROYALTY_FEE_REGISTRY: string;

  CURRENCY_MANAGER: string;
  EXECUTION_MANAGER: string;

  /**
   * Rewards contracts are not deployed to ethereum networks, and the reward contracts addresses
   * should be empty in ethereum networks(Sepolia and ethereum mainnet).
   */
  MINTED_TOKEN: string;
  MINTED_AIR_DROP: string;
  TOKEN_DISTRIBUTOR: string;
  FEE_DISTRIBUTOR: string;
  MINTED_BOOST: string;
  MINTED_BOOST_MULTIPLIER_REGISTRY: string;
  TOKEN_SPLITTER: string;
  REWARD_DISTRIBUTORS: {
    LISTING: string;
    TRADING: string;
  };

  MTD_VVS_LP: string;
  VVS_USDC_LP: string;
  VVS_TOKEN: string;
  /**
   * Other contracts
   */
  MULTICALL2: string;

  // TODO: visit https://github.com/mds1/multicall
  MULTICALL3?: string;
}>;
