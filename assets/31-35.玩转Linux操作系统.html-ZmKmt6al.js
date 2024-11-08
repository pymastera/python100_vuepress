import{_ as n,c as e,a as l,o as i}from"./app-D-bq_jAa.js";const a="/assets/ken-and-dennis-pdp-11-Dtlg6zjk.png",d="/assets/andrew-B5BK_P17.jpg",r="/assets/linus-DfeS8yQ4.png",t="/assets/history-of-unix-76ZuoIix.png",c="/assets/file-mode-qWg_kmfy.png",p="/assets/vim-diff-C2fkUXKm.png",o="/assets/vim-multi-window-B7bcApwq.png",v="/assets/vim-macro-C6H0muVp.png",u={};function m(b,s){return i(),e("div",null,s[0]||(s[0]=[l('<p>玩转Linux操作系统</p><blockquote><p><strong>说明</strong>：本文中对Linux命令的讲解都是基于名为CentOS的Linux发行版本，我自己使用的是阿里云服务器，系统版本为CentOS Linux release 7.6.1810。不同的Linux发行版本在Shell命令和工具程序上会有一些差别，但是这些差别是很小的。</p></blockquote><h3 id="操作系统发展史" tabindex="-1"><a class="header-anchor" href="#操作系统发展史"><span>操作系统发展史</span></a></h3><p>只有硬件没有软件的计算机系统被称之为“裸机”，我们很难用“裸机”来完成计算机日常的工作（如存储和运算），所以必须用特定的软件来控制硬件的工作。最靠近计算机硬件的软件是系统软件，其中最为重要的就是“操作系统”。“操作系统”是控制和管理整个计算机硬件和软件资源、实现资源分配和任务调配、为系统用户以及其他软件提供接口和环境的程序的集合。</p><h4 id="没有操作系统-手工操作" tabindex="-1"><a class="header-anchor" href="#没有操作系统-手工操作"><span>没有操作系统（手工操作）</span></a></h4><p>在计算机诞生之初没有操作系统的年代，人们先把程序纸带（或卡片）装上计算机，然后启动输入机把程序送入计算机，接着通过控制台开关启动程序运行。当程序执行完毕，打印机输出计算的结果，用户卸下并取走纸带（或卡片）。第二个用户上机，重复同样的步骤。在整个过程中用户独占机器，CPU等待手工操作，资源利用率极低。</p><h4 id="批处理系统" tabindex="-1"><a class="header-anchor" href="#批处理系统"><span>批处理系统</span></a></h4><p>首先启动计算机上的一个监督程序，在监督程序的控制下，计算机能够自动的、成批的处理一个或多个用户的作业。完成一批作业后，监督程度又从输入机读取作业存入磁带机。按照上面的步骤重复处理任务。监督程序不停的处理各个作业，实现了作业的自动转接，减少了作业的建立时间和手工操作时间，提高了计算机资源的利用率。 批处理系统又可以分为单道批处理系统、多道批处理系统、联机批处理系统、脱机批处理系统。</p><h4 id="分时系统和实时系统" tabindex="-1"><a class="header-anchor" href="#分时系统和实时系统"><span>分时系统和实时系统</span></a></h4><p>分时系统是把处理器的运行时间分成很短的时间片，按时间片轮流把处理机分配给各联机作业使用。 若某个作业在分配给它的时间片内不能完成其计算，则该作业暂时中断，把处理机让给另一作业使用，等待下一轮调度时再继续其运行。由于计算机速度很快，作业运行轮转得很快，给每个用户的感觉是他独占了一台计算机。而每个用户可以通过自己的终端向系统发出各种操作控制命令，在充分的人机交互情况下，完成作业的运行。为了解决分时系统不能及时响应用户指令的情况，又出现了能够在在严格的时间范围内完成事件处理，及时响应随机外部事件的实时系统。</p><h4 id="通用操作系统" tabindex="-1"><a class="header-anchor" href="#通用操作系统"><span>通用操作系统</span></a></h4><ol><li><p>1960s：IBM的System/360系列的机器有了统一的操作系统OS/360。</p></li><li><p>1965年：AT&amp;T的贝尔实验室加入GE和MIT的合作计划开始开发MULTICS。</p></li><li><p>1969年：MULTICS项目失败，Ken Tompson赋闲在家，为了玩“Space Travel”游戏用汇编语言在当时已经被淘汰的PDP-7上开发了Unics。</p><blockquote><p>注：很难想象，Unix这么伟大的操作系统，居然是一个赋闲在家的程序员（关键是老婆回娘家还带上了孩子）在一台被淘汰的设备上为了玩游戏开发出来的。</p></blockquote></li><li><p>1970年~1971年：Ken Thompson和Dennis Ritchie用B语言在PDP-11上重写了Unics，并在Brian Kernighan的建议下将其更名为Unix。</p><p><img src="'+a+'" alt="ken-and-dennis-pdp-11.png"></p></li><li><p>1972年~1973年：Dennis Ritchie发明了C语言来取代可移植性较差的B语言，并开启了用C语言重写Unix的工作。</p></li><li><p>1974年：Unix推出了里程碑意义的第5版，几乎完全用C语言来实现。</p></li><li><p>1979年：从Unix第7版开始，AT&amp;T发布新的使用条款，将Unix私有化。</p></li><li><p>1987年：Andrew S. Tanenbaum教授为了能在课堂上为学生讲解操作系统运作的细节，决定在不使用任何AT&amp;T的源代码前提下，自行开发与Unix兼容的操作系统以避免版权上的争议，该系统被命名为Minix。</p><p><img src="'+d+'" alt="andrew.jpg"></p></li><li><p>1991年：Linus Torvalds就读于芬兰赫尔辛基大学期间，尝试在Minix上做一些开发工作，但因为Minix只是作为教学用途的操作系统，功能并不强大，为了方便在学校的新闻组和邮件系统中读写和下载文件，Linus编写了磁盘驱动程序和文件系统，这些东西形成了Linux系统内核的雏形。</p><p><img src="'+r+'" alt=""></p></li></ol><p>下图是Unix操作系统家族的图谱。</p><p><img src="'+t+`" alt=""></p><h3 id="linux概述" tabindex="-1"><a class="header-anchor" href="#linux概述"><span>Linux概述</span></a></h3><p>Linux是一个通用操作系统。一个操作系统要负责任务调度、内存分配、处理外围设备I/O等操作。操作系统通常由内核（运行其他程序，管理像磁盘、打印机等硬件设备的核心程序）和系统程序（设备驱动、底层库、shell、服务程序等）两部分组成。</p><p>Linux内核是芬兰人Linus Torvalds开发的，于1991年9月发布。而Linux操作系统作为Internet时代的产物，它是由全世界许多开发者共同合作开发的，是一个自由的操作系统（注意自由和免费并不是同一个概念，想了解二者的差别可以<a href="https://www.debian.org/intro/free" target="_blank" rel="noopener noreferrer">点击这里</a>）。</p><h3 id="linux系统优点" tabindex="-1"><a class="header-anchor" href="#linux系统优点"><span>Linux系统优点</span></a></h3><ol><li>通用操作系统，不跟特定的硬件绑定。</li><li>用C语言编写，可移植性强，有内核编程接口。</li><li>支持多用户和多任务，支持安全的分层文件系统。</li><li>大量的实用程序，完善的网络功能以及强大的支持文档。</li><li>可靠的安全性和良好的稳定性，对开发者更友好。</li></ol><h3 id="linux系统发行版本" tabindex="-1"><a class="header-anchor" href="#linux系统发行版本"><span>Linux系统发行版本</span></a></h3><ol><li><a href="https://www.redhat.com/en" target="_blank" rel="noopener noreferrer">Redhat</a></li><li><a href="https://www.ubuntu.com/" target="_blank" rel="noopener noreferrer">Ubuntu</a></li><li><a href="https://www.centos.org/" target="_blank" rel="noopener noreferrer">CentOS</a></li><li><a href="https://getfedora.org/" target="_blank" rel="noopener noreferrer">Fedora</a></li><li><a href="https://www.debian.org/" target="_blank" rel="noopener noreferrer">Debian</a></li><li><a href="https://www.opensuse.org/" target="_blank" rel="noopener noreferrer">openSUSE</a></li></ol><h3 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令"><span>基础命令</span></a></h3><p>Linux系统的命令通常都是如下所示的格式：</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">命令名称 [命名参数] [命令对象]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li><p>获取登录信息 - <strong>w</strong> / <strong>who</strong> / <strong>last</strong>/ <strong>lastb</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# w</span>
<span class="line"> 23:31:16 up 12:16,  2 users,  load average: 0.00, 0.01, 0.05</span>
<span class="line">USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT</span>
<span class="line">root     pts/0    182.139.66.250   23:03    4.00s  0.02s  0.00s w</span>
<span class="line">jackfrue pts/1    182.139.66.250   23:26    3:56   0.00s  0.00s -bash</span>
<span class="line">[root ~]# who</span>
<span class="line">root     pts/0        2018-04-12 23:03 (182.139.66.250)</span>
<span class="line">jackfrued pts/1        2018-04-12 23:26 (182.139.66.250)</span>
<span class="line">[root ~]# who am i</span>
<span class="line">root     pts/0        2018-04-12 23:03 (182.139.66.250)</span>
<span class="line">[root ~]# who mom likes</span>
<span class="line">root     pts/0        2018-04-12 23:03 (182.139.66.250)</span>
<span class="line">[root ~]# last</span>
<span class="line">root     pts/0        117.136.63.184   Sun May 26 18:57   still logged in   </span>
<span class="line">reboot   system boot  3.10.0-957.10.1. Mon May 27 02:52 - 19:10  (-7:-42)   </span>
<span class="line">root     pts/4        117.136.63.184   Sun May 26 18:51 - crash  (08:01)    </span>
<span class="line">root     pts/4        117.136.63.184   Sun May 26 18:49 - 18:49  (00:00)    </span>
<span class="line">root     pts/3        117.136.63.183   Sun May 26 18:35 - crash  (08:17)    </span>
<span class="line">root     pts/2        117.136.63.183   Sun May 26 18:34 - crash  (08:17)    </span>
<span class="line">root     pts/0        117.136.63.183   Sun May 26 18:10 - crash  (08:42)    </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看自己使用的Shell - <strong>ps</strong>。</p><p>Shell也被称为“壳”或“壳程序”，它是用户与操作系统内核交流的翻译官，简单的说就是人与计算机交互的界面和接口。目前很多Linux系统默认的Shell都是bash（<u>B</u>ourne <u>A</u>gain <u>SH</u>ell），因为它可以使用tab键进行命令和路径补全、可以保存历史命令、可以方便的配置环境变量以及执行批处理操作。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# ps</span>
<span class="line">  PID TTY          TIME CMD</span>
<span class="line"> 3531 pts/0    00:00:00 bash</span>
<span class="line"> 3553 pts/0    00:00:00 ps</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看命令的说明和位置 - <strong>whatis</strong> / <strong>which</strong> / <strong>whereis</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# whatis ps</span>
<span class="line">ps (1)        - report a snapshot of the current processes.</span>
<span class="line">[root ~]# whatis python</span>
<span class="line">python (1)    - an interpreted, interactive, object-oriented programming language</span>
<span class="line">[root ~]# whereis ps</span>
<span class="line">ps: /usr/bin/ps /usr/share/man/man1/ps.1.gz</span>
<span class="line">[root ~]# whereis python</span>
<span class="line">python: /usr/bin/python /usr/bin/python2.7 /usr/lib/python2.7 /usr/lib64/python2.7 /etc/python /usr/include/python2.7 /usr/share/man/man1/python.1.gz</span>
<span class="line">[root ~]# which ps</span>
<span class="line">/usr/bin/ps</span>
<span class="line">[root ~]# which python</span>
<span class="line">/usr/bin/python</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>清除屏幕上显示的内容 - <strong>clear</strong>。</p></li><li><p>查看帮助文档 - <strong>man</strong> / <strong>info</strong> / <strong>--help</strong> / <strong>apropos</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root@izwz97tbgo9lkabnat2lo8z ~]# ps --help</span>
<span class="line">Usage:</span>
<span class="line"> ps [options]</span>
<span class="line"> Try &#39;ps --help &lt;simple|list|output|threads|misc|all&gt;&#39;</span>
<span class="line">  or &#39;ps --help &lt;s|l|o|t|m|a&gt;&#39;</span>
<span class="line"> for additional help text.</span>
<span class="line">For more details see ps(1).</span>
<span class="line">[root@izwz97tbgo9lkabnat2lo8z ~]# man ps</span>
<span class="line">PS(1)                                User Commands                                PS(1)</span>
<span class="line">NAME</span>
<span class="line">       ps - report a snapshot of the current processes.</span>
<span class="line">SYNOPSIS</span>
<span class="line">       ps [options]</span>
<span class="line">DESCRIPTION</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看系统和主机名 - <strong>uname</strong> / <strong>hostname</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root@izwz97tbgo9lkabnat2lo8z ~]# uname</span>
<span class="line">Linux</span>
<span class="line">[root@izwz97tbgo9lkabnat2lo8z ~]# hostname</span>
<span class="line">izwz97tbgo9lkabnat2lo8z</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# cat /etc/centos-release</span>
<span class="line">CentOS Linux release 7.6.1810 (Core)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：<code>cat</code>是连接文件内容并打印到标准输出的命令，后面会讲到该命令；<code>/etc</code>是Linux系统上的一个非常重要的目录，它保存了很多的配置文件；<code>centos-release</code>是该目录下的一个文件，因为我自己使用的Linux发行版本是CentOS 7.6，因此这里会有一个这样的文件。</p></blockquote></li><li><p>时间和日期 - <strong>date</strong> / <strong>cal</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# date</span>
<span class="line">Wed Jun 20 12:53:19 CST 2018</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# cal</span>
<span class="line">      June 2018</span>
<span class="line">Su Mo Tu We Th Fr Sa</span>
<span class="line">                1  2</span>
<span class="line"> 3  4  5  6  7  8  9</span>
<span class="line">10 11 12 13 14 15 16</span>
<span class="line">17 18 19 20 21 22 23</span>
<span class="line">24 25 26 27 28 29 30</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# cal 5 2017</span>
<span class="line">      May 2017</span>
<span class="line">Su Mo Tu We Th Fr Sa</span>
<span class="line">    1  2  3  4  5  6</span>
<span class="line"> 7  8  9 10 11 12 13</span>
<span class="line">14 15 16 17 18 19 20</span>
<span class="line">21 22 23 24 25 26 27</span>
<span class="line">28 29 30 31</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启和关机 - <strong>reboot</strong> / <strong>shutdown</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# shutdown -h +5</span>
<span class="line">Shutdown scheduled for Sun 2019-05-26 19:34:27 CST, use &#39;shutdown -c&#39; to cancel.</span>
<span class="line">[root ~]# </span>
<span class="line">Broadcast message from root (Sun 2019-05-26 19:29:27 CST):</span>
<span class="line"></span>
<span class="line">The system is going down for power-off at Sun 2019-05-26 19:34:27 CST!</span>
<span class="line">[root ~]# shutdown -c</span>
<span class="line"></span>
<span class="line">Broadcast message from root (Sun 2019-05-26 19:30:22 CST):</span>
<span class="line"></span>
<span class="line">The system shutdown has been cancelled at Sun 2019-05-26 19:31:22 CST!</span>
<span class="line">[root ~]# shutdown -r 23:58</span>
<span class="line">Shutdown scheduled for Sun 2019-05-26 23:58:00 CST, use &#39;shutdown -c&#39; to cancel.</span>
<span class="line">[root ~]# shutdown -c</span>
<span class="line"></span>
<span class="line">Broadcast message from root (Sun 2019-05-26 19:31:06 CST):</span>
<span class="line"></span>
<span class="line">The system shutdown has been cancelled at Sun 2019-05-26 19:32:06 CST!</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：在执行<code>shutdown</code>命令时会向登录系统的用户发出警告，可以在命令后面跟上警告消息来替换默认的警告消息，也可以在<code>-h</code>参数后通过<code>now</code>来表示立刻关机。</p></blockquote></li><li><p>退出登录 - <strong>exit</strong> / <strong>logout</strong>。</p></li><li><p>查看历史命令 - <strong>history</strong>。</p></li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# history</span>
<span class="line">...</span>
<span class="line">452  ls</span>
<span class="line">453  cd Python-3.6.5/</span>
<span class="line">454  clear</span>
<span class="line">455  history</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# !454</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：查看到历史命令之后，可以用<code>!历史命令编号</code>来重新执行该命令；通过<code>history -c</code>可以清除历史命令。</p></blockquote><h3 id="实用程序" tabindex="-1"><a class="header-anchor" href="#实用程序"><span>实用程序</span></a></h3><h4 id="文件和文件夹操作" tabindex="-1"><a class="header-anchor" href="#文件和文件夹操作"><span>文件和文件夹操作</span></a></h4><ol><li><p>创建/删除空目录 - <strong>mkdir</strong> / <strong>rmdir</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# mkdir abc</span>
<span class="line">[root ~]# mkdir -p xyz/abc</span>
<span class="line">[root ~]# rmdir abc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建/删除文件 - <strong>touch</strong> / <strong>rm</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# touch readme.txt</span>
<span class="line">[root ~]# touch error.txt</span>
<span class="line">[root ~]# rm error.txt</span>
<span class="line">rm: remove regular empty file ‘error.txt’? y</span>
<span class="line">[root ~]# rm -rf xyz</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>touch</code>命令用于创建空白文件或修改文件时间。在Linux系统中一个文件有三种时间： <ul><li>更改内容的时间 - mtime。</li><li>更改权限的时间 - ctime。</li><li>最后访问时间 - atime。</li></ul></li><li><code>rm</code>的几个重要参数： <ul><li><code>-i</code>：交互式删除，每个删除项都会进行询问。</li><li><code>-r</code>：删除目录并递归的删除目录中的文件和目录。</li><li><code>-f</code>：强制删除，忽略不存在的文件，没有任何提示。</li></ul></li></ul></li><li><p>切换和查看当前工作目录 - <strong>cd</strong> / <strong>pwd</strong>。</p><blockquote><p>说明：<code>cd</code>命令后面可以跟相对路径（以当前路径作为参照）或绝对路径（以<code>/</code>开头）来切换到指定的目录，也可以用<code>cd ..</code>来返回上一级目录。请大家想一想，如果要返回到上上一级目录应该给<code>cd</code>命令加上什么样的参数呢？</p></blockquote></li><li><p>查看目录内容 - <strong>ls</strong>。</p><ul><li><code>-l</code>：以长格式查看文件和目录。</li><li><code>-a</code>：显示以点开头的文件和目录（隐藏文件）。</li><li><code>-R</code>：遇到目录要进行递归展开（继续列出目录下面的文件和目录）。</li><li><code>-d</code>：只列出目录，不列出其他内容。</li><li><code>-S</code> / <code>-t</code>：按大小/时间排序。</li></ul></li><li><p>查看文件内容 - <strong>cat</strong> / <strong>tac</strong> / <strong>head</strong> / <strong>tail</strong> / <strong>more</strong> / <strong>less</strong> / <strong>rev</strong> / <strong>od</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# wget http://www.sohu.com/ -O sohu.html</span>
<span class="line">--2018-06-20 18:42:34--  http://www.sohu.com/</span>
<span class="line">Resolving www.sohu.com (www.sohu.com)... 14.18.240.6</span>
<span class="line">Connecting to www.sohu.com (www.sohu.com)|14.18.240.6|:80... connected.</span>
<span class="line">HTTP request sent, awaiting response... 200 OK</span>
<span class="line">Length: 212527 (208K) [text/html]</span>
<span class="line">Saving to: ‘sohu.html’</span>
<span class="line">100%[==================================================&gt;] 212,527     --.-K/s   in 0.03s</span>
<span class="line">2018-06-20 18:42:34 (7.48 MB/s) - ‘sohu.html’ saved [212527/212527]</span>
<span class="line">[root ~]# cat sohu.html</span>
<span class="line">...</span>
<span class="line">[root ~]# head -10 sohu.html</span>
<span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">&lt;title&gt;搜狐&lt;/title&gt;</span>
<span class="line">&lt;meta name=&quot;Keywords&quot; content=&quot;搜狐,门户网站,新媒体,网络媒体,新闻,财经,体育,娱乐,时尚,汽车,房产,科技,图片,论坛,微博,博客,视频,电影,电视剧&quot;/&gt;</span>
<span class="line">&lt;meta name=&quot;Description&quot; content=&quot;搜狐网为用户提供24小时不间断的最新资讯，及搜索、邮件等网络服务。内容包括全球热点事件、突发新闻、时事评论、热播影视剧、体育赛事、行业动态、生活服务信息，以及论坛、博客、微博、我的搜狐等互动空间。&quot; /&gt;</span>
<span class="line">&lt;meta name=&quot;shenma-site-verification&quot; content=&quot;1237e4d02a3d8d73e96cbd97b699e9c3_1504254750&quot;&gt;</span>
<span class="line">&lt;meta charset=&quot;utf-8&quot;/&gt;</span>
<span class="line">&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=Edge,chrome=1&quot;/&gt;</span>
<span class="line">[root ~]# tail -2 sohu.html</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line">[root ~]# less sohu.html</span>
<span class="line">...</span>
<span class="line">[root ~]# cat -n sohu.html | more</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面用到了一个名为<code>wget</code>的命令，它是一个网络下载器程序，可以从指定的URL下载资源。</p></blockquote></li><li><p>拷贝/移动文件 - <strong>cp</strong> / <strong>mv</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# mkdir backup</span>
<span class="line">[root ~]# cp sohu.html backup/</span>
<span class="line">[root ~]# cd backup</span>
<span class="line">[root backup]# ls</span>
<span class="line">sohu.html</span>
<span class="line">[root backup]# mv sohu.html sohu_index.html</span>
<span class="line">[root backup]# ls</span>
<span class="line">sohu_index.html</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>文件重命名 - <strong>rename</strong>。</p></li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# rename .htm .html *.htm</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="8"><li><p>查找文件和查找内容 - <strong>find</strong> / <strong>grep</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# find / -name &quot;*.html&quot;</span>
<span class="line">/root/sohu.html</span>
<span class="line">/root/backup/sohu_index.html</span>
<span class="line">[root@izwz97tbgo9lkabnat2lo8z ~]# find . -atime 7 -type f -print</span>
<span class="line">[root@izwz97tbgo9lkabnat2lo8z ~]# find . -type f -size +2k</span>
<span class="line">[root@izwz97tbgo9lkabnat2lo8z ~]# find . -type f -name &quot;*.swp&quot; -delete</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# grep &quot;&lt;script&gt;&quot; sohu.html -n</span>
<span class="line">20:&lt;script&gt;</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# grep -E \\&lt;\\/?script.*\\&gt; sohu.html -n</span>
<span class="line">20:&lt;script&gt;</span>
<span class="line">22:&lt;/script&gt;</span>
<span class="line">24:&lt;script src=&quot;//statics.itc.cn/web/v3/static/js/es5-shim-08e41cfc3e.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">25:&lt;script src=&quot;//statics.itc.cn/web/v3/static/js/es5-sham-1d5fa1124b.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">26:&lt;script src=&quot;//statics.itc.cn/web/v3/static/js/html5shiv-21fc8c2ba6.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">29:&lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">52:&lt;/script&gt;</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：<code>grep</code>在搜索字符串时可以使用正则表达式，如果需要使用正则表达式可以用<code>grep -E</code>或者直接使用<code>egrep</code>。</p></blockquote></li><li><p>创建链接和查看链接 - <strong>ln</strong> / <strong>readlink</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# ls -l sohu.html</span>
<span class="line">-rw-r--r-- 1 root root 212131 Jun 20 19:15 sohu.html</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# ln /root/sohu.html /root/backup/sohu_backup</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# ls -l sohu.html</span>
<span class="line">-rw-r--r-- 2 root root 212131 Jun 20 19:15 sohu.html</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# ln /root/sohu.html /root/backup/sohu_backup2</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# ls -l sohu.html</span>
<span class="line">-rw-r--r-- 3 root root 212131 Jun 20 19:15 sohu.html</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# ln -s /etc/centos-release sysinfo</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# ls -l sysinfo</span>
<span class="line">lrwxrwxrwx 1 root root 19 Jun 20 19:21 sysinfo -&gt; /etc/centos-release</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# cat sysinfo</span>
<span class="line">CentOS Linux release 7.4.1708 (Core)</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# cat /etc/centos-release</span>
<span class="line">CentOS Linux release 7.4.1708 (Core)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：链接可以分为硬链接和软链接（符号链接）。硬链接可以认为是一个指向文件数据的指针，就像Python中对象的引用计数，每添加一个硬链接，文件的对应链接数就增加1，只有当文件的链接数为0时，文件所对应的存储空间才有可能被其他文件覆盖。我们平常删除文件时其实并没有删除硬盘上的数据，我们删除的只是一个指针，或者说是数据的一条使用记录，所以类似于“文件粉碎机”之类的软件在“粉碎”文件时除了删除文件指针，还会在文件对应的存储区域填入数据来保证文件无法再恢复。软链接类似于Windows系统下的快捷方式，当软链接链接的文件被删除时，软链接也就失效了。</p></blockquote></li><li><p>压缩/解压缩和归档/解归档 - <strong>gzip</strong> / <strong>gunzip</strong> / <strong>xz</strong>。</p></li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# wget http://download.redis.io/releases/redis-4.0.10.tar.gz</span>
<span class="line">--2018-06-20 19:29:59--  http://download.redis.io/releases/redis-4.0.10.tar.gz</span>
<span class="line">Resolving download.redis.io (download.redis.io)... 109.74.203.151</span>
<span class="line">Connecting to download.redis.io (download.redis.io)|109.74.203.151|:80... connected.</span>
<span class="line">HTTP request sent, awaiting response... 200 OK</span>
<span class="line">Length: 1738465 (1.7M) [application/x-gzip]</span>
<span class="line">Saving to: ‘redis-4.0.10.tar.gz’</span>
<span class="line">100%[==================================================&gt;] 1,738,465   70.1KB/s   in 74s</span>
<span class="line">2018-06-20 19:31:14 (22.9 KB/s) - ‘redis-4.0.10.tar.gz’ saved [1738465/1738465]</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# ls redis*</span>
<span class="line">redis-4.0.10.tar.gz</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# gunzip redis-4.0.10.tar.gz</span>
<span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# ls redis*</span>
<span class="line">redis-4.0.10.tar</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li>归档和解归档 - <strong>tar</strong>。</li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# tar -xvf redis-4.0.10.tar</span>
<span class="line">redis-4.0.10/</span>
<span class="line">redis-4.0.10/.gitignore</span>
<span class="line">redis-4.0.10/00-RELEASENOTES</span>
<span class="line">redis-4.0.10/BUGS</span>
<span class="line">redis-4.0.10/CONTRIBUTING</span>
<span class="line">redis-4.0.10/COPYING</span>
<span class="line">redis-4.0.10/INSTALL</span>
<span class="line">redis-4.0.10/MANIFESTO</span>
<span class="line">redis-4.0.10/Makefile</span>
<span class="line">redis-4.0.10/README.md</span>
<span class="line">redis-4.0.10/deps/</span>
<span class="line">redis-4.0.10/deps/Makefile</span>
<span class="line">redis-4.0.10/deps/README.md</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：归档（也称为创建归档）和解归档都使用<code>tar</code>命令，通常创建归档需要<code>-cvf</code>三个参数，其中<code>c</code>表示创建（create），<code>v</code>表示显示创建归档详情（verbose），<code>f</code>表示指定归档的文件（file）；解归档需要加上<code>-xvf</code>参数，其中<code>x</code>表示抽取（extract），其他两个参数跟创建归档相同。</p></blockquote><ol start="12"><li>将标准输入转成命令行参数 - <strong>xargs</strong>。</li></ol><p>下面的命令会将查找当前路径下的html文件，然后通过<code>xargs</code>将这些文件作为参数传给<code>rm</code>命令，实现查找并删除文件的操作。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# find . -type f -name &quot;*.html&quot; | xargs rm -f</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下面的命令将a.txt文件中的多行内容变成一行输出到b.txt文件中，其中<code>&lt;</code>表示从a.txt中读取输入，<code>&gt;</code>表示将命令的执行结果输出到b.txt中。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root@iZwz97tbgo9lkabnat2lo8Z ~]# xargs &lt; a.txt &gt; b.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：这个命令就像上面演示的那样常在管道（实现进程间通信的一种方式）和重定向（重新指定输入输出的位置）操作中用到，后面的内容中会讲到管道操作和输入输出重定向操作。</p></blockquote><ol start="13"><li><p>显示文件或目录 - <strong>basename</strong> / <strong>dirname</strong>。</p></li><li><p>其他相关工具。</p></li></ol><ul><li><strong>sort</strong> - 对内容排序</li><li><strong>uniq</strong> - 去掉相邻重复内容</li><li><strong>tr</strong> - 替换指定内容为新内容</li><li><strong>cut</strong> / <strong>paste</strong> - 剪切/黏贴内容</li><li><strong>split</strong> - 拆分文件</li><li><strong>file</strong> - 判断文件类型</li><li><strong>wc</strong> - 统计文件行数、单词数、字节数</li><li><strong>iconv</strong> - 编码转换</li></ul><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# cat foo.txt</span>
<span class="line">grape</span>
<span class="line">apple</span>
<span class="line">pitaya</span>
<span class="line">[root ~]# cat bar.txt</span>
<span class="line">100</span>
<span class="line">200</span>
<span class="line">300</span>
<span class="line">400</span>
<span class="line">[root ~]# paste foo.txt bar.txt</span>
<span class="line">grape   100</span>
<span class="line">apple   200</span>
<span class="line">pitaya  300</span>
<span class="line">        400</span>
<span class="line">[root ~]# paste foo.txt bar.txt &gt; hello.txt</span>
<span class="line">[root ~]# cut -b 4-8 hello.txt</span>
<span class="line">pe      10</span>
<span class="line">le      20</span>
<span class="line">aya     3</span>
<span class="line">0</span>
<span class="line">[root ~]# cat hello.txt | tr &#39;\\t&#39; &#39;,&#39;</span>
<span class="line">grape,100</span>
<span class="line">apple,200</span>
<span class="line">pitaya,300</span>
<span class="line">,400</span>
<span class="line">[root ~]# split -l 100 sohu.html hello</span>
<span class="line">[root ~]# wget https://www.baidu.com/img/bd_logo1.png</span>
<span class="line">[root ~]# file bd_logo1.png</span>
<span class="line">bd_logo1.png: PNG image data, 540 x 258, 8-bit colormap, non-interlaced</span>
<span class="line">[root ~]# wc sohu.html</span>
<span class="line">  2979   6355 212527 sohu.html</span>
<span class="line">[root ~]# wc -l sohu.html</span>
<span class="line">2979 sohu.html</span>
<span class="line">[root ~]# wget http://www.qq.com -O qq.html</span>
<span class="line">[root ~]# iconv -f gb2312 -t utf-8 qq.html</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="管道和重定向" tabindex="-1"><a class="header-anchor" href="#管道和重定向"><span>管道和重定向</span></a></h4><ol><li><p>管道的使用 - <strong>|</strong>。</p><p>例子：查找当前目录下文件个数。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# find ./ | wc -l</span>
<span class="line">6152</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：列出当前路径下的文件和文件夹，给每一项加一个编号。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# ls | cat -n</span>
<span class="line">     1  dump.rdb</span>
<span class="line">     2  mongodb-3.6.5</span>
<span class="line">     3  Python-3.6.5</span>
<span class="line">     4  redis-3.2.11</span>
<span class="line">     5  redis.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：查找record.log中包含AAA，但不包含BBB的记录的总数</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# cat record.log | grep AAA | grep -v BBB | wc -l</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>输出重定向和错误重定向 - <strong>&gt;</strong> / <strong>&gt;&gt;</strong> / <strong>2&gt;</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# cat readme.txt</span>
<span class="line">banana</span>
<span class="line">apple</span>
<span class="line">grape</span>
<span class="line">apple</span>
<span class="line">grape</span>
<span class="line">watermelon</span>
<span class="line">pear</span>
<span class="line">pitaya</span>
<span class="line">[root ~]# cat readme.txt | sort | uniq &gt; result.txt</span>
<span class="line">[root ~]# cat result.txt</span>
<span class="line">apple</span>
<span class="line">banana</span>
<span class="line">grape</span>
<span class="line">pear</span>
<span class="line">pitaya</span>
<span class="line">watermelon</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>输入重定向 - <strong>&lt;</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# echo &#39;hello, world!&#39; &gt; hello.txt</span>
<span class="line">[root ~]# wall &lt; hello.txt</span>
<span class="line">[root ~]#</span>
<span class="line">Broadcast message from root (Wed Jun 20 19:43:05 2018):</span>
<span class="line">hello, world!</span>
<span class="line">[root ~]# echo &#39;I will show you some code.&#39; &gt;&gt; hello.txt</span>
<span class="line">[root ~]# wall &lt; hello.txt</span>
<span class="line">[root ~]#</span>
<span class="line">Broadcast message from root (Wed Jun 20 19:43:55 2018):</span>
<span class="line">hello, world!</span>
<span class="line">I will show you some code.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>多重定向 - <strong>tee</strong>。</p><p>下面的命令除了在终端显示命令<code>ls</code>的结果之外，还会追加输出到<code>ls.txt</code>文件中。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# ls | tee -a ls.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h4 id="别名" tabindex="-1"><a class="header-anchor" href="#别名"><span>别名</span></a></h4><ol><li><p><strong>alias</strong></p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# alias ll=&#39;ls -l&#39;</span>
<span class="line">[root ~]# alias frm=&#39;rm -rf&#39;</span>
<span class="line">[root ~]# ll</span>
<span class="line">...</span>
<span class="line">drwxr-xr-x  2 root       root   4096 Jun 20 12:52 abc</span>
<span class="line">...</span>
<span class="line">[root ~]# frm abc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>unalias</strong></p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# unalias frm</span>
<span class="line">[root ~]# frm sohu.html</span>
<span class="line">-bash: frm: command not found</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="文本处理" tabindex="-1"><a class="header-anchor" href="#文本处理"><span>文本处理</span></a></h4><ol><li><p>字符流编辑器 - <strong>sed</strong>。</p><p>sed是操作、过滤和转换文本内容的工具。假设有一个名为fruit.txt的文件，内容如下所示。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# cat -n fruit.txt </span>
<span class="line">     1  banana</span>
<span class="line">     2  grape</span>
<span class="line">     3  apple</span>
<span class="line">     4  watermelon</span>
<span class="line">     5  orange</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们在第2行后面添加一个pitaya。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# sed &#39;2a pitaya&#39; fruit.txt </span>
<span class="line">banana</span>
<span class="line">grape</span>
<span class="line">pitaya</span>
<span class="line">apple</span>
<span class="line">watermelon</span>
<span class="line">orange</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：刚才的命令和之前我们讲过的很多命令一样并没有改变fruit.txt文件，而是将添加了新行的内容输出到终端中，如果想保存到fruit.txt中，可以使用输出重定向操作。</p></blockquote><p>在第2行前面插入一个waxberry。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# sed &#39;2i waxberry&#39; fruit.txt</span>
<span class="line">banana</span>
<span class="line">waxberry</span>
<span class="line">grape</span>
<span class="line">apple</span>
<span class="line">watermelon</span>
<span class="line">orange</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除第3行。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# sed &#39;3d&#39; fruit.txt</span>
<span class="line">banana</span>
<span class="line">grape</span>
<span class="line">watermelon</span>
<span class="line">orange</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除第2行到第4行。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# sed &#39;2,4d&#39; fruit.txt</span>
<span class="line">banana</span>
<span class="line">orange</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将文本中的字符a替换为@。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# sed &#39;s#a#@#&#39; fruit.txt </span>
<span class="line">b@nana</span>
<span class="line">gr@pe</span>
<span class="line">@pple</span>
<span class="line">w@termelon</span>
<span class="line">or@nge</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将文本中的字符a替换为@，使用全局模式。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# sed &#39;s#a#@#g&#39; fruit.txt </span>
<span class="line">b@n@n@</span>
<span class="line">gr@pe</span>
<span class="line">@pple</span>
<span class="line">w@termelon</span>
<span class="line">or@nge</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>模式匹配和处理语言 - <strong>awk</strong>。</p><p>awk是一种编程语言，也是Linux系统中处理文本最为强大的工具，它的作者之一和现在的维护者就是之前提到过的Brian Kernighan（ken和dmr最亲密的伙伴）。通过该命令可以从文本中提取出指定的列、用正则表达式从文本中取出我们想要的内容、显示指定的行以及进行统计和运算，总之它非常强大。</p><p>假设有一个名为fruit2.txt的文件，内容如下所示。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# cat fruit2.txt </span>
<span class="line">1       banana      120</span>
<span class="line">2       grape       500</span>
<span class="line">3       apple       1230</span>
<span class="line">4       watermelon  80</span>
<span class="line">5       orange      400</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示文件的第3行。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# awk &#39;NR==3&#39; fruit2.txt </span>
<span class="line">3       apple       1230</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>显示文件的第2列。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# awk &#39;{print $2}&#39; fruit2.txt </span>
<span class="line">banana</span>
<span class="line">grape</span>
<span class="line">apple</span>
<span class="line">watermelon</span>
<span class="line">orange</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示文件的最后一列。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# awk &#39;{print $NF}&#39; fruit2.txt </span>
<span class="line">120</span>
<span class="line">500</span>
<span class="line">1230</span>
<span class="line">80</span>
<span class="line">400</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出末尾数字大于等于300的行。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# awk &#39;{if($3 &gt;= 300) {print $0}}&#39; fruit2.txt </span>
<span class="line">2       grape       500</span>
<span class="line">3       apple       1230</span>
<span class="line">5       orange      400</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面展示的只是awk命令的冰山一角，更多的内容留给读者自己在实践中去探索。</p></li></ol><h3 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h3><ol><li><p>创建和删除用户 - <strong>useradd</strong> / <strong>userdel</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root home]# useradd hellokitty</span>
<span class="line">[root home]# userdel hellokitty</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-d</code> - 创建用户时为用户指定用户主目录</li><li><code>-g</code> - 创建用户时指定用户所属的用户组</li></ul></li><li><p>创建和删除用户组 - <strong>groupadd</strong> / <strong>groupdel</strong>。</p><blockquote><p>说明：用户组主要是为了方便对一个组里面所有用户的管理。</p></blockquote></li><li><p>修改密码 - <strong>passwd</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# passwd hellokitty</span>
<span class="line">New password: </span>
<span class="line">Retype new password: </span>
<span class="line">passwd: all authentication tokens updated successfully.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：输入密码和确认密码没有回显且必须一气呵成的输入完成（不能使用退格键），密码和确认密码需要一致。如果使用<code>passwd</code>命令时没有指定命令作用的对象，则表示要修改当前用户的密码。如果想批量修改用户密码，可以使用<code>chpasswd</code>命令。</p></blockquote><ul><li><code>-l</code> / <code>-u</code> - 锁定/解锁用户。</li><li><code>-d</code> - 清除用户密码。</li><li><code>-e</code> - 设置密码立即过期，用户登录时会强制要求修改密码。</li><li><code>-i</code> - 设置密码过期多少天以后禁用该用户。</li></ul></li><li><p>查看和修改密码有效期 - <strong>chage</strong>。</p><p>设置hellokitty用户100天后必须修改密码，过期前15天通知该用户，过期后7天禁用该用户。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">chage -M 100 -W 15 -I 7 hellokitty</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>切换用户 - <strong>su</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# su hellokitty</span>
<span class="line">[hellokitty root]$</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>以管理员身份执行命令 - <strong>sudo</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[hellokitty ~]$ ls /root</span>
<span class="line">ls: cannot open directory /root: Permission denied</span>
<span class="line">[hellokitty ~]$ sudo ls /root</span>
<span class="line">[sudo] password for hellokitty:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：如果希望用户能够以管理员身份执行命令，用户必须要出现在sudoers名单中，sudoers文件在 <code>/etc</code>目录下，如果希望直接编辑该文件也可以使用下面的命令。</p></blockquote></li><li><p>编辑sudoers文件 - <strong>visudo</strong>。</p><p>这里使用的编辑器是vi，关于vi的知识在后面有讲解。该文件的部分内容如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">## Allow root to run any commands anywhere </span>
<span class="line">root    ALL=(ALL)   ALL</span>
<span class="line"></span>
<span class="line">## Allows members of the &#39;sys&#39; group to run networking, software, </span>
<span class="line">## service management apps and more.</span>
<span class="line"># %sys ALL = NETWORKING, SOFTWARE, SERVICES, STORAGE, DELEGATING, PROCESSES, LOCATE, DRIVERS</span>
<span class="line">## Allows people in group wheel to run all commands</span>
<span class="line">%wheel  ALL=(ALL)   ALL</span>
<span class="line"></span>
<span class="line">## Same thing without a password</span>
<span class="line"># %wheel    ALL=(ALL)   NOPASSWD: ALL</span>
<span class="line"></span>
<span class="line">## Allows members of the users group to mount and unmount the</span>
<span class="line">## cdrom as root</span>
<span class="line"># %users  ALL=/sbin/mount /mnt/cdrom, /sbin/umount /mnt/cdrom</span>
<span class="line"></span>
<span class="line">## Allows members of the users group to shutdown this system</span>
<span class="line"># %users  localhost=/sbin/shutdown -h now</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>显示用户与用户组的信息 - <strong>id</strong>。</p></li><li><p>给其他用户发消息 -<strong>write</strong> / <strong>wall</strong>。</p><p>发送方：</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# write hellokitty</span>
<span class="line">Dinner is on me.</span>
<span class="line">Call me at 6pm.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接收方：</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[hellokitty ~]$ </span>
<span class="line">Message from root on pts/0 at 17:41 ...</span>
<span class="line">Dinner is on me.</span>
<span class="line">Call me at 6pm.</span>
<span class="line">EOF</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看/设置是否接收其他用户发送的消息 - <strong>mesg</strong>。</p></li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[hellokitty ~]$ mesg</span>
<span class="line">is y</span>
<span class="line">[hellokitty ~]$ mesg n</span>
<span class="line">[hellokitty ~]$ mesg</span>
<span class="line">is n</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件系统" tabindex="-1"><a class="header-anchor" href="#文件系统"><span>文件系统</span></a></h3><h4 id="文件和路径" tabindex="-1"><a class="header-anchor" href="#文件和路径"><span>文件和路径</span></a></h4><ol><li>命名规则：文件名的最大长度与文件系统类型有关，一般情况下，文件名不应该超过255个字符，虽然绝大多数的字符都可以用于文件名，但是最好使用英文大小写字母、数字、下划线、点这样的符号。文件名中虽然可以使用空格，但应该尽可能避免使用空格，否则在输入文件名时需要用将文件名放在双引号中或者通过<code>\\</code>对空格进行转义。</li><li>扩展名：在Linux系统下文件的扩展名是可选的，但是使用扩展名有助于对文件内容的理解。有些应用程序要通过扩展名来识别文件，但是更多的应用程序并不依赖文件的扩展名，就像<code>file</code>命令在识别文件时并不是依据扩展名来判定文件的类型。</li><li>隐藏文件：以点开头的文件在Linux系统中是隐藏文件（不可见文件）。</li></ol><h4 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h4><ol><li>/bin - 基本命令的二进制文件。</li><li>/boot - 引导加载程序的静态文件。</li><li>/dev - 设备文件。</li><li><strong>/etc</strong> - 配置文件。</li><li>/home - 普通用户主目录的父目录。</li><li>/lib - 共享库文件。</li><li>/lib64 - 共享64位库文件。</li><li>/lost+found - 存放未链接文件。</li><li>/media - 自动识别设备的挂载目录。</li><li>/mnt - 临时挂载文件系统的挂载点。</li><li>/opt - 可选插件软件包安装位置。</li><li>/proc - 内核和进程信息。</li><li><strong>/root</strong> - 超级管理员用户主目录。</li><li>/run - 存放系统运行时需要的东西。</li><li>/sbin - 超级用户的二进制文件。</li><li>/sys - 设备的伪文件系统。</li><li>/tmp - 临时文件夹。</li><li><strong>/usr</strong> - 用户应用目录。</li><li>/var - 变量数据目录。</li></ol><h4 id="访问权限" tabindex="-1"><a class="header-anchor" href="#访问权限"><span>访问权限</span></a></h4><ol><li><p><strong>chmod</strong> - 改变文件模式比特。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# ls -l</span>
<span class="line">...</span>
<span class="line">-rw-r--r--  1 root       root 211878 Jun 19 16:06 sohu.html</span>
<span class="line">...</span>
<span class="line">[root ~]# chmod g+w,o+w sohu.html</span>
<span class="line">[root ~]# ls -l</span>
<span class="line">...</span>
<span class="line">-rw-rw-rw-  1 root       root 211878 Jun 19 16:06 sohu.html</span>
<span class="line">...</span>
<span class="line">[root ~]# chmod 644 sohu.html</span>
<span class="line">[root ~]# ls -l</span>
<span class="line">...</span>
<span class="line">-rw-r--r--  1 root       root 211878 Jun 19 16:06 sohu.html</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：通过上面的例子可以看出，用<code>chmod</code>改变文件模式比特有两种方式：一种是字符设定法，另一种是数字设定法。除了<code>chmod</code>之外，可以通过<code>umask</code>来设定哪些权限将在新文件的默认权限中被删除。</p></blockquote><p>长格式查看目录或文件时显示结果及其对应权限的数值如下表所示。</p><p><img src="`+c+`" alt=""></p></li><li><p><strong>chown</strong> - 改变文件所有者。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# ls -l</span>
<span class="line">...</span>
<span class="line">-rw-r--r--  1 root root     54 Jun 20 10:06 readme.txt</span>
<span class="line">...</span>
<span class="line">[root ~]# chown hellokitty readme.txt</span>
<span class="line">[root ~]# ls -l</span>
<span class="line">...</span>
<span class="line">-rw-r--r--  1 hellokitty root     54 Jun 20 10:06 readme.txt</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>chgrp</strong> - 改变用户组。</p></li></ol><h4 id="磁盘管理" tabindex="-1"><a class="header-anchor" href="#磁盘管理"><span>磁盘管理</span></a></h4><ol><li><p>列出文件系统的磁盘使用状况 - <strong>df</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# df -h</span>
<span class="line">Filesystem      Size  Used Avail Use% Mounted on</span>
<span class="line">/dev/vda1        40G  5.0G   33G  14% /</span>
<span class="line">devtmpfs        486M     0  486M   0% /dev</span>
<span class="line">tmpfs           497M     0  497M   0% /dev/shm</span>
<span class="line">tmpfs           497M  356K  496M   1% /run</span>
<span class="line">tmpfs           497M     0  497M   0% /sys/fs/cgroup</span>
<span class="line">tmpfs           100M     0  100M   0% /run/user/0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>磁盘分区表操作 - <strong>fdisk</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# fdisk -l</span>
<span class="line">Disk /dev/vda: 42.9 GB, 42949672960 bytes, 83886080 sectors</span>
<span class="line">Units = sectors of 1 * 512 = 512 bytes</span>
<span class="line">Sector size (logical/physical): 512 bytes / 512 bytes</span>
<span class="line">I/O size (minimum/optimal): 512 bytes / 512 bytes</span>
<span class="line">Disk label type: dos</span>
<span class="line">Disk identifier: 0x000a42f4</span>
<span class="line">   Device Boot      Start         End      Blocks   Id  System</span>
<span class="line">/dev/vda1   *        2048    83884031    41940992   83  Linux</span>
<span class="line">Disk /dev/vdb: 21.5 GB, 21474836480 bytes, 41943040 sectors</span>
<span class="line">Units = sectors of 1 * 512 = 512 bytes</span>
<span class="line">Sector size (logical/physical): 512 bytes / 512 bytes</span>
<span class="line">I/O size (minimum/optimal): 512 bytes / 512 bytes</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>磁盘分区工具 - <strong>parted</strong>。</p></li><li><p>格式化文件系统 - <strong>mkfs</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# mkfs -t ext4 -v /dev/sdb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><code>-t</code> - 指定文件系统的类型。</li><li><code>-c</code> - 创建文件系统时检查磁盘损坏情况。</li><li><code>-v</code> - 显示详细信息。</li></ul></li><li><p>文件系统检查 - <strong>fsck</strong>。</p></li><li><p>转换或拷贝文件 - <strong>dd</strong>。</p></li><li><p>挂载/卸载 - <strong>mount</strong> / <strong>umount</strong>。</p></li><li><p>创建/激活/关闭交换分区 - <strong>mkswap</strong> / <strong>swapon</strong> / <strong>swapoff</strong>。</p></li></ol><blockquote><p><strong>说明</strong>：执行上面这些命令会带有一定的风险，如果不清楚这些命令的用法，最好不用随意使用，在使用的过程中，最好对照参考资料进行操作，并在操作前确认是否要这么做。</p></blockquote><h3 id="编辑器-vim" tabindex="-1"><a class="header-anchor" href="#编辑器-vim"><span>编辑器 - vim</span></a></h3><ol><li><p>启动vim。可以通过<code>vi</code>或<code>vim</code>命令来启动vim，启动时可以指定文件名来打开一个文件，如果没有指定文件名，也可以在保存的时候指定文件名。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# vim guess.py</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>命令模式、编辑模式和末行模式：启动vim进入的是命令模式（也称为Normal模式），在命令模式下输入英文字母<code>i</code>会进入编辑模式（Insert模式），屏幕下方出现<code>-- INSERT --</code>提示；在编辑模式下按下<code>Esc</code>会回到命令模式，此时如果输入英文<code>:</code>会进入末行模式，在末行模式下输入<code>q!</code>可以在不保存当前工作的情况下强行退出vim；在命令模式下输入<code>v</code>会进入可视模式（Visual模式），可以用光标选择一个区域再完成对应的操作。</p></li><li><p>保存和退出vim：在命令模式下输入<code>:</code> 进入末行模式，输入<code>wq</code>可以实现保存退出；如果想放弃编辑的内容输入<code>q!</code>强行退出，这一点刚才已经提到过了；在命令模式下也可以直接输入<code>ZZ</code>实现保存退出。如果只想保存文件不退出，那么可以在末行模式下输入<code>w</code>；可以在<code>w</code>后面输入空格再指定要保存的文件名。</p></li><li><p>光标操作。</p><ul><li>在命令模式下可以通过<code>h</code>、<code>j</code>、<code>k</code>、<code>l</code>来控制光标向左、下、上、右的方向移动，可以在字母前输入数字来表示移动的距离，例如：<code>10h</code>表示向左移动10个字符。</li><li>在命令模式下可以通过<code>Ctrl+y</code>和<code>Ctrl+e</code>来实现向上、向下滚动一行文本的操作，可以通过<code>Ctrl+f</code>和<code>Ctrl+b</code>来实现向前和向后翻页的操作。</li><li>在命令模式下可以通过输入英文字母<code>G</code>将光标移到文件的末尾，可以通过<code>gg</code>将光标移到文件的开始，也可以通过在<code>G</code>前输入数字来将光标移动到指定的行。</li></ul></li><li><p>文本操作。</p><ul><li>删除：在命令模式下可以用<code>dd</code>来删除整行；可以在<code>dd</code>前加数字来指定删除的行数；可以用<code>d$</code>来实现删除从光标处删到行尾的操作，也可以通过<code>d0</code>来实现从光标处删到行首的操作；如果想删除一个单词，可以使用<code>dw</code>；如果要删除全文，可以在输入<code>:%d</code>（其中<code>:</code>用来从命令模式进入末行模式）。</li><li>复制和粘贴：在命令模式下可以用<code>yy</code>来复制整行；可以在<code>yy</code>前加数字来指定复制的行数；可以通过<code>p</code>将复制的内容粘贴到光标所在的地方。</li><li>撤销和恢复：在命令模式下输入<code>u</code>可以撤销之前的操作；通过<code>Ctrl+r</code>可以恢复被撤销的操作。</li><li>对内容进行排序：在命令模式下输入<code>%!sort</code>。</li></ul></li><li><p>查找和替换。</p><ul><li>查找操作需要输入<code>/</code>进入末行模式并提供正则表达式来匹配与之对应的内容，例如：<code>/doc.*\\.</code>，输入<code>n</code>来向前搜索，也可以输入<code>N</code>来向后搜索。</li><li>替换操作需要输入<code>:</code>进入末行模式并指定搜索的范围、正则表达式以及替换后的内容和匹配选项，例如：<code>:1,$s/doc.*/hello/gice</code>，其中： <ul><li><code>g</code> - global：全局匹配。</li><li><code>i</code> - ignore case：忽略大小写匹配。</li><li><code>c</code> - confirm：替换时需要确认。</li><li><code>e</code> - error：忽略错误。</li></ul></li></ul></li><li><p>参数设定：在输入<code>:</code>进入末行模式后可以对vim进行设定。</p><ul><li><p>设置Tab键的空格数：<code>set ts=4</code></p></li><li><p>设置显示/不显示行号：<code>set nu</code> / <code>set nonu</code></p></li><li><p>设置启用/关闭高亮语法：<code>syntax on</code> / <code>syntax off</code></p></li><li><p>设置显示标尺（光标所在的行和列）： <code>set ruler</code></p></li><li><p>设置启用/关闭搜索结果高亮：<code>set hls</code> / <code>set nohls</code></p><blockquote><p>说明：如果希望上面的这些设定在每次启动vim时都能自动生效，需要将这些设定写到用户主目录下的.vimrc文件中。</p></blockquote></li></ul></li><li><p>高级技巧</p><ul><li><p>比较多个文件。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# vim -d foo.txt bar.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="`+p+`" alt=""></p></li><li><p>打开多个文件。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# vim foo.txt bar.txt hello.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>启动vim后只有一个窗口显示的是foo.txt，可以在末行模式中输入<code>ls</code>查看到打开的三个文件，也可以在末行模式中输入<code>b &lt;num&gt;</code>来显示另一个文件，例如可以用<code>:b 2</code>将bar.txt显示出来，可以用<code>:b 3</code>将hello.txt显示出来。</p></li><li><p>拆分和切换窗口。</p><p>可以在末行模式中输入<code>sp</code>或<code>vs</code>来实现对窗口的水平或垂直拆分，这样我们就可以同时打开多个编辑窗口，通过按两次<code>Ctrl+w</code>就可以实现编辑窗口的切换，在一个窗口中执行退出操作只会关闭对应的窗口，其他的窗口继续保留。</p><p><img src="`+o+'" alt=""></p></li><li><p>映射快捷键：在vim下可以将一些常用操作映射为快捷键来提升工作效率。</p><ul><li><p>例子1：在命令模式下输入<code>F4</code>执行从第一行开始删除10000行代码的操作。</p><p><code>:map &lt;F4&gt; gg10000dd</code>。</p><p>例子2：在编辑模式下输入<code>__main</code>直接补全为<code>if __name__ == &#39;__main__&#39;:</code>。</p><p><code>:inoremap __main if __name__ == &#39;__main__&#39;:</code></p></li></ul><blockquote><p>说明：上面例子2的<code>inoremap</code>中的<code>i</code>表示映射的键在编辑模式使用， <code>nore</code>表示不要递归，这一点非常重要，否则如果键对应的内容中又出现键本身，就会引发递归（相当于进入了死循环）。如果希望映射的快捷键每次启动vim时都能生效，需要将映射写到用户主目录下的.vimrc文件中。</p></blockquote></li><li><p>录制宏。</p><ul><li><p>在命令模式下输入<code>qa</code>开始录制宏（其中<code>a</code>是寄存器的名字，也可以是其他英文字母或0-9的数字）。</p></li><li><p>执行你的操作（光标操作、编辑操作等），这些操作都会被录制下来。</p></li><li><p>如果录制的操作已经完成了，按<code>q</code>结束录制。</p></li><li><p>通过<code>@a</code>（<code>a</code>是刚才使用的寄存器的名字）播放宏，如果要多次执行宏可以在前面加数字，例如<code>100@a</code>表示将宏播放100次。</p></li><li><p>可以试一试下面的例子来体验录制宏的操作，该例子来源于<a href="https://harttle.land/tags.html#Vim" target="_blank" rel="noopener noreferrer">Harttle Land网站</a>，该网站上提供了很多关于vim的使用技巧，有兴趣的可以了解一下。</p><p><img src="'+v+`" alt=""></p></li></ul></li></ul></li></ol><h3 id="软件安装和配置" tabindex="-1"><a class="header-anchor" href="#软件安装和配置"><span>软件安装和配置</span></a></h3><h4 id="使用包管理工具" tabindex="-1"><a class="header-anchor" href="#使用包管理工具"><span>使用包管理工具</span></a></h4><ol><li><strong>yum</strong> - Yellowdog Updater Modified。 <ul><li><code>yum search</code>：搜索软件包，例如<code>yum search nginx</code>。</li><li><code>yum list installed</code>：列出已经安装的软件包，例如<code>yum list installed | grep zlib</code>。</li><li><code>yum install</code>：安装软件包，例如<code>yum install nginx</code>。</li><li><code>yum remove</code>：删除软件包，例如<code>yum remove nginx</code>。</li><li><code>yum update</code>：更新软件包，例如<code>yum update</code>可以更新所有软件包，而<code>yum update tar</code>只会更新tar。</li><li><code>yum check-update</code>：检查有哪些可以更新的软件包。</li><li><code>yum info</code>：显示软件包的相关信息，例如<code>yum info nginx</code>。</li></ul></li><li><strong>rpm</strong> - Redhat Package Manager。 <ul><li>安装软件包：<code>rpm -ivh &lt;packagename&gt;.rpm</code>。</li><li>移除软件包：<code>rpm -e &lt;packagename&gt;</code>。</li><li>查询软件包：<code>rpm -qa</code>，例如可以用<code>rpm -qa | grep mysql</code>来检查是否安装了MySQL相关的软件包。</li></ul></li></ol><p>下面以Nginx为例，演示如何使用yum安装软件。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# yum -y install nginx</span>
<span class="line">...</span>
<span class="line">Installed:</span>
<span class="line">  nginx.x86_64 1:1.12.2-2.el7</span>
<span class="line">Dependency Installed:</span>
<span class="line">  nginx-all-modules.noarch 1:1.12.2-2.el7</span>
<span class="line">  nginx-mod-http-geoip.x86_64 1:1.12.2-2.el7</span>
<span class="line">  nginx-mod-http-image-filter.x86_64 1:1.12.2-2.el7</span>
<span class="line">  nginx-mod-http-perl.x86_64 1:1.12.2-2.el7</span>
<span class="line">  nginx-mod-http-xslt-filter.x86_64 1:1.12.2-2.el7</span>
<span class="line">  nginx-mod-mail.x86_64 1:1.12.2-2.el7</span>
<span class="line">  nginx-mod-stream.x86_64 1:1.12.2-2.el7</span>
<span class="line">Complete!</span>
<span class="line">[root ~]# yum info nginx</span>
<span class="line">Loaded plugins: fastestmirror</span>
<span class="line">Loading mirror speeds from cached hostfile</span>
<span class="line">Installed Packages</span>
<span class="line">Name        : nginx</span>
<span class="line">Arch        : x86_64</span>
<span class="line">Epoch       : 1</span>
<span class="line">Version     : 1.12.2</span>
<span class="line">Release     : 2.el7</span>
<span class="line">Size        : 1.5 M</span>
<span class="line">Repo        : installed</span>
<span class="line">From repo   : epel</span>
<span class="line">Summary     : A high performance web server and reverse proxy server</span>
<span class="line">URL         : http://nginx.org/</span>
<span class="line">License     : BSD</span>
<span class="line">Description : Nginx is a web server and a reverse proxy server for HTTP, SMTP, POP3 and</span>
<span class="line">            : IMAP protocols, with a strong focus on high concurrency, performance and low</span>
<span class="line">            : memory usage.</span>
<span class="line">[root ~]# nginx -v</span>
<span class="line">nginx version: nginx/1.12.2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>移除Nginx。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# yum -y remove nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下面以MySQL为例，演示如何使用rpm安装软件。要安装MySQL需要先到<a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">MySQL官方网站</a>下载对应的<a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noopener noreferrer">RPM文件</a>，当然要选择和你使用的Linux系统对应的版本。MySQL现在是Oracle公司旗下的产品，在MySQL被收购后，MySQL的作者重新制作了一个MySQL的分支MariaDB，可以通过yum进行安装。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root mysql]# ls</span>
<span class="line">mysql-community-client-5.7.22-1.el7.x86_64.rpm</span>
<span class="line">mysql-community-common-5.7.22-1.el7.x86_64.rpm</span>
<span class="line">mysql-community-libs-5.7.22-1.el7.x86_64.rpm</span>
<span class="line">mysql-community-server-5.7.22-1.el7.x86_64.rpm</span>
<span class="line">[root mysql]# yum -y remove mariadb-libs</span>
<span class="line">[root mysql]# yum -y install libaio</span>
<span class="line">[root mysql]#rpm -ivh mysql-community-common-5.7.26-1.el7.x86_64.rpm</span>
<span class="line">...</span>
<span class="line">[root mysql]#rpm -ivh mysql-community-libs-5.7.26-1.el7.x86_64.rpm</span>
<span class="line">...</span>
<span class="line">[root mysql]#rpm -ivh mysql-community-client-5.7.26-1.el7.x86_64.rpm</span>
<span class="line">...</span>
<span class="line">[root mysql]#rpm -ivh mysql-community-server-5.7.26-1.el7.x86_64.rpm</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：由于MySQL和<a href="https://mariadb.org/" target="_blank" rel="noopener noreferrer">MariaDB</a>的底层依赖库是有冲突的，所以上面我们首先用<code>yum</code>移除了名为mariadb-libs的依赖库并安装了名为libaio支持异步I/O操作的依赖库。关于MySQL和MariaDB之间的关系，可以阅读<a href="https://zh.wikipedia.org/wiki/MariaDB" target="_blank" rel="noopener noreferrer">维基百科</a>上关于MariaDB的介绍。</p></blockquote><p>移除安装的MySQL。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# rpm -qa | grep mysql | xargs rpm -e</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="下载解压配置环境变量" tabindex="-1"><a class="header-anchor" href="#下载解压配置环境变量"><span>下载解压配置环境变量</span></a></h4><p>下面以安装MongoDB为例，演示这类软件应该如何安装。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-3.6.5.tgz</span>
<span class="line">--2018-06-21 18:32:53--  https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-3.6.5.tgz</span>
<span class="line">Resolving fastdl.mongodb.org (fastdl.mongodb.org)... 52.85.83.16, 52.85.83.228, 52.85.83.186, ...</span>
<span class="line">Connecting to fastdl.mongodb.org (fastdl.mongodb.org)|52.85.83.16|:443... connected.</span>
<span class="line">HTTP request sent, awaiting response... 200 OK</span>
<span class="line">Length: 100564462 (96M) [application/x-gzip]</span>
<span class="line">Saving to: ‘mongodb-linux-x86_64-rhel70-3.6.5.tgz’</span>
<span class="line">100%[==================================================&gt;] 100,564,462  630KB/s   in 2m 9s</span>
<span class="line">2018-06-21 18:35:04 (760 KB/s) - ‘mongodb-linux-x86_64-rhel70-3.6.5.tgz’ saved [100564462/100564462]</span>
<span class="line">[root ~]# gunzip mongodb-linux-x86_64-rhel70-3.6.5.tgz</span>
<span class="line">[root ~]# tar -xvf mongodb-linux-x86_64-rhel70-3.6.5.tar</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/README</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/THIRD-PARTY-NOTICES</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/MPL-2</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/GNU-AGPL-3.0</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/mongodump</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/mongorestore</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/mongoexport</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/mongoimport</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/mongostat</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/mongotop</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/bsondump</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/mongofiles</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/mongoreplay</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/mongoperf</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/mongod</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/mongos</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/mongo</span>
<span class="line">mongodb-linux-x86_64-rhel70-3.6.5/bin/install_compass</span>
<span class="line">[root ~]# vim .bash_profile</span>
<span class="line">...</span>
<span class="line">PATH=$PATH:$HOME/bin:$HOME/mongodb-linux-x86_64-rhel70-3.6.5/bin</span>
<span class="line">export PATH</span>
<span class="line">...</span>
<span class="line">[root ~]# source .bash_profile</span>
<span class="line">[root ~]# mongod --version</span>
<span class="line">db version v3.6.5</span>
<span class="line">git version: a20ecd3e3a174162052ff99913bc2ca9a839d618</span>
<span class="line">OpenSSL version: OpenSSL 1.0.1e-fips 11 Feb 2013</span>
<span class="line">allocator: tcmalloc</span>
<span class="line">modules: none</span>
<span class="line">build environment:</span>
<span class="line">    distmod: rhel70</span>
<span class="line">    distarch: x86_64</span>
<span class="line">    target_arch: x86_64</span>
<span class="line">[root ~]# mongo --version</span>
<span class="line">MongoDB shell version v3.6.5</span>
<span class="line">git version: a20ecd3e3a174162052ff99913bc2ca9a839d618</span>
<span class="line">OpenSSL version: OpenSSL 1.0.1e-fips 11 Feb 2013</span>
<span class="line">allocator: tcmalloc</span>
<span class="line">modules: none</span>
<span class="line">build environment:</span>
<span class="line">    distmod: rhel70</span>
<span class="line">    distarch: x86_64</span>
<span class="line">    target_arch: x86_64</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：当然也可以通过yum来安装MongoDB，具体可以参照<a href="https://docs.mongodb.com/master/administration/install-on-linux/" target="_blank" rel="noopener noreferrer">官方网站</a>上给出的说明。</p></blockquote><h4 id="源代码构建安装" tabindex="-1"><a class="header-anchor" href="#源代码构建安装"><span>源代码构建安装</span></a></h4><ol><li><p>安装Python 3.6。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# yum install gcc</span>
<span class="line">[root ~]# wget https://www.python.org/ftp/python/3.6.5/Python-3.6.5.tgz</span>
<span class="line">[root ~]# gunzip Python-3.6.5.tgz</span>
<span class="line">[root ~]# tar -xvf Python-3.6.5.tar</span>
<span class="line">[root ~]# cd Python-3.6.5</span>
<span class="line">[root ~]# ./configure --prefix=/usr/local/python36 --enable-optimizations</span>
<span class="line">[root ~]# yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel</span>
<span class="line">[root ~]# make &amp;&amp; make install</span>
<span class="line">...</span>
<span class="line">[root ~]# ln -s /usr/local/python36/bin/python3.6 /usr/bin/python3</span>
<span class="line">[root ~]# python3 --version</span>
<span class="line">Python 3.6.5</span>
<span class="line">[root ~]# python3 -m pip install -U pip</span>
<span class="line">[root ~]# pip3 --version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：上面在安装好Python之后还需要注册PATH环境变量，将Python安装路径下bin文件夹的绝对路径注册到PATH环境变量中。注册环境变量可以修改用户主目录下的.bash_profile或者/etc目录下的profile文件，二者的区别在于前者相当于是用户环境变量，而后者相当于是系统环境变量。</p></blockquote></li><li><p>安装Redis-3.2.12。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# wget http://download.redis.io/releases/redis-3.2.12.tar.gz</span>
<span class="line">[root ~]# gunzip redis-3.2.12.tar.gz</span>
<span class="line">[root ~]# tar -xvf redis-3.2.12.tar</span>
<span class="line">[root ~]# cd redis-3.2.12</span>
<span class="line">[root ~]# make &amp;&amp; make install</span>
<span class="line">[root ~]# redis-server --version</span>
<span class="line">Redis server v=3.2.12 sha=00000000:0 malloc=jemalloc-4.0.3 bits=64 build=5bc5cd3c03d6ceb6</span>
<span class="line">[root ~]# redis-cli --version</span>
<span class="line">redis-cli 3.2.12</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="配置服务" tabindex="-1"><a class="header-anchor" href="#配置服务"><span>配置服务</span></a></h3><p>我们可以Linux系统下安装和配置各种服务，也就是说我们可以把Linux系统打造成数据库服务器、Web服务器、缓存服务器、文件服务器、消息队列服务器等等。Linux下的大多数服务都被设置为守护进程（驻留在系统后台运行，但不会因为服务还在运行而导致Linux无法停止运行），所以我们安装的服务通常名字后面都有一个字母<code>d</code>，它是英文单词<code>daemon</code>的缩写，例如：防火墙服务叫firewalld，我们之前安装的MySQL服务叫mysqld，Apache服务器叫httpd等。在安装好服务之后，可以使用<code>systemctl</code>命令或<code>service</code>命令来完成对服务的启动、停止等操作，具体操作如下所示。</p><ol><li><p>启动防火墙服务。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# systemctl start firewalld</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>终止防火墙服务。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# systemctl stop firewalld</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>重启防火墙服务。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# systemctl restart firewalld</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>查看防火墙服务状态。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# systemctl status firewalld</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>设置/禁用防火墙服务开机自启。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# systemctl enable firewalld</span>
<span class="line">Created symlink from /etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service to /usr/lib/systemd/system/firewalld.service.</span>
<span class="line">Created symlink from /etc/systemd/system/multi-user.target.wants/firewalld.service to /usr/lib/systemd/system/firewalld.service.</span>
<span class="line">[root ~]# systemctl disable firewalld</span>
<span class="line">Removed symlink /etc/systemd/system/multi-user.target.wants/firewalld.service.</span>
<span class="line">Removed symlink /etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="计划任务" tabindex="-1"><a class="header-anchor" href="#计划任务"><span>计划任务</span></a></h3><ol><li><p>在指定的时间执行命令。</p><ul><li><strong>at</strong> - 将任务排队，在指定的时间执行。</li><li><strong>atq</strong> - 查看待执行的任务队列。</li><li><strong>atrm</strong> - 从队列中删除待执行的任务。</li></ul><p>指定3天以后下午5点要执行的任务。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# at 5pm+3days</span>
<span class="line">at&gt; rm -f /root/*.html</span>
<span class="line">at&gt; &lt;EOT&gt;</span>
<span class="line">job 9 at Wed Jun  5 17:00:00 2019</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看待执行的任务队列。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# atq</span>
<span class="line">9       Wed Jun  5 17:00:00 2019 a root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>从队列中删除指定的任务。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]$ atrm 9</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>计划任务表 - <strong>crontab</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# crontab -e</span>
<span class="line">* * * * * echo &quot;hello, world!&quot; &gt;&gt; /root/hello.txt</span>
<span class="line">59 23 * * * rm -f /root/*.log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：输入<code>crontab -e</code>命令会打开vim来编辑Cron表达式并指定触发的任务，上面我们定制了两个计划任务，一个是每分钟向/root目录下的hello.txt中追加输出<code>hello, world!</code>；另一个是每天23时59分执行删除/root目录下以log为后缀名的文件。如果不知道Cron表达式如何书写，可以参照/etc/crontab文件中的提示（下面会讲到）或者用搜索引擎找一下“Cron表达式在线生成器”来生成Cron表达式。</p></blockquote><p>和crontab相关的文件在<code>/etc</code>目录下，通过修改<code>/etc</code>目录下的crontab文件也能够定制计划任务。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# cd /etc</span>
<span class="line">[root etc]# ls -l | grep cron</span>
<span class="line">-rw-------.  1 root root      541 Aug  3  2017 anacrontab</span>
<span class="line">drwxr-xr-x.  2 root root     4096 Mar 27 11:56 cron.d</span>
<span class="line">drwxr-xr-x.  2 root root     4096 Mar 27 11:51 cron.daily</span>
<span class="line">-rw-------.  1 root root        0 Aug  3  2017 cron.deny</span>
<span class="line">drwxr-xr-x.  2 root root     4096 Mar 27 11:50 cron.hourly</span>
<span class="line">drwxr-xr-x.  2 root root     4096 Jun 10  2014 cron.monthly</span>
<span class="line">-rw-r--r--   1 root root      493 Jun 23 15:09 crontab</span>
<span class="line">drwxr-xr-x.  2 root root     4096 Jun 10  2014 cron.weekly</span>
<span class="line">[root etc]# vim crontab</span>
<span class="line">  1 SHELL=/bin/bash</span>
<span class="line">  2 PATH=/sbin:/bin:/usr/sbin:/usr/bin</span>
<span class="line">  3 MAILTO=root</span>
<span class="line">  4</span>
<span class="line">  5 # For details see man 4 crontabs</span>
<span class="line">  6</span>
<span class="line">  7 # Example of job definition:</span>
<span class="line">  8 # .---------------- minute (0 - 59)</span>
<span class="line">  9 # |  .------------- hour (0 - 23)</span>
<span class="line"> 10 # |  |  .---------- day of month (1 - 31)</span>
<span class="line"> 11 # |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...</span>
<span class="line"> 12 # |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat</span>
<span class="line"> 13 # |  |  |  |  |</span>
<span class="line"> 14 # *  *  *  *  * user-name  command to be executed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="网络访问和管理" tabindex="-1"><a class="header-anchor" href="#网络访问和管理"><span>网络访问和管理</span></a></h3><ol><li><p>安全远程连接 - <strong>ssh</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]$ ssh root@120.77.222.217</span>
<span class="line">The authenticity of host &#39;120.77.222.217 (120.77.222.217)&#39; can&#39;t be established.</span>
<span class="line">ECDSA key fingerprint is SHA256:BhUhykv+FvnIL03I9cLRpWpaCxI91m9n7zBWrcXRa8w.</span>
<span class="line">ECDSA key fingerprint is MD5:cc:85:e9:f0:d7:07:1a:26:41:92:77:6b:7f:a0:92:65.</span>
<span class="line">Are you sure you want to continue connecting (yes/no)? yes</span>
<span class="line">Warning: Permanently added &#39;120.77.222.217&#39; (ECDSA) to the list of known hosts.</span>
<span class="line">root@120.77.222.217&#39;s password: </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过网络获取资源 - <strong>wget</strong>。</p><ul><li>-b 后台下载模式</li><li>-O 下载到指定的目录</li><li>-r 递归下载</li></ul></li><li><p>发送和接收邮件 - <strong>mail</strong>。</p></li><li><p>网络配置工具（旧） - <strong>ifconfig</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# ifconfig eth0</span>
<span class="line">eth0: flags=4163&lt;UP,BROADCAST,RUNNING,MULTICAST&gt;  mtu 1500</span>
<span class="line">        inet 172.18.61.250  netmask 255.255.240.0  broadcast 172.18.63.255</span>
<span class="line">        ether 00:16:3e:02:b6:46  txqueuelen 1000  (Ethernet)</span>
<span class="line">        RX packets 1067841  bytes 1296732947 (1.2 GiB)</span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 409912  bytes 43569163 (41.5 MiB)</span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>网络配置工具（新） - <strong>ip</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# ip address</span>
<span class="line">1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN qlen 1</span>
<span class="line">    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span>
<span class="line">    inet 127.0.0.1/8 scope host lo</span>
<span class="line">       valid_lft forever preferred_lft forever</span>
<span class="line">2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP qlen 1000</span>
<span class="line">    link/ether 00:16:3e:02:b6:46 brd ff:ff:ff:ff:ff:ff</span>
<span class="line">    inet 172.18.61.250/20 brd 172.18.63.255 scope global eth0</span>
<span class="line">       valid_lft forever preferred_lft forever</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>网络可达性检查 - <strong>ping</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# ping www.baidu.com -c 3</span>
<span class="line">PING www.a.shifen.com (220.181.111.188) 56(84) bytes of data.</span>
<span class="line">64 bytes from 220.181.111.188 (220.181.111.188): icmp_seq=1 ttl=51 time=36.3 ms</span>
<span class="line">64 bytes from 220.181.111.188 (220.181.111.188): icmp_seq=2 ttl=51 time=36.4 ms</span>
<span class="line">64 bytes from 220.181.111.188 (220.181.111.188): icmp_seq=3 ttl=51 time=36.4 ms</span>
<span class="line">--- www.a.shifen.com ping statistics ---</span>
<span class="line">3 packets transmitted, 3 received, 0% packet loss, time 2002ms</span>
<span class="line">rtt min/avg/max/mdev = 36.392/36.406/36.427/0.156 ms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>显示或管理路由表 - <strong>route</strong>。</p></li><li><p>查看网络服务和端口 - <strong>netstat</strong> / <strong>ss</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# netstat -nap | grep nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>网络监听抓包 - <strong>tcpdump</strong>。</p></li><li><p>安全文件拷贝 - <strong>scp</strong>。</p></li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# scp root@1.2.3.4:/root/guido.jpg hellokitty@4.3.2.1:/home/hellokitty/pic.jpg</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="11"><li><p>文件同步工具 - <strong>rsync</strong>。</p><blockquote><p>说明：使用<code>rsync</code>可以实现文件的自动同步，这个对于文件服务器来说相当重要。关于这个命令的用法，我们在后面讲项目部署的时候为大家详细说明。</p></blockquote></li><li><p>安全文件传输 - <strong>sftp</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# sftp root@1.2.3.4</span>
<span class="line">root@1.2.3.4&#39;s password:</span>
<span class="line">Connected to 1.2.3.4.</span>
<span class="line">sftp&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>help</code>：显示帮助信息。</p></li><li><p><code>ls</code>/<code>lls</code>：显示远端/本地目录列表。</p></li><li><p><code>cd</code>/<code>lcd</code>：切换远端/本地路径。</p></li><li><p><code>mkdir</code>/<code>lmkdir</code>：创建远端/本地目录。</p></li><li><p><code>pwd</code>/<code>lpwd</code>：显示远端/本地当前工作目录。</p></li><li><p><code>get</code>：下载文件。</p></li><li><p><code>put</code>：上传文件。</p></li><li><p><code>rm</code>：删除远端文件。</p></li><li><p><code>bye</code>/<code>exit</code>/<code>quit</code>：退出sftp。</p></li></ul></li></ol><h3 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理"><span>进程管理</span></a></h3><ol><li><p>查看进程 - <strong>ps</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# ps -ef</span>
<span class="line">UID        PID  PPID  C STIME TTY          TIME CMD</span>
<span class="line">root         1     0  0 Jun23 ?        00:00:05 /usr/lib/systemd/systemd --switched-root --system --deserialize 21</span>
<span class="line">root         2     0  0 Jun23 ?        00:00:00 [kthreadd]</span>
<span class="line">...</span>
<span class="line">[root ~]# ps -ef | grep mysqld</span>
<span class="line">root      4943  4581  0 22:45 pts/0    00:00:00 grep --color=auto mysqld</span>
<span class="line">mysql    25257     1  0 Jun25 ?        00:00:39 /usr/sbin/mysqld --daemonize --pid-file=/var/run/mysqld/mysqld.pid</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>显示进程状态树 - <strong>pstree</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# pstree</span>
<span class="line">systemd─┬─AliYunDun───18*[{AliYunDun}]</span>
<span class="line">        ├─AliYunDunUpdate───3*[{AliYunDunUpdate}]</span>
<span class="line">        ├─2*[agetty]</span>
<span class="line">        ├─aliyun-service───2*[{aliyun-service}]</span>
<span class="line">        ├─atd</span>
<span class="line">        ├─auditd───{auditd}</span>
<span class="line">        ├─dbus-daemon</span>
<span class="line">        ├─dhclient</span>
<span class="line">        ├─irqbalance</span>
<span class="line">        ├─lvmetad</span>
<span class="line">        ├─mysqld───28*[{mysqld}]</span>
<span class="line">        ├─nginx───2*[nginx]</span>
<span class="line">        ├─ntpd</span>
<span class="line">        ├─polkitd───6*[{polkitd}]</span>
<span class="line">        ├─rsyslogd───2*[{rsyslogd}]</span>
<span class="line">        ├─sshd───sshd───bash───pstree</span>
<span class="line">        ├─systemd-journal</span>
<span class="line">        ├─systemd-logind</span>
<span class="line">        ├─systemd-udevd</span>
<span class="line">        └─tuned───4*[{tuned}]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查找与指定条件匹配的进程 - <strong>pgrep</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]$ pgrep mysqld</span>
<span class="line">3584</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过进程号终止进程 - <strong>kill</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]$ kill -l</span>
<span class="line"> 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP</span>
<span class="line"> 6) SIGABRT      7) SIGBUS       8) SIGFPE       9) SIGKILL     10) SIGUSR1</span>
<span class="line">11) SIGSEGV     12) SIGUSR2     13) SIGPIPE     14) SIGALRM     15) SIGTERM</span>
<span class="line">16) SIGSTKFLT   17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP</span>
<span class="line">21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU     25) SIGXFSZ</span>
<span class="line">26) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGIO       30) SIGPWR</span>
<span class="line">31) SIGSYS      34) SIGRTMIN    35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3</span>
<span class="line">38) SIGRTMIN+4  39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8</span>
<span class="line">43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13</span>
<span class="line">48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12</span>
<span class="line">53) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7</span>
<span class="line">58) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2</span>
<span class="line">63) SIGRTMAX-1  64) SIGRTMAX</span>
<span class="line">[root ~]# kill 1234</span>
<span class="line">[root ~]# kill -9 1234</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过进程名终止进程 - <strong>killall</strong> / <strong>pkill</strong>。</p><p>结束名为mysqld的进程。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# pkill mysqld</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结束hellokitty用户的所有进程。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# pkill -u hellokitty</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>说明：这样的操作会让hellokitty用户和服务器断开连接。</p></blockquote></li><li><p>将进程置于后台运行。</p><ul><li><code>Ctrl+Z</code> - 快捷键，用于停止进程并置于后台。</li><li><code>&amp;</code> - 将进程置于后台运行。</li></ul><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# mongod &amp;</span>
<span class="line">[root ~]# redis-server</span>
<span class="line">...</span>
<span class="line">^Z</span>
<span class="line">[4]+  Stopped                 redis-server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查询后台进程 - <strong>jobs</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# jobs</span>
<span class="line">[2]   Running                 mongod &amp;</span>
<span class="line">[3]-  Stopped                 cat</span>
<span class="line">[4]+  Stopped                 redis-server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>让进程在后台继续运行 - <strong>bg</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# bg %4</span>
<span class="line">[4]+ redis-server &amp;</span>
<span class="line">[root ~]# jobs</span>
<span class="line">[2]   Running                 mongod &amp;</span>
<span class="line">[3]+  Stopped                 cat</span>
<span class="line">[4]-  Running                 redis-server &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将后台进程置于前台 - <strong>fg</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# fg %4</span>
<span class="line">redis-server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：置于前台的进程可以使用<code>Ctrl+C</code>来终止它。</p></blockquote></li><li><p>调整程序/进程运行时优先级 - <strong>nice</strong> / <strong>renice</strong>。</p></li><li><p>用户登出后进程继续工作 - <strong>nohup</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# nohup ping www.baidu.com &gt; result.txt &amp;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>跟踪进程系统调用情况 - <strong>strace</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# pgrep mysqld</span>
<span class="line">8803</span>
<span class="line">[root ~]# strace -c -p 8803</span>
<span class="line">strace: Process 8803 attached</span>
<span class="line">^Cstrace: Process 8803 detached</span>
<span class="line">% time     seconds  usecs/call     calls    errors syscall</span>
<span class="line">------ ----------- ----------- --------- --------- ----------------</span>
<span class="line"> 99.18    0.005719        5719         1           restart_syscall</span>
<span class="line">  0.49    0.000028          28         1           mprotect</span>
<span class="line">  0.24    0.000014          14         1           clone</span>
<span class="line">  0.05    0.000003           3         1           mmap</span>
<span class="line">  0.03    0.000002           2         1           accept</span>
<span class="line">------ ----------- ----------- --------- --------- ----------------</span>
<span class="line">100.00    0.005766                     5           total</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明：这个命令的用法和参数都比较复杂，建议大家在真正用到这个命令的时候再根据实际需要进行了解。</p></blockquote></li><li><p>查看当前运行级别 - <strong>runlevel</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# runlevel</span>
<span class="line">N 3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>实时监控进程占用资源状况 - <strong>top</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# top</span>
<span class="line">top - 23:04:23 up 3 days, 14:10,  1 user,  load average: 0.00, 0.01, 0.05</span>
<span class="line">Tasks:  65 total,   1 running,  64 sleeping,   0 stopped,   0 zombie</span>
<span class="line">%Cpu(s):  0.3 us,  0.3 sy,  0.0 ni, 99.3 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st</span>
<span class="line">KiB Mem :  1016168 total,   191060 free,   324700 used,   500408 buff/cache</span>
<span class="line">KiB Swap:        0 total,        0 free,        0 used.   530944 avail Mem</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-c</code> - 显示进程的整个路径。</li><li><code>-d</code> - 指定两次刷屏之间的间隔时间（秒为单位）。</li><li><code>-i</code> - 不显示闲置进程或僵尸进程。</li><li><code>-p</code> - 显示指定进程的信息。</li></ul></li></ol><h3 id="系统诊断" tabindex="-1"><a class="header-anchor" href="#系统诊断"><span>系统诊断</span></a></h3><ol><li><p>系统启动异常诊断 - <strong>dmesg</strong>。</p></li><li><p>查看系统活动信息 - <strong>sar</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# sar -u -r 5 10</span>
<span class="line">Linux 3.10.0-957.10.1.el7.x86_64 (izwz97tbgo9lkabnat2lo8z)      06/02/2019      _x86_64_        (2 CPU)</span>
<span class="line"></span>
<span class="line">06:48:30 PM     CPU     %user     %nice   %system   %iowait    %steal     %idle</span>
<span class="line">06:48:35 PM     all      0.10      0.00      0.10      0.00      0.00     99.80</span>
<span class="line"></span>
<span class="line">06:48:30 PM kbmemfree kbmemused  %memused kbbuffers  kbcached  kbcommit   %commit  kbactive   kbinact   kbdirty</span>
<span class="line">06:48:35 PM   1772012   2108392     54.33    102816   1634528    784940     20.23    793328   1164704         0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-A</code> - 显示所有设备（CPU、内存、磁盘）的运行状况。</li><li><code>-u</code> - 显示所有CPU的负载情况。</li><li><code>-d</code> - 显示所有磁盘的使用情况。</li><li><code>-r</code> - 显示内存的使用情况。</li><li><code>-n</code> - 显示网络运行状态。</li></ul></li><li><p>查看内存使用情况 - <strong>free</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# free</span>
<span class="line">              total        used        free      shared  buff/cache   available</span>
<span class="line">Mem:        1016168      323924      190452         356      501792      531800</span>
<span class="line">Swap:             0           0           0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>虚拟内存统计 - <strong>vmstat</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# vmstat</span>
<span class="line">procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----</span>
<span class="line"> r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st</span>
<span class="line"> 2  0      0 204020  79036 667532    0    0     5    18  101   58  1  0 99  0  0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>CPU信息统计 - <strong>mpstat</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# mpstat</span>
<span class="line">Linux 3.10.0-957.5.1.el7.x86_64 (iZ8vba0s66jjlfmo601w4xZ)       05/30/2019      _x86_64_        (1 CPU)</span>
<span class="line"></span>
<span class="line">01:51:54 AM  CPU    %usr   %nice    %sys %iowait    %irq   %soft  %steal  %guest  %gnice   %idle</span>
<span class="line">01:51:54 AM  all    0.71    0.00    0.17    0.04    0.00    0.00    0.00    0.00    0.00   99.07</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看进程使用内存状况 - <strong>pmap</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# ps</span>
<span class="line">  PID TTY          TIME CMD</span>
<span class="line"> 4581 pts/0    00:00:00 bash</span>
<span class="line"> 5664 pts/0    00:00:00 ps</span>
<span class="line">[root ~]# pmap 4581</span>
<span class="line">4581:   -bash</span>
<span class="line">0000000000400000    884K r-x-- bash</span>
<span class="line">00000000006dc000      4K r---- bash</span>
<span class="line">00000000006dd000     36K rw--- bash</span>
<span class="line">00000000006e6000     24K rw---   [ anon ]</span>
<span class="line">0000000001de0000    400K rw---   [ anon ]</span>
<span class="line">00007f82fe805000     48K r-x-- libnss_files-2.17.so</span>
<span class="line">00007f82fe811000   2044K ----- libnss_files-2.17.so</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>报告设备CPU和I/O统计信息 - <strong>iostat</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# iostat</span>
<span class="line">Linux 3.10.0-693.11.1.el7.x86_64 (iZwz97tbgo9lkabnat2lo8Z)      06/26/2018      _x86_64_       (1 CPU)</span>
<span class="line">avg-cpu:  %user   %nice %system %iowait  %steal   %idle</span>
<span class="line">           0.79    0.00    0.20    0.04    0.00   98.97</span>
<span class="line">Device:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn</span>
<span class="line">vda               0.85         6.78        21.32    2106565    6623024</span>
<span class="line">vdb               0.00         0.01         0.00       2088          0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>显示所有PCI设备 - <strong>lspci</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# lspci</span>
<span class="line">00:00.0 Host bridge: Intel Corporation 440FX - 82441FX PMC [Natoma] (rev 02)</span>
<span class="line">00:01.0 ISA bridge: Intel Corporation 82371SB PIIX3 ISA [Natoma/Triton II]</span>
<span class="line">00:01.1 IDE interface: Intel Corporation 82371SB PIIX3 IDE [Natoma/Triton II]</span>
<span class="line">00:01.2 USB controller: Intel Corporation 82371SB PIIX3 USB [Natoma/Triton II] (rev 01)</span>
<span class="line">00:01.3 Bridge: Intel Corporation 82371AB/EB/MB PIIX4 ACPI (rev 03)</span>
<span class="line">00:02.0 VGA compatible controller: Cirrus Logic GD 5446</span>
<span class="line">00:03.0 Ethernet controller: Red Hat, Inc. Virtio network device</span>
<span class="line">00:04.0 Communication controller: Red Hat, Inc. Virtio console</span>
<span class="line">00:05.0 SCSI storage controller: Red Hat, Inc. Virtio block device</span>
<span class="line">00:06.0 SCSI storage controller: Red Hat, Inc. Virtio block device</span>
<span class="line">00:07.0 Unclassified device [00ff]: Red Hat, Inc. Virtio memory balloon</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>显示进程间通信设施的状态 - <strong>ipcs</strong>。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">[root ~]# ipcs</span>
<span class="line"></span>
<span class="line">------ Message Queues --------</span>
<span class="line">key        msqid      owner      perms      used-bytes   messages    </span>
<span class="line"></span>
<span class="line">------ Shared Memory Segments --------</span>
<span class="line">key        shmid      owner      perms      bytes      nattch     status      </span>
<span class="line"></span>
<span class="line">------ Semaphore Arrays --------</span>
<span class="line">key        semid      owner      perms      nsems</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="shell编程" tabindex="-1"><a class="header-anchor" href="#shell编程"><span>Shell编程</span></a></h3><p>之前我们提到过，Shell是一个连接用户和操作系统的应用程序，它提供了人机交互的界面（接口），用户通过这个界面访问操作系统内核的服务。Shell脚本是一种为Shell编写的脚本程序，我们可以通过Shell脚本来进行系统管理，同时也可以通过它进行文件操作。总之，编写Shell脚本对于使用Linux系统的人来说，应该是一项标配技能。</p><p>互联网上有大量关于Shell脚本的相关知识，我不打算再此对Shell脚本做一个全面系统的讲解，我们通过下面的代码来感性的认识下Shell脚本就行了。</p><p>例子1：输入两个整数m和n，计算从m到n的整数求和的结果。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">#!/usr/bin/bash</span>
<span class="line">printf &#39;m = &#39;</span>
<span class="line">read m</span>
<span class="line">printf &#39;n = &#39;</span>
<span class="line">read n</span>
<span class="line">a=$m</span>
<span class="line">sum=0</span>
<span class="line">while [ $a -le $n ]</span>
<span class="line">do</span>
<span class="line">    sum=$[ sum + a ]</span>
<span class="line">    a=$[ a + 1 ]</span>
<span class="line">done</span>
<span class="line">echo &#39;结果: &#39;$sum</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子2：自动创建文件夹和指定数量的文件。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">#!/usr/bin/bash</span>
<span class="line">printf &#39;输入文件夹名: &#39;</span>
<span class="line">read dir</span>
<span class="line">printf &#39;输入文件名: &#39;</span>
<span class="line">read file</span>
<span class="line">printf &#39;输入文件数量(&lt;1000): &#39;</span>
<span class="line">read num</span>
<span class="line">if [ $num -ge 1000 ]</span>
<span class="line">then</span>
<span class="line">    echo &#39;文件数量不能超过1000&#39;</span>
<span class="line">else</span>
<span class="line">    if [ -e $dir -a -d $dir ]</span>
<span class="line">    then</span>
<span class="line">        rm -rf $dir</span>
<span class="line">    else</span>
<span class="line">        if [ -e $dir -a -f $dir ]</span>
<span class="line">        then</span>
<span class="line">            rm -f $dir</span>
<span class="line">        fi</span>
<span class="line">    fi</span>
<span class="line">    mkdir -p $dir</span>
<span class="line">    index=1</span>
<span class="line">    while [ $index -le $num ]</span>
<span class="line">    do</span>
<span class="line">        if [ $index -lt 10 ]</span>
<span class="line">        then</span>
<span class="line">            pre=&#39;00&#39;</span>
<span class="line">        elif [ $index -lt 100 ]</span>
<span class="line">        then</span>
<span class="line">            pre=&#39;0&#39;</span>
<span class="line">        else</span>
<span class="line">            pre=&#39;&#39;</span>
<span class="line">        fi</span>
<span class="line">        touch $dir&#39;/&#39;$file&#39;_&#39;$pre$index</span>
<span class="line">        index=$[ index + 1 ]</span>
<span class="line">    done</span>
<span class="line">fi</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子3：自动安装指定版本的Redis。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">#!/usr/bin/bash</span>
<span class="line">install_redis() {</span>
<span class="line">    if ! which redis-server &gt; /dev/null</span>
<span class="line">    then</span>
<span class="line">        cd /root</span>
<span class="line">        wget $1$2&#39;.tar.gz&#39; &gt;&gt; install.log</span>
<span class="line">        gunzip /root/$2&#39;.tar.gz&#39;</span>
<span class="line">        tar -xf /root/$2&#39;.tar&#39;</span>
<span class="line">        cd /root/$2</span>
<span class="line">        make &gt;&gt; install.log</span>
<span class="line">        make install &gt;&gt; install.log</span>
<span class="line">        echo &#39;安装完成&#39;</span>
<span class="line">    else</span>
<span class="line">        echo &#39;已经安装过Redis&#39;</span>
<span class="line">    fi</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">install_redis &#39;http://download.redis.io/releases/&#39; $1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相关资源" tabindex="-1"><a class="header-anchor" href="#相关资源"><span>相关资源</span></a></h3><ol><li><p>Linux命令行常用快捷键</p><table><thead><tr><th>快捷键</th><th>功能说明</th></tr></thead><tbody><tr><td>tab</td><td>自动补全命令或路径</td></tr><tr><td>Ctrl+a</td><td>将光标移动到命令行行首</td></tr><tr><td>Ctrl+e</td><td>将光标移动到命令行行尾</td></tr><tr><td>Ctrl+f</td><td>将光标向右移动一个字符</td></tr><tr><td>Ctrl+b</td><td>将光标向左移动一个字符</td></tr><tr><td>Ctrl+k</td><td>剪切从光标到行尾的字符</td></tr><tr><td>Ctrl+u</td><td>剪切从光标到行首的字符</td></tr><tr><td>Ctrl+w</td><td>剪切光标前面的一个单词</td></tr><tr><td>Ctrl+y</td><td>复制剪切命名剪切的内容</td></tr><tr><td>Ctrl+c</td><td>中断正在执行的任务</td></tr><tr><td>Ctrl+h</td><td>删除光标前面的一个字符</td></tr><tr><td>Ctrl+d</td><td>退出当前命令行</td></tr><tr><td>Ctrl+r</td><td>搜索历史命令</td></tr><tr><td>Ctrl+g</td><td>退出历史命令搜索</td></tr><tr><td>Ctrl+l</td><td>清除屏幕上所有内容在屏幕的最上方开启一个新行</td></tr><tr><td>Ctrl+s</td><td>锁定终端使之暂时无法输入内容</td></tr><tr><td>Ctrl+q</td><td>退出终端锁定</td></tr><tr><td>Ctrl+z</td><td>将正在终端执行的任务停下来放到后台</td></tr><tr><td>!!</td><td>执行上一条命令</td></tr><tr><td>!数字</td><td>执行数字对应的历史命令</td></tr><tr><td>!字母</td><td>执行最近的以字母打头的命令</td></tr><tr><td>!$ / Esc+.</td><td>获得上一条命令最后一个参数</td></tr><tr><td>Esc+b</td><td>移动到当前单词的开头</td></tr><tr><td>Esc+f</td><td>移动到当前单词的结尾</td></tr></tbody></table></li><li><p>man查阅命令手册的内容说明</p><table><thead><tr><th>手册中的标题</th><th>功能说明</th></tr></thead><tbody><tr><td>NAME</td><td>命令的说明和介绍</td></tr><tr><td>SYNOPSIS</td><td>使用该命令的基本语法</td></tr><tr><td>DESCRIPTION</td><td>使用该命令的详细描述，各个参数的作用，有时候这些信息会出现在OPTIONS中</td></tr><tr><td>OPTIONS</td><td>命令相关参数选项的说明</td></tr><tr><td>EXAMPLES</td><td>使用该命令的参考例子</td></tr><tr><td>EXIT STATUS</td><td>命令结束的退出状态码，通常0表示成功执行</td></tr><tr><td>SEE ALSO</td><td>和命令相关的其他命令或信息</td></tr><tr><td>BUGS</td><td>和命令相关的缺陷的描述</td></tr><tr><td>AUTHOR</td><td>该命令的作者介绍</td></tr></tbody></table></li></ol>`,108)]))}const g=n(u,[["render",m],["__file","31-35.玩转Linux操作系统.html.vue"]]),S=JSON.parse('{"path":"/Day31-35/31-35.%E7%8E%A9%E8%BD%ACLinux%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"操作系统发展史","slug":"操作系统发展史","link":"#操作系统发展史","children":[]},{"level":3,"title":"Linux概述","slug":"linux概述","link":"#linux概述","children":[]},{"level":3,"title":"Linux系统优点","slug":"linux系统优点","link":"#linux系统优点","children":[]},{"level":3,"title":"Linux系统发行版本","slug":"linux系统发行版本","link":"#linux系统发行版本","children":[]},{"level":3,"title":"基础命令","slug":"基础命令","link":"#基础命令","children":[]},{"level":3,"title":"实用程序","slug":"实用程序","link":"#实用程序","children":[]},{"level":3,"title":"用户管理","slug":"用户管理","link":"#用户管理","children":[]},{"level":3,"title":"文件系统","slug":"文件系统","link":"#文件系统","children":[]},{"level":3,"title":"编辑器 - vim","slug":"编辑器-vim","link":"#编辑器-vim","children":[]},{"level":3,"title":"软件安装和配置","slug":"软件安装和配置","link":"#软件安装和配置","children":[]},{"level":3,"title":"配置服务","slug":"配置服务","link":"#配置服务","children":[]},{"level":3,"title":"计划任务","slug":"计划任务","link":"#计划任务","children":[]},{"level":3,"title":"网络访问和管理","slug":"网络访问和管理","link":"#网络访问和管理","children":[]},{"level":3,"title":"进程管理","slug":"进程管理","link":"#进程管理","children":[]},{"level":3,"title":"系统诊断","slug":"系统诊断","link":"#系统诊断","children":[]},{"level":3,"title":"Shell编程","slug":"shell编程","link":"#shell编程","children":[]},{"level":3,"title":"相关资源","slug":"相关资源","link":"#相关资源","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"Day31-35/31-35.玩转Linux操作系统.md"}');export{g as comp,S as data};
