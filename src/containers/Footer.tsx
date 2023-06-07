import { Box, useBreakpointValue } from "@chakra-ui/react";

export default function Footer() {
  useBreakpointValue({ m: true, d: false });

  return (
    <Box>
      <Box
        width={{ d: "1440rem" }}
        pt="40rem"
        pb="20rem"
        px="50rem"
        mx="auto"
        gap="2rem"
        color="white"
        fontSize={{ d: "20rem", m: "12rem" }}
        mt="100rem"
        borderTop="1rem hsla(360, 100%, 100%, .3) solid"
      >
        <Box textAlign="left">
          <a
            href="https://www.linkedin.com/in/guilherme-de-deus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            All Rights Reserved (c) Will de Deus 2023
          </a>
        </Box>
      </Box>
    </Box>
  );
}
