import { Box, Container, Flex, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        {/* Top News Section */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Top News</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 1</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 2</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
              </Box>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.100">
          <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h3" size="md">Market Index 1</Heading>
              <Text mt={2}>Value: 12345.67</Text>
              <Text>Change: +123.45 (+1.23%)</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h3" size="md">Market Index 2</Heading>
              <Text mt={2}>Value: 12345.67</Text>
              <Text>Change: +123.45 (+1.23%)</Text>
            </Box>
          </VStack>
          <Heading as="h2" size="lg" mt={8} mb={4}>Trending Topics</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Text>Trending Topic 1</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Text>Trending Topic 2</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;