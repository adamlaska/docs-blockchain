import{_ as a,c as s,o as n,L as t}from"./chunks/framework.YmJWI2yl.js";const b=JSON.parse('{"title":"setmeta.b","description":"","frontmatter":{"title":"setmeta.b","order":23},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/setmeta.b.md","filePath":"blockchain/contracts/nft-contract/nft-actions/setmeta.b.md","lastUpdated":null}'),e={name:"blockchain/contracts/nft-contract/nft-actions/setmeta.b.md"},o=t(`<h1 id="setmeta-b-set-token-factory-metadata-uri-and-hash-v1" tabindex="-1">setmeta.b - set token factory metadata uri and hash v1 <a class="header-anchor" href="#setmeta-b-set-token-factory-metadata-uri-and-hash-v1" aria-label="Permalink to &quot;setmeta.b - set token factory metadata uri and hash v1&quot;">​</a></h1><p>Allows a token manager to set metadata uri and hash for an existing token factory, see more details metadata</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><ul><li><p>The required authorization is the token_factory_manager as the manager is responsible for updating the data.</p></li><li><p><code>token_factory_id</code> is required and must exist.</p></li><li><p><code>memo</code> value has a 256 byte limitation</p></li><li><p><code>factory_uri</code> is required to have non-zero length</p></li></ul><p>If factory has <code>lock_hash</code> set to <code>true</code>:</p><ul><li>Can change the <code>factory_uri</code>, but <code>factory_hash</code> must remain unchanged</li></ul><h2 id="ram-usage" tabindex="-1">RAM usage <a class="header-anchor" href="#ram-usage" aria-label="Permalink to &quot;RAM usage&quot;">​</a></h2><p>Adding meta_uris and meta_hash will consume certain bytes depend on how many data are added.</p><p>RAM usage is covered by eosio.nftram. But this action will fail if the unused RAM of eosio.nftram is less than or equal to 200MB.</p><p>If the RAM usage is exceed factory maximum pack size of 1920 bytes, action will fail.</p><p>Updating or remove meta data which result in no bytes is added, there will be no restriction.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>Javascript Type</th><th>Example</th></tr></thead><tbody><tr><td>token_factory_id</td><td>uint64_t</td><td>number</td><td>1</td></tr><tr><td>memo</td><td>string</td><td>string</td><td>&quot;hi&quot;</td></tr><tr><td>factory_uri</td><td>string</td><td>string</td><td>&quot;uri1&quot;</td></tr><tr><td>factory_hash</td><td>checksum256</td><td>string</td><td>&quot;fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9&quot;</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eosio.nft.ft</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">setmeta.b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[1, &quot;updating&quot;, &quot;uri1&quot;, &quot;fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9&quot;]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">manager.acc@active</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eosio.nft.ft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">setmeta.b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;[1, &quot;updating&quot;, &quot;uri1&quot;, &quot;fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9&quot;]&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">manager.acc@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">transact</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    actions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            account: </span><span style="color:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;setmeta.b&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            authorization: [{ actor: </span><span style="color:#9ECBFF;">&#39;manager.acc&#39;</span><span style="color:#E1E4E8;">, permission: </span><span style="color:#9ECBFF;">&#39;active&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">            data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                token_factory_id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                memo: </span><span style="color:#9ECBFF;">&#39;set meta&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                factory_uri: </span><span style="color:#9ECBFF;">&#39;uri1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                factory_hash: </span><span style="color:#9ECBFF;">&#39;fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">transact</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    actions: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            account: </span><span style="color:#032F62;">&#39;eosio.nft.ft&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;setmeta.b&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            authorization: [{ actor: </span><span style="color:#032F62;">&#39;manager.acc&#39;</span><span style="color:#24292E;">, permission: </span><span style="color:#032F62;">&#39;active&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">            data: {</span></span>
<span class="line"><span style="color:#24292E;">                token_factory_id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                memo: </span><span style="color:#032F62;">&#39;set meta&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                factory_uri: </span><span style="color:#032F62;">&#39;uri1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                factory_hash: </span><span style="color:#032F62;">&#39;fbbf2217571b6dbe2fca75b0fd3aebb5b4e247bc89e235d4d09d014bb855d1c9&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,17),l=[o];function p(c,r,i,d,E,y){return n(),s("div",null,l)}const u=a(e,[["render",p]]);export{b as __pageData,u as default};
