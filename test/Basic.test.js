const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const json = require("./../build/contracts/Basic.json");

let contract;
let message;
let accounts;
let account;
const interface = json["abi"];
const bytecode = json["bytecode"];

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  account = accounts[0];
  contract = await new web3.eth.Contract(interface)
    .deploy({ data: bytecode })
    .send({ from: account, gas: "1000000" });

  message = await contract.methods.getMessage().call();
});

describe("Basic", () => {
  it("return hello world.", async () => {
    try {
      const expectedMessage = await contract.methods.getMessage().call();
      assert.strictEqual(
        message,
        expectedMessage,
        "The message was result from setMessage method in smart contract."
      );
    } catch (err) {
      assert(err);
    }
  });
});
