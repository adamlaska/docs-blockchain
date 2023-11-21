import{_ as s,c as a,o as n,L as o}from"./chunks/framework.EMf-NuUT.js";const h=JSON.parse('{"title":"buyram","description":"","frontmatter":{"title":"buyram"},"headers":[],"relativePath":"blockchain/contracts/system-contract/system-actions/buyram.md","filePath":"blockchain/contracts/system-contract/system-actions/buyram.md","lastUpdated":null}'),l={name:"blockchain/contracts/system-contract/system-actions/buyram.md"},p=o(`<h1 id="buyram-buy-ram-with-uos" tabindex="-1">buyram - buy RAM with UOS <a class="header-anchor" href="#buyram-buy-ram-with-uos" aria-label="Permalink to &quot;buyram - buy RAM with UOS&quot;">​</a></h1><p>Increases the receiver&#39;s ram quota based upon current price and quantity of tokens provided. An inline transfer from receiver to system contract of tokens will be executed.</p><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>payer</td><td>eosio::name</td><td>The source account name. Authentication required</td></tr><tr><td>receiver</td><td>eosio::name</td><td>The destination account name</td></tr><tr><td>quant</td><td>eosio::asset</td><td>The amount of UOS to spend</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eosio</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">buyram</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[&quot;bob&quot;, &quot;alice&quot;, &quot;5.00000000 UOS&quot;]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bob</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eosio</span><span style="color:#24292E;"> </span><span style="color:#032F62;">buyram</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;[&quot;bob&quot;, &quot;alice&quot;, &quot;5.00000000 UOS&quot;]&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bob</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">await api.</span><span style="color:#B392F0;">transact</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      account</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;eosio&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;buyram&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      authorization</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> [{ actor</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bob&quot;</span><span style="color:#E1E4E8;">, permission</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;active&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      data</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        payer</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bob&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        receiver</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;alice&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        quant</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;5.00000000 UOS&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">await api.</span><span style="color:#6F42C1;">transact</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  actions</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      account</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;eosio&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;buyram&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      authorization</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> [{ actor</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bob&quot;</span><span style="color:#24292E;">, permission</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;active&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      data</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        payer</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bob&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        receiver</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;alice&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        quant</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;5.00000000 UOS&quot;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,7),t=[p];function e(c,r,E,y,i,u){return n(),a("div",null,t)}const b=s(l,[["render",e]]);export{h as __pageData,b as default};
