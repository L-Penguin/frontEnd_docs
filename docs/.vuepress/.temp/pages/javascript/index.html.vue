<template><h1 id="js常见问题整理" tabindex="-1"><a class="header-anchor" href="#js常见问题整理" aria-hidden="true">#</a> JS常见问题整理</h1>
<h3 id="数据类型分类-基本和引用" tabindex="-1"><a class="header-anchor" href="#数据类型分类-基本和引用" aria-hidden="true">#</a> 数据类型分类（基本和引用）</h3>
<blockquote>
<ul>
<li>基本类型：<code>null</code>、<code>undefined</code>、<code>boolean</code>、<code>number</code>、<code>string</code>、<code>symbol</code></li>
<li>引用类型<code>Object</code>：<code>Array</code>、<code>Function</code>、<code>Date</code>、<code>RegExp</code>、<code>Map(WeakMap)</code>、&gt; <code>Set(WeakSet)</code>、（基本包装类型：<code>Boolean</code>、<code>Number</code>、<code>String</code>）；</li>
</ul>
</blockquote>
<p><code>WeakMap</code>和<code>WeakSet</code>表示 弱映射 和 弱集合，与实际的映射<code>Map</code>和集合<code>Set</code>相比，当其中设置的属性或者值被赋值为null的时候，弱映射 和 弱集合的会被回收机制进行回收。</p>
<h4 id="存放位置" tabindex="-1"><a class="header-anchor" href="#存放位置" aria-hidden="true">#</a> 存放位置</h4>
<ul>
<li>基本数据类型：基本数据类型在内存中占据固定大小，直接存储在<strong>栈内存</strong>中的数据；</li>
<li>引用数据类型：引用数据在栈中存储指针，这个指针指向堆内存中的地址，真实的数据存放在<strong>堆内存</strong>中。</li>
</ul>
<h4 id="类型查看方式" tabindex="-1"><a class="header-anchor" href="#类型查看方式" aria-hidden="true">#</a> 类型查看方式</h4>
<ul>
<li>
<p><code>typeof</code>：基本类型都能显示正确的类型（除了<code>null</code>，因为其在内存中二进制存储为全0，而类型区分就是以存储前3位区分，全0为对象），应用类型都会显示为<code>object</code>。
000：对象；001：整型；010：双精度类型；011：字符串；110：布尔类型。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">undefined</span>	<span class="token comment">// "undefined"</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span>	<span class="token comment">// "object"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p><code>instanceof</code>：用来判断一个对象是否在其原型链原型构造函数的属性。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1</span> <span class="token keyword">instanceof</span> <span class="token class-name">Number</span>	<span class="token comment">// false</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span>	<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可以看出<code>instanceof</code>不能判断基本类型，但是可以判断引用类型。</p>
</li>
<li>
<p><code>constructor</code>：为原型对象上的属性，指向构造函数。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array	<span class="token comment">// true</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array	<span class="token comment">// true</span>
<span class="token string">"123"</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> String	<span class="token comment">// true 隐式转换为对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>undefined</code>和<code>null</code>没有<code>constructor</code>属性。</p>
</li>
<li>
<p><code>Object.prototype.toString.call()</code>：首先取得对象的一个内部属性[[class]]，然后依据这个属性。返回一个类似于&quot;[object Array]&quot;的字符串作为结果。（[[]]用来表示语言内部用到的，外部不可直接访问，被称为&quot;内部属性&quot;）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// "[object Number]"</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// "[object Array]"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
<h5 id="typeof和instanceof原理" tabindex="-1"><a class="header-anchor" href="#typeof和instanceof原理" aria-hidden="true">#</a> typeof和instanceof原理</h5>
<blockquote>
<p><code>typeof</code>会查看变量的机器码的1-3位。<code>null</code>为全0；<code>undefined</code>用-2^30整数表示。</p>
<p><code>instanceof</code>会查看 右边变量的<code>prototype</code>是否在左边变量的原型链上。</p>
</blockquote>
<h3 id="this指向问题" tabindex="-1"><a class="header-anchor" href="#this指向问题" aria-hidden="true">#</a> this指向问题</h3>
<blockquote>
<p>区分情况分为<strong>全局上下文</strong>、<strong>函数上下文</strong></p>
</blockquote>
<h4 id="全局上下文" tabindex="-1"><a class="header-anchor" href="#全局上下文" aria-hidden="true">#</a> 全局上下文</h4>
<p>非严格模式和严格模式中<code>this</code>都是指向顶层对象。（浏览器中是<code>window</code>）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span> <span class="token operator">===</span> window<span class="token punctuation">;</span>	<span class="token comment">// true</span>
<span class="token string">'use strict'</span>
<span class="token keyword">this</span> <span class="token operator">===</span> window<span class="token punctuation">;</span>	<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="函数上下文" tabindex="-1"><a class="header-anchor" href="#函数上下文" aria-hidden="true">#</a> 函数上下文</h4>
<h5 id="普通函数调用模式" tabindex="-1"><a class="header-anchor" href="#普通函数调用模式" aria-hidden="true">#</a> 普通函数调用模式</h5>
<blockquote>
<p><code>var</code>定义的变量或函数会绑定在顶层对象中（浏览器是<code>window</code>）添加属性；<code>let</code>和<code>const</code>定义的变量或函数不会绑定。</p>
<p><code>use strict</code>严格模式中，普通函数中的<code>this</code>为<code>undefined</code>，非严格模式下，普通函数中的<code>this</code>为顶层对象（浏览器是<code>window</code>）</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 非严格模式</span>
<span class="token keyword">var</span> name_1 <span class="token operator">=</span> <span class="token string">'window1'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">func_1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// true</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name_1<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// "window1"</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> name_2 <span class="token operator">=</span> <span class="token string">'window2'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">func_2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// true</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name_2<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// "window2"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 严格模式</span>
<span class="token string">'use strict'</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'window'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// false</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// undefined</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h5 id="对象中函数调用模式" tabindex="-1"><a class="header-anchor" href="#对象中函数调用模式" aria-hidden="true">#</a> 对象中函数调用模式</h5>
<blockquote>
<p>如果以<code>对象.方法</code>的方式调用函数，则该函数中的<code>this</code>为该对象；</p>
<p>如果把对象中的函数赋值为变量。这样就是普通函数，使用普通函数规则（默认绑定）。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'window'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'obj'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">func</span><span class="token operator">:</span> func<span class="token punctuation">,</span>
    <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'other'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">func</span><span class="token operator">:</span> func
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 'window'</span>
obj<span class="token punctuation">.</span>other<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 'other'</span>

