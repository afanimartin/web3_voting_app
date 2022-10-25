// specify compiler version
pragma solidity ^0.5.16;

contract Voting {
    bytes32[] candidateList;

    constructor(bytes32[] memory candidates) public {
        candidateList = candidates;
    }

    // declare a map of candidate as key and number of votes as value
    mapping(bytes32 => uint) public votes;

    // return total votes for a given candidate
    function totalCandidateVotes(bytes32 candidate) public view returns (uint) {
        require(validCandidate(candidate));

        return votes[candidate];
    }

    mapping(address => bool) private voted;

    function voteForCandidate(bytes32 candidate) public {
        require(validCandidate(candidate));
        require(voted[msg.sender] == false, "user already voted");

        votes[candidate] += 1;

        voted[msg.sender] = true;
    }

    function validCandidate(bytes32 candidate) public view returns (bool) {
        for (uint i = 0; i < candidateList.length; i++) {
            if (candidateList[i] == candidate) {
                return true;
            }
        }
        return false;
    }

    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
}
