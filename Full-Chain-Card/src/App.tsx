import WormholeConnect, { WormholeConnectConfig, DEFAULT_ROUTES, MayanRouteSWIFT } from '@wormhole-foundation/wormhole-connect';

const config: WormholeConnectConfig = {
    // You can use Connect with testnet chains by specifying "network":
    network: 'Testnet',
    chains: ['Sepolia', 'Solana', 'Sui'],
    rpcs: {
        Sepolia: 'https://ethereum-sepolia-rpc.publicnode.com',
        Solana: 'https://api.testnet.solana.com',
        Sui: 'https://fullnode.testnet.sui.io:443'
    },
    routes: [...DEFAULT_ROUTES, MayanRouteSWIFT],
};

function App() {
    return (
        <div className='h-screen w-screen bg-slate-800'>
            <WormholeConnect config={config} />
        </div>
    )
}

export default App
