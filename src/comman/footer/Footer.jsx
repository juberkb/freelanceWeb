import React from 'react';
import {
  Box,
  Text,
  Button,
  VStack,
  Image,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
  Center,
  Heading,
  Flex,
  IconButton,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { FaDownload, FaPaperPlane, FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import bgBottom from "../../assets/media/footerBg.jpg";
import star from "../../assets/media/stars.jpg";
import "./footer.css";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const bgColor = useColorModeValue('rgba(0,0,0,0.9)', 'rgba(0,0,0,0.95)');
  const borderColor = useColorModeValue('rgba(255,255,255,0.15)', 'rgba(255,255,255,0.2)');

  return (
    <Box 
  fontFamily="sans-serif" 
  bg={bgColor} 
  overflowX="hidden" 
  m={2} 
  borderRadius="40px"
  border={`1px solid ${borderColor}`}
  position="relative"
  backdropFilter="blur(10px)"
  boxShadow="0 10px 30px rgba(0, 0, 0, 0.5)"
>
  {/* Shooting Stars Container */}
  <Box 
    position="absolute" 
    top="0" 
    left="0" 
    width="100%" 
    height="100%" 
    zIndex="3" 
    overflow="hidden"
    pointerEvents="none"
  >
    {/* Shooting stars with varying sizes and speeds */}
    {[...Array(12)].map((_, i) => (
      <Box 
        key={i}
        as="span" 
        className={`shooting-star star-${i % 3}`} 
        style={{ 
          '--start-x': `${5 + (i * 7)}%`, 
          '--start-y': `${5 + (i * 5)}%`,
          '--delay': `${i * 0.5}s`,
          '--duration': `${2 + (i % 3)}s`,
          '--size': `${1 + (i % 2)}px`
        }} 
      />
    ))}
  </Box>

  <Box 
    position="relative" 
    height={{ base: "auto", md: "100vh" }} 
    minHeight="600px"
    overflow="hidden" 
    px={{ base: "1rem", md: "2rem" }}
  >
    {/* Background Layers */}
    <Box
  position="absolute"
  bottom="0"
  left="0"
  width="100%"
  height="70%"
  backgroundImage={`linear-gradient(to bottom, black 10%, transparent 10%), url(${bgBottom})`}
  backgroundRepeat="no-repeat"
  backgroundSize="cover"
  backgroundPosition="bottom"
  opacity={0.3}
  filter="blur(10px)" 
  zIndex="2"
  borderBottomRadius="40px"
/>

    {/* Enhanced Star Background */}
    <Box 
      position="absolute" 
      top="0" 
      left="0" 
      width="100%" 
      height="100%" 
      zIndex="1"
      borderTopRadius="40px" 
      overflow="hidden" 
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage={`url(${star})`}
        backgroundSize="cover"
        backgroundRepeat="repeat"
        opacity={0.5}
        filter="brightness(1.2)" 
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear(to-b, rgba(0,0,0,0.5), rgba(0,0,0,0.8))" 
      />
    </Box>
  
    {/* Main Content */}
    <Center h="100%" px={4} textAlign="center" pt={{ base: "4rem", md: 0 }}>
      <VStack spacing={6} zIndex="4">
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "4.5xl" }}
          color="white"
          fontWeight="600"
          lineHeight="1.2"
          textShadow="0 2px 10px rgba(0,0,0,0.5)"
        >
          Let's discover the secret<br />how to live your life
        </Heading>

        <Button
          size={{ base: "md", md: "lg" }}
          px={8}
          bg="linear-gradient(135deg, #657cf8 0%, #9b4bf7 100%)"
          color="white"
          _hover={{ 
            bg: "linear-gradient(135deg, #5a70e0 0%, #8a3ae0 100%)", 
            transform: "scale(1.05)",
            boxShadow: "0 5px 20px rgba(101, 124, 248, 0.4)"
          }}
          _active={{
            transform: "scale(0.98)"
          }}
          leftIcon={<FaDownload />}
          boxShadow="0 4px 15px rgba(101, 124, 248, 0.3)"
          borderRadius="xl"
          transition="all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)"
          fontWeight="500"
        >
          Download App Now
        </Button>
      </VStack>
    </Center>

    {/* Footer Section */}
    <Box
      position={{ base: "relative", md: "absolute" }}
      bottom="0"
      width="100%"
      py={8}
      bgGradient="linear(to-t, rgba(0,0,0,0.9), transparent)"
      color="white"
      zIndex="4"
      borderTop="1px solid" 
      borderColor="rgba(255,255,255,0.2)"      
      mt={{ base: "4rem", md: 0 }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        maxW="1200px"
        mx="auto"
       
      >
        {/* Left Links and Social */}
        <VStack align="flex-start" spacing={3}>
          <Link href="#" _hover={{ color: "#657cf8", textDecoration: "underline" }}>Home</Link>
          <Link href="#" _hover={{ color: "#657cf8", textDecoration: "underline" }}>Support</Link>
        </VStack>

        {/* Newsletter Subscription */}
        <Box w="full" maxW={{ base: "100%", md: "400px" }}>
          <Text fontWeight="600" mb={3} color="gray.200">
            Stay updated with our newsletter
          </Text>
          <InputGroup size="lg">
            <Input
              placeholder="Your email address"
              variant="filled"
              bg="rgba(255, 255, 255, 0.12)"
              border="none"
              color="white"
              _placeholder={{ color: "gray.400" }}
              _hover={{ bg: "rgba(255, 255, 255, 0.15)" }}
              _focus={{ bg: "rgba(255, 255, 255, 0.15)", boxShadow: "0 0 0 2px rgba(101, 124, 248, 0.5)" }}
              borderRadius="xl"
            />
            <InputRightElement width="auto" mr={1}>
              <Button
                rightIcon={<FaPaperPlane />}
                bg="linear-gradient(135deg, #657cf8 0%, #9b4bf7 100%)"
                _hover={{ 
                  bg: "linear-gradient(135deg, #5a70e0 0%, #8a3ae0 100%)",
                  transform: "scale(1.02)"
                }}
                color="white"
                size="sm"
                borderRadius="lg"
                px={4}
                boxShadow="0 2px 10px rgba(101, 124, 248, 0.3)"
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>
      
      {/* Copyright */}
      <Flex 
        justify="center" 
        mt={8} 
        pt={4} 
        borderTop="1px solid" 
        borderColor="rgba(255,255,255,0.2)" 
      >
        <Text color="gray.400" fontSize="sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Text>
      </Flex>
    </Box>
  </Box>
</Box>
  );
};

export default Footer;