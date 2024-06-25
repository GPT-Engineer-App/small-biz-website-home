import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box as="header" bg="blue.700" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">Business Name</Heading>
          <HStack spacing={8}>
            <Link href="/" color="white">Home</Link>
            <Link href="/services" color="white">Services</Link>
            <Link href="/about" color="white">About Us</Link>
            <Link href="/contact" color="white">Contact</Link>
            <Link href="/coming-soon" color="white">Coming Soon</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Section */}
      <Box as="main" py={16} px={8} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Coming Soon</Heading>
        <Text fontSize="lg" mb={8}>We are excited to announce that we will be offering new services soon. Stay tuned for updates on our app development and business consultancy services.</Text>
        <VStack spacing={8} align="start">
          <Box>
            <Heading as="h3" size="lg" mb={2}>App Development</Heading>
            <Text fontSize="md">We will soon offer mobile app development services to help you reach your customers on their favorite devices.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>Business Consultancy</Heading>
            <Text fontSize="md">Our experts will provide consultancy services to help your business grow and succeed.</Text>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={8} mt={16}>
        <VStack spacing={4}>
          <Text>Contact us: info@business.com | +123 456 7890</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
            <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
            <Link href="https://instagram.com" isExternal><FaInstagram size="24px" /></Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default ComingSoon;