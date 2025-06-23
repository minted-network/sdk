# minted-sdk

This SDK is a collection of tools used to interact with the Minted API and smart contracts.

# Documentation

## Install

```bash
npm install @minted-network/sdk ethers --save
```

```bash
pnpm i @minted-network/sdk ethers
```

## SDK Content

- [ABIs](doc/abis.md)
- [Contract Getters](doc/contracts.md)
- [Constants](doc/constants.md)
- [Signatures](doc/signatures.md)
- [Types](doc/types.md)
- [Utils](doc/utils.md)

## Developer guides

- [SDK Developer guide](doc/guide.md)

## Dev

### Env

```bash
# the rpc url of CRONOS Mainnet
RPC_NETWORK_25
# the rpc url of CRONOS TESTNET
RPC_NETWORK_338
```

### Build

```bash
pnpm build
```

### Update ABIs

Put `someAbi.json` into [ABIs folder](src/abis/), then

```bash
pnpm typechain
```

to generate types.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
