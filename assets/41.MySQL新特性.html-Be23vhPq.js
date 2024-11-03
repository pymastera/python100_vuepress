import{_ as s,c as n,a,o as i}from"./app-D-bq_jAa.js";const l={};function d(t,e){return i(),n("div",null,e[0]||(e[0]=[a('<h2 id="mysql新特性" tabindex="-1"><a class="header-anchor" href="#mysql新特性"><span>MySQL新特性</span></a></h2><h3 id="json类型" tabindex="-1"><a class="header-anchor" href="#json类型"><span>JSON类型</span></a></h3><p>很多开发者在使用关系型数据库做数据持久化的时候，常常感到结构化的存储缺乏灵活性，因为必须事先设计好所有的列以及对应的数据类型。在业务发展和变化的过程中，如果需要修改表结构，这绝对是比较麻烦和难受的事情。从 MySQL 5.7 版本开始，MySQL引入了对 JSON 数据类型的支持（MySQL 8.0 解决了 JSON 的日志性能瓶颈问题），用好 JSON 类型，其实就是打破了关系型数据库和非关系型数据库之间的界限，为数据持久化操作带来了更多的便捷。</p><p>JSON 类型主要分为 JSON 对象和 JSON数组两种，如下所示。</p><ol><li>JSON 对象</li></ol><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{&quot;name&quot;: &quot;骆昊&quot;, &quot;tel&quot;: &quot;13122335566&quot;, &quot;QQ&quot;: &quot;957658&quot;}</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>JSON 数组</li></ol><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">[1, 2, 3]</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">[{&quot;name&quot;: &quot;骆昊&quot;, &quot;tel&quot;: &quot;13122335566&quot;}, {&quot;name&quot;: &quot;王大锤&quot;, &quot;QQ&quot;: &quot;123456&quot;}]</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>哪些地方需要用到JSON类型呢？举一个简单的例子，现在很多产品的用户登录都支持多种方式，例如手机号、微信、QQ、新浪微博等，但是一般情况下我们又不会要求用户提供所有的这些信息，那么用传统的设计方式，就需要设计多个列来对应多种登录方式，可能还需要允许这些列存在空值，这显然不是很好的选择；另一方面，如果产品又增加了一种登录方式，那么就必然要修改之前的表结构，这就更让人痛苦了。但是，有了 JSON 类型，刚才的问题就迎刃而解了，我们可以做出如下所示的设计。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">create table `tb_test`</span>\n<span class="line">(</span>\n<span class="line">`user_id` bigint unsigned,</span>\n<span class="line">`login_info` json,</span>\n<span class="line">primary key (`user_id`)</span>\n<span class="line">) engine=innodb;</span>\n<span class="line"></span>\n<span class="line">insert into `tb_test` values </span>\n<span class="line">    (1, &#39;{&quot;tel&quot;: &quot;13122335566&quot;, &quot;QQ&quot;: &quot;654321&quot;, &quot;wechat&quot;: &quot;jackfrued&quot;}&#39;),</span>\n<span class="line">    (2, &#39;{&quot;tel&quot;: &quot;13599876543&quot;, &quot;weibo&quot;: &quot;wangdachui123&quot;}&#39;);</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要查询用户的手机和微信号，可以用如下所示的 SQL 语句。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select </span>\n<span class="line">    `user_id`,</span>\n<span class="line">    json_unquote(json_extract(`login_info`, &#39;$.tel&#39;)) as 手机号,</span>\n<span class="line">    json_unquote(json_extract(`login_info`, &#39;$.wechat&#39;)) as 微信 </span>\n<span class="line">from `tb_test`;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+---------+-------------+-----------+</span>\n<span class="line">| user_id | 手机号      | 微信       |</span>\n<span class="line">+---------+-------------+-----------+</span>\n<span class="line">|       1 | 13122335566 | jackfrued |</span>\n<span class="line">|       2 | 13599876543 | NULL      |</span>\n<span class="line">+---------+-------------+-----------+</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为支持 JSON 类型，MySQL 也提供了配套的处理 JSON 数据的函数，就像上面用到的<code>json_extract</code>和<code>json_unquote</code>。当然，上面的 SQL 还有更为便捷的写法，如下所示。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select </span>\n<span class="line">	`user_id`,</span>\n<span class="line">    `login_info` -&gt;&gt; &#39;$.tel&#39; as 手机号,</span>\n<span class="line">    `login_info` -&gt;&gt; &#39;$.wechat&#39; as 微信</span>\n<span class="line">from `tb_test`;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再举个例子，如果我们的产品要实现用户画像功能（给用户打标签），然后基于用户画像给用户推荐平台的服务或消费品之类的东西，我们也可以使用 JSON 类型来保存用户画像数据，示意代码如下所示。</p><p>创建画像标签表。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">create table `tb_tags`</span>\n<span class="line">(</span>\n<span class="line">`tag_id` int unsigned not null comment &#39;标签ID&#39;,</span>\n<span class="line">`tag_name` varchar(20) not null comment &#39;标签名&#39;,</span>\n<span class="line">primary key (`tag_id`)</span>\n<span class="line">) engine=innodb;</span>\n<span class="line"></span>\n<span class="line">insert into `tb_tags` (`tag_id`, `tag_name`) </span>\n<span class="line">values</span>\n<span class="line">    (1, &#39;70后&#39;),</span>\n<span class="line">    (2, &#39;80后&#39;),</span>\n<span class="line">    (3, &#39;90后&#39;),</span>\n<span class="line">    (4, &#39;00后&#39;),</span>\n<span class="line">    (5, &#39;爱运动&#39;),</span>\n<span class="line">    (6, &#39;高学历&#39;),</span>\n<span class="line">    (7, &#39;小资&#39;),</span>\n<span class="line">    (8, &#39;有房&#39;),</span>\n<span class="line">    (9, &#39;有车&#39;),</span>\n<span class="line">    (10, &#39;爱看电影&#39;),</span>\n<span class="line">    (11, &#39;爱网购&#39;),</span>\n<span class="line">    (12, &#39;常点外卖&#39;);</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为用户打标签。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">create table `tb_users_tags`</span>\n<span class="line">(</span>\n<span class="line">`user_id` bigint unsigned not null comment &#39;用户ID&#39;,</span>\n<span class="line">`user_tags` json not null comment &#39;用户标签&#39;</span>\n<span class="line">) engine=innodb;</span>\n<span class="line"></span>\n<span class="line">insert into `tb_users_tags` values </span>\n<span class="line">    (1, &#39;[2, 6, 8, 10]&#39;),</span>\n<span class="line">    (2, &#39;[3, 10, 12]&#39;),</span>\n<span class="line">    (3, &#39;[3, 8, 9, 11]&#39;);</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们通过一组查询来了解 JSON 类型的巧妙之处。</p><ol><li><p>查询爱看电影（有<code>10</code>这个标签）的用户ID。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select `user_id` from `tb_users_tags` where 10 member of (`user_tags`-&gt;&#39;$&#39;);</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>查询爱看电影（有<code>10</code>这个标签）的80后（有<code>2</code>这个标签）用户ID。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select `user_id` from `tb_users_tags` where json_contains(`user_tags`-&gt;&#39;$&#39;, &#39;[2, 10]&#39;);</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>查询爱看电影或80后或90后的用户ID。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select `user_id` from `tb_users_tags` where json_overlaps(user_tags-&gt;&#39;$&#39;, &#39;[2, 3, 10]&#39;);</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><blockquote><p><strong>说明</strong>：上面的查询用到了<code>member of</code>谓词和两个 JSON 函数，<code>json_contains</code>可以检查 JSON 数组是否包含了指定的元素，而<code>json_overlaps</code>可以检查 JSON 数组是否与指定的数组有重叠部分。</p></blockquote><h3 id="窗口函数" tabindex="-1"><a class="header-anchor" href="#窗口函数"><span>窗口函数</span></a></h3><p>MySQL 从8.0开始支持窗口函数，大多数商业数据库和一些开源数据库早已提供了对窗口函数的支持，有的也将其称之为 OLAP（联机分析和处理）函数，听名字就知道跟统计和分析相关。为了帮助大家理解窗口函数，我们先说说窗口的概念。</p><p>窗口可以理解为记录的集合，窗口函数也就是在满足某种条件的记录集合上执行的特殊函数，对于每条记录都要在此窗口内执行函数。窗口函数和我们上面讲到的聚合函数比较容易混淆，二者的区别主要在于聚合函数是将多条记录聚合为一条记录，窗口函数是每条记录都会执行，执行后记录条数不会变。窗口函数不仅仅是几个函数，它是一套完整的语法，函数只是该语法的一部分，基本语法如下所示：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">&lt;窗口函数&gt; over (partition by &lt;用于分组的列名&gt; order by &lt;用于排序的列名&gt;  rows between ... and ...)</span>\n<span class="line">&lt;窗口函数&gt; over (partition by &lt;用于分组的列名&gt; order by &lt;用于排序的列名&gt; range between ... and ...)</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面语法中，窗口函数的位置可以放以下两种函数：</p><ol><li>专用窗口函数，包括：<code>lead</code>、<code>lag</code>、<code>first_value</code>、<code>last_value</code>、<code>rank</code>、<code>dense_rank</code>和<code>row_number</code>等。</li><li>聚合函数，包括：<code>sum</code>、<code>avg</code>、<code>max</code>、<code>min</code>和<code>count</code>等。</li></ol><p>下面为大家举几个使用窗口函数的简单例子，我们直接使用上一课创建的 hrs 数据库。</p><p>例子1：查询按月薪从高到低排在第4到第6名的员工的姓名和月薪。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select * from (</span>\n<span class="line">	select </span>\n<span class="line">		`ename`, `sal`,</span>\n<span class="line">		row_number() over (order by `sal` desc) as `rank`</span>\n<span class="line">	from `tb_emp`</span>\n<span class="line">) `temp` where `rank` between 4 and 6;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面使用的函数<code>row_number()</code>可以为每条记录生成一个行号，在实际工作中可以根据需要将其替换为<code>rank()</code>或<code>dense_rank()</code>函数，三者的区别可以参考官方文档或阅读<a href="https://zhuanlan.zhihu.com/p/92654574" target="_blank" rel="noopener noreferrer">《通俗易懂的学会：SQL窗口函数》</a>进行了解。在MySQL 8以前的版本，我们可以通过下面的方式来完成类似的操作。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select `rank`, `ename`, `sal` from (</span>\n<span class="line">       select @a:=@a+1 as `rank`, `ename`, `sal` </span>\n<span class="line">       from `tb_emp`, (select @a:=0) as t1 order by `sal` desc</span>\n<span class="line">) as `temp` where `rank` between 4 and 6;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>例子2：查询每个部门月薪最高的两名的员工的姓名和部门名称。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select `ename`, `sal`, `dname` </span>\n<span class="line">from (</span>\n<span class="line">    select </span>\n<span class="line">        `ename`, `sal`, `dno`,</span>\n<span class="line">        rank() over (partition by `dno` order by `sal` desc) as `rank`</span>\n<span class="line">    from `tb_emp`</span>\n<span class="line">) as `temp` natural join `tb_dept` where `rank`&lt;=2;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：在MySQL 8以前的版本，我们可以通过下面的方式来完成类似的操作。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">select `ename`, `sal`, `dname` from `tb_emp` as `t1` </span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></blockquote><p>natural join <code>tb_dept</code> where ( select count(*) from <code>tb_emp</code> as <code>t2</code> where <code>t1</code>.<code>dno</code>=<code>t2</code>.<code>dno</code> and <code>t2</code>.<code>sal</code>&gt;<code>t1</code>.<code>sal</code> )&lt;2 order by <code>dno</code> asc, <code>sal</code> desc;</p><blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div></blockquote><h3 id="公用表表达式-cte" tabindex="-1"><a class="header-anchor" href="#公用表表达式-cte"><span>公用表表达式（CTE）</span></a></h3>',40)]))}const c=s(l,[["render",d],["__file","41.MySQL新特性.html.vue"]]),p=JSON.parse('{"path":"/Day36-45/41.MySQL%E6%96%B0%E7%89%B9%E6%80%A7.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"MySQL新特性","slug":"mysql新特性","link":"#mysql新特性","children":[{"level":3,"title":"JSON类型","slug":"json类型","link":"#json类型","children":[]},{"level":3,"title":"窗口函数","slug":"窗口函数","link":"#窗口函数","children":[]},{"level":3,"title":"公用表表达式（CTE）","slug":"公用表表达式-cte","link":"#公用表表达式-cte","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"Day36-45/41.MySQL新特性.md"}');export{c as comp,p as data};
