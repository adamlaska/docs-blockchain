import{_ as e,v as o,b as t,R as r}from"./chunks/framework.99ac92c4.js";const k=JSON.parse('{"title":"Launch Procedure Concepts","description":"","frontmatter":{"title":"Launch Procedure Concepts","deploy":["staging","mainnet"],"outline":[0,4],"order":-99},"headers":[],"relativePath":"learn/Block Producers/Launch Procedures/core-concepts.md","filePath":"learn/Block Producers/Launch Procedures/core-concepts.md","lastUpdated":null}'),a={name:"learn/Block Producers/Launch Procedures/core-concepts.md"},s=r('<h1 id="launch-procedure-concepts" tabindex="-1">Launch Procedure Concepts <a class="header-anchor" href="#launch-procedure-concepts" aria-label="Permalink to &quot;Launch Procedure Concepts&quot;">​</a></h1><h2 id="what-is-a-genesis-node" tabindex="-1">What is a genesis node? <a class="header-anchor" href="#what-is-a-genesis-node" aria-label="Permalink to &quot;What is a genesis node?&quot;">​</a></h2><p>The genesis node, on an EOSIO network, is the first node that sets up the network and produces the first blocks. It is responsible for setting up the system contracts, registering the first batch of Block Producers on the network, and passing the block production on to them.</p><p>In short, the genesis node starts the network and then passes off responsibility to the Block Producers. The genesis will eventually shut itself down after the responsibility is passed off to the Block Producers to keep the network running.</p><h2 id="how-will-ultra-set-up-their-genesis-node" tabindex="-1">How will Ultra set up their genesis node? <a class="header-anchor" href="#how-will-ultra-set-up-their-genesis-node" aria-label="Permalink to &quot;How will Ultra set up their genesis node?&quot;">​</a></h2><p>Ultra will be responsible for setting up their genesis node with a handful of contracts. Ultra will also be responsible for ensuring the genesis node is synchronized to our block producers through their wire-guard configurations. We will also be provided a modified version of the <code>genesis.json</code> file for our block producers to utilize when they are booting up their individual nodes.</p><p>Here’s a list of smart contracts that will be deployed by Ultra’s genesis node and what their general functionality will provide. Additional contracts that Ultra will utilize will be launched by Ultra at future dates once the chain’s responsibility has been passed on.</p><h4 id="eosio-system" tabindex="-1">eosio.system <a class="header-anchor" href="#eosio-system" aria-label="Permalink to &quot;eosio.system&quot;">​</a></h4><p>This contract will provide the creation of user-owned accounts, distribution of chain resources such as RAM, CPU, and NET, and maintain the block producer schedule. Which you can find more about below.</p><h4 id="eosio-token" tabindex="-1">eosio.token <a class="header-anchor" href="#eosio-token" aria-label="Permalink to &quot;eosio.token&quot;">​</a></h4><p>This contract will provide the ability for users and ultra alike to create fungible tokens such as <strong>UOS</strong> which will be the chain’s main currency. Unlike other chains, Ultra makes it much easier to deploy a currency without having to redeploy the entire eosio.token contract.</p><h4 id="eosio-msig" tabindex="-1">eosio.msig <a class="header-anchor" href="#eosio-msig" aria-label="Permalink to &quot;eosio.msig&quot;">​</a></h4><p>This contract provides a way for multiple users to sign single or multiple transactions that need approval from multiple users. This multi-signature contract is great for handling permissions between a single account that needs approval from multiple accounts before an action may be executed.</p><h2 id="the-block-producer-schedule" tabindex="-1">The Block Producer Schedule <a class="header-anchor" href="#the-block-producer-schedule" aria-label="Permalink to &quot;The Block Producer Schedule&quot;">​</a></h2><h3 id="how-many-block-producers-will-there-be-on-the-ultra-blockchain" tabindex="-1">How many Block Producers will there be on the Ultra Blockchain? <a class="header-anchor" href="#how-many-block-producers-will-there-be-on-the-ultra-blockchain" aria-label="Permalink to &quot;How many Block Producers will there be on the Ultra Blockchain?&quot;">​</a></h3><p>There will initially be five Block Producers on the Ultra Blockchain.</p><h3 id="who-defines-the-block-producer-schedule" tabindex="-1">Who defines the Block Producer schedule? <a class="header-anchor" href="#who-defines-the-block-producer-schedule" aria-label="Permalink to &quot;Who defines the Block Producer schedule?&quot;">​</a></h3><p>During the initial Testnets and Mainnet, it will be Ultra who is defining the Block Producer schedule. There is not an ordered, elected ranking like on other EOSIO chains. There is no voting for Block Producers.</p><h3 id="what-will-be-the-procedure-for-changes-to-the-block-producer-schedule" tabindex="-1">What will be the procedure for changes to the block producer schedule? <a class="header-anchor" href="#what-will-be-the-procedure-for-changes-to-the-block-producer-schedule" aria-label="Permalink to &quot;What will be the procedure for changes to the block producer schedule?&quot;">​</a></h3><p>Changes to the block producer schedule will be announced on-chain and Block Producers will need to approve the change. This will happen when a Block Producer leaves the chain, or a new one is added.</p>',20),n=[s];function i(l,c,h,d,u,p){return o(),t("div",null,n)}const f=e(a,[["render",i]]);export{k as __pageData,f as default};