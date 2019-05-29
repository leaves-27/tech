# 文档
官方地址：https://github.com/ConsenSys/truffle
帮助文档地址：http://truffle.readthedocs.io/en/latest/

# truffle
truffle是以太坊的一个世界级的开发环境、测试框架和资产管道。目的是使每一个人更轻而易举的成为以太坊的开发者。

拥有truffle，你将拥有：

1.内置的智能合约编辑、链接、开发和二进制管理
2.为迅速开发的自动合约测试
3.脚本化、可扩展开发和部署框架
4.为部署到一个公共或私有网络节点的网络管理
5.使用npm和etchPM的包管理
6.交互式控制台
7.一体化的配置化构建管道
8.在Truffle环境内执行脚本的额外脚本运行器

# truffle框架教程目录

安装:
创建工程:
选择客户端:
编译合同:
部署:
测试:
和你的合同交互:
通过包管理器管理:
调试你的合同:
console的用法:
写额外的脚本:
联系开发者:

# 各个部分的联系

开发环境 : 用来运行开发的合约
开发的合约 : 
客户端: 用来将开发的合约进行编译、移植使其在区块链上运行.

# 组成部分

账户(accounts)：
  账户组成：地址和状态。
    状态：
      nonce：交易序号或合约序号
      balance：此地址拥有Wei的数量。1Ether=10^18Wei
      storageRoot：Merkle Patricia树的根节点Hash值，默认是空值。
      codeHash：此账户EVM代码的hash值。代码的Hash值或空字符串的Hash。
  账户类别：合约账户和外部账户。
状态(state)：
损耗和费用(gas and fees)

交易(transactions)
区块(blocks)
交易执行(transaction execution)
挖矿(mining)
工作量证明(proof of work)

详情参见:
  http://book.8btc.com/books/6/ethereum/_book/




