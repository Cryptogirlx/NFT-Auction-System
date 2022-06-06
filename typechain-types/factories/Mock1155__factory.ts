/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Mock1155, Mock1155Interface } from "../Mock1155";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
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
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
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
        name: "id",
        type: "uint256",
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
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805160208101909152600081526200002c8162000033565b506200012f565b8051620000489060029060208401906200004c565b5050565b8280546200005a90620000f2565b90600052602060002090601f0160209004810192826200007e5760008555620000c9565b82601f106200009957805160ff1916838001178555620000c9565b82800160010185558215620000c9579182015b82811115620000c9578251825591602001919060010190620000ac565b50620000d7929150620000db565b5090565b5b80821115620000d75760008155600101620000dc565b600181811c908216806200010757607f821691505b602082108114156200012957634e487b7160e01b600052602260045260246000fd5b50919050565b6116e9806200013f6000396000f3fe608060405234801561001057600080fd5b50600436106100a25760003560e01c80632eb2c2d611610076578063a22cb4651161005b578063a22cb46514610158578063e985e9c51461016b578063f242432a146101a757600080fd5b80632eb2c2d6146101255780634e1273f41461013857600080fd5b8062fdd58e146100a757806301ffc9a7146100cd5780630e89341c146100f0578063156e29f614610110575b600080fd5b6100ba6100b5366004610f91565b6101ba565b6040519081526020015b60405180910390f35b6100e06100db366004610fd4565b610263565b60405190151581526020016100c4565b6101036100fe366004610ff8565b610300565b6040516100c4919061105e565b61012361011e366004611071565b610394565b005b6101236101333660046111f0565b6103b4565b61014b61014636600461129a565b610456565b6040516100c491906113a0565b6101236101663660046113b3565b610594565b6100e06101793660046113ef565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6101236101b5366004611422565b6105a3565b60006001600160a01b03831661023d5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201527f65726f206164647265737300000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b031982167fd9b67a260000000000000000000000000000000000000000000000000000000014806102c657506001600160e01b031982167f0e89341c00000000000000000000000000000000000000000000000000000000145b806102fa57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b60606002805461030f90611487565b80601f016020809104026020016040519081016040528092919081815260200182805461033b90611487565b80156103885780601f1061035d57610100808354040283529160200191610388565b820191906000526020600020905b81548152906001019060200180831161036b57829003601f168201915b50505050509050919050565b6103af8383836040518060200160405280600081525061063e565b505050565b6001600160a01b0385163314806103d057506103d08533610179565b6104425760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f742060448201527f6f776e6572206e6f7220617070726f76656400000000000000000000000000006064820152608401610234565b61044f8585858585610764565b5050505050565b606081518351146104cf5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d6174636800000000000000000000000000000000000000000000006064820152608401610234565b6000835167ffffffffffffffff8111156104eb576104eb6110a4565b604051908082528060200260200182016040528015610514578160200160208202803683370190505b50905060005b845181101561058c5761055f858281518110610538576105386114c2565b6020026020010151858381518110610552576105526114c2565b60200260200101516101ba565b828281518110610571576105716114c2565b6020908102919091010152610585816114ee565b905061051a565b509392505050565b61059f3383836109d7565b5050565b6001600160a01b0385163314806105bf57506105bf8533610179565b6106315760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f76656400000000000000000000000000000000000000000000006064820152608401610234565b61044f8585858585610acc565b6001600160a01b0384166106ba5760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610234565b336106d4816000876106cb88610c6a565b61044f88610c6a565b6000848152602081815260408083206001600160a01b038916845290915281208054859290610704908490611509565b909155505060408051858152602081018590526001600160a01b0380881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461044f81600087878787610cb5565b81518351146107db5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d617463680000000000000000000000000000000000000000000000006064820152608401610234565b6001600160a01b03841661083f5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b6064820152608401610234565b3360005b8451811015610969576000858281518110610860576108606114c2565b60200260200101519050600085838151811061087e5761087e6114c2565b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156109115760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b6064820152608401610234565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b1682528120805484929061094e908490611509565b9250508190555050505080610962906114ee565b9050610843565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516109b9929190611521565b60405180910390a46109cf818787878787610e6a565b505050505050565b816001600160a01b0316836001600160a01b03161415610a5f5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c6600000000000000000000000000000000000000000000006064820152608401610234565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b038416610b305760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b6064820152608401610234565b33610b408187876106cb88610c6a565b6000848152602081815260408083206001600160a01b038a16845290915290205483811015610bc45760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b6064820152608401610234565b6000858152602081815260408083206001600160a01b038b8116855292528083208785039055908816825281208054869290610c01908490611509565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610c61828888888888610cb5565b50505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610ca457610ca46114c2565b602090810291909101015292915050565b6001600160a01b0384163b156109cf5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610cf9908990899088908890889060040161154f565b602060405180830381600087803b158015610d1357600080fd5b505af1925050508015610d43575060408051601f3d908101601f19168201909252610d4091810190611592565b60015b610df957610d4f6115af565b806308c379a01415610d895750610d646115cb565b80610d6f5750610d8b565b8060405162461bcd60e51b8152600401610234919061105e565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e7465720000000000000000000000006064820152608401610234565b6001600160e01b0319811663f23a6e6160e01b14610c615760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b6064820152608401610234565b6001600160a01b0384163b156109cf5760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610eae9089908990889088908890600401611655565b602060405180830381600087803b158015610ec857600080fd5b505af1925050508015610ef8575060408051601f3d908101601f19168201909252610ef591810190611592565b60015b610f0457610d4f6115af565b6001600160e01b0319811663bc197c8160e01b14610c615760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b6064820152608401610234565b80356001600160a01b0381168114610f8c57600080fd5b919050565b60008060408385031215610fa457600080fd5b610fad83610f75565b946020939093013593505050565b6001600160e01b031981168114610fd157600080fd5b50565b600060208284031215610fe657600080fd5b8135610ff181610fbb565b9392505050565b60006020828403121561100a57600080fd5b5035919050565b6000815180845260005b818110156110375760208185018101518683018201520161101b565b81811115611049576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610ff16020830184611011565b60008060006060848603121561108657600080fd5b61108f84610f75565b95602085013595506040909401359392505050565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff811182821017156110e0576110e06110a4565b6040525050565b600067ffffffffffffffff821115611101576111016110a4565b5060051b60200190565b600082601f83011261111c57600080fd5b81356020611129826110e7565b60405161113682826110ba565b83815260059390931b850182019282810191508684111561115657600080fd5b8286015b84811015611171578035835291830191830161115a565b509695505050505050565b600082601f83011261118d57600080fd5b813567ffffffffffffffff8111156111a7576111a76110a4565b6040516111be601f8301601f1916602001826110ba565b8181528460208386010111156111d357600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561120857600080fd5b61121186610f75565b945061121f60208701610f75565b9350604086013567ffffffffffffffff8082111561123c57600080fd5b61124889838a0161110b565b9450606088013591508082111561125e57600080fd5b61126a89838a0161110b565b9350608088013591508082111561128057600080fd5b5061128d8882890161117c565b9150509295509295909350565b600080604083850312156112ad57600080fd5b823567ffffffffffffffff808211156112c557600080fd5b818501915085601f8301126112d957600080fd5b813560206112e6826110e7565b6040516112f382826110ba565b83815260059390931b850182019282810191508984111561131357600080fd5b948201945b838610156113385761132986610f75565b82529482019490820190611318565b9650508601359250508082111561134e57600080fd5b5061135b8582860161110b565b9150509250929050565b600081518084526020808501945080840160005b8381101561139557815187529582019590820190600101611379565b509495945050505050565b602081526000610ff16020830184611365565b600080604083850312156113c657600080fd5b6113cf83610f75565b9150602083013580151581146113e457600080fd5b809150509250929050565b6000806040838503121561140257600080fd5b61140b83610f75565b915061141960208401610f75565b90509250929050565b600080600080600060a0868803121561143a57600080fd5b61144386610f75565b945061145160208701610f75565b93506040860135925060608601359150608086013567ffffffffffffffff81111561147b57600080fd5b61128d8882890161117c565b600181811c9082168061149b57607f821691505b602082108114156114bc57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611502576115026114d8565b5060010190565b6000821982111561151c5761151c6114d8565b500190565b6040815260006115346040830185611365565b82810360208401526115468185611365565b95945050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a0608083015261158760a0830184611011565b979650505050505050565b6000602082840312156115a457600080fd5b8151610ff181610fbb565b600060033d11156115c85760046000803e5060005160e01c5b90565b600060443d10156115d95790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561160957505050505090565b82850191508151818111156116215750505050505090565b843d870101602082850101111561163b5750505050505090565b61164a602082860101876110ba565b509095945050505050565b60006001600160a01b03808816835280871660208401525060a0604083015261168160a0830186611365565b82810360608401526116938186611365565b905082810360808401526116a78185611011565b9897505050505050505056fea2646970667358221220b098b2c898bf6bdce3c2c874f4567d4177fc04d92d44c55fb2c4b52d68eb1e7664736f6c63430008090033";

type Mock1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Mock1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Mock1155__factory extends ContractFactory {
  constructor(...args: Mock1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Mock1155";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Mock1155> {
    return super.deploy(overrides || {}) as Promise<Mock1155>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Mock1155 {
    return super.attach(address) as Mock1155;
  }
  connect(signer: Signer): Mock1155__factory {
    return super.connect(signer) as Mock1155__factory;
  }
  static readonly contractName: "Mock1155";
  public readonly contractName: "Mock1155";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Mock1155Interface {
    return new utils.Interface(_abi) as Mock1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Mock1155 {
    return new Contract(address, _abi, signerOrProvider) as Mock1155;
  }
}