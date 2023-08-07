import{_ as s,v as e,b as a,R as t}from"./chunks/framework.a49639fc.js";const C=JSON.parse('{"title":"Setup Instructions","description":"","frontmatter":{"title":"Setup Instructions","deploy":["staging","mainnet"],"outline":[0,4],"order":2},"headers":[],"relativePath":"guides/Ultra Uniq Discord Bot/setup.md","filePath":"guides/Ultra Uniq Discord Bot/setup.md","lastUpdated":1691421022000}'),n={name:"guides/Ultra Uniq Discord Bot/setup.md"},o=t(`<h1 id="setup-instructions" tabindex="-1">Setup Instructions <a class="header-anchor" href="#setup-instructions" aria-label="Permalink to &quot;Setup Instructions&quot;">​</a></h1><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">NodeJS 16+</a></li><li><a href="./setup.html">Discord Bot Setup</a></li></ul><h2 id="clone-the-repository" tabindex="-1">Clone the repository <a class="header-anchor" href="#clone-the-repository" aria-label="Permalink to &quot;Clone the repository&quot;">​</a></h2><p>You&#39;ll start by cloning the repository.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/ultraio/ultra-discord-uniq-roles-bot</span></span></code></pre></div><p>Navigate into the newly created folder</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ultra-discord-uniq-roles-bot</span></span></code></pre></div><p>Install npm packages</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span></code></pre></div><p>Create an <code>.env</code> file in the <code>packages/server</code> folder.</p><p>Fill it out with the environment variable information.</p><p>See the <a href="./environment-variables.html">Environment Variables</a> section for more info.</p><p>See the <a href="./setup.html">Discord Bot Setup</a> to deploy your bot.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">DISCORD_BOT_TOKEN</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">APPLICATION_ID</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">GUILD_ID</span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">WEBSERVER_PORT</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3000</span></span>
<span class="line"><span style="color:#A6ACCD;">CNAME</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">MONGODB_URL</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">mongodb://USERNAME:PASSWORD@HOST</span></span></code></pre></div>`,15),l=[o];function p(r,i,c,d,h,u){return e(),a("div",null,l)}const D=s(n,[["render",p]]);export{C as __pageData,D as default};