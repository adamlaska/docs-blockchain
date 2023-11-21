import{_ as s,c as a,o as e,L as o}from"./chunks/framework.EMf-NuUT.js";const E=JSON.parse('{"title":"Running the Bot","description":"","frontmatter":{"title":"Running the Bot","outline":[0,4],"order":5},"headers":[],"relativePath":"products/uniq-discord-bot/running-the-bot.md","filePath":"products/uniq-discord-bot/running-the-bot.md","lastUpdated":null}'),n={name:"products/uniq-discord-bot/running-the-bot.md"},t=o('<h1 id="running-the-bot" tabindex="-1">Running the Bot <a class="header-anchor" href="#running-the-bot" aria-label="Permalink to &quot;Running the Bot&quot;">​</a></h1><p>Depending on your environment and usecase you will want to use one of the following commands to start the bot.</p><h2 id="production" tabindex="-1">Production <a class="header-anchor" href="#production" aria-label="Permalink to &quot;Production&quot;">​</a></h2><p>Builds both Client &amp; Server, then Starts the Bot.</p><p>HTML files are automatically built to <code>packages/server/dist/html</code>.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-ws</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-ws</span></span></code></pre></div><h2 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-label="Permalink to &quot;Development&quot;">​</a></h2><p>Use this if you are making changes.</p><p>Ultra Wallet requires an HTTP(s) server to work with it.</p><p>This starts a Vite Server with local https, and the server without feeding the built pages through the endpoint.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-w</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">packages/server</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-w</span><span style="color:#24292E;"> </span><span style="color:#032F62;">packages/server</span></span></code></pre></div><h3 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h3><p>These are general purpose docker instructions based off this repository.</p><p>Start by adding your <code>.env</code> file to <code>packages/server/.env</code></p><p>Run the following to start the bot.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uniqbot</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uniqbot</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">up</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">up</span></span></code></pre></div>',17),p=[t];function l(r,c,i,d,h,u){return e(),a("div",null,p)}const g=s(n,[["render",l]]);export{E as __pageData,g as default};