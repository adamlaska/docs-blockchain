import{_ as s,c as a,o,L as n}from"./chunks/framework.EMf-NuUT.js";const q=JSON.parse('{"title":"adduser","description":"","frontmatter":{"title":"adduser","order":3},"headers":[],"relativePath":"blockchain/contracts/user-group-contract/user-group-actions/adduser.md","filePath":"blockchain/contracts/user-group-contract/user-group-actions/adduser.md","lastUpdated":null}'),t={name:"blockchain/contracts/user-group-contract/user-group-actions/adduser.md"},e=n(`<h2 id="adduser-a" tabindex="-1"><code>adduser.a</code> <a class="header-anchor" href="#adduser-a" aria-label="Permalink to &quot;\`adduser.a\`&quot;">​</a></h2><p>The <code>adduser.a</code> action is the first version of the adduser action in the Ultra blockchain. This action allows the creator of a group to add one or more users to a specified group. The user account names will be added to the <code>users.a</code> table and the <code>nr_users</code> field in the <code>groups.a</code> table will be updated accordingly.</p><h3 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h3><ul><li>The creator of the group can add new users to it.</li><li>The <code>nr_users</code> field in <code>groups.a</code> table is incremented by the number of users added.</li><li>The action will fail if any of the user names have already been added to the group.</li></ul><h3 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h3><table><thead><tr><th>Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Remarks</th></tr></thead><tbody><tr><td><code>creator</code></td><td><code>name</code></td><td><code>String</code></td><td>The account that originally created the group.</td></tr><tr><td><code>group_id</code></td><td><code>uint64_t</code></td><td><code>Number/String</code></td><td>The ID used to identify the group to which the users will be added.</td></tr><tr><td><code>users</code></td><td><code>vector&lt;name&gt;</code></td><td><code>Array of String</code></td><td>The user names to be added to the group.</td></tr><tr><td><code>memo</code></td><td><code>string</code></td><td><code>String</code></td><td>A memo string.</td></tr></tbody></table><p><strong>Note</strong>:</p><ul><li>The <code>creator</code> should be the original creator of the group specified by <code>group_id</code>.</li><li>The <code>users</code> array should not be empty.</li></ul><h3 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h3><p>To add users to a group, use the following <code>cleos</code> command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eosio.group</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">adduser.a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{&quot;creator&quot;: &quot;alice&quot;, &quot;group_id&quot;: 0, &quot;users&quot; : [&quot;carol&quot;, &quot;daniel&quot;], &quot;memo&quot;: &quot;add two new users&quot;}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">alice@active</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eosio.group</span><span style="color:#24292E;"> </span><span style="color:#032F62;">adduser.a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{&quot;creator&quot;: &quot;alice&quot;, &quot;group_id&quot;: 0, &quot;users&quot; : [&quot;carol&quot;, &quot;daniel&quot;], &quot;memo&quot;: &quot;add two new users&quot;}&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">alice@active</span></span></code></pre></div><h3 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h3><p>You can also use the following eosjs code snippet to add users to a group:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">transact</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  actions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;account&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eosio.group&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;adduser.a&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;authorization&quot;</span><span style="color:#E1E4E8;">: [{ </span><span style="color:#9ECBFF;">&quot;actor&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;alice&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;permission&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;active&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;creator&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;alice&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;group_id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;users&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;carol&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;daniel&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;memo&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;add two new users&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">transact</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  actions: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;account&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eosio.group&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;adduser.a&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;authorization&quot;</span><span style="color:#24292E;">: [{ </span><span style="color:#032F62;">&quot;actor&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;alice&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;permission&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;active&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;creator&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;alice&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;group_id&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;users&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;carol&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;daniel&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;memo&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;add two new users&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,14),l=[e];function p(c,r,d,u,i,E){return o(),a("div",null,l)}const h=s(t,[["render",p]]);export{q as __pageData,h as default};
