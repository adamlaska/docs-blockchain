import{_ as e,c as t,o,L as a}from"./chunks/framework.EMf-NuUT.js";const y=JSON.parse('{"title":"Development Environment","description":"","frontmatter":{"title":"Development Environment","order":2,"outline":[0,4]},"headers":[],"relativePath":"tutorials/uniq-factories/building-uniq-factories/yourdevelopmentenv.md","filePath":"tutorials/uniq-factories/building-uniq-factories/yourdevelopmentenv.md","lastUpdated":null}'),n={name:"tutorials/uniq-factories/building-uniq-factories/yourdevelopmentenv.md"},r=a('<h1 id="development-environment" tabindex="-1">Development Environment <a class="header-anchor" href="#development-environment" aria-label="Permalink to &quot;Development Environment&quot;">​</a></h1><p>Ultra provides a development enviroment that runs inside of a docker image.</p><p>This means that you do not have to compile any software to get your system into a state which you can run the required commands to achieve your goal. Instead, you&#39;ll be using our image to run the special software that Ultra uses to process transactions on our networks.</p><h2 id="_1-docker" tabindex="-1">1. Docker <a class="header-anchor" href="#_1-docker" aria-label="Permalink to &quot;1. Docker&quot;">​</a></h2><p>You&#39;ll be using docker to run the necessary commands. We already have a great guide for how to set this up <a href="./../../../tutorials/docker/getting-started.html">that you can refer to</a>.</p><p>Once you have Docker installed, the Ultra image downloaded, and you&#39;ve run the script to enter it, you can continue.</p><h2 id="_2-setting-up-your-wallet" tabindex="-1">2. Setting up your Wallet <a class="header-anchor" href="#_2-setting-up-your-wallet" aria-label="Permalink to &quot;2. Setting up your Wallet&quot;">​</a></h2><p>Next you will need to set up your local wallet, which will house your private key and allow you to sign transactions on any network. You will have to generate keys locally. These will be used in the next step where you associate those keys with the Testnet account that you will be creating. <a href="./../../../tutorials/general/basics/creating-a-wallet.html">A quick guide on how to do this is located here</a>.</p><h2 id="_3-testnet-account" tabindex="-1">3. Testnet Account <a class="header-anchor" href="#_3-testnet-account" aria-label="Permalink to &quot;3. Testnet Account&quot;">​</a></h2><p>Lastly, you will need a <a href="https://faucet.testnet.app.ultra.io/" target="_blank" rel="noreferrer">Testnet account</a> which will be the authorizing account that creates the Token Factory and mints the transactions. While you are creating your account, make sure to get tokens for use on Testnet. You&#39;ll need these to create Uniq Factories and Mint tokens.</p><p>To set up your account, you can follow <a href="./../../../tutorials/general/basics/create-a-testnet-account.html">this easy to understand guide</a>. You will need docker set up to create your keys, so make sure that you&#39;ve completed the previous step.</p>',11),i=[r];function s(l,u,c,h,d,p){return o(),t("div",null,i)}const v=e(n,[["render",s]]);export{y as __pageData,v as default};
