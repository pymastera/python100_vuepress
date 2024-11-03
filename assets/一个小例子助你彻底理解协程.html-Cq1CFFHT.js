import{_ as s,c as e,a,o as i}from"./app-D-bq_jAa.js";const l={};function d(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h2 id="一个小例子助你彻底理解协程" tabindex="-1"><a class="header-anchor" href="#一个小例子助你彻底理解协程"><span>一个小例子助你彻底理解协程</span></a></h2><p>协程，可能是Python中最让初学者困惑的知识点之一，它也是Python中实现并发编程的一种重要方式。Python中可以使用多线程和多进程来实现并发，这两种方式相对来说是大家比较熟悉的。事实上，还有一种实现并发的方式叫做异步编程，而协程就是实现异步编程的必要方式。</p><p>所谓协程，可以简单的理解为多个相互协作的子程序。在同一个线程中，当一个子程序阻塞时，我们可以让程序马上从一个子程序切换到另一个子程序，从而避免CPU因程序阻塞而闲置，这样就可以提升CPU的利用率，相当于用一种协作的方式加速了程序的执行。所以，我们可以言简意赅的说：<strong>协程实现了协作式并发</strong>。</p><p>接下来用一个小例子帮助大家理解什么是协作式并发，先看看下面的代码。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">import time</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def display(num):</span>
<span class="line">    time.sleep(1)</span>
<span class="line">    print(num)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">for num in range(10):</span>
<span class="line">    display(num)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码相信大家很容看懂，程序会输出0到9的数字，每隔1秒中输出一个数字，因此整个程序的执行需要大约10秒时间。值得注意的是，因为没有使用多线程或多进程，程序中只有一个执行单元，而<code>time.sleep(1)</code>的休眠操作会让整个线程停滞1秒钟，对于上面的代码来说，在这段时间里面CPU是完全闲置的没有做什么事情。</p><p>我们再来看看使用协程会发生什么事情。从Python 3.5开始，使用协程实现协作式编发有了更为便捷的语法，我们可以使用<code>async</code>来定义异步函数，可以使用<code>await</code>让一个阻塞的子程序将CPU让给与它协作的子程序。在Python 3.7中，<code>asyanc</code>和<code>await</code>成为了正式的关键字，让开发者有一种喜大普奔的感觉。我们先看看如何定义一个异步函数。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">import asyncio</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">async def display(num):</span>
<span class="line">    await asyncio.sleep(1)</span>
<span class="line">    print(num)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来敲黑板说重点。异步函数不同于普通函数，调用普通函数会得到返回值，而调用异步函数会得到一个协程对象。我们需要将协程对象放到一个事件循环中才能达到与其他协程对象协作的效果，因为事件循环会负责处理子程序切换的操作，简单的说就是让阻塞的子程序让出CPU给可以执行的子程序。</p><p>我们先通过下面的列表生成式来代码10个协程对象，跟刚才在循环中调用display函数的道理一致。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">coroutines = [display(num) for num in range(10)]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>通过下面的代码可以获取事件循环并将协程对象放入事件循环中。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">loop = asyncio.get_event_loop()</span>
<span class="line">loop.run_until_complete(asyncio.wait(coroutines))</span>
<span class="line">loop.close()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面的代码会发现，10个分别会阻塞1秒钟的协程总共只阻塞了约1秒种的时间，这就说明<strong>协程对象一旦阻塞会将CPU让出而不是让CPU处于闲置状态</strong>，这样就大大的<strong>提升了CPU的利用率</strong>。而且我们还会注意到，0到9的数字并不是按照我们创建协程对象的顺序打印出来的，这正是我们想要的结果啊；另外，多次执行该程序会发现每次输出的结果都不太一样，这正是并发程序本身执行顺序不确定性造成的结果。</p><p>上面的例子来自于著名的“花书”（《Python高级并发编程》），为了让大家对协程的体会更加深刻，对原书的代码做了小的改动，这个例子虽然简单，但是它已经让你体会到了协作式并发的魅力。在商业项目中，如果需要使用协作式并发，还可以将系统默认的事件循环替换为<code>uvloop</code>提供的事件循环，这样会获得更好的性能，因为<code>uvloop</code>是基于著名的跨平台异步I/O库libuv实现的。另外，如果要做基于HTTP的网络编程，三方库<strong>aiohttp</strong>是不错的选择，它基于asyncio实现了异步的HTTP服务器和客户端。</p>`,15)]))}const c=s(l,[["render",d],["__file","一个小例子助你彻底理解协程.html.vue"]]),r=JSON.parse('{"path":"/%E7%95%AA%E5%A4%96%E7%AF%87/%E4%B8%80%E4%B8%AA%E5%B0%8F%E4%BE%8B%E5%AD%90%E5%8A%A9%E4%BD%A0%E5%BD%BB%E5%BA%95%E7%90%86%E8%A7%A3%E5%8D%8F%E7%A8%8B.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"一个小例子助你彻底理解协程","slug":"一个小例子助你彻底理解协程","link":"#一个小例子助你彻底理解协程","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"番外篇/一个小例子助你彻底理解协程.md"}');export{c as comp,r as data};
