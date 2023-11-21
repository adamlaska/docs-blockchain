import{_ as s,c as a,o as n,L as t}from"./chunks/framework.YmJWI2yl.js";const _=JSON.parse('{"title":"create","description":"","frontmatter":{"title":"create","order":9},"headers":[],"relativePath":"blockchain/contracts/nft-contract/nft-actions/create.md","filePath":"blockchain/contracts/nft-contract/nft-actions/create.md","lastUpdated":null}'),e={name:"blockchain/contracts/nft-contract/nft-actions/create.md"},o=t(`<h1 id="create" tabindex="-1">create <a class="header-anchor" href="#create" aria-label="Permalink to &quot;create&quot;">​</a></h1><p>Create a token factory.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Deprecated. Use <code>create.b</code> instead</p></div><h2 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h2><p>Used to create a token factory for the <strong>asset_creator</strong> and will be managed by the <strong>asset_manager</strong>.</p><p>The <strong>asset_manager</strong> and the <strong>asset_creator</strong> need to agree on the token factory configuration according to their specific business strategy, like resale share, etc. The agreement is done via the co-signing of the transaction.</p><p>By creating the token factory together, the <strong>asset_creator</strong> agrees to all the terms, including letting the <strong>asset_manager</strong> manage the factory and its tokens.</p><p>If the <code>stat</code> parameter is not specified, a new token factory is created in inactive state which may be changed with the <code>setstatus</code> action.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>Upon creation, a token factory id will be automatically assigned to the new token factory. This id is incremental and includes information about the NFT version.</p><h2 id="token-factory-id" tabindex="-1">Token factory ID <a class="header-anchor" href="#token-factory-id" aria-label="Permalink to &quot;Token factory ID&quot;">​</a></h2><ul><li>64 bit number</li><li>First 12 bit will be NFT version</li><li>Next 52 bit will be factory counter</li><li>Factory counter is singleton table with NFT version as entry, will auto increase each time a token factory is created</li></ul><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p>Try to think of the action parameters as a <strong>JSON Object</strong> when reading this table. There will be a <strong>JavaScript</strong> example of the action below this table.</p><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>memo</td><td>std::string</td><td>Memo, 256 bytes max.</td></tr><tr><td>version</td><td>uint64_t</td><td>Version, always 0.</td></tr><tr><td>asset_creator</td><td>eosio::name</td><td>asset_manager and asset_creator are required to sign this action. asset_manager and asset_creator can be same account. For v0, asset_manager will be ultra.nft.ft</td></tr><tr><td>asset_manager</td><td>eosio::name</td><td></td></tr><tr><td>conversion_rate_oracle_contract</td><td>eosio::name</td><td>The contract where token will query the conversion rate from. Not implemented in v0.</td></tr><tr><td>chosen_rate</td><td>std::vector<code>&lt;eosio::asset&gt;</code></td><td>Array of conversion rates. Each rate describes the conversion between USD ↔︎ UOS. Not implemented in v0</td></tr><tr><td>minimum_resell_price</td><td>eosio::asset</td><td>Should be specified in UOS. If set to 0, tokens can be transferred to other accounts with the transfer action, as long as token still in trading window and outside of lockup time. If set to &gt;\` 0, token can only be sold to others through the buy action. conditionless_receivers will ignore these restrictions when transferred.</td></tr><tr><td>resale_shares</td><td>std::vector<code>&lt;resale_share&gt;</code></td><td>An array of pairs of (receiver of the resale, basis point). In basis points 1 means 0.0001 = 0.01%. The total limit is 7000 basis_point or 70%. Receiver can be duplicated.</td></tr><tr><td>mintable_window_start</td><td>eosio::time_point_sec</td><td>Input will be in UTC date up to seconds, for example: &#39;2021-06-01T00:00:00&#39;. The following combinations are possible: [no start, no end] --- forever mintable, [no start, end] --- can only be minted before the ending date, [start, no end] --- can only be minted after the starting date, [start, end] --- can only be minted between the start and end dates.</td></tr><tr><td>mintable_window_end</td><td>eosio::time_point_sec</td><td></td></tr><tr><td>trading_window_start</td><td>eosio::time_point_sec</td><td>There 2 types of inputs available: null: will ignore this property, UTC_date_string exact date in UTC, up to seconds, for example: &#39;2021-06-01T00:00:00&#39;. Combinations: [no start, no end] --- forever tradable, [no start, end] --- can only be traded before ending date. [start, no end] --- can only be traded after starting date, [start, end] --- can only be traded in between start and end date.</td></tr><tr><td>trading_window_end</td><td>eosio::time_point_sec</td><td></td></tr><tr><td>recall_window_start</td><td>uint32_t</td><td>Recall feature is disabled. Must be set to null</td></tr><tr><td>recall_window_end</td><td>uint32_t</td><td>Recall feature is disabled. Must be set to null</td></tr><tr><td>max_mintable_tokens</td><td>uint64_t</td><td>Null means this can be minted with an unlimited capacity, &gt;\` 0 means the factory can only mint as many tokens as specified.</td></tr><tr><td>lockup_time</td><td>uint32_t</td><td>Lockup feature is disabled. Must be set to null</td></tr><tr><td>conditionless_receivers</td><td>std::vector<code>&lt;eosio::name&gt;</code></td><td>If set, all accounts must exist when transferred to an account in the list, it will bypass checks for trading window and lockup time</td></tr><tr><td>stat</td><td>uint8_t</td><td>0 (active) -- active uniq factories can do everything, 1 (inactive) --- inactive uniq factories can do everything, except for issuing. 2 (shutdown) --- shutdown uniq factories can do everything, except issuing and activating.</td></tr><tr><td>meta_uris</td><td>std::vector<code>&lt;std::string&gt;</code></td><td>An array of base URIs pointing to the meta data of the token factory. e.g. Ultra.io/meta/1234, redundancy.ultra.io/meta/1234. If set, values cannot contain empty strings or duplicated values.</td></tr><tr><td>meta_hash</td><td>checksum256</td><td>Meta data of token. Optional - can be signed with asset_creator key as proof of being original.</td></tr><tr><td>authorized_minters</td><td>std::vector<code>&lt;minter_authorization_info&gt;</code></td><td>This binary extension specifies accounts authorized to mint tokens from the token factory. <code>minter_authorization_info</code> is defined as a tuple of eosio::name (the account being authorized) and uint32_t (quantity that the authorized account can mint).</td></tr><tr><td>account_minting_limit</td><td>uint32_t</td><td>This binary extension specifies the maximum number of tokens that each account can receive from token minting (issuing).</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eosio.nft.ft</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[{&quot;memo&quot;:null,&quot;version&quot;:0,&quot;asset_manager&quot;:&quot;ultra.nft.ft&quot;,&quot;asset_creator&quot;:&quot;ultra&quot;,&quot;conversion_rate_oracle_contract&quot;:&quot;eosio.oracle&quot;,&quot;chosen_rate&quot;:[&quot;60.0000 SECONDS&quot;],&quot;minimum_resell_price&quot;:null,&quot;resale_shares&quot;:[{&quot;receiver&quot;:&quot;ultra.nft.ft&quot;, &quot;basis_point&quot;:1}],&quot;mintable_window_start&quot;:&quot;2021-05-31T00:00:00&quot;,&quot;mintable_window_end&quot;:null,&quot;trading_window_start&quot;: &quot;2021-05-31T00:00:00&quot;,&quot;trading_window_end&quot;:null,&quot;recall_window_start&quot;: null,&quot;recall_window_end&quot;:null,&quot;max_mintable_tokens&quot;:10000,&quot;lockup_time&quot;:null,&quot;conditionless_receivers&quot;:null,&quot;stat&quot;:0,&quot;meta_uris&quot;:[&quot;test&quot;],&quot;meta_hash&quot;:&quot;d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523&quot;,&quot;authorized_minters&quot;:[],&quot;account_minting_limit&quot;:100}]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ultra.nft.ft</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ultra</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eosio.nft.ft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;[{&quot;memo&quot;:null,&quot;version&quot;:0,&quot;asset_manager&quot;:&quot;ultra.nft.ft&quot;,&quot;asset_creator&quot;:&quot;ultra&quot;,&quot;conversion_rate_oracle_contract&quot;:&quot;eosio.oracle&quot;,&quot;chosen_rate&quot;:[&quot;60.0000 SECONDS&quot;],&quot;minimum_resell_price&quot;:null,&quot;resale_shares&quot;:[{&quot;receiver&quot;:&quot;ultra.nft.ft&quot;, &quot;basis_point&quot;:1}],&quot;mintable_window_start&quot;:&quot;2021-05-31T00:00:00&quot;,&quot;mintable_window_end&quot;:null,&quot;trading_window_start&quot;: &quot;2021-05-31T00:00:00&quot;,&quot;trading_window_end&quot;:null,&quot;recall_window_start&quot;: null,&quot;recall_window_end&quot;:null,&quot;max_mintable_tokens&quot;:10000,&quot;lockup_time&quot;:null,&quot;conditionless_receivers&quot;:null,&quot;stat&quot;:0,&quot;meta_uris&quot;:[&quot;test&quot;],&quot;meta_hash&quot;:&quot;d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523&quot;,&quot;authorized_minters&quot;:[],&quot;account_minting_limit&quot;:100}]&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ultra.nft.ft</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ultra</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">transact</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        actions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                account: </span><span style="color:#9ECBFF;">&#39;eosio.nft.ft&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: </span><span style="color:#9ECBFF;">&#39;create&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                authorization: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    { actor: </span><span style="color:#9ECBFF;">&#39;ultra.nft.ft&#39;</span><span style="color:#E1E4E8;">, permission: </span><span style="color:#9ECBFF;">&#39;active&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    { actor: </span><span style="color:#9ECBFF;">&#39;asset_creator.acc&#39;</span><span style="color:#E1E4E8;">, permission: </span><span style="color:#9ECBFF;">&#39;active&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    create: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        memo: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        version: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        asset_manager: </span><span style="color:#9ECBFF;">&#39;ultra.nft.ft&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        asset_creator: </span><span style="color:#9ECBFF;">&#39;asset_creator.acc&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        conversion_rate_oracle_contract: </span><span style="color:#9ECBFF;">&#39;oracle.rate&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        chosen_rate: [</span><span style="color:#9ECBFF;">&#39;60.0000 SECONDS&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        minimum_resell_price: </span><span style="color:#9ECBFF;">&#39;1.00000000 UOS&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        resale_shares: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                            { receiver: </span><span style="color:#9ECBFF;">&#39;resale1&#39;</span><span style="color:#E1E4E8;">, basis_point: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            { receiver: </span><span style="color:#9ECBFF;">&#39;resale2&#39;</span><span style="color:#E1E4E8;">, basis_point: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        mintable_window_start: </span><span style="color:#9ECBFF;">&#39;2021-05-31T00:00:00&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        mintable_window_end: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        trading_window_start: </span><span style="color:#9ECBFF;">&#39;2021-05-31T00:00:00&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        trading_window_end: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        recall_window_start: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        recall_window_end: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        max_mintable_tokens: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        lockup_time: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        conditionless_receivers: [</span><span style="color:#9ECBFF;">&#39;receiver1&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        stat: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        meta_uris: [</span><span style="color:#9ECBFF;">&#39;test&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        meta_hash: </span><span style="color:#9ECBFF;">&#39;d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        authorized_minters: [{ authorized_minter: </span><span style="color:#9ECBFF;">&#39;ultra&#39;</span><span style="color:#E1E4E8;">, quantity: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        account_minting_limit: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
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
<span class="line"><span style="color:#24292E;">                name: </span><span style="color:#032F62;">&#39;create&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                authorization: [</span></span>
<span class="line"><span style="color:#24292E;">                    { actor: </span><span style="color:#032F62;">&#39;ultra.nft.ft&#39;</span><span style="color:#24292E;">, permission: </span><span style="color:#032F62;">&#39;active&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                    { actor: </span><span style="color:#032F62;">&#39;asset_creator.acc&#39;</span><span style="color:#24292E;">, permission: </span><span style="color:#032F62;">&#39;active&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">                data: {</span></span>
<span class="line"><span style="color:#24292E;">                    create: {</span></span>
<span class="line"><span style="color:#24292E;">                        memo: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        version: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        asset_manager: </span><span style="color:#032F62;">&#39;ultra.nft.ft&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        asset_creator: </span><span style="color:#032F62;">&#39;asset_creator.acc&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        conversion_rate_oracle_contract: </span><span style="color:#032F62;">&#39;oracle.rate&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        chosen_rate: [</span><span style="color:#032F62;">&#39;60.0000 SECONDS&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                        minimum_resell_price: </span><span style="color:#032F62;">&#39;1.00000000 UOS&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        resale_shares: [</span></span>
<span class="line"><span style="color:#24292E;">                            { receiver: </span><span style="color:#032F62;">&#39;resale1&#39;</span><span style="color:#24292E;">, basis_point: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                            { receiver: </span><span style="color:#032F62;">&#39;resale2&#39;</span><span style="color:#24292E;">, basis_point: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                        ],</span></span>
<span class="line"><span style="color:#24292E;">                        mintable_window_start: </span><span style="color:#032F62;">&#39;2021-05-31T00:00:00&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        mintable_window_end: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        trading_window_start: </span><span style="color:#032F62;">&#39;2021-05-31T00:00:00&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        trading_window_end: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        recall_window_start: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        recall_window_end: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        max_mintable_tokens: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        lockup_time: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        conditionless_receivers: [</span><span style="color:#032F62;">&#39;receiver1&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                        stat: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        meta_uris: [</span><span style="color:#032F62;">&#39;test&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">                        meta_hash: </span><span style="color:#032F62;">&#39;d5768f8e2a7b1a8a9774dfb538e0a1928d0d9ac5f08bd781c21459b4308dc523&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        authorized_minters: [{ authorized_minter: </span><span style="color:#032F62;">&#39;ultra&#39;</span><span style="color:#24292E;">, quantity: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">                        account_minting_limit: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        blocksBehind: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        expireSeconds: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div>`,19),l=[o];function p(r,c,i,d,E,y){return n(),a("div",null,l)}const h=s(e,[["render",p]]);export{_ as __pageData,h as default};
