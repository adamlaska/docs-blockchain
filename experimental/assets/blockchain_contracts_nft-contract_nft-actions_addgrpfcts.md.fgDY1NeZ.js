import{_ as s,c as a,o as n,L as o}from"./chunks/framework.YmJWI2yl.js";const u=JSON.parse('{"title":"addgrpfcts","description":"","frontmatter":{"title":"addgrpfcts","order":2},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/addgrpfcts.md","filePath":"blockchain/contracts/nft-contract/nft-actions/addgrpfcts.md","lastUpdated":null}'),l={name:"blockchain/contracts/nft-contract/nft-actions/addgrpfcts.md"},p=o(`<h1 id="addgrpfcts" tabindex="-1">addgrpfcts <a class="header-anchor" href="#addgrpfcts" aria-label="Permalink to &quot;addgrpfcts&quot;">​</a></h1><p>Adds factory ids to a factory group.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>ID should be valid and transaction signed by the manager of the corresponding group.</p><p>Factories argument should not contain any existing ids. Factory group pack size should be within the limit of 960 bytes after modification.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>field name</th><th>c++ type</th><th>js type</th></tr></thead><tbody><tr><td>id</td><td>uint64_t</td><td>number</td></tr><tr><td>factories</td><td>vector&lt;uint64_t&gt;</td><td>Array&lt;number&gt;</td></tr></tbody></table><h2 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-label="Permalink to &quot;CLI&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eosio.nft.ft</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">addgrpfcts</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[33, [&quot;7&quot;, &quot;11&quot;, &quot;22&quot;]]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ubisoft</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eosio.nft.ft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">addgrpfcts</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;[33, [&quot;7&quot;, &quot;11&quot;, &quot;22&quot;]]&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ubisoft</span></span></code></pre></div><h2 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-label="Permalink to &quot;JS&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transact</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            account: </span><span style="color:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;addgrpfcts&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            authorization: [{ actor: </span><span style="color:#9ECBFF;">&#39;ubisoft&#39;</span><span style="color:#E1E4E8;">, permission: </span><span style="color:#9ECBFF;">&#39;active&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">            data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                id: </span><span style="color:#79B8FF;">33</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                factories: [</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">22</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        blocksBehind: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        expireSeconds: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transact</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            account: </span><span style="color:#032F62;">&#39;eosio.nft.ft&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;addgrpfcts&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            authorization: [{ actor: </span><span style="color:#032F62;">&#39;ubisoft&#39;</span><span style="color:#24292E;">, permission: </span><span style="color:#032F62;">&#39;active&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">            data: {</span></span>
<span class="line"><span style="color:#24292E;">                id: </span><span style="color:#005CC5;">33</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                factories: [</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">22</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        blocksBehind: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        expireSeconds: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div>`,11),t=[p];function e(c,r,i,E,y,d){return n(),a("div",null,t)}const f=s(l,[["render",e]]);export{u as __pageData,f as default};
