import{_ as a,c as s,o as n,L as e}from"./chunks/framework.YmJWI2yl.js";const u=JSON.parse('{"title":"The clearavatar action","description":"","frontmatter":{"title":"The `clearavatar` action","outline":[0,4],"order":3},"headers":[],"relativePath":"tutorials/uniq-factories/uniq-avatar/clearavatar.md","filePath":"tutorials/uniq-factories/uniq-avatar/clearavatar.md","lastUpdated":null}'),l={name:"tutorials/uniq-factories/uniq-avatar/clearavatar.md"},t=e(`<h1 id="the-clearavatar-action" tabindex="-1">The clearavatar action <a class="header-anchor" href="#the-clearavatar-action" aria-label="Permalink to &quot;The clearavatar action&quot;">​</a></h1><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>This action is used to unlink user’s Uniq as the avatar of their account.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>The action requires authorization of the user who created a link. In case the user hasn’t linked anything an error message will be emitted that the user doesn&#39;t have an avatar is returned.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><table><thead><tr><th>Property Name</th><th>C++ Type</th><th>JS Type</th></tr></thead><tbody><tr><td>user</td><td>name</td><td>string</td></tr></tbody></table><h1 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cleos</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">action</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ultra.avatar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clearavatar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[&quot;alice&quot;]&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">alice</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cleos</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">action</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ultra.avatar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clearavatar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;[&quot;alice&quot;]&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">alice</span></span></code></pre></div><h1 id="javascript-eosjs" tabindex="-1">Javascript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;Javascript - eosjs&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transact</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        account: </span><span style="color:#9ECBFF;">&#39;ultra.avatar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;clearavatar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        authorization: [{ actor: </span><span style="color:#9ECBFF;">&#39;alice&#39;</span><span style="color:#E1E4E8;">, permission: </span><span style="color:#9ECBFF;">&#39;active&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            user: </span><span style="color:#9ECBFF;">&#39;alice&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transact</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        account: </span><span style="color:#032F62;">&#39;ultra.avatar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;clearavatar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        authorization: [{ actor: </span><span style="color:#032F62;">&#39;alice&#39;</span><span style="color:#24292E;">, permission: </span><span style="color:#032F62;">&#39;active&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">        data: {</span></span>
<span class="line"><span style="color:#24292E;">            user: </span><span style="color:#032F62;">&#39;alice&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span></code></pre></div>`,11),o=[t];function p(r,c,i,E,h,y){return n(),s("div",null,o)}const v=a(l,[["render",p]]);export{u as __pageData,v as default};
