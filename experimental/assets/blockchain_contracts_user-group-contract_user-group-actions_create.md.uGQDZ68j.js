import{_ as a,c as s,o,L as t}from"./chunks/framework.YmJWI2yl.js";const h=JSON.parse('{"title":"create","description":"","frontmatter":{"title":"create","order":1},"headers":[],"relativePath":"blockchain/contracts/user-group-contract/user-group-actions/create.md","filePath":"blockchain/contracts/user-group-contract/user-group-actions/create.md","lastUpdated":null}'),n={name:"blockchain/contracts/user-group-contract/user-group-actions/create.md"},e=t(`<h2 id="create-a" tabindex="-1"><code>create.a</code> <a class="header-anchor" href="#create-a" aria-label="Permalink to &quot;\`create.a\`&quot;">​</a></h2><p>The <code>create.a</code> action is the first version of the create action for the Ultra blockchain. It registers a new group in the <code>groups.a</code> table using the parameters specified by the creator.</p><h3 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h3><ul><li>This action reads the new group ID from the <code>groupid</code> table and then increments the <code>id</code> field.</li><li>The <code>eosio.group</code> account pays for the RAM usage for the <code>groupid</code> table.</li><li>Any account can create a group, and the creator account pays the RAM usage to store the group info in the <code>groups.a</code> table.</li></ul><h3 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h3><table><thead><tr><th>Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Remarks</th></tr></thead><tbody><tr><td><code>creator</code></td><td><code>name</code></td><td><code>String</code></td><td>The account that creates the group.</td></tr><tr><td><code>meta_uri</code></td><td><code>optional&lt;string&gt;</code></td><td><code>String/Null</code></td><td>URI pointing to the group&#39;s off-chain metadata.</td></tr><tr><td><code>meta_hash</code></td><td><code>optional&lt;checksum256&gt;</code></td><td><code>String/Null</code></td><td>Hash of the group&#39;s metadata.</td></tr><tr><td><code>memo</code></td><td><code>string</code></td><td><code>String</code></td><td>A memo string.</td></tr></tbody></table><p><strong>Note</strong>: The <code>meta_uri</code> and <code>meta_hash</code> can be null or an empty string, except that the combination of a null/empty <code>meta_uri</code> and a non-null/non-empty <code>meta_hash</code> is not allowed.</p><h3 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h3><p>You can use the following <code>cleos</code> command to create a new group:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eosio.group</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create.a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{&quot;creator&quot;: &quot;alice&quot;, &quot;meta_uri&quot;: &quot;https://ultra/group/meta/germany&quot;, &quot;meta_hash&quot;: &quot;9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08&quot;, &quot;memo&quot;: &quot;new group&quot;}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">alice@active</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eosio.group</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create.a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{&quot;creator&quot;: &quot;alice&quot;, &quot;meta_uri&quot;: &quot;https://ultra/group/meta/germany&quot;, &quot;meta_hash&quot;: &quot;9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08&quot;, &quot;memo&quot;: &quot;new group&quot;}&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">alice@active</span></span></code></pre></div><h3 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h3><p>To interact with this action using eosjs, you can use the following JavaScript code:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">transact</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;account&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eosio.group&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;create.a&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;authorization&quot;</span><span style="color:#E1E4E8;">: [{ </span><span style="color:#9ECBFF;">&quot;actor&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;alice&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;permission&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;active&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;creator&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;alice&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;meta_uri&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://ultra/group/meta/germany&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;meta_hash&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;memo&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;new group&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">transact</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  actions: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;account&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eosio.group&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;create.a&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;authorization&quot;</span><span style="color:#24292E;">: [{ </span><span style="color:#032F62;">&quot;actor&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;alice&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;permission&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;active&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;creator&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;alice&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;meta_uri&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://ultra/group/meta/germany&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;meta_hash&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;memo&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;new group&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,13),l=[e];function p(c,r,u,i,E,d){return o(),s("div",null,l)}const q=a(n,[["render",p]]);export{h as __pageData,q as default};
