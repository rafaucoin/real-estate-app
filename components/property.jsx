import { Flex, Box, Text, Button, Avatar, Spacer,useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaBath, FaBed } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { millify } from "millify";
import img from "../public/img.png";
const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  const { colorMode, toggleColorMode } = useColorMode()  
  return <Link href={`/property/${externalID}`} passHref>
    <Flex
      w="fit-content"
      m="5"
      flexDirection="column"
      padding="2"
      justifyContent="center"
      cursor="pointer"
      borderRadius={10}
      bg={colorMode === "light"? "gray.300": "gray.700"}
>
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : img}
          height={260}
          width={400}
        />
      </Box>
      <Box w="full" width={400}>
        <Flex
          paddingTop="2"
          alignItems="right"
          justifyContent="space-between"
          w="full"
        >
          <Flex width="full" alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              AED {price > 999999 ? `${price / 1000000}M` : `${price / 1000}K`}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          {/* <Box>
            <Image height={60} width={130} src={agency?.logo?.url} />
          </Box> */}
        </Flex>
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="100%"
          color="blue.400"
        >
          {/* {rooms} */}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text fontSize="lg">
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </Text>
      </Box>
    </Flex>
  </Link>
};
export default Property;
