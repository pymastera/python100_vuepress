import{_ as n,c as s,a as i,o as d}from"./app-D-bq_jAa.js";const a={};function t(l,e){return d(),s("div",null,e[0]||(e[0]=[i(`<h2 id="使用selenium抓取网页动态内容" tabindex="-1"><a class="header-anchor" href="#使用selenium抓取网页动态内容"><span>使用Selenium抓取网页动态内容</span></a></h2><p>根据权威机构发布的全球互联网可访问性审计报告，全球约有四分之三的网站其内容或部分内容是通过JavaScript动态生成的，这就意味着在浏览器窗口中“查看网页源代码”时无法在HTML代码中找到这些内容，也就是说我们之前用的抓取数据的方式无法正常运转了。解决这样的问题基本上有两种方案，一是获取提供动态内容的数据接口，这种方式也适用于抓取手机 App 的数据；另一种是通过自动化测试工具 Selenium 运行浏览器获取渲染后的动态内容。对于第一种方案，我们可以使用浏览器的“开发者工具”或者更为专业的抓包工具（如：Charles、Fiddler、Wireshark等）来获取到数据接口，后续的操作跟上一个章节中讲解的获取“360图片”网站的数据是一样的，这里我们不再进行赘述。这一章我们重点讲解如何使用自动化测试工具 Selenium 来获取网站的动态内容。</p><h3 id="selenium-介绍" tabindex="-1"><a class="header-anchor" href="#selenium-介绍"><span>Selenium 介绍</span></a></h3><p>Selenium 是一个自动化测试工具，利用它可以驱动浏览器执行特定的行为，最终帮助爬虫开发者获取到网页的动态内容。简单的说，只要我们在浏览器窗口中能够看到的内容，都可以使用 Selenium 获取到，对于那些使用了 JavaScript 动态渲染技术的网站，Selenium 会是一个重要的选择。下面，我们还是以 Chrome 浏览器为例，来讲解 Selenium 的用法，大家需要先安装 Chrome 浏览器并下载它的驱动。Chrome 浏览器的驱动程序可以在<a href="https://chromedriver.chromium.org/downloads" target="_blank" rel="noopener noreferrer">ChromeDriver官网</a>进行下载，驱动的版本要跟浏览器的版本对应，如果没有完全对应的版本，就选择版本代号最为接近的版本。</p><img src="https://gitee.com/jackfrued/mypic/raw/master/20220310134558.png" style="zoom:35%;"><h3 id="使用selenium" tabindex="-1"><a class="header-anchor" href="#使用selenium"><span>使用Selenium</span></a></h3><p>我们可以先通过<code>pip</code>来安装 Selenium，命令如下所示。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">pip install selenium</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="加载页面" tabindex="-1"><a class="header-anchor" href="#加载页面"><span>加载页面</span></a></h4><p>接下来，我们通过下面的代码驱动 Chrome 浏览器打开百度。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">from selenium import webdriver</span>
<span class="line"></span>
<span class="line"># 创建Chrome浏览器对象</span>
<span class="line">browser = webdriver.Chrome()</span>
<span class="line"># 加载指定的页面</span>
<span class="line">browser.get(&#39;https://www.baidu.com/&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不愿意使用 Chrome 浏览器，也可以修改上面的代码操控其他浏览器，只需创建对应的浏览器对象（如 Firefox、Safari 等）即可。运行上面的程序，如果看到如下所示的错误提示，那是说明我们还没有将 Chrome 浏览器的驱动添加到 PATH 环境变量中，也没有在程序中指定 Chrome 浏览器驱动所在的位置。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">selenium.common.exceptions.WebDriverException: Message: &#39;chromedriver&#39; executable needs to be in PATH. Please see https://sites.google.com/a/chromium.org/chromedriver/home</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解决这个问题的办法有三种：</p><ol><li><p>将下载的 ChromeDriver 放到已有的 PATH 环境变量下，建议直接跟 Python 解释器放在同一个目录，因为之前安装 Python 的时候我们已经将 Python 解释器的路径放到 PATH 环境变量中了。</p></li><li><p>将 ChromeDriver 放到项目虚拟环境下的 <code>bin</code> 文件夹中（Windows 系统对应的目录是 <code>Scripts</code>），这样 ChromeDriver 就跟虚拟环境下的 Python 解释器在同一个位置，肯定是能够找到的。</p></li><li><p>修改上面的代码，在创建 Chrome 对象时，通过<code>service</code>参数配置<code>Service</code>对象，并通过创建<code>Service</code>对象的<code>executable_path</code>参数指定 ChromeDriver 所在的位置，如下所示：</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">from selenium import webdriver</span>
<span class="line">from selenium.webdriver.chrome.service import Service</span>
<span class="line"></span>
<span class="line">browser = webdriver.Chrome(service=Service(executable_path=&#39;venv/bin/chromedriver&#39;))</span>
<span class="line">browser.get(&#39;https://www.baidu.com/&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="查找元素和模拟用户行为" tabindex="-1"><a class="header-anchor" href="#查找元素和模拟用户行为"><span>查找元素和模拟用户行为</span></a></h4><p>接下来，我们可以尝试模拟用户在百度首页的文本框输入搜索关键字并点击“百度一下”按钮。在完成页面加载后，可以通过<code>Chrome</code>对象的<code>find_element</code>和<code>find_elements</code>方法来获取页面元素，Selenium 支持多种获取元素的方式，包括：CSS 选择器、XPath、元素名字（标签名）、元素 ID、类名等，前者可以获取单个页面元素（<code>WebElement</code>对象），后者可以获取多个页面元素构成的列表。获取到<code>WebElement</code>对象以后，可以通过<code>send_keys</code>来模拟用户输入行为，可以通过<code>click</code>来模拟用户点击操作，代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">from selenium import webdriver</span>
<span class="line">from selenium.webdriver.common.by import By</span>
<span class="line"></span>
<span class="line">browser = webdriver.Chrome()</span>
<span class="line">browser.get(&#39;https://www.baidu.com/&#39;)</span>
<span class="line"># 通过元素ID获取元素</span>
<span class="line">kw_input = browser.find_element(By.ID, &#39;kw&#39;)</span>
<span class="line"># 模拟用户输入行为</span>
<span class="line">kw_input.send_keys(&#39;Python&#39;)</span>
<span class="line"># 通过CSS选择器获取元素</span>
<span class="line">su_button = browser.find_element(By.CSS_SELECTOR, &#39;#su&#39;)</span>
<span class="line"># 模拟用户点击行为</span>
<span class="line">su_button.click()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要执行一个系列动作，例如模拟拖拽操作，可以创建<code>ActionChains</code>对象，有兴趣的读者可以自行研究。</p><h4 id="隐式等待和显式等待" tabindex="-1"><a class="header-anchor" href="#隐式等待和显式等待"><span>隐式等待和显式等待</span></a></h4><p>这里还有一个细节需要大家知道，网页上的元素可能是动态生成的，在我们使用<code>find_element</code>或<code>find_elements</code>方法获取的时候，可能还没有完成渲染，这时会引发<code>NoSuchElementException</code>错误。为了解决这个问题，我们可以使用隐式等待的方式，通过设置等待时间让浏览器完成对页面元素的渲染。除此之外，我们还可以使用显示等待，通过创建<code>WebDriverWait</code>对象，并设置等待时间和条件，当条件没有满足时，我们可以先等待再尝试进行后续的操作，具体的代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">from selenium import webdriver</span>
<span class="line">from selenium.webdriver.common.by import By</span>
<span class="line">from selenium.webdriver.support import expected_conditions</span>
<span class="line">from selenium.webdriver.support.wait import WebDriverWait</span>
<span class="line"></span>
<span class="line">browser = webdriver.Chrome()</span>
<span class="line"># 设置浏览器窗口大小</span>
<span class="line">browser.set_window_size(1200, 800)</span>
<span class="line">browser.get(&#39;https://www.baidu.com/&#39;)</span>
<span class="line"># 设置隐式等待时间为10秒</span>
<span class="line">browser.implicitly_wait(10)</span>
<span class="line">kw_input = browser.find_element(By.ID, &#39;kw&#39;)</span>
<span class="line">kw_input.send_keys(&#39;Python&#39;)</span>
<span class="line">su_button = browser.find_element(By.CSS_SELECTOR, &#39;#su&#39;)</span>
<span class="line">su_button.click()</span>
<span class="line"># 创建显示等待对象</span>
<span class="line">wait_obj = WebDriverWait(browser, 10)</span>
<span class="line"># 设置等待条件（等搜索结果的div出现）</span>
<span class="line">wait_obj.until(</span>
<span class="line">    expected_conditions.presence_of_element_located(</span>
<span class="line">        (By.CSS_SELECTOR, &#39;#content_left&#39;)</span>
<span class="line">    )</span>
<span class="line">)</span>
<span class="line"># 截屏</span>
<span class="line">browser.get_screenshot_as_file(&#39;python_result.png&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面设置的等待条件<code>presence_of_element_located</code>表示等待指定元素出现，下面的表格列出了常用的等待条件及其含义。</p><table><thead><tr><th>等待条件</th><th>具体含义</th></tr></thead><tbody><tr><td><code>title_is / title_contains</code></td><td>标题是指定的内容 / 标题包含指定的内容</td></tr><tr><td><code>visibility_of</code></td><td>元素可见</td></tr><tr><td><code>presence_of_element_located</code></td><td>定位的元素加载完成</td></tr><tr><td><code>visibility_of_element_located</code></td><td>定位的元素变得可见</td></tr><tr><td><code>invisibility_of_element_located</code></td><td>定位的元素变得不可见</td></tr><tr><td><code>presence_of_all_elements_located</code></td><td>定位的所有元素加载完成</td></tr><tr><td><code>text_to_be_present_in_element</code></td><td>元素包含指定的内容</td></tr><tr><td><code>text_to_be_present_in_element_value</code></td><td>元素的<code>value</code>属性包含指定的内容</td></tr><tr><td><code>frame_to_be_available_and_switch_to_it</code></td><td>载入并切换到指定的内部窗口</td></tr><tr><td><code>element_to_be_clickable</code></td><td>元素可点击</td></tr><tr><td><code>element_to_be_selected</code></td><td>元素被选中</td></tr><tr><td><code>element_located_to_be_selected</code></td><td>定位的元素被选中</td></tr><tr><td><code>alert_is_present</code></td><td>出现 Alert 弹窗</td></tr></tbody></table><h4 id="执行javascript代码" tabindex="-1"><a class="header-anchor" href="#执行javascript代码"><span>执行JavaScript代码</span></a></h4><p>对于使用瀑布式加载的页面，如果希望在浏览器窗口中加载更多的内容，可以通过浏览器对象的<code>execute_scripts</code>方法执行 JavaScript 代码来实现。对于一些高级的爬取操作，也很有可能会用到类似的操作，如果你的爬虫代码需要 JavaScript 的支持，建议先对 JavaScript 进行适当的了解，尤其是 JavaScript 中的 BOM 和 DOM 操作。我们在上面的代码中截屏之前加入下面的代码，这样就可以利用 JavaScript 将网页滚到最下方。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line"># 执行JavaScript代码</span>
<span class="line">browser.execute_script(&#39;document.documentElement.scrollTop = document.documentElement.scrollHeight&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="selenium反爬的破解" tabindex="-1"><a class="header-anchor" href="#selenium反爬的破解"><span>Selenium反爬的破解</span></a></h4><p>有一些网站专门针对 Selenium 设置了反爬措施，因为使用 Selenium 驱动的浏览器，在控制台中可以看到如下所示的<code>webdriver</code>属性值为<code>true</code>，如果要绕过这项检查，可以在加载页面之前，先通过执行 JavaScript 代码将其修改为<code>undefined</code>。</p><img src="https://gitee.com/jackfrued/mypic/raw/master/20220310154246.png" style="zoom:50%;"><p>另一方面，我们还可以将浏览器窗口上的“Chrome正受到自动测试软件的控制”隐藏掉，完整的代码如下所示。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line"># 创建Chrome参数对象</span>
<span class="line">options = webdriver.ChromeOptions()</span>
<span class="line"># 添加试验性参数</span>
<span class="line">options.add_experimental_option(&#39;excludeSwitches&#39;, [&#39;enable-automation&#39;])</span>
<span class="line">options.add_experimental_option(&#39;useAutomationExtension&#39;, False)</span>
<span class="line"># 创建Chrome浏览器对象并传入参数</span>
<span class="line">browser = webdriver.Chrome(options=options)</span>
<span class="line"># 执行Chrome开发者协议命令（在加载页面时执行指定的JavaScript代码）</span>
<span class="line">browser.execute_cdp_cmd(</span>
<span class="line">    &#39;Page.addScriptToEvaluateOnNewDocument&#39;,</span>
<span class="line">    {&#39;source&#39;: &#39;Object.defineProperty(navigator, &quot;webdriver&quot;, {get: () =&gt; undefined})&#39;}</span>
<span class="line">)</span>
<span class="line">browser.set_window_size(1200, 800)</span>
<span class="line">browser.get(&#39;https://www.baidu.com/&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="无头浏览器" tabindex="-1"><a class="header-anchor" href="#无头浏览器"><span>无头浏览器</span></a></h4><p>很多时候，我们在爬取数据时并不需要看到浏览器窗口，只要有 Chrome 浏览器以及对应的驱动程序，我们的爬虫就能够运转起来。如果不想看到浏览器窗口，我们可以通过下面的方式设置使用无头浏览器。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">options = webdriver.ChromeOptions()</span>
<span class="line">options.add_argument(&#39;--headless&#39;)</span>
<span class="line">browser = webdriver.Chrome(options=options)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api参考" tabindex="-1"><a class="header-anchor" href="#api参考"><span>API参考</span></a></h3><p>Selenium 相关的知识还有很多，我们在此就不一一赘述了，下面为大家罗列一些浏览器对象和<code>WebElement</code>对象常用的属性和方法。具体的内容大家还可以参考 Selenium <a href="https://selenium-python-zh.readthedocs.io/en/latest/index.html" target="_blank" rel="noopener noreferrer">官方文档的中文翻译</a>。</p><h4 id="浏览器对象" tabindex="-1"><a class="header-anchor" href="#浏览器对象"><span>浏览器对象</span></a></h4><p>表1. 常用属性</p><table><thead><tr><th>属性名</th><th>描述</th></tr></thead><tbody><tr><td><code>current_url</code></td><td>当前页面的URL</td></tr><tr><td><code>current_window_handle</code></td><td>当前窗口的句柄（引用）</td></tr><tr><td><code>name</code></td><td>浏览器的名称</td></tr><tr><td><code>orientation</code></td><td>当前设备的方向（横屏、竖屏）</td></tr><tr><td><code>page_source</code></td><td>当前页面的源代码（包括动态内容）</td></tr><tr><td><code>title</code></td><td>当前页面的标题</td></tr><tr><td><code>window_handles</code></td><td>浏览器打开的所有窗口的句柄</td></tr></tbody></table><p>表2. 常用方法</p><table><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td><code>back</code> / <code>forward</code></td><td>在浏览历史记录中后退/前进</td></tr><tr><td><code>close</code> / <code>quit</code></td><td>关闭当前浏览器窗口 / 退出浏览器实例</td></tr><tr><td><code>get</code></td><td>加载指定 URL 的页面到浏览器中</td></tr><tr><td><code>maximize_window</code></td><td>将浏览器窗口最大化</td></tr><tr><td><code>refresh</code></td><td>刷新当前页面</td></tr><tr><td><code>set_page_load_timeout</code></td><td>设置页面加载超时时间</td></tr><tr><td><code>set_script_timeout</code></td><td>设置 JavaScript 执行超时时间</td></tr><tr><td><code>implicit_wait</code></td><td>设置等待元素被找到或目标指令完成</td></tr><tr><td><code>get_cookie</code> / <code>get_cookies</code></td><td>获取指定的Cookie / 获取所有Cookie</td></tr><tr><td><code>add_cookie</code></td><td>添加 Cookie 信息</td></tr><tr><td><code>delete_cookie</code> / <code>delete_all_cookies</code></td><td>删除指定的 Cookie / 删除所有 Cookie</td></tr><tr><td><code>find_element</code> / <code>find_elements</code></td><td>查找单个元素 / 查找一系列元素</td></tr></tbody></table><h4 id="webelement对象" tabindex="-1"><a class="header-anchor" href="#webelement对象"><span>WebElement对象</span></a></h4><p>表1. WebElement常用属性</p><table><thead><tr><th>属性名</th><th>描述</th></tr></thead><tbody><tr><td><code>location</code></td><td>元素的位置</td></tr><tr><td><code>size</code></td><td>元素的尺寸</td></tr><tr><td><code>text</code></td><td>元素的文本内容</td></tr><tr><td><code>id</code></td><td>元素的 ID</td></tr><tr><td><code>tag_name</code></td><td>元素的标签名</td></tr></tbody></table><p>表2. 常用方法</p><table><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td><code>clear</code></td><td>清空文本框或文本域中的内容</td></tr><tr><td><code>click</code></td><td>点击元素</td></tr><tr><td><code>get_attribute</code></td><td>获取元素的属性值</td></tr><tr><td><code>is_displayed</code></td><td>判断元素对于用户是否可见</td></tr><tr><td><code>is_enabled</code></td><td>判断元素是否处于可用状态</td></tr><tr><td><code>is_selected</code></td><td>判断元素（单选框和复选框）是否被选中</td></tr><tr><td><code>send_keys</code></td><td>模拟输入文本</td></tr><tr><td><code>submit</code></td><td>提交表单</td></tr><tr><td><code>value_of_css_property</code></td><td>获取指定的CSS属性值</td></tr><tr><td><code>find_element</code> / <code>find_elements</code></td><td>获取单个子元素 / 获取一系列子元素</td></tr><tr><td><code>screenshot</code></td><td>为元素生成快照</td></tr></tbody></table><h3 id="简单案例" tabindex="-1"><a class="header-anchor" href="#简单案例"><span>简单案例</span></a></h3><p>下面的例子演示了如何使用 Selenium 从“360图片”网站搜索和下载图片。</p><div class="language-Python line-numbers-mode" data-highlighter="prismjs" data-ext="Python" data-title="Python"><pre><code><span class="line">import os</span>
<span class="line">import time</span>
<span class="line">from concurrent.futures import ThreadPoolExecutor</span>
<span class="line"></span>
<span class="line">import requests</span>
<span class="line">from selenium import webdriver</span>
<span class="line">from selenium.webdriver.common.by import By</span>
<span class="line">from selenium.webdriver.common.keys import Keys</span>
<span class="line"></span>
<span class="line">DOWNLOAD_PATH = &#39;images/&#39;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">def download_picture(picture_url: str):</span>
<span class="line">    &quot;&quot;&quot;</span>
<span class="line">    下载保存图片</span>
<span class="line">    :param picture_url: 图片的URL</span>
<span class="line">    &quot;&quot;&quot;</span>
<span class="line">    filename = picture_url[picture_url.rfind(&#39;/&#39;) + 1:]</span>
<span class="line">    resp = requests.get(picture_url)</span>
<span class="line">    with open(os.path.join(DOWNLOAD_PATH, filename), &#39;wb&#39;) as file:</span>
<span class="line">        file.write(resp.content)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">if not os.path.exists(DOWNLOAD_PATH):</span>
<span class="line">    os.makedirs(DOWNLOAD_PATH)</span>
<span class="line">browser = webdriver.Chrome()</span>
<span class="line">browser.get(&#39;https://image.so.com/z?ch=beauty&#39;)</span>
<span class="line">browser.implicitly_wait(10)</span>
<span class="line">kw_input = browser.find_element(By.CSS_SELECTOR, &#39;input[name=q]&#39;)</span>
<span class="line">kw_input.send_keys(&#39;苍老师&#39;)</span>
<span class="line">kw_input.send_keys(Keys.ENTER)</span>
<span class="line">for _ in range(10):</span>
<span class="line">    browser.execute_script(</span>
<span class="line">        &#39;document.documentElement.scrollTop = document.documentElement.scrollHeight&#39;</span>
<span class="line">    )</span>
<span class="line">    time.sleep(1)</span>
<span class="line">imgs = browser.find_elements(By.CSS_SELECTOR, &#39;div.waterfall img&#39;)</span>
<span class="line">with ThreadPoolExecutor(max_workers=32) as pool:</span>
<span class="line">    for img in imgs:</span>
<span class="line">        pic_url = img.get_attribute(&#39;src&#39;)</span>
<span class="line">        pool.submit(download_picture, pic_url)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面的代码，检查指定的目录下是否下载了根据关键词搜索到的图片。</p>`,51)]))}const c=n(a,[["render",t],["__file","64.使用Selenium抓取网页动态内容.html.vue"]]),o=JSON.parse('{"path":"/Day61-65/64.%E4%BD%BF%E7%94%A8Selenium%E6%8A%93%E5%8F%96%E7%BD%91%E9%A1%B5%E5%8A%A8%E6%80%81%E5%86%85%E5%AE%B9.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"使用Selenium抓取网页动态内容","slug":"使用selenium抓取网页动态内容","link":"#使用selenium抓取网页动态内容","children":[{"level":3,"title":"Selenium 介绍","slug":"selenium-介绍","link":"#selenium-介绍","children":[]},{"level":3,"title":"使用Selenium","slug":"使用selenium","link":"#使用selenium","children":[]},{"level":3,"title":"API参考","slug":"api参考","link":"#api参考","children":[]},{"level":3,"title":"简单案例","slug":"简单案例","link":"#简单案例","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"Day61-65/64.使用Selenium抓取网页动态内容.md"}');export{c as comp,o as data};
