运行 `yarn start` 选择 `Create an empty hardhat.config.js`

创建contracts文件夹
新建一个 .sol 结尾的文件
写入代码

然后执行 `yarn compile`

编译成功了

添加Test相关模块
`yarn add -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
`

添加TS支持

`yarn add -D ts-node typescript`

添加测试模块的ts 声明文件
`yarn add -D chai @types/node @types/mocha @types/chai`



添加test文件夹并且添加一个test的TS文件，写入测试代码
最后输入
`npx hardhat test`

echo
```bash
  hello world
    ✔ shoule by say hi (609ms)


  1 passing (612ms)
```


编写scripts底下的文件然后运行
`npx hardhat run scripts/deploy-hello.ts --network localhost`

但是本地没有启动一个服务，所以运行
`npx hardhat node`

再执行 run scripts 命令
echo:
```shell
say hello:  Hello World
```

并且此时在 node 端 有了许多信息，如下：
```shell
eb3_clientVersion (2)
eth_chainId
eth_accounts
eth_blockNumber
eth_chainId (2)
eth_estimateGas
eth_getBlockByNumber
eth_feeHistory
eth_sendTransaction
  Contract deployment: HelloWorld
  Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
  Transaction:         0x6e9a78dc5d4821a76620ac5ad5be49a6e8c5c4b844a4c8fef3c1504b0cff7c9c
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            135055 of 135055
  Block #1:            0x298eae047263025267c4f152f010ce3bd70514adb97480b849a67fb8353a2b7c

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_chainId
eth_call
  Contract call:       HelloWorld#hello
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x5fbdb2315678afecb367f032d93f642f64180aa3
```


// TODO:
发现只有先在本地run了hardhat run scripts之后才可以连通web端
