import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, Input, Textarea, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import '../styles/styles.css';

const Contact = () => {
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
        <Heading as="h2" size="xl" mb={4}>Contact Us</Heading>
        <VStack spacing={8} align="start" mx="auto" maxW="lg">
          <Box w="100%" className="contact-form">
            <Heading as="h3" size="lg" mb={2}>Get in Touch</Heading>
            <form>
              <VStack spacing={4}>
                <Input placeholder="Name" size="md" />
                <Input placeholder="Email" size="md" />
                <Textarea placeholder="Message" size="md" />
                <Button colorScheme="blue" size="md" type="submit">Send Message</Button>
              </VStack>
            </form>
          </Box>
          <Box w="100%">
            <Heading as="h3" size="lg" mb={2}>Contact Information</Heading>
            <Text fontSize="md">Email: info@business.com</Text>
            <Text fontSize="md">Phone: +123 456 7890</Text>
            <Text fontSize="md">Address: 123 Business St, Business City, BC 12345</Text>
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

export default Contact;