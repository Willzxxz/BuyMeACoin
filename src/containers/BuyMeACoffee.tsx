import abi from "../utils/BuyMeACoffee.json";
import { ethers } from "ethers";
import { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import ConnectCustomButton from "../components/connectButtonCustom";
import { useAccount } from "wagmi";
import { Collapse } from "@chakra-ui/react";

interface Memo {
  address: string;
  timestamp: number;
  message: string;
  name: string;
}

export default function BuyMeACoffee(): JSX.Element {
  useBreakpointValue({ m: true, d: false });
  // Contract Address & ABI
  const contractAddress = "0xD6563FA7E41C643be7EF1D2558E2004d31A306bb";
  const contractABI = abi.abi;

  const [memos, setMemos] = useState<Memo[]>([]);
  const [isMagic, setIsMagic] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const { isOpen, onToggle } = useDisclosure();

  const { isConnected } = useAccount();

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (isConnected) {
        setIsMagic(true);
        getMemos();
      } else {
        setIsMagic(false);
      }
    };

    checkWalletConnection();
  }, [isConnected]);

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const buyCoffee = async (): Promise<void> => {
    try {
      const { ethereum } = window as any;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const buyMeACoffee = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log("buying coffee..");
        const coffeeTxn = await buyMeACoffee.buyCoffee(
          name ? name : "anon",
          message ? message : "Enjoy your coffee!",
          { value: ethers.utils.parseEther("0.001") }
        );

        await coffeeTxn.wait();

        console.log("mined ", coffeeTxn.hash);

        console.log("coffee purchased!");

        // Clear the form fields.
        setName("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const getMemos = async (): Promise<void> => {
    try {
      const { ethereum } = window as any;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const buyMeACoffee = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log("fetching memos from the blockchain..");
        const memos = await buyMeACoffee.getMemos();
        console.log("fetched!");
        setMemos(memos);
      }
    } catch (error) {
      console.log(error);
      console.log("Wallet is not connected");
    }
  };

  useEffect(() => {
    let buyMeACoffee: ethers.Contract | undefined;
    // isWalletConnected();
    getMemos();

    // Create an event handler function for when someone sends
    // us a new memo.
    const onNewMemo = (
      from: string,
      timestamp: number,
      name: string,
      message: string
    ) => {
      console.log("Memo received: ", from, timestamp, name, message);
      setMemos((prevState: Memo[]) => [
        ...prevState,
        {
          address: from,
          timestamp,
          message,
          name,
        },
      ]);
    };

    const { ethereum } = window as any;

    // Listen for new memo events.
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      buyMeACoffee = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      ) as ethers.Contract;

      buyMeACoffee.on("NewMemo", onNewMemo);
    }

    return () => {
      if (buyMeACoffee) {
        buyMeACoffee.off("NewMemo", onNewMemo);
      }
    };
  }, []);

  return (
    <>
      <Box w={{ d: "1440rem" }}>
        <Center>
          <Text
            fontSize={{ d: "80rem", m: "50rem" }}
            color="black"
            fontFamily="Source Sans Pro"
            mt={{ d: "60rem", m: "40rem" }}
            w={{ d: "100%", m: "200rem" }}
            mx="auto"
            textAlign="center"
          >
            Buy Will a Coffee!
          </Text>
        </Center>
        <Center>
          <Box
            border="1rem solid"
            py={{ d: "20rem", m: "20rem" }}
            px={{ d: "40rem", m: "30rem" }}
            mt={{ d: "100rem", m: "40rem" }}
            w={{ d: "350rem", m: "300rem" }}
            borderRadius="12rem"
            bgColor="hsla(360, 100%, 100%, .5)"
            zIndex="1"
          >
            <FormControl>
              <FormLabel mt={{ m: "0rem" }}>Name</FormLabel>
              <Input
                id="name"
                type="text"
                placeholder="Anonymous"
                onChange={onNameChange}
                mb={{ d: "20rem", m: "20rem" }}
                borderRadius="12rem"
                border="1rem solid "
              />
              <FormLabel>Send Will a message</FormLabel>
              <Textarea
                rows={4}
                placeholder="Enjoy your coffee!"
                id="message"
                mb={{ m: "20rem" }}
                borderRadius="12rem"
                border="1rem solid "
                onChange={onMessageChange}
                required
              />
              <br />
              <Center>
                <div>
                  {isMagic ? (
                    <Button
                      bgColor="#47271b"
                      color="white"
                      _hover={{ transform: "scale(1.03)" }}
                      borderRadius="12rem"
                      onClick={buyCoffee}
                      mb={{ m: "20rem" }}
                    >
                      Send 1 Coffee for 0.001ETH
                    </Button>
                  ) : (
                    <ConnectCustomButton />
                  )}
                </div>
              </Center>
            </FormControl>
          </Box>
        </Center>
      </Box>
      <Center mt={{ d: "150rem", m: "30rem" }}></Center>

      {isMagic && (
        <Center>
          <VStack>
            <Collapse in={isOpen} animateOpacity>
              <Box
                border="2rem solid"
                w={{ d: "700rem", m: "330rem" }}
                mt={{ d: "50rem", m: "100rem" }}
                mb={{ d: "50rem" }}
                py={{ d: "20rem", m: "20rem" }}
                px={{ d: "40rem", m: "10rem" }}
                borderRadius="12rem"
                bgColor={{ d: "white", m: "hsla(360, 100%, 100%, .7)" }}
                zIndex="2"
              >
                <Center>
                  <Text
                    my="30rem"
                    fontSize={{ d: "30rem", m: "20rem" }}
                    color="black"
                  >
                    <b>Messages received</b>
                  </Text>
                </Center>
                {memos
                  .slice(0)
                  .reverse()
                  .map((memo: Memo, idx: number) => {
                    const timestamp = new Date(memo.timestamp * 1000);

                    return (
                      <Box
                        bgColor={{ d: "white", m: "hsla(360, 100%, 100%, .5)" }}
                        key={idx}
                        style={{
                          border: "2rem solid",
                          borderRadius: "5rem",
                          padding: "5rem",
                          margin: "5rem",
                        }}
                      >
                        <Box textAlign="left">
                          <Text as="b">"{memo.message}"</Text>
                        </Box>
                        <Box maxH="50rem" minH="30rem" />
                        <HStack justifyContent="space-between">
                          <Box>From: {memo.name} </Box>
                          <Box>
                            {timestamp.toLocaleDateString("en-US", options)}
                          </Box>
                        </HStack>
                      </Box>
                    );
                  })}
              </Box>
            </Collapse>
            <Button
              bgColor="black"
              color="white"
              _hover={{ transform: "scale(1.03)" }}
              borderRadius="12rem"
              onClick={onToggle}
              mt={{ d: "0rem", m: "60rem" }}
              mb={{ d: "0rem", m: "-70rem" }}
            >
              Hide/Show Messages
            </Button>
          </VStack>
        </Center>
      )}
      <br />
    </>
  );
}
