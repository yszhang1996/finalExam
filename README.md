此网站是模仿海澜之家的网店做出来的
第一级（index.html)为首页
第二级（各个导航分页面）各种如所有商品、冬季热卖、春季新品之类的
第三级（商品详情页）显示商品的各种信息，数量、价格等
首页
首页的导航页是用JavaScript做的，首先获取this标签的子标签a的内容，如所有商品、冬季热卖、春季新品之类的
然后没有用if语句，太复杂，用的是switch-case匹配获取的内容，匹配和哪个相同，就显示哪个的隐藏的子导航
轮播图也同理，获取小方格里的内容，即1or2or3，来匹配图片
footer就是简单的CSS样式处理
分页面
各个分页面做的相似度非常高（原网站就如此）
有个插曲就是在制作分页面时忘了给商品图片加超链接，十几个分页，一个分页二三十个商品图片
真做下来要一两个小时，用了sublime里自带的正则表达式替换
修改前：
<div class="shangpin"><img src="../images/s1.jpg" class="shangpinimg"><p class="shangpinming">HLA海澜之家水洗混纺休闲衬衫</p>
代码：
(shangpin">)(<img)
$1<a href="shop.html">$2
(shangpinimg">)(<p)
$1</a>$2
修改后：
<div class="shangpin"><a href="shop.html"><img src="../images/s1.jpg" class="shangpinimg"></a><p class="shangpinming">HLA海澜之家水洗混纺休闲衬衫</p>
直接全局替换就可以了
商品详情页
详情页也就是一些CSS样式，一些需要js的也取巧用了CSS


https://github.com/yszhang1996/finalExam.git
