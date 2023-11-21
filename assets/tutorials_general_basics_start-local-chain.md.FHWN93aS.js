import{_ as a,c as t,o as e,L as s}from"./chunks/framework.vEmsHuDM.js";const g=JSON.parse('{"title":"Starting a Local Chain","description":"","frontmatter":{"title":"Starting a Local Chain","order":-99998,"oultine":[0,4]},"headers":[],"relativePath":"tutorials/general/basics/start-local-chain.md","filePath":"tutorials/general/basics/start-local-chain.md","lastUpdated":null}'),n={name:"tutorials/general/basics/start-local-chain.md"},o=s('<h1 id="start-a-local-chain" tabindex="-1">Start a Local Chain <a class="header-anchor" href="#start-a-local-chain" aria-label="Permalink to &quot;Start a Local Chain&quot;">​</a></h1><p>Now that you have the <a href="./">Docker image up and running</a>, we can move on to spinning up a local chain which you can use for development.</p><p>Inside your Docker image instance, you can start a local chain by running the following command that runs our test suite, Ultratest.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ultratest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-n</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ultratest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-n</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span></span></code></pre></div><p>Ultratest automatically sets up a wallet, keys, and all smart contracts. These are necessary to grant you access to the functionality necessary to develop on our stack.</p><p>A quick note on the flags above.</p><p><code>-D</code> stops the <code>ultratest</code> framework from closing after tests have ran.</p><p><code>-s</code> enables all system contracts</p><p><code>-n</code> tells the program to not run any tests.</p><h2 id="verifying-chain-api-is-started" tabindex="-1">Verifying Chain API is Started <a class="header-anchor" href="#verifying-chain-api-is-started" aria-label="Permalink to &quot;Verifying Chain API is Started&quot;">​</a></h2><p>Check <code>http://localhost:8888/v1/chain/get_info</code> to ensure that it is running.</p><p>When accessing the API externally use the URL <code>http://localhost:8888</code>.</p>',12),l=[o];function c(r,i,p,h,d,u){return e(),t("div",null,l)}const _=a(n,[["render",c]]);export{g as __pageData,_ as default};
