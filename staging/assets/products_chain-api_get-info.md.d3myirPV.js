import{_ as a,C as n,c as o,H as l,L as p,o as t}from"./chunks/framework.EMf-NuUT.js";const F=JSON.parse('{"title":"/get_info","description":"","frontmatter":{"title":"/get_info","order":-99},"headers":[],"relativePath":"products/chain-api/get-info.md","filePath":"products/chain-api/get-info.md","lastUpdated":null}'),e={name:"products/chain-api/get-info.md"},c=p(`<h1 id="get-get-info" tabindex="-1">GET - /get_info <a class="header-anchor" href="#get-get-info" aria-label="Permalink to &quot;GET - /get_info&quot;">​</a></h1><p>A good way to get information about the chain including a unique identifier for the chain, current head block number, etc.</p><h3 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">curl -X GET https://api.ultra.eossweden.org/v1/chain/get_info</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">curl -X GET https://api.ultra.eossweden.org/v1/chain/get_info</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><details class="details custom-block"><summary>Response</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;server_version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;dcec8f25&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;chain_id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;a9c481d....&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;head_block_num&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">61691776</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;last_irreversible_block_num&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">61691680</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;last_irreversible_block_id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;03ad57....&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;head_block_id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;03ad5....&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;head_block_time&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2022-06-10T23:26:11.500&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;head_block_producer&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eosnationftw&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;virtual_block_cpu_limit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">400000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;virtual_block_net_limit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1048576</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;block_cpu_limit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">399999</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;block_net_limit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1048568</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;server_version_string&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;v2.0.9-1.13.1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;fork_db_head_block_num&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">61691776</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;fork_db_head_block_id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;03ad57....&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#9ECBFF;">&quot;server_full_version_string&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;v2.0.9-1.13.1-dc....&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;server_version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;dcec8f25&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;chain_id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;a9c481d....&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;head_block_num&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">61691776</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;last_irreversible_block_num&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">61691680</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;last_irreversible_block_id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;03ad57....&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;head_block_id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;03ad5....&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;head_block_time&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2022-06-10T23:26:11.500&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;head_block_producer&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eosnationftw&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;virtual_block_cpu_limit&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">400000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;virtual_block_net_limit&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1048576</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;block_cpu_limit&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">399999</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;block_net_limit&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1048568</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;server_version_string&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;v2.0.9-1.13.1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;fork_db_head_block_num&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">61691776</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;fork_db_head_block_id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;03ad57....&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#032F62;">&quot;server_full_version_string&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;v2.0.9-1.13.1-dc....&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><h2 id="try-it" tabindex="-1">Try It <a class="header-anchor" href="#try-it" aria-label="Permalink to &quot;Try It&quot;">​</a></h2>`,7);function r(E,i,y,u,q,_){const s=n("DemoApi");return t(),o("div",null,[c,l(s,{type:"GET",query:"/v1/chain/get_info",body:[]})])}const h=a(e,[["render",r]]);export{F as __pageData,h as default};
