const Voting = artifacts.require("Voting");

// a function to convert ASCII characters to HEXDECIMAL/BYTES32
function asciiToHex(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    const result = Number(str.charCodeAt(i)).toString(16);
    arr.push(result);
  }

  return arr.join("");
}

module.exports = function (deployer) {
  // command Voting to deploy the contract
  const sahil = asciiToHex("Sahil");
  const agnes = asciiToHex("Agnes");
  const allan = asciiToHex("Allan");

  deployer.deploy(Voting, [
    "0x" + sahil + "000000000000000000000000000000000000000000000000000000",
    "0x" + agnes + "000000000000000000000000000000000000000000000000000000",
    "0x" + allan + "000000000000000000000000000000000000000000000000000000",
  ]);
};
