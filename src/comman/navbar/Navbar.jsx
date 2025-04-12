import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  const isMobile = useBreakpointValue({ base: true, md: false });

  const navItemStyle = {
    fontWeight: "medium",
    fontSize: "lg",
    position: "relative",
    _after: {
      content: `""`,
      position: "absolute",
      width: "0%",
      height: "2px",
      bottom: "-2px",
      left: "0",
      bg: "pink.400",
      transition: "width 0.3s ease-in-out",
    },
    _hover: {
      _after: {
        width: "100%",
      },
      color: "pink.300",
    },
  };

  const navLinks = (
    <Flex gap={6} align="center">
      <Link to="/album-see">
        <Text sx={navItemStyle}>Home</Text>
      </Link>
      <Link to="/support">
        <Text sx={navItemStyle}>Support</Text>
      </Link>
    </Flex>
  );

  const mobileNavLinks = (
    <Flex direction="column" gap={4} mt={4}>
      <Link to="/" onClick={onClose}>
        <Text fontSize="lg" fontWeight="semibold" color="gray.800">
          Home
        </Text>
      </Link>
      <Link to="/support" onClick={onClose}>
        <Text fontSize="lg" fontWeight="semibold" color="gray.800">
          Support
        </Text>
      </Link>
    </Flex>
  );

  return (
    <Flex justify="center" w="100%">
      <Flex
        px={{ base: 4, md: 6 }}
        py={{md:3, base:1}}
        mt={{md:6, base:1}}
        bg="rgba(3, 3, 3, 0.9)"
        backdropFilter="blur(10px)"
        boxShadow="lg"
        color="white"
        justify="space-between"
        align="center"
        w={{ base: "90%", md: "30%" }}
        position={{ md: "fixed", base: "relative" }}
        top={{ md: 0 }}
        zIndex={999}
        borderRadius="60px"
        transition="all 0.3s ease-in-out"
      >
        {/* Logo */}
        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          bgGradient="linear(to-r, pink.400, blue.400)"
          bgClip="text"
        >
          MyBrand
        </Text>

        {/* Links or Menu */}
        <Flex gap={4}>
          {isMobile ? (
            <IconButton
              icon={<IoMdMenu />}
              variant="ghost"
              colorScheme="whiteAlpha"
              onClick={onOpen}
              aria-label="Open Menu"
              _focus={{outline:"none"}}
              _hover={{ transform: "scale(1.1)" }}
              transition="all 0.2s"
              fontSize="2xl"
            />
          ) : (
            navLinks
          )}
        </Flex>

        {/* Drawer */}
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent borderLeftRadius="xl">
            <DrawerCloseButton mt={2} color={"black"}  _focus={{outline:"none"}} />
            <DrawerHeader fontWeight="bold" color="blue.400">
              Navigation
            </DrawerHeader>
            <DrawerBody>{mobileNavLinks}</DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
};

export default Navbar;
