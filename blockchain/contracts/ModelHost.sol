// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ModelHost {
    string public modelCID;

    constructor(string memory _modelCID) {
        modelCID = _modelCID;
    }

    function getModelCID() public view returns (string memory) {
        return modelCID;
    }
}
