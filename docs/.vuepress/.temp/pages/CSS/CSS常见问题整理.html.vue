<template><h2 id="css常见问题整理" tabindex="-1"><a class="header-anchor" href="#css常见问题整理" aria-hidden="true">#</a> CSS常见问题整理</h2>
<blockquote>
<p>整理CSS相关问题</p>
</blockquote>
<h3 id="css优先级" tabindex="-1"><a class="header-anchor" href="#css优先级" aria-hidden="true">#</a> CSS优先级</h3>
<p>行内样式（<code>style=&quot;&quot;</code>） &gt; ID选择器（<code>#box{}</code>） &gt; 类选择器（<code>.con{}</code>） &gt; 标签选择器（<code>div {}</code>） &gt; 通用选择器（<code>*{}</code>）</p>
<p><code>!import</code> &gt; 内联样式(1000) &gt; ID选择器(0100) &gt; 类选择器/属性选择器/伪类选择器(0010) &gt; 元素选择器/伪元素选择器(0001) &gt; 关系选择器/通配符选择器(0000)</p>
<h3 id="重排-reflow-和重绘-repaint-的理解" tabindex="-1"><a class="header-anchor" href="#重排-reflow-和重绘-repaint-的理解" aria-hidden="true">#</a> <code>重排（reflow）</code>和<code>重绘（repaint）</code>的理解</h3>
<blockquote>
<p>重排（回流）：无论通过什么方式影响了元素的<strong>几何信息</strong>（元素在视窗内的位置和尺寸大小），浏览器需要<strong>重新计算</strong>元素在视窗内的集合属性，这个过程叫做重排；</p>
<p>重绘：通过构造渲染书和重排（回流）阶段，我们知道了哪些节点是可见的，以及可见节点的样式和具体的几何信息，接下来就可以将渲染树的每个节点都转换为屏幕上的<strong>实际像素</strong>，这个过程叫做重绘。</p>
</blockquote>
<p>重排 必引起 重绘，重绘 不一定引起 重排。</p>
<h3 id="bfc容器" tabindex="-1"><a class="header-anchor" href="#bfc容器" aria-hidden="true">#</a> BFC容器</h3>
<blockquote>
<ol>
<li>BFC（Block Formatting Context）直译为&quot;块级格式化上下文&quot;。BFC它是一个<strong>独立的渲染区域</strong>，只有Block-level box（块元素）参与，它<strong>规定了内部的Block-level box如何布局</strong>，并且与这个<strong>区域外部毫不相干</strong>。</li>
<li>理解为：创建了BFC的元素就是一个独立的盒子，里面的子元素不会在布局上影响外面的元素（里面怎么布局都不会影响外部），BFC仍属于文档中的普通流。</li>
<li>不是所有的元素、模式都能产生BFC。w3c规范：display属性为block，list-item，table的元素，会产生BFC。</li>
</ol>
</blockquote>
<p><strong>BFC原理：</strong></p>
<ol>
<li>内部的Box会在垂直方向，一个接一个地放置。</li>
<li>Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。</li>
<li>每个元素的margin box的左边，与包含块border box的左边相接触（对于从左往右的格式化，否则相反）。即使存在浮动也是如此。</li>
<li>BFC的区域不会与float box重叠。</li>
<li>BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。</li>
<li>计算BFC的高度时，浮动元素也参与计算。</li>
</ol>
<p><strong>创建BFC：</strong></p>
<ol>
<li>根元素</li>
<li>float属性不为none</li>
<li>position属性不为static和relative</li>
<li>overflow不为visible</li>
<li>display为inline-block、table-cell、table-caption、flex、inline-flex</li>
</ol>
<p><strong>BFC作用：</strong></p>
<ol>
<li>防止外边距重叠。BFC导致的属于同一个BFC中的子元素的margin重叠（Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margi会发生重叠）
解决方法：将其中一个div包裹容器，生成另一个BFC。</li>
<li>清除浮动的影响。块级子元素浮动，如果块级父元素没有设置高度，其会有高度塌陷的情况发生。（子元素浮动后，均开启了BFC，父元素不会被子元素撑开。）
解决方法：只要将父容器设置为BFC就可以把子元素包含进去：这个容器将包含浮动的子元素，它的高度将扩展到可以包含它的子元素，在这个BFC，这些元素将回到页面的常规文档流。</li>
<li>防止文字环绕</li>
</ol>
<h3 id="flex布局、用法、属性" tabindex="-1"><a class="header-anchor" href="#flex布局、用法、属性" aria-hidden="true">#</a> flex布局、用法、属性</h3>
<blockquote>
<p>flex属性在父容器中使用，<code>display: flex</code>。</p>
<p>主轴方向为子项目排列方向，垂轴为子项目换行方向；主轴默认为从左至右，可由<code>flex-direction</code>修改，侧轴默认为从上至下，可由<code>flex-warp</code>修改。</p>
<p>主轴若水平，垂轴则垂直，反之，主轴若垂直，垂轴则水平。<code>flex-direction</code>影响主轴，主轴影响垂轴</p>
</blockquote>
<p><strong>flex父容器属性</strong></p>
<ol>
<li><code>flex-direction----子项目的排列方向(修改主轴方向)</code>
<ul>
<li><code>row(初期值)----从左至右排列</code></li>
<li><code>row-reverse----从右至左排列</code></li>
<li><code>column----从上至下排列(垂轴变为水平方向)</code></li>
<li><code>column-reverse----从下至上排列(垂轴变为水平方向)</code></li>
</ul>
</li>
<li><code>flex-wrap----子项目多行设置(修改垂轴方向)垂轴方向换行</code>
<ul>
<li><code>nowrap(初期值)----不换行</code></li>
<li><code>wrap----换行</code></li>
<li><code>wrap-reverse----向上换行(垂轴方向反转)</code></li>
</ul>
</li>
<li><code>flex-flow----flex-direction和flex-wrap一起指定</code></li>
<li><code>justify-content----水平对齐(主轴的对齐方式)</code>
<ul>
<li><code>flex-start(初期值)----主轴起边方向对齐</code></li>
<li><code>flex-end----主轴终边方向对齐</code></li>
<li><code>center----主轴居中对齐</code></li>
<li><code>space-between----主轴方向均匀布置，起终边距边距不分配空间</code></li>
<li><code>space-around----主轴方向均匀布置，起终边距边距分配空间</code></li>
</ul>
</li>
<li><code>align-items----垂直对齐(垂轴的对齐方式，只对一行有效)</code>
<ul>
<li><code>stretch(初期值)----垂轴方向拉伸铺满</code></li>
<li><code>flex-start----垂轴起边方向对齐</code></li>
<li><code>flex-end----垂轴终边方向对齐</code></li>
<li><code>center----垂轴居中对齐</code></li>
<li><code>baseline----依据子项目第一行文字的基线对齐</code></li>
</ul>
</li>
<li><code>align-content----多行对齐</code>
<ul>
<li><code>stretch(初期值)----垂轴方向拉伸铺满</code></li>
<li><code>flex-start----垂轴起边方向对齐</code></li>
<li><code>flex-end----垂轴终边方向对齐</code></li>
<li><code>center----垂轴居中对齐</code></li>
<li><code>space-between----垂轴方向均匀布置，起终边距边距不分配空间</code></li>
<li><code>space-around----垂轴方向均匀布置，起终边距边距分配空间</code></li>
</ul>
</li>
</ol>
<p><strong>flex子项目</strong></p>
<ol>
<li><code>order----顺序指定(order: 2)根据属性数值大小升序从主轴起边向终边布置子项目</code></li>
<li><code>flex-grow----子项目延伸比率(flex-grow: 2)项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</code></li>
<li><code>flex-shrink----子项目收缩比率(flex-shrink: 2)项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</code></li>
<li><code>flex-basis----子项目的基本宽度(flex-basis: 200px|30%)定义了在分配多余空间之前，项目占据的主轴空间</code></li>
<li><code>flex----flex-grow、flex-shrink、flex-basis一起指定</code></li>
<li><code>align-self----子要素垂直对齐(垂轴的对齐方式，只对单个子项目有效)</code>
<ul>
<li><code>auto(初期值)----继承父元素的align-items</code></li>
<li><code>flex-start----垂轴起边方向对齐</code></li>
<li><code>flex-end----垂轴终边方向对齐</code></li>
<li><code>center----垂轴居中对齐</code></li>
<li><code>stretch----垂轴方向拉伸铺满</code></li>
<li><code>baseline----依据子项目第一行文字的基线对齐</code></li>
</ul>
</li>
</ol>
<p><img src=".\imgs_css\flex-box.png" alt=""></p>
<h3 id="清除浮动-clear-4种方法" tabindex="-1"><a class="header-anchor" href="#清除浮动-clear-4种方法" aria-hidden="true">#</a> 清除浮动：clear（4种方法）</h3>
<blockquote>
<p>清除浮动主要是为了解决：父元素因为子级元素浮动引起的内部高度为0的问题</p>
</blockquote>
<p><strong>clear: clear</strong>本质就是闭合浮动，就是让父盒子闭合出口和入口，不让子盒子出来</p>
<ol>
<li>
<p><strong>额外标签法</strong>（在最后一个浮动标签后，新加一个标签，给其设置<code>clear: both;</code>）（不推荐）</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ie=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.fahter</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid deeppink<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.big</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> darkorange<span class="token punctuation">;</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.small</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> darkmagenta<span class="token punctuation">;</span> 
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.footer</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 900px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> darkslateblue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.clear</span> <span class="token punctuation">{</span>
            <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fahter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>big<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>big<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clear<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>额外标签法<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><ul>
<li>优点：通俗易懂，方便</li>
<li>缺点：添加无意义标签，语义化差</li>
</ul>
</li>
<li>
<p><strong>父级添加overflow属性</strong>（父元素添加<code>overflow: hidden;</code>）（不推荐）</p>
<blockquote>
<p>通过触发BFC方式，实现清除浮动</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>.father {
	width: 400px;
	border: 1px solid deeppink;
	overflow: hidden;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>优点：代码简洁</li>
<li>缺点：内容增多的时候容易造成不会自动换行导致内容被隐藏掉，无法显示要溢出的元素</li>
</ul>
</li>
<li>
<p><strong>使用after伪元素清除浮动</strong>（推荐使用）</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>.clearfix::after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;
}
.clearfix{
    *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fahter clearfix<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>big<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>big<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--&lt;div class="clear">额外标签法&lt;/div>--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul>
<li>优点：符合闭合浮动思想，结构语义化正确</li>
<li>缺点：ie6-7不支持伪元素：after，使用zoom: 1触发hsaLayout</li>
</ul>
</li>
<li>
<p><strong>使用before和after双伪元素清除浮动</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>.clearfix::after,.clearfix::before{
    content: "";
    display: table;
}
.clearfix::after{
    clear: both;
}
.clearfix{
    *zoom: 1;
}
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fahter clearfix<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>big<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>big<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul>
<li>优点：代码更简洁</li>
<li>缺点：用zoom: 1触发hasLayout</li>
</ul>
</li>
</ol>
<h3 id="position定位" tabindex="-1"><a class="header-anchor" href="#position定位" aria-hidden="true">#</a> position定位</h3>
<blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>position: static|absolute|fixed|relative|sticky
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></blockquote>
<h5 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h5>
<ol>
<li><code>static(初期值)----没有定位，元素出现在正常文档流中</code></li>
<li><code>absolute----绝对定位的元素的位置相对于最近的已定位的父元素，如果没有已定位的父元素，那么它的位置相对于</code>
<ul>
<li>absolute 定位使元素的位置与文档流无关，因此不占据空间。</li>
<li>absolute 定位的元素和其他元素重叠。</li>
</ul>
</li>
<li><code>fixed----元素的定位相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动</code>
<ul>
<li>Fixed 定位使元素的位置与文档流无关，因此不占据空间。</li>
<li>Fixed定位的元素和其它元素重叠。</li>
</ul>
</li>
<li><code>relative----相对定位元素的定位是相对其正常位置</code>
<ul>
<li>移动相对定位元素，但它原本所占的空间不会改变。</li>
</ul>
</li>
<li><code>sticky----粘性定位的元素是依赖于用户的滚动，在position: relative与position: fixed定位之间切换</code>
<ul>
<li>它的行为就像<code>position: relative</code>当页面滚动超出目标区域时，它的表现就像<code>position:fixed</code>,它会固定在目标位置。</li>
<li>元素定位表现为跨越特点阈值前为相对定位，之后为固定定位。</li>
<li>这个特定阈值指的是top、right、buttom或left之一，换言之，指定top、right、buttom或left四个阈值其中之一，才可使粘性定位生效，否则其行为与相对定位相同</li>
</ul>
</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;html lang="en">
&lt;head>
    &lt;meta charset="UTF-8">
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge">
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
    &lt;title>Document&lt;/title>

    &lt;style>
        .container {
            width: 1000px;
            height: 2000px;
            text-align: center;
            background-color: aquamarine;
            margin: 0 auto;
        }
        .sticky {
            position: sticky;
            top: 20px;
        }
    &lt;/style>
&lt;/head>
&lt;body>
    &lt;div class="container">
        &lt;h2>sticky示例&lt;/h2>
        &lt;button class="sticky">sticky按钮&lt;/button>
        &lt;p>在阈值之内的时候，sticky表现为relative的形式&lt;/p>
        &lt;p>当超过阈值之后，sticky表现为fixed的形式&lt;/p>
    &lt;/div>
&lt;/body>
&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><img src="@source/CSS/imgs_css/sticky.png" alt=""></p>
<h3 id="css选择器" tabindex="-1"><a class="header-anchor" href="#css选择器" aria-hidden="true">#</a> CSS选择器</h3>
<blockquote>
<p>基本选择器：</p>
<ul>
<li><code>通用选择器: 使用*，选择所有元素</code></li>
<li><code>元素选择器: 直接使用元素名（例如h2），选择所有该元素</code></li>
<li><code>类选择器: .class属性名，选择class为该属性名的所有元素</code></li>
<li><code>id选择器: #id属性名，选择id为该属性名的元素（id属性名唯一）</code></li>
</ul>
</blockquote>
<p><strong>复合选择器</strong></p>
<blockquote>
<p>复合选择器至少两个基本选择器通过不同方式进行组合</p>
<p>使用方法：选择器1 (方法名称) 选择器2</p>
</blockquote>
<ol>
<li>交集选择器
<ul>
<li>相邻两选择器之间不使用间隔，匹配两种选择元素的交集，一般为元素选择器和类或id选择器</li>
</ul>
</li>
<li>并集选择器（分组选择器）<code>逗号</code>
<ul>
<li>相邻两选择器之间使用<code>逗号</code>，匹配两种选择元素的并集</li>
</ul>
</li>
<li>后代选择器（包含选择器）<code>空格</code>
<ul>
<li>相邻两选择器之间使用<code>空格</code>，匹配选择器1所匹配元素的<strong>所有后代</strong>中匹配选择器2的元素</li>
</ul>
</li>
<li>子元素选择器<code>大于号</code>
<ul>
<li>相邻两选择器之间使用<code>&gt;</code>，匹配选择器1所匹配元素的<strong>直接子元素</strong>中匹配选择器2的元素</li>
</ul>
</li>
<li>相邻兄弟选择器<code>加号</code>
<ul>
<li>相邻选择器之间使用<code>+</code>，匹配选择器1所匹配元素后出现的匹配选择器2的<strong>一个元素</strong></li>
</ul>
</li>
<li>通用兄弟选择器<code>波浪号</code>
<ul>
<li>相邻选择器之间使用<code>~</code>，匹配选择器1所匹配元素后出现的匹配选择器2的<strong>所有元素</strong></li>
</ul>
</li>
</ol>
<p><strong>伪元素选择器</strong></p>
<ul>
<li><code>::first-line选择器: 仅对块级元素内的第一行内容有效，而对于&lt;a&gt;这类行内元素不起作用</code></li>
<li><code>::first-letter选择器: 仅对块级元素的第一个字符有效</code></li>
<li><code>::before选择器: 用来给选择的元素前添加content内容，可添加文本或者url图片样式</code></li>
<li><code>::after选择器: 用来给选择的元素后添加content内容，可添加文本或者url图片样式</code></li>
<li><code>::selection选择器: 用来给选择鼠标选中的文本设置css样式</code></li>
</ul>
<p><strong>伪类选择器</strong></p>
<p><strong>动态伪类选择器</strong></p>
<ul>
<li><code>:link----未被访问的样式</code></li>
<li><code>:visited----已访问的样式</code></li>
<li><code>:hover----鼠标滑过的样式</code></li>
<li><code>:active----鼠标点击的样式</code></li>
<li><code>:focus----获取焦点的样式</code></li>
</ul>
<p><strong>UI伪类选择器</strong></p>
<ul>
<li><code>:enabled----设置表单元素的&quot;enable&quot;这种状态的样式</code></li>
<li><code>:disabled----设置表单元素的&quot;disabled&quot;这种状态的样式</code></li>
<li><code>:checked----设置表单元素被选中的样式</code></li>
<li><code>:required----设置必选元素的样式</code></li>
<li><code>:optional----设置可选元素的样式</code></li>
<li><code>:default----默认元素的样式</code></li>
<li><code>:valid----设置用户输入&quot;合法&quot;对应的样式</code></li>
<li><code>:invalid----设置用户输入&quot;非法&quot;对应的样式</code></li>
<li><code>:in-range----设置用户输入&quot;在范围内&quot;对应的样式</code></li>
<li><code>:out-of-range----设置用户输入&quot;不在范围内&quot;对应的样式</code></li>
<li><code>:read-only----设置输入&quot;只读&quot;对应的属性</code></li>
<li><code>:read-write----设置输入&quot;可读可写&quot;对应的样式</code></li>
<li><code>:indeterminate----用于表示状态不确定的表单元素</code></li>
</ul>
<p><code>&lt;input type=&quot;checkbox&quot;&gt;</code> 元素，其 indeterminate 属性被 JavaScript设置为 true 。
<code>&lt;input type=&quot;radio&quot;&gt;</code> 元素, 表单中拥有相同 name值的所有单选按钮都未被选中时。
处于不确定状态的 <code>&lt;progress&gt;</code> 元素。</p>
<p><strong>结构伪类选择器</strong></p>
<ul>
<li><code>:root----设置根元素的样式</code></li>
<li><code>:nth-child(n)----指定父元素中第n个子元素</code></li>
<li><code>:nth-last-child(n)----指定父元素中倒数第n个子元素</code></li>
<li><code>nth-of-type(n)----指定父元素中具体第n个具体元素</code></li>
<li><code>:nth-last-of-type(n)----指定父元素中具体倒数第n个具体元素</code></li>
<li><code>:first-child----指定父元素的第一个元素</code></li>
<li><code>:last-child----指定父元素的最后一个元素</code></li>
<li><code>:first-of-type----指定父元素的第一个具体元素</code></li>
<li><code>:last-of-type----指定父元素的最后一个具体元素</code></li>
<li><code>:only-child----指定父元素中唯一的元素</code></li>
<li><code>:only-of-type----指定父元素中唯一的具体元素</code></li>
<li><code>:empty----设置空元素的样式</code></li>
</ul>
<p><strong>其他伪类选择器</strong></p>
<ul>
<li><code>:target----设置当前活动的target元素的样式</code></li>
<li><code>:lang----为不同语言设置样式</code></li>
<li><code>:not(selector)----为非selector选择的元素设置样式</code></li>
</ul>
<p><strong>属性选择</strong></p>
<table>
<thead>
<tr>
<th>语法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>[ attr ]</td>
<td>匹配定义了<code>attr</code>属性的元素，不需要考虑属性值</td>
</tr>
<tr>
<td>[ attr=&quot;val&quot; ]</td>
<td>匹配定义了<code>attr</code>属性的元素，且属性值为“val”字符串的元素</td>
</tr>
<tr>
<td>[ attr^=&quot;val&quot; ]</td>
<td>匹配定义了<code>attr</code>属性的元素，且属性值以“val”字符串开头的元素</td>
</tr>
<tr>
<td>[ attr$=&quot;val&quot; ]</td>
<td>匹配定义了<code>attr</code>属性的元素，且属性值以“val”字符串结尾的元素</td>
</tr>
<tr>
<td>[ attr*=&quot;val&quot; ]</td>
<td>匹配定义了<code>attr</code>属性的元素，且属性值包含“val”字符串的元素</td>
</tr>
<tr>
<td>[ attr~=&quot;val&quot; ]</td>
<td>匹配定义了<code>attr</code>属性的元素，且属性值为“val”字符串的元素（如有多个属性值，则只需要其中一个属性值匹配即可）</td>
</tr>
<tr>
<td>[ attr|=&quot;val&quot; ]</td>
<td>匹配定义了<code>attr</code>属性的元素，且属性值由连字符进行分割（比如lang=&quot;en-uk&quot;），其中第一个字符串是“val”的元素</td>
</tr>
</tbody>
</table>
<h3 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型" aria-hidden="true">#</a> 盒子模型</h3>
<blockquote>
<p>分为<code>W3C</code>和<code>IE</code>盒子模型，默认为<code>W3C</code>盒子模型</p>
</blockquote>
<p><strong>W3C</strong></p>
<p><img src="@source/CSS/imgs_css/W3C-box.png" alt=""></p>
<p><strong>IE</strong></p>
<p><img src="@source/CSS/imgs_css/IE-box.png" alt=""></p>
<p><strong>盒子模型使用</strong></p>
<p>在元素样式中使用<code>box-sizing</code>属性</p>
<p><code>content-box</code>表示W3C盒子模型，<code>border-box</code>表示IE盒子模型。</p>
</template>
