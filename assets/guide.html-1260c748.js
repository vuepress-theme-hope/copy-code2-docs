import{a2 as a,Y as e,Z as l,a0 as o,a1 as s,_ as p,$ as t,a3 as c,D as i}from"./framework-449699dd.js";const r={},d=c(`<p>This plugin will automatically add a copy button to the bottom right corner of each code block.</p><h2 id="code-block-selection" tabindex="-1"><a class="header-anchor" href="#code-block-selection" aria-hidden="true">#</a> Code Block Selection</h2><p>By default, the plugin will select code blocks according to the default theme&#39;s selector. If you are using a third-party theme, you can set one or more CSS selectors to the <code>selector</code> option.</p><h2 id="button-display" tabindex="-1"><a class="header-anchor" href="#button-display" aria-hidden="true">#</a> Button Display</h2><p>By default, the button is only displayed in desktop mode, if you need to display the button on mobile, set <code>showInMobile</code> to <code>true</code>.</p><h2 id="copy-hint" tabindex="-1"><a class="header-anchor" href="#copy-hint" aria-hidden="true">#</a> Copy Hint</h2><p>After the user clicks the copy button, a copy success message will be displayed on the screen. The default prompt duration is 2000ms, if you need to change this duration, please set <code>duration</code> (unit ms), if you don&#39;t need this prompt, please set <code>duration</code> to <code>0</code>.</p><h2 id="pure-mode" tabindex="-1"><a class="header-anchor" href="#pure-mode" aria-hidden="true">#</a> Pure Mode</h2><p>By default the plugin will show a big blue button, if you want to make the button and tooltip less &quot;obvious&quot; you can add the <code>pure: true</code> option.</p><h2 id="locale-customization" tabindex="-1"><a class="header-anchor" href="#locale-customization" aria-hidden="true">#</a> Locale Customization</h2><p>You can add new locale config or modify existing ones through <code>locales</code> option.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defineUserConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vuepress&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">copyCodePlugin</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vuepress-plugin-copy-code2&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineUserConfig</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">locales</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;/&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// this is a supported language</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">lang</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;en-US&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;/xx/&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#7F848E;font-style:italic;">// the plugin does not support this language</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">lang</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;mm-NN&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">copyCodePlugin</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">locales</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#98C379;">&quot;/&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#7F848E;font-style:italic;">// Override copy button label text</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">copy</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Copy Codes from code block&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#98C379;">&quot;/xx/&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#7F848E;font-style:italic;">// Complete locale config for \`mm-NN\` language here</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">    }),</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function B(u,y){const n=i("RouterLink");return e(),l("div",null,[d,o("p",null,[s("For specific options, see "),p(n,{to:"/config.html#locales"},{default:t(()=>[s("Config → Locale Settings")]),_:1}),s(".")])])}const v=a(r,[["render",B],["__file","guide.html.vue"]]);export{v as default};
