use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn sums(value: i32) -> i32 {
    let mut a: i32 = 0;
    for i in 1..value+1 {
        a += i;
    }
    a
}

#[wasm_bindgen]
#[derive(Default)]
pub struct HindleyMilner {}

#[wasm_bindgen]
impl HindleyMilner {
    
}