// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Text,
//   Button,
//   VStack,
//   Image,
//   HStack,
//   Input,Icon,
//   InputGroup,
//   InputRightElement,
//   useBreakpointValue,Center,Heading,
//   Flex,
//   IconButton,
//   useColorModeValue,
//   ButtonGroup,
// } from '@chakra-ui/react';
// import { HiOutlineBellAlert,HiOutlineChartBar  } from "react-icons/hi2";
// import { FaChartLine, FaDownload, FaPaperPlane } from "react-icons/fa";
// import { FaApple, FaAndroid, FaArrowRight } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Images } from '../../../comman/staticImages&Icons/AllImage';
// import img1 from "../../../assets/media/wTwo.png"
// import img2 from "../../../assets/media/mTwo.png"
// import { FiArrowRight, FiDownload } from 'react-icons/fi';
// import { IoMdSend, IoMdTransgender } from 'react-icons/io';
// import bgBottom from "../../../assets/media/bottombg.png"
// import wFour from "../../../assets/media/wOne.png"
// import HeroBg from "../../../assets/media/heroBg.jpg"
// import mImg from "../../../assets/media/mImg.png"



// import img3 from "../../../assets/media/mImg2.png"
// const MotionBox = motion(Box);

// const App = () => {
//   const [showHeader, setShowHeader] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [imagePosition, setImagePosition] = useState(0);
//   const MotionBox = motion(Box);
//   const MotionFlex = motion(Flex);
//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
    
//     // Only start hiding/showing header after we've scrolled past the image position
//     if (currentScrollY > imagePosition) {
//       if (currentScrollY > lastScrollY) {
//         // Scrolling down
//         setShowHeader(false);
//       } else {
//         // Scrolling up
//         setShowHeader(true);
//       }
//     }
//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     // Get the position of the image element
//     const imageElement = document.querySelector('img[alt="Phone App"]');
//     if (imageElement) {
//       const rect = imageElement.getBoundingClientRect();
//       setImagePosition(rect.bottom + window.scrollY);
//     }

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY, imagePosition]);
//   const headingSize = useBreakpointValue({ base: "2xl", md: "4xl" });
//   const textSize = useBreakpointValue({ base: "md", md: "lg" });
//   const imageRotate = useBreakpointValue({ base: "30deg", md: "45deg" });
//   const flexDirection = useBreakpointValue({ base: "column", md: "row" });
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   return (
//     <Box fontFamily="sans-serif" w="full" bg="white" overflowX="hidden">
  
//       {/* Hero Section */}
//  <VStack
//       px={{ base: 4, md: 10, lg: 24 }}
//       spacing={10}
//       pt={{ base: 8, md: 24 }}
//       pb={{ base: 16, md: 24 }}
//       textAlign="center"
//       position="relative"
//       minH="100vh"
//       justify="center"
//       backgroundImage={`url(${HeroBg})`}
//       bgPosition="center"
//       bgSize="cover"
//       bgRepeat="no-repeat"
//       overflow="hidden"
//       zIndex={1}
//     >
//       {/* White Glass Overlay */}
//   {/* Top Blur Overlay */}
// <Box
//   position="absolute"
//   top={0}
//   left={0}
//   right={0}
//   h="20%" // Top area only
//   backdropFilter="blur(6px)"

  
//   zIndex={0}
// />

// {/* Middle White Glass Overlay (Existing) */}
// <Box
//   position="absolute"
//   top={0}
//   left={0}
//   right={0}
//   bottom={0}
//   bg="rgba(255,255,255,0.8)"
//   backdropFilter="blur(4px)"
//   zIndex={0}
// />

// {/* Bottom Blue Overlay */}
// <Box
//   position="absolute"
//   bottom={0}
//   left={0}
//   right={0}
//   h="85%"
//   bgGradient="linear(to-t,rgb(255, 255, 255) 0%, transparent 100%)"
//   zIndex={0}
// />


//       {/* Animated Heading */}
//       <MotionBox
//         initial={{ opacity: 0, y: -60 }}
//         animate={{
//           opacity: showHeader ? 1 : 0,
//           y: showHeader ? 0 : -60,
//         }}
//         transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//         zIndex={1}
//       >
//         <Text
//           fontSize={{ base: "3rem", sm: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
//           fontWeight="550"
//           lineHeight="short"
//           color="black"
//           textShadow="2px 4px 8px rgba(0, 0, 0, 0.25)"
//         >
//           Know How You <br /> Succeed in Your Life?
//         </Text>
//       </MotionBox>

//       {/* Floating Image */}
//       <MotionBox
//         position="relative"
//         zIndex={2}
//         animate={{ y: [0, -15, 0] }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         maxW={{ base: "80%", md: "60%", lg: "50%" }}
        
//       >
//         <Image
//           src={img3}
//           alt="Floating App Mockup"
     
//           mx="auto"
//         />
//       </MotionBox>

//       {/* Download Buttons */}
//       <HStack
//   spacing={4}
//   zIndex={2}
//   flexWrap="wrap"
//   justify="center"
//   mt={{ base: 6, md: 8 }}
// >
//   <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//     <Button
//       leftIcon={<FaApple />}
//       size="md"
//       colorScheme='blue'
//       color="white"
//       fontWeight="medium"
//       borderRadius="full"
//       px={5}
//       py={5}
//       boxShadow="lg"
//     >
//       iOS Download
//     </Button>
//   </MotionBox>

//   <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//     <Button
//       leftIcon={<FaAndroid />}
//       size="md"
//       colorScheme='blue'
//       color="white"
//       fontWeight="medium"
//       borderRadius="full"
//       px={5}
//       py={5}
//       boxShadow="lg"
    
//     >
//       Android Download
//     </Button>
//   </MotionBox>
// </HStack>

//     </VStack>
    
//     <MotionBox
//   p={{ base: 4, sm: 6, md: 8, lg: 10 }}
//   bg="linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)"
//   minH="100vh"
//   borderRadius={{ base: "16px", sm: "24px", md: "40px" }}
//   mx={{ base: 2, sm: 4, md: 6, lg: 8 }}
//   my={{ base: 2, sm: 3, md: 4 }}
//   position="relative"
//   overflow="hidden"
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ duration: 0.8 }}
//   _before={{
//     content: '""',
//     position: "absolute",
//     top: "-50%",
//     left: "-50%",
//     width: "200%",
//     height: "200%",
//     background:
//       "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
//     animation: "rotate 20s linear infinite",
//   }}
//   sx={{
//     "@keyframes rotate": {
//       from: { transform: "rotate(0deg)" },
//       to: { transform: "rotate(360deg)" },
//     },
//   }}
// >
//   {/* Animated Gradient Background Elements */}
//   <Box
//     position="absolute"
//     top="0"
//     left="0"
//     w="100%"
//     h="100%"
//     opacity="0.3"
//     sx={{
//       backgroundImage: "radial-gradient(circle at 75% 30%, #0072ff22 0%, transparent 30%)",
//       animation: "pulse 15s ease infinite alternate",
//       "@keyframes pulse": {
//         "0%": { opacity: 0.2 },
//         "100%": { opacity: 0.4 }
//       }
//     }}
//   />

