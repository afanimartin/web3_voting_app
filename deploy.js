const Web3 = require("web3");

const solc = require("solc");

const fs = require("fs");

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const file = fs.readFileSync("Voting.sol").toString();

// Input structure for solidity compiler
var input = {
  language: "Solidity",
  sources: {
    "Voting.sol": {
      content: file,
    },
  },

  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log("Result : ", output);

const ABI = output.contracts["Voting.sol"]["Voting"].abi;
const bytecode = output.contracts["Voting.sol"]["Voting"].evm.bytecode.object;

// deploy contract
const contract = new web3.eth.Contract(ABI);

web3.eth.getAccounts().then((accounts) => {
  const mainAcount = accounts[0];

  // address that will deploy the contract
  // console.log("Main account: ", mainAcount);

  listOfCandidates = ["Sahil", "Agnes", "Allan"];

  contract
    .deploy({
      // compiled code to deploy to the blockchain
      data: bytecode,
      // convert every name[string] to bytes32
      arguments: [listOfCandidates.map((name) => web3.utils.asciiToHex(name))],
    })
    .send({
      from: mainAcount,
      gas: 1500000,
    })
    .then((newContractInstance) => {
      contract.options.address = newContractInstance.options.address;
      console.log(newContractInstance.options.address);
    });
});
