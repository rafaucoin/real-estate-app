import { Flex, Box, Text, Button, Select, filter } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const router = useRouter()
  const [filters, setFilters] = useState(filterData);
  const searchProperties = (filterValues)=>{
    const path = router.pathname

    const {query} = router
    const values = getFilterValues(filterValues)
    values.forEach((item)=>{
      query[item.name] = item.value
    })

    router.push({pathname: path, query})
  }
  // useEffect(() => {
    
  //   searchProperties(filters)
  // }, [])
  
  
  return (
    <Flex p="4" justifyContent="center" flexWrap="wrap">
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
          >
            
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};
export default SearchFilters;
