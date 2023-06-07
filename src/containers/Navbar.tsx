import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";
import ConnectCustomNav from "../components/connectButtonCustomNavbar";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  useBreakpointValue({ m: true, d: false });

  return (
    <Box
      bgColor="hsla(360, 100%, 100%, 0.50)"
      mx="auto"
      w={{ d: "1440rem", m: "360rem" }}
    >
      <HStack
        zIndex="5"
        justifyContent="space-between"
        flex="2"
        flexDirection="row"
        w={{ d: "1440rem", m: "360rem" }}
        py="5rem"
        mx="auto"
        px={{ d: "40rem", m: "10rem" }}
        left={{ m: "0rem", d: "0rem" }}
        gap="2rem"
      >
        <Box fontFamily="Parisienne" fontSize={{ d: "40rem", m: "30rem" }}>
          Will
        </Box>
        <Box>{/* <ConnectCustomNav /> */}</Box>
        <ConnectButton />
      </HStack>
    </Box>
  );
}
