# 🐈 PurrSupport: Stray Cat Donation Tracker

PurrSupport is a decentralized application (dApp) built on Stellar that enables transparent, on-chain donations to stray cats in the community.

## Overview

Each cat is assigned a unique ID, and all donations are recorded on-chain using Soroban smart contracts, ensuring full transparency and trust.

---

## UI Screenshots (DEMO ONLY)
<img width="1890" height="925" alt="image" src="https://github.com/user-attachments/assets/ae93e8d8-3cd1-45eb-9629-8404e527f64d" />

<img width="1897" height="782" alt="image" src="https://github.com/user-attachments/assets/8fb50e88-6816-4cf7-81bb-e67bc401d000" />

<img width="1892" height="772" alt="image" src="https://github.com/user-attachments/assets/988953e9-5903-4046-aa2a-5d7462166cb2" />

---

## Problem & Solution

**Problem:**
Stray and abandoned cats often lack consistent funding for food, shelter, and medical care. Donors want to help, but:
* There is no transparency on where funds go
* There is no centralized/trackable way to see donations per animal
* Trust in traditional donation systems is limited

**Solution:**
PurrSupport allows users to:
* Donate XLM to a specific cat ID
* Track total donations per cat in real time
* Verify all transactions on-chain

This creates a transparent and trustless donation system for animal welfare.

---

## Timeline

* **Phase 1:** Soroban Smart Contract Development & Unit Testing (Completed)
* **Phase 2:** Testnet Deployment & MVP Validation (Completed)
* **Phase 3:** React + Vite Frontend Integration (In Progress)
* **Phase 4:** Wallet Integration, Polish, and Mainnet Launch (Future)

---

## Stellar Features Used

* **Soroban Smart Contracts:** To trustlessly record and update balances per cat ID.
* **Low Fees:** Leveraging Stellar's near-zero transaction fees to make micro-donations viable.
* **Speed:** Taking advantage of Stellar's fast ledger finality (transactions complete in seconds).

---

## Prerequisites

To explore and build the contract locally, you'll need:
* **Rust:** The latest stable version (`rustup install stable`).
* **Wasm Target:** Install the target architecture for compiling to WebAssembly (`rustup target add wasm32-unknown-unknown`).
* **Soroban CLI / Stellar CLI:** Ensure you have the latest Stellar/Soroban CLI installed to deploy and interact with contracts.

---

## How It Works

1. User selects a Cat ID
2. User sends a donation (XLM amount)
3. Smart contract records the donation
4. Total donations per cat are updated on-chain
5. Anyone can query and verify the data

---

## Developer Guide

### How to Build
To compile your smart contract to WebAssembly, run:
```bash
soroban contract build
```

### How to Test
To run the included unit tests:
```bash
cargo test
```

### How to Deploy
To deploy your built contract to the Stellar Testnet:
```bash
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/purrsupport.wasm \
  --source my-key \
  --network testnet
```

### Sample CLI Invocation
Here is an example calling the MVP function to manually donate to a specific cat using the CLI (using dummy arguments where `cat_id = 1` and `amount` is in XLM/stroops):
```bash
soroban contract invoke \
  --id CA4JQCGCD6LKYT4VB5HKLSPXCBGWHXI2WD4FHEVP7BJZWVIM6GJC35N2 \
  --source my-key \
  --network testnet \
  -- \
  donate \
  --cat_id 1 \
  --amount 100000000
```
*(Note: Replace `donate`, `cat_id`, and `amount` with the exact signature defined in your contract's trait.)*

---

## Live Contract

**Contract ID:**
`<CA4JQCGCD6LKYT4VB5HKLSPXCBGWHXI2WD4FHEVP7BJZWVIM6GJC35N2>`

**View on Explorer:**
https://stellar.expert/explorer/testnet/contract/CA4JQCGCD6LKYT4VB5HKLSPXCBGWHXI2WD4FHEVP7BJZWVIM6GJC35N2
<img width="1910" height="923" alt="image" src="https://github.com/user-attachments/assets/c2dfea65-613d-40ba-a738-f1fe099bfa92" />

---

## Tech Stack

* Rust (Soroban SDK)
* Stellar Testnet
* Soroban Smart Contracts
* React + Vite (Frontend)

---

## Target Users

* Animal lovers
* Local communities in the Philippines (Rizal, Cainta)

---

## Why Stellar?

* Near-zero transaction fees
* Fast transaction speed (seconds)
* Ideal for micro-donations

---

## Why This Project Matters

PurrSupport addresses a real-world problem in urban communities by:
* Enabling direct, transparent donations
* Building trust through blockchain
* Supporting vulnerable stray animals

---

## Future Improvements

* Real XLM payment integration via wallets (Freighter)
* Mobile-friendly frontend (React)
* Cat profiles with images and location
* AI prioritization of urgent cases
* NGO verification system

---

## Author 😺

Geena Nuesca

---

## License

MIT License
