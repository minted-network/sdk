import { Addresses } from '../../types';

/**
 * Mainnet (Cronos) for minted-pro env
 */
export const cronosMainnet: Addresses = {
  /**
   * Exchange contracts
   */
  WETH: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
  MINTED_EXCHANGE: '0x40cbf9c75a46b147e0fd9ab47df5e064ae015f92',
  MINTED_AGGREGATOR: '0x7b70facfaf8c636e041a5d5767cd6cc2129b536e',
  MINTED_PROXY: '0x03bb2b8a222740511173901b546b4699e298fc08',

  ROYALTY_FEE_MANAGER: '0x55091b45E4a1bB494c52191323269C3A03893be7',
  ROYALTY_FEE_REGISTRY: '0x02c48E6Ad5443b0439e177B7a221B3584114a1a8',
  ROYALTY_FEE_SETTER: '0x6D6d40D8a8b216251A485B9Bc9685DD8a9FE18BB',

  TRANSFER_MANAGER_ERC721: '0xE31A46C284B88e53640Ee6f8382bf71A696bED25',
  TRANSFER_MANAGER_ERC1155: '0xF6eeEB70d64DDed92d15aEF27a80333e2eF6CC22',
  TRANSFER_MANAGER_NON_COMPLIANT_ERC721:
    '0xB223a50892ad99Abd0775b6CCeDAe632289E0fb6',
  TRANSFER_SELECTOR_NFT: '0x6fc05d73aab4A5dD6720613D667260Ad9551110D',

  STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE:
    '0x050C6f1E588381DBdB0dBba8bd240Eb3548FC286',
  STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE:
    '0x9D421E5035cec61615422Ef8fa60D03750E83E98',
  STRATEGY_PRIVATE_SALE: '',
  STRATEGY_DUTCH_AUCTION: '',
  STRATEGY_ENGLISH_AUCTION: '',

  CURRENCY_MANAGER: '0x45eB210f33583022C7f9bF981bb3569EEbA0f77E',
  EXECUTION_MANAGER: '0x36766780336E393e10BB4Fd6B5Ed36Ef29A4F867',

  /**
   * Rewards Contracts
   */
  MINTED_TOKEN: '0x0224010ba2d567ffa014222ed960d1fa43b8c8e1',
  MINTED_AIR_DROP: '',
  TOKEN_DISTRIBUTOR: '0x4a91fe94870Ce48fC0bCb7c51d94677E61783401',
  FEE_DISTRIBUTOR: '0x24800215a713695E19D7A75bb4921f884bCd9809',
  MINTED_BOOST: '0x697c9c6F8823EA99B535A9A4D03EcC948B9ba021',
  MINTED_BOOST_MULTIPLIER_REGISTRY:
    '0x347Ae9001b54800f48c40DC1E3F1AbA6b8390e9A',
  TOKEN_SPLITTER: '0xCB980A28034bf6B95694D0Bf0c3A43f73E2bE401',
  REWARD_DISTRIBUTORS: {
    LISTING: '0x195B8fb58e9E8Df10c7F08daA05efdc39cCd9bdC',
    TRADING: '0xFFb43BE7B3ee6f82354aEF7FA266A29796fca4B5',
  },

  MTD_VVS_LP: '0xf10af2E06908A8f234678974712B60DE3063609B',
  VVS_USDC_LP: '0x814920d1b8007207db6cb5a2dd92bf0b082bdba1',
  VVS_TOKEN: '0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
  /**
   * Other contracts
   */
  MULTICALL2: '0x5e954f5972EC6BFc7dECd75779F10d848230345F',
};
