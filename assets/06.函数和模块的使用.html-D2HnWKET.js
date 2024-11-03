import{_ as s,c as e,a,o as i}from"./app-D-bq_jAa.js";const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAAAQCAMAAABazq+gAAAAMFBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAv3aB7AAAAEHRSTlMAVHaJRGarECL/3e8yzbuZORQTawAAATxJREFUeNrdlYtuwyAMRf3ilUDy/387yGPeGgVTqZ22XakUpcfuNZgAv19IxAh/QCh1IMOqk2Pyk9ijfKhD9C/J/Vrs4rSZRAfbyILOx35u5d6MPSqmSYTbTCLEGWHOfafKvRm7Wp1SCVtxNWw+ni2d3Moh8TqCIVnYIW3C1X+Kz2ccZT4r4h11PH0PKUVDlAtUc7OJQQJYnIm1g13ME+UPZ8Wd63y/pspJqb+ULrZna05tDDLeOtVTP8VtkVL9EsupcnXk1cK2WQkDmAvlbve1I5etW1yqhcW+U+XOEm0MFxzI5iD0d7+FZaqfFTMySn/3lTuiTWznyMSiGE6BmPhrF3WcXmMzRBNzrZ0nG6u3+kxgyXAabm5iDJFMTKgd7w6mC1yeNSprojhQT6rigduzvnbDwN9mnwj+kz4AU5MLU4v5apgAAAAASUVORK5CYII=",d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAApBAMAAAAhY0plAAAAMFBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAv3aB7AAAAEHRSTlMAid3/MruZ73ZUzURmqyIQmPxWggAAA2dJREFUeAHF1wGEW3cABvDf9ZLk5ZK7nGht2NZR42yjmetq7bgL17kZJTAGOGM6qtyszDB9qlg35bFZZ5hMhwELHcqm3timA0u3QW3Va2c1urNMaNHN1njc03ru3DWRH0A+/h8v3v99Nqm2B/m9jcWGUQnexEfT3msblcon5BbazjaMyoEjlM6ysGJU4neIdtAzMuFpU40Zxo1MvKBU3cOEUSmv9FaiUp1Jg7c67/SSjVQUP24UmpQMXuWiwIYCEydtCw1FZVHFhv402fJbg9UuslXjzRzbtaYyEZ23kcIbcdAeO3OYdV7QBZtQXYLqw6+Gf7hRasUG4oSbu9o484vE2Ozs7DS4eqZtdX8kUbnwK+eg1jD2hNjR2EC0ONWh/DKJsS8PHJQ4dYwlEg/pxSaQb5Kri52KDUIl5t15SjUSFb6RCN8iJPGKYkcQcaiLplCvYRDyK4Qz3K5ZMxVKhGcjoTW9WK6jvA+i1U8VDEQR4XGiWsY/NCwcE1qzA8vyywYmrdBrSytwjkToMWmFD66gbrzjbkcu33HRll1DONkpd2sKl/um+TytsBCH6RGLDXYbDzElw/jsJtXTCuX5khoSU/W0wthcaM3kMrsVQ3yh+lNX+amu+3cLoZnb0gqV5bSCx0MSPxubY1mhSTXk27a/m4N4EEWEjkfSB1FoSSsstCRHTO0zWWeZGZ7H17EPQ/dptUt+hZ16sRoS+SbXu7BEsExip1uhXIfg4tsNfD+d+71tq3fPD8BiTCV2c39c6F59/TCJyaXkJ9f3R3RIBA9eIohIVN9vlops9e65KRFRbcoUyTSBROm/R6MX3GNsV8O/T0e5o5yQzpiMSDnUT4mwXZZcQ6avJKg41v7OvY53WFJ6llY6Y7IiWv2UoIuCLKV1LutE4DOX3OvCvGqkvEclTmdMVsTJfkrpPj5Zqj82Hgn2dt2t/NczSl25OfmVdMZkRRzsp4YgcEhAta6YzpjMiGI/NQSBhXaAumI6Y7Ij49QNwT8mmjfQci2dMdmRbV0tQ3BeaS5Gx7V0xsBzL97x0lokqdAxBDGvhYjcSmdMdqRINKQKD4SgmD1j0kjRUORiem2mrsivpDMmK+JgPzV4h56kgNxRlTidMVkRJ/upoao2ra9l6LZbVzk2dBtf1kO38SfLlv0P444ofwqfkiIAAAAASUVORK5CYII=",c={};function r(p,n){return i(),e("div",null,n[0]||(n[0]=[a('<h2 id="函数和模块的使用" tabindex="-1"><a class="header-anchor" href="#函数和模块的使用"><span>函数和模块的使用</span></a></h2><p>在讲解本章节的内容之前，我们先来研究一道数学题，请说出下面的方程有多少组正整数解。</p><p><img src="'+l+'" alt="$$x_1 + x_2 + x_3 + x_4 = 8$$"></p><p>事实上，上面的问题等同于将8个苹果分成四组每组至少一个苹果有多少种方案。想到这一点问题的答案就呼之欲出了。</p><p><img src="'+d+`" alt="$$C_M^N =rac{M!}{N!(M-N)!}, ext{(M=7, N=3)} $$"></p><p>可以用Python的程序来计算出这个值，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">输入M和N计算C(M,N)</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">m = int(input(&#39;m = &#39;))</span>
<span class="line">n = int(input(&#39;n = &#39;))</span>
<span class="line">fm = 1</span>
<span class="line">for num in range(1, m + 1):</span>
<span class="line">    fm *= num</span>
<span class="line">fn = 1</span>
<span class="line">for num in range(1, n + 1):</span>
<span class="line">    fn *= num</span>
<span class="line">fm_n = 1</span>
<span class="line">for num in range(1, m - n + 1):</span>
<span class="line">    fm_n *= num</span>
<span class="line">print(fm // fn // fm_n)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数的作用" tabindex="-1"><a class="header-anchor" href="#函数的作用"><span>函数的作用</span></a></h3><p>不知道大家是否注意到，在上面的代码中，我们做了3次求阶乘，这样的代码实际上就是重复代码。编程大师<em>Martin Fowler</em>先生曾经说过：“<strong>代码有很多种坏味道，重复是最坏的一种！</strong>”，要写出高质量的代码首先要解决的就是重复代码的问题。对于上面的代码来说，我们可以将计算阶乘的功能封装到一个称之为“函数”的功能模块中，在需要计算阶乘的地方，我们只需要“调用”这个“函数”就可以了。</p><h3 id="定义函数" tabindex="-1"><a class="header-anchor" href="#定义函数"><span>定义函数</span></a></h3><p>在Python中可以使用<code>def</code>关键字来定义函数，和变量一样每个函数也有一个响亮的名字，而且命名规则跟变量的命名规则是一致的。在函数名后面的圆括号中可以放置传递给函数的参数，这一点和数学上的函数非常相似，程序中函数的参数就相当于是数学上说的函数的自变量，而函数执行完成后我们可以通过<code>return</code>关键字来返回一个值，这相当于数学上说的函数的因变量。</p><p>在了解了如何定义函数后，我们可以对上面的代码进行重构，所谓重构就是在不影响代码执行结果的前提下对代码的结构进行调整，重构之后的代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">&quot;&quot;&quot;</span>
<span class="line">输入M和N计算C(M,N)</span>
<span class="line"></span>
<span class="line">Version: 0.1</span>
<span class="line">Author: 骆昊</span>
<span class="line">&quot;&quot;&quot;</span>
<span class="line">def fac(num):</span>
<span class="line">    &quot;&quot;&quot;求阶乘&quot;&quot;&quot;</span>
<span class="line">    result = 1</span>
<span class="line">    for n in range(1, num + 1):</span>
<span class="line">        result *= n</span>
<span class="line">    return result</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">m = int(input(&#39;m = &#39;))</span>
<span class="line">n = int(input(&#39;n = &#39;))</span>
<span class="line"># 当需要计算阶乘的时候不用再写循环求阶乘而是直接调用已经定义好的函数</span>
<span class="line">print(fac(m) // fac(n) // fac(m - n))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明：</strong> Python的<code>math</code>模块中其实已经有一个名为<code>factorial</code>函数实现了阶乘运算，事实上求阶乘并不用自己定义函数。下面的例子中，我们讲的函数在Python标准库已经实现过了，我们这里是为了讲解函数的定义和使用才把它们又实现了一遍，<strong>实际开发中并不建议做这种低级的重复劳动</strong>。</p></blockquote><h3 id="函数的参数" tabindex="-1"><a class="header-anchor" href="#函数的参数"><span>函数的参数</span></a></h3><p>函数是绝大多数编程语言中都支持的一个代码的&quot;构建块&quot;，但是Python中的函数与其他语言中的函数还是有很多不太相同的地方，其中一个显著的区别就是Python对函数参数的处理。在Python中，函数的参数可以有默认值，也支持使用可变参数，所以Python并不需要像其他语言一样支持<a href="https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0%E9%87%8D%E8%BD%BD" target="_blank" rel="noopener noreferrer">函数的重载</a>，因为我们在定义一个函数的时候可以让它有多种不同的使用方式，下面是两个小例子。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">from random import randint</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def roll_dice(n=2):</span>
<span class="line">    &quot;&quot;&quot;摇色子&quot;&quot;&quot;</span>
<span class="line">    total = 0</span>
<span class="line">    for _ in range(n):</span>
<span class="line">        total += randint(1, 6)</span>
<span class="line">    return total</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def add(a=0, b=0, c=0):</span>
<span class="line">    &quot;&quot;&quot;三个数相加&quot;&quot;&quot;</span>
<span class="line">    return a + b + c</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># 如果没有指定参数那么使用默认值摇两颗色子</span>
<span class="line">print(roll_dice())</span>
<span class="line"># 摇三颗色子</span>
<span class="line">print(roll_dice(3))</span>
<span class="line">print(add())</span>
<span class="line">print(add(1))</span>
<span class="line">print(add(1, 2))</span>
<span class="line">print(add(1, 2, 3))</span>
<span class="line"># 传递参数时可以不按照设定的顺序进行传递</span>
<span class="line">print(add(c=50, a=100, b=200))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们给上面两个函数的参数都设定了默认值，这也就意味着如果在调用函数的时候如果没有传入对应参数的值时将使用该参数的默认值，所以在上面的代码中我们可以用各种不同的方式去调用<code>add</code>函数，这跟其他很多语言中函数重载的效果是一致的。</p><p>其实上面的<code>add</code>函数还有更好的实现方案，因为我们可能会对0个或多个参数进行加法运算，而具体有多少个参数是由调用者来决定，我们作为函数的设计者对这一点是一无所知的，因此在不确定参数个数的时候，我们可以使用可变参数，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line"># 在参数名前面的*表示args是一个可变参数</span>
<span class="line">def add(*args):</span>
<span class="line">    total = 0</span>
<span class="line">    for val in args:</span>
<span class="line">        total += val</span>
<span class="line">    return total</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># 在调用add函数时可以传入0个或多个参数</span>
<span class="line">print(add())</span>
<span class="line">print(add(1))</span>
<span class="line">print(add(1, 2))</span>
<span class="line">print(add(1, 2, 3))</span>
<span class="line">print(add(1, 3, 5, 7, 9))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用模块管理函数" tabindex="-1"><a class="header-anchor" href="#用模块管理函数"><span>用模块管理函数</span></a></h3><p>对于任何一种编程语言来说，给变量、函数这样的标识符起名字都是一个让人头疼的问题，因为我们会遇到命名冲突这种尴尬的情况。最简单的场景就是在同一个.py文件中定义了两个同名函数，由于Python没有函数重载的概念，那么后面的定义会覆盖之前的定义，也就意味着两个函数同名函数实际上只有一个是存在的。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">def foo():</span>
<span class="line">    print(&#39;hello, world!&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def foo():</span>
<span class="line">    print(&#39;goodbye, world!&#39;)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># 下面的代码会输出什么呢？</span>
<span class="line">foo()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然上面的这种情况我们很容易就能避免，但是如果项目是由多人协作进行团队开发的时候，团队中可能有多个程序员都定义了名为<code>foo</code>的函数，那么怎么解决这种命名冲突呢？答案其实很简单，Python中每个文件就代表了一个模块（module），我们在不同的模块中可以有同名的函数，在使用函数的时候我们通过<code>import</code>关键字导入指定的模块就可以区分到底要使用的是哪个模块中的<code>foo</code>函数，代码如下所示。</p><p><code>module1.py</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">def foo():</span>
<span class="line">    print(&#39;hello, world!&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>module2.py</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">def foo():</span>
<span class="line">    print(&#39;goodbye, world!&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>test.py</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">from module1 import foo</span>
<span class="line"></span>
<span class="line"># 输出hello, world!</span>
<span class="line">foo()</span>
<span class="line"></span>
<span class="line">from module2 import foo</span>
<span class="line"></span>
<span class="line"># 输出goodbye, world!</span>
<span class="line">foo()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以按照如下所示的方式来区分到底要使用哪一个<code>foo</code>函数。</p><p><code>test.py</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">import module1 as m1</span>
<span class="line">import module2 as m2</span>
<span class="line"></span>
<span class="line">m1.foo()</span>
<span class="line">m2.foo()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果将代码写成了下面的样子，那么程序中调用的是最后导入的那个<code>foo</code>，因为后导入的foo覆盖了之前导入的<code>foo</code>。</p><p><code>test.py</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">from module1 import foo</span>
<span class="line">from module2 import foo</span>
<span class="line"></span>
<span class="line"># 输出goodbye, world!</span>
<span class="line">foo()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>test.py</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">from module2 import foo</span>
<span class="line">from module1 import foo</span>
<span class="line"></span>
<span class="line"># 输出hello, world!</span>
<span class="line">foo()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明的是，如果我们导入的模块除了定义函数之外还有可以执行代码，那么Python解释器在导入这个模块时就会执行这些代码，事实上我们可能并不希望如此，因此如果我们在模块中编写了执行代码，最好是将这些执行代码放入如下所示的条件中，这样的话除非直接运行该模块，if条件下的这些代码是不会执行的，因为只有直接执行的模块的名字才是&quot;__main__&quot;。</p><p><code>module3.py</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">def foo():</span>
<span class="line">    pass</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def bar():</span>
<span class="line">    pass</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># __name__是Python中一个隐含的变量它代表了模块的名字</span>
<span class="line"># 只有被Python解释器直接执行的模块的名字才是__main__</span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    print(&#39;call foo()&#39;)</span>
<span class="line">    foo()</span>
<span class="line">    print(&#39;call bar()&#39;)</span>
<span class="line">    bar()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>test.py</code></p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">import module3</span>
<span class="line"></span>
<span class="line"># 导入module3时 不会执行模块中if条件成立时的代码 因为模块的名字是module3而不是__main__</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习" tabindex="-1"><a class="header-anchor" href="#练习"><span>练习</span></a></h3><h4 id="练习1-实现计算求最大公约数和最小公倍数的函数。" tabindex="-1"><a class="header-anchor" href="#练习1-实现计算求最大公约数和最小公倍数的函数。"><span>练习1：实现计算求最大公约数和最小公倍数的函数。</span></a></h4><p>参考答案：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">def gcd(x, y):</span>
<span class="line">    &quot;&quot;&quot;求最大公约数&quot;&quot;&quot;</span>
<span class="line">    (x, y) = (y, x) if x &gt; y else (x, y)</span>
<span class="line">    for factor in range(x, 0, -1):</span>
<span class="line">        if x % factor == 0 and y % factor == 0:</span>
<span class="line">            return factor</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def lcm(x, y):</span>
<span class="line">    &quot;&quot;&quot;求最小公倍数&quot;&quot;&quot;</span>
<span class="line">    return x * y // gcd(x, y)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="练习2-实现判断一个数是不是回文数的函数。" tabindex="-1"><a class="header-anchor" href="#练习2-实现判断一个数是不是回文数的函数。"><span>练习2：实现判断一个数是不是回文数的函数。</span></a></h4><p>参考答案：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">def is_palindrome(num):</span>
<span class="line">    &quot;&quot;&quot;判断一个数是不是回文数&quot;&quot;&quot;</span>
<span class="line">    temp = num</span>
<span class="line">    total = 0</span>
<span class="line">    while temp &gt; 0:</span>
<span class="line">        total = total * 10 + temp % 10</span>
<span class="line">        temp //= 10</span>
<span class="line">    return total == num</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="练习3-实现判断一个数是不是素数的函数。" tabindex="-1"><a class="header-anchor" href="#练习3-实现判断一个数是不是素数的函数。"><span>练习3：实现判断一个数是不是素数的函数。</span></a></h4><p>参考答案：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">def is_prime(num):</span>
<span class="line">    &quot;&quot;&quot;判断一个数是不是素数&quot;&quot;&quot;</span>
<span class="line">    for factor in range(2, int(num ** 0.5) + 1):</span>
<span class="line">        if num % factor == 0:</span>
<span class="line">            return False</span>
<span class="line">    return True if num != 1 else False</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="练习4-写一个程序判断输入的正整数是不是回文素数。" tabindex="-1"><a class="header-anchor" href="#练习4-写一个程序判断输入的正整数是不是回文素数。"><span>练习4：写一个程序判断输入的正整数是不是回文素数。</span></a></h4><p>参考答案：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    num = int(input(&#39;请输入正整数: &#39;))</span>
<span class="line">    if is_palindrome(num) and is_prime(num):</span>
<span class="line">        print(&#39;%d是回文素数&#39; % num)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：通过上面的程序可以看出，当我们<strong>将代码中重复出现的和相对独立的功能抽取成函数</strong>后，我们可以<strong>组合使用这些函数</strong>来解决更为复杂的问题，这也是我们为什么要定义和使用函数的一个非常重要的原因。</p></blockquote><h3 id="变量的作用域" tabindex="-1"><a class="header-anchor" href="#变量的作用域"><span>变量的作用域</span></a></h3><p>最后，我们来讨论一下Python中有关变量作用域的问题。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">def foo():</span>
<span class="line">    b = &#39;hello&#39;</span>
<span class="line"></span>
<span class="line">    # Python中可以在函数内部再定义函数</span>
<span class="line">    def bar():</span>
<span class="line">        c = True</span>
<span class="line">        print(a)</span>
<span class="line">        print(b)</span>
<span class="line">        print(c)</span>
<span class="line"></span>
<span class="line">    bar()</span>
<span class="line">    # print(c)  # NameError: name &#39;c&#39; is not defined</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    a = 100</span>
<span class="line">    # print(b)  # NameError: name &#39;b&#39; is not defined</span>
<span class="line">    foo()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码能够顺利的执行并且打印出100、hello和True，但我们注意到了，在<code>bar</code>函数的内部并没有定义<code>a</code>和<code>b</code>两个变量，那么<code>a</code>和<code>b</code>是从哪里来的。我们在上面代码的<code>if</code>分支中定义了一个变量<code>a</code>，这是一个全局变量（global variable），属于全局作用域，因为它没有定义在任何一个函数中。在上面的<code>foo</code>函数中我们定义了变量<code>b</code>，这是一个定义在函数中的局部变量（local variable），属于局部作用域，在<code>foo</code>函数的外部并不能访问到它；但对于<code>foo</code>函数内部的<code>bar</code>函数来说，变量<code>b</code>属于嵌套作用域，在<code>bar</code>函数中我们是可以访问到它的。<code>bar</code>函数中的变量<code>c</code>属于局部作用域，在<code>bar</code>函数之外是无法访问的。事实上，Python查找一个变量时会按照“局部作用域”、“嵌套作用域”、“全局作用域”和“内置作用域”的顺序进行搜索，前三者我们在上面的代码中已经看到了，所谓的“内置作用域”就是Python内置的那些标识符，我们之前用过的<code>input</code>、<code>print</code>、<code>int</code>等都属于内置作用域。</p><p>再看看下面这段代码，我们希望通过函数调用修改全局变量<code>a</code>的值，但实际上下面的代码是做不到的。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">def foo():</span>
<span class="line">    a = 200</span>
<span class="line">    print(a)  # 200</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    a = 100</span>
<span class="line">    foo()</span>
<span class="line">    print(a)  # 100</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在调用<code>foo</code>函数后，我们发现<code>a</code>的值仍然是100，这是因为当我们在函数<code>foo</code>中写<code>a = 200</code>的时候，是重新定义了一个名字为<code>a</code>的局部变量，它跟全局作用域的<code>a</code>并不是同一个变量，因为局部作用域中有了自己的变量<code>a</code>，因此<code>foo</code>函数不再搜索全局作用域中的<code>a</code>。如果我们希望在<code>foo</code>函数中修改全局作用域中的<code>a</code>，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">def foo():</span>
<span class="line">    global a</span>
<span class="line">    a = 200</span>
<span class="line">    print(a)  # 200</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    a = 100</span>
<span class="line">    foo()</span>
<span class="line">    print(a)  # 200</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以使用<code>global</code>关键字来指示<code>foo</code>函数中的变量<code>a</code>来自于全局作用域，如果全局作用域中没有<code>a</code>，那么下面一行的代码就会定义变量<code>a</code>并将其置于全局作用域。同理，如果我们希望函数内部的函数能够修改嵌套作用域中的变量，可以使用<code>nonlocal</code>关键字来指示变量来自于嵌套作用域，请大家自行试验。</p><p>在实际开发中，我们应该尽量减少对全局变量的使用，因为全局变量的作用域和影响过于广泛，可能会发生意料之外的修改和使用，除此之外全局变量比局部变量拥有更长的生命周期，可能导致对象占用的内存长时间无法被<a href="https://zh.wikipedia.org/wiki/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8)" target="_blank" rel="noopener noreferrer">垃圾回收</a>。事实上，减少对全局变量的使用，也是降低代码之间耦合度的一个重要举措，同时也是对<a href="https://zh.wikipedia.org/zh-hans/%E5%BE%97%E5%A2%A8%E5%BF%92%E8%80%B3%E5%AE%9A%E5%BE%8B" target="_blank" rel="noopener noreferrer">迪米特法则</a>的践行。减少全局变量的使用就意味着我们应该尽量让变量的作用域在函数的内部，但是如果我们希望将一个局部变量的生命周期延长，使其在定义它的函数调用结束后依然可以使用它的值，这时候就需要使用<a href="https://zh.wikipedia.org/wiki/%E9%97%AD%E5%8C%85_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)" target="_blank" rel="noopener noreferrer">闭包</a>，这个我们在后续的内容中进行讲解。</p><blockquote><p><strong>说明：</strong> 很多人经常会将“闭包”和<a href="https://zh.wikipedia.org/wiki/%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0" target="_blank" rel="noopener noreferrer">“匿名函数”</a>混为一谈，但实际上它们并不是一回事，如果想了解这个概念，可以看看<a href="https://zh.wikipedia.org/wiki/" target="_blank" rel="noopener noreferrer">维基百科</a>的解释或者<a href="https://www.zhihu.com/" target="_blank" rel="noopener noreferrer">知乎</a>上对这个概念的讨论。</p></blockquote><p>说了那么多，其实结论很简单，从现在开始我们可以将Python代码按照下面的格式进行书写，这一点点的改进其实就是在我们理解了函数和作用域的基础上跨出的巨大的一步。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">def main():</span>
<span class="line">    # Todo: Add your code here</span>
<span class="line">    pass</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if __name__ == &#39;__main__&#39;:</span>
<span class="line">    main()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,70)]))}const t=s(c,[["render",r],["__file","06.函数和模块的使用.html.vue"]]),v=JSON.parse('{"path":"/Day01-15/06.%E5%87%BD%E6%95%B0%E5%92%8C%E6%A8%A1%E5%9D%97%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"函数和模块的使用","slug":"函数和模块的使用","link":"#函数和模块的使用","children":[{"level":3,"title":"函数的作用","slug":"函数的作用","link":"#函数的作用","children":[]},{"level":3,"title":"定义函数","slug":"定义函数","link":"#定义函数","children":[]},{"level":3,"title":"函数的参数","slug":"函数的参数","link":"#函数的参数","children":[]},{"level":3,"title":"用模块管理函数","slug":"用模块管理函数","link":"#用模块管理函数","children":[]},{"level":3,"title":"练习","slug":"练习","link":"#练习","children":[]},{"level":3,"title":"变量的作用域","slug":"变量的作用域","link":"#变量的作用域","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"Day01-15/06.函数和模块的使用.md"}');export{t as comp,v as data};
