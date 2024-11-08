import{_ as n,c as t,a as e,o as i}from"./app-D-bq_jAa.js";const a={};function d(l,s){return i(),t("div",null,s[0]||(s[0]=[e(`<h2 id="接口文档参考示例" tabindex="-1"><a class="header-anchor" href="#接口文档参考示例"><span>接口文档参考示例</span></a></h2><ol start="0"><li><p>用户登录 - <strong>POST</strong> <code>/api/login/</code></p><p>开发者：骆昊</p><p>版本号：v1</p><p>最后修改时间：</p><p>接口说明：登录成功后，会生成或更新用户令牌（token）。</p><p>使用帮助：测试数据库中预设了四个可供使用的账号，如下表所示。</p><table><thead><tr><th>用户名</th><th>用户口令</th><th>角色</th></tr></thead><tbody><tr><td>jackfrued</td><td>123456</td><td>管理员</td></tr><tr><td>wangdachui</td><td>123123</td><td>普通用户</td></tr><tr><td>hellokitty</td><td>123123</td><td>房地产经理人</td></tr><tr><td>wuzetian</td><td>123456</td><td>房东</td></tr></tbody></table><p>请求参数：</p><table><thead><tr><th>参数名</th><th>类型</th><th>是否必填</th><th>参数位置</th><th>说明</th></tr></thead><tbody><tr><td>username</td><td>字符串</td><td>是</td><td>消息体</td><td>用户名</td></tr><tr><td>password</td><td>字符串</td><td>是</td><td>消息体</td><td>用户口令</td></tr></tbody></table><p>响应信息：</p><ul><li><p>登录成功：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;code&quot;: 30000,</span>
<span class="line">    &quot;message&quot;: &quot;用户登录成功&quot;,</span>
<span class="line">    &quot;token&quot;: &quot;f83e0f624e2311e9af1f00163e02b646&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>登录失败：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;code&quot;: 30001,</span>
<span class="line">    &quot;message&quot;: &quot;用户名或密码错误&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>发送短信验证码 - <strong>GET</strong> <code>/api/mobile_code/{国内手机号}/</code></p><p>开发者：骆昊</p><p>版本号：v1</p><p>接口说明：给指定手机号发送短信验证码的接口，手机号必须是国内手机号，作为路径参数写到URL中。接口显示短信发送成功时，指定的手机号并不会收到短息，因为使用的三方短信平台赠送的测试短信已经用完了。</p><p>使用帮助：国内手机号暂不支持国际区号。</p><p>请求参数：暂无。</p><p>响应信息：</p><ul><li><p>请求成功：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;code&quot;: 10001,</span>
<span class="line">    &quot;msg&quot;: &quot;短信验证码发送成功&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>两次请求间隔小于60秒：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;code&quot;: 10002,</span>
<span class="line">    &quot;msg&quot;: &quot;请不要在60秒以内重复发送手机验证码&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>手机号无效：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;code&quot;: 10003,</span>
<span class="line">    &quot;msg&quot;: &quot;请提供有效的手机号&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>短信服务平台故障：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;code&quot;: 10004,</span>
<span class="line">    &quot;msg&quot;: &quot;短信服务暂时无法使用&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>获取所有省级行政单位 - <strong>GET</strong> <code>/api/districts/</code></p><p>开发者：骆昊</p><p>版本号：v1</p><p>接口说明：暂无。</p><p>使用帮助：暂无。</p><p>请求参数：暂无。</p><p>响应信息：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">[</span>
<span class="line">    {</span>
<span class="line">        &quot;distid&quot;: 110000,</span>
<span class="line">        &quot;name&quot;: &quot;北京市&quot;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        &quot;distid&quot;: 120000,</span>
<span class="line">        &quot;name&quot;: &quot;天津市&quot;</span>
<span class="line">    }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>获取指定行政单位详情及其管辖的行政单位 - <strong>GET</strong> <code>/api/districts/{行政单位编号}/</code></p><p>开发者：骆昊</p><p>版本号：v1</p><p>接口说明：通过URL参数指定行政单位编号，如果行政单位编号为省级行政单位编号，则返回该省以及该省所辖市级行政单位的信息；如果行政单位编号为市级行政单位编号，则返回该市以及该市所辖区县的信息；如果行政单位编号为区县一级行政单位编号，则返回该区县的信息，下级行政单位<code>cities</code>属性值为<code>[]</code>。</p><p>使用帮助：数据库中除四川省外其他行政单位的“intro”数据都没有录入，该字段可能为空字符串。</p><p>请求参数：暂无。</p><p>响应信息：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;distid&quot;: 510000,</span>
<span class="line">    &quot;name&quot;: &quot;四川省&quot;,</span>
<span class="line">    &quot;intro&quot;: &quot;位于中国西南地区内陆，东连重庆，南邻云南、贵州，西接西藏，北界陕西、甘肃、青海，四川省总面积48.6万平方千米，省会成都。截至2018年底，四川省下辖18个省辖市，3个自治州，17个县级市，108个县，4个自治县，54个市辖区。&quot;,</span>
<span class="line">    &quot;cities&quot;: [</span>
<span class="line">        {</span>
<span class="line">            &quot;distid&quot;: 510100,</span>
<span class="line">            &quot;name&quot;: &quot;成都市&quot;</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;distid&quot;: 510300,</span>
<span class="line">            &quot;name&quot;: &quot;自贡市&quot;</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;distid&quot;: 510400,</span>
<span class="line">            &quot;name&quot;: &quot;攀枝花市&quot;</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>获取热门城市 - <strong>GET</strong> <code>/api/hotcities/</code></p><p>开发者：骆昊</p><p>版本号：v1</p><p>接口说明：暂无。</p><p>使用帮助：暂无。</p><p>请求参数：暂无。</p><p>响应信息：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">[</span>
<span class="line">    {</span>
<span class="line">        &quot;distid&quot;: 110100,</span>
<span class="line">        &quot;name&quot;: &quot;北京市&quot;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        &quot;distid&quot;: 120100,</span>
<span class="line">        &quot;name&quot;: &quot;天津市&quot;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        &quot;distid&quot;: 130100,</span>
<span class="line">        &quot;name&quot;: &quot;石家庄&quot;</span>
<span class="line">    }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>分页获取房地产经理人信息 - <strong>GET</strong> <code>/api/agents/</code></p><p>开发者：骆昊</p><p>版本号：v1</p><p>接口说明：经理人姓名按照前缀模糊匹配的方式进行处理；经理人服务星级是指经理人服务星级不得低于该星级；经理人是否持证只有0（未持证上岗）和1（持证上岗）两个选项。三个参数代表的筛选条件之间是而且的关系。返回结果为分页之后的房地产经理人信息。</p><p>使用帮助：暂无。</p><p>请求参数：</p><table><thead><tr><th>参数名</th><th>类型</th><th>是否必填</th><th>参数位置</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td>字符串</td><td>否</td><td>查询参数</td><td>经理人姓名</td></tr><tr><td>key</td><td>字符串</td><td>否</td><td>查询参数</td><td>经理人服务星级</td></tr><tr><td>cert</td><td>字符串</td><td>否</td><td>查询参数</td><td>经理人是否持证</td></tr><tr><td>page</td><td>整数</td><td>否</td><td>查询参数</td><td>页码，默认值为1</td></tr><tr><td>size</td><td>整数</td><td>否</td><td>查询参数</td><td>页面大小，默认值为5，最大值不超过50</td></tr></tbody></table><p>响应信息：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;count&quot;: 1,</span>
<span class="line">    &quot;next&quot;: null,</span>
<span class="line">    &quot;previous&quot;: null,</span>
<span class="line">    &quot;results&quot;: [</span>
<span class="line">        {</span>
<span class="line">            &quot;agentid&quot;: 6,</span>
<span class="line">            &quot;estates&quot;: [</span>
<span class="line">                {</span>
<span class="line">                    &quot;estateid&quot;: 11,</span>
<span class="line">                    &quot;name&quot;: &quot;灵芝新村&quot;,</span>
<span class="line">                    &quot;hot&quot;: 20</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            &quot;name&quot;: &quot;肖利丽&quot;,</span>
<span class="line">            &quot;tel&quot;: &quot;13040813886&quot;,</span>
<span class="line">            &quot;servstar&quot;: 4,</span>
<span class="line">            &quot;realstar&quot;: 4,</span>
<span class="line">            &quot;profstar&quot;: 4,</span>
<span class="line">            &quot;certificated&quot;: false</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>新增房地产经理人 - <strong>POST</strong> <code>/api/agents/</code></p><p>开发者：骆昊</p><p>版本号：v1</p><p>接口说明：暂无。</p><p>使用帮助：需要登录且拥有管理员权限，用户身份令牌在请求头中提供。</p><p>请求参数：</p><table><thead><tr><th>参数名</th><th>类型</th><th>是否必填</th><th>参数位置</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td>字符串</td><td>是</td><td>消息体</td><td>经理人姓名</td></tr><tr><td>tel</td><td>字符串</td><td>是</td><td>消息体</td><td>经理人手机</td></tr><tr><td>servstar</td><td>整数</td><td>否</td><td>消息体</td><td>默认值0</td></tr><tr><td>realstar</td><td>整数</td><td>否</td><td>消息体</td><td>默认值0</td></tr><tr><td>profstar</td><td>整数</td><td>否</td><td>消息体</td><td>默认值0</td></tr><tr><td>certificated</td><td>整数</td><td>否</td><td>消息体</td><td>默认值0</td></tr><tr><td>token</td><td>字符串</td><td>是</td><td>请求头</td><td>用户身份认证令牌</td></tr></tbody></table><p>响应信息：</p><ul><li><p>新增成功 - 状态码<strong>201</strong>：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;agentid&quot;: 8,</span>
<span class="line">    &quot;estates&quot;: [],</span>
<span class="line">    &quot;name&quot;: &quot;孙小美&quot;,</span>
<span class="line">    &quot;tel&quot;: &quot;13800991234&quot;,</span>
<span class="line">    &quot;servstar&quot;: 0,</span>
<span class="line">    &quot;realstar&quot;: 0,</span>
<span class="line">    &quot;profstar&quot;: 0,</span>
<span class="line">    &quot;certificated&quot;: false</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>未提供身份认证信息 - 状态码<strong>401</strong>：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;detail&quot;: &quot;不正确的身份认证信息。&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>当前用户没有操作权限 - 状态码<strong>403</strong>：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;detail&quot;: &quot;您没有执行该操作的权限。&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>编辑房地产经理人信息 - <strong>PUT</strong> <code>/api/agents/{房地产经理人编号}/</code></p><p>开发者：骆昊</p><p>版本号：v1</p><p>接口说明：暂无。</p><p>使用帮助：需要登录且拥有管理员权限，用户身份令牌在请求头中提供。</p><p>请求参数：</p><table><thead><tr><th>参数名</th><th>类型</th><th>是否必填</th><th>参数位置</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td>字符串</td><td>是</td><td>消息体</td><td>经理人姓名</td></tr><tr><td>tel</td><td>字符串</td><td>是</td><td>消息体</td><td>经理人手机</td></tr><tr><td>servstar</td><td>整数</td><td>否</td><td>消息体</td><td>默认值0</td></tr><tr><td>realstar</td><td>整数</td><td>否</td><td>消息体</td><td>默认值0</td></tr><tr><td>profstar</td><td>整数</td><td>否</td><td>消息体</td><td>默认值0</td></tr><tr><td>certificated</td><td>整数</td><td>否</td><td>消息体</td><td>默认值0</td></tr><tr><td>token</td><td>字符串</td><td>是</td><td>请求头</td><td>用户身份认证令牌</td></tr></tbody></table><p>响应信息：</p><ul><li>更新成功 - 状态码<strong>200</strong>：</li></ul><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;agentid&quot;: 1,</span>
<span class="line">    &quot;estates&quot;: [</span>
<span class="line">        {</span>
<span class="line">            &quot;estateid&quot;: 1,</span>
<span class="line">            &quot;name&quot;: &quot;今日家园&quot;,</span>
<span class="line">            &quot;hot&quot;: 20</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;estateid&quot;: 2,</span>
<span class="line">            &quot;name&quot;: &quot;翡翠园&quot;,</span>
<span class="line">            &quot;hot&quot;: 30</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;estateid&quot;: 3,</span>
<span class="line">            &quot;name&quot;: &quot;万科城市花园&quot;,</span>
<span class="line">            &quot;hot&quot;: 22</span>
<span class="line">        }</span>
<span class="line">    ],</span>
<span class="line">    &quot;name&quot;: &quot;袁晓梦&quot;,</span>
<span class="line">    &quot;tel&quot;: &quot;158173555285&quot;,</span>
<span class="line">    &quot;servstar&quot;: 5,</span>
<span class="line">    &quot;realstar&quot;: 4,</span>
<span class="line">    &quot;profstar&quot;: 3,</span>
<span class="line">    &quot;certificated&quot;: true</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>未提供身份认证信息 - 状态码<strong>403</strong> - 与新增类同</li><li>当前用户没有操作权限 - 状态码<strong>403</strong> - 与新增类同</li></ul></li><li><p>删除房地产经理人 - <strong>DELETE</strong> <code>/api/agents/{房地产经理人编号}/</code></p><p>开发者：骆昊</p><p>版本号：v1</p><p>接口说明：暂无。</p><p>使用说明：暂无。</p><p>请求参数：</p><table><thead><tr><th>参数名</th><th>类型</th><th>是否必填</th><th>参数位置</th><th>说明</th></tr></thead><tbody><tr><td>token</td><td>字符串</td><td>是</td><td>请求头</td><td>用户身份认证令牌</td></tr></tbody></table><p>响应信息：</p><ul><li>删除成功 - 状态码<strong>204</strong></li><li>未提供身份认证信息 - 状态码<strong>403</strong> - 与新增类同</li><li>当前用户没有操作权限 - 状态码<strong>403</strong> - 与新增类同</li></ul></li><li><p>分页获取楼盘信息 - <strong>GET</strong> <code>/api/estates/</code></p><p>开发者：骆昊</p><p>版本号：v1</p><p>接口说明：经理人姓名按照前缀模糊匹配的方式进行处理；经理人服务星级是指经理人服务星级不得低于该星级；经理人是否持证只有0（未持证上岗）和1（持证上岗）两个选项。三个参数代表的筛选条件之间是而且的关系。返回结果为分页之后的房地产经理人信息。</p><p>使用帮助：暂无。</p><p>请求参数：</p><table><thead><tr><th>参数名</th><th>类型</th><th>是否必填</th><th>参数位置</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td>字符串</td><td>否</td><td>查询参数</td><td>楼盘名（模糊匹配）</td></tr><tr><td>dist</td><td>字符串</td><td>否</td><td>查询参数</td><td>楼盘所在地区编号</td></tr><tr><td>page</td><td>整数</td><td>否</td><td>查询参数</td><td>页码，默认值为1</td></tr><tr><td>size</td><td>整数</td><td>否</td><td>查询参数</td><td>页面大小，默认值为5，最大值不超过50</td></tr></tbody></table><p>响应信息：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;count&quot;: 16,</span>
<span class="line">    &quot;next&quot;: &quot;https://120.77.222.217/api/estates/?page=2&quot;,</span>
<span class="line">    &quot;previous&quot;: null,</span>
<span class="line">    &quot;results&quot;: [</span>
<span class="line">        {</span>
<span class="line">            &quot;estateid&quot;: 6,</span>
<span class="line">            &quot;district&quot;: {</span>
<span class="line">                &quot;distid&quot;: 440303,</span>
<span class="line">                &quot;name&quot;: &quot;罗湖区&quot;</span>
<span class="line">            },</span>
<span class="line">            &quot;agents&quot;: [</span>
<span class="line">                {</span>
<span class="line">                    &quot;agentid&quot;: 2,</span>
<span class="line">                    &quot;name&quot;: &quot;杨伟&quot;,</span>
<span class="line">                    &quot;tel&quot;: &quot;13352939550&quot;,</span>
<span class="line">                    &quot;servstar&quot;: 3</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                    &quot;agentid&quot;: 4,</span>
<span class="line">                    &quot;name&quot;: &quot;郭志鹏&quot;,</span>
<span class="line">                    &quot;tel&quot;: &quot;13686810707&quot;,</span>
<span class="line">                    &quot;servstar&quot;: 4</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            &quot;name&quot;: &quot;幸福里&quot;,</span>
<span class="line">            &quot;hot&quot;: 300,</span>
<span class="line">            &quot;intro&quot;: &quot;&quot;</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>新增楼盘 - <strong>POST</strong> <code>/api/estates/</code></p></li></ol><p>开发者：骆昊</p><p>版本号：v1</p><p>接口说明：暂无。</p><p>使用帮助：需要登录且拥有管理员权限，用户身份令牌在请求头中提供。</p><p>请求参数：</p><table><thead><tr><th>参数名</th><th>类型</th><th>是否必填</th><th>参数位置</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td>字符串</td><td>是</td><td>消息体</td><td>楼盘名称</td></tr><tr><td>hot</td><td>整数</td><td>否</td><td>消息体</td><td>楼盘热度，默认值0</td></tr><tr><td>intro</td><td>字符串</td><td>否</td><td>消息体</td><td>楼盘介绍，默认值空字符串</td></tr><tr><td>distid</td><td>整数</td><td>是</td><td>消息体</td><td>楼盘所在地区编号</td></tr><tr><td>token</td><td>字符串</td><td>是</td><td>请求头</td><td>用户身份认证令牌</td></tr></tbody></table><p>响应信息：</p><ul><li><p>新增成功 - 状态码<strong>201</strong>：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;estateid&quot;: 17,</span>
<span class="line">    &quot;district&quot;: 510107,</span>
<span class="line">    &quot;name&quot;: &quot;世纪锦苑&quot;,</span>
<span class="line">    &quot;hot&quot;: 100,</span>
<span class="line">    &quot;intro&quot;: &quot;&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>未提供身份认证信息 - 状态码<strong>403</strong>：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;detail&quot;: &quot;请提供有效的身份认证信息&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>当前用户没有操作权限 - 状态码<strong>403</strong>：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;detail&quot;: &quot;You do not have permission to perform this action.&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ol start="11"><li><p>编辑楼盘信息 - <strong>PUT</strong> <code>/api/estates/{楼盘编号}</code></p></li><li><p>删除楼盘信 - <strong>DELETE</strong> <code>/api/estates/{楼盘编号}</code></p></li><li><p>获取所有户型信息 - <strong>GET</strong> <code>/api/housetypes/</code></p></li><li><p>新增户型 - <strong>POST</strong> <code>/api/housetypes/</code></p></li><li><p>编辑户型信息 - <strong>PUT</strong> <code>/api/housetypes/{户型编号}</code></p></li><li><p>删除户型 - <strong>DELETE</strong> <code>/api/housetypes/{户型编号}</code></p></li><li><p>分页获取房源信息 - <strong>GET</strong> <code>/api/houseinfos/</code></p><p>开发者：骆昊</p><p>版本号：v1</p><p>接口说明：暂无。</p><p>使用帮助：暂无。</p><p>请求参数：</p><table><thead><tr><th>参数名</th><th>类型</th><th>是否必填</th><th>参数位置</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>字符串</td><td>否</td><td>查询参数</td><td>房源标题关键词</td></tr><tr><td>dist</td><td>整数</td><td>否</td><td>查询参数</td><td>楼盘所在地区编号</td></tr><tr><td>min_price</td><td>整数</td><td>否</td><td>查询参数</td><td>价格区间下限</td></tr><tr><td>max_price</td><td>整数</td><td>否</td><td>查询参数</td><td>价格区间上限</td></tr><tr><td>type</td><td>整数</td><td>否</td><td>查询参数</td><td>户型编号</td></tr><tr><td>page</td><td>整数</td><td>否</td><td>查询参数</td><td>页码，默认值为1</td></tr><tr><td>size</td><td>整数</td><td>否</td><td>查询参数</td><td>页面大小，默认值为5，最大值不超过50</td></tr></tbody></table><p>响应信息：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">    &quot;count&quot;: 7,</span>
<span class="line">    &quot;next&quot;: &quot;http://localhost:8000/api/houseinfos/?dist=440303&amp;page=2&quot;,</span>
<span class="line">    &quot;previous&quot;: null,</span>
<span class="line">    &quot;results&quot;: [</span>
<span class="line"></span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看房源详情 - <strong>GET</strong> <code>/api/houseinfos/{房源编号}</code></p></li><li><p>新增房源 - <strong>POST</strong> <code>/api/houseinfos/</code></p></li><li><p>编辑房源信息 - <strong>PUT</strong> <code>/api/houseinfos/{房源编号}</code></p></li><li><p>删除房源 - <strong>DELETE</strong> <code>/api/houseinfos/{房源编号}</code></p></li><li><p>随机获取指定数量的房源标签 - <strong>GET</strong> <code>/api/tags/</code></p></li><li><p>分页查看房源标签 - <strong>GET</strong> <code>/api/tags/</code></p></li><li><p>新增房源标签 - <strong>POST</strong> <code>/api/tags/</code></p></li><li><p>删除房源标签 - <strong>DELETE</strong> <code>/api/tags/{房源编号}</code></p></li><li><p>查看房源的图片 - <strong>GET</strong> <code>/api/houseinfos/{房源编号}/photos/</code></p></li><li><p>为房源添加图片 - <strong>POST</strong> <code>/api/houseinfos/{房源编号}/photos/</code></p></li><li><p>删除房源图片 - <strong>DELETE</strong> <code>/api/houseinfos/{房源编号}/photos/{图片编号}</code></p></li></ol>`,11)]))}const r=n(a,[["render",d],["__file","接口文档参考示例.html.vue"]]),u=JSON.parse('{"path":"/%E7%95%AA%E5%A4%96%E7%AF%87/%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3%E5%8F%82%E8%80%83%E7%A4%BA%E4%BE%8B.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"接口文档参考示例","slug":"接口文档参考示例","link":"#接口文档参考示例","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"番外篇/接口文档参考示例.md"}');export{r as comp,u as data};
