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