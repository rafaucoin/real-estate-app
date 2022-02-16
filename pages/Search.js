import { useState } from "react";
import { useRouter } from "next/router";
import { Flex, Box, Text, Button, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import SearchFilters from "../components/SearchFliters";
import Property from "../components/property";
import nores from "../public/nores.png";
import { fetchSale, fetchRent, fetchApi, baseUrl } from "../utils/fetchApi";

const Search = ({ properties }) => {
  const [searchFilters, setSearchFliters] = useState(false);
  const router = useRouter();

  return (
    <Flex w="100%" justifyContent="center" flexDirection="column" border="sm">
      <Flex cursor="pointer" justifyContent="center" alignItems="center">
        <Flex paddingTop={70} onClick={() => setSearchFliters((prev) => !prev)}>
          <Text fontSize="20" fontWeight="bold">
            Apply Search Fliters
          </Text>
          <Icon as={BsFilter} paddingLeft="3" w={9} h={9}></Icon>
        </Flex>
      </Flex>
      <Flex>{searchFilters && <SearchFilters />}</Flex>
      <Text fontSize={32} fontWeight="bold" marginLeft={10}>{`Properties ${
        router.query.purpose != undefined ? router.query.purpose : "for-rent"
      }`}</Text>
      <Flex flexWrap="wrap" justifyContent="center">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex justifyContent="center" alignitems="center">
          <Image src={nores}></Image>
        </Flex>
      )}
    </Flex>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const frequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "3500";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${frequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
export default Search;
