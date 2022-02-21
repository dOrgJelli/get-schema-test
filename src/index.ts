import { Web3ApiClient } from "@web3api/client-js";

async function main(): Promise<void> {
  const client = new Web3ApiClient();
  const mainnetUri = "ens/yay2.open.web3api.eth";
  const rinkebyUri = "ens/rinkeby/yay2.open.web3api.eth";
  const ropstenUri = "ens/ropsten/yay2.open.web3api.eth";

  await client.getSchema(mainnetUri)
    .then((schema) => console.log("mainnet success"))
    .catch((err) => console.log("mainnet fail"));

  await client.getSchema(rinkebyUri)
    .then((schema) => console.log("rinkeby success"))
    .catch((err) => console.log("rinkeby fail"));

  await client.getSchema(ropstenUri)
    .then((schema) => console.log("ropsten success"))
    .catch((err) => console.log("ropsten fail"));
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
