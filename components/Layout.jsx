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
        <footer>Footer</footer>
      </Box>
    </>
  );
};
export default Layout;
