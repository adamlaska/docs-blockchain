import{_ as s,c as n,o as a,L as l}from"./chunks/framework.YmJWI2yl.js";const F=JSON.parse('{"title":"registerkyc","description":"","frontmatter":{"title":"registerkyc"},"headers":[],"relativePath":"blockchain/contracts/kyc-contract/kyc-actions/registerkyc.md","filePath":"blockchain/contracts/kyc-contract/kyc-actions/registerkyc.md","lastUpdated":null}'),p={name:"blockchain/contracts/kyc-contract/kyc-actions/registerkyc.md"},o=l(`<h1 id="registerkyc" tabindex="-1">registerkyc <a class="header-anchor" href="#registerkyc" aria-label="Permalink to &quot;registerkyc&quot;">​</a></h1><p>Register KYC info from user with requirement signature and provider signature.</p><ul><li>Parameters</li></ul><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>owner</code></td><td>eosio::name</td><td>KYC User</td></tr><tr><td><code>provider</code></td><td>eosio::name</td><td>KYC Provider who user wants to register with</td></tr><tr><td><code>cert_id</code></td><td>eosio::checksum256</td><td>User KYC data</td></tr><tr><td><code>req_signature</code></td><td>eosio::signature</td><td>User signature</td></tr><tr><td><code>pro_signature</code></td><td>eosio::signature</td><td>Provider signature</td></tr></tbody></table><p>Required Permissions: <code>ultra.kyc</code></p><ul><li><code>cleos</code> Example</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">eosio.kyc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">registerkyc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[&quot;&lt;OWNER&gt;&quot;, &quot;&lt;PROVIDER&gt;&quot;, &quot;&lt;CERTIFICATE_ID&gt;&quot;, &quot;&lt;REQUIRED_SIGNATURE&gt;&quot;, &quot;&lt;PROVIDER_SIGNATURE&gt;&quot;]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ultra.kyc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">eosio.kyc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">registerkyc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;[&quot;&lt;OWNER&gt;&quot;, &quot;&lt;PROVIDER&gt;&quot;, &quot;&lt;CERTIFICATE_ID&gt;&quot;, &quot;&lt;REQUIRED_SIGNATURE&gt;&quot;, &quot;&lt;PROVIDER_SIGNATURE&gt;&quot;]&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ultra.kyc</span></span></code></pre></div><ul><li><code>eos-js</code> Example</li></ul><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> api.</span><span style="color:#B392F0;">transact</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            actions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    account: </span><span style="color:#9ECBFF;">&#39;eosio.kyc&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    name: </span><span style="color:#9ECBFF;">&#39;registerkyc&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    authorization: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            actor: </span><span style="color:#9ECBFF;">&#39;ultra.kyc&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            permission: </span><span style="color:#9ECBFF;">&#39;active&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        owner: </span><span style="color:#9ECBFF;">&#39;&lt;OWNER&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        provider: </span><span style="color:#9ECBFF;">&#39;&lt;PROVIDER&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        cert_id: </span><span style="color:#9ECBFF;">&#39;&lt;CERTIFICATE_ID&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        req_signature: </span><span style="color:#9ECBFF;">&#39;&lt;REQUIRED_SIGNATURE&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        pro_signature: </span><span style="color:#9ECBFF;">&#39;&lt;PROVIDER_SIGNATURE&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            blocksBehind: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            expireSeconds: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">})();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> api.</span><span style="color:#6F42C1;">transact</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            actions: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    account: </span><span style="color:#032F62;">&#39;eosio.kyc&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    name: </span><span style="color:#032F62;">&#39;registerkyc&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    authorization: [</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            actor: </span><span style="color:#032F62;">&#39;ultra.kyc&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            permission: </span><span style="color:#032F62;">&#39;active&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                    ],</span></span>
<span class="line"><span style="color:#24292E;">                    data: {</span></span>
<span class="line"><span style="color:#24292E;">                        owner: </span><span style="color:#032F62;">&#39;&lt;OWNER&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        provider: </span><span style="color:#032F62;">&#39;&lt;PROVIDER&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        cert_id: </span><span style="color:#032F62;">&#39;&lt;CERTIFICATE_ID&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        req_signature: </span><span style="color:#032F62;">&#39;&lt;REQUIRED_SIGNATURE&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        pro_signature: </span><span style="color:#032F62;">&#39;&lt;PROVIDER_SIGNATURE&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            blocksBehind: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            expireSeconds: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">})();</span></span></code></pre></div>`,9),t=[o];function e(c,r,E,y,i,d){return a(),n("div",null,t)}const g=s(p,[["render",e]]);export{F as __pageData,g as default};
