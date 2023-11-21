import{_ as e,c as t,o as r,L as o}from"./chunks/framework.YmJWI2yl.js";const f=JSON.parse('{"title":"Minimum Infrastructure","description":"","frontmatter":{"title":"Minimum Infrastructure","outline":[0,4],"order":-98},"headers":[],"relativePath":"blockchain/block-producers/infrastructure/minimum-recommended-infrastructure.md","filePath":"blockchain/block-producers/infrastructure/minimum-recommended-infrastructure.md","lastUpdated":null}'),n={name:"blockchain/block-producers/infrastructure/minimum-recommended-infrastructure.md"},a=o('<h1 id="miniumum-infrastructure" tabindex="-1">Miniumum Infrastructure <a class="header-anchor" href="#miniumum-infrastructure" aria-label="Permalink to &quot;Miniumum Infrastructure&quot;">​</a></h1><p>It is the Block Producer’s prerogative whether to run their servers on their own hardware or through a bare-metal service like Amazon AWS or Google Cloud.</p><p><strong>Minimum required nodes</strong></p><ul><li>1 producer node</li><li>2 seed / API nodes</li><li>1 producer node as a backup</li></ul><p><strong>A note on RAM</strong></p><p>If you spawn too many API nodes you can potentially crash the environment by simply running out of <strong>RAM</strong>. Please account for RAM usage when you spawn additional API nodes under the same environment.</p><h3 id="intel-platform-machines" tabindex="-1">Intel Platform Machines <a class="header-anchor" href="#intel-platform-machines" aria-label="Permalink to &quot;Intel Platform Machines&quot;">​</a></h3><table><thead><tr><th>Node Type</th><th>Number of Nodes</th><th>Server Info</th></tr></thead><tbody><tr><td>API / Seed Node</td><td>2</td><td>Intel Xeon-E 2288G / 16t 3.7GHz - 5Ghz, 64GB DDR4 ECC 2666MHz RAM, 2 x 960GB SSD NVMe Soft RAID, Public Network 500Mbps unmetered (burst 1Gbs), Private Network 500Mbps</td></tr><tr><td>Producing Node</td><td>1</td><td>Intel Xeon-E 2274G / 8t 4GHz - 4.7Ghz, 64GB DDR4 ECC 2666MHz RAM, 2 x 960GB SSD NVMe Soft RAID, Public Network 500Mbps unmetered (burst 1Gbs), Private Network 500Mbps</td></tr><tr><td>Backup Producing Node</td><td>1</td><td>Intel Xeon-E 2274G / 8t 4GHz - 4.7Ghz, 64GB DDR4 ECC 2666MHz RAM, 2 x 960GB SSD NVMe Soft RAID, Public Network 500Mbps unmetered (burst 1Gbs), Private Network 500Mbps</td></tr></tbody></table><h2 id="networking-details" tabindex="-1">Networking details <a class="header-anchor" href="#networking-details" aria-label="Permalink to &quot;Networking details&quot;">​</a></h2><p>Certain ports need to be opened on your instance’s firewall.</p><ul><li><p>SSH 22</p></li><li><p>HTTP 80</p></li><li><p>HTTPS 443</p></li><li><p>NODEOS 9876</p></li><li><p>WIREGUARD 45888</p></li></ul><p>Only your API / Seed Node should have an exposed endpoint to the outside world. This is to ensure your producing nodes will continue producing regardless of network load.</p><p><strong>A note on IP addresses</strong></p><p>Ultra recommends requires all Block Producers use static external IPs for all instances.</p>',14),i=[a];function s(d,u,l,c,m,p){return r(),t("div",null,i)}const b=e(n,[["render",s]]);export{f as __pageData,b as default};
