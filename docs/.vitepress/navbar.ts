import { DefaultTheme } from 'vitepress';

const navbar: DefaultTheme.NavItem[] = [
    {
        text: 'Tutorials',
        items: [
            //
            { text: 'All Tutorials', link: '/tutorials/index/index' },
            {
                text: 'Featured',
                items: [
                    { text: 'Fundamentals', link: '/tutorials/fundamentals/how-to-generate-a-keypair' },
                    { text: 'Docker', link: '/tutorials/docker/index' },
                    { text: 'Smart Contracts', link: '/tutorials/smart-contracts/index' },
                    { text: 'Uniq Factories', link: '/tutorials/uniq-factories/index' },
                    { text: 'Token Swap', link: '/tutorials/token-swap/index' },
                ],
            },
        ],
    },
    {
        text: 'Game Developers',
        items: [
            //
            { text: 'Overview', link: '/game-developers/index' },
            { text: 'Game Developer Center', link: '/game-developers/game-dev-center/index' },
            {
                text: 'Game Engines',
                items: [
                    { text: 'Unity', link: '/game-developers/unity/index' },
                    { text: 'Unreal', link: '/game-developers/unreal/index' },
                    { text: 'Web', link: '/game-developers/web/index' },
                ],
            },
        ],
    },
    {
        text: 'Products',
        items: [
            //
            { text: 'All Products', link: '/products/index' },
            {
                text: 'Featured Products',
                items: [
                    { text: 'Ultra Wallet', link: '/products/ultra-wallet/index' },
                    { text: 'Chain API', link: '/products/chain-api/index' },
                    { text: 'NFT API', link: '/products/nft-api/index' },
                ],
            },
        ],
    },
    {
        text: 'Blockchain',
        items: [
            //
            { text: 'Overview', link: '/blockchain/general/index' },
            { text: 'Block Producers', link: '/blockchain/block-producers/index' },
            { text: 'Contracts', link: '/blockchain/contracts/index' },
        ],
    },
];

export default navbar;
