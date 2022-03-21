import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
  // get是从磁盘中读取的，所以是 async 的
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy();
  await hello.deployed();

  return hello;
}

// @ts-ignore
async function sayHello(hello) {
    const res = await hello.hello();
    console.log('say hello: ', res);
}

deploy().then(sayHello);