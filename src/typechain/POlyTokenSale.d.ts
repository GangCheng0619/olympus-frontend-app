/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface POlyTokenSaleInterface extends ethers.utils.Interface {
  functions: {
    "approveBuyer(address)": FunctionFragment;
    "approveBuyers(address[])": FunctionFragment;
    "approvedBuyers(address)": FunctionFragment;
    "buyPOly(uint256)": FunctionFragment;
    "dai()": FunctionFragment;
    "initialize(address,address,uint256,address)": FunctionFragment;
    "initialized()": FunctionFragment;
    "owner()": FunctionFragment;
    "pOly()": FunctionFragment;
    "pOlyPrice()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPOlyPrice(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawTokens(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approveBuyer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "approveBuyers",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "approvedBuyers",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "buyPOly",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "dai", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pOly", values?: undefined): string;
  encodeFunctionData(functionFragment: "pOlyPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPOlyPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTokens",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveBuyer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveBuyers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approvedBuyers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyPOly", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dai", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pOly", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pOlyPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPOlyPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokens",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "SaleEnded(address,uint256)": EventFragment;
    "SaleStarted(address,uint256)": EventFragment;
    "SellerApproval(address,address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SellerApproval"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type SaleEndedEvent = TypedEvent<
  [string, BigNumber] & { activator: string; timestamp: BigNumber }
>;

export type SaleStartedEvent = TypedEvent<
  [string, BigNumber] & { activator: string; timestamp: BigNumber }
>;

export type SellerApprovalEvent = TypedEvent<
  [string, string, string] & {
    approver: string;
    seller: string;
    message: string;
  }
>;

export class POlyTokenSale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: POlyTokenSaleInterface;

  functions: {
    approveBuyer(
      newBuyer_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveBuyers(
      newBuyers_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approvedBuyers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    buyPOly(
      amountPaid_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dai(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      pOly_: string,
      dai_: string,
      pOlyPrice_: BigNumberish,
      saleProceedsAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pOly(overrides?: CallOverrides): Promise<[string]>;

    pOlyPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPOlyPrice(
      newPOlyPrice_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawTokens(
      tokenToWithdraw_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approveBuyer(
    newBuyer_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveBuyers(
    newBuyers_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approvedBuyers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  buyPOly(
    amountPaid_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dai(overrides?: CallOverrides): Promise<string>;

  initialize(
    pOly_: string,
    dai_: string,
    pOlyPrice_: BigNumberish,
    saleProceedsAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  pOly(overrides?: CallOverrides): Promise<string>;

  pOlyPrice(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPOlyPrice(
    newPOlyPrice_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawTokens(
    tokenToWithdraw_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveBuyer(
      newBuyer_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    approveBuyers(
      newBuyers_: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approvedBuyers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    buyPOly(
      amountPaid_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    dai(overrides?: CallOverrides): Promise<string>;

    initialize(
      pOly_: string,
      dai_: string,
      pOlyPrice_: BigNumberish,
      saleProceedsAddress_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    pOly(overrides?: CallOverrides): Promise<string>;

    pOlyPrice(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setPOlyPrice(
      newPOlyPrice_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTokens(
      tokenToWithdraw_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "SaleEnded(address,uint256)"(
      activator?: string | null,
      timestamp?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { activator: string; timestamp: BigNumber }
    >;

    SaleEnded(
      activator?: string | null,
      timestamp?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { activator: string; timestamp: BigNumber }
    >;

    "SaleStarted(address,uint256)"(
      activator?: string | null,
      timestamp?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { activator: string; timestamp: BigNumber }
    >;

    SaleStarted(
      activator?: string | null,
      timestamp?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { activator: string; timestamp: BigNumber }
    >;

    "SellerApproval(address,address,string)"(
      approver?: string | null,
      seller?: string | null,
      message?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { approver: string; seller: string; message: string }
    >;

    SellerApproval(
      approver?: string | null,
      seller?: string | null,
      message?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { approver: string; seller: string; message: string }
    >;
  };

  estimateGas: {
    approveBuyer(
      newBuyer_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveBuyers(
      newBuyers_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approvedBuyers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    buyPOly(
      amountPaid_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dai(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      pOly_: string,
      dai_: string,
      pOlyPrice_: BigNumberish,
      saleProceedsAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pOly(overrides?: CallOverrides): Promise<BigNumber>;

    pOlyPrice(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPOlyPrice(
      newPOlyPrice_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawTokens(
      tokenToWithdraw_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveBuyer(
      newBuyer_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveBuyers(
      newBuyers_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approvedBuyers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyPOly(
      amountPaid_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dai(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      pOly_: string,
      dai_: string,
      pOlyPrice_: BigNumberish,
      saleProceedsAddress_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pOly(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pOlyPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPOlyPrice(
      newPOlyPrice_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTokens(
      tokenToWithdraw_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
