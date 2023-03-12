import{a2 as i,Y as o,Z as t,a0 as s,a1 as l,_ as e,$ as a,a3 as c,D as r}from"./framework-449699dd.js";const p={},d=s("h2",{id:"selector",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#selector","aria-hidden":"true"},"#"),l(" selector")],-1),u=s("li",null,[l("Type: "),s("code",null,"string | string[]")],-1),h=s("li",null,[l("Default: "),s("code",null,`'.theme-default-content div[class*="language-"] pre'`)],-1),y=s("p",null,"Code block selector",-1),B=s("h2",{id:"showinmobile",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#showinmobile","aria-hidden":"true"},"#"),l(" showInMobile")],-1),g=s("li",null,[l("Type: "),s("code",null,"boolean")],-1),m=s("li",null,[l("Default: "),s("code",null,"false")],-1),f=s("p",null,"Whether to display copy button on the mobile device",-1),v=s("h2",{id:"duration",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#duration","aria-hidden":"true"},"#"),l(" duration")],-1),_=s("li",null,[l("Type: "),s("code",null,"number")],-1),b=s("li",null,[l("Default: "),s("code",null,"2000")],-1),F=s("p",null,[l("Hint display time, setting it to "),s("code",null,"0"),l(" will disable the hint.")],-1),C=s("h2",{id:"pure",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#pure","aria-hidden":"true"},"#"),l(" pure")],-1),A=s("li",null,[l("Type: "),s("code",null,"false")],-1),E=s("li",null,[l("Default: "),s("code",null,"false")],-1),D=c(`<p>Whether generate a small simple button with pure style.</p><h2 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h2><ul><li>Type: <code>number</code></li><li>Default: <code>800</code></li></ul><p>The delay of registering copy code buttons, in ms.</p><p>If the theme you are using has a switching animation, it is recommended to configure this option to <code>Switch animation duration + 200</code>.</p><h2 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h2><ul><li><p>Type: <code>CopyCodeLocaleConfig</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">CopyCodeLocaleData</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Copy text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">copy</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Copied text</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">copied</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   * Success message text after content is copied</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">hint</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">CopyCodeLocaleConfig</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  [</span><span style="color:#E06C75;font-style:italic;">localePath</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">]: </span><span style="color:#E5C07B;">CopyCodeLocaleData</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Required: No</p></li></ul><p>Locales config for copy code plugin.</p><details class="hint-container details"><summary>Built-in Supported Languages</summary><ul><li><strong>Simplified Chinese</strong> (zh-CN)</li><li><strong>Traditional Chinese</strong> (zh-TW)</li><li><strong>English (United States)</strong> (en-US)</li><li><strong>German</strong> (de-DE)</li><li><strong>German (Australia)</strong> (de-AT)</li><li><strong>Russian</strong> (ru-RU)</li><li><strong>Ukrainian</strong> (uk-UA)</li><li><strong>Vietnamese</strong> (vi-VN)</li><li><strong>Portuguese (Brazil)</strong> (pt-BR)</li><li><strong>Polish</strong> (pl-PL)</li><li><strong>French</strong> (fr-FR)</li><li><strong>Spanish</strong> (es-ES)</li><li><strong>Slovak</strong> (sk-SK)</li><li><strong>Japanese</strong> (ja-JP)</li><li><strong>Turkish</strong> (tr-TR)</li><li><strong>Korean</strong> (ko-KR)</li><li><strong>Finnish</strong> (fi-FI)</li><li><strong>Indonesian</strong> (id-ID)</li><li><strong>Dutch</strong> (nl-NL)</li></ul></details>`,9);function k(x,T){const n=r("RouterLink");return o(),t("div",null,[d,s("ul",null,[u,h,s("li",null,[l("Details: "),s("ul",null,[s("li",null,[e(n,{to:"/guide.html#code-block-selection"},{default:a(()=>[l("Guide → Code Block Selection")]),_:1})])])])]),y,B,s("ul",null,[g,m,s("li",null,[l("Details: "),s("ul",null,[s("li",null,[e(n,{to:"/guide.html#button-display"},{default:a(()=>[l("Guide → Button Display")]),_:1})])])])]),f,v,s("ul",null,[_,b,s("li",null,[l("Details: "),s("ul",null,[s("li",null,[e(n,{to:"/guide.html#copy-hint"},{default:a(()=>[l("Guide → Copy Hint")]),_:1})])])])]),F,C,s("ul",null,[A,E,s("li",null,[l("Details: "),s("ul",null,[s("li",null,[e(n,{to:"/guide.html#pure-mode"},{default:a(()=>[l("Guide → Pure Mode")]),_:1})])])])]),D])}const L=i(p,[["render",k],["__file","config.html.vue"]]);export{L as default};
