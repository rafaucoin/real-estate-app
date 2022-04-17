import { Flex, Box, Text, Button, Icon, Image, Heading } from "@chakra-ui/react";
import millify from "millify";
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import Caroussel from "../../components/Caroussel";
// import Image from "next/image";
import { baseUrl, fetchApi } from "../../utils/fetchApi";

function Property({property}) {
    console.log(property)
  return (
      <Flex flexDirection="column" align="center" alignItems="center" marginTop={20} width={"100%"}  px={{base:"2%", md:"10%", lg:"20%"}} pt={0}>
          <Flex width={"100%"} gap="10" height={{base:"60vh", md:"40%"}} >
            <Caroussel photos={property.photos} />
          </Flex>
          <Flex flexDirection="column" gap={5} w="full"  >
        <Flex
          paddingTop="2"
          alignItems="right"
          justifyContent="space-between"
          w="full"
        >
          <Flex width="50%" alignItems="center">
            <Box paddingRight="3" color="green.400">
              {property.isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize={{base:"md", md:"2xl"}} textTransform="uppercase">
              AED {property.price > 999999 ? `${property.price / 1000000}M` : `${property.price / 1000}K`}
              {property.rentFrequency && `/${property.rentFrequency}`}
            </Text>
          </Flex>
          
          <Flex w="fit-content">

          <Text fontWeight="bold"  fontSize="xl" >
              {property.location[3].name}
          </Text>
          </Flex>
          
        </Flex>
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-around"
          w="100%"
          color="blue.400"
        >
          <FaBed /> | {property.baths} <FaBath /> | {millify(property.area)} sqft <BsGridFill />

        </Flex>
        <Text fontStyle="italic" fontWeight="bold" fontSize="3xl">
          {property.title}
        </Text>
        <Text fontSize="md"> <strong>description :  </strong>
          {" "}{property.description}
        </Text>
      </Flex>
      <Flex py={10}  justifyContent="space-between" height="10vh" width="100%" >
<Heading size={"md"}>
    {"Agency :  "}{property.agency.name}
</Heading>
          <Heading size={"md"}>
              Phone Number : {" "}{property.phoneNumber.mobile}
          </Heading>
          </Flex>
      </Flex>
  )
}

export default Property

export async function getServerSideProps({params:{id}}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    return {
        props: {
            property:data
        }
    }
}