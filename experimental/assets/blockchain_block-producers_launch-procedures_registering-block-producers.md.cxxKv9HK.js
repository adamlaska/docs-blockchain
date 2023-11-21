import{_ as s,c as e,o as a,L as o}from"./chunks/framework.YmJWI2yl.js";const E=JSON.parse('{"title":"Registering Block Producers","description":"","frontmatter":{"title":"Registering Block Producers","outline":[0,4],"order":-96},"headers":[],"relativePath":"blockchain/block-producers/launch-procedures/registering-block-producers.md","filePath":"blockchain/block-producers/launch-procedures/registering-block-producers.md","lastUpdated":null}'),t={name:"blockchain/block-producers/launch-procedures/registering-block-producers.md"},l=o('<h1 id="registering-block-producers" tabindex="-1">Registering Block Producers <a class="header-anchor" href="#registering-block-producers" aria-label="Permalink to &quot;Registering Block Producers&quot;">​</a></h1><h2 id="obtaining-a-private-and-public-key-pair" tabindex="-1">Obtaining a Private and Public Key Pair <a class="header-anchor" href="#obtaining-a-private-and-public-key-pair" aria-label="Permalink to &quot;Obtaining a Private and Public Key Pair&quot;">​</a></h2><p>Each Block Producer must provide Ultra with a public key that they will generate locally.</p><p>It is highly recommended that when you generate these keys that the private key is stored in a safe location. Please formulate a plan to keep this private key a secret. We refer you to <a href="./../maintenance/account-administration.html">Account administration</a> for more details.</p><h3 id="to-output-the-key-pair-to-the-console" tabindex="-1">To output the key pair to the console. <a class="header-anchor" href="#to-output-the-key-pair-to-the-console" aria-label="Permalink to &quot;To output the key pair to the console.&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">cleos create key </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">to</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">console</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">cleos create key </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">to</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">console</span></span></code></pre></div><h3 id="to-save-the-key-pair-to-file" tabindex="-1">To save the key pair to file <a class="header-anchor" href="#to-save-the-key-pair-to-file" aria-label="Permalink to &quot;To save the key pair to file&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">cleos create key </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">file </span><span style="color:#79B8FF;">FILE_TO_SAVEKEY</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">cleos create key </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">file </span><span style="color:#005CC5;">FILE_TO_SAVEKEY</span></span></code></pre></div><p>Ultra will then create the Block Producers&#39; accounts with the Block Producer’s public key.</p><p>Once this is done; Ultra can use the following command to create an account for them.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">cleos system newaccount ultra </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">account_name</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#B392F0;">public_key</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">transfer </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">stake</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">net </span><span style="color:#9ECBFF;">&quot;0.0000 UOS&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">stake</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">cpu </span><span style="color:#9ECBFF;">&quot;0.0000 UOS&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">gift</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">ram</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">kbytes </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">determine_kbytes_to_buy</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p ultra </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">ultra</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">id </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ultra_id</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">cleos system newaccount ultra </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">account_name</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> &lt;</span><span style="color:#6F42C1;">public_key</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">transfer </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">stake</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">net </span><span style="color:#032F62;">&quot;0.0000 UOS&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">stake</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">cpu </span><span style="color:#032F62;">&quot;0.0000 UOS&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">gift</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">ram</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">kbytes </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">determine_kbytes_to_buy</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p ultra </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">ultra</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">id </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ultra_id</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Block Producers must be registered through Ultra and will need to synchronize their chains up with the genesis nodeos. Once synchronized and the Block Producer is receiving blocks successfully, they can request for Ultra to register them on the network.</p><h2 id="block-producer-checklist" tabindex="-1">Block Producer Checklist <a class="header-anchor" href="#block-producer-checklist" aria-label="Permalink to &quot;Block Producer Checklist&quot;">​</a></h2><p>Here are some things that block producers will be providing to Ultra for their genesis node.</p><ul><li><p>Wireguard IP / Port</p></li><li><p>Endpoint Address</p></li><li><p>Public Key for Producer</p></li></ul><p>Once they are provided; Ultra can easily register them. This can be done through the following command.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">cleos push action eosio regproducer </span><span style="color:#9ECBFF;">&#39;[&quot;&lt;account_name&gt;&quot;,&quot;&lt;public_key&gt;&quot;,&quot;&lt;url&gt;&quot;,&lt;location&gt;]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">p ultra</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">cleos push action eosio regproducer </span><span style="color:#032F62;">&#39;[&quot;&lt;account_name&gt;&quot;,&quot;&lt;public_key&gt;&quot;,&quot;&lt;url&gt;&quot;,&lt;location&gt;]&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">p ultra</span></span></code></pre></div><p>Once this is done, Ultra can verify the current producers by checking the following table.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">cleos get table eosio eosio producers</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">cleos get table eosio eosio producers</span></span></code></pre></div>',19),n=[l];function p(c,r,i,y,u,d){return a(),e("div",null,n)}const g=s(t,[["render",p]]);export{E as __pageData,g as default};
