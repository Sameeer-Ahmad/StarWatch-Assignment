"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { IconType } from "react-icons";
import { CiSearch } from "react-icons/ci";
import { BiSolidDashboard } from "react-icons/bi";
import { BsBoxFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { PiNoteFill } from "react-icons/pi";
import { IoIosContacts } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { SiTata } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { FaFileInvoice } from "react-icons/fa6";
import { RiTodoFill } from "react-icons/ri";
import { ScrollArea } from "@/ui/scroll-area";
import { Link } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  href: string;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: BiSolidDashboard, href: "/dashboard" },
  { name: "products", icon: BsBoxFill, href: "/products" },
  { name: "Heart", icon: FaHeart, href: "/heart" },
  { name: "Messages", icon: AiFillMessage, href: "/messages" },
  { name: "Stack", icon: BsStack, href: "/stack" },
  { name: "Tata", icon: SiTata, href: "/tata" },
  { name: "Notes", icon: PiNoteFill, href: "/notes" },
  { name: "Calendar", icon: SlCalender, href: "/calendar" },
  { name: "Todo", icon: RiTodoFill, href: "/todo" },
  { name: "Contacts", icon: IoIosContacts, href: "/contacts" },
  { name: "Invoices", icon: FaFileInvoice, href: "/invoices" },
  { name: "Pie Chart", icon: AiFillPieChart, href: "/piechart" },
  { name: "Contact", icon: IoMdContact, href: "/contact" },
  { name: "Settings", icon: IoSettings, href: "/settings" },
  { name: "Logout", icon: FaPowerOff, href: "/logout" },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 28 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="3" justifyContent="space-between">
        <Box ml={4}>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/15631/15631148.png"
            h={"25px"}
            w={"25px"}
          />
        </Box>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <ScrollArea className=" h-5/6 border">
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} href={link.href}>
            {/* {link.name} */}
          </NavItem>
        ))}
      </ScrollArea>
    </Box>
  );
};

const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
  return (
    <Link to={href} style={{ textDecoration: "none" }} {...rest}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="24"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 20 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="space-between"
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Box display={{ base: "flex", md: "none" }} flex="1" ml={4}>
        <Image
          src="https://cdn-icons-png.flaticon.com/128/15631/15631148.png"
          h={"25px"}
          w={"25px"}
        />
      </Box>

      <Flex display={{ base: "none", md: "flex" }} ml={10}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <CiSearch color="gray" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" border={"none"} />
        </InputGroup>
      </Flex>

      <HStack spacing={{ base: "0", md: "6" }} justify="flex-end" flex="1">
        <IconButton
          display={{ base: "none", md: "flex" }}
          size="lg"
          variant="ghost"
          aria-label="notifications"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>

      <HStack display={{ base: "flex", md: "none" }} spacing="3">
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="notifications"
          icon={<FiBell />}
        />
        <Menu>
          <MenuButton
            as={IconButton}
            icon={
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            }
          />
          <MenuList
            bg={useColorModeValue("white", "gray.900")}
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuDivider />
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 28 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
