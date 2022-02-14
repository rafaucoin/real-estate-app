import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Banner = ({
  purpose,
  title1,
  title,
  desc1,
  desc2,
  buttontext,
  linkName,
  imgurl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imgurl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3x1" fontWeight="bold">
        {title1}
        <br />
        {title}
      </Text>
      <Text
        fontSize="lg"
        paddingTop="3"
        paddingBottom="3"
        color="gray.700"
        fontWeight="medium"
      >
        {desc1}
        <br />
        {desc2}
      </Text>

      <Button size="md" colorScheme="teal">
        <Link href={linkName}>
          <a>{buttontext}</a>
        </Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale, propertForRent }) {
  console.log(propertiesForSale);
  return (
    <Box className="index">
      <Banner
        purpose="Rent a home"
        title="Rental Homes for"
        title1="Everyone"
        desc1="Explore appartment"
        desc2="and "
        buttontext="Explore Renting"
        linkName="/search?purpose=for-rent"
        imgurl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      {/* <Flex flexWrap='wrap'>
        {propertiesForRent.map((property)=>{<property property/>})}
      </Flex> */}
      <Banner
        purpose="Buy a home"
        title="Find, Buy Own your"
        title1="Dream Home"
        desc1="Explore appartments, Villas"
        desc2="and more"
        buttontext="Explore Sales"
        linkName="/search?purpose=for-sale"
        imgurl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
    </Box>
  );
}
export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
