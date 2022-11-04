<template><h2 id="计算机网络常见问题" tabindex="-1"><a class="header-anchor" href="#计算机网络常见问题" aria-hidden="true">#</a> 计算机网络常见问题</h2>
<h3 id="浏览器输入url后流程" tabindex="-1"><a class="header-anchor" href="#浏览器输入url后流程" aria-hidden="true">#</a> 浏览器输入url后流程</h3>
<blockquote>
<ul>
<li><strong>DNS</strong>解析</li>
<li>发起<strong>TCP</strong>连接</li>
<li>发起<strong>HTTP</strong>请求</li>
<li>服务器<strong>处理请求</strong>并返回HTTP报文</li>
<li>浏览器<strong>解析渲染</strong>页面</li>
<li>连接结束</li>
</ul>
</blockquote>
<h4 id="dns解析" tabindex="-1"><a class="header-anchor" href="#dns解析" aria-hidden="true">#</a> DNS解析</h4>
<blockquote>
<p>作用：将域名地址转换为ip地址。</p>
</blockquote>
<p>说明：首先在<strong>本地的域名服务器</strong>中查找，没有再到<strong>根域名服务器</strong>查找，没有再去<strong>com顶级域名服务器</strong>查找，找到后，记录在本地，供下次使用。（DNS：Domain Name System域名系统，使用应用层协议）</p>
<h3 id="发起tcp连接" tabindex="-1"><a class="header-anchor" href="#发起tcp连接" aria-hidden="true">#</a> 发起TCP连接</h3>
<blockquote>
<p>TCP提供一种<strong>可靠的</strong>传输，涉及<strong>三次握手</strong>、<strong>四次挥手</strong>。</p>
</blockquote>
<p><img src="@source/network/imgs_computerNetwork/TCP-header.png" alt=""></p>
<h4 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h4>
<blockquote>
<p>采用三次握手是为了防止失效的连接请求报文突然又传送到主机B，因而产生错误，失效的连接请求报文段是指：</p>
<p>主机A发出连接请求没有收到主机B的确认，于是经过一段时间后，主机A又重新向主机B发送连接请求，且建立成功，顺利完成数据传输。但有一种特殊情况，主机A第一次发送的连接请求并没有丢失，而是因为网络节点导致延迟到达主机B，主机B以为是主机A又发起的新连接，于是主机B同意连接，并向主机A发回确认，但此时主机A根本不会理会，主机B就一直等待主机A发送数据，导致主机B的资源浪费。</p>
</blockquote>
<p><strong>TCP之所以需要3次握手是因为TCP双方都是全双工的</strong>。</p>
<p><img src="@source/network/imgs_computerNetwork/3shaking.png" alt=""></p>
</template>
