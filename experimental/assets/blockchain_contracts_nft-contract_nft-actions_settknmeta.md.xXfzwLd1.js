import{_ as s,c as a,o as n,L as t}from"./chunks/framework.YmJWI2yl.js";const h=JSON.parse('{"title":"settknmeta","description":"","frontmatter":{"title":"settknmeta","order":26},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/settknmeta.md","filePath":"blockchain/contracts/nft-contract/nft-actions/settknmeta.md","lastUpdated":null}'),o={name:"blockchain/contracts/nft-contract/nft-actions/settknmeta.md"},e=t(`<h1 id="settknmeta" tabindex="-1">settknmeta <a class="header-anchor" href="#settknmeta" aria-label="Permalink to &quot;settknmeta&quot;">​</a></h1><p>Allows a token manager to set metadata uri and hash for an existing token.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>The required authorization is the token factory manager as the manager is responsible for updating the data.</p><ul><li><p><code>token_id</code> is required and must exist.</p></li><li><p><code>owner</code> is required and must own the token with id <code>token_id</code></p></li><li><p><code>memo</code> value has a 256 byte limitation</p></li><li><p><code>uri</code> is required to have non-zero length or be null</p></li></ul><p>If factory has <code>lock_hash</code> set to <code>true</code>:</p><ul><li>Can change the <code>uri</code>, but <code>hash</code> must remain unchanged. If the token does not have a <code>hash</code> then a hash can be changed regardless of <code>lock_hash</code> state.</li></ul><p><strong>Notifications</strong></p><p><code>require_recipient</code> is done for <code>owner</code> and <code>asset_manager</code> of the token factory</p><h2 id="ram-usage" tabindex="-1">RAM usage <a class="header-anchor" href="#ram-usage" aria-label="Permalink to &quot;RAM usage&quot;">​</a></h2><ul><li><p>Adding uri and hash will consume certain bytes depend on how many data are added.</p><ul><li><p>RAM usage is covered by eosio.nftram. But this action will fail if the unused RAM of eosio.nftram is less than or equal to 200MB.</p></li><li><p>If the RAM usage is exceed token maximum pack size of 384 bytes, action will fail.</p></li></ul></li><li><p>Updating or remove meta data which result in no bytes is added, there will be no restriction.</p></li></ul><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Example</th></tr></thead><tbody><tr><td>token_id</td><td>uint64_t</td><td>number</td><td>1</td></tr><tr><td>owner</td><td>name</td><td>string</td><td>&quot;abc123&quot;</td></tr><tr><td>memo</td><td>string</td><td>string</td><td>&quot;hi&quot;</td></tr><tr><td>uri</td><td><code>optional&lt;string&gt;</code></td><td>string</td><td>&quot;uri1&quot;</td></tr><tr><td>hash</td><td><code>optional&lt;checksum256&gt;</code></td><td>string</td><td>&quot;fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9&quot;</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eosio.nft.ft</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">settknmeta</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[1, &quot;ab1bc2cd3ef4&quot;, &quot;updating&quot;, &quot;uri1&quot;, &quot;fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9&quot;]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">manager.acc@active</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eosio.nft.ft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">settknmeta</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;[1, &quot;ab1bc2cd3ef4&quot;, &quot;updating&quot;, &quot;uri1&quot;, &quot;fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9&quot;]&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">manager.acc@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">transact</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      account: </span><span style="color:#9ECBFF;">&quot;eosio.nft.ft&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;setmeta.b&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      authorization: [{ actor: </span><span style="color:#9ECBFF;">&quot;manager.acc&quot;</span><span style="color:#E1E4E8;">, permission: </span><span style="color:#9ECBFF;">&quot;active&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        token_id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        owner: </span><span style="color:#9ECBFF;">&quot;ab1bc2cd3ef4&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        memo: </span><span style="color:#9ECBFF;">&quot;set meta&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        uri: </span><span style="color:#9ECBFF;">&quot;uri1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        hash: </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  blocksBehind: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  expireSeconds: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">transact</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  actions: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      account: </span><span style="color:#032F62;">&quot;eosio.nft.ft&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;setmeta.b&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      authorization: [{ actor: </span><span style="color:#032F62;">&quot;manager.acc&quot;</span><span style="color:#24292E;">, permission: </span><span style="color:#032F62;">&quot;active&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      data: {</span></span>
<span class="line"><span style="color:#24292E;">        token_id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        owner: </span><span style="color:#032F62;">&quot;ab1bc2cd3ef4&quot;</span></span>
<span class="line"><span style="color:#24292E;">        memo: </span><span style="color:#032F62;">&quot;set meta&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        uri: </span><span style="color:#032F62;">&quot;uri1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        hash: </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">}, {</span></span>
<span class="line"><span style="color:#24292E;">  blocksBehind: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  expireSeconds: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,17),l=[e];function p(c,r,i,d,E,u){return n(),a("div",null,l)}const b=s(o,[["render",p]]);export{h as __pageData,b as default};