//   {/* Blurred Glow Circles */}
//   <MotionBox
//     position="absolute"
//     top={{ base: "5%", md: "10%" }}
//     right={{ base: "2%", md: "5%" }}
//     w={{ base: "80px", md: "100px", lg: "120px" }}
//     h={{ base: "80px", md: "100px", lg: "120px" }}
//     borderRadius="full"
//     bg="rgba(255, 215, 0, 0.1)"
//     filter="blur(40px)"
//     zIndex={0}
//     animate={{
//       scale: [1, 1.1, 1],
//       opacity: [0.8, 1, 0.8]
//     }}
//     transition={{
//       duration: 8,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }}
//   />
//   <MotionBox
//     position="absolute"
//     bottom={{ base: "10%", md: "15%" }}
//     left={{ base: "2%", md: "5%" }}
//     w={{ base: "120px", md: "150px", lg: "180px" }}
//     h={{ base: "120px", md: "150px", lg: "180px" }}
//     borderRadius="full"
//     bg="rgba(0, 191, 255, 0.1)"
//     filter="blur(50px)"
//     zIndex={0}
//     animate={{
//       scale: [1, 1.2, 1],
//       opacity: [0.7, 0.9, 0.7]
//     }}
//     transition={{
//       duration: 10,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }}
//   />

//   {/* Main Content */}
//   <MotionFlex
//     direction="column"
//     gap={{ base: 8, md: 2, lg: 2 }}
//     justify="center"
//     align="center"
//     position="relative"
//     zIndex={1}
//     initial={{ y: 20 }}
//     animate={{ y: 0 }}
//     transition={{ duration: 0.6 }}
//   >
//     {/* Hero Section */}
//     <MotionFlex
//       direction={{ base: "column", md: "row" }}
//       gap={{ base: 6, md: 12, lg: 16 }}
//       justify="space-between"
//       align="center"
//       textAlign={{ base: "center", md: "left" }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.2, duration: 0.8 }}
//       w="full"
//       maxW={{ base: "100%", lg: "90%", xl: "1200px" }}
//     >
//       <Box flex="1" px={{ base: 2, sm: 4, md: 0 }}>
//         <Heading
//           as="h2"
//           fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
//           fontWeight="extrabold"
//           lineHeight={{ base: "1.2", md: "1.1" }}
//           mb={{ base: 4, md: 6 }}
//           bgGradient="linear(to-r, #00c6ff, #0072ff)"
//           bgClip="text"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           Your Ultimate <Box as="span" color="white">WEWON</Box> Experience
//         </Heading>
//         <Text 
//           fontSize={{ base: "sm", sm: "md", lg: "lg" }} 
//           color="gray.300" 
//           maxW="600px" 
//           opacity="0.9"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.9 }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//         >
//           Redefining excellence with cutting-edge features for your motivated journey.
//         </Text>
//       </Box>

