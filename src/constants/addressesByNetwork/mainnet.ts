import { Addresses } from '../../types';

/**
 * Mainnet (ETH) for minted-pro env
 */
export const mainnet: Addresses = {
  /**
   * Exchange contracts
   */
  WETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  MINTED_EXCHANGE: '0x40cbf9c75a46b147e0fd9ab47df5e064ae015f92',
  MINTED_AGGREGATOR: '0x9d4f77832668f85e91850c640da671d6042e22d4',
  MINTED_PROXY: '0xf960ea50a2e45b5eab9d124ae20e23457ff89830',

  TRANSFER_MANAGER_ERC721: '0xE31A46C284B88e53640Ee6f8382bf71A696bED25',
  TRANSFER_MANAGER_ERC1155: '0xF6eeEB70d64DDed92d15aEF27a80333e2eF6CC22',
  TRANSFER_MANAGER_NON_COMPLIANT_ERC721:
    '0xB223a50892ad99Abd0775b6CCeDAe632289E0fb6',
  TRANSFER_SELECTOR_NFT: '0x6fc05d73aab4A5dD6720613D667260Ad9551110D',

  STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE:
    '0x050C6f1E588381DBdB0dBba8bd240Eb3548FC286',
  STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE:
    '0x8220C6bCF95B94C7C3AB3726dc6DB3cA3b5De10A',
  STRATEGY_PRIVATE_SALE: '',
  STRATEGY_DUTCH_AUCTION: '',
  STRATEGY_ENGLISH_AUCTION: '',

  ROYALTY_FEE_MANAGER: '0x55091b45E4a1bB494c52191323269C3A03893be7',
  ROYALTY_FEE_REGISTRY: '0x02c48E6Ad5443b0439e177B7a221B3584114a1a8',
  ROYALTY_FEE_SETTER: '0x6D6d40D8a8b216251A485B9Bc9685DD8a9FE18BB',

  CURRENCY_MANAGER: '0x45eB210f33583022C7f9bF981bb3569EEbA0f77E',
  EXECUTION_MANAGER: '0x36766780336E393e10BB4Fd6B5Ed36Ef29A4F867',

  MINTED_TOKEN: '',
  MINTED_AIR_DROP: '',
  TOKEN_DISTRIBUTOR: '',
  FEE_DISTRIBUTOR: '',
  MINTED_BOOST: '',
  MINTED_BOOST_MULTIPLIER_REGISTRY: '',
  TOKEN_SPLITTER: '',
  REWARD_DISTRIBUTORS: {
    LISTING: '',
    TRADING: '',
  },

  MTD_VVS_LP: '',
  VVS_USDC_LP: '',
  VVS_TOKEN: '',
  /**
   * Other contracts
   */
  MULTICALL2: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
};
