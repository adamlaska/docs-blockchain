import{_ as e,c as a,o as t,L as o}from"./chunks/framework.vEmsHuDM.js";const v=JSON.parse('{"title":"Activating the Chain","description":"","frontmatter":{"title":"Activating the Chain","outline":[0,4],"order":-94},"headers":[],"relativePath":"blockchain/block-producers/launch-procedures/activating-the-chain.md","filePath":"blockchain/block-producers/launch-procedures/activating-the-chain.md","lastUpdated":null}'),n={name:"blockchain/block-producers/launch-procedures/activating-the-chain.md"},c=o('<h1 id="activating-the-chain" tabindex="-1">Activating the Chain <a class="header-anchor" href="#activating-the-chain" aria-label="Permalink to &quot;Activating the Chain&quot;">​</a></h1><h2 id="difference-from-antelope" tabindex="-1">Difference from Antelope <a class="header-anchor" href="#difference-from-antelope" aria-label="Permalink to &quot;Difference from Antelope&quot;">​</a></h2><p>Ultra is responsible for activating the chain and the <code>ultra</code> account is the only account that can activate the chain. It is important to understand that instead of having <code>eosio</code> account relieve its permissions we opted instead for the <code>ultra</code> account to complete this task.</p><h2 id="how-to-activate" tabindex="-1">How to Activate <a class="header-anchor" href="#how-to-activate" aria-label="Permalink to &quot;How to Activate&quot;">​</a></h2><p>Once everything is verified for the resignation of accounts; we can do a final step to activate the chain.</p><p>This is the final step before the producers begin <strong>PRODUCING</strong> blocks.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">cleos push action eosio activatechn </span><span style="color:#9ECBFF;">&#39;[]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p ultra</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">cleos push action eosio activatechn </span><span style="color:#032F62;">&#39;[]&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p ultra</span></span></code></pre></div>',7),i=[c];function s(r,l,p,h,d,u){return t(),a("div",null,i)}const _=e(n,[["render",s]]);export{v as __pageData,_ as default};