//       <Box flex="1" px={{ base: 2, sm: 4, md: 0 }}>
//         <Text 
//           fontSize={{ base: "sm", sm: "md", lg: "lg" }} 
//           color="gray.300" 
//           maxW="600px" 
//           opacity="0.9"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.9 }}
//           transition={{ delay: 0.7, duration: 0.6 }}
//         >
//           Our <Box as="span" fontWeight="bold" color="white">proprietary technology</Box> and
//           <Box as="span" fontWeight="bold" color="white"> sleek interface</Box> work in harmony
//           to deliver unparalleled performance.
//         </Text>
//       </Box>
//     </MotionFlex>

//     {/* Features Section */}
//     <MotionFlex
//       direction="column"
//       gap={{ base: 8, md: 12 }}
//       justify="center"
//       align="center"
//       w="full"
//       maxW={{ base: "100%", lg: "90%", xl: "1200px" }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.4, duration: 0.8 }}
//     >
//       <Flex
//         gap={{ base: 4, md: 2 }}
//         flexWrap="wrap"
//         justify="center"
//         mt={{ base: 4, md: 8, lg: 12 }}
//         border="1px dashed"
//         borderColor="rgba(255,255,255,0.1)"
//         p={{ base: 3, md: 2 }}
//         borderRadius={{ base: "xl", md: "2xl" }}
//         w="full"
//         backdropFilter="blur(8px)"
//         bg="rgba(15, 15, 15, 0.3)"
//         _hover={{
//           borderColor: "rgba(255,255,255,0.2)",
//           boxShadow: "0 0 30px rgba(0, 194, 255, 0.1)"
//         }}
//         transition="all 0.4s ease"
//       >
//         {/* Smart Alerts Card */}
//         <MotionBox
//           w={{ base: "100%", sm: "80%", md: "45%", lg: "48%" }}
//           p={{ base: 4, md: 6 }}
//           borderRadius="2xl"
//           bg="rgba(20, 20, 20, 0.6)"
//           boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
//           border="1px solid"
//           borderColor="rgba(255,255,255,0.05)"
//           color="white"
//           whileHover={{ 
//             scale: 1.03,
//             boxShadow: "0 10px 40px rgba(0, 194, 255, 0.2)",
//             borderColor: "rgba(0, 194, 255, 0.3)"
//           }}
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//         >
//           <VStack align="flex-start" spacing={{ base: 3, md: 4 }}>
//             <Box
//               w={{ base: "full", sm: "full", md: "250px" }}
//               h={{ base: "120px", sm: "150px", md: "250px" }}
//               borderRadius="xl"
//               overflow="hidden"
//               position="relative"
//               _hover={{
//                 "img": {
//                   transform: "scale(1.1)"
//                 }
//               }}
//             >
//               <Image
//                 src={img2}
//                 alt="Smart Alerts"
//                 objectFit="cover"
//                 w="full"
//                 h="full"
//                 transition="transform 0.5s ease"
//                 transform="skew(22deg) scale(1.05)"
//                 sx={{
//                   "&": {
//                     transformOrigin: "center center"
//                   }
//                 }}
//               />
//               <Box
//                 position="absolute"
//                 inset="0"
//                 bg="linear-gradient(45deg, rgba(0,198,255,0.1) 0%, transparent 70%)"
//               />
//             </Box>
//             <HStack spacing={3}>
//               <Icon as={HiOutlineBellAlert} w={5} h={5} color="#00c6ff" />
//               <Heading size={{ base: "sm", md: "md" }}>Smart Alerts</Heading>
//             </HStack>
//             <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.300">
//               AI-powered notifications that adapt to your routines and priorities with intelligent 
//               machine learning algorithms for maximum relevance.
//             </Text>
//           </VStack>
//         </MotionBox>

//         {/* Seamless Sharing Card */}
//         <MotionBox
//           w={{ base: "100%", sm: "80%", md: "45%", lg: "48%" }}
//           p={{ base: 4, md: 6 }}
//           borderRadius="2xl"
//           bg="rgba(20, 20, 20, 0.6)"
//           boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
//           border="1px solid"
//           borderColor="rgba(255,255,255,0.05)"
//           color="white"
//           whileHover={{ 
//             scale: 1.03,
//             boxShadow: "0 10px 40px rgba(255, 215, 0, 0.1)",
//             borderColor: "rgba(255, 215, 0, 0.2)"
//           }}
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//         >
//           <VStack align="flex-start" spacing={{ base: 3, md: 4 }}>
//           <Box
//   w="full"
//   h={{ base: "120px", sm: "150px", md: "300px" }}
//   borderRadius="xl"
//   overflow="hidden"
//   position="relative"
// >
//   {/* Centered Image */}
//   <Flex
//     w="full"
//     h="full"
//     justify="center"
//     align="center"
//     position="relative"
//     zIndex="1"
//   >
//     <Image
//       src={img1}
//       alt="Seamless Sharing"
//       objectFit="contain"
//       w={{ base: "80px", sm: "100px", md: "150px" }}
//       h={{ base: "80px", sm: "100px", md: "150px" }}
//       transform="rotate(4deg) scale(1.05)"
//       transition="transform 0.5s ease"
//     />
//   </Flex>

