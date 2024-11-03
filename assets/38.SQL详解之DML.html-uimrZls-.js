import{_ as s,c as n,a,o as l}from"./app-D-bq_jAa.js";const i={};function d(c,e){return l(),n("div",null,e[0]||(e[0]=[a('<h2 id="sql详解之dml" tabindex="-1"><a class="header-anchor" href="#sql详解之dml"><span>SQL详解之DML</span></a></h2><p>我们接着上一课中创建的学校选课系统数据库，为大家讲解 DML 的使用。DML 可以帮助将数据插入到二维表（<code>insert</code>操作）、从二维表删除数据（<code>delete</code>操作）以及更新二维表的数据（<code>update</code>操作）。在执行 DML 之前，我们先通过下面的<code>use</code>命令切换到<code>school</code>数据库。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">use `school`;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="insert操作" tabindex="-1"><a class="header-anchor" href="#insert操作"><span>insert操作</span></a></h3><p>顾名思义，<code>insert</code>是用来插入行到二维表中的，插入的方式包括：插入完整的行、插入行的一部分、插入多行、插入查询的结果。我们通过如下所示的 SQL 向学院表中添加一个学院。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">insert into `tb_college` values (default, &#39;计算机学院&#39;, &#39;学习计算机科学与技术的地方&#39;);</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中，由于学院表的主键是一个自增字段，因此上面的 SQL 中用<code>default</code>表示该列使用默认值，我们也可以使用下面的方式完成同样的操作。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">insert into `tb_college` (`col_name`, `col_intro`) values (&#39;计算机学院&#39;, &#39;学习计算机科学与技术的地方&#39;);</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们推荐大家使用下面这种做法，指定为哪些字段赋值，这样做可以不按照建表时设定的字段顺序赋值，可以按照<code>values</code>前面的元组中给定的字段顺序为字段赋值，但是需要注意，除了允许为<code>null</code>和有默认值的字段外，其他的字段都必须要一一列出并在<code>values</code>后面的元组中为其赋值。如果希望一次性插入多条记录，我们可以在<code>values</code>后面跟上多个元组来实现批量插入，代码如下所示。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">insert into `tb_college` </span>\n<span class="line">    (`col_name`, `col_intro`) </span>\n<span class="line">values </span>\n<span class="line">    (&#39;外国语学院&#39;, &#39;学习歪果仁的语言的学院&#39;),</span>\n<span class="line">    (&#39;经济管理学院&#39;, &#39;经世济民，治理国家；管理科学，兴国之道&#39;),</span>\n<span class="line">    (&#39;体育学院&#39;, &#39;发展体育运动，增强人民体质&#39;);</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在插入数据时，要注意主键是不能重复的，如果插入的数据与表中已有记录主键相同，那么<code>insert</code>操作将会产生 Duplicated Entry 的报错信息。再次提醒大家，如果<code>insert</code>操作省略了某些列，那么这些列要么有默认值，要么允许为<code>null</code>，否则也将产生错误。在业务系统中，为了让<code>insert</code>操作不影响其他操作（主要是后面要讲的<code>select</code>操作）的性能，可以在<code>insert</code>和<code>into</code>之间加一个<code>low_priority</code>来降低<code>insert</code>操作的优先级，这个做法也适用于下面要讲的<code>delete</code>和<code>update</code>操作。</p><p>假如有一张名为<code>tb_temp</code>的表中有<code>a</code>和<code>b</code>两个列，分别保存了学院的名称和学院的介绍，我们也可以通过查询操作获得<code>tb_temp</code>表的数据并插入到学院表中，如下所示，其中的<code>select</code>就是我们之前提到的 DQL，在下一课中会详细讲解。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">insert into `tb_college`</span>\n<span class="line">    (`col_name`, `col_intro`)</span>\n<span class="line">select `a`, `b` from `tb_temp`;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-操作" tabindex="-1"><a class="header-anchor" href="#delete-操作"><span>delete 操作</span></a></h3><p>如果需要从表中删除数据，可以使用<code>delete</code>操作，它可以帮助我们删除指定行或所有行，例如我们要删除编号为<code>1</code>的学院，就可以使用如下所示的 SQL。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">delete from `tb_college` where col_id=1;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注意，上面的<code>delete</code>操作中的<code>where</code>子句是用来指定条件的，只有满足条件的行会被删除。如果我们不小心写出了下面的 SQL，就会删除学院表中所有的记录，这是相当危险的，在实际工作中通常也不会这么做。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">delete from `tb_college`;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>需要说明的是，即便删除了所有的数据，<code>delete</code>操作不会删除表本身，也不会让 AUTO_INCREMENT 字段的值回到初始值。如果需要删除所有的数据而且让 AUTO_INCREMENT 字段回到初始值，可以使用<code>truncate table</code>执行截断表操作，<code>truncate</code>的本质是删除原来的表并重新创建一个表，它的速度其实更快，因为不需要逐行删除数据。但是请大家记住一点，用<code>truncate table</code>删除数据是非常危险的，因为它会删除所有的数据，而且由于原来的表已经被删除了，要想恢复误删除的数据也会变得极为困难。</p><h3 id="update-操作" tabindex="-1"><a class="header-anchor" href="#update-操作"><span>update 操作</span></a></h3><p>如果要修改表中的数据，可以使用<code>update</code>操作，它可以用来删除指定的行或所有的行。例如，我们将学生表中的“杨过”修改为“杨逍”，这里我们假设“杨过”的学号为<code>1001</code>，代码如下所示。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">update `tb_student` set `stu_name`=&#39;杨逍&#39; where `stu_id`=1001;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注意上面 SQL 中的<code>where</code>子句，我们使用学号作为条件筛选出对应的学生，然后通过前面的赋值操作将其姓名修改为“杨逍”。这里为什么不直接使用姓名作为筛选条件，那是因为学生表中可能有多个名为“杨过”的学生，如果使用 stu_name 作为筛选条件，那么我们的<code>update</code>操作有可能会一次更新多条数据，这显然不是我们想要看到的。还有一个需要注意的地方是<code>update</code>操作中的<code>set</code>关键字，因为 SQL 中的<code>=</code>并不表示赋值，而是判断相等的运算符，只有出现在<code>set</code> 关键字后面的<code>=</code>，才具备赋值的能力。</p><p>如果要同时修改学生的姓名和生日，我们可以对上面的<code>update</code>语句稍作修改，如下所示。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">update `tb_student` set `stu_name`=&#39;杨逍&#39;, `stu_birth`=&#39;1975-12-29&#39; where `stu_id`=1001;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>update</code>语句中也可以使用查询的方式获得数据并以此来更新指定的表数据，有兴趣的读者可以自行研究。在书写<code>update</code>语句时，通常都会有<code>where</code>子句，因为实际工作中几乎不太会用到更新全表的操作，这一点大家一定要注意。</p><h3 id="完整的数据" tabindex="-1"><a class="header-anchor" href="#完整的数据"><span>完整的数据</span></a></h3><p>下面我们给出完整的向 school 数据库的五张表中插入数据的 SQL。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">use `school`;</span>\n<span class="line"></span>\n<span class="line">-- 插入学院数据</span>\n<span class="line">insert into `tb_college` </span>\n<span class="line">    (`col_name`, `col_intro`) </span>\n<span class="line">values </span>\n<span class="line">    (&#39;计算机学院&#39;, &#39;计算机学院1958年设立计算机专业，1981年建立计算机科学系，1998年设立计算机学院，2005年5月，为了进一步整合教学和科研资源，学校决定，计算机学院和软件学院行政班子合并统一运作、实行教学和学生管理独立运行的模式。 学院下设三个系：计算机科学与技术系、物联网工程系、计算金融系；两个研究所：图象图形研究所、网络空间安全研究院（2015年成立）；三个教学实验中心：计算机基础教学实验中心、IBM技术中心和计算机专业实验中心。&#39;),</span>\n<span class="line">    (&#39;外国语学院&#39;, &#39;外国语学院设有7个教学单位，6个文理兼收的本科专业；拥有1个一级学科博士授予点，3个二级学科博士授予点，5个一级学科硕士学位授权点，5个二级学科硕士学位授权点，5个硕士专业授权领域，同时还有2个硕士专业学位（MTI）专业；有教职员工210余人，其中教授、副教授80余人，教师中获得中国国内外名校博士学位和正在职攻读博士学位的教师比例占专任教师的60%以上。&#39;),</span>\n<span class="line">    (&#39;经济管理学院&#39;, &#39;经济学院前身是创办于1905年的经济科；已故经济学家彭迪先、张与九、蒋学模、胡寄窗、陶大镛、胡代光，以及当代学者刘诗白等曾先后在此任教或学习。&#39;);</span>\n<span class="line"></span>\n<span class="line">-- 插入学生数据</span>\n<span class="line">insert into `tb_student` </span>\n<span class="line">    (`stu_id`, `stu_name`, `stu_sex`, `stu_birth`, `stu_addr`, `col_id`) </span>\n<span class="line">values</span>\n<span class="line">    (1001, &#39;杨过&#39;, 1, &#39;1990-3-4&#39;, &#39;湖南长沙&#39;, 1),</span>\n<span class="line">    (1002, &#39;任我行&#39;, 1, &#39;1992-2-2&#39;, &#39;湖南长沙&#39;, 1),</span>\n<span class="line">    (1033, &#39;王语嫣&#39;, 0, &#39;1989-12-3&#39;, &#39;四川成都&#39;, 1),</span>\n<span class="line">    (1572, &#39;岳不群&#39;, 1, &#39;1993-7-19&#39;, &#39;陕西咸阳&#39;, 1),</span>\n<span class="line">    (1378, &#39;纪嫣然&#39;, 0, &#39;1995-8-12&#39;, &#39;四川绵阳&#39;, 1),</span>\n<span class="line">    (1954, &#39;林平之&#39;, 1, &#39;1994-9-20&#39;, &#39;福建莆田&#39;, 1),</span>\n<span class="line">    (2035, &#39;东方不败&#39;, 1, &#39;1988-6-30&#39;, null, 2),</span>\n<span class="line">    (3011, &#39;林震南&#39;, 1, &#39;1985-12-12&#39;, &#39;福建莆田&#39;, 3),</span>\n<span class="line">    (3755, &#39;项少龙&#39;, 1, &#39;1993-1-25&#39;, &#39;四川成都&#39;, 3),</span>\n<span class="line">    (3923, &#39;杨不悔&#39;, 0, &#39;1985-4-17&#39;, &#39;四川成都&#39;, 3);</span>\n<span class="line"></span>\n<span class="line">-- 插入老师数据</span>\n<span class="line">insert into `tb_teacher` </span>\n<span class="line">    (`tea_id`, `tea_name`, `tea_title`, `col_id`) </span>\n<span class="line">values </span>\n<span class="line">    (1122, &#39;张三丰&#39;, &#39;教授&#39;, 1),</span>\n<span class="line">    (1133, &#39;宋远桥&#39;, &#39;副教授&#39;, 1),</span>\n<span class="line">    (1144, &#39;杨逍&#39;, &#39;副教授&#39;, 1),</span>\n<span class="line">    (2255, &#39;范遥&#39;, &#39;副教授&#39;, 2),</span>\n<span class="line">    (3366, &#39;韦一笑&#39;, default, 3);</span>\n<span class="line"></span>\n<span class="line">-- 插入课程数据</span>\n<span class="line">insert into `tb_course` </span>\n<span class="line">    (`cou_id`, `cou_name`, `cou_credit`, `tea_id`) </span>\n<span class="line">values </span>\n<span class="line">    (1111, &#39;Python程序设计&#39;, 3, 1122),</span>\n<span class="line">    (2222, &#39;Web前端开发&#39;, 2, 1122),</span>\n<span class="line">    (3333, &#39;操作系统&#39;, 4, 1122),</span>\n<span class="line">    (4444, &#39;计算机网络&#39;, 2, 1133),</span>\n<span class="line">    (5555, &#39;编译原理&#39;, 4, 1144),</span>\n<span class="line">    (6666, &#39;算法和数据结构&#39;, 3, 1144),</span>\n<span class="line">    (7777, &#39;经贸法语&#39;, 3, 2255),</span>\n<span class="line">    (8888, &#39;成本会计&#39;, 2, 3366),</span>\n<span class="line">    (9999, &#39;审计学&#39;, 3, 3366);</span>\n<span class="line"></span>\n<span class="line">-- 插入选课数据</span>\n<span class="line">insert into `tb_record` </span>\n<span class="line">    (`stu_id`, `cou_id`, `sel_date`, `score`) </span>\n<span class="line">values </span>\n<span class="line">    (1001, 1111, &#39;2017-09-01&#39;, 95),</span>\n<span class="line">    (1001, 2222, &#39;2017-09-01&#39;, 87.5),</span>\n<span class="line">    (1001, 3333, &#39;2017-09-01&#39;, 100),</span>\n<span class="line">    (1001, 4444, &#39;2018-09-03&#39;, null),</span>\n<span class="line">    (1001, 6666, &#39;2017-09-02&#39;, 100),</span>\n<span class="line">    (1002, 1111, &#39;2017-09-03&#39;, 65),</span>\n<span class="line">    (1002, 5555, &#39;2017-09-01&#39;, 42),</span>\n<span class="line">    (1033, 1111, &#39;2017-09-03&#39;, 92.5),</span>\n<span class="line">    (1033, 4444, &#39;2017-09-01&#39;, 78),</span>\n<span class="line">    (1033, 5555, &#39;2017-09-01&#39;, 82.5),</span>\n<span class="line">    (1572, 1111, &#39;2017-09-02&#39;, 78),</span>\n<span class="line">    (1378, 1111, &#39;2017-09-05&#39;, 82),</span>\n<span class="line">    (1378, 7777, &#39;2017-09-02&#39;, 65.5),</span>\n<span class="line">    (2035, 7777, &#39;2018-09-03&#39;, 88),</span>\n<span class="line">    (2035, 9999, &#39;2019-09-02&#39;, null),</span>\n<span class="line">    (3755, 1111, &#39;2019-09-02&#39;, null),</span>\n<span class="line">    (3755, 8888, &#39;2019-09-02&#39;, null),</span>\n<span class="line">    (3755, 9999, &#39;2017-09-01&#39;, 92);</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：上面的<code>insert</code>语句使用了批处理的方式来插入数据，这种做法插入数据的效率比较高。</p></blockquote>',30)]))}const p=s(i,[["render",d],["__file","38.SQL详解之DML.html.vue"]]),r=JSON.parse('{"path":"/Day36-45/38.SQL%E8%AF%A6%E8%A7%A3%E4%B9%8BDML.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"SQL详解之DML","slug":"sql详解之dml","link":"#sql详解之dml","children":[{"level":3,"title":"insert操作","slug":"insert操作","link":"#insert操作","children":[]},{"level":3,"title":"delete 操作","slug":"delete-操作","link":"#delete-操作","children":[]},{"level":3,"title":"update 操作","slug":"update-操作","link":"#update-操作","children":[]},{"level":3,"title":"完整的数据","slug":"完整的数据","link":"#完整的数据","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"Day36-45/38.SQL详解之DML.md"}');export{p as comp,r as data};
