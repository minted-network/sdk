/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace OrderTypes {
  export type MakerOrderStruct = {
    isOrderAsk: PromiseOrValue<boolean>;
    signer: PromiseOrValue<string>;
    collection: PromiseOrValue<string>;
    price: PromiseOrValue<BigNumberish>;
    tokenId: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    strategy: PromiseOrValue<string>;
    currency: PromiseOrValue<string>;
    nonce: PromiseOrValue<BigNumberish>;
    startTime: PromiseOrValue<BigNumberish>;
    endTime: PromiseOrValue<BigNumberish>;
    minPercentageToAsk: PromiseOrValue<BigNumberish>;
    params: PromiseOrValue<BytesLike>;
    v: PromiseOrValue<BigNumberish>;
    r: PromiseOrValue<BytesLike>;
    s: PromiseOrValue<BytesLike>;
  };

  export type MakerOrderStructOutput = [
    boolean,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    number,
    string,
    string
  ] & {
    isOrderAsk: boolean;
    signer: string;
    collection: string;
    price: BigNumber;
    tokenId: BigNumber;
    amount: BigNumber;
    strategy: string;
    currency: string;
    nonce: BigNumber;
    startTime: BigNumber;
    endTime: BigNumber;
    minPercentageToAsk: BigNumber;
    params: string;
    v: number;
    r: string;
    s: string;
  };
}

