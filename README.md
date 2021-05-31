# Basic Smart Contracts With Solidity and Web3.js

Prerequisites

- Truffle
- Ganache-cli
- Live-server
- Metamask
- Web3.js (Web Client Integration)
- Node.js >= 12.x

Install required node.js dependencies.

```bash
npm install
```

Init the project with [truffle](https://www.trufflesuite.com/boxes)

```bash
truffle init
```

Compile the smart contract with truffle to get the JSON ABI

```bash
truffle compile
```

Run ganache cli in another CMD to get <=10 accounts with 100ETH each account.

```bash
ganache-cli -p 8545
```

Migrate with development network option from truffle-config.js to get the contract address from `2_deploy_contract.js` contract deployment.

```
truffle migrate -network development
```

This repository is my research about blockchain and smart contracts #1.
