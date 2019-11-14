# path: 对文件路径的操作处理.

## path.resolve([from...], to): 返回绝对路径，从右往左解析，直到返回一个绝对路径停止
## path.relative(from, to): 返回从 from 到 to 的相对路径
## path.isAbsolute(path)：判断是否是绝对路径
## path.dirname(p)：返回路径中文件夹部分
## path.basename(p[, ext]):返回路径中最后一部分
## path.extname(p):返回路径中后缀名部分
## path.join([path1][, path2][, ...]):用于连接路径(会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\")