import { IconButton, Flex, Box, Spacer, Button, Icon, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {  FcHome, FcAbout } from "react-icons/fc";
import {AiOutlineMenu} from "react-icons/ai"
import { BsSearch } from "react-icons/bs";
import { FiKey, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Search from "../pages/Search";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useState } from "react";
import { ColorModeScript, useColorMode } from "@chakra-ui/react";

const NavBar = () => {
  const [mode, setMode] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
    <Flex
      pos="fixed"
      w="100%"
      zIndex={1000}
      py={["1", 2, 2, 2]}
      as="nav"
      bg={colorMode === "dark" ? "gray.900" : "white"}
      boxShadow="sm"
      justifyContent="space-between"
      alignItems="center"
      paddingInline={[0, 10]}
    >
      <Box
        fontSize="3xl"
        color={colorMode === "dark" ? "white" : "gray.900"}
        fontWeight="bold"
        paddingLeft={[0, 2, 5, 5]}
      >
        <Link href="/">
          <Flex gap={1} alignItems="center">
        <FiHome size={27} strokeWidth={3} />
        Realtor
          </Flex>
        </Link>
      </Box>
      <Spacer />
      <Flex display={{base:"none",md:"flex"}} fontSize={["lg", "sm"]} paddingLeft={["13", 2, 0, 0]}>
        <IconButton
          variant="outline"
          padding={0}
          aria-label="mode"
          width={5}
          height={10}
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <IoSunny /> : <IoMoon />}
        />
        <Link href="/" passHref>
          <Box>
            <Button
              variant="ghost"
              _focus={{
                border: "none",
              }}
            >
              Home
            </Button>
          </Box>
        </Link>
        <Link href="/Search" passHref>
          <Box>
            <Button
              variant="ghost"
              _focus={{
                border: "none",
              }}
            >
              {" "}
              Search
            </Button>
          </Box>
        </Link>
        <Link href="/Search?purpose=for-sale" passHref>
          <Box>
            <Button
              variant="ghost"
              _focus={{
                border: "none",
              }}
            >
              Buy
            </Button>
          </Box>
        </Link>
        <Link href="/Search?purpose=for-rent" passHref>
          <Box>
            <Button
              variant="ghost"
              _focus={{
                border: "none",
              }}
            >
              Rent
            </Button>
          </Box>
        </Link>
      </Flex>
      <Box mr={10}
   display={{ base:"flex",md:"none"}}
>

      <IconButton
          variant="outline"
          padding={0}
          aria-label="mode"
          width={5}
          height={10}
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <IoSunny /> : <IoMoon />}
        />
      </Box>
      <Flex  display={{md:"none"}}>
      <Menu>
  <MenuButton as={IconButton} icon={<AiOutlineMenu size={25} color={colorMode === "light"? "black" : "white"}/>}>
  </MenuButton>
  <MenuList>
  <Link href="/" passHref>
          <Box>
            <Button
              variant="ghost"
              _focus={{
                border: "none",
              }}
              w="full"

            >
              Home
            </Button>
          </Box>
        </Link>
        <Link href="/Search" passHref>
          <Box>
            <Button
              variant="ghost"
              _focus={{
                border: "none",
              }}
              w="full"

            >
              {" "}
              Search
            </Button>
          </Box>
        </Link>
        <Link href="/Search?purpose=for-sale" passHref>
          <Box>
            <Button
              variant="ghost"
              _focus={{
                border: "none",
              }}
              w="full"

            >
              Buy
            </Button>
          </Box>
        </Link>
        <Link href="/Search?purpose=for-rent" passHref>
          <Box>
            <Button
              variant="ghost"
              _focus={{
                border: "none",
              }}
              w="full"
            >
              Rent
            </Button>
          </Box>
        </Link>
  </MenuList>
</Menu>
      </Flex>
    </Flex>
    
    </>

  );
};

export default NavBar;
