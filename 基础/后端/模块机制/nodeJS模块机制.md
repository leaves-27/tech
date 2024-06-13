## nodeJS模块产生的时代背景  
概括的讲：随着JavaScript在前端的应用越来越广泛，以及服务端JavaScript的推动，JavaScript现有的规范十分薄弱，不利于JavaScript大规模的应用。  

表现：表现在以JavaScript为宿主语言的环境中，javascript只有本身的基础原生对象和类型，更多的对象和API都取决于宿主提供。  

跟一些同类可以适用大规模应用的语言相比：  
1.JavaScript没有模块系统。  
2.JavaScript没有强大的标准库。  
3.JavaScript没有标准接口。  
4.JavaScript没有包管理系统。

## node领域的大事记
node.js的产生 2009年5月   

## 模块系统具体解决的问题：
1.提供了一个密闭的作用域；  
2.使依赖管理变的非常方便；  
3.导出API方便其他人使用；  

以上三个问题的解决为JavaScript大规模的应用奠定了基础。  

## CommonJS规范：  
官方网站：http://commonjs.org/  

### nodeJS模块机制 和CommonsJS规范的关系   
nodeJS模块机制是CommonJS规范的一个实现   

### CommonJS的目标  
构建一个使Javascript用于更广泛的应用程序的标准库,类似Python，Ruby和Java标准库的一样。  
例如：用以一下应用程序  
服务器端JavaScript应用程序  
命令行工具  
图形界面应用程序  
混合应用程序  

### CommonJS规范的支持情况
CommonJS有很多实现，其中不乏很多大名鼎鼎的项目，但这些项目大部分只实现了CommonJS的部分规范。  
例：node.js,CouchDB, Flusspferd, GLUEscript, GPSEE, JSBuild, Narwhal (0.1), Persevere, RingoJS, SproutCore 1.1/Tiki, n TeaJS (formerly v8cgi), Smart Platform, Yabble, Wakanda, XULJet等

目前，有四大平台支持CommonJS API：  
(1)Rhino:基于java实现的JavaScript脚本引擎  
(2)Spidermonkey:是一个用C语言实现的JavaScript脚本引擎  
(3)v8:基于C++实现的JavaScript脚本引擎  
(4)JavaScriptCore: 是一个把WebKit的JavaScript引擎用Objective-C进行封装，提供了简单，快速以及安全的方式J接入OS X Mavericks 和 iOS 7的一个库。

注：关于JavaScriptCore，想了解更多详情请参加http://nshipster.cn/javascriptcore/

### CommonJS的内容
其主要有三个方面:  
1.require  
2.模块上下文
3.模块标识符  
 
注：I.Module.exports和exports的使用场景。exports一般用于一些实例；而Module.exports则用于一个特定的类型。   
   II.具体的项目和实现部分参见官方网站的说明：http://commonjs.org/impl/  

### CommonJS的版本
CommonJS Modules/1.0   
CommonJS Modules/1.1.1 

## nodeJS模块的定义和调用  
1.定义:  
  (1)概念上：一个node.js文件就是一个模块  
  (2)操作上：  
    a.js:
    exports.world = function() {
      console.log('Hello World');
    }
    b.js:
    function Hello() { 
      var name; 
      this.setName = function(thyName) { 
        name = thyName; 
      }; 
      this.sayHello = function() { 
        console.log('Hello ' + name); 
      };
    }; 
    module.exports = Hello;

2.调用:  
  c.js
   var hello = require("a.js");
   hello.world();  

## nodeJS模块载入策略  
1.模块的分类：Node.js的模块分为两类.  
  (1)原生（核心）模块    
  (2)文件模块：文件模块又根据后缀名分为三类.  
     <1>.js  
     <2>.node  
     <3>.json  
2.require方法中的文件查找策略:  
  当开始require模块，则首先判断加载的模块是否在文件模块缓存区中。  
  若require的模块在文件模块缓存区中，则直接返回exports对象。否则，会接着判断require的模块  是否原生模块:  
    (1)是，则再判断require的模块是否在原生模块缓存区中，是则返回exports，否则加载原生模块并缓存原生模块，然后返回exports  
    (2)否，则查找文件模块，根据扩展名载入文件模块，并缓存文件模块，最后返回exports.  

  总结:  
  (1)文件模块缓存优先级最高。  
  (2)加载的模块是原生模块的话，原生模块缓存区的优先级最高，其次再是原生模块。  
  (3)加载的模块是非原生模块的话，根据文件模块的扩展名载入模块。  

