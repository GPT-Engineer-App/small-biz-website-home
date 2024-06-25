import { Box, Button, Container, Flex, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import '../styles/styles.css';

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box as="header" bg="blue.700" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">Business Name</Heading>
          <HStack spacing={8}>
            <Link href="#home" color="white">Home</Link>
            <Link href="#services" color="white">Services</Link>
            <Link href="#about" color="white">About Us</Link>
            <Link href="#contact" color="white">Contact</Link>
            <Link href="#coming-soon" color="white">Coming Soon</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Section */}
      <Box as="main" py={16} px={8} textAlign="center" className="hero">
        <Image src="/path/to/hero-image.jpg" alt="Hero Image" mx="auto" mb={8} />
        <Heading as="h2" size="xl" mb={4}>Welcome to Our Business</Heading>
        <Text fontSize="lg" mb={8}>We create websites and online stores for small local businesses. Let us help you establish your online presence.</Text>
        <Button colorScheme="blue" size="lg">Get Started</Button>
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

export default Index;