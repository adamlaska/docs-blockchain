import{_ as s,c as a,o as n,L as e}from"./chunks/framework.EMf-NuUT.js";const u=JSON.parse('{"title":"Establishing a Connection","description":"","frontmatter":{"title":"Establishing a Connection","order":6,"outline":[0,4]},"headers":[],"relativePath":"products/ultra-wallet/establishing-connection.md","filePath":"products/ultra-wallet/establishing-connection.md","lastUpdated":null}'),o={name:"products/ultra-wallet/establishing-connection.md"},l=e(`<h1 id="establishing-a-connection" tabindex="-1">Establishing a Connection <a class="header-anchor" href="#establishing-a-connection" aria-label="Permalink to &quot;Establishing a Connection&quot;">​</a></h1><p>To begin interacting with the Ultra Wallet, a web application must first establish a connection. This connection request will ask the user for permission to share its blockchain id and public key, indicating that they are willing to continue interacting. Once the permission is set for the first time, the web application domain will be whitelisted for future connection requests. Similarly, it is possible to terminate the connection both on the application and on the user side.</p><h2 id="connecting" tabindex="-1">Connecting <a class="header-anchor" href="#connecting" aria-label="Permalink to &quot;Connecting&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> ultra.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    response.data.blockchainId;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ej1vx2ft3ht4</span></span>
<span class="line"><span style="color:#E1E4E8;">    response.data.publicKey;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// EOS7uRb72dR8jrLjNuC9UoevBBH3YbVZfNKUtYCfLkV7aPGcmDjs7</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// { status: &quot;error&quot;, message: &quot;Connection rejected&quot; }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> ultra.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    response.data.blockchainId;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ej1vx2ft3ht4</span></span>
<span class="line"><span style="color:#24292E;">    response.data.publicKey;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// EOS7uRb72dR8jrLjNuC9UoevBBH3YbVZfNKUtYCfLkV7aPGcmDjs7</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// { status: &quot;error&quot;, message: &quot;Connection rejected&quot; }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>The <code>connect()</code> call will return a Promise that is resolved when the user accepts the connection request and is rejected when the user rejects the request or closes the popup.</p><h3 id="eagerly-connecting" tabindex="-1">Eagerly Connecting <a class="header-anchor" href="#eagerly-connecting" aria-label="Permalink to &quot;Eagerly Connecting&quot;">​</a></h3><p>After a web application connects to the Ultra Wallet for the first time, it gains a trusted status. Once this trust is established, the application can seamlessly link with Ultra Wallet during future visits or when the page is refreshed, eliminating the need to ask the user for authorization. This concept is commonly known as &quot;eagerly connecting&quot;.</p><p>To implement this, web applications should pass an <code>onlyIfTrusted</code> option into the <code>connect()</code> call.</p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> ultra.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">({onlyIfTrusted: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// { status: &#39;error&#39;, code: 4001, message: &#39;The user rejected the request.&#39; }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> ultra.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">({onlyIfTrusted: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// { status: &#39;error&#39;, code: 4001, message: &#39;The user rejected the request.&#39; }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="sending-a-referral-code" tabindex="-1">Sending a referral code <a class="header-anchor" href="#sending-a-referral-code" aria-label="Permalink to &quot;Sending a referral code&quot;">​</a></h3><p>An application can send its referral code to the wallet. The referral code will be used if the user signs up during the connection process.</p><p>To implement this, applications should pass the referralCode option into the connect() call.</p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ultra.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">({referralCode: </span><span style="color:#9ECBFF;">&#39;ecd1f052-9d0d-4b84-8dd3-10a753d044b5&#39;</span><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ultra.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">({referralCode: </span><span style="color:#032F62;">&#39;ecd1f052-9d0d-4b84-8dd3-10a753d044b5&#39;</span><span style="color:#24292E;">});</span></span></code></pre></div><p>To get your referral code, go to the Ultra Desktop client and then to the Wallet, and look for the &quot;My referral link&quot; section, click on the link to copy it.</p><p>Once you copy your referral link you can get the referral code from the URL. For example, the next link <a href="https://ultra.io/register/ecd1f052-9d0d-4b84-8dd3-10a753d044b5" target="_blank" rel="noreferrer">https://ultra.io/register/ecd1f052-9d0d-4b84-8dd3-10a753d044b5</a> has the referral code <code>ecd1f052-9d0d-4b84-8dd3-10a753d044b5</code>.</p><h2 id="disconnecting" tabindex="-1">Disconnecting <a class="header-anchor" href="#disconnecting" aria-label="Permalink to &quot;Disconnecting&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> ultra.</span><span style="color:#B392F0;">disconnect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// { status: &quot;error&quot;, message: &quot;Forbidden&quot; }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> ultra.</span><span style="color:#6F42C1;">disconnect</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// { status: &quot;error&quot;, message: &quot;Forbidden&quot; }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>The <code>disconnect()</code> method revokes the connection permission that the user granted to the web application, if the application is already disconnected, the Promise will throw an error.</p><p>To handle disconnections, the app can also subscribe to disconnect events.</p><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ultra.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;disconnect&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Disconnected from Ultra Wallet&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ultra.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;disconnect&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Disconnected from Ultra Wallet&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,20),t=[l];function p(c,r,i,d,E,y){return n(),a("div",null,t)}const g=s(o,[["render",p]]);export{u as __pageData,g as default};
