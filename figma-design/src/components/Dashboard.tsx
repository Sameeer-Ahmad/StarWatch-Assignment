import { Box, Flex, Text } from "@chakra-ui/react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { BsBoxFill } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { Graph } from "./Graph";
import { DataTable } from "./Datatable";
import { Revenue } from "./Revenue";
import { Linechart } from "./LineChart";
import { Carousels } from "./Crousel";
import { Piechart } from "./PieChart";
function Dashboard() {
  return (
    <div className="color-black">
      <Text pl={6} align="start" fontSize="3xl" fontWeight="bold">
        Dashboard
      </Text>
      <Flex gap={8} pl={6} flexWrap={"wrap"} pb={12}>
        <Flex flexDir="column" p={4} mt={6} bg={"white"} borderRadius={"lg"}>
          <Flex align="center" justify={"space-between"}>
            <Text fontSize={"16px"} color="gray.500">
              Total Order
            </Text>
            <Box
              fontSize={"40px"}
              borderRadius={"35%"}
              p={1}
              mb={-2}
              bg={"rgb(228, 228, 254)"}
              color={"rgba(130, 128, 255, 1)"}
            >
              {" "}
              <IoIosContacts />
            </Box>
          </Flex>
          <Text mt={-1} fontSize={"28px"} fontWeight="semibold">
            10293
          </Text>
          <Flex p={1} align="center">
            <Flex
              p={1}
              align={"center"}
              mr="2"
              color={"green.400"}
              fontSize={"16px"}
            >
              <FaArrowTrendUp />
              <Text as="span" ml="1">
                1.3%
              </Text>
            </Flex>
            <Text color="gray.500">Up from past week</Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" p={4} mt={6} bg={"white"} borderRadius={"lg"}>
          <Flex align="center" justify={"space-between"}>
            <Text fontSize={"16px"} color="gray.500">
              Total User
            </Text>
            <Box
              fontSize={"30px"}
              borderRadius={"30%"}
              p={2}
              mb={-2}
              bg={"rgb(253, 242, 214)"}
              color={"rgba(254, 197, 61, 1)"}
            >
              {" "}
              <BsBoxFill />
            </Box>
          </Flex>
          <Text mt={-1} fontSize={"28px"} fontWeight="semibold">
            40,689
          </Text>
          <Flex p={1} align="center">
            <Flex
              p={1}
              align={"center"}
              mr="2"
              color={"green.400"}
              fontSize={"16px"}
            >
              <FaArrowTrendUp />
              <Text as="span" ml="1">
                8.5%
              </Text>
            </Flex>
            <Text color="gray.500">Up from yesterday</Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" p={4} mt={6} bg={"white"} borderRadius={"lg"}>
          <Flex align="center" justify={"space-between"}>
            <Text fontSize={"16px"} color="gray.500">
              Total Sales
            </Text>
            <Box
              fontSize={"30px"}
              borderRadius={"35%"}
              p={2}
              mb={-2}
              bg={"rgb(228, 228, 254)"}
              color={"rgba(130, 128, 255, 1)"}
            >
              {" "}
              <BsGraphUp />
            </Box>
          </Flex>
          <Text mt={-1} fontSize={"28px"} fontWeight="semibold">
            $89,000
          </Text>
          <Flex p={1} align="center">
            <Flex
              p={1}
              align={"center"}
              mr="2"
              color={"red.400"}
              fontSize={"16px"}
            >
              <FaArrowTrendUp />
              <Text as="span" ml="1">
                4.3%
              </Text>
            </Flex>
            <Text color="gray.500">Down from yesterday</Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" p={4} mt={6} bg={"white"} borderRadius={"lg"}>
          <Flex align="center" justify={"space-between"}>
            <Text fontSize={"16px"} color="gray.500">
              Total Pending
            </Text>
            <Box
              fontSize={"30px"}
              borderRadius={"35%"}
              p={2}
              mb={-2}
              bg={"rgb(228, 228, 254)"}
              color={"rgba(130, 128, 255, 1)"}
            >
              {" "}
              <FaClockRotateLeft />
            </Box>
          </Flex>
          <Text mt={-1} fontSize={"28px"} fontWeight="semibold">
            2040
          </Text>
          <Flex p={1} align="center">
            <Flex
              p={1}
              align={"center"}
              mr="2"
              color={"green.400"}
              fontSize={"16px"}
            >
              <FaArrowTrendUp />
              <Text as="span" ml="1">
                1.8%
              </Text>
            </Flex>
            <Text color="gray.500">Up from yesterday</Text>
          </Flex>
        </Flex>
      </Flex>

      <Graph />
      <DataTable />
      <Revenue />
      <Flex gap={6} pt={12} pl={4}>
        <Piechart />
        <Flex
          flexDir={"column"}
          bg={"white"}
          pt={4}
          border={"1px"}
          borderColor={"gray.200"}
          borderRadius={"lg"}
          pl={10}
          pr={10}
        >
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Featured Product
          </Text>{" "}
          <Carousels />{" "}
          <Flex flexDir={"column"} align={"center"} justify={"center"}>
            <Text fontSize={"14px"} fontWeight={"semibold"}>
              Beats Headphone 2019
            </Text>{" "}
            <Text color={"blue.300"}>$89.90</Text>
          </Flex>{" "}
        </Flex>

        <Linechart />
      </Flex>
    </div>
  );
}

export default Dashboard;
