import * as anchor from "@coral-xyz/anchor";
import type { HelloWorld } from "../target/types/hello_world";

// Configure the client to use the local cluster
anchor.setProvider(anchor.AnchorProvider.env());

const program = anchor.workspace.HelloWorld as anchor.Program<HelloWorld>;

// Client code...
console.log(program.programId.toString());
// hello()メソッドを呼び出す。
const txHash = await program.methods.hello().rpc();
console.log(txHash);
