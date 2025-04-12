import React from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Heading,
  Textarea,
  useBreakpointValue,
  Link,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaTwitter, FaDiscord, FaPaperPlane, FaHeadset } from "react-icons/fa";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import img1 from "../../assets/media/supportImg2.png";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);

const SupportPage = () => {
  const headingSize = useBreakpointValue({ base: "2xl", md: "4xl" });
  const textSize = useBreakpointValue({ base: "sm", md: "md" });
  const cardSize = useBreakpointValue({ base: "100%", md: "220px" });

  return (
    <MotionBox
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 20 }}
      bg="linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)"
      minH="100vh"
      color="white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      position="relative"
      overflow="hidden"
    >
      {/* Animated Background Elements */}
      <MotionBox
        position="absolute"
        top="10%"
        right="15%"
        w="200px"
        h="200px"
        bg="rgba(56, 182, 255, 0.15)"
        borderRadius="full"
        filter="blur(80px)"
        zIndex={0}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 0.5, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <MotionBox
        position="absolute"
        bottom="15%"
        left="8%"
        w="300px"
        h="300px"
        bg="rgba(255, 65, 108, 0.1)"
        borderRadius="full"
        filter="blur(100px)"
        zIndex={0}
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          w="4px"
          h="4px"
          bg="rgba(255,255,255,0.3)"
          borderRadius="full"
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          zIndex={0}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content Container */}
      <Box maxW="800px" mx="auto" position="relative" zIndex={1}>
        {/* Header Section */}
        
        <MotionFlex
          direction="column"
          align="center"
          textAlign="center"
          mb={16}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MotionButton
          mt={{md:"10rem"}}
            mb={6}
            leftIcon={<FaHeadset />}
            variant="outline"
            colorScheme="whiteAlpha"
            size="sm"
            color="white"
            borderRadius="full"
            px={6}
            _hover={{ bg: "rgba(255,255,255,0.1)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            get help
          </MotionButton>
          
          <Heading
            fontSize={headingSize}
            fontWeight="700"
            mb={6}
            lineHeight="1.2"
            letterSpacing="tight"
          >
           Get Support  <br />
            <Box as="span" bgGradient="linear(to-r, rgb(56, 182, 255), rgb(255, 65, 108))" bgClip="text">
              or share your Feedback
            </Box>
          </Heading>
          
          <Text fontSize={textSize} color="gray.400" maxW="600px" px={4}>
            Our dedicated team is ready to assist you 24/7. Share your thoughts and help us improve your experience.
          </Text>
        </MotionFlex>

        {/* Main Content */}
        <Flex direction={{ base: "column", lg: "row" }} gap={12} align="center">
          {/* Support Form */}
          <MotionFlex
            direction="column"
            gap={6}
            flex="1"
            minW={{ base: "100%", lg: "600px" }}
            p={8}
            borderRadius="xl"
            bg="rgba(15, 15, 15, 0.7)"
            backdropFilter="blur(12px)"
            border="1px solid"
            borderColor="rgba(255,255,255,0.1)"
            boxShadow="0 20px 40px rgba(0,0,0,0.3)"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Flex align="center" mb={2}>
              <Box w="4px" h="24px" bgGradient="linear(to-b, rgb(56, 182, 255), rgb(255, 65, 108))" mr={3} borderRadius="full" />
              <Heading fontSize="xl">Contact Our Team</Heading>
            </Flex>
            
            <Flex gap={4} direction={{ base: "column", md: "row" }}>
              <Flex position="relative" flex="1">
                <Box position="absolute" left={4} top="50%" transform="translateY(-50%)" color="gray.500">
                  <FiUser />
                </Box>
                <Input
                  pl={12}
                  placeholder="Your Name"
                  bg="rgba(255,255,255,0.05)"
                  border="none"
                  _placeholder={{ color: "gray.500" }}
                  _focus={{ bg: "rgba(255,255,255,0.1)" }}
                  _hover={{ bg: "rgba(255,255,255,0.08)" }}
                />
              </Flex>
              
              <Flex position="relative" flex="1">
                <Box position="absolute" left={4} top="50%" transform="translateY(-50%)" color="gray.500">
                  <FiMail />
                </Box>
                <Input
                  pl={12}
                  placeholder="Email Address"
                  bg="rgba(255,255,255,0.05)"
                  border="none"
                  _placeholder={{ color: "gray.500" }}
                  _focus={{ bg: "rgba(255,255,255,0.1)" }}
                  _hover={{ bg: "rgba(255,255,255,0.08)" }}
                />
              </Flex>
            </Flex>
            
            <Flex position="relative" flex="1">
              <Box position="absolute" left={4} top={4} color="gray.500">
                <FiMessageSquare />
              </Box>
              <Textarea
                pl={12}
                placeholder="  describe your use case"
                bg="rgba(255,255,255,0.05)"
                border="none"
                _placeholder={{ color: "gray.500" }}
                _focus={{ bg: "rgba(255,255,255,0.1)" }}
                _hover={{ bg: "rgba(255,255,255,0.08)" }}
                rows={6}
              />
            </Flex>
            
            <MotionButton
              rightIcon={<FaPaperPlane />}
              bgGradient="linear(to-r, rgb(56, 182, 255), rgb(255, 65, 108))"
              color="white"
              size="lg"
              borderRadius="full"
              _hover={{ opacity: 0.9 }}
              _active={{ transform: "scale(0.98)" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              fontWeight="semibold"
            >
              Send Message
            </MotionButton>
            
          
          </MotionFlex>

      
        </Flex>

        {/* Community Section */}
        <Box mt={28} textAlign="center">
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Heading fontSize={headingSize} mb={6}>
              Join Our <Box as="span" color="rgb(56, 182, 255)">Community</Box>
            </Heading>
            <Text fontSize={textSize} color="gray.400" mb={10} maxW="600px" mx="auto">
              Connect with thousands of like-minded professionals, get exclusive content, and participate in special events.
            </Text>

            <Flex justify="center" gap={8} wrap="wrap">
              <MotionBox
                p={8}
                borderRadius="xl"
                bg="rgba(15, 15, 15, 0.7)"
                backdropFilter="blur(12px)"
                border="1px solid"
                borderColor="rgba(255,255,255,0.1)"
                textAlign="center"
                minW={cardSize}
                boxShadow="0 10px 30px rgba(0,0,0,0.2)"
                whileHover={{ y: -5, boxShadow: "0 15px 40px rgba(0,0,0,0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Box 
                  w="60px" 
                  h="60px" 
                  bg="rgba(29, 161, 242, 0.1)" 
                  borderRadius="full" 
                  display="inline-flex" 
                  alignItems="center" 
                  justifyContent="center"
                  mb={4}
                >
                  <FaTwitter size={28} color="#1DA1F2" />
                </Box>
                <Text fontSize="lg" fontWeight="semibold" mb={2}>Twitter</Text>
                <Text fontSize="sm" color="gray.400" mb={4}>Follow us for updates</Text>
                <Link href="#" color="rgb(56, 182, 255)" fontSize="sm" fontWeight="medium">
                  Join Now →
                </Link>
              </MotionBox>
              
              <MotionBox
                p={8}
                borderRadius="xl"
                bg="rgba(15, 15, 15, 0.7)"
                backdropFilter="blur(12px)"
                border="1px solid"
                borderColor="rgba(255,255,255,0.1)"
                textAlign="center"
                minW={cardSize}
                boxShadow="0 10px 30px rgba(0,0,0,0.2)"
                whileHover={{ y: -5, boxShadow: "0 15px 40px rgba(0,0,0,0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Box 
                  w="60px" 
                  h="60px" 
                  bg="rgba(88, 101, 242, 0.1)" 
                  borderRadius="full" 
                  display="inline-flex" 
                  alignItems="center" 
                  justifyContent="center"
                  mb={4}
                >
                  <FaDiscord size={28} color="#5865F2" />
                </Box>
                <Text fontSize="lg" fontWeight="semibold" mb={2}>Discord</Text>
                <Text fontSize="sm" color="gray.400" mb={4}>Chat with the community</Text>
                <Link href="#" color="rgb(56, 182, 255)" fontSize="sm" fontWeight="medium">
                  Join Server →
                </Link>
              </MotionBox>
            </Flex>
          </MotionBox>
        </Box>

        {/* Final CTA */}
        <MotionBox
          mt={24}
          p={8}
          borderRadius="xl"
          bg="linear-gradient(135deg, rgba(56, 182, 255, 0.1) 0%, rgba(255, 65, 108, 0.1) 100%)"
          backdropFilter="blur(12px)"
          border="1px solid"
          borderColor="rgba(255,255,255,0.1)"
          textAlign="center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Heading fontSize="2xl" mb={4}>Still Have Questions?</Heading>
          <Text fontSize={textSize} color="gray.400" mb={6} maxW="600px" mx="auto">
            Check out our comprehensive documentation or browse our knowledge base for instant answers.
          </Text>
          <MotionButton
            variant="outline"
            colorScheme="whiteAlpha"
            size="lg"
            borderRadius="full"
            px={8}
            _hover={{ bg: "rgba(255,255,255,0.1)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Help Center
          </MotionButton>
        </MotionBox>
      </Box>
    </MotionBox>
  );
};

export default SupportPage;