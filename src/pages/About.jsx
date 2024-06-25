import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
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
        <Heading as="h2" size="xl" mb={4}>About Us</Heading>
        <Text fontSize="lg" mb={8}>We are a dedicated team of professionals committed to helping small local businesses establish their online presence. Our mission is to create beautiful and functional websites and online stores that meet the unique needs of each client.</Text>
        <Heading as="h3" size="lg" mb={4}>Our Team</Heading>
        <VStack spacing={8} align="start">
          <Box>
            <Heading as="h4" size="md" mb={2}>John Doe - CEO</Heading>
            <Text fontSize="md">John is the visionary behind our company, with over 20 years of experience in the tech industry.</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md" mb={2}>Jane Smith - Lead Developer</Heading>
            <Text fontSize="md">Jane is our lead developer, specializing in front-end development and user experience design.</Text>
          </Box>
          <Box>
            <Heading as="h4" size="md" mb={2}>Emily Johnson - Project Manager</Heading>
            <Text fontSize="md">Emily ensures that all projects are completed on time and to the highest standards.</Text>
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

export default About;