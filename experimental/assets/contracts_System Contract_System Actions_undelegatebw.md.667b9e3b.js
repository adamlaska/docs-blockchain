import{_ as s,v as a,b as n,R as t}from"./chunks/framework.a49639fc.js";const d=JSON.parse('{"title":"undelegatebw - unstake tokens for POWER","description":"","frontmatter":{"title":"undelegatebw - unstake tokens for POWER","order":8,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/System Contract/System Actions/undelegatebw.md","filePath":"contracts/System Contract/System Actions/undelegatebw.md","lastUpdated":1693228785000}'),o={name:"contracts/System Contract/System Actions/undelegatebw.md"},e=t(`<h1 id="undelegatebw-unstake-tokens-for-power" tabindex="-1">undelegatebw - unstake tokens for POWER <a class="header-anchor" href="#undelegatebw-unstake-tokens-for-power" aria-label="Permalink to &quot;undelegatebw - unstake tokens for POWER&quot;">​</a></h1><p>Unstake delegated bandwidth that a user staked for another user or self. If the user delegated bandwidth to the receiver without UOS transfer, they may re-obtain the bandwidth at any time.</p><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>from</td><td>eosio::name</td><td>The source account name. Authentication required</td></tr><tr><td>receiver</td><td>eosio::name</td><td>The destination account name</td></tr><tr><td>stake_net_quantity</td><td>eosio::asset</td><td>The amount of POWER to unstake</td></tr><tr><td>transfer</td><td>bool</td><td>If true transfers UOS tokens but not the POWER itself</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">undelegatebw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;from&quot;,&quot;receiver&quot;,&quot;5.0000 UOS&quot;,true]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">await api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transact</span><span style="color:#89DDFF;">({</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      account</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eosio</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">undelegatebw</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      authorization</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[{</span><span style="color:#A6ACCD;"> actor</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">from</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> permission</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}],</span></span>
<span class="line"><span style="color:#A6ACCD;">      data</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        from</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">from</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        receiver</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">receiver</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        stake_net_quantity</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5.00000000 UOS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        transfer</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span></code></pre></div>`,7),l=[e];function p(r,c,D,y,i,F){return a(),n("div",null,l)}const u=s(o,[["render",p]]);export{d as __pageData,u as default};