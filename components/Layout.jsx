import { Flex, Box, Text, Button, Avatar, Spacer } from "@chakra-ui/react";
import NavBar from "./NavBar";
const Layout = ({ children }) => {
  return (
    <>
      <Box max-width="1280px" m="auto">
        <NavBar />
        <main>{children}</main>
        <footer>Footer</footer>
      </Box>
    </>
  );
};
export default Layout;