//   {/* Gradient Overlay */}
//   <Box
//     position="absolute"
//     inset="0"
//     bg="linear-gradient(45deg, rgba(0, 30, 255, 0.1) 0%, transparent 70%)"
//     zIndex="0"
//   />
// </Box>

//             <HStack spacing={3}>
//               <Icon as={FaPaperPlane} w={5} h={5} color="#FFD700" />
//               <Heading size={{ base: "sm", md: "md" }}>Seamless Sharing</Heading>
//             </HStack>
//             <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.300">
//               Instant connectivity with elegant transitions and effortless control across all 
//               your devices with end-to-end encryption for maximum security.
//             </Text>
//           </VStack>
//         </MotionBox>
//       </Flex>
//     </MotionFlex>
//   </MotionFlex>
// </MotionBox>

//     <Box 
//   position="relative" 
//   overflow="hidden" 
//   borderRadius="40px" 
//   bg="white"
//   boxShadow="xl"
//   transition="all 0.3s ease"
//   _hover={{ transform: "translateY(-4px)", boxShadow: "2xl" }}
// >
//   {/* Gradient Overlay + Background Image */}
//   <Box
//     position="absolute"
//     inset="0"
//     backgroundImage={`
//       linear-gradient(to bottom, 
//         rgba(255,255,255,0.9) 0%, 
//         rgba(255,255,255,0.7) 15%,
//         transparent 30%,
//         transparent 100%),
//       url(${bgBottom})
//     `}
//     backgroundSize="cover"
//     backgroundPosition="center"
//     backgroundRepeat="no-repeat"
//     opacity={0.15}
//     zIndex="1"
//     borderBottomRadius="40px"
//   />

//   {/* Subtle Animated Dots Decoration */}
//   <Box
//     position="absolute"
//     top="20%"
//     right="5%"
//     w="100px"
//     h="100px"
//     bgImage="radial-gradient(circle, rgba(0,0,0,0.05) 2px, transparent 2px)"
//     bgSize="20px 20px"
//     opacity="0.6"
//     zIndex="1"
//     animation="float 6s ease-in-out infinite"
//   />

//   {/* Main Content */}
//   <Box 
//     position="relative" 
//     zIndex="2"
//     px={{ base: 6, md: "10rem" }}
//     py={{ base: 12, md: 20 }}
//   >
//     <Flex
//       direction={{ base: "column", lg: "row" }}
//       align="center"
//       justify="space-between"
//       gap={{ base: 10, md: 16 }}
//     >
//       {/* Text Section */}
//       <Box flex="1" maxW={{ md: "55%" }}>
//         <Heading
//           as="h1"
//           fontSize={{ base: "3xl", md: "5xl" }}
//           fontWeight="semibold"
//           lineHeight="1.2"
//           bgGradient="linear(to-r, #4F3DFE, #25A4FF)"
//           bgClip="text"
//           mb={6}
//         >
//           Create Space in Your Life,<br />
//           <Text as="span" color="gray.800">Just 2 Minutes</Text>
//         </Heading>
        
//         <Text 
//           fontSize={{ base: "lg", md: "xl" }}
//           color="gray.600"
//           mb={8}
//           pr={{ md: 8 }}
//         >
//           Invest two minutes daily to cultivate mindfulness and transform your routine into something extraordinary.
//         </Text>

    
//       </Box>

//       {/* Visual Element */}
//       <Box 
//       flex="1.2" 
//       maxW={{ md: "800px" }}
//       position="relative"
//     >
//       <Box
//         position="relative"
//         bgGradient="linear(to-br, #f5f7ff, #e8ecff)"
//         borderRadius="2xl"
//         p={1}
//         boxShadow="0 20px 50px -10px rgba(79, 61, 254, 0.2)"
//         transform="rotate(-2deg)"
//         _hover={{ transform: "rotate(0deg)" }}
//         transition="all 0.4s cubic-bezier(0.68,-0.6,0.32,1.6)"
//       >
//         <Box
//           bg="black"
//           borderRadius="xl"
//           p={8}
//           overflow="hidden"
//           position="relative"
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           minHeight="400px"
//         >
//           {/* Shine Effect */}
//           <Box
//             position="absolute"
//             top="-50%"
//             left="-50%"
//             w="200%"
//             h="200%"
//             bgGradient="linear(to bottom right, transparent 45%, rgba(255,255,255,0.15) 50%, transparent 55%)"
//             transform="rotate(30deg)"
//             animation="shine 3s infinite"
//           />
          
//           {/* Centered W Image with Blue Background */}
//           <Box
//             bg="rgb(84, 116, 253)" 
//             borderRadius="xl"
//             p={8}
//             boxShadow="0 0 30px rgba(78, 108, 255, 0.6)"
//             position="relative"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             width="300px"
//             height="300px"
//             filter="drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))"

