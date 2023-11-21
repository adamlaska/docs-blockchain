import{_ as s,c as a,o as n,L as t,bu as o,bw as e,bx as l}from"./chunks/framework.YmJWI2yl.js";const _=JSON.parse('{"title":"Your First Uniq Factory","description":"","frontmatter":{"title":"Your First Uniq Factory","order":5,"outline":[0,4]},"headers":[],"relativePath":"tutorials/uniq-factories/building-uniq-factories/firsttokenfactory.md","filePath":"tutorials/uniq-factories/building-uniq-factories/firsttokenfactory.md","lastUpdated":null}'),p={name:"tutorials/uniq-factories/building-uniq-factories/firsttokenfactory.md"},r=t('<h1 id="your-first-uniq-factory" tabindex="-1">Your First Uniq Factory <a class="header-anchor" href="#your-first-uniq-factory" aria-label="Permalink to &quot;Your First Uniq Factory&quot;">​</a></h1><h2 id="make-sure-you-re-ready" tabindex="-1">Make sure you&#39;re ready <a class="header-anchor" href="#make-sure-you-re-ready" aria-label="Permalink to &quot;Make sure you&#39;re ready&quot;">​</a></h2><p>Once you have your <a href="./creatingmetadata.html">metadata set up</a>, you&#39;ll be ready to create your first token factory.</p><p>Just to be absolutely clear, the expected flow for building a Token Factory is:</p><ol><li>Upload images</li><li>Generate metadata</li><li>Calculate hashes</li><li>Push on-chain</li></ol><p>Without the images already uploaded to the correct location, the metadata tool can not verify that they exist, nor can it create the unique hashes that identify them.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>It is up to you to manage the Token Factory images and ensure that they are permanently available for the network to access.</strong></p></div><p>If you&#39;d prefer to focus just on this section and learn how to push the on-chain transaction that generates the Token Factory, we have prepared a simple example zip file for you that already has been generated based on files that are located in this developer guide. You&#39;re welcome to upload this to anywhere semi-permanent for your learning purposes. We suggest Github, and you can access it as a RAW file from there.</p><p><a href="/experimental/zip/example_token_factory.zip"><img src="'+o+'" alt="Download"></a></p><p>To create a Token Factory on Testnet, you&#39;ll be using the Ultra Developer Tools. If you haven&#39;t set up your developer environment, we&#39;ve <a href="./yourdevelopmentenv.html">set up a quick checklist</a> for you to be able to hit the ground running.</p><p>Once you&#39;re inside your docker image, have your wallet set up, and have your Testnet account ready, you&#39;re good to go for the next step.</p><h2 id="creating-your-first-token-factory" tabindex="-1">Creating your first Token Factory <a class="header-anchor" href="#creating-your-first-token-factory" aria-label="Permalink to &quot;Creating your first Token Factory&quot;">​</a></h2><p><img src="'+e+`" alt=""></p><p>Once you have everything set up, you&#39;ll be ready to create this Token Factory on the Testnet.</p><p>The following is an example transaction. You will have to fill in the missing details:</p><ul><li><code>&lt;YOUR ACCOUNT&gt;</code> - Your Testnet account</li><li><code>&lt;MINT WINDOW START&gt;</code> - A datetime in the format <code>2021-05-31T00:00:00</code></li><li><code>&lt;TRADING WINDOW START&gt;</code> - A datetime in the format <code>2021-05-31T00:00:00</code></li><li><code>&lt;YOUR UNIQ FACTORY URI&gt;</code> - The URI of the metadata either as a zip file, or targeting the <code>factory.json</code> file with a full path</li><li><code>&lt;YOUR META HASH&gt;</code> - The hash of the filename, you can find this in <code>upload.json</code> in the <code>factory</code> block at the top</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http://ultratest.api.eosnation.io</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eosio.nft.ft</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;[</span></span>
<span class="line"><span style="color:#9ECBFF;">      {</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;memo&quot;:&quot;thirdPartyUniqNewMeta&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;version&quot;:0,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;asset_manager&quot;:&quot;&lt;YOUR ACCOUNT&gt;&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;asset_creator&quot;:&quot;&lt;YOUR ACCOUNT&gt;&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;conversion_rate_oracle_contract&quot;:null,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;chosen_rate&quot;:null,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;minimum_resell_price&quot;:null,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;resale_shares&quot;:null,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;mintable_window_start&quot;:&quot;&lt;MINT WINDOW START&gt;&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;mintable_window_end&quot;:null,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;trading_window_start&quot;: &quot;&lt;TRADING WINDOW START&gt;&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;trading_window_end&quot;:null,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;recall_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;recall_window_end&quot;:null,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;max_mintable_tokens&quot;:10,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;lockup_time&quot;:null,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;conditionless_receivers&quot;:null,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;stat&quot;:0,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;meta_uris&quot;:[&quot;&lt;YOUR UNIQ FACTORY URI&gt;&quot;],</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;meta_hash&quot;:&quot;&lt;YOUR META HASH&gt;&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;authorized_minters&quot;:[],</span></span>
<span class="line"><span style="color:#9ECBFF;">        &quot;account_minting_limit&quot;:1</span></span>
<span class="line"><span style="color:#9ECBFF;">      }</span></span>
<span class="line"><span style="color:#9ECBFF;">    ]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">-p </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">YOUR</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ACCOUN</span><span style="color:#E1E4E8;">T</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http://ultratest.api.eosnation.io</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eosio.nft.ft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;[</span></span>
<span class="line"><span style="color:#032F62;">      {</span></span>
<span class="line"><span style="color:#032F62;">        &quot;memo&quot;:&quot;thirdPartyUniqNewMeta&quot;,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;version&quot;:0,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;asset_manager&quot;:&quot;&lt;YOUR ACCOUNT&gt;&quot;,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;asset_creator&quot;:&quot;&lt;YOUR ACCOUNT&gt;&quot;,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;conversion_rate_oracle_contract&quot;:null,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;chosen_rate&quot;:null,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;minimum_resell_price&quot;:null,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;resale_shares&quot;:null,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;mintable_window_start&quot;:&quot;&lt;MINT WINDOW START&gt;&quot;,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;mintable_window_end&quot;:null,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;trading_window_start&quot;: &quot;&lt;TRADING WINDOW START&gt;&quot;,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;trading_window_end&quot;:null,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;recall_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;recall_window_end&quot;:null,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;max_mintable_tokens&quot;:10,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;lockup_time&quot;:null,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;conditionless_receivers&quot;:null,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;stat&quot;:0,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;meta_uris&quot;:[&quot;&lt;YOUR UNIQ FACTORY URI&gt;&quot;],</span></span>
<span class="line"><span style="color:#032F62;">        &quot;meta_hash&quot;:&quot;&lt;YOUR META HASH&gt;&quot;,</span></span>
<span class="line"><span style="color:#032F62;">        &quot;authorized_minters&quot;:[],</span></span>
<span class="line"><span style="color:#032F62;">        &quot;account_minting_limit&quot;:1</span></span>
<span class="line"><span style="color:#032F62;">      }</span></span>
<span class="line"><span style="color:#032F62;">    ]&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">-p </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">YOUR</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ACCOUN</span><span style="color:#24292E;">T</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Once you&#39;ve run this command, you should get a message confirming that your transaction has been executed locally.</p><p>To see it in action on the Testnet, hop on over to the <a href="https://explorer.testnet.ultra.io/" target="_blank" rel="noreferrer">Testnet block explorer</a> and input your account name into the search box at the top.</p><p>You should see a new transaction that shows that your new Token Factory has been successfully created.</p><p><img src="`+l+'" alt=""></p><p>We are glossing over a lot of functionality here, in the interest of getting you up and running quickly. Later guides will cover some of the more advanced features that our NFT standard supports, including variants, authorized minters, and much more.</p><p>In the meantime, congratulations on creating your first Token Factory. <strong>Now, let&#39;s go mint your first Uniq!</strong></p>',23),c=[r];function i(u,y,d,h,q,F){return n(),a("div",null,c)}const g=s(p,[["render",i]]);export{_ as __pageData,g as default};
