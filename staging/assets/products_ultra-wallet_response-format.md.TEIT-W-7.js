import{_ as s,c as a,o as n,L as e}from"./chunks/framework.EMf-NuUT.js";const m=JSON.parse('{"title":"Response interface","description":"","frontmatter":{"title":"Response interface","order":3,"outline":[0,4]},"headers":[],"relativePath":"products/ultra-wallet/response-format.md","filePath":"products/ultra-wallet/response-format.md","lastUpdated":null}'),o={name:"products/ultra-wallet/response-format.md"},l=e(`<h1 id="response-interface" tabindex="-1">Response interface <a class="header-anchor" href="#response-interface" aria-label="Permalink to &quot;Response interface&quot;">​</a></h1><p>To standardize the communication between decentralized applications and the extension, each method will respond with a Promise and this response format.</p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Based on JSend a specification for a simple, no-frills,</span></span>
<span class="line"><span style="color:#6A737D;"> * JSON based format for application-level communication.</span></span>
<span class="line"><span style="color:#6A737D;"> * https://github.com/omniti-labs/jsend</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">status</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;fail&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// &quot;success&quot;, &quot;fail&quot; or &quot;error&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> }, </span><span style="color:#6A737D;">// Response data</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">message</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Forbiden&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// Optional: end-user-readable message, explaining what went wrong.</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * Based on JSend a specification for a simple, no-frills,</span></span>
<span class="line"><span style="color:#6A737D;"> * JSON based format for application-level communication.</span></span>
<span class="line"><span style="color:#6A737D;"> * https://github.com/omniti-labs/jsend</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">status</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;fail&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// &quot;success&quot;, &quot;fail&quot; or &quot;error&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> }, </span><span style="color:#6A737D;">// Response data</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">message</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Forbiden&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// Optional: end-user-readable message, explaining what went wrong.</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div>`,3),p=[l];function t(r,c,i,d,y,u){return n(),a("div",null,p)}const f=s(o,[["render",t]]);export{m as __pageData,f as default};
