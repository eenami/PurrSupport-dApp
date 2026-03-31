# 🐈 PurrSupport: Stray Cat Donation Tracker

## Overview

PurrSupport is a decentralized application (dApp) built on Stellar that enables transparent, on-chain donations to stray cats around the community.

Each cat is assigned a unique ID, and all donations are recorded on-chain using Soroban smart contracts, ensuring full transparency and trust.

---
## UI Screenshots (DEMO ONLY)
<img width="1890" height="925" alt="image" src="https://github.com/user-attachments/assets/ae93e8d8-3cd1-45eb-9629-8404e527f64d" />

<img width="1897" height="782" alt="image" src="https://github.com/user-attachments/assets/8fb50e88-6816-4cf7-81bb-e67bc401d000" />

<img width="1892" height="772" alt="image" src="https://github.com/user-attachments/assets/988953e9-5903-4046-aa2a-5d7462166cb2" />

---
## Problem

Stray and abandoned cats often lack consistent funding for food, shelter, and medical care.

Donors want to help, but:

* There is no transparency on where funds go
* No way to track donations per animal
* Trust in donation systems is limited

---

## Solution

PurrSupport allows users to:

* Donate XLM to a specific cat ID
* Track total donations per cat in real time
* Verify all transactions on-chain

This creates a transparent and trustless donation system for animal welfare.

---

## How It Works

1. User selects a Cat ID
2. User sends a donation (XLM amount)
3. Smart contract records the donation
4. Total donations per cat are updated on-chain
5. Anyone can query and verify the data

## Deployment

### Build contract:

```bash
cargo build --target wasm32-unknown-unknown --release
```

### Deploy:

```bash
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/purrsupport.wasm \
  --source my-key \
  --network testnet
```

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

* Real XLM payment integration
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

