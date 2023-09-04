import{_ as s,v as a,b as n,R as o}from"./chunks/framework.ead9a57c.js";const C=JSON.parse('{"title":"settrdwin.a","description":"","frontmatter":{"title":"settrdwin.a","order":27,"deploy":["experimental","staging","mainnet"]},"headers":[],"relativePath":"contracts/NFT Contract/NFT Actions/settrdwin.a.md","filePath":"contracts/NFT Contract/NFT Actions/settrdwin.a.md","lastUpdated":null}'),t={name:"contracts/NFT Contract/NFT Actions/settrdwin.a.md"},e=o(`<h1 id="settrdwin-a-set-trading-window" tabindex="-1">settrdwin.a - set trading window <a class="header-anchor" href="#settrdwin-a-set-trading-window" aria-label="Permalink to &quot;settrdwin.a - set trading window&quot;">​</a></h1><p>Allows a token manager to update the <code>trading_window_start</code> and <code>trading_window_end</code> for an existing token factory.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>Required authorization is a token factory manager</p><p>Tradeability can only be update from this:</p><ul><li>Uniq is never Tradable (<code>trading_window_start</code> = <code>null</code>, <code>trading_window_end</code> = <code>1970-01-01T00:00:00</code>)</li></ul><p>to one of these:</p><ul><li>Uniq is always Tradable (<code>trading_window_start</code>=null, <code>trading_window_end</code>=null)</li><li>There is a start date (<code>trading_window_start</code>=X, <code>trading_window_end</code>=null)</li><li>There is an end date (<code>trading_window_start</code>=null, <code>trading_window_end</code>=Y)</li><li>There is a full trading window (<code>trading_window_start</code>=X, <code>trading_window_end</code>=Y)</li></ul><p><strong>Parameter validation</strong></p><ul><li><code>token_factory_id</code> is required and a token factory for the provided ID must exist.</li><li>If provided, <code>trading_window_end</code> should be greater than <code>trading_window_start</code>.</li></ul><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>Javascript Type</th><th>Example</th></tr></thead><tbody><tr><td>token_factory_id</td><td>uint64_t</td><td>number</td><td>123</td></tr><tr><td>trading_window_start</td><td>optional&lt;time_point_sec&gt;</td><td>string</td><td>&quot;2023-01-01T00:00:00&quot;</td></tr><tr><td>trading_window_end</td><td>optional&lt;time_point_sec&gt;</td><td>string</td><td>&quot;2023-01-01T12:00:00&quot;</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">settrdwin.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[ 123, &quot;2023-01-01T00:00:00&quot;, &quot;2023-01-01T12:00:00&quot; ]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">manager.acc</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transact</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">account</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">settrdwin.a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">authorization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">manager.acc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">token_factory_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">trading_window_start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-01-01T00:00:00</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">trading_window_end</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2023-01-01T12:00:00</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,16),l=[e];function p(r,c,i,d,D,y){return a(),n("div",null,l)}const A=s(t,[["render",p]]);export{C as __pageData,A as default};
