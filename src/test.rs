#![cfg(test)]

use super::*;
use soroban_sdk::{Env};

#[test]
fn test_donate_single() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PurrSupport);
    let client = PurrSupportClient::new(&env, &contract_id);

    client.donate(&1, &100);
    let total = client.get_total(&1);

    assert_eq!(total, 100);
}

#[test]
fn test_multiple_donations_same_cat() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PurrSupport);
    let client = PurrSupportClient::new(&env, &contract_id);

    client.donate(&1, &100);
    client.donate(&1, &50);

    let total = client.get_total(&1);
    assert_eq!(total, 150);
}

#[test]
fn test_multiple_cats() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PurrSupport);
    let client = PurrSupportClient::new(&env, &contract_id);

    client.donate(&1, &100);
    client.donate(&2, &200);

    let total1 = client.get_total(&1);
    let total2 = client.get_total(&2);

    assert_eq!(total1, 100);
    assert_eq!(total2, 200);
}