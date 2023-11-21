import{_ as o,c as s,o as t,L as e}from"./chunks/framework.EMf-NuUT.js";const y=JSON.parse('{"title":"Resigning System Accounts","description":"","frontmatter":{"title":"Resigning System Accounts","outline":[0,4],"order":-95},"headers":[],"relativePath":"blockchain/block-producers/launch-procedures/resigning-eosio-and-system-accounts.md","filePath":"blockchain/block-producers/launch-procedures/resigning-eosio-and-system-accounts.md","lastUpdated":null}'),a={name:"blockchain/block-producers/launch-procedures/resigning-eosio-and-system-accounts.md"},n=e(`<h1 id="resigning-eosio-and-system-accounts" tabindex="-1">Resigning EOSIO and System Accounts <a class="header-anchor" href="#resigning-eosio-and-system-accounts" aria-label="Permalink to &quot;Resigning EOSIO and System Accounts&quot;">​</a></h1><p>Once the network has 3 producers actively producing blocks for the chain; Ultra can move on to resigning the <code>eosio</code> account permissions to the producers.</p><p>Ultra will also need to go through and only let <code>eosio</code> control the system accounts. This is a precaution to ensure that all system accounts are only controlled by <code>eosio</code>.</p><h2 id="resigning-system-accounts" tabindex="-1">Resigning System Accounts <a class="header-anchor" href="#resigning-system-accounts" aria-label="Permalink to &quot;Resigning System Accounts&quot;">​</a></h2><p>The first thing we’ll do is resign <code>eosio</code> and give privileges to <code>eosio.wrap</code> and <code>eosio.msig</code>.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">cleos push action eosio setpriv </span><span style="color:#9ECBFF;">&#39;[&quot;eosio.msig&quot;, 1]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p eosio@active</span></span>
<span class="line"><span style="color:#E1E4E8;">cleos push action eosio setpriv </span><span style="color:#9ECBFF;">&#39;[&quot;eosio.wrap&quot;, 1]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p eosio@active</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">cleos push action eosio setpriv </span><span style="color:#032F62;">&#39;[&quot;eosio.msig&quot;, 1]&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p eosio@active</span></span>
<span class="line"><span style="color:#24292E;">cleos push action eosio setpriv </span><span style="color:#032F62;">&#39;[&quot;eosio.wrap&quot;, 1]&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p eosio@active</span></span></code></pre></div><h2 id="resigning-eosio-account" tabindex="-1">Resigning EOSIO Account <a class="header-anchor" href="#resigning-eosio-account" aria-label="Permalink to &quot;Resigning EOSIO Account&quot;">​</a></h2><p>After we can do the final update of authorization on <code>eosio</code> by resigning all permissions to the <code>eosio.prods</code> account.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">cleos push action eosio updateauth </span><span style="color:#9ECBFF;">&#39;{&quot;account&quot;: &quot;eosio&quot;, &quot;permission&quot;: &quot;owner&quot;, &quot;parent&quot;: &quot;&quot;, &quot;auth&quot;: {&quot;threshold&quot;: 1, &quot;keys&quot;: [], &quot;waits&quot;: [], &quot;accounts&quot;: [{&quot;weight&quot;: 1, &quot;permission&quot;: {&quot;actor&quot;: &quot;eosio.prods&quot;, &quot;permission&quot;: &quot;active&quot;}}]}}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p eosio@owner</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">cleos push action eosio updateauth </span><span style="color:#9ECBFF;">&#39;{&quot;account&quot;: &quot;eosio&quot;, &quot;permission&quot;: &quot;active&quot;, &quot;parent&quot;: &quot;owner&quot;, &quot;auth&quot;: {&quot;threshold&quot;: 1, &quot;keys&quot;: [], &quot;waits&quot;: [], &quot;accounts&quot;: [{&quot;weight&quot;: 1, &quot;permission&quot;: {&quot;actor&quot;: &quot;eosio.prods&quot;, &quot;permission&quot;: &quot;active&quot;}}]}}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p eosio@active</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">cleos push action eosio updateauth </span><span style="color:#032F62;">&#39;{&quot;account&quot;: &quot;eosio&quot;, &quot;permission&quot;: &quot;owner&quot;, &quot;parent&quot;: &quot;&quot;, &quot;auth&quot;: {&quot;threshold&quot;: 1, &quot;keys&quot;: [], &quot;waits&quot;: [], &quot;accounts&quot;: [{&quot;weight&quot;: 1, &quot;permission&quot;: {&quot;actor&quot;: &quot;eosio.prods&quot;, &quot;permission&quot;: &quot;active&quot;}}]}}&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p eosio@owner</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">cleos push action eosio updateauth </span><span style="color:#032F62;">&#39;{&quot;account&quot;: &quot;eosio&quot;, &quot;permission&quot;: &quot;active&quot;, &quot;parent&quot;: &quot;owner&quot;, &quot;auth&quot;: {&quot;threshold&quot;: 1, &quot;keys&quot;: [], &quot;waits&quot;: [], &quot;accounts&quot;: [{&quot;weight&quot;: 1, &quot;permission&quot;: {&quot;actor&quot;: &quot;eosio.prods&quot;, &quot;permission&quot;: &quot;active&quot;}}]}}&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p eosio@active</span></span></code></pre></div>`,9),c=[n];function u(i,p,l,r,q,d){return t(),s("div",null,c)}const g=o(a,[["render",u]]);export{y as __pageData,g as default};
