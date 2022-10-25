const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

const abi = JSON.parse(
  '[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalCandidateVotes","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votes","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'
);

contract = new web3.eth.Contract(abi);
// get this address after deploying the contract
contract.options.address = "0x5447FE0B27f2Afb603eF3Aa09331C7C04143B32c";

candidates = {
  Sahil: "candidate-1",
  Agnes: "candidate-2",
  Allan: "candidate-3",
};

function voteForCandidate() {
  candidateName = $("#candidate").val();

  contract.methods
    .voteForCandidate(web3.utils.asciiToHex(candidateName))
    .send({
      from: "0x301223d01889174617B2B46392e0aFdCB5797E67",
      gas: 1500000,
    })
    .then((f) => {
      let div_id = candidates[candidateName];
      contract.methods
        .totalCandidateVotes(web3.utils.asciiToHex(candidateName))
        .call()
        .then((f) => {
          $("#" + div_id).html(f);
        });
    });
}

$(document).ready(function () {
  candidateNames = Object.keys(candidates);

  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];

    contract.methods
      .totalCandidateVotes(web3.utils.asciiToHex(name))
      .call()
      .then((f) => {
        $("#" + candidates[name]).html(f);
      });
  }
});
