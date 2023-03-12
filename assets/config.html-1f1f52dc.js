import{a2 as o,Y as i,Z as t,a0 as s,a1 as l,_ as a,$ as e,a3 as c,D as r}from"./framework-449699dd.js";const p={},d=s("h2",{id:"selector",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#selector","aria-hidden":"true"},"#"),l(" selector")],-1),u=s("li",null,[l("类型: "),s("code",null,"string | string[]")],-1),B=s("li",null,[l("默认值: "),s("code",null,`'.theme-default-content div[class*="language-"] pre'`)],-1),h=s("p",null,"代码块选择器",-1),y=s("h2",{id:"showinmobile",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#showinmobile","aria-hidden":"true"},"#"),l(" showInMobile")],-1),g=s("li",null,[l("类型: "),s("code",null,"boolean")],-1),_=s("li",null,[l("默认值: "),s("code",null,"false")],-1),v=s("p",null,"是否展示在移动端",-1),m=s("h2",{id:"duration",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#duration","aria-hidden":"true"},"#"),l(" duration")],-1),E=s("li",null,[l("类型: "),s("code",null,"number")],-1),f=s("li",null,[l("默认值: "),s("code",null,"2000")],-1),A=s("p",null,[l("提示消息显示时间，设置为 "),s("code",null,"0"),l(" 会禁用提示。")],-1),b=s("h2",{id:"pure",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#pure","aria-hidden":"true"},"#"),l(" pure")],-1),F=s("li",null,[l("类型: "),s("code",null,"false")],-1),C=s("li",null,[l("默认值: "),s("code",null,"false")],-1),x=c(`<p>是否生成样式纯净的小而简单的复制按钮。</p><h2 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h2><ul><li>类型: <code>number</code></li><li>默认值: <code>800</code></li></ul><p>注册复制按钮的延时，单位 ms。</p><p>如果你使用的主题有切换动画，建议配置此选项为 <code>切换动画时长 + 200</code></p><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><ul><li><p>类型: <code>CopyCodeLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">CopyCodeLocaleData</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 复制文字</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">copy</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 已复制文字</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">copied</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * 复制成功提示消息文字</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">hint</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">CopyCodeLocaleConfig</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  [</span><span style="color:#E06C75;font-style:italic;">localePath</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">]: </span><span style="color:#E5C07B;">CopyCodeLocaleData</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>必填: 否</p></li></ul><p>复制按钮插件的国际化配置。</p><details class="hint-container details"><summary>内置支持语言</summary><ul><li><strong>简体中文</strong> (zh-CN)</li><li><strong>繁体中文</strong> (zh-TW)</li><li><strong>英文(美国)</strong> (en-US)</li><li><strong>德语</strong> (de-DE)</li><li><strong>德语(澳大利亚)</strong> (de-AT)</li><li><strong>俄语</strong> (ru-RU)</li><li><strong>乌克兰语</strong> (uk-UA)</li><li><strong>越南语</strong> (vi-VN)</li><li><strong>葡萄牙语(巴西)</strong> (pt-BR)</li><li><strong>波兰语</strong> (pl-PL)</li><li><strong>法语</strong> (fr-FR)</li><li><strong>西班牙语</strong> (es-ES)</li><li><strong>斯洛伐克</strong> (sk-SK)</li><li><strong>日语</strong> (ja-JP)</li><li><strong>土耳其语</strong> (tr-TR)</li><li><strong>韩语</strong> (ko-KR)</li><li><strong>芬兰语</strong> (fi-FI)</li><li><strong>印尼语</strong> (id-ID)</li><li><strong>荷兰语</strong> (nl-NL)</li></ul></details>`,9);function D(k,L){const n=r("RouterLink");return i(),t("div",null,[d,s("ul",null,[u,B,s("li",null,[l("详情: "),s("ul",null,[s("li",null,[a(n,{to:"/zh/guide.html#%E4%BB%A3%E7%A0%81%E5%9D%97%E9%80%89%E6%8B%A9"},{default:e(()=>[l("指南 → 代码块选择")]),_:1})])])])]),h,y,s("ul",null,[g,_,s("li",null,[l("详情: "),s("ul",null,[s("li",null,[a(n,{to:"/zh/guide.html#%E6%8C%89%E9%92%AE%E5%B1%95%E7%A4%BA"},{default:e(()=>[l("指南 → 按钮展示")]),_:1})])])])]),v,m,s("ul",null,[E,f,s("li",null,[l("详情: "),s("ul",null,[s("li",null,[a(n,{to:"/zh/guide.html#%E5%A4%8D%E5%88%B6%E6%8F%90%E7%A4%BA"},{default:e(()=>[l("指南 → 复制提示")]),_:1})])])])]),A,b,s("ul",null,[F,C,s("li",null,[l("详情: "),s("ul",null,[s("li",null,[a(n,{to:"/zh/guide.html#%E7%BA%AF%E5%87%80%E6%A8%A1%E5%BC%8F"},{default:e(()=>[l("指南 → 纯净模式")]),_:1})])])])]),x])}const R=o(p,[["render",D],["__file","config.html.vue"]]);export{R as default};
