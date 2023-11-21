import{_ as s,c as n,o as a,L as l}from"./chunks/framework.EMf-NuUT.js";const B=JSON.parse('{"title":"CDT Overview","description":"","frontmatter":{"title":"CDT Overview","order":-99999,"oultine":[0,4],"prev":false},"headers":[],"relativePath":"blockchain/general/tools/cdt/index.md","filePath":"blockchain/general/tools/cdt/index.md","lastUpdated":null}'),o={name:"blockchain/general/tools/cdt/index.md"},p=l(`<h1 id="contract-development-kit-cdt" tabindex="-1">Contract Development Kit (CDT) <a class="header-anchor" href="#contract-development-kit-cdt" aria-label="Permalink to &quot;Contract Development Kit (CDT)&quot;">​</a></h1><p>All information about Contract Development Kit on how to develop a smart contract.</p><p>EOSIO.CDT (Contract Development Toolkit) is a toolchain for WebAssembly (WASM) and a set of tools to facilitate smart contract development for the EOSIO platform. In addition to being a general purpose WebAssembly toolchain, EOSIO specific optimizations are available to support building EOSIO smart contracts.</p><p>This toolchain is built around Clang 9, which means that EOSIO.CDT has the most currently available optimizations and analyses from LLVM, but as the WASM target is still considered experimental, some optimizations are incomplete or not available.</p><h2 id="cdt-cpp" tabindex="-1">cdt-cpp <a class="header-anchor" href="#cdt-cpp" aria-label="Permalink to &quot;cdt-cpp&quot;">​</a></h2><p>cdt-cpp is a tool for compiling smart contracts.</p><p>It will compile c++ source code to corresponding compiled binary wasm and generated ABI file.</p><h3 id="common-command-reference" tabindex="-1">Common Command Reference <a class="header-anchor" href="#common-command-reference" aria-label="Permalink to &quot;Common Command Reference&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">USAGE:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cdt-cpp</span><span style="color:#E1E4E8;"> [options] </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">input file</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">OPTIONS:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Generic</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Options:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-help</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Display</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">available</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">options</span><span style="color:#E1E4E8;"> (-help-hidden </span><span style="color:#9ECBFF;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">more</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-help-list</span><span style="color:#E1E4E8;">               </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Display</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">of</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">available</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">options</span><span style="color:#E1E4E8;"> (-help-list-hidden </span><span style="color:#9ECBFF;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">more</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-version</span><span style="color:#E1E4E8;">                 </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Display</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">of</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">this</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">program</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">compiler</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">options:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  -I</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">strin</span><span style="color:#E1E4E8;">g</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">directory</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">search</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">path</span></span>
<span class="line"><span style="color:#E1E4E8;">  -L</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">strin</span><span style="color:#E1E4E8;">g</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">directory</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">library</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">search</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">path</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-abigen</span><span style="color:#E1E4E8;">                  </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Generate</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ABI</span></span>
<span class="line"><span style="color:#E1E4E8;">  -abigen_output</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">strin</span><span style="color:#E1E4E8;">g</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ABIGEN</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">output</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-c</span><span style="color:#E1E4E8;">                       </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Only</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">preprocess,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compile,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">assemble</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">steps</span></span>
<span class="line"><span style="color:#E1E4E8;">  -contract</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">strin</span><span style="color:#E1E4E8;">g</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">       </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Contract</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">name</span></span>
<span class="line"><span style="color:#E1E4E8;">  -include</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">strin</span><span style="color:#E1E4E8;">g</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">before</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">parsing</span></span>
<span class="line"><span style="color:#E1E4E8;">  -l</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">strin</span><span style="color:#E1E4E8;">g</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">of</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">library</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">link</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-no-abigen</span><span style="color:#E1E4E8;">               </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Disable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ABI</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">generation</span></span>
<span class="line"><span style="color:#E1E4E8;">  -o</span><span style="color:#F97583;">=&lt;</span><span style="color:#9ECBFF;">strin</span><span style="color:#E1E4E8;">g</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Write</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">output</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">fil</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-v</span><span style="color:#E1E4E8;">                       </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commands</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">verbose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">output</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">-w</span><span style="color:#E1E4E8;">                       </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Suppress</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">warnings</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">USAGE:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cdt-cpp</span><span style="color:#24292E;"> [options] </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">input file</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">OPTIONS:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Generic</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Options:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-help</span><span style="color:#24292E;">                    </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Display</span><span style="color:#24292E;"> </span><span style="color:#032F62;">available</span><span style="color:#24292E;"> </span><span style="color:#032F62;">options</span><span style="color:#24292E;"> (-help-hidden </span><span style="color:#032F62;">for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">more</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-help-list</span><span style="color:#24292E;">               </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Display</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#032F62;">of</span><span style="color:#24292E;"> </span><span style="color:#032F62;">available</span><span style="color:#24292E;"> </span><span style="color:#032F62;">options</span><span style="color:#24292E;"> (-help-list-hidden </span><span style="color:#032F62;">for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">more</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-version</span><span style="color:#24292E;">                 </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Display</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span><span style="color:#24292E;"> </span><span style="color:#032F62;">of</span><span style="color:#24292E;"> </span><span style="color:#032F62;">this</span><span style="color:#24292E;"> </span><span style="color:#032F62;">program</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">compiler</span><span style="color:#24292E;"> </span><span style="color:#032F62;">options:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  -I</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">strin</span><span style="color:#24292E;">g</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">              </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">directory</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">search</span><span style="color:#24292E;"> </span><span style="color:#032F62;">path</span></span>
<span class="line"><span style="color:#24292E;">  -L</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">strin</span><span style="color:#24292E;">g</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">              </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">directory</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">library</span><span style="color:#24292E;"> </span><span style="color:#032F62;">search</span><span style="color:#24292E;"> </span><span style="color:#032F62;">path</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-abigen</span><span style="color:#24292E;">                  </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Generate</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ABI</span></span>
<span class="line"><span style="color:#24292E;">  -abigen_output</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">strin</span><span style="color:#24292E;">g</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ABIGEN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">output</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-c</span><span style="color:#24292E;">                       </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Only</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">preprocess,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compile,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">assemble</span><span style="color:#24292E;"> </span><span style="color:#032F62;">steps</span></span>
<span class="line"><span style="color:#24292E;">  -contract</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">strin</span><span style="color:#24292E;">g</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">       </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Contract</span><span style="color:#24292E;"> </span><span style="color:#032F62;">name</span></span>
<span class="line"><span style="color:#24292E;">  -include</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">strin</span><span style="color:#24292E;">g</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">        </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">before</span><span style="color:#24292E;"> </span><span style="color:#032F62;">parsing</span></span>
<span class="line"><span style="color:#24292E;">  -l</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">strin</span><span style="color:#24292E;">g</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">              </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">of</span><span style="color:#24292E;"> </span><span style="color:#032F62;">library</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">link</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-no-abigen</span><span style="color:#24292E;">               </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Disable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ABI</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">generation</span></span>
<span class="line"><span style="color:#24292E;">  -o</span><span style="color:#D73A49;">=&lt;</span><span style="color:#032F62;">strin</span><span style="color:#24292E;">g</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">              </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Write</span><span style="color:#24292E;"> </span><span style="color:#032F62;">output</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">fil</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-v</span><span style="color:#24292E;">                       </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commands</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">verbose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">output</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">-w</span><span style="color:#24292E;">                       </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Suppress</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;"> </span><span style="color:#032F62;">warnings</span></span></code></pre></div><h2 id="useful-links" tabindex="-1">Useful Links <a class="header-anchor" href="#useful-links" aria-label="Permalink to &quot;Useful Links&quot;">​</a></h2><ul><li><a href="./../../../../tutorials/docker/">Docker Image Usage</a></li><li><a href="./create-a-contract.html">Create A Contract</a></li><li><a href="./compile-a-contract.html">Compile A Contract</a></li></ul>`,11),e=[p];function t(c,r,E,y,F,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{B as __pageData,d as default};
