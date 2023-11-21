import{_ as a,C as o,c as n,H as l,L as p,o as t}from"./chunks/framework.YmJWI2yl.js";const _=JSON.parse('{"title":"/get_block","description":"","frontmatter":{"title":"/get_block"},"headers":[],"relativePath":"products/chain-api/get-block.md","filePath":"products/chain-api/get-block.md","lastUpdated":null}'),e={name:"products/chain-api/get-block.md"},c=p(`<h1 id="post-get-block" tabindex="-1">POST - /get_block <a class="header-anchor" href="#post-get-block" aria-label="Permalink to &quot;POST - /get_block&quot;">​</a></h1><p>Returns information about a block.</p><p><strong>Highlights</strong></p><ul><li>confirmed - Determines if a block is finalized.</li><li>timestamp - When the block was made.</li><li>producer - Who produced the block</li></ul><h3 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-label="Permalink to &quot;Body&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;block_num_or_id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">61672404</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;block_num_or_id&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">61672404</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">curl -X POST -d &#39;{ &quot;block_num_or_id&quot;: 61672404 }&#39;  https://api.ultra.eossweden.org/v1/chain/get_block</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">curl -X POST -d &#39;{ &quot;block_num_or_id&quot;: 61672404 }&#39;  https://api.ultra.eossweden.org/v1/chain/get_block</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><details class="details custom-block"><summary>Response</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;timestamp&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2022-06-10T20:44:45.500&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;producer&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eosriobrazil&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;confirmed&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;previous&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;03ad0bd3...&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;transaction_mroot&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;71a4f5...&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;action_mroot&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;afbd14c...&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;schedule_version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;new_producers&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;producer_signature&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;SIG_K1_K5...&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;transactions&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;03ad0bd4a31c382ad257cf72247dfbdc3317bd977f1762353a6f5171620819b5&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;block_num&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">61672404</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;ref_block_prefix&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1926191058</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;timestamp&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2022-06-10T20:44:45.500&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;producer&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eosriobrazil&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;confirmed&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;previous&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;03ad0bd3...&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;transaction_mroot&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;71a4f5...&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;action_mroot&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;afbd14c...&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;schedule_version&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;new_producers&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;producer_signature&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;SIG_K1_K5...&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;transactions&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;03ad0bd4a31c382ad257cf72247dfbdc3317bd977f1762353a6f5171620819b5&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;block_num&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">61672404</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;ref_block_prefix&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1926191058</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><h2 id="try-it" tabindex="-1">Try It <a class="header-anchor" href="#try-it" aria-label="Permalink to &quot;Try It&quot;">​</a></h2>`,11);function r(E,i,y,u,d,q){const s=o("DemoApi");return t(),n("div",null,[c,l(s,{type:"POST",query:"/v1/chain/get_block",body:[{key:"block_num_or_id",value:"8675309"}]})])}const h=a(e,[["render",r]]);export{_ as __pageData,h as default};