//           >
//             <Image
//               src={wFour}
//               alt="Mindfulness Logo"
//               borderRadius="lg"
//               width="100%"
//               objectFit="contain"
//             />
//           </Box>
//         </Box>
//       </Box>
//       </Box>
//       {/* <Box 
//         flex="1.2" 
//         maxW={{ md: "800px" }}
//         position="relative"
//       >
//         <Box
//           position="relative"
//           bgGradient="linear(to-br, #f5f7ff, #e8ecff)"
//           borderRadius="2xl"
//           p={1}
//           boxShadow="0 20px 50px -10px rgba(79, 61, 254, 0.2)"
//           transform="rotate(-2deg)"
//           _hover={{ transform: "rotate(0deg)" }}
//           transition="all 0.4s cubic-bezier(0.68,-0.6,0.32,1.6)"
//         >
//           <Box
//             bg="black"
//             borderRadius="xl"
//             p={8}
//             overflow="hidden"
//             position="relative"
//           >
//             <Box
//               position="absolute"
//               top="-50%"
//               left="-50%"
//               w="200%"
//               h="200%"
//               bgGradient="linear(to bottom right, transparent 45%, rgba(255,255,255,0.15) 50%, transparent 55%)"
//               transform="rotate(30deg)"
//               animation="shine 3s infinite"
//             />
//               <Box
//     bg="rgb(84, 116, 253)" 
//     borderRadius="xl"
//     p={8}
//     boxShadow="0 0 30px rgba(78, 108, 255, 0.6)"
//     position="relative"
//     display="flex"
//     alignItems="center"
//     justifyContent="center"
//     width="300px"
//     height="300px"
//   >
//             <Image
//               src={wFour}
//               alt="Mindfulness Logo"
//               borderRadius="lg"
//               width="100%"
//               objectFit="contain"
//             />
//             </Box>
//           </Box>
//         </Box>

//         <Box
//           position="absolute"
//           bottom="-20px"
//           left="-20px"
//           w="80px"
//           h="80px"
//           bg="blue.100"
//           borderRadius="full"
//           opacity="0.6"
//           filter="blur(20px)"
//           zIndex="-1"
//         />
//       </Box> */}
//     </Flex>

//     <Box 
//       textAlign="center" 
//       mt={{ base: 16, md: 24 }}
//       position="relative"
//     >
//       <Text
//         fontSize={{ base: "lg", md: "2.5rem" }}
//         fontWeight="550"
//         color="gray.700"
//         maxW="2xl"
//         mx="auto"
//         px={4}
//         position="relative"
//         display="inline-block"
//         _before={{
//           content: '""',
//           position: "absolute",
//           left: 0,
//           top: "50%",
//           w: "20%",
         
//           bg: "linear-gradient(to right, transparent, gray.300)",
//           display: { base: "none", md: "block" }
//         }}
//         _after={{
//           content: '""',
//           position: "absolute",
//           right: 0,
//           top: "50%",
//           w: "20%",
         
//           bg: "linear-gradient(to left, transparent, gray.300)",
//           display: { base: "none", md: "block" }
//         }}
//       >
//         Stay motivated in your life and <br/> feel motivated in your life
//       </Text>
//     </Box>
//   </Box>

//   <style jsx global>{`
//     @keyframes float {
//       0%, 100% { transform: translateY(0) rotate(0deg); }
//       50% { transform: translateY(-20px) rotate(2deg); }
//     }
//     @keyframes shine {
//       0% { left: -50%; }
//       100% { left: 150%; }
//     }
//   `}</style>
// </Box>

   

//     </Box>
//   );
// };

// export default App;