3.其背后的代码运行基本原理是：  
  (1).先假设我们有两个js文件：app.js和circle.js  
  circle.js:  
  var PI = Math.PI;
  exports.area = function (r) {
      return PI * r * r;
  };
  exports.circumference = function (r) {
      return 2 * PI * r;
  };
  app.js:
  var circle = require('./circle.js');
  console.log( 'The area of a circle of radius 4 is ' + circle.area(4));

  (2).在命令行执行node app.js，其会调用lib/module.js的  
  Module.runMain = function () {
    Module._load(process.argv[1], null, true);
  };  
  Module._load方法通过分析文件名(即根据上述模块类型分析当前模块的类型，然后按照上述的require文件查找策略进行查找)，若没有则对文件进行包装编译，然后实例模块  
  var module =  new Module(id,parent);
  再然后调用该module的load方法加载模块文件.  

# 部分源码摘录：连构造函数总共8个方法  
function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  this.filename = null;
  this.loaded = false;
  this.children = [];
}

Module.prototype.require = function(path) {
  return Module._load(path, this);
};

Module._load = function(request, parent, isMain) {

  //  计算绝对路径
  var filename = Module._resolveFilename(request, parent);

  //  第一步：如果有缓存，取出缓存
  var cachedModule = Module._cache[filename];
  if (cachedModule) {
    return cachedModule.exports;

  // 第二步：是否为内置模块
  if (NativeModule.exists(filename)) {
    return NativeModule.require(filename);
  }

  // 第三步：生成模块实例，存入缓存
  var module = new Module(filename, parent);
  Module._cache[filename] = module;

  // 第四步：加载模块
  try {
    module.load(filename);
    hadException = false;
  } finally {
    if (hadException) {
      delete Module._cache[filename];
    }
  }

  // 第五步：输出模块的exports属性
  return module.exports;
};

Module._resolveFilename = function(request, parent) {

  // 第一步：如果是内置模块，不含路径返回
  if (NativeModule.exists(request)) {
    return request;
  }

  // 第二步：确定所有可能的路径
  var resolvedModule = Module._resolveLookupPaths(request, parent);
  var id = resolvedModule[0];
  var paths = resolvedModule[1];

  // 第三步：确定哪一个路径为真
  var filename = Module._findPath(request, paths);
  if (!filename) {
    var err = new Error("Cannot find module '" + request + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  }
  return filename;
};
Module._findPath = function(request, paths) {

  // 列出所有可能的后缀名：.js，.json, .node
  var exts = Object.keys(Module._extensions);

  // 如果是绝对路径，就不再搜索
  if (request.charAt(0) === '/') {
    paths = [''];
  }

  // 是否有后缀的目录斜杠
  var trailingSlash = (request.slice(-1) === '/');

  // 第一步：如果当前路径已在缓存中，就直接返回缓存
  var cacheKey = JSON.stringify({request: request, paths: paths});
  if (Module._pathCache[cacheKey]) {
    return Module._pathCache[cacheKey];
  }

  // 第二步：依次遍历所有路径
  for (var i = 0, PL = paths.length; i < PL; i++) {
    var basePath = path.resolve(paths[i], request);
    var filename;

    if (!trailingSlash) {
      // 第三步：是否存在该模块文件
      filename = tryFile(basePath);

      if (!filename && !trailingSlash) {
        // 第四步：该模块文件加上后缀名，是否存在
        filename = tryExtensions(basePath, exts);
      }
    }

    // 第五步：目录中是否存在 package.json 
    if (!filename) {
      filename = tryPackage(basePath, exts);
    }

    if (!filename) {
      // 第六步：是否存在目录名 + index + 后缀名 
      filename = tryExtensions(path.resolve(basePath, 'index'), exts);
    }

    // 第七步：将找到的文件路径存入返回缓存，然后返回
    if (filename) {
      Module._pathCache[cacheKey] = filename;
      return filename;
    }
  }

  // 第八步：没有找到文件，返回false 
  return false;
};
Module.prototype.load = function(filename) {
  var extension = path.extname(filename) || '.js';
  if (!Module._extensions[extension]) extension = '.js';
  Module._extensions[extension](this, filename);
  this.loaded = true;
};
Module._extensions['.js'] = function(module, filename) {
  var content = fs.readFileSync(filename, 'utf8');
  module._compile(stripBOM(content), filename);
};

Module._extensions['.json'] = function(module, filename) {
  var content = fs.readFileSync(filename, 'utf8');
  try {
    module.exports = JSON.parse(stripBOM(content));
  } catch (err) {
    err.message = filename + ': ' + err.message;
    throw err;
  }
};

Module.prototype._compile = function(content, filename) {
  var self = this;
  var args = [self.exports, require, self, filename, dirname];
  return compiledWrapper.apply(self.exports, args);
};

module.exports = Module;
var module = new Module(filename, parent);


