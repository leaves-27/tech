# 语义化版本号:
- 版本号格式:
主版本号(major): 出现不兼容的API修改 
次版本号(minor): 出现向下兼容的功能性新增(新增Feature)
修订号(patch): 出现向下兼容的问题修正(Bug fix)

- 先行版本: 在大的版本正式发布前的尝试版本。
内测版(alpha)：内部版本
灰度版本(beta)：公测版本
RC版本：正式版本的候选版本

# package.json中包的版本介绍:
~: 会自动更新版本到修订版本的最新版本。
^: 会自动更新版本到次版本的最新版本。
*: 会自动更新版本到主版本的最新版本。

# 版本号更新命令
npm version patch
npm version minor
npm version major

注：
https://segmentfault.com/a/1190000014405355
https://semver.org/lang/zh-CN/