import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Button,
  VStack,
  Image,
  HStack,
  Input,
  Icon,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
  Center,
  Heading,
  Flex,
  IconButton,
  useColorModeValue,
  ButtonGroup,
  useMediaQuery
} from '@chakra-ui/react';
import { HiOutlineBellAlert, HiOutlineChartBar } from "react-icons/hi2";
import { FaChartLine, FaDownload, FaPaperPlane } from "react-icons/fa";
import { FaApple, FaAndroid, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../../../assets/media/wTwo.png"
import img2 from "../../../assets/media/mTwo.png"
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { IoMdSend } from 'react-icons/io';
import bgBottom from "../../../assets/media/bottombg.png"
import wFour from "../../../assets/media/wOne.png"
import HeroBg from "../../../assets/media/heroBg.jpg"
import mImg from "../../../assets/media/mImg.png"
import img3 from "../../../assets/media/mImg2.png"

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Home = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [imagePosition, setImagePosition] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > imagePosition) {
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    const imageElement = document.querySelector('img[alt="Phone App"]');
    if (imageElement) {
      const rect = imageElement.getBoundingClientRect();
      setImagePosition(rect.bottom + window.scrollY);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, imagePosition]);

  // Responsive values
  const headingSizes = {
    base: "2rem",
    sm: "2.5rem",
    md: "3rem",
    lg: "4rem",
    xl: "5rem"
  };

  const textSizes = {
    base: "sm",
    md: "md",
    lg: "lg"
  };

  const buttonSizes = {
    base: "sm",
    md: "md"
  };

  const paddingValues = {
    base: 4,
    sm: 6,
    md: 8,
    lg: 10,
    xl: 12
  };

  return (
    <Box fontFamily="sans-serif" w="full" bg="white" overflowX="hidden">
      {/* Hero Section */}
      <VStack
        px={paddingValues}
        spacing={{ base: 6, md: 10 }}
        pt={{ base: 8, md: 24 }}
        pb={{ base: 16, md: 24 }}
        textAlign="center"
        position="relative"
        minH={{ base: "90vh", md: "100vh" }}
        justify="center"
        backgroundImage={`url(${HeroBg})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex={1}
      >
        {/* Overlay Elements */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          h="20%"
          backdropFilter="blur(6px)"
          zIndex={0}
        />

        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(255,255,255,0.8)"
          backdropFilter="blur(4px)"
          zIndex={0}
        />

        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h="85%"
          bgGradient="linear(to-t,rgb(255, 255, 255) 0%, transparent 100%)"
          zIndex={0}
        />

        {/* Animated Heading */}
        <MotionBox
          initial={{ opacity: 0, y: -60 }}
          animate={{
            opacity: showHeader ? 1 : 0,
            y: showHeader ? 0 : -60,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          zIndex={1}
          w="full"
          px={paddingValues}
        >
          <Heading
            fontSize={headingSizes}
            fontWeight="550"
            lineHeight="short"
            color="black"
            textShadow="2px 4px 8px rgba(0, 0, 0, 0.25)"
          >
            Know How You <br /> Succeed in Your Life?
          </Heading>
        </MotionBox>

        {/* Floating Image */}
        <MotionBox
          position="relative"
          zIndex={2}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          maxW={{ base: "90%", sm: "80%", md: "60%", lg: "50%" }}
        >
          <Image
            src={img3}
            alt="Floating App Mockup"
            mx="auto"
            w="full"
            h="auto"
            loading="lazy"
          />
        </MotionBox>

        {/* Download Buttons */}
        <HStack
          spacing={4}
          zIndex={2}
          flexWrap="wrap"
          justify="center"
          mt={{ base: 6, md: 8 }}
          w="full"
          px={paddingValues}
        >
          <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              leftIcon={<FaApple />}
              size={buttonSizes}
              colorScheme='blue'
              color="white"
              fontWeight="medium"
              borderRadius="full"
              px={{ base: 4, md: 5 }}
              py={{ base: 4, md: 5 }}
              boxShadow="lg"
            >
              iOS Download
            </Button>
          </MotionBox>

          <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              leftIcon={<FaAndroid />}
              size={buttonSizes}
              colorScheme='blue'
              color="white"
              fontWeight="medium"
              borderRadius="full"
              px={{ base: 4, md: 5 }}
              py={{ base: 4, md: 5 }}
              boxShadow="lg"
            >
              Android Download
            </Button>
          </MotionBox>
        </HStack>
      </VStack>
    
      {/* Feature Section */}
      <MotionBox
        p={paddingValues}
        bg="linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)"
        minH={{ base: "auto", md: "100vh" }}
        borderRadius={{ base: "16px", sm: "24px", md: "40px" }}
        mx={{ base: 2, sm: 4, md: 6, lg: 8 }}
        my={{ base: 2, sm: 3, md: 4 }}
        position="relative"
        overflow="hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        _before={{
          content: '""',
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          animation: "rotate 20s linear infinite",
        }}
        sx={{
          "@keyframes rotate": {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
          },
        }}
      >
        {/* Background Elements */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          opacity="0.3"
          sx={{
            backgroundImage: "radial-gradient(circle at 75% 30%, #0072ff22 0%, transparent 30%)",
            animation: "pulse 15s ease infinite alternate",
            "@keyframes pulse": {
              "0%": { opacity: 0.2 },
              "100%": { opacity: 0.4 }
            }
          }}
        />

        {/* Glow Effects */}
        <MotionBox
          position="absolute"
          top={{ base: "5%", md: "10%" }}
          right={{ base: "2%", md: "5%" }}
          w={{ base: "80px", md: "100px", lg: "120px" }}
          h={{ base: "80px", md: "100px", lg: "120px" }}
          borderRadius="full"
          bg="rgba(255, 215, 0, 0.1)"
          filter="blur(40px)"
          zIndex={0}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <MotionBox
          position="absolute"
          bottom={{ base: "10%", md: "15%" }}
          left={{ base: "2%", md: "5%" }}
          w={{ base: "120px", md: "150px", lg: "180px" }}
          h={{ base: "120px", md: "150px", lg: "180px" }}
          borderRadius="full"
          bg="rgba(0, 191, 255, 0.1)"
          filter="blur(50px)"
          zIndex={0}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Main Content */}
        <MotionFlex
          direction="column"
          gap={{ base: 8, md: 12 }}
          justify="center"
          align="center"
          position="relative"
          zIndex={1}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Text */}
          <MotionFlex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 6, md: 12, lg: 16 }}
            justify="space-between"
            align="center"
            textAlign={{ base: "center", md: "left" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            w="full"
            maxW={{ base: "100%", lg: "90%", xl: "1200px" }}
          >
            <Box flex="1" px={{ base: 2, sm: 4, md: 0 }}>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="extrabold"
                lineHeight={{ base: "1.2", md: "1.1" }}
                mb={{ base: 4, md: 6 }}
                bgGradient="linear(to-r, #00c6ff, #0072ff)"
                bgClip="text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Your Ultimate <Box as="span" color="white">WEWON</Box> Experience
              </Heading>
              <Text 
                fontSize={textSizes} 
                color="gray.300" 
                maxW="600px" 
                opacity="0.9"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Redefining excellence with cutting-edge features for your motivated journey.
              </Text>
            </Box>

            <Box flex="1" px={{ base: 2, sm: 4, md: 0 }}>
              <Text 
                fontSize={textSizes} 
                color="gray.300" 
                maxW="600px" 
                opacity="0.9"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Our <Box as="span" fontWeight="bold" color="white">proprietary technology</Box> and
                <Box as="span" fontWeight="bold" color="white"> sleek interface</Box> work in harmony
                to deliver unparalleled performance.
              </Text>
            </Box>
          </MotionFlex>

          {/* Features Cards */}
          <MotionFlex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 6, md: 8 }}
            justify="center"
            align="center"
            w="full"
            maxW={{ base: "100%", lg: "90%", xl: "1200px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Smart Alerts Card */}
            <MotionBox
              w={{ base: "100%", md: "48%" }}
              p={{ base: 4, md: 6 }}
              borderRadius="2xl"
              bg="rgba(20, 20, 20, 0.6)"
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
              border="1px solid"
              borderColor="rgba(255,255,255,0.05)"
              color="white"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 40px rgba(0, 194, 255, 0.2)",
                borderColor: "rgba(0, 194, 255, 0.3)"
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <VStack align="flex-start" spacing={{ base: 3, md: 4 }}>
                <Box
                  w="full"
                  h={{ base: "180px", sm: "200px", md: "250px" }}
                  borderRadius="xl"
                  overflow="hidden"
                  position="relative"
                  _hover={{
                    "img": {
                      transform: "scale(1.1)"
                    }
                  }}
                >
                  <Image
                    src={img2}
                    alt="Smart Alerts"
                    objectFit="cover"
                    w="full"
                    h="full"
                    transition="transform 0.5s ease"
                    transform="skew(22deg) scale(1.05)"
                    sx={{
                      "&": {
                        transformOrigin: "center center"
                      }
                    }}
                    loading="lazy"
                  />
                  <Box
                    position="absolute"
                    inset="0"
                    bg="linear-gradient(45deg, rgba(0,198,255,0.1) 0%, transparent 70%)"
                  />
                </Box>
                <HStack spacing={3}>
                  <Icon as={HiOutlineBellAlert} w={5} h={5} color="#00c6ff" />
                  <Heading size={{ base: "sm", md: "md" }}>Smart Alerts</Heading>
                </HStack>
                <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.300">
                  AI-powered notifications that adapt to your routines and priorities with intelligent 
                  machine learning algorithms for maximum relevance.
                </Text>
              </VStack>
            </MotionBox>

            {/* Seamless Sharing Card */}
            <MotionBox
              w={{ base: "100%", md: "48%" }}
              p={{ base: 4, md: 6 }}
              borderRadius="2xl"
              bg="rgba(20, 20, 20, 0.6)"
              boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
              border="1px solid"
              borderColor="rgba(255,255,255,0.05)"
              color="white"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 40px rgba(255, 215, 0, 0.1)",
                borderColor: "rgba(255, 215, 0, 0.2)"
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <VStack align="flex-start" spacing={{ base: 3, md: 4 }}>
                <Box
                  w="full"
                  h={{ base: "180px", sm: "200px", md: "250px" }}
                  borderRadius="xl"
                  overflow="hidden"
                  position="relative"
                >
                  <Flex
                    w="full"
                    h="full"
                    justify="center"
                    align="center"
                    position="relative"
                    zIndex="1"
                  >
                    <Image
                      src={img1}
                      alt="Seamless Sharing"
                      objectFit="contain"
                      w={{ base: "120px", sm: "150px", md: "180px" }}
                      h={{ base: "120px", sm: "150px", md: "180px" }}
                      transform="rotate(4deg) scale(1.05)"
                      transition="transform 0.5s ease"
                      loading="lazy"
                    />
                  </Flex>
                  <Box
                    position="absolute"
                    inset="0"
                    bg="linear-gradient(45deg, rgba(0, 30, 255, 0.1) 0%, transparent 70%)"
                    zIndex="0"
                  />
                </Box>
                <HStack spacing={3}>
                  <Icon as={FaPaperPlane} w={5} h={5} color="#FFD700" />
                  <Heading size={{ base: "sm", md: "md" }}>Seamless Sharing</Heading>
                </HStack>
                <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.300">
                  Instant connectivity with elegant transitions and effortless control across all 
                  your devices with end-to-end encryption for maximum security.
                </Text>
              </VStack>
            </MotionBox>
          </MotionFlex>
        </MotionFlex>
      </MotionBox>

      {/* Bottom Section */}
      <Box 
        position="relative" 
        overflow="hidden" 
        borderRadius={{ base: "24px", md: "40px" }}
        bg="white"
        boxShadow="xl"
        transition="all 0.3s ease"
        _hover={{ transform: "translateY(-4px)", boxShadow: "2xl" }}
        mx={{ base: 2, md: 6 }}
        my={{ base: 4, md: 6 }}
      >
        {/* Gradient Overlay + Background Image */}
        <Box
          position="absolute"
          inset="0"
          backgroundImage={`
            linear-gradient(to bottom, 
              rgba(255,255,255,0.9) 0%, 
              rgba(255,255,255,0.7) 15%,
              transparent 30%,
              transparent 100%),
            url(${bgBottom})
          `}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          opacity={0.15}
          zIndex="1"
          borderBottomRadius={{ base: "24px", md: "40px" }}
        />

        {/* Decorative Elements */}
        <Box
          position="absolute"
          top="20%"
          right="5%"
          w={{ base: "60px", md: "100px" }}
          h={{ base: "60px", md: "100px" }}
          bgImage="radial-gradient(circle, rgba(0,0,0,0.05) 2px, transparent 2px)"
          bgSize="20px 20px"
          opacity="0.6"
          zIndex="1"
          animation="float 6s ease-in-out infinite"
        />

        {/* Main Content */}
        <Box 
          position="relative" 
          zIndex="2"
          px={{ base: 6, md: 16, lg: "10rem" }}
          py={{ base: 12, md: 20 }}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 10, md: 16 }}
          >
            {/* Text Section */}
            <Box flex="1" maxW={{ md: "55%" }} order={{ base: 1, lg: 0 }}>
              <Heading
                as="h1"
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="semibold"
                lineHeight="1.2"
                bgGradient="linear(to-r, #4F3DFE, #25A4FF)"
                bgClip="text"
                mb={6}
              >
                Create Space in Your Life,<br />
                <Text as="span" color="gray.800">Just 2 Minutes</Text>
              </Heading>
              
              <Text 
                fontSize={textSizes}
                color="gray.600"
                mb={8}
                pr={{ md: 8 }}
              >
                Invest two minutes daily to cultivate mindfulness and transform your routine into something extraordinary.
              </Text>
            </Box>

            {/* Visual Element */}
            <Box 
              flex="1.2" 
              maxW={{ md: "800px" }}
              position="relative"
              order={{ base: 0, lg: 1 }}
              mb={{ base: 8, lg: 0 }}
            >
              <Box
                position="relative"
                bgGradient="linear(to-br, #f5f7ff, #e8ecff)"
                borderRadius="2xl"
                p={1}
                boxShadow="0 20px 50px -10px rgba(79, 61, 254, 0.2)"
                transform="rotate(-2deg)"
                _hover={{ transform: "rotate(0deg)" }}
                transition="all 0.4s cubic-bezier(0.68,-0.6,0.32,1.6)"
              >
                <Box
                  bg="black"
                  borderRadius="xl"
                  p={{ base: 4, md: 8 }}
                  overflow="hidden"
                  position="relative"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  minHeight={{ base: "300px", md: "400px" }}
                >
                  {/* Shine Effect */}
                  <Box
                    position="absolute"
                    top="-50%"
                    left="-50%"
                    w="200%"
                    h="200%"
                    bgGradient="linear(to bottom right, transparent 45%, rgba(255,255,255,0.15) 50%, transparent 55%)"
                    transform="rotate(30deg)"
                    animation="shine 3s infinite"
                  />
                  
                  {/* Centered W Image with Blue Background */}
                  <Box
                    bg="rgb(84, 116, 253)" 
                    borderRadius="xl"
                    p={{ base: 4, md: 8 }}
                    boxShadow="0 0 30px rgba(78, 108, 255, 0.6)"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width={{ base: "200px", md: "300px" }}
                    height={{ base: "200px", md: "300px" }}
                    filter="drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))"
                  >
                    <Image
                      src={wFour}
                      alt="Mindfulness Logo"
                      borderRadius="lg"
                      width="100%"
                      objectFit="contain"
                      loading="lazy"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Flex>

          <Box 
            textAlign="center" 
            mt={{ base: 12, md: 16, lg: 24 }}
            position="relative"
          >
            <Text
              fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "2.5rem" }}
              fontWeight="550"
              color="gray.700"
              maxW="2xl"
              mx="auto"
              px={4}
              position="relative"
              display="inline-block"
            >
              Stay motivated in your life and <br/> feel motivated in your life
            </Text>
          </Box>
        </Box>

        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          @keyframes shine {
            0% { left: -50%; }
            100% { left: 150%; }
          }
        `}</style>
      </Box>
    </Box>
  );
};

export default Home;