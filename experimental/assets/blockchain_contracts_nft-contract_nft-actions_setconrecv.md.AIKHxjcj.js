import{_ as s,c as a,o as n,L as o}from"./chunks/framework.YmJWI2yl.js";const v=JSON.parse('{"title":"setconrecv","description":"","frontmatter":{"title":"setconrecv","order":21},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/setconrecv.md","filePath":"blockchain/contracts/nft-contract/nft-actions/setconrecv.md","lastUpdated":null}'),e={name:"blockchain/contracts/nft-contract/nft-actions/setconrecv.md"},l=o(`<h1 id="setconrecv" tabindex="-1">setconrecv <a class="header-anchor" href="#setconrecv" aria-label="Permalink to &quot;setconrecv&quot;">​</a></h1><p>Set conditionless receivers</p><h2 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h2><p>Allows a token manager to set conditionless receivers for an existing token factory.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>The required authorization is the <strong>token_factory_manager</strong> as the manager is responsible for updating the data.</p><p><strong>token_factory_id</strong> is required and must be exist.</p><p><strong>memo</strong> value has a 256 byte limitation</p><p><strong>conditionless_receivers</strong> should be non-empty and each account should be valid</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>token_factory_id</td><td>uint64_t</td><td>The token factory ID.</td></tr><tr><td>memo</td><td>std::string</td><td>A short operation description.</td></tr><tr><td>conditionless_receivers</td><td>std::vector&lt;eosio::name&gt;</td><td>The array of conditionless receivers being set.</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eosio.nft.ft</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">setconrecv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[1, &quot;updating&quot;, [&quot;joe&quot;]]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">manager.acc@active</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eosio.nft.ft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">setconrecv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;[1, &quot;updating&quot;, [&quot;joe&quot;]]&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">manager.acc@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">transact</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        actions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                account: </span><span style="color:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: </span><span style="color:#9ECBFF;">&#39;setconrecv&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                authorization: [{ actor: </span><span style="color:#9ECBFF;">&#39;manager.acc&#39;</span><span style="color:#E1E4E8;">, permission: </span><span style="color:#9ECBFF;">&#39;active&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">                data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    token_factory_id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    memo: </span><span style="color:#9ECBFF;">&#39;set conditional receivers&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    conditionless_receivers: [</span><span style="color:#9ECBFF;">&#39;joe&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        blocksBehind: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        expireSeconds: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">transact</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        actions: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                account: </span><span style="color:#032F62;">&#39;eosio.nft.ft&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                name: </span><span style="color:#032F62;">&#39;setconrecv&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                authorization: [{ actor: </span><span style="color:#032F62;">&#39;manager.acc&#39;</span><span style="color:#24292E;">, permission: </span><span style="color:#032F62;">&#39;active&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">                data: {</span></span>
<span class="line"><span style="color:#24292E;">                    token_factory_id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    memo: </span><span style="color:#032F62;">&#39;set conditional receivers&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    conditionless_receivers: [</span><span style="color:#032F62;">&#39;joe&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        blocksBehind: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        expireSeconds: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div>`,15),t=[l];function p(c,r,i,E,y,d){return n(),a("div",null,t)}const u=s(e,[["render",p]]);export{v as __pageData,u as default};