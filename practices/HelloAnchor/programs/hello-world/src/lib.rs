// Import anchor
use anchor_lang::prelude::*;

declare_id!("gWdmgQnb72GEHqneswvhJDSZJxiP2ddiw9RrkW79csA");

#[derive(Accounts)]
pub struct Hello {}

#[program]
mod hello_world {
    use super::*;

    pub fn hello(ctx: Context<Hello>) -> Result<()> {
        msg!("Hello, World!");
        Ok(())
    }
}
