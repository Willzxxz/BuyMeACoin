import { useAccount } from "wagmi";
import { SendTransaction } from "./components/SendTransaction";
import { SendTransactionPrepared } from "./components/SendTransactionPrepared";
import { WatchPendingTransactions } from "./components/WatchPendingTransactions";
import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";
import BuyMeACoffee from "./containers/BuyMeACoffee";

import Coffee from "/coffee.jpg";
import { Box } from "@chakra-ui/react";

export function App() {
  const { isConnected } = useAccount();

  return (
    <>
      <Box h={{ d: "100vh", m: "" }}>
        <Box
          bgImage={Coffee}
          bgSize={{ d: "1440rem", m: "1440rem" }}
          bgRepeat="no-repeat"
          h={{ d: "770rem", m: "650rem" }}
          bgPosition={{ m: "bottom" }}
          w={{ d: "1440rem", m: "360rem" }}
          mx="auto"
          borderBottom="solid 5rem black"
        >
          <Navbar />
          <BuyMeACoffee />
          <Footer />
        </Box>
      </Box>

      {isConnected && (
        <>
          {/* <br />
          <hr />
          <h2>Send Transaction</h2>
          <SendTransaction /> */}
          {/* <br />
          <hr />
          <h2>Send Transaction (Prepared)</h2>
          <SendTransactionPrepared /> */}
          {/* <br />
          <hr />
          <h2>Watch Pending Transactions</h2>
          <WatchPendingTransactions /> */}
        </>
      )}
    </>
  );
}
