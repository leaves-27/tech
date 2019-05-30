# git submodule命令
用于将一个git仓库作为另一个git仓库的子目录。可以使另一个仓库克隆到自己的项目中，同时还保持提交的独立。

## 给主项目创建子模块及其拉取带有子模块的主项目
### 给主项目添加子模块
git submodule add 子模块路径

### 拉取主模块及其子模块
git clone xx
git submodule init: 用来初始化本地配置文件(哪些本地配置文件). 
git submodule update: 从该项目中抓取所有数据并检出父项目中列出的合适的提交。

## 工作场景:
### 在主项目上工作，仅拉取子模块的更新修改
git submodule update --remote --merge 
git submodule update --remote --rebase

### 在子模块上工作
git push --recurse-submodules=on-demand: 先提交所有子模块再提交主项目模块
git submodule foreach 'git checkout -b featureA': 对每个子模块执行引号中的git命令