import { ethers } from "ethers";

function getEth() {
  const eth = window.ethereum;

  if (!eth) {
    throw new Error("没号？");
  }

  return eth;
}

async function hasAccounts(): Promise<boolean> {
  const eth = getEth();
  const accounts = (await eth.request({ method: "eth_accounts" })) as string[];

  return !!accounts.length;
}

async function requestAccounts(): Promise<boolean> {
  const eth = getEth();
  const accounts = (await eth.request({
    method: "eth_requestAccounts",
  })) as string[];

  return accounts.length > 0;
}

async function run() {
  if (!(await hasAccounts()) && !(await requestAccounts())) {
    throw new Error("没钱？");
  }

  // 连接你的账号
  // 提供 addressOrName, contractInterface, signerOrProvider
  const hello = await new ethers.Contract(
    "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    [`function hello() public pure returns (string memory)`],
    new ethers.providers.Web3Provider(getEth())
  );

  document.body.innerHTML = await hello.hello();
}

run();