<span class="token keyword">var</span> func_1 <span class="token operator">=</span> obj<span class="token punctuation">.</span>func<span class="token punctuation">;</span>
<span class="token function">func_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 'window'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><code>call、apply、bind</code>调用模式</p>
<blockquote>
<p>假如传递的<code>thisArg</code>为<code>undefined</code>或<code>null</code>，则函数中的<code>this</code>会指向顶层对象（浏览器为window），非严格模式下，传递为基本数据类型会被自动包装成对象，严格模式下不会；</p>
<p>语法：</p>
<ul>
<li><code>fn.call(thisArg, arg1, arg2, ...)</code>：其中<code>thisArg</code>会替换该函数中的<code>this</code>，后面的参数会传递到<code>fn</code>函数中执行，返回<code>fn</code>的返回值；</li>
<li><code>fn.apply(thisArg, argArr)</code>：同call，传递到<code>fn</code>函数的参数是一个数组<code>argArr</code>（必须），相当于<code>fn(...argArr)</code>，返回<code>fn</code>的返回值；</li>
<li><code>fn.bind(thisArg, arg1, arg2, ...)</code>：同call，返回修改<code>this</code>后的<code>fn</code>函数。</li>
</ul>
</blockquote>
<h5 id="构造函数调用模式" tabindex="-1"><a class="header-anchor" href="#构造函数调用模式" aria-hidden="true">#</a> 构造函数调用模式</h5>
<blockquote>
<p>使用<code>new</code>操作符调用函数，会自动执行以下步骤：</p>
<ol>
<li>创建一个新的对象</li>
<li>从参数中取出第一个，这个参数就是调用时的构造函数</li>
<li>这个对象会执行[[Prototype]]，绑定原型对象，<code>obj.__proto__ = Obj.prototype</code></li>
<li>生成新对象会通过<code>apply</code>绑定到构造函数的<code>this</code>；</li>
<li>判断构造函数是否有返回值：返回对象或函数，则返回构造函数返回值，否则返回新创建的对象。</li>
</ol>
</blockquote>
<p>也就是，当调用<code>new</code>操作符时，<code>this</code>指向生成的新对象。</p>
<h5 id="原型链中的调用模式" tabindex="-1"><a class="header-anchor" href="#原型链中的调用模式" aria-hidden="true">#</a> 原型链中的调用模式</h5>
<blockquote>
<p>相当于对象上的函数调用模式。所以只想生成的新对象。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">'tom'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">doSth</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
s1<span class="token punctuation">.</span><span class="token function">doSth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'tom'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h5 id="箭头函数调用模式" tabindex="-1"><a class="header-anchor" href="#箭头函数调用模式" aria-hidden="true">#</a> 箭头函数调用模式</h5>
<blockquote>
<p>箭头函数和普通函数的区别：</p>
<ol>
<li>没有自己的<code>this</code>、<code>super</code>、<code>arguments</code>和<code>new.target</code>绑定；</li>
<li>不能使用<code>new</code>来调用；</li>
<li>没有原型对象；</li>
<li>不可以改变<code>this</code>的绑定；</li>
<li>形参名称不能重复</li>
</ol>
</blockquote>
<p>箭头函数中没有<code>this</code>绑定，必须通过查找作用域链来决定其值。箭头函数的<code>this</code>指向在定义的时候继承自外部第一个普通函数的<code>this</code>。所以箭头函数中<code>this</code>的指向在它被定义的时候就已经确定了，之后永远不改变。</p>
<p><code>call、apply、bind</code>无法改变箭头函数中的<code>this</code>指向。</p>
<h5 id="dom事件处理函数调用" tabindex="-1"><a class="header-anchor" href="#dom事件处理函数调用" aria-hidden="true">#</a> DOM事件处理函数调用</h5>
<blockquote>
<p><code>onclicl</code>和<code>addEventListener</code>是指向绑定事件的元素。一些浏览器，比如<code>IE6~IE8</code>下使用<code>attachEvent</code>，<code>this</code>指向是<code>window</code>。</p>
</blockquote>
<p><code>event.currentTarget</code>和<code>event.target</code>的区别：<code>event.currentTarget</code>是绑定事件的元素，而<code>event.target</code>是当前触发事件的元素。比如<code>ul</code>和<code>li</code>。</p>
</template>
