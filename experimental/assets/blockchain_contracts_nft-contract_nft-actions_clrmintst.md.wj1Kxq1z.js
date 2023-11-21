import{_ as s,c as a,o as n,L as t}from"./chunks/framework.YmJWI2yl.js";const m=JSON.parse('{"title":"clrmintst","description":"","frontmatter":{"title":"clrmintst","order":8},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/clrmintst.md","filePath":"blockchain/contracts/nft-contract/nft-actions/clrmintst.md","lastUpdated":null}'),o={name:"blockchain/contracts/nft-contract/nft-actions/clrmintst.md"},e=t(`<h1 id="clrmintst" tabindex="-1">clrmintst <a class="header-anchor" href="#clrmintst" aria-label="Permalink to &quot;clrmintst&quot;">​</a></h1><p>Clears (i.e., deletes the rows of) minting status table of a token factory.</p><h2 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h2><p>Allow an asset owner to clear the minting status table.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p><strong>Parameter validation</strong></p><p>token_factory_id is the token factory ID that should exist. memo string to accompany the transaction should be no more than 256 bytes. The required authorization is the token_factory::asset_manager.</p><p><strong>On-the-fly migration</strong></p><p>After v1 is activated by activers action, token factory exists either in v0 factory table, factory.a, or v1 factory table, factory.b. If the token factory exists in factory.a, then the token factory is moved to factory.b. In the following descriptions, token factory is either v0 or v1 data structures.</p><p><strong>Main operations</strong></p><p>The action deletes the specified no_of_entries from the token_factory’s mintstat (mintstat.a) table. If all rows are deleted, the table itself is deleted as well. If no_of_entries is not specified (i.e., null), all entries are deleted.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p>Try to think of the action parameters as a <strong>JSON Object</strong> when reading this table. There will be a <strong>JavaScript</strong> example of the action below this table.</p><h3 id="v0" tabindex="-1">V0 <a class="header-anchor" href="#v0" aria-label="Permalink to &quot;V0&quot;">​</a></h3><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>token_factory_id</td><td>uint64_t</td><td>The token factory identifier</td></tr><tr><td>no_of_entries</td><td>optional&lt;uint64_t&gt;</td><td>A short operation description.</td></tr><tr><td>memo</td><td>string</td><td>Whatever you want</td></tr></tbody></table><h3 id="v1" tabindex="-1">V1 <a class="header-anchor" href="#v1" aria-label="Permalink to &quot;V1&quot;">​</a></h3><p>No Changes</p><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eosio.nft.ft</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clrmintst</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{&quot;token_factory_id&quot;: 5, &quot;no_of_entries&quot;: 100, &quot;memo&quot;: &quot;clrmintst time&quot;}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">factory.manager@active</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eosio.nft.ft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clrmintst</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{&quot;token_factory_id&quot;: 5, &quot;no_of_entries&quot;: 100, &quot;memo&quot;: &quot;clrmintst time&quot;}&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">factory.manager@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">transact</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        actions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                account: </span><span style="color:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: </span><span style="color:#9ECBFF;">&#39;clrmintst&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                authorization: [{ actor: </span><span style="color:#9ECBFF;">&#39;factory.manager&#39;</span><span style="color:#E1E4E8;">, permission: </span><span style="color:#9ECBFF;">&#39;active&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">                data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    token_factory_id: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    no_of_entries: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    memo: </span><span style="color:#9ECBFF;">&#39;clrmintst time&#39;</span><span style="color:#E1E4E8;">,</span></span>
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
<span class="line"><span style="color:#24292E;">                name: </span><span style="color:#032F62;">&#39;clrmintst&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                authorization: [{ actor: </span><span style="color:#032F62;">&#39;factory.manager&#39;</span><span style="color:#24292E;">, permission: </span><span style="color:#032F62;">&#39;active&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">                data: {</span></span>
<span class="line"><span style="color:#24292E;">                    token_factory_id: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    no_of_entries: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    memo: </span><span style="color:#032F62;">&#39;clrmintst time&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        blocksBehind: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        expireSeconds: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div>`,21),l=[e];function p(c,r,i,E,y,h){return n(),a("div",null,l)}const f=s(o,[["render",p]]);export{m as __pageData,f as default};
