import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { fetchApi, baseUrl } from "../utils/fetchApi";
import Property from "../components/property";
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
  <Flex
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    flexDir={("column", "column", "row", "row")}
  >
    <Image src={imgurl} width={500} height={300} alt="banner" />
    <Flex flexDirection={"column"} p="5" width="100%" align="center" >
      <Text fontSize="lg" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize={{base: "2xl",sm:"3xl"}} fontWeight="bold">
        {title1} {" "}
        {title}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" fontWeight="medium">
        {desc1}{" "}
        {desc2}
      </Text>

      <Button size="md" colorScheme="teal">
        <Link href={linkName}>
          <a>{buttontext}</a>
        </Link>
      </Button>
    </Flex>
  </Flex>
);

export default function Home({ propertiesForRent, propertiesForSale }) {
  // console.log(propertiesForRent);
  // console.log(propertiesForSale);

  return (
    <Box
      width={["100%", "100%"]}
      alignItems="center"
      justifyContent="center"
      marginTop={20}
      marginInline={1}
    >
      <Banner
        purpose="Rent a home"
        title1="Rental Homes for"
        title="Everyone"
        desc1="Explore appartments"
        desc2="and more"
        buttontext="Explore Renting"
        linkName="/search?purpose=for-rent"
        imgurl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap" justifyContent="center" width="100%">
        {propertiesForRent.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
      <Banner
        purpose="Buy a home"
        title="Find, Buy, Own, your"
        title1="Dream Home"
        desc1="Explore appartments, Villas"
        desc2="and more"
        buttontext="Explore Sales"
        linkName="/search?purpose=for-sale"
        imgurl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForSale.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=16`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=1w6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
