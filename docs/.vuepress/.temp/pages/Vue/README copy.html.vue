<template><h2 id="vue常见问题整理" tabindex="-1"><a class="header-anchor" href="#vue常见问题整理" aria-hidden="true">#</a> Vue常见问题整理</h2>
<h3 id="mvvm介绍" tabindex="-1"><a class="header-anchor" href="#mvvm介绍" aria-hidden="true">#</a> MVVM介绍</h3>
<blockquote>
<p>MVVM是<code>Model-View-ViewModel</code>缩写，也就是将<code>MVC</code>中的<code>Controller</code>变成了<code>ViewModel</code>。<code>Model</code>层代表数据模型，<code>View</code>代表UI组件，<code>ViewModel</code>是<code>View</code>和<code>Model</code>层的桥梁，数据会绑定到<code>ViewModel</code>层并自动将数据渲染到页面中，视图变化的时候会通知ViewModel层更新数据</p>
</blockquote>
<h3 id="vue3的新组件" tabindex="-1"><a class="header-anchor" href="#vue3的新组件" aria-hidden="true">#</a> Vue3的新组件</h3>
<h4 id="_1、teleport" tabindex="-1"><a class="header-anchor" href="#_1、teleport" aria-hidden="true">#</a> 1、Teleport</h4>
<blockquote>
<p><code>Teleport</code> 是一种能够将<strong style="color:#DD5145">组件html结构</strong>移动到指定位置的技术。</p>
<p>移动位置为css选择器</p>
</blockquote>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>移动位置<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isShow<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mask<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>我是一个弹窗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isShow = false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关闭弹窗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="_2、suspence" tabindex="-1"><a class="header-anchor" href="#_2、suspence" aria-hidden="true">#</a> 2、Suspence</h4>
<ul>
<li>
<p>等待异步组件时渲染一些额外内容，让应用有更好的用户体验</p>
</li>
<li>
<p>使用步骤：</p>
<ul>
<li>
<p>异步引入组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineAsyncComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> Child <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./components/Child.vue'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>使用<code>Suspense</code>包裹组件，并配置好<code>default</code> 与 <code>fallback</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>我是App组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Suspense</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token punctuation">></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span><span class="token punctuation">/></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>fallback</span><span class="token punctuation">></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>加载中.....<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Suspense</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li>
</ul>
</li>
</ul>
<h4 id="_3、fragment" tabindex="-1"><a class="header-anchor" href="#_3、fragment" aria-hidden="true">#</a> 3、Fragment</h4>
<ul>
<li>在Vue2中: 组件必须有一个根标签</li>
<li>在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中</li>
<li>好处: 减少标签层级, 减小内存占用</li>
</ul>
<h3 id="vue2和vue3的区别" tabindex="-1"><a class="header-anchor" href="#vue2和vue3的区别" aria-hidden="true">#</a> Vue2和Vue3的区别</h3>
<blockquote>
<p><strong>vue2和vue3的区别有8点</strong>：</p>
<ol>
<li>双向数据绑定原理不同；</li>
<li>是否支持碎片；</li>
<li>API类型不同；</li>
<li>定义数据变量和方法不同；</li>
<li>生命周期钩子函数不同；</li>
<li>父子传参不同；</li>
<li>指令与插槽不同；</li>
<li>main.js文件不同</li>
</ol>
</blockquote>
<h4 id="_1、双向数据绑定原理不同" tabindex="-1"><a class="header-anchor" href="#_1、双向数据绑定原理不同" aria-hidden="true">#</a> 1、双向数据绑定原理不同</h4>
<p><strong>vue2</strong>：vue2的双向数据绑定是利用 ES5 的API <strong><code>Object.defineProperty()</code></strong> 对数据进行劫持，结合发布订阅模式的方式来实现。</p>
<p><strong>vue3</strong>：vue3中使用了 ES6 的API **<code>Proxy</code>**对数据代理。相比vue2，使用proxy的优势如下：</p>
<ul>
<li>defineProperty只能监听某个属性，不能对全对象监听；</li>
<li>可以省去<code>for in</code>，闭包等内容来提升效率（直接绑定整个对象即可）；</li>
<li>可以监听数组，不用再去单独对数组做特异性操作vue3可以检测到数组内部数据的变化。</li>
</ul>
<h4 id="_2、是否支持碎片" tabindex="-1"><a class="header-anchor" href="#_2、是否支持碎片" aria-hidden="true">#</a> 2、是否支持碎片</h4>
<p><strong>vue2</strong>：vue2<strong>不支持</strong>碎片。</p>
<p><strong>vue2</strong>：vue3<strong>支持碎片（Fragment）</strong>，就是说可以拥有多个根节点。</p>
<h4 id="_3、api类型不同" tabindex="-1"><a class="header-anchor" href="#_3、api类型不同" aria-hidden="true">#</a> 3、API类型不同</h4>
<p><strong>vue2</strong>：vue2使用<strong>选项类型api</strong>，选项类型api在代码里分割了不同的属性：<code>data</code>，<code>computed</code>，<code>methods</code>等。</p>
<p><strong>vue3</strong>：vue3使用<strong>合成型api</strong>（组合式api），新的组合式api能让我们使用方法分割，相比于就的api使用属性来分组，这样代码会更加简便和整洁。</p>
<h4 id="_4、定义数据变量和方法不同" tabindex="-1"><a class="header-anchor" href="#_4、定义数据变量和方法不同" aria-hidden="true">#</a> 4、定义数据变量和方法不同</h4>
<p><strong>vue2</strong>：vue2是把数据放入data中，在vue2中定义数据变量是<code>data() {}</code>，创建的方法要在<code>methods: {}</code>。</p>
<p><strong>vue3</strong>：vue3就需要使用一个新的<code>setup()</code>方法，此方法在组件初始化构造的时候触发。使用一下三个步骤来建立响应式数据：</p>
<ul>
<li>从vue引入<strong>reactive</strong>；</li>
<li>使用**reactive()**方法 来声明数据为响应式数据；</li>
<li>使用setup()方法来返回响应式数据，从而<strong>template</strong>可以获取这些响应性数据</li>
</ul>
<h4 id="_5、生命周期钩子函数不同" tabindex="-1"><a class="header-anchor" href="#_5、生命周期钩子函数不同" aria-hidden="true">#</a> 5、生命周期钩子函数不同</h4>
<p><strong>vue2</strong>：<strong>vue2中的生命周期</strong></p>
<ul>
<li>beforeCreate 组件创建之前</li>
<li>created 组件创建之后</li>
<li>beforeMount 组件挂载到页面之前执行</li>
<li>mounted 组件挂载到页面之后执行</li>
<li>beforeUpdate 组件更新之后</li>
<li>updated 组件更新之后</li>
<li>beforeDestroy 组建销毁之前</li>
<li>destroyed 组件销毁之后</li>
<li>路由组件中：activated 组件激活之后；deactivated 组件失活之后</li>
<li>errorCaptured 当捕获一个</li>
</ul>
<p><strong>vue3</strong>：<strong>vue3中的生命周期</strong></p>
<ul>
<li>setup 开始创建组件</li>
<li>onBeforeMount 组件挂载到页面之前执行</li>
<li>onMounted 组件挂载到页面之后执行</li>
<li>onBeforeUpdate 组件更新之前</li>
<li>onUpdated 组件更新之后</li>
<li>onBeforeUnmount 组件卸载之前</li>
<li>onUnmounted 组件卸载之后</li>
</ul>
<p><strong>对比</strong>（vue2 --&gt; vue3）</p>
<ul>
<li>beforeCreate -&gt; setup()</li>
<li>created -&gt; setup()</li>
<li>beforeMount -&gt; onMounted</li>
<li>beforeUpdate -&gt; onBeforeUpdate</li>
<li>updated -&gt; onUpdated</li>
<li>beforeDestroy -&gt; onBeforeUnmount</li>
<li>destroyed -&gt; onUnmounted</li>
<li>路由组件：activated -&gt; onActivated；deactivated -&gt; onDeactivated</li>
<li>errorCaptured -&gt; onErrorCaptured</li>
</ul>
<p>而且vue3生命周期在调用前需要先进行引用。除了这些钩子函数外，vue3还增加了onRenderTracked 和 onRenderTriggered函数。</p>
<p><strong>onRenderTracked生命周期函数</strong>：当页面渲染的时候，vue都会重新收集响应式的依赖，响应式的依赖一旦重新渲染需要重新收集的时候onRenderTracked便会自动执行一次。页面首次渲染便会执行，页面再次重新渲染也会执行，与onRenderTracked对应的函数是onRenderTriggered指每次重新渲染被触发的时候，首次页面加载不会触发，当数据改变，页面重新渲染的时候触发，onRenderTracked也会再次触发。</p>
<h4 id="_6、父子传参不同" tabindex="-1"><a class="header-anchor" href="#_6、父子传参不同" aria-hidden="true">#</a> 6、父子传参不同</h4>
<p><strong>vue2</strong>：父传子，用props，子传父用事件Emitting Events。在vue2中，会调用<strong>this.$emit</strong>然后传入事件名和对象。</p>
<p><strong>vue3</strong>：父传子，用props，子传父用事件Emitting Events。在vue3中的setup()中的第二个参数content对象中就有emit，那么只要在setup()接收<strong>第二个参数中使用分解对象法取出emit</strong>就可以在setup方法中使用。</p>
<h4 id="_7、指令与插槽不同" tabindex="-1"><a class="header-anchor" href="#_7、指令与插槽不同" aria-hidden="true">#</a> 7、指令与插槽不同</h4>
<p><strong>vue2</strong>：vue2中使用slot可以<strong>直接使用slot</strong>；v-for与v-if在vue2中优先级高的是<strong>v-for</strong>指令，而且不建议一起使用。</p>
<p><strong>vue3</strong>：vue3中必须使用<strong>v-slot</strong>的形式；vue3中v-for与v-if，只会把当前v-if当做v-for中的一个判断语句，<strong>不会相互冲突</strong>；vue3中移除keyCode作为v-on的修饰符，当然也不支持config.keyCodes；vue3中<strong>移除v-on.native修饰符</strong>；vue3中<strong>移除过滤器filter</strong>。</p>
<h4 id="_8、main-js文件不同" tabindex="-1"><a class="header-anchor" href="#_8、main-js文件不同" aria-hidden="true">#</a> 8、main.js文件不同</h4>
<p><strong>vue2</strong>：vue2中可以使用<strong>prototype(原型)<strong>的形式去进行操作，引入的是</strong>构造函数</strong>。</p>
<p><strong>vue3</strong>：vue3中需要使用<strong>结构</strong>的形式进行操作，引入的是<strong>工厂函数</strong>；vue3中app组件可以<strong>没有根标签</strong>。</p>
<img src="D:\Users\q.li5\AppData\Roaming\Typora\typora-user-images\image-20221013151823556.png" alt="image-20221013151823556" style="zoom:75%;"/>
<img src="D:\Users\q.li5\AppData\Roaming\Typora\typora-user-images\image-20221013151823556.png" alt="image-20221013151823556" style="zoom:75%;" />
<h4 id="setup-函数特性" tabindex="-1"><a class="header-anchor" href="#setup-函数特性" aria-hidden="true">#</a> setup()函数特性</h4>
<ul>
<li>setup()函数接收两个参数：props、context(包含attrs、slots、emit)。</li>
<li>setup函数是出于生命周期beforeCreate和created两个钩子函数之前。</li>
<li>执行setup时，组建实例尚未被创建（在setup内部，this不会是该实例对象的引用，即不指向vue实例，Vue为了避免错误的使用，直接将setup函数中的this修改成了undefined）。</li>
<li>与模板一起使用时，需要返回一个对象。</li>
<li>因为setup函数中，props是响应式的，当传入新的props时，它将会被更新，所以不能使用es6结构解析，因为它会消除props的响应式，如需结构解析props，可以通过使用setup函数中的toRefs来完成此操作。</li>
<li>在setup()内使用响应式数据时，需要通过.value获取。</li>
<li>从setup()中返回的对象上的property返回并可以在模板中被访问到，它将自动展开为内部值。不需要在模板中追加.value（类似于<code>{{}}</code>这种形式）。</li>
<li>setup函数只能是同步的，不能是异步的。</li>
</ul>
<h3 id="自定义指令directive" tabindex="-1"><a class="header-anchor" href="#自定义指令directive" aria-hidden="true">#</a> 自定义指令directive</h3>
<blockquote>
<p>全局声明：<code>Vue.directive(指令名，配置对象|回调函数)</code></p>
<p>局部声明：<code>new Vue({directives: {指令名: 配置对象|回调函数}})</code></p>
<p>配置对象中的回调：</p>
<ul>
<li><code>.bind</code>：指令与元素成功绑定时调用</li>
<li><code>.inserted</code>：指令所在元素被插入页面时调用</li>
<li><code>.update</code>：指令所在模板结构被重新解析时调用。、</li>
<li><code>.componentUpdated</code>：指令所在组建的VNode及其子VNode全部更新后调用。</li>
<li><code>.unbind</code>：只调用一次，指令与元素解绑时调用。</li>
</ul>
<p>回调函数接收的参数：</p>
<ul>
<li><code>el</code>：指令所绑定的元素，可以用来直接操作DOM。</li>
<li><code>binging</code>：一个对象，里面包含几个属性
name：指令名，不包含v-前缀
value：指令的绑定至，例如：v-test=&quot;1 + 1&quot;中，绑定值为2.</li>
<li><code>vnode</code>：Vue编译生成的虚拟节点。</li>
<li><code>oldVnode</code>：上一个虚拟节点，仅在update和componentUpdate钩子中可用。</li>
</ul>
</blockquote>
<p><strong>举例</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>Vue.directive("fbind", {
    // 指令与元素成功绑定时
    bind(element, binding) {
    element.value = binding.value
    },
    // 指令所在元素被插入页面时
    inserted(element, binding) {
    element.focus()
    },
    // 指令所在模板被重新解析时
    update(element, binding) {
    element.value = binding.value 
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="vue内置指令" tabindex="-1"><a class="header-anchor" href="#vue内置指令" aria-hidden="true">#</a> Vue内置指令</h4>
<h5 id="_1、v-on" tabindex="-1"><a class="header-anchor" href="#_1、v-on" aria-hidden="true">#</a> 1、<code>v-on</code></h5>
<blockquote>
<p>说明：给元素绑定事件监听器</p>
<p>缩写：<code>@</code>
参数：<code>event</code>
修饰符：</p>
<ul>
<li><code>.stop</code>：调用<code>event.stopPropagation()</code>，阻止事件冒泡；</li>
<li><code>.prevent</code>：调用<code>event.preventDefault()</code>，阻止默认事件；</li>
<li><code>.capture</code>：在捕获模式添加事件监听器；</li>
<li><code>.self</code>：	只有事件从元素本身发出才触发处理函数，即事件不是从内部元素触发；</li>
<li><code>.{keyAlias}</code>：只在某些按键下触发处理函数；</li>
<li><code>.once</code>：最多触发一次处理函数；</li>
<li><code>.left</code>：只在鼠标左键事件触发处理函数；</li>
<li><code>.right</code>：只在鼠标右键事件触发触发处理函数；</li>
<li><code>.middle</code>：只在鼠标中键事件触发处理函数；</li>
<li><code>.passive</code>：通过<code>{ passive: true }</code>附加一个DOM事件，会执行默认方法；
【浏览器只有等内核线程执行到事件监听器对应的JavaScript代码时，才能知道内部是否会调用preventDefault函数来阻止事件的默认行为，所以浏览器本身是没有办法对这种场景进行优化的。这种场景下，用户的手势事件无法快速产生，会导致页面无法快速执行滑动逻辑，从而让用户感觉到页面卡顿。】</li>
</ul>
<p>例子：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 方法处理函数 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 动态事件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>[event]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 内联声明，内联声明可以访问一个特殊的$event变量 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThat(<span class="token punctuation">'</span>hello<span class="token punctuation">'</span>, $event)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 缩写 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 使用缩写的动态事件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@[event]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 停止传播 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 阻止默认事件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 不带表达式地阻止默认事件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">@submit.prevent</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 链式调用修饰符 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.stop.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 按键用于 keyAlias 修饰符--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">@keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onEnter<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- 点击事件将最多触发一次 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click.once</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doThis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 对象语法，不支持任何修饰符 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ mousedown: doThis, mouseup: doThat }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div></blockquote>
<h5 id="_2、v-bind" tabindex="-1"><a class="header-anchor" href="#_2、v-bind" aria-hidden="true">#</a> 2、<code>v-bind</code></h5>
<blockquote>
<p>说明：动态绑定一个或多个attribute，也可以是组件的prop</p>
<p>缩写：<code>:</code>或者<code>.</code>（当使用<code>.prop</code>修饰符）</p>
<p>修饰符：</p>
<ul>
<li><code>.camel</code>：将短横线命名的attribute转变为驼峰式命名；</li>
<li><code>.prop</code>：强制绑定为DOM property。3.2+</li>
<li><code>.attr</code>：强制绑定为DOM attribute.3.2+</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 绑定 attribute --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>imageSrc<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- 动态 attribute 名 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>[key]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 缩写 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>imageSrc<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- 缩写形式的动态 attribute 名 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">:[key]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 内联字符串拼接 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>/path/to/images/<span class="token punctuation">'</span> + fileName<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- class 绑定 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ red: isRed }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[classA, classB]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[classA, { classB: isB, classC: isC }]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- style 绑定 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ fontSize: size + <span class="token punctuation">'</span>px<span class="token punctuation">'</span> }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[styleObjectA, styleObjectB]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 绑定对象形式的 attribute --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ id: someProp, <span class="token punctuation">'</span>other-attr<span class="token punctuation">'</span>: otherProp }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- prop 绑定。“prop” 必须在子组件中已声明。 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token attr-name">:prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>someThing<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- 传递子父组件共有的 prop --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$props<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- XLink --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:xlink:special</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div></blockquote>
<h5 id="_3、v-if" tabindex="-1"><a class="header-anchor" href="#_3、v-if" aria-hidden="true">#</a> 3、<code>v-if</code></h5>
<blockquote>
<p>说明：基于表达式的真假性，来条件性地渲染元素或者模板片段。</p>
<p>举例：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isShow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>哈哈哈哈<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></blockquote>
<h5 id="_4、v-else" tabindex="-1"><a class="header-anchor" href="#_4、v-else" aria-hidden="true">#</a> 4、<code>v-else</code></h5>
<blockquote>
<p>说明：表示<code>v-if</code>或<code>v-if</code>/<code>v-else-if</code>链式调用的&quot;else块&quot;</p>
<p>举例：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isShow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Coder<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>Bin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote>
<h5 id="_5、v-else-if" tabindex="-1"><a class="header-anchor" href="#_5、v-else-if" aria-hidden="true">#</a> 5、<code>v-else-if</code></h5>
<blockquote>
<p>说明：表示<code>v-if</code>的&quot;else if&quot;块。可以进行链式调用。</p>
<p>举例：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>score<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>score > 90<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>优秀<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>score > 60<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>良好<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>不及格<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></blockquote>
<h5 id="_6、v-show" tabindex="-1"><a class="header-anchor" href="#_6、v-show" aria-hidden="true">#</a> 6、<code>v-show</code></h5>
<blockquote>
<p>说明：基于表达式值的真假性，来改变元素的可见性。</p>
<p>详细描述：<code>v-show</code> 通过设置内联样式的 <code>display</code> CSS 属性来工作，当元素可见时将使用初始 <code>display</code> 值。当条件改变时，也会触发过渡效果。</p>
<p>举例：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isShow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>哈哈哈哈<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'#my-app'</span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></blockquote>
<h5 id="_7、v-model" tabindex="-1"><a class="header-anchor" href="#_7、v-model" aria-hidden="true">#</a> 7、<code>v-model</code></h5>
<blockquote>
<p>说明：在表单输入元素或组件上创建双向绑定</p>
</blockquote>
<h3 id="vue2和vue3的响应式原理区别" tabindex="-1"><a class="header-anchor" href="#vue2和vue3的响应式原理区别" aria-hidden="true">#</a> vue2和vue3的响应式原理区别</h3>
<h4 id="vue2源码" tabindex="-1"><a class="header-anchor" href="#vue2源码" aria-hidden="true">#</a> <strong>vue2</strong>源码</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 触发更新视图回调</span>
<span class="token keyword">function</span> <span class="token function">updateview</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"试图更新"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 重新定义数组原型</span>
<span class="token keyword">const</span> oldArrayProperty <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// 创建新对象，原型指向oldArrayProperty，再扩展新的方法不会影响原数组原型</span>
<span class="token keyword">const</span> arrproto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>oldArrayProperty<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token string">"push"</span><span class="token punctuation">,</span> <span class="token string">"pop"</span><span class="token punctuation">,</span> <span class="token string">"shift"</span><span class="token punctuation">,</span> <span class="token string">"unshift"</span><span class="token punctuation">,</span> <span class="token string">"splice"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">methodName</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    arrProto<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 触发视图更新</span>
        oldArrayproperty<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 分解对象属性函数</span>
<span class="token keyword">function</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">'object'</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 不是对象或数组</span>
        <span class="token keyword">return</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	target<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> arrProto<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>	<span class="token comment">// 数组不进行深度监听，原因：太损耗性能</span>
    	<span class="token comment">// 重新定义各个属性（for in 也可以遍历数组）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 递归监听对象内属性</span>
            <span class="token function">defineReactive</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>   
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 重新定义属性，监听起来</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 深度监听</span>
	<span class="token function">observer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 核心API</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">!==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 深度监听</span>
                <span class="token function">observer</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
                
                <span class="token comment">// 设置新值，注意：value一直在闭包中，此处设置完之后，在get时也是会获取最新的值</span>
                value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
                
                <span class="token comment">// 触发更新视图</span>
                <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>总结：vue2的响应式是基于<code>Object.defineProperty</code>实现。</p>
<p>问题：</p>
<ul>
<li>数组类型为什么不能监听到根据数组索引的修改？
根据对象的key对数据进行修改是可以被监听到并触发更新渲染，但是由于数组一般长度会比较长，所以监听数组中的每一个索引对性能损耗较大，所以在底层不支持对数组进行深度监听，但是直接覆盖数组可实现渲染。原因是对value为数组的key值进行了监听。</li>
<li>对象类型为什么不能监听到property的添加或者移除？
因为vue2响应式数据是通过Object.defineProperty中的get回调和set回调来对实际数据进行代理，即数据劫持和数据监听，所以当给对象add或者del属性的时候并没有相应的监听回调，所以无法触发更新渲染。</li>
<li>vue2如何解决这个问题：
vue2增加<code>$set</code>响应式监听 数组索引的修改 和 对象属性的添加；增加<code>$delete</code>监听对象属性的删除
<code>this.$set(obj, key, val)</code>、<code>this.$delete(obj, key)</code></li>
</ul>
<h4 id="vue3源码" tabindex="-1"><a class="header-anchor" href="#vue3源码" aria-hidden="true">#</a> vue3源码</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 触发更新视图回调</span>
<span class="token keyword">function</span> <span class="token function">updateview</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"试图更新"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 重新定义数组原型</span>
<span class="token keyword">const</span> oldArrayProperty <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// 创建新对象，原型指向oldArrayProperty，再扩展新的方法不会影响原数组原型</span>
<span class="token keyword">const</span> arrproto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>oldArrayProperty<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token string">"push"</span><span class="token punctuation">,</span> <span class="token string">"pop"</span><span class="token punctuation">,</span> <span class="token string">"shift"</span><span class="token punctuation">,</span> <span class="token string">"unshift"</span><span class="token punctuation">,</span> <span class="token string">"splice"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">methodName</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    arrProto<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 触发视图更新</span>
        oldArrayproperty<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 分解对象属性函数</span>
<span class="token keyword">function</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">'object'</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 不是对象或数组</span>
        <span class="token keyword">return</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	target<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> arrProto<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>	<span class="token comment">// 数组不进行深度监听，原因：太损耗性能</span>
    	<span class="token comment">// 重新定义各个属性（for in 也可以遍历数组）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 递归监听对象内属性</span>
            <span class="token function">defineReactive</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>   
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 重新定义属性，监听起来</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 深度监听</span>
	<span class="token function">observer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 核心API</span>
    <span class="token keyword">const</span> proxyData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 只处理本身（非原型）的属性</span>
            <span class="token keyword">const</span> ownKeys <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ownKeys<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 监听</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">const</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receive<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> result<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">,</span> receive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 重复的数据，不处理</span>
            <span class="token keyword">const</span> oldVal <span class="token operator">=</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">==</span> oldVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">,</span> receive<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 操作成功，更新渲染</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">updateview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> result<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 删除属性</span>
        <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 操作成功，更新渲染</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">updateview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><p>总结：vue3的响应式是基于ES6的<code>Proxy</code>配合<code>Reflect</code></p>
<p><code>Reflect</code>的两个方法：</p>
<ul>
<li><code>get(target, key, receiver)</code>：个人理解就是，访问<code>target</code>的<code>key</code>属性，但是<code>this</code>是指向<code>receiver</code>，所以实际是访问的值是<code>receiver的key</code>的值，但是这可不是直接访问<code>receiver[key]</code>属性；</li>
<li><code>set(target, key, value, receiver)</code>：个人理解就是，设置<code>target</code>的<code>key</code>属性为<code>value</code>，但是<code>this</code>是指向<code>receiver</code>，所以实际是是设置<code>receiver的key</code>的值为<code>value</code>，但这可不是直接<code>receiver[key] = value</code>。</li>
</ul>
<p>问题：</p>
<ul>
<li>为什么不能直接<code>receive[key]</code>或者<code>receive[key]=value</code>，而是通过<code>Reflect.get</code>和<code>Reflect.set</code>
如果使用<code>receive</code>直接访问或者修改会导致<code>set</code>回调和<code>get</code>回调重复执行，导致栈溢出。</li>
<li>为什么要使用<code>proxy</code>和<code>Reflect</code>一起，也可使用<code>target[key]</code>进行属性访问和修改？
<code>receive</code>是<code>new Proxy</code>创建出来的代理对象，<code>target</code>为原对象。因为<code>target</code>有可能是另一个代理的代理对象，所以如果<code>this</code>一直放到<code>target</code>上面，出bug的概率会大大提高，所以需要将<code>this</code>放在代理对象<code>receive</code>上。</li>
</ul>
<p>vue2的缺陷</p>
<ul>
<li>检测不到对象属性的添加和删除；</li>
<li>数组API方法无法监听到，通过Array的原型，实现对数组的监听；</li>
<li>需要对每个属性进行遍历监听，如果嵌套对象，需要深度监听，造成性能问题。</li>
</ul>
<p>为什么使用Proxy？</p>
<ol>
<li>
<p>Object.defineProperty只能劫持对象的属性，而Proxy是直接代理对象。
<code>Object.defineProperty</code>只能遍历对象属性进行劫持；<code>Proxy</code>直接可以劫持整个对象，并返回一个新对象，可以直接操作新的对象达到响应式目的。</p>
</li>
<li>
<p><code>Object.defineProperty</code>对新增属性需要手动进行<code>observe</code>
由于 <code>Object.defineProperty</code> 劫持的是对象的属性，所以新增属性时，需要重新遍历对象，对其新增属性再使用 <code>Object.defineProperty</code> 进行劫持。
也正是因为这个原因，使用vue给 <code>data</code> 中的数组或对象新增属性时，需要使用 <code>vm.$set</code> 才能保证新增的属性也是响应式的。</p>
</li>
<li>
<p><code>Proxy</code>支持13中拦截操作，是<code>defineProperty</code>不具备的
1、<strong>get(target, propKey, receiver)</strong>：拦截对象属性的读取，比如 <code>proxy.foo</code> 和 <code>proxy['foo']</code> 。</p>
<p>2、<strong>set(target, propKey, value, receiver)</strong>：拦截对象属性的设置，比如 <code>proxy.foo = v</code> 或 <code>proxy['foo'] = v</code> ，返回一个布尔值。</p>
<p>3、<strong>has(target, propKey)</strong>：拦截 <code>propKey in proxy</code> 的操作，返回一个布尔值。</p>
<p>4、<strong>deleteProperty(target, propKey)</strong>：拦截 <code>delete proxy[propKey]</code> 的操作，返回一个布尔值。</p>
<p>5、<strong>ownKeys(target)</strong>：拦截 <code>Object.getOwnPropertyNames(proxy)</code> 、 <code>Object.getOwnPropertySymbols(proxy)</code> 、<code>Object.keys(proxy)</code> 、<code>for...in</code> 循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而 <code>Object.keys()</code> 的返回结果仅包括目标对象自身的可遍历属性。</p>
<p>6、<strong>getOwnPropertyDescriptor(target, propKey)</strong>：拦截 <code>Object.getOwnPropertyDescriptor(proxy, propKey)</code> ，返回属性的描述对象。</p>
<p>7、<strong>defineProperty(target, propKey, propDesc)</strong>：拦截 <code>Object.defineProperty(proxy, propKey, propDesc）</code> 、<code>Object.defineProperties(proxy, propDescs)</code> ，返回一个布尔值。</p>
<p>8、<strong>preventExtensions(target)</strong>：拦截 <code>Object.preventExtensions(proxy)</code> ，返回一个布尔值。</p>
<p>9、<strong>getPrototypeOf(target)</strong>：拦截 <code>Object.getPrototypeOf(proxy)</code> ，返回一个对象。</p>
<p>10、<strong>isExtensible(target)</strong>：拦截 <code>Object.isExtensible(proxy)</code> ，返回一个布尔值。</p>
<p>11、<strong>setPrototypeOf(target, proto)</strong>：拦截 <code>Object.setPrototypeOf(proxy, proto)</code> ，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。</p>
<p>12、<strong>apply(target, object, args)</strong>：拦截 <code>Proxy</code> 实例作为函数调用的操作，比如 <code>proxy(...args)</code>、<code>proxy.call(object, ...args)</code> 、<code>proxy.apply(...)</code> 。</p>
<p>13、<strong>construct(target, args)</strong>：拦截 <code>Proxy</code> 实例作为构造函数调用的操作，比如 <code>new proxy(...args)</code> 。</p>
</li>
</ol>
<p>proxy兼容性差</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/12/16dbf9afd543e53f~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp" alt="img"></p>
<h3 id="vue的插槽" tabindex="-1"><a class="header-anchor" href="#vue的插槽" aria-hidden="true">#</a> vue的插槽</h3>
<h4 id="_1、默认插槽" tabindex="-1"><a class="header-anchor" href="#_1、默认插槽" aria-hidden="true">#</a> 1、默认插槽</h4>
<blockquote>
<p>给子组件中传递子元素，只有一个根元素；子组件中使用<code>slot</code>标签表示子元素。</p>
</blockquote>
<h4 id="_2、具名插槽" tabindex="-1"><a class="header-anchor" href="#_2、具名插槽" aria-hidden="true">#</a> 2、具名插槽</h4>
<blockquote>
<p>子元素中使用属性<code>slot=&quot;插槽名&quot;</code>或者<code>v-slot:插槽名</code>，子组件中给<code>slot</code>元素添加<code>name</code>属性来判断和哪个子元素匹配。</p>
</blockquote>
<h4 id="_3、作用域插槽" tabindex="-1"><a class="header-anchor" href="#_3、作用域插槽" aria-hidden="true">#</a> 3、作用域插槽</h4>
<blockquote>
<p>子元素的根元素中添加属性<code>scope=&quot;data&quot;</code>，<code>data</code>则会是子组件中给<code>slot</code>标签添加<code>:data=&quot;data&quot;</code>属性，则可以在该根元素中使用。</p>
</blockquote>
<h3 id="vue的hooks" tabindex="-1"><a class="header-anchor" href="#vue的hooks" aria-hidden="true">#</a> vue的Hooks</h3>
<blockquote>
<p>vue2中的<code>mixin</code>有什么不足？</p>
<p>在vue2中，<code>mixin</code>是将部分组件逻辑抽象成可复用块的主要工具。但是存在几个问题：</p>
<ol>
<li><code>Mixin</code>很容易产生冲突：因为每个mixin的<code>property</code>都被合并到同一个组件中，所以为了避免<code>property</code>名冲突，必须要了解其他<code>property</code>。</li>
<li>可重用性是有限的：不能向<code>mixin</code>传递任何参数改变它的逻辑，这降低了它们在抽象逻辑方面的灵活性。</li>
</ol>
</blockquote>
<h4 id="_1、mixin难以追溯的方法与属性" tabindex="-1"><a class="header-anchor" href="#_1、mixin难以追溯的方法与属性" aria-hidden="true">#</a> 1、Mixin难以追溯的方法与属性</h4>
<blockquote>
<p>Vue3自定义Hooks，引用时将响应式变量或者方法显示暴露出来如：</p>
<p><code>const {nameRef, fn} = useXX()</code></p>
</blockquote>
<p>举例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// a.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> useAdd <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> num1<span class="token punctuation">,</span> num2 <span class="token punctuation">}</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> addNum <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
		<span class="token function">addFn</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">const</span> <span class="token function-variable function">addFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
		addNum<span class="token punctuation">.</span>value <span class="token operator">=</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span>
		addNum<span class="token punctuation">,</span>
		addFn
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> defaault useAdd<span class="token punctuation">;</span>

<span class="token comment">// b.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> useAdd <span class="token keyword">from</span> <span class="token string">'./a.js'</span>
<span class="token keyword">const</span> num1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>addNum<span class="token punctuation">,</span> addFn<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAdd</span><span class="token punctuation">(</span><span class="token punctuation">{</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addFn</span><span class="token punctuation">(</span>num1<span class="token punctuation">.</span>value<span class="token punctuation">,</span> num2<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>每个Hooks显示暴露出来的响应式变量和方法。</p>
<h4 id="_2、无法向mixin传递参数来改变逻辑" tabindex="-1"><a class="header-anchor" href="#_2、无法向mixin传递参数来改变逻辑" aria-hidden="true">#</a> 2、无法向Mixin传递参数来改变逻辑</h4>
<blockquote>
<p>Vue3自定义Hooks可以灵活传递任何参数来改变它的逻辑，参数不限于其他hook的暴露出来的变量，这提高了Vue3在抽象逻辑方面的灵活性。</p>
</blockquote>
<h4 id="_3、mixin同名变量会被覆盖" tabindex="-1"><a class="header-anchor" href="#_3、mixin同名变量会被覆盖" aria-hidden="true">#</a> 3、Mixin同名变量会被覆盖</h4>
<blockquote>
<p>ES6对象结构解析可以给变量进行重命名。</p>
</blockquote>
<h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4>
<blockquote>
<p>Vue2时代<code>Option Api,data,methods,watch......</code>分开写，这种是<strong>碎片化</strong>的分散的，代码一多就容易<strong>高耦合</strong>，维护时来会切换代码繁琐</p>
<p>Vue3时代<code>Composition Api</code>，通过利用各种Hooks将碎片化的响应式变量和方法<strong>按功能分块写</strong>，实现<strong>高内聚低耦合</strong></p>
<p>Vue3自定义Hooks是组件下的函数作用域的，而Vue2时代的Mixins是组件下的全局作用域。</p>
</blockquote>
<h3 id="nexttick的实现原理" tabindex="-1"><a class="header-anchor" href="#nexttick的实现原理" aria-hidden="true">#</a> nextTick的实现原理</h3>
<blockquote>
<p>主要作用：在下次DOM更新循环结束之后执行延迟回调。</p>
</blockquote>
<p>nextTick主要使用了宏任务和微任务。根据执行环境分别尝试采用：</p>
<ul>
<li>Promise</li>
<li>MutationObserver</li>
<li>setImmediate</li>
<li>如果以上都不行就采用setTimeout</li>
</ul>
<p>定义一个异步方法，多次调用nextTick会讲方法存入到队列中，通过异步方法清空当前队列。</p>
<h3 id="vue-set方法如何实现" tabindex="-1"><a class="header-anchor" href="#vue-set方法如何实现" aria-hidden="true">#</a> Vue.set方法如何实现</h3>
<ul>
<li>vue给对象和数组本身都增加了dep属性</li>
<li>当给对象新增不存在的属性的时候，就会触发对象依赖的watcher来更新</li>
<li>当修改数组索引的时候，就调用数组本身的splice方法来更新数组</li>
</ul>
</template>
