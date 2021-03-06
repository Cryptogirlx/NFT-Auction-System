/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SaferERC20, SaferERC20Interface } from "../SaferERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620011ca380380620011ca8339810160408190526200003491620001e7565b8151829082906200004d90600390602085019062000074565b5080516200006390600490602084019062000074565b50506001600555506200028e915050565b828054620000829062000251565b90600052602060002090601f016020900481019282620000a65760008555620000f1565b82601f10620000c157805160ff1916838001178555620000f1565b82800160010185558215620000f1579182015b82811115620000f1578251825591602001919060010190620000d4565b50620000ff92915062000103565b5090565b5b80821115620000ff576000815560010162000104565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014257600080fd5b81516001600160401b03808211156200015f576200015f6200011a565b604051601f8301601f19908116603f011681019082821181831017156200018a576200018a6200011a565b81604052838152602092508683858801011115620001a757600080fd5b600091505b83821015620001cb5785820183015181830184015290820190620001ac565b83821115620001dd5760008385830101525b9695505050505050565b60008060408385031215620001fb57600080fd5b82516001600160401b03808211156200021357600080fd5b620002218683870162000130565b935060208501519150808211156200023857600080fd5b50620002478582860162000130565b9150509250929050565b600181811c908216806200026657607f821691505b602082108114156200028857634e487b7160e01b600052602260045260246000fd5b50919050565b610f2c806200029e6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806342842e0e11610097578063a9059cbb11610066578063a9059cbb14610206578063b88d4fde14610219578063dd62ed3e1461022c578063eb7955491461026557600080fd5b806342842e0e146101af57806370a08231146101c257806395d89b41146101eb578063a457c2d7146101f357600080fd5b806323b872dd116100d357806323b872dd14610167578063313ce5671461017a5780633950935114610189578063423f6cef1461019c57600080fd5b806301ffc9a71461010557806306fdde031461012d578063095ea7b31461014257806318160ddd14610155575b600080fd5b610118610113366004610b8d565b610278565b60405190151581526020015b60405180910390f35b6101356102e1565b6040516101249190610bf7565b610118610150366004610c26565b610373565b6002545b604051908152602001610124565b610118610175366004610c50565b61038b565b60405160128152602001610124565b610118610197366004610c26565b6103af565b6101186101aa366004610c26565b6103ee565b6101186101bd366004610c50565b610411565b6101596101d0366004610c8c565b6001600160a01b031660009081526020819052604090205490565b610135610436565b610118610201366004610c26565b610445565b610118610214366004610c26565b6104f4565b610118610227366004610d4a565b610502565b61015961023a366004610db2565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610118610273366004610de5565b610573565b60006001600160e01b031982167f01ffc9a70000000000000000000000000000000000000000000000000000000014806102db57506001600160e01b031982167f52b091d100000000000000000000000000000000000000000000000000000000145b92915050565b6060600380546102f090610e3c565b80601f016020809104026020016040519081016040528092919081815260200182805461031c90610e3c565b80156103695780601f1061033e57610100808354040283529160200191610369565b820191906000526020600020905b81548152906001019060200180831161034c57829003601f168201915b5050505050905090565b6000336103818185856105d8565b5060019392505050565b600033610399858285610730565b6103a48585856107c2565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061038190829086906103e9908790610e77565b6105d8565b600061040a838360405180602001604052806000815250610573565b9392505050565b600061042e84848460405180602001604052806000815250610502565b949350505050565b6060600480546102f090610e3c565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104e75760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103a482868684036105d8565b6000336103818185856107c2565b6000610510858585856109d9565b61055c5760405162461bcd60e51b815260206004820152601860248201527f45524332303a206e6f6e2045524332305265636569766572000000000000000060448201526064016104de565b61056785858561038b565b50600195945050505050565b6000610581338585856109d9565b6105cd5760405162461bcd60e51b815260206004820152601860248201527f45524332303a206e6f6e2045524332305265636569766572000000000000000060448201526064016104de565b6103813385856107c2565b6001600160a01b0383166106535760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016104de565b6001600160a01b0382166106cf5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016104de565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146107bc57818110156107af5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104de565b6107bc84848484036105d8565b50505050565b6001600160a01b03831661083e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016104de565b6001600160a01b0382166108ba5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016104de565b6001600160a01b038316600090815260208190526040902054818110156109495760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016104de565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610980908490610e77565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109cc91815260200190565b60405180910390a36107bc565b600060026005541415610a2e5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104de565b60026005556001600160a01b0384163b15610b6357604051634fc3585960e01b81526001600160a01b03851690634fc3585990610a75903390899088908890600401610e9d565b602060405180830381600087803b158015610a8f57600080fd5b505af1925050508015610abf575060408051601f3d908101601f19168201909252610abc91810190610ed9565b60015b610b49573d808015610aed576040519150601f19603f3d011682016040523d82523d6000602084013e610af2565b606091505b508051610b415760405162461bcd60e51b815260206004820152601860248201527f45524332303a206e6f6e2045524332305265636569766572000000000000000060448201526064016104de565b805181602001fd5b6001600160e01b031916634fc3585960e01b149050610b67565b5060015b6001600555949350505050565b6001600160e01b031981168114610b8a57600080fd5b50565b600060208284031215610b9f57600080fd5b813561040a81610b74565b6000815180845260005b81811015610bd057602081850181015186830182015201610bb4565b81811115610be2576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061040a6020830184610baa565b80356001600160a01b0381168114610c2157600080fd5b919050565b60008060408385031215610c3957600080fd5b610c4283610c0a565b946020939093013593505050565b600080600060608486031215610c6557600080fd5b610c6e84610c0a565b9250610c7c60208501610c0a565b9150604084013590509250925092565b600060208284031215610c9e57600080fd5b61040a82610c0a565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610cce57600080fd5b813567ffffffffffffffff80821115610ce957610ce9610ca7565b604051601f8301601f19908116603f01168101908282118183101715610d1157610d11610ca7565b81604052838152866020858801011115610d2a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060808587031215610d6057600080fd5b610d6985610c0a565b9350610d7760208601610c0a565b925060408501359150606085013567ffffffffffffffff811115610d9a57600080fd5b610da687828801610cbd565b91505092959194509250565b60008060408385031215610dc557600080fd5b610dce83610c0a565b9150610ddc60208401610c0a565b90509250929050565b600080600060608486031215610dfa57600080fd5b610e0384610c0a565b925060208401359150604084013567ffffffffffffffff811115610e2657600080fd5b610e3286828701610cbd565b9150509250925092565b600181811c90821680610e5057607f821691505b60208210811415610e7157634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610e9857634e487b7160e01b600052601160045260246000fd5b500190565b60006001600160a01b03808716835280861660208401525083604083015260806060830152610ecf6080830184610baa565b9695505050505050565b600060208284031215610eeb57600080fd5b815161040a81610b7456fea264697066735822122067e8e5a1d865f331a26e5b70a59101aad8b3cb50baaf08b11726b98a781c440964736f6c63430008090033";

type SaferERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SaferERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SaferERC20__factory extends ContractFactory {
  constructor(...args: SaferERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SaferERC20";
  }

  deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SaferERC20> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<SaferERC20>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): SaferERC20 {
    return super.attach(address) as SaferERC20;
  }
  connect(signer: Signer): SaferERC20__factory {
    return super.connect(signer) as SaferERC20__factory;
  }
  static readonly contractName: "SaferERC20";
  public readonly contractName: "SaferERC20";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SaferERC20Interface {
    return new utils.Interface(_abi) as SaferERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SaferERC20 {
    return new Contract(address, _abi, signerOrProvider) as SaferERC20;
  }
}