export interface MintedAirdropInterface extends utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR_EXCHANGE()": FunctionFragment;
    "MAIN_STRATEGY()": FunctionFragment;
    "MAXIMUM_AMOUNT_TO_CLAIM()": FunctionFragment;
    "TRANSFER_MANAGER_ERC1155()": FunctionFragment;
    "TRANSFER_MANAGER_ERC721()": FunctionFragment;
    "WETH()": FunctionFragment;
    "canClaim(address,uint256,bytes32[])": FunctionFragment;
    "claim(uint256,bytes32[],(bool,address,address,uint256,uint256,uint256,address,address,uint256,uint256,uint256,uint256,bytes,uint8,bytes32,bytes32),bool)": FunctionFragment;
    "endTimestamp()": FunctionFragment;
    "hasClaimed(address)": FunctionFragment;
    "isMerkleRootSet()": FunctionFragment;
    "mintedToken()": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "owner()": FunctionFragment;
    "pauseAirdrop()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setMerkleRoot(bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpauseAirdrop()": FunctionFragment;
    "updateEndTimestamp(uint256)": FunctionFragment;
    "withdrawTokenRewards()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DOMAIN_SEPARATOR_EXCHANGE"
      | "MAIN_STRATEGY"
      | "MAXIMUM_AMOUNT_TO_CLAIM"
      | "TRANSFER_MANAGER_ERC1155"
      | "TRANSFER_MANAGER_ERC721"
      | "WETH"
      | "canClaim"
      | "claim"
      | "endTimestamp"
      | "hasClaimed"
      | "isMerkleRootSet"
      | "mintedToken"
      | "merkleRoot"
      | "owner"
      | "pauseAirdrop"
      | "paused"
      | "renounceOwnership"
      | "setMerkleRoot"
      | "transferOwnership"
      | "unpauseAirdrop"
      | "updateEndTimestamp"
      | "withdrawTokenRewards"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR_EXCHANGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAIN_STRATEGY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAXIMUM_AMOUNT_TO_CLAIM",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TRANSFER_MANAGER_ERC1155",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TRANSFER_MANAGER_ERC721",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "canClaim",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      OrderTypes.MakerOrderStruct,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "endTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasClaimed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isMerkleRootSet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintedToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pauseAirdrop",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMerkleRoot",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unpauseAirdrop",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateEndTimestamp",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTokenRewards",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR_EXCHANGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAIN_STRATEGY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAXIMUM_AMOUNT_TO_CLAIM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TRANSFER_MANAGER_ERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TRANSFER_MANAGER_ERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canClaim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "endTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasClaimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isMerkleRootSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pauseAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unpauseAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateEndTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokenRewards",
    data: BytesLike
  ): Result;

  events: {
    "AirdropRewardsClaim(address,uint256)": EventFragment;
    "MerkleRootSet(bytes32)": EventFragment;
    "NewEndTimestamp(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "TokensWithdrawn(uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AirdropRewardsClaim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MerkleRootSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewEndTimestamp"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface AirdropRewardsClaimEventObject {
  user: string;
  amount: BigNumber;
}
export type AirdropRewardsClaimEvent = TypedEvent<
  [string, BigNumber],
  AirdropRewardsClaimEventObject
>;

export type AirdropRewardsClaimEventFilter =
  TypedEventFilter<AirdropRewardsClaimEvent>;

export interface MerkleRootSetEventObject {
  merkleRoot: string;
}
export type MerkleRootSetEvent = TypedEvent<[string], MerkleRootSetEventObject>;

export type MerkleRootSetEventFilter = TypedEventFilter<MerkleRootSetEvent>;

export interface NewEndTimestampEventObject {
  endTimestamp: BigNumber;
}
export type NewEndTimestampEvent = TypedEvent<
  [BigNumber],
  NewEndTimestampEventObject
>;

export type NewEndTimestampEventFilter = TypedEventFilter<NewEndTimestampEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface TokensWithdrawnEventObject {
  amount: BigNumber;
}
export type TokensWithdrawnEvent = TypedEvent<
  [BigNumber],
  TokensWithdrawnEventObject
>;

export type TokensWithdrawnEventFilter = TypedEventFilter<TokensWithdrawnEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface MintedAirdrop extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MintedAirdropInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DOMAIN_SEPARATOR_EXCHANGE(overrides?: CallOverrides): Promise<[string]>;

    MAIN_STRATEGY(overrides?: CallOverrides): Promise<[string]>;

    MAXIMUM_AMOUNT_TO_CLAIM(overrides?: CallOverrides): Promise<[BigNumber]>;

    TRANSFER_MANAGER_ERC1155(overrides?: CallOverrides): Promise<[string]>;

    TRANSFER_MANAGER_ERC721(overrides?: CallOverrides): Promise<[string]>;

    WETH(overrides?: CallOverrides): Promise<[string]>;

    canClaim(
      user: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claim(
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      makerAsk: OrderTypes.MakerOrderStruct,
      isERC721: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    hasClaimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isMerkleRootSet(overrides?: CallOverrides): Promise<[boolean]>;

    mintedToken(overrides?: CallOverrides): Promise<[string]>;

    merkleRoot(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pauseAirdrop(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMerkleRoot(
      _merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpauseAirdrop(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateEndTimestamp(
      newEndTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawTokenRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  DOMAIN_SEPARATOR_EXCHANGE(overrides?: CallOverrides): Promise<string>;

  MAIN_STRATEGY(overrides?: CallOverrides): Promise<string>;

  MAXIMUM_AMOUNT_TO_CLAIM(overrides?: CallOverrides): Promise<BigNumber>;

  TRANSFER_MANAGER_ERC1155(overrides?: CallOverrides): Promise<string>;

  TRANSFER_MANAGER_ERC721(overrides?: CallOverrides): Promise<string>;

  WETH(overrides?: CallOverrides): Promise<string>;

  canClaim(
    user: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  claim(
    amount: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    makerAsk: OrderTypes.MakerOrderStruct,
    isERC721: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  hasClaimed(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isMerkleRootSet(overrides?: CallOverrides): Promise<boolean>;

  mintedToken(overrides?: CallOverrides): Promise<string>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pauseAirdrop(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMerkleRoot(
    _merkleRoot: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpauseAirdrop(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateEndTimestamp(
    newEndTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawTokenRewards(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DOMAIN_SEPARATOR_EXCHANGE(overrides?: CallOverrides): Promise<string>;

    MAIN_STRATEGY(overrides?: CallOverrides): Promise<string>;

    MAXIMUM_AMOUNT_TO_CLAIM(overrides?: CallOverrides): Promise<BigNumber>;

    TRANSFER_MANAGER_ERC1155(overrides?: CallOverrides): Promise<string>;

    TRANSFER_MANAGER_ERC721(overrides?: CallOverrides): Promise<string>;

    WETH(overrides?: CallOverrides): Promise<string>;

    canClaim(
      user: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    claim(
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      makerAsk: OrderTypes.MakerOrderStruct,
      isERC721: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    endTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    hasClaimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isMerkleRootSet(overrides?: CallOverrides): Promise<boolean>;

    mintedToken(overrides?: CallOverrides): Promise<string>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pauseAirdrop(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setMerkleRoot(
      _merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpauseAirdrop(overrides?: CallOverrides): Promise<void>;

    updateEndTimestamp(
      newEndTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTokenRewards(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AirdropRewardsClaim(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): AirdropRewardsClaimEventFilter;
    AirdropRewardsClaim(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): AirdropRewardsClaimEventFilter;

    "MerkleRootSet(bytes32)"(merkleRoot?: null): MerkleRootSetEventFilter;
    MerkleRootSet(merkleRoot?: null): MerkleRootSetEventFilter;

    "NewEndTimestamp(uint256)"(endTimestamp?: null): NewEndTimestampEventFilter;
    NewEndTimestamp(endTimestamp?: null): NewEndTimestampEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "TokensWithdrawn(uint256)"(amount?: null): TokensWithdrawnEventFilter;
    TokensWithdrawn(amount?: null): TokensWithdrawnEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    DOMAIN_SEPARATOR_EXCHANGE(overrides?: CallOverrides): Promise<BigNumber>;

    MAIN_STRATEGY(overrides?: CallOverrides): Promise<BigNumber>;

    MAXIMUM_AMOUNT_TO_CLAIM(overrides?: CallOverrides): Promise<BigNumber>;

    TRANSFER_MANAGER_ERC1155(overrides?: CallOverrides): Promise<BigNumber>;

    TRANSFER_MANAGER_ERC721(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    canClaim(
      user: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      makerAsk: OrderTypes.MakerOrderStruct,
      isERC721: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    hasClaimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isMerkleRootSet(overrides?: CallOverrides): Promise<BigNumber>;

    mintedToken(overrides?: CallOverrides): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pauseAirdrop(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMerkleRoot(
      _merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpauseAirdrop(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateEndTimestamp(
      newEndTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawTokenRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR_EXCHANGE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAIN_STRATEGY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAXIMUM_AMOUNT_TO_CLAIM(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TRANSFER_MANAGER_ERC1155(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TRANSFER_MANAGER_ERC721(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canClaim(
      user: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      makerAsk: OrderTypes.MakerOrderStruct,
      isERC721: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasClaimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isMerkleRootSet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pauseAirdrop(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMerkleRoot(
      _merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpauseAirdrop(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateEndTimestamp(
      newEndTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTokenRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
