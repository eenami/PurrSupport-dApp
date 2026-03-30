#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, Symbol, Env, Map};

#[contract]
pub struct PurrSupport;

#[contractimpl]
impl PurrSupport {

    // Donate to a specific cat
    pub fn donate(env: Env, cat_id: u32, amount: i128) {
        let key = Symbol::new(&env, "donations");

        let mut donations: Map<u32, i128> =
            env.storage().instance().get(&key).unwrap_or(Map::new(&env));

        let current = donations.get(cat_id).unwrap_or(0);
        let new_total = current + amount;

        donations.set(cat_id, new_total);
        env.storage().instance().set(&key, &donations);
    }

    // Get total donations of a cat
    pub fn get_total(env: Env, cat_id: u32) -> i128 {
        let key = Symbol::new(&env, "donations");

        let donations: Map<u32, i128> =
            env.storage().instance().get(&key).unwrap_or(Map::new(&env));

        donations.get(cat_id).unwrap_or(0)
    }
}

#[cfg(test)]
mod test;