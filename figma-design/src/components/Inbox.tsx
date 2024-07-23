import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { InboxTable } from "./InboxTable";
function Inbox() {
  return (
    <>
      <Text pl={6} align="start" fontSize="3xl" fontWeight="bold">
        Inbox
      </Text>
    <Flex gap={6} flexWrap={["wrap","wrap","nowrap"]} align={["center","center","start"]}
        justify={["center","center","start"]}>

      <Flex
        width={"25%"}
        flexDir={"column"}
        bg={"white"}
        borderRadius={"lg"}
        p={5}
        mt={8}
        ml={4}
      >
        <Button bg={"rgba(72, 128, 255, 1)"} color={"white"} fontSize={"14px"}>
          + Compose
        </Button>

        <Text fontSize={"18px"} fontWeight="semibold" pt={6} pl={2} pb={6}>
          My Email
        </Text>

        <Flex
          justify={"space-between"}
          p={2}
          borderRadius={"lg"}
          bg={"rgb(232, 237, 255)"}
          color={"blue.400"}
          fontWeight={"semibold"}
        >
          <Flex align={"center"} gap={2}>
            <CiMail />
            <Text pb={1}>Inbox</Text>
          </Flex>
          <Text>1253</Text>
        </Flex>

        <Flex
          justify={"space-between"}
          p={2}
          borderRadius={"lg"}
          fontWeight={"semibold"}
        >
          <Flex align={"center"} gap={2}>
            <CiStar />
            <Text pb={1}>Starred</Text>
          </Flex>
          <Text>245</Text>
        </Flex>

        <Flex
          justify={"space-between"}
          p={2}
          borderRadius={"lg"}
          fontWeight={"semibold"}
        >
          <Flex align={"center"} gap={2}>
            <FaPen />
            <Text pb={1}>Draft</Text>
          </Flex>
          <Text>24,532</Text>
        </Flex>

        <Flex
          justify={"space-between"}
          p={2}
          borderRadius={"lg"}
          fontWeight={"semibold"}
          pb={4}
        >
          <Flex align={"center"} gap={2}>
            <CiMail />
            <Text pb={1}>Inbox</Text>
          </Flex>
          <Text>1253</Text>
        </Flex>

        <Flex
          justify={"space-between"}
          p={2}
          borderRadius={"lg"}
          fontWeight={"semibold"}
          pb={4}
        >
          <Flex align={"center"} gap={2}>
            <BiError />
            <Text pb={1}>Span</Text>
          </Flex>
          <Text>14</Text>
        </Flex>

        <Flex
          justify={"space-between"}
          p={2}
          borderRadius={"lg"}
          fontWeight={"semibold"}
          pb={4}
        >
          <Flex align={"center"} gap={2}>
            <AiOutlineMessage />
            <Text pb={1}>Important</Text>
          </Flex>
          <Text>18</Text>
        </Flex>

        <Flex
          justify={"space-between"}
          p={2}
          borderRadius={"lg"}
          fontWeight={"semibold"}
          pb={4}
        >
          <Flex align={"center"} gap={2}>
            <RiDeleteBin5Line />
            <Text pb={1}>Bin</Text>
          </Flex>
          <Text>9</Text>
        </Flex>

        <Text fontSize={"18px"} fontWeight="semibold" pt={6} pl={2} pb={2}>
          Label
        </Text>


        <Flex
          justify={"space-between"}
          p={2}
          borderRadius={"lg"}
          fontWeight={"semibold"}
         
        >
          <Flex align={"center"} gap={2}>
           <Box color={"green.400"}> <MdCheckBoxOutlineBlank /></Box>
            <Text >Primary</Text>
          </Flex>
         
        </Flex>

        <Flex
          justify={"space-between"}
          p={2}
          borderRadius={"lg"}
          fontWeight={"semibold"}
          
        >
          <Flex align={"center"} gap={2}>
           <Box color={"blue.400"}> <MdCheckBoxOutlineBlank /></Box>
            <Text >Social</Text>
          </Flex>
         
        </Flex>

        <Flex
          justify={"space-between"}
          p={2}
          borderRadius={"lg"}
          fontWeight={"semibold"}
         
        >
          <Flex align={"center"} gap={2}>
           <Box color={"orange.400"}> <MdCheckBoxOutlineBlank /></Box>
            <Text >Work</Text>
          </Flex>
         
        </Flex>

        <Flex
          justify={"space-between"}
          p={2}
          borderRadius={"lg"}
          fontWeight={"semibold"}
          
        >
          <Flex align={"center"} gap={2}>
           <Box color={"#B794F4"}> <MdCheckBoxOutlineBlank /></Box>
            <Text >Friends</Text>
          </Flex>
         
        </Flex>
       
<Text color={"gray.400"} textAlign={"center"} pt={6} pb={6}>+ Create New Label</Text>

      </Flex>

     <Box pt={8} w={"100%"}>
     <InboxTable/>
     </Box>
    </Flex>
    </>
  );
}

export default Inbox;
