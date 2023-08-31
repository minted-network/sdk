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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export type BasicOrderStruct = {
  signer: PromiseOrValue<string>;
  collection: PromiseOrValue<string>;
  collectionType: PromiseOrValue<BigNumberish>;
  tokenIds: PromiseOrValue<BigNumberish>[];
  amounts: PromiseOrValue<BigNumberish>[];
  price: PromiseOrValue<BigNumberish>;
  currency: PromiseOrValue<string>;
  startTime: PromiseOrValue<BigNumberish>;
  endTime: PromiseOrValue<BigNumberish>;
  signature: PromiseOrValue<BytesLike>;
};

export type BasicOrderStructOutput = [
  string,
  string,
  number,
  BigNumber[],
  BigNumber[],
  BigNumber,
  string,
  BigNumber,
  BigNumber,
  string
] & {
  signer: string;
  collection: string;
  collectionType: number;
  tokenIds: BigNumber[];
  amounts: BigNumber[];
  price: BigNumber;
  currency: string;
  startTime: BigNumber;
  endTime: BigNumber;
  signature: string;
};

export interface MintedProxyInterface extends utils.Interface {
  functions: {
    "aggregator()": FunctionFragment;
    "execute((address,address,uint8,uint256[],uint256[],uint256,address,uint256,uint256,bytes)[],bytes[],address,bool)": FunctionFragment;
    "marketplace()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "aggregator" | "execute" | "marketplace"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "aggregator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      BasicOrderStruct[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "marketplace",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "aggregator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marketplace",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MintedProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MintedProxyInterface;

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
    aggregator(overrides?: CallOverrides): Promise<[string]>;

    execute(
      orders: BasicOrderStruct[],
      ordersExtraData: PromiseOrValue<BytesLike>[],
      recipient: PromiseOrValue<string>,
      isAtomic: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    marketplace(overrides?: CallOverrides): Promise<[string]>;
  };

  aggregator(overrides?: CallOverrides): Promise<string>;

  execute(
    orders: BasicOrderStruct[],
    ordersExtraData: PromiseOrValue<BytesLike>[],
    recipient: PromiseOrValue<string>,
    isAtomic: PromiseOrValue<boolean>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  marketplace(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    aggregator(overrides?: CallOverrides): Promise<string>;

    execute(
      orders: BasicOrderStruct[],
      ordersExtraData: PromiseOrValue<BytesLike>[],
      recipient: PromiseOrValue<string>,
      isAtomic: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    marketplace(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    aggregator(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      orders: BasicOrderStruct[],
      ordersExtraData: PromiseOrValue<BytesLike>[],
      recipient: PromiseOrValue<string>,
      isAtomic: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    marketplace(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    aggregator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      orders: BasicOrderStruct[],
      ordersExtraData: PromiseOrValue<BytesLike>[],
      recipient: PromiseOrValue<string>,
      isAtomic: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    marketplace(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
