import { zkSync } from 'wagmi/chains';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import HomePage from './pages/HomePage.tsx';
import { Web3Modal } from '@web3modal/react';

const chains = [zkSync];

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);
const App = () => {
  return (
    <main className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#121A2B] to-[#143089]">
      <WagmiConfig config={wagmiConfig}>
        <HomePage />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </main>
  );
};

export default App;
