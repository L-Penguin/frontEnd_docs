<template><h2 id="html常见问题整理" tabindex="-1"><a class="header-anchor" href="#html常见问题整理" aria-hidden="true">#</a> HTML常见问题整理</h2>
<h3 id="html5部分" tabindex="-1"><a class="header-anchor" href="#html5部分" aria-hidden="true">#</a> html5部分</h3>
<h4 id="html语义化" tabindex="-1"><a class="header-anchor" href="#html语义化" aria-hidden="true">#</a> html语义化</h4>
<blockquote>
<p>根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和更好代码书写的同时<strong>让浏览器的爬虫和机器更好的解析</strong>。</p>
</blockquote>
<p>优点：</p>
<ul>
<li>没有css的情况下，页面也能呈现很好的内容结构和代码结构；</li>
<li>提高用户体验：例如<code>title</code>、<code>alt</code>用于解释名词和解释图片信息；</li>
<li>有利于SEO：和搜索引擎良好沟通，有助于爬虫爬取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；</li>
<li>方便其他设备解析：例如屏幕阅读器以意义的方式来渲染网页；</li>
<li>便于团队开发和维护：语义化更具有可读性，可以减少差异化。</li>
</ul>
<h4 id="html5新标签" tabindex="-1"><a class="header-anchor" href="#html5新标签" aria-hidden="true">#</a> html5新标签</h4>
<blockquote>
<p>结构标签：<code>&lt;header&gt;</code>，<code>&lt;nav&gt;</code>、<code>&lt;section&gt;</code>、<code>&lt;article&gt;</code>、<code>&lt;aside&gt;</code>、<code>&lt;figure&gt;</code>、<code>&lt;hgroup&gt;</code>、<code>&lt;footer&gt;</code></p>
<p>表单标签（针对input的type）：<code>search</code>、<code>email</code>、<code>url</code>、<code>number</code>、<code>range</code>、<code>color</code>、<code>date</code></p>
<p>媒体标签：<code>&lt;video&gt;</code>、<code>&lt;audio&gt;</code>、<code>&lt;embed&gt;</code></p>
<p>其他功能标签：<code>&lt;progress&gt;</code>、<code>&lt;datalist&gt;</code>、<code>&lt;detail&gt;</code>、<code>&lt;mark&gt;</code>、<code>&lt;time&gt;</code>、<code>&lt;canvas&gt;</code>、<code>&lt;ruby&gt;</code>、<code>&lt;command&gt;</code></p>
</blockquote>
<h3 id="script标签中的属性-defer、async" tabindex="-1"><a class="header-anchor" href="#script标签中的属性-defer、async" aria-hidden="true">#</a> script标签中的属性：defer、async</h3>
<blockquote>
<p><code>charset</code>----规定在脚本中使用的字符编码(仅适用于外部脚本)</p>
<p><code>src</code>----规定外部脚本的URL</p>
<p><code>type</code>----规定脚本的MIME类型</p>
<p><code>defe</code>----延迟加载脚本，页面加载之后才会运行脚本</p>
<p><code>async</code>----异步执行脚本，一旦脚本可用，则会异步运行</p>
</blockquote>
<p><strong>defer和async的区别</strong></p>
<p>由于当html解析到script标签时就会发生阻塞（只解析js脚本）</p>
<p>defer和async都用于外部脚本下载，区别在于async异步下载完成后会立即执行，即阻塞html解析，而defer下载完成后不会立即执行，而是等待页面内解析完成后执行。</p>
<ul>
<li>async适合于第三方脚本，不需要操作DOM</li>
<li>defer适合于需要操作DOM的js脚本</li>
</ul>
<h3 id="href和src的区别" tabindex="-1"><a class="header-anchor" href="#href和src的区别" aria-hidden="true">#</a> href和src的区别</h3>
<blockquote>
<p>src的特性：</p>
<ol>
<li>引用外部资源：比如<code>script</code>元素、<code>img</code>元素、<code>video</code>元素；</li>
<li>会替换元素本身的内容：导入文档的内容会嵌入到当前元素中，导致原本的内容被替换掉；</li>
<li>会暂停其他资源的下载：当浏览器解析到使用src的元素时，会暂停其他资源的下载，直到src引用资源加载、编译、执行完毕。这也是为什么script元素推荐放到html结构的底部。</li>
</ol>
<p>href的特性：</p>
<ol>
<li>表示超链接：比如<code>a</code>标签、<code>link</code>标签，表示外部资源与该页面的联系；</li>
<li>不会替换元素本身的内容；</li>
<li>不会暂停其他资源的下载：像css那样影响页面观感的可以放在html结构的头部优先加载。</li>
</ol>
</blockquote>
<p>核心思想的不同：</p>
<ul>
<li>src代表的是网站的一部分，没有会对网站的使用造成影响；</li>
<li>href代表网站的附属资源，没有不会对网站的核心逻辑和结构造成影响。</li>
</ul>
<p>为什么引用src使用href？</p>
<ul>
<li>正如href代表的含义一样，CSS属于网站的附属资源，不影响网站核心逻辑和结构；</li>
<li>也可以简单归结为历史遗留问题。</li>
</ul>
<h3 id="css和js的导入" tabindex="-1"><a class="header-anchor" href="#css和js的导入" aria-hidden="true">#</a> css和js的导入</h3>
<p>导入css</p>
<ul>
<li>
<p>行内式：即在标签元素的style属性中设定CSS样式</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span> <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>This is a line of Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>嵌入式：使用style标签设置CSS</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p>链接式：使用link标签引入外部CSS文件</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>导入式：使用CSS的规则引入外部CSS文件</p>
</li>
</ul>
<p>导入js</p>
<ul>
<li>
<p>外部引入：使用script标签中的src</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>内部引入：使用script标签</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	coding
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>行内引入：在标签中使用js代码</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>行内引入<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token literal-property property">javascript</span><span class="token operator">:</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="少见html属性" tabindex="-1"><a class="header-anchor" href="#少见html属性" aria-hidden="true">#</a> 少见html属性</h3>
<ol>
<li>
<p>Multiple</p>
<blockquote>
<p><code>multiple</code> 属性是一个布尔值，允许用户在 <code>&lt;input&gt;</code> 标签操作，<code>&lt;input&gt;</code> 标签的类型 <code>type</code> 是 <code>file</code> 或者 <code>email</code>。当然，你也可以用在 <code>&lt;select&gt;</code> 标签。</p>
<p>对于 <code>email</code> 类型的 <code>&lt;input&gt;</code>，添加上 <code>multiple</code> 属性，你输入的邮箱值需要用 <code>,</code> 分隔开，内容不允许有空格。</p>
<p>对于 <code>file</code> 类型的 <code>&lt;input&gt;</code>，你可以多选文件上传。</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">multiple</span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>Accept</p>
<blockquote>
<p><code>&lt;input&gt;</code> 元素有 <code>accept</code> 属性，它允许你指明上传文件 <code>file</code> 的类型。</p>
<p>你需要通过 <code>,</code> 来分割文件类型。</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">accept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.png, .jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>Contenteditable</p>
<blockquote>
<p><code>contenteditable</code> 是一个全局的属性（对于所有的 HTML 元素都适用），它可以使得 <code>HTML</code> 的可被用户编辑。</p>
<p><strong>需要注意的是，它仅对可见内容和DOM的内容进行更改。</strong></p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">contenteditable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>I'm a cool editable div ;)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>当然，如果你想使得整个文档的内容都可以编辑，你可以直接使用 <code>document.designMode = &quot;on&quot;</code>，关闭编辑则使用 <code>document.designMode = &quot;off&quot;</code>。如果你想保存整个文档或者某个编辑内容，可以直接通过 DOM 操作完成。</p>
</blockquote>
</li>
<li>
<p>Spellcheck</p>
<blockquote>
<p><code>spellcheck</code> 也是一个全局的属性，可以检验 <code>HTML</code> 内容是否有拼写的语法错误，你可以用在 <code>input</code> 或其他元素上。</p>
<p>注意：通常不检查不可编辑元素的拼写错误，即使 <code>spellcheck</code> 被设置为 <code>true</code> 并且浏览器支持检查。</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 不检查 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">spellcheck</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
Thanks furr checkinng my speling :)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 检查 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">contenteditable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">spellcheck</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
Thanks furr checkinng my speling :)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
<li>
<p>Translate</p>
<blockquote>
<p><code>translate</code>告诉浏览器制定的内容是否应该被翻译。</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">translate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>LearnPine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>Poster</p>
<blockquote>
<p>当视频正在加载中或者当用户开始播放视频前，我们可以用 <code>poster</code> 属性设定指定的视频海报。</p>
<p>如果 <code>poster</code> 未指定图片，则视频的第一帧可用之后作为海报显示。</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span> 
<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://bit.ly/3nWh78w<span class="token punctuation">"</span></span>
<span class="token attr-name">poster</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>posterImage.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
<li>
<p>Download</p>
<blockquote>
<p><code>Download</code>属性结合<code>&lt;a&gt;</code>元素，告诉浏览器下载的<code>URL</code>，而不是到导航到它，提示用户将其下载到本地。还可以命名文件。</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index.html<span class="token punctuation">"</span></span> <span class="token attr-name">download</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fileName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Download me :)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>url</code>指向video，image资源，不会直接下载，会进行跳转。</p>
</li>
</ol>
</template>

<style>
	@import "style.css"
	/* @import url("style.css") */
</style>
