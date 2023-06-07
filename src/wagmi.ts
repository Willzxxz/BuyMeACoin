import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";

import { publicProvider } from "wagmi/providers/public";

const walletConnectProjectId = "fc8579da388347465e2761b03d4bf42f";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli, ...(import.meta.env?.MODE === "development" ? [goerli] : [])],
  [
    alchemyProvider({ apiKey: "KTefxuTkTPdJ20yttBb6oTk4WKxWI9AH" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "BMAC APP",
  chains,
  projectId: walletConnectProjectId,
});

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { chains };
