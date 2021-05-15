// SPDX-License-Identifier: MIT
pragma solidity >=0.5.3 <0.8.5;

contract Basic {
    string private message = "hello world";

    function getMessage() public view returns(string memory){
        return message;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}