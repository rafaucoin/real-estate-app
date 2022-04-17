import { Flex, Box, Text, Button, Avatar, Spacer } from "@chakra-ui/react";
import NavBar from "./NavBar";
const Layout = ({ children }) => {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <NavBar />
        <Flex
          className="hey"
          as="main"
          justifyContent="center"
          flexDirection="column"
          width="100%"
        >
          {children}
        </Flex>
        <Flex mt={10} height="10vh" width="100%" alignItems="center" justifyContent="center" >
          2022-Realtor-inc
        </Flex>
      </Box>
    </>
  );
};
export default Layout;
