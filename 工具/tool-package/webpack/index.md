# webpack相关
## add-asset-html-webpack-plugin
    添加资源到html文件中的webpack插件
    
## webpack-dev-middleware: 
    基于内存对文件进行读取编译并观察文件的变化实时动态编译.
    1.通过fs基于内存，提高了读取编译速度
    2.通过观察文件的变化，动态进行编译 

## webpack-hot-middleware:
    动态的将内存中的编译结果同步到浏览器.以socket的形式给浏览器发送通知，浏览器在接到通知后刷新页面，获取服务器的最新编译结果.	
    
## copy-webpack-plugin
    拷贝文件的插件
## html-webpack-plugin
    生成html文件的插件
    
## extract-text-webpack-plugin
    将css文件抽离到单独文件的插件
    
## optimize-css-assets-webpack-plugin
    优化css的插件
    
## webpack-merge
    合并配置的插件
