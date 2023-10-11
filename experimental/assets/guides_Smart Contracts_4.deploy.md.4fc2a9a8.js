import{_ as i,v as c,b as u,E as o,O as a,R as l,M as r,F as t,L as e}from"./chunks/framework.a49639fc.js";const A=JSON.parse('{"title":"4. Deploy Smart Contract","description":"","frontmatter":{"title":"4. Deploy Smart Contract","deploy":["staging","mainnet"],"outline":[0,5],"order":0},"headers":[],"relativePath":"guides/Smart Contracts/4.deploy.md","filePath":"guides/Smart Contracts/4.deploy.md","lastUpdated":1697036675000}'),h={name:"guides/Smart Contracts/4.deploy.md"},d=l('<h1 id="deploy-smart-contract" tabindex="-1">Deploy Smart Contract <a class="header-anchor" href="#deploy-smart-contract" aria-label="Permalink to &quot;Deploy Smart Contract&quot;">​</a></h1><p>Once you have an <code>abi</code> and <code>wasm</code> file for a contract you are ready for deployment.</p><h2 id="create-a-wallet" tabindex="-1">Create a Wallet <a class="header-anchor" href="#create-a-wallet" aria-label="Permalink to &quot;Create a Wallet&quot;">​</a></h2><p>You can create a wallet through <a href="https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp" target="_blank" rel="noreferrer">Ultra.io Smart Contract Toolkit</a>.</p><p>Using the Command Palette (F1), type <code>Ultra: Create Wallet</code>.</p><p>You can use <a href="https://eosauthority.com/generate_eos_private_key" target="_blank" rel="noreferrer">EOSAuthority</a> to create a Private Key.</p><p>Take note of both your <code>private key</code> and <code>public key</code>.</p><p><strong>You will need your public key after importing</strong>.</p><ul><li>Fill out the password fields <ul><li>This will be used to unlock your wallet</li></ul></li><li>Fill out the private key field</li></ul><p>Wallet will tell you the account creation was successful in the bottom-right upon completion.</p><h2 id="creating-a-test-network-account" tabindex="-1">Creating a Test Network Account <a class="header-anchor" href="#creating-a-test-network-account" aria-label="Permalink to &quot;Creating a Test Network Account&quot;">​</a></h2><p>You will need a test network account on a supported blockchain to deploy a contract and test it.</p>',12),p=t("b",null,"Local Environment",-1),m=t("span",null,[e("1. Generate new key using Smart Contract toolkit or "),t("a",{href:"../../tools/protocol/cleos.html#create-a-key-pair"},"cleos")],-1),y=t("span",null,[e("2. Start ultratest in detached mode using "),t("a",{href:"../../guides/Docker/docker-image-usage.html"},"development docker image")],-1),f=t("span",null,"3. Create new account",-1),w=t("span",null,"4. Deploy your contract using instructions below",-1),b=t("b",null,"Ultra Testnet",-1),g=t("span",null,[e("1. Use ultra "),t("a",{href:"https://faucet.testnet.app.ultra.io/"},"faucet"),e(" to create a non-eba account and receive tokens. Use the key from the step of creating a wallet")],-1),_=t("span",null,[e("2. Open VSCode and Command Palette (F1) and type "),t("em",null,"Ultra: Create Transaction")],-1),k=t("span",null,"3. Select Ultra Testnet",-1),v=t("span",null,"4. Enter Wallet Password",-1),C=t("span",null,[e("5. Lookup eosio and select action "),t("em",null,"buyrambytes")],-1),T=t("span",null,"6. Look at your .wasm file properties to determine the RAM you need. Buy extra for storing table data. You will want to lookup the total amount of bytes your .wasm file has. For small contracts 65356 bytes should be sufficient",-1),q=t("span",null,"7. Fill out the form, and buy some RAM. payer and receiver should be the same.",-1),P=t("span",null,"8. Ensure that the transaction is successful",-1),U=t("b",null,"Ultra Mainnet",-1),S=t("span",null,[e("1. Create an eba account with ultra "),t("a",{href:"https://ultra.io/"},"desktop client")],-1),x=t("span",null,[e("2. Download ultra wallet "),t("a",{href:"https://chrome.google.com/webstore/detail/ultra-wallet/kjjebdkfeagdoogagbhepmbimaphnfln"},"extension")],-1),D=t("span",null,[e("4. Use ultra "),t("a",{href:"https://toolkit.ultra.io/contract?actions=newnonebact,buyrambytes"},"toolkit"),e(" to create a non-eba account and buy ram. Log in with your eba account credentials created in the first step")],-1),E=l('<h2 id="deploy-contract" tabindex="-1">Deploy Contract <a class="header-anchor" href="#deploy-contract" aria-label="Permalink to &quot;Deploy Contract&quot;">​</a></h2><p>Using the Command Palette (F1), type <code>Ultra: Deploy Contract</code>.</p><p>Select the contract you want to deploy.</p><p><img src="https://i.imgur.com/58DlWY2.png" alt=""></p><p>Select the endpoint you want to deploy to.</p><p><img src="https://i.imgur.com/YCiLvTD.png" alt=""></p><p>Enter your wallet password.</p><p>Type in the <code>account</code> you have access to on the network you have picked.</p><p>If successful you will see the smart contract has been deployed in the output window.</p><h1 id="environments" tabindex="-1">Environments <a class="header-anchor" href="#environments" aria-label="Permalink to &quot;Environments&quot;">​</a></h1><p>Environments are specific locations where you can perform tests against your smart contracts, and applications.</p><p>There are three environments; local, testnet, and mainnet.</p><p><a href="./../../api/">See this API section</a> for information on block producer endpoints that are publicly available.</p><h2 id="local" tabindex="-1">Local <a class="header-anchor" href="#local" aria-label="Permalink to &quot;Local&quot;">​</a></h2><p>The local environment is where you are browsing this documentation from.</p><p>You would be running code against your local machine on a blockchain that is also running on your local machine.</p><p>In the case of <code>cleos</code> you would not provide any <code>-u</code> parameters to target your own local blockchain inside of a docker image.</p><h3 id="why-use-local" tabindex="-1">Why use local? <a class="header-anchor" href="#why-use-local" aria-label="Permalink to &quot;Why use local?&quot;">​</a></h3><ul><li>Just beginning smart contract development.</li><li>Need to test and write tests before full deployment.</li><li>Easy way to start and stop a blockchain and restart from zero each time.</li></ul><h2 id="test-network" tabindex="-1">Test Network <a class="header-anchor" href="#test-network" aria-label="Permalink to &quot;Test Network&quot;">​</a></h2><p>The test network environment is where you want to deploy your smart contract after going through general testing.</p><p>This should be the first place you will want to deploy your smart contract for other users to interact with.</p><h3 id="why-use-testnet" tabindex="-1">Why use Testnet? <a class="header-anchor" href="#why-use-testnet" aria-label="Permalink to &quot;Why use Testnet?&quot;">​</a></h3><ul><li>Ready to deploy smart contracts to other users.</li><li>Begin getting feedback in a public manner.</li><li>Begin writing frontend for your decentralized application.</li><li>Need a way for others to easily interact and test your smart contract.</li></ul><p>Go to the <a href="./../Ultra Specific/faucet.html">faucet documentation page</a> to start working with testnet.</p><h2 id="main-network" tabindex="-1">Main Network <a class="header-anchor" href="#main-network" aria-label="Permalink to &quot;Main Network&quot;">​</a></h2><p>The main network environment is when you want to partner with ultra to get your smart contract deployed to the world.</p><p>This is the stage where you have a smart contract, you have had that contract audited, you have an application, and you want to get it into ultra ecosystem for everyone to interact with.</p><h3 id="why-use-mainnet" tabindex="-1">Why use Mainnet? <a class="header-anchor" href="#why-use-mainnet" aria-label="Permalink to &quot;Why use Mainnet?&quot;">​</a></h3><ul><li>Ready to go live with your smart contract.</li><li>Smart contract has already been audited.</li><li>Optional frontend application is ready to be used.</li></ul>',30);function L(W,M,N,Y,F,O){const n=r("tt"),s=r("Tabs");return c(),u("div",null,[d,o(s,{titles:["Local-Environment","Ultra-Testnet","Ultra-Mainnet"]},{"Local-Environment":a(()=>[p,m,y,t("span",null,[o(n,null,{default:a(()=>[e("ultratest -Dsn")]),_:1})]),f,t("span",null,[o(n,null,{default:a(()=>[e("ultra.eosio test YOUR_PUBLIC_KEY --transfer --gift-ram-kbytes 1024000 -p ultra.eosio")]),_:1})]),w]),"Ultra-Testnet":a(()=>[b,g,_,k,v,C,T,q,P]),"Ultra-Mainnet":a(()=>[U,S,x,D]),_:1}),E])}const B=i(h,[["render",L]]);export{A as __pageData,B as default};
